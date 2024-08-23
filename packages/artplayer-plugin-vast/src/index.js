import { Player, PlayerOptions, loadImaSdk } from '@glomex/vast-ima-player';

export default function artplayerPluginVast(callback) {
    return async (art) => {
        const { template, constructor } = art;
        const { createElement, setStyles, append } = constructor.utils;
        const { $video, $player } = template;

        await loadImaSdk();
        const google = window.google;
        const ima = google.ima;

        const adsRenderingSettings = new ima.AdsRenderingSettings();
        const playerOptions = new PlayerOptions();

        const id = `art-${Date.now()}`;
        const $container = createElement('div');
        append($player, $container);
        $container.id = id;
        setStyles($container, {
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            zIndex: '150',
        });

        const player = new Player(ima, $video, $container, adsRenderingSettings, playerOptions);

        function playUrl(url) {
            const playAdsRequest = new ima.AdsRequest();
            playAdsRequest.adTagUrl = url;
            player.playAds(playAdsRequest);
        }

        function playRes(res) {
            const playAdsRequest = new ima.AdsRequest();
            playAdsRequest.adsResponse = res;
            player.playAds(playAdsRequest);
        }

        if (typeof callback === 'function') {
            await callback({ art, id, ima, player, $container, playUrl, playRes });
        }

        return {
            name: 'artplayerPluginVast',
            id,
            ima,
            player,
            $container,
        };
    };
}

if (typeof window !== 'undefined') {
    window['artplayerPluginVast'] = artplayerPluginVast;
}
