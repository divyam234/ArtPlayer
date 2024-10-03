import { def, getIcon } from '../utils';
import loading from './loading.svg';
import state from './state.svg';
import check from './check.svg';
import play from './play.svg';
import pause from './pause.svg';
import volume from './volume.svg';
import volumeClose from './volume-close.svg';
import screenshot from './screenshot.svg';
import setting from './setting.svg';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';
import playbackRate from './playback-rate.svg';
import aspectRatio from './aspect-ratio.svg';
import config from './config.svg';
import pip from './pip.svg';
import lock from './lock.svg';
import unlock from './unlock.svg';
import fullscreenOff from './fullscreen-off.svg';
import fullscreenOn from './fullscreen-on.svg';
import fullscreenWebOff from './fullscreen-web-off.svg';
import fullscreenWebOn from './fullscreen-web-on.svg';
import switchOn from './switch-on.svg';
import switchOff from './switch-off.svg';
import flip from './flip.svg';
import error from './error.svg';
import close from './close.svg';
import airplay from './airplay.svg';

export default class Icons {
    constructor(art) {
        const icons = {
            loading,
            state,
            play,
            pause,
            check,
            volume,
            volumeClose,
            screenshot,
            setting,
            pip,
            arrowLeft,
            arrowRight,
            playbackRate,
            aspectRatio,
            config,
            lock,
            flip,
            unlock,
            fullscreenOff,
            fullscreenOn,
            fullscreenWebOff,
            fullscreenWebOn,
            switchOn,
            switchOff,
            error,
            close,
            airplay,
            ...art.option.icons,
        };

        for (const key in icons) {
            def(this, key, {
                get: () => getIcon(key, icons[key]),
            });
        }
    }
}
