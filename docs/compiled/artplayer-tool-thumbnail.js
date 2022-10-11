/*!
 * artplayer-tool-thumbnail.js v4.3.12
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,i,n,o){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof r.parcelRequire7b4c&&r.parcelRequire7b4c,a=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function h(t,i){if(!a[t]){if(!e[t]){var n="function"==typeof r.parcelRequire7b4c&&r.parcelRequire7b4c;if(!i&&n)return n(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}d.resolve=function(i){var n=e[t][1][i];return null!=n?n:i},d.cache={};var u=a[t]=new h.Module(t);e[t][0].call(u.exports,d,u,u.exports,this)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:h(t)}}h.isParcelRequire=!0,h.Module=function(e){this.id=e,this.bundle=h,this.exports={}},h.modules=e,h.cache=a,h.parent=s,h.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]},Object.defineProperty(h,"root",{get:function(){return r.parcelRequire7b4c}}),r.parcelRequire7b4c=h;for(var u=0;u<t.length;u++)h(t[u]);var d=h(i);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}({abjMI:[function(e,t,i){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i);var o=e("tiny-emitter"),r=n.interopDefault(o),s=e("./utils");class a extends r.default{constructor(e={}){super(),this.processing=!1,this.option={},this.setup(Object.assign({},a.DEFAULTS,e)),this.video=a.creatVideo(),this.duration=0,this.inputChange=this.inputChange.bind(this),this.ondrop=this.ondrop.bind(this),this.option.fileInput.addEventListener("change",this.inputChange),this.option.fileInput.addEventListener("dragover",a.ondragover),this.option.fileInput.addEventListener("drop",a.ondrop)}static get DEFAULTS(){return{number:60,width:160,height:90,column:10,begin:0,end:NaN}}static ondragover(e){e.preventDefault()}ondrop(e){e.preventDefault();const t=e.dataTransfer.files[0];this.loadVideo(t)}setup(e={}){this.option=Object.assign({},this.option,e);const{fileInput:t,number:i,width:n,column:o}=this.option;if(this.errorHandle(t instanceof Element,"The 'fileInput' is not a Element"),"INPUT"!==t.tagName||"file"!==t.type){t.style.position="relative";const e=document.createElement("input");e.type="file",e.style.position="absolute",e.style.width="100%",e.style.height="100%",e.style.left="0",e.style.top="0",e.style.right="0",e.style.bottom="0",e.style.opacity="0",t.appendChild(e),this.option.fileInput=e}return["number","width","column","begin","end"].forEach((e=>{this.errorHandle("number"==typeof this.option[e],`The '${e}' is not a number`)})),this.option.number=(0,s.clamp)(i,10,1e3),this.option.width=(0,s.clamp)(n,10,1e3),this.option.column=(0,s.clamp)(o,1,1e3),this}static creatVideo(){const e=document.createElement("video");return e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.muted=!0,e.controls=!0,document.body.appendChild(e),e}inputChange(e){const t=this.option.fileInput.files[0];this.loadVideo(t),e.target.value=""}loadVideo(e){if(e){const t=this.video.canPlayType(e.type);this.errorHandle("maybe"===t||"probably"===t,`Playback of this file format is not supported: ${e.type}`);const i=URL.createObjectURL(e);this.videoUrl=i,this.file=e,this.emit("file",this.file),this.video.src=i,this.emit("video",this.video)}}start(){if(!this.video.duration)return(0,s.sleep)(1e3).then((()=>this.start()));const{width:e,number:t,begin:i,end:n}=this.option,o=this.video.videoHeight/this.video.videoWidth*e;this.option.height=o,this.option.begin=(0,s.clamp)(i,0,this.video.duration),this.option.end=(0,s.clamp)(n||this.video.duration,i,this.video.duration),this.errorHandle(this.option.end>this.option.begin,"End time must be greater than the start time"),this.duration=this.option.end-this.option.begin,this.density=t/this.duration,this.errorHandle(this.file&&this.video,"Please select the video file first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment..."),this.errorHandle(this.density<=1,`The preview density cannot be greater than 1, but got ${this.density}`);const r=this.creatScreenshotDate(),a=this.creatCanvas(),l=a.getContext("2d");this.emit("canvas",a);const h=r.map(((i,n)=>()=>new Promise((r=>{this.video.oncanplay=()=>{l.drawImage(this.video,i.x,i.y,e,o),a.toBlob((e=>{this.thumbnailUrl&&URL.revokeObjectURL(this.thumbnailUrl),this.thumbnailUrl=URL.createObjectURL(e),this.emit("update",this.thumbnailUrl,(n+1)/t),this.video.oncanplay=null,r()}))},this.video.currentTime=i.time}))));return this.processing=!0,(0,s.runPromisesInSeries)(h).then((()=>{this.processing=!1,this.emit("done")})).catch((e=>{throw this.processing=!1,this.emit("error",e.message),e}))}creatScreenshotDate(){const{number:e,width:t,height:i,column:n,begin:o}=this.option,r=this.duration/e,s=[o+r];for(;s.length<e;){const e=s[s.length-1];s.push(e+r)}return s.map(((e,o)=>({time:e-r/2,x:o%n*t,y:Math.floor(o/n)*i})))}creatCanvas(){const{number:e,width:t,height:i,column:n}=this.option,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t*n,o.height=Math.ceil(e/n)*i+30,r.fillStyle="black",r.fillRect(0,0,o.width,o.height),r.font="14px Georgia",r.fillStyle="#fff",r.fillText(`From: https://artplayer.org/, Number: ${e}, Width: ${t}, Height: ${i}, Column: ${n}`,10,o.height-11),o}download(){this.errorHandle(this.file&&this.thumbnailUrl,"Download does not seem to be ready, please create preview first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment...");const e=document.createElement("a"),t=`${(0,s.getFileName)(this.file.name)}.png`;return e.download=t,e.href=this.thumbnailUrl,document.body.appendChild(e),e.click(),document.body.removeChild(e),this.emit("download",t),this}errorHandle(e,t){if(!e)throw this.emit("error",t),new Error(t)}destroy(){this.option.fileInput.removeEventListener("change",this.inputChange),this.option.fileInput.removeEventListener("dragover",a.ondragover),this.option.fileInput.removeEventListener("drop",a.ondrop),document.body.removeChild(this.video),this.videoUrl&&URL.revokeObjectURL(this.videoUrl),this.thumbnailUrl&&URL.revokeObjectURL(this.thumbnailUrl),this.emit("destroy")}}i.default=a,window.ArtplayerToolThumbnail=a},{"tiny-emitter":"fBRzz","./utils":"7kf0i","@parcel/transformer-js/src/esmodule-helpers.js":"6yjAe"}],fBRzz:[function(e,t,i){function n(){}n.prototype={on:function(e,t,i){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:i}),this},once:function(e,t,i){var n=this;function o(){n.off(e,o),t.apply(i,arguments)}return o._=t,this.on(e,o,i)},emit:function(e){for(var t=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,t);return this},off:function(e,t){var i=this.e||(this.e={}),n=i[e],o=[];if(n&&t)for(var r=0,s=n.length;r<s;r++)n[r].fn!==t&&n[r].fn._!==t&&o.push(n[r]);return o.length?i[e]=o:delete i[e],this}},t.exports=n,t.exports.TinyEmitter=n},{}],"7kf0i":[function(e,t,i){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return new Promise((t=>setTimeout(t,e)))}function r(e){return e.reduce(((e,t)=>e.then(t)),Promise.resolve())}function s(e){const t=e.split(".");return t.pop(),t.join(".")}function a(e,t,i){return Math.max(Math.min(e,Math.max(t,i)),Math.min(t,i))}n.defineInteropFlag(i),n.export(i,"sleep",(()=>o)),n.export(i,"runPromisesInSeries",(()=>r)),n.export(i,"getFileName",(()=>s)),n.export(i,"clamp",(()=>a))},{"@parcel/transformer-js/src/esmodule-helpers.js":"6yjAe"}],"6yjAe":[function(e,t,i){i.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},i.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.exportAll=function(e,t){return Object.keys(e).forEach((function(i){"default"===i||"__esModule"===i||t.hasOwnProperty(i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})})),t},i.export=function(e,t,i){Object.defineProperty(e,t,{enumerable:!0,get:i})}},{}]},["abjMI"],"abjMI");