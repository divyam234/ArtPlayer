
/*!
 * artplayer-plugin-dash-control.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof i[o]&&i[o],u=l.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!u[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(l)return l(t,!0);if(a&&"string"==typeof t)return a(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}f.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},f.cache={};var c=u[t]=new d.Module(t);e[t][0].call(c.exports,f,c,c.exports,this)}return u[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=u,d.parent=l,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return i[o]}}),i[o]=d;for(var s=0;s<t.length;s++)d(t[s]);if(n){var c=d(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({hRBuj:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n),o.export(n,"default",()=>d);var r=e("bundle-text:./quality.svg"),i=o.interopDefault(r),l=e("bundle-text:./audio.svg"),u=o.interopDefault(l);function a(e,t){let n=new Map;return e.filter(e=>{let o=e[t];return void 0===o||!n.has(o)&&n.set(o,1)})}function d(e={}){return t=>{let{$video:n}=t.template,{errorHandle:o}=t.constructor.utils;function r(){o(t.dash.getVideoElement()===n,'Cannot find instance of DASH from "art.dash"'),function(n){let o=n.getBitrateInfoListFor("video");if(!o||!o.length)return;let r=e.quality||{},l=r.auto||"Auto",u=r.title||"Quality",d=r.getName||(e=>`${e.height}p`),s=n.getQualityFor("video"),c=n.getSettings().streaming.abr.autoSwitchBitrate.video,f=c?l:d(o[s]),h=a(o.map(e=>({html:d(e),value:e.qualityIndex,default:s===e.qualityIndex&&!c})),"html").sort((e,t)=>t.value-e.value);h.push({html:l,value:"auto",default:c});let p=e=>("auto"===e.value?n.updateSettings({streaming:{abr:{autoSwitchBitrate:{video:!0}}}}):(n.updateSettings({streaming:{abr:{autoSwitchBitrate:{video:!1}}}}),n.setQualityFor("video",e.value)),t.notice.show=`${u}: ${e.html}`,r.control&&t.controls.check(e),r.setting&&t.setting.check(e),e.html);r.control&&t.controls.update({name:"dash-quality",position:"right",html:f,style:{padding:"0 10px"},selector:h,onSelect:p}),r.setting&&t.setting.update({name:"dash-quality",tooltip:f,html:u,icon:i.default,width:200,selector:h,onSelect:p})}(t.dash),function(n){let o=n.getTracksFor("audio");if(!o||!o.length)return;let r=e.audio||{},i=r.auto||"Auto",l=r.title||"Audio",d=r.getName||(e=>e.lang||e.id),s=n.getCurrentTrackFor("audio")||o[0],c=s?d(s):i,f=a(o.map(e=>({html:d(e),value:e,default:s===e})),"html"),h=e=>(n.setCurrentTrack(e.value),t.notice.show=`${l}: ${e.html}`,r.control&&t.controls.check(e),r.setting&&t.setting.check(e),e.html);r.control&&t.controls.update({name:"dash-audio",position:"right",html:c,style:{padding:"0 10px"},selector:f,onSelect:h}),r.setting&&t.setting.update({name:"dash-audio",tooltip:c,html:l,icon:u.default,width:200,selector:f,onSelect:h})}(t.dash)}return t.on("ready",r),t.on("restart",r),{name:"artplayerPluginDashControl",update:r}}}"undefined"!=typeof window&&(window.artplayerPluginDashControl=d)},{"bundle-text:./quality.svg":"aRkFd","bundle-text:./audio.svg":"hfT2T","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],aRkFd:[function(e,t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18"><path fill="#fff" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>'},{}],hfT2T:[function(e,t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18"><path fill="#fff" d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6 26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48-44.2 0-80-35.8-80-80V288C0 146.6 114.6 32 256 32s256 114.6 256 256v112c0 44.2-35.8 80-80 80-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48 10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["hRBuj"],"hRBuj","parcelRequire4dc0");