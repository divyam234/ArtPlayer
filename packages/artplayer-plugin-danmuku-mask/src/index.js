import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';

export default function artplayerPluginDanmukuMask(option = {}) {
    return (art) => {
        const {
            template: { $player, $video, $danmuku },
        } = art;

        let segmenter = null;
        let canvas = null;
        let ctx = null;
        let animationFrameId = null;
        let isInitialized = false;

        async function initTensorFlow() {
            try {
                await tf.setBackend('webgl');
            } catch (e) {
                console.warn('WebGL backend not available, falling back to CPU');
                await tf.setBackend('cpu');
            }
        }

        async function initSegmenter() {
            await initTensorFlow();
            const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;

            const segmenterConfig = {
                runtime: 'mediapipe',
                modelType: 'general',
                solutionPath: option.solutionPath || 'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation',
                modelSelection: option.modelSelection || 1,
                smoothSegmentation: option.smoothSegmentation !== undefined ? option.smoothSegmentation : true,
                minDetectionConfidence: option.minDetectionConfidence || 0.5,
                minTrackingConfidence: option.minTrackingConfidence || 0.5,
                selfieMode: option.selfieMode || false,
            };

            try {
                segmenter = await bodySegmentation.createSegmenter(model, segmenterConfig);
                $danmuku.style.maskMode = 'alpha';
                isInitialized = true;
            } catch (error) {
                console.error('Error initializing segmenter:', error);
                isInitialized = false;
            }
        }

        function createCanvas() {
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            Object.assign(canvas.style, {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: '0',
            });
            $player.appendChild(canvas);
        }

        function makeWhiteTransparent(imageData) {
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] > 250 && data[i + 1] > 250 && data[i + 2] > 250) {
                    data[i + 3] = 0;
                }
            }
            return imageData;
        }

        async function segmentBody() {
            if (!isInitialized || $video.paused || $video.ended) {
                animationFrameId = requestAnimationFrame(segmentBody);
                return;
            }

            try {
                canvas.width = $video.videoWidth;
                canvas.height = $video.videoHeight;

                const segmentation = await segmenter.segmentPeople($video);

                if (!segmentation || segmentation.length === 0) {
                    animationFrameId = requestAnimationFrame(segmentBody);
                    return;
                }

                const foregroundThreshold = option.foregroundThreshold || 0.6;

                const mask = await bodySegmentation.toBinaryMask(
                    segmentation,
                    { r: 255, g: 255, b: 255, a: 255 },
                    { r: 0, g: 0, b: 0, a: 255 },
                    false,
                    foregroundThreshold,
                );

                await bodySegmentation.drawMask(canvas, $video, mask, 1, 1);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                ctx.putImageData(makeWhiteTransparent(imageData), 0, 0);
                $danmuku.style.maskImage = `url(${canvas.toDataURL()})`;
            } catch (error) {
                console.error('Error in segmentBody:', error);
            }

            animationFrameId = requestAnimationFrame(segmentBody);
        }

        async function startSegmentation() {
            if (!isInitialized) {
                await initSegmenter();
            }
            if (!canvas) {
                createCanvas();
            }
            segmentBody();
        }

        function stopSegmentation() {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        }

        art.on('ready', startSegmentation);
        art.on('destroy', stopSegmentation);

        return {
            name: 'artplayerPluginDanmukuMask',
            start: startSegmentation,
            stop: stopSegmentation,
        };
    };
}

if (typeof window !== 'undefined') {
    window['artplayerPluginDanmukuMask'] = artplayerPluginDanmukuMask;
}
