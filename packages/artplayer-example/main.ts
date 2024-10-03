import { Artplayer } from "@artplayer/player";
import "@artplayer/player/artplayer.css";

var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://ia804605.us.archive.org/22/items/big-buck-bunny-4k/Big_Buck_Bunny_4K.mp4',
    volume: 0.5,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoSize: false,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    lang: navigator.language.toLowerCase(),

});
