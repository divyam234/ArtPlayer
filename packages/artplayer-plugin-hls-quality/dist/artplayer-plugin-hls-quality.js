/*!
 * artplayer-plugin-hls-quality.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,n,r,o){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof l.parcelRequire4dc0&&l.parcelRequire4dc0,u=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!u[t]){if(!e[t]){var r="function"==typeof l.parcelRequire4dc0&&l.parcelRequire4dc0;if(!n&&r)return r(t,!0);if(i)return i(t,!0);if(c&&"string"==typeof t)return c(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}a.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},a.cache={};var d=u[t]=new f.Module(t);e[t][0].call(d.exports,a,d,d.exports,this)}return u[t].exports;function a(e){var t=a.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=u,f.parent=i,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return l.parcelRequire4dc0}}),l.parcelRequire4dc0=f;for(var d=0;d<t.length;d++)f(t[d]);var a=f(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define((function(){return a}))}({eEHR6:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n);var o=e("bundle-text:./image.svg"),l=r.interopDefault(o);function i(e){return t=>{const{$video:n}=t.template,{errorHandle:r}=t.constructor.utils;return t.on("ready",(function(){const o=t.hls||window.hls;r(o&&o.media===n,'Cannot find instance of HLS from "art.hls" or "window.hls"');const i=e.auto||"Auto",u=e.title||"Quality",c=o.levels[o.currentLevel],f=c?c.height+"P":i;e.control&&t.controls.add({name:"hls-quality",position:"right",html:f,style:{padding:"0 10px"},selector:o.levels.map(((e,t)=>({html:e.height+"P",level:e.level||t,default:c===e}))),onSelect:e=>(o.nextLevel=e.level,e.html)}),e.setting&&t.setting.add({name:"hls-quality",tooltip:f,html:u,icon:l.default,width:200,selector:o.levels.map(((e,t)=>({html:e.height+"P",level:e.level||t,default:c===e}))),onSelect:function(e){return o.nextLevel=e.level,e.html}})})),{name:"artplayerPluginHlsQuality"}}}n.default=i,i.env="production",i.version="1.0.0",i.build="2022-11-03 22:18:00","undefined"!=typeof window&&(window.artplayerPluginHlsQuality=i)},{"bundle-text:./image.svg":"5VXix","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"5VXix":[function(e,t,n){t.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["eEHR6"],"eEHR6");