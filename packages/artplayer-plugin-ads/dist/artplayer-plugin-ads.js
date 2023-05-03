/*!
 * artplayer-plugin-ads.js v2.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2023 Harvey Zack
 * Released under the MIT License.
 */
!function(e,n,l,t,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof a[t]&&a[t],o=r.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,l){if(!o[n]){if(!e[n]){var i="function"==typeof a[t]&&a[t];if(!l&&i)return i(n,!0);if(r)return r(n,!0);if(d&&"string"==typeof n)return d(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}c.resolve=function(l){var t=e[n][1][l];return null!=t?t:l},c.cache={};var u=o[n]=new s.Module(n);e[n][0].call(u.exports,c,u,u.exports,this)}return o[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:s(n)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=o,s.parent=r,s.register=function(n,l){e[n]=[function(e,n){n.exports=l},{}]},Object.defineProperty(s,"root",{get:function(){return a[t]}}),a[t]=s;for(var p=0;p<n.length;p++)s(n[p]);if(l){var u=s(l);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}}({hUYA0:[function(e,n,l){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(l);var i=e("bundle-text:./style.less"),a=t.interopDefault(i);function r(e){return n=>{!function(e){const{version:n,utils:{errorHandle:l}}=e.constructor,t=n.split(".").map(Number);l(t[0]+t[1]/100>=5,`Artplayer.js@${n} is not compatible the artplayerPluginAds@${r.version}. Please update it to version Artplayer.js@5.x.x`)}(n);const{template:{$player:l},icons:{volume:t,volumeClose:i,fullscreenOn:a,fullscreenOff:o,loading:d},constructor:{validator:s,utils:{query:p,append:u,setStyle:c}}}=n;e=s({html:"",video:"",url:"",playDuration:5,totalDuration:10,muted:!1,i18n:{close:"关闭广告",countdown:"%s秒",detail:"查看详情",canBeClosed:"%s秒后可关闭广告"},...e},{html:"?string",video:"?string",url:"?string",playDuration:"number",totalDuration:"number",muted:"?boolean",i18n:{close:"string",countdown:"string",detail:"string",canBeClosed:"string"}});let y=null,f=null,g=null,m=null,v=null,x=null,h=0,b=null,w=!1,j=!1,D=!1;function $(e,n){return n.replace("%s",e)}function k(){w=!0,n.play(),e.video&&y.pause(),c(n.template.$ads,"display","none"),n.emit("artplayerPluginAds:skip",e)}function P(){w||(b=setTimeout((()=>{h+=1;const n=e.playDuration-h;n>=1?g.innerHTML=$(n,e.i18n.canBeClosed):(g.innerHTML=e.i18n.close,D||(D=!0)),m.innerHTML=$(e.totalDuration-h,e.i18n.countdown),h>=e.totalDuration?k():P()}),1e3))}function A(){w||clearTimeout(b)}function O(){j||(j=!0,function(){n.template.$ads=u(l,'<div class="artplayer-plugin-ads"></div>'),y=u(n.template.$ads,e.video?`<video class="artplayer-plugin-ads-video" src="${e.video}" loop playsInline></video>`:`<div class="artplayer-plugin-ads-html">${e.html}</div>`),x=u(n.template.$ads,'<div class="artplayer-plugin-ads-loading"></div>'),u(x,d),f=u(n.template.$ads,`<div class="artplayer-plugin-ads-timer"><div class="artplayer-plugin-ads-close">${e.playDuration<=0?e.i18n.close:$(e.playDuration,e.i18n.canBeClosed)}</div><div class="artplayer-plugin-ads-countdown">${$(e.totalDuration,e.i18n.countdown)}</div></div>`),g=p(".artplayer-plugin-ads-close",f),m=p(".artplayer-plugin-ads-countdown",f),e.playDuration>=e.totalDuration&&c(g,"display","none"),n.proxy(g,"click",(()=>{D&&k()})),v=u(n.template.$ads,`<div class="artplayer-plugin-ads-control"><div class="artplayer-plugin-ads-detail">${e.i18n.detail}</div><div class="artplayer-plugin-ads-muted"></div><div class="artplayer-plugin-ads-fullscreen"></div></div>`);const r=p(".artplayer-plugin-ads-detail",v),s=p(".artplayer-plugin-ads-muted",v),h=p(".artplayer-plugin-ads-fullscreen",v);if(e.url?n.proxy(r,"click",(()=>{window.open(e.url),n.emit("artplayerPluginAds:click",e)})):c(r,"display","none"),e.video){const l=u(s,t),a=u(s,i);c(a,"display","none"),e.muted&&(y.muted=!0,c(l,"display","none"),c(a,"display","inline-flex")),n.proxy(s,"click",(()=>{y.muted=!y.muted,y.muted?(c(l,"display","none"),c(a,"display","inline-flex")):(c(l,"display","inline-flex"),c(a,"display","none"))}))}else c(s,"display","none");const b=u(h,a),w=u(h,o);c(w,"display","none"),n.proxy(h,"click",(()=>{n.fullscreen=!n.fullscreen,n.fullscreen?(c(b,"display","inline-flex"),c(w,"display","none")):(c(b,"display","none"),c(w,"display","inline-flex"))})),n.proxy(y,"click",(()=>{e.url&&window.open(e.url),n.emit("artplayerPluginAds:click",e)}))}(),n.pause(),e.video?(n.proxy(y,"error",k),n.proxy(y,"loadedmetadata",(()=>{P(),y.play(),c(f,"display","flex"),c(v,"display","flex"),c(x,"display","none")}))):(P(),c(f,"display","flex"),c(v,"display","flex"),c(x,"display","none")),n.proxy(document,"visibilitychange",(()=>{document.hidden?A():P()})))}return n.on("ready",(()=>{n.once("play",O),n.once("video:playing",O)})),{name:"artplayerPluginAds",skip:k,pause:A,play:P}}}if(l.default=r,r.env="production",r.version="2.0.0",r.build="2023-05-03 11:57:37","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-ads")){const e=document.createElement("style");e.id="artplayer-plugin-ads",e.textContent=a.default,document.head.appendChild(e)}"undefined"!=typeof window&&(window.artplayerPluginAds=r)},{"bundle-text:./style.less":"jDrWj","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],jDrWj:[function(e,n,l){n.exports=".artplayer-plugin-ads{z-index:150;width:100%;height:100%;color:#fff;background-color:#000;font-size:13px;line-height:1;position:absolute;inset:0;overflow:hidden}.artplayer-plugin-ads .artplayer-plugin-ads-html{width:100%;height:100%;justify-content:center;align-items:center;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-video{width:100%;height:100%}.artplayer-plugin-ads .artplayer-plugin-ads-timer{display:none;position:absolute;top:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-timer>div{cursor:pointer;background-color:#00000080;border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control{display:none;position:absolute;bottom:10px;right:10px}.artplayer-plugin-ads .artplayer-plugin-ads-control>div{cursor:pointer;background-color:#00000080;border-radius:15px;align-items:center;margin-left:5px;padding:5px 10px;display:flex}.artplayer-plugin-ads .artplayer-plugin-ads-control .art-icon svg{width:20px;height:20px}.artplayer-plugin-ads .artplayer-plugin-ads-loading{width:100%;height:100%;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}"},{}],"9pCYc":[function(e,n,l){l.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},l.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.exportAll=function(e,n){return Object.keys(e).forEach((function(l){"default"===l||"__esModule"===l||n.hasOwnProperty(l)||Object.defineProperty(n,l,{enumerable:!0,get:function(){return e[l]}})})),n},l.export=function(e,n,l){Object.defineProperty(e,n,{enumerable:!0,get:l})}},{}]},["hUYA0"],"hUYA0","parcelRequire4dc0");