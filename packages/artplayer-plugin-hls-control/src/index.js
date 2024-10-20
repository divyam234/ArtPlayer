import $quality from 'bundle-text:./quality.svg';
import $audio from 'bundle-text:./audio.svg';

function uniqBy(array, property) {
    const seen = new Map();
    return array.filter((item) => {
        const key = item[property];
        if (key === undefined) {
            return true;
        }
        return !seen.has(key) && seen.set(key, 1);
    });
}

export default function artplayerPluginHlsControl(option = {}) {
    return (art) => {
        const { $video } = art.template;
        const { errorHandle, query, queryAll, inverseClass } = art.constructor.utils;

        function updateQuality(hls) {
            if (!hls.levels.length) return;

            const config = option.quality || {};
            const auto = config.auto || 'Auto';
            const title = config.title || 'Quality';
            const getName = config.getName || ((level) => level.name || level.height + 'P');
            const defaultLevel = hls.levels[hls.currentLevel];
            const defaultHtml = defaultLevel ? getName(defaultLevel) : auto;

            const selector = uniqBy(
                hls.levels.map((item, index) => {
                    return {
                        html: getName(item, index),
                        value: index,
                        default: hls.currentLevel === index,
                    };
                }),
                'html',
            ).sort((a, b) => b.value - a.value);

            selector.push({
                html: auto,
                value: -1,
                default: hls.currentLevel === -1,
            });

            const onSelect = (item) => {
                hls.currentLevel = item.value;
                art.loading.show = true;
                art.notice.show = `${title}: ${item.html}`;
                art.emit('artplayerPluginHlsControl:quality', item);
                for (let index = 0; index < selector.length; index++) {
                    selector[index].default = selector[index] === item;
                }
                return item.html;
            };

            if (config.control) {
                art.controls.update({
                    name: 'hls-quality',
                    position: 'right',
                    html: defaultHtml,
                    style: { padding: '0 10px' },
                    selector: selector,
                    onSelect: onSelect,
                    mounted: ($control) => {
                        art.on('artplayerPluginHlsControl:quality', (item) => {
                            const $value = query('.art-selector-value', $control);
                            const $items = queryAll('.art-selector-item', $control);
                            $value.innerHTML = item.html;
                            const $item = $items.find((element) => Number(element.dataset.value) === item.value);
                            inverseClass($item, 'art-current');
                        });
                    },
                });
            }

            if (config.setting) {
                art.setting.update({
                    name: 'hls-quality',
                    tooltip: defaultHtml,
                    html: title,
                    icon: $quality,
                    width: 200,
                    selector: selector,
                    onSelect: onSelect,
                    mounted: (_, setting) => {
                        art.on('artplayerPluginHlsControl:quality', (item) => {
                            setting.tooltip = item.html;

                            const element = setting.selector.find(
                                (element) => Number(element.$item?.dataset?.value) === item.value,
                            );

                            if (element?.$item) {
                                inverseClass(element.$item, 'art-current');
                            }
                        });
                    },
                });
            }
        }

        function updateAudio(hls) {
            if (!hls.audioTracks.length) return;

            const config = option.audio || {};
            const auto = config.auto || 'Auto';
            const title = config.title || 'Audio';
            const getName = config.getName || ((track) => track.name || track.lang || track.language);
            const defaultTrack = hls.audioTracks[hls.audioTrack];
            const defaultHtml = defaultTrack ? getName(defaultTrack) : auto;

            const selector = uniqBy(
                hls.audioTracks.map((item, index) => {
                    return {
                        html: getName(item, index),
                        value: item.id,
                        default: hls.audioTrack === item.id,
                    };
                }),
                'html',
            );

            const onSelect = (item) => {
                hls.audioTrack = item.value;
                art.loading.show = true;
                art.notice.show = `${title}: ${item.html}`;
                art.emit('artplayerPluginHlsControl:audio', item);
                for (let index = 0; index < selector.length; index++) {
                    selector[index].default = selector[index] === item;
                }
                return item.html;
            };

            if (config.control) {
                art.controls.update({
                    name: 'hls-audio',
                    position: 'right',
                    html: defaultHtml,
                    style: { padding: '0 10px' },
                    selector: selector,
                    onSelect: onSelect,
                    mounted: ($control) => {
                        art.on('artplayerPluginHlsControl:audio', (item) => {
                            const $value = query('.art-selector-value', $control);
                            const $items = queryAll('.art-selector-item', $control);
                            $value.innerHTML = item.html;
                            const $item = $items.find((element) => Number(element.dataset.value) === item.value);
                            inverseClass($item, 'art-current');
                        });
                    },
                });
            }

            if (config.setting) {
                art.setting.update({
                    name: 'hls-audio',
                    tooltip: defaultHtml,
                    html: title,
                    icon: $audio,
                    width: 200,
                    selector: selector,
                    onSelect: onSelect,
                    mounted: (_, setting) => {
                        art.on('artplayerPluginHlsControl:audio', (item) => {
                            setting.tooltip = item.html;

                            const element = setting.selector.find(
                                (element) => Number(element.$item?.dataset?.value) === item.value,
                            );

                            if (element?.$item) {
                                inverseClass(element.$item, 'art-current');
                            }
                        });
                    },
                });
            }
        }

        function update() {
            errorHandle(art.hls?.media === $video, 'Cannot find instance of HLS from "art.hls"');
            updateQuality(art.hls);
            updateAudio(art.hls);
        }

        art.on('ready', update);
        art.on('restart', update);

        return {
            name: 'artplayerPluginHlsControl',
            update,
        };
    };
}

if (typeof window !== 'undefined') {
    window['artplayerPluginHlsControl'] = artplayerPluginHlsControl;
}
