import { throttle } from '../utils';

export default function resizeInit(art, events) {
    const { option, player } = art;

    const resizeFn = throttle(() => {
        if (player.normalSize) {
            player.autoHeight = option.autoHeight;
            player.autoSize = option.autoSize;
        }
        player.aspectRatioReset = true;
        art.emit('resize');
    }, 500);

    events.proxy(window, ['orientationchange', 'resize'], () => {
        resizeFn();
    });

    if (screen && screen.orientation && screen.orientation.onchange) {
        events.proxy(screen.orientation, 'change', () => {
            resizeFn();
        });
    }
}
