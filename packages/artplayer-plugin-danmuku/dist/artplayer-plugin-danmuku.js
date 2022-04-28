/*!
 * artplayer-plugin-danmuku.js v4.3.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(t,e,n,i,r){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof s.parcelRequire4dc0&&s.parcelRequire4dc0,a=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(e,n){if(!a[e]){if(!t[e]){var i="function"==typeof s.parcelRequire4dc0&&s.parcelRequire4dc0;if(!n&&i)return i(e,!0);if(o)return o(e,!0);if(l&&"string"==typeof e)return l(e);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}h.resolve=function(n){var i=t[e][1][n];return null!=i?i:n},h.cache={};var p=a[e]=new u.Module(e);t[e][0].call(p.exports,h,p,p.exports,this)}return a[e].exports;function h(t){var e=h.resolve(t);return!1===e?{}:u(e)}}u.isParcelRequire=!0,u.Module=function(t){this.id=t,this.bundle=u,this.exports={}},u.modules=t,u.cache=a,u.parent=o,u.register=function(e,n){t[e]=[function(t,e){e.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return s.parcelRequire4dc0}}),s.parcelRequire4dc0=u;for(var p=0;p<e.length;p++)u(e[p]);var h=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof define&&define.amd&&define((function(){return h}))}({b8ouu:[function(t,e,n){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(n);var r=t("./danmuku"),s=i.interopDefault(r);function o(t){return e=>{const n=new s.default(e,t);return{name:"artplayerPluginDanmuku",emit:n.emit.bind(n),config:n.config.bind(n),hide:n.hide.bind(n),show:n.show.bind(n),get isHide(){return n.isHide}}}}n.default=o,window.artplayerPluginDanmuku=o},{"./danmuku":"b4AW0","@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],b4AW0:[function(t,e,n){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(n);var r=t("./i18n"),s=i.interopDefault(r),o=t("./utils"),a=t("./bilibili"),l=t("./getDanmuTop"),u=i.interopDefault(l);class p{constructor(t,e){t.i18n.update(s.default),this.art=t,this.queue=[],this.option={},this.config(e),this.isStop=!1,this.isHide=!1,this.animationFrameTimer=null,this.$danmuku=t.template.$danmuku,t.on("video:play",this.start.bind(this)),t.on("video:playing",this.start.bind(this)),t.on("video:pause",this.stop.bind(this)),t.on("video:waiting",this.stop.bind(this)),t.on("resize",this.resize.bind(this)),t.on("destroy",this.stop.bind(this)),this.load()}static get option(){return{danmuku:[],speed:5,maxlength:50,margin:[10,100],opacity:1,fontSize:25,synchronousPlayback:!1}}static get scheme(){return{danmuku:"array|function|string",speed:"number",maxlength:"number",margin:"array",opacity:"number",fontSize:"number",synchronousPlayback:"boolean"}}load(){return"function"==typeof this.option.danmuku?this.option.danmuku().then((t=>{this.queue=[],this.$danmuku.innerText="",t.forEach(this.emit.bind(this)),this.art.emit("artplayerPluginDanmuku:loaded")})):"string"==typeof this.option.danmuku?a.bilibiliDanmuParseFromUrl(this.option.danmuku).then((t=>{this.queue=[],this.$danmuku.innerText="",t.forEach(this.emit.bind(this)),this.art.emit("artplayerPluginDanmuku:loaded")})):(this.queue=[],this.$danmuku.innerText="",this.option.danmuku.forEach(this.emit.bind(this)),this.art.emit("artplayerPluginDanmuku:loaded")),this}config(t){const{utils:{clamp:e},validator:n}=this.art.constructor;return this.option=Object.assign({},p.option,this.option,t),n(this.option,p.scheme),this.option.speed=e(this.option.speed,1,10),this.option.maxlength=e(this.option.maxlength,10,100),this.option.margin[0]=e(this.option.margin[0],0,100),this.option.margin[1]=e(this.option.margin[1],0,100),this.option.opacity=e(this.option.opacity,0,1),this.option.fontSize=e(this.option.fontSize,12,30),this.art.emit("artplayerPluginDanmuku:config",this.option),this}continue(){return o.filter(this.queue,"stop",(t=>{if(t.$state="emit",t.$lastStartTime=Date.now(),0===t.mode)t.$ref.style.transform=`translateX(${-t.$restWidth}px) translateY(0px) translateZ(0px)`,t.$ref.style.transition=`transform ${t.$restTime}s linear 0s`})),this}suspend(){const{$player:t}=this.art.template;return o.filter(this.queue,"emit",(e=>{switch(e.$state="stop",e.mode){case 0:{const{left:n,width:i}=o.getRect(t),{left:r}=o.getRect(e.$ref),s=i-(r-n)+5;e.$ref.style.transform=`translateX(${-s}px) translateY(0px) translateZ(0px)`,e.$ref.style.transition="transform 0s linear 0s";break}}})),this}resize(){const{$player:t}=this.art.template,e=o.getRect(t,"width");return o.filter(this.queue,"wait",(t=>{t.$ref&&(t.$ref.style.border="none",t.$ref.style.left=`${e}px`,t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",t.$ref.style.transition="transform 0s linear 0s")})),this}update(){const{$player:t}=this.art.template;return this.animationFrameTimer=window.requestAnimationFrame((()=>{if(this.art.playing&&!this.isHide){const e=o.getRect(t,"width");o.filter(this.queue,"emit",(t=>{t.$restTime-=(Date.now()-t.$lastStartTime)/1e3,t.$lastStartTime=Date.now(),t.$restTime<=0&&(t.$state="wait",t.$ref.style.border="none",t.$ref.style.left=`${e}px`,t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",t.$ref.style.transition="transform 0s linear 0s")})),this.queue.filter((t=>this.art.currentTime+.1>=t.time&&t.time>=this.art.currentTime-.1&&"wait"===t.$state)).forEach((t=>{t.$ref=o.getDanmuRef(this.queue),this.$danmuku.appendChild(t.$ref),t.$ref.style.opacity=this.option.opacity,t.$ref.style.fontSize=`${this.option.fontSize}px`,t.$ref.innerText=t.text,t.$ref.style.color=t.color||"#fff",t.$ref.style.border=t.border?`1px solid ${t.color||"#fff"}`:"none",t.$restTime=this.option.synchronousPlayback&&this.art.playbackRate?this.option.speed/Number(this.art.playbackRate):this.option.speed,t.$lastStartTime=Date.now();const n=o.getRect(t.$ref,"width"),i=u.default(this,t);switch(t.$state="emit",t.mode){case 0:t.$restWidth=e+n+5,t.$ref.style.left=`${e}px`,t.$ref.style.top=`${i}px`,t.$ref.style.transform=`translateX(${-t.$restWidth}px) translateY(0px) translateZ(0px)`,t.$ref.style.transition=`transform ${t.$restTime}s linear 0s`;break;case 1:t.$ref.style.top=`${i}px`,t.$ref.style.left="50%",t.$ref.style.marginLeft=`-${n/2}px`}}))}this.isStop||this.update()})),this}stop(){return this.isStop=!0,this.suspend(),window.cancelAnimationFrame(this.animationFrameTimer),this.art.emit("artplayerPluginDanmuku:stop"),this}start(){return this.isStop=!1,this.continue(),this.update(),this.art.emit("artplayerPluginDanmuku:start"),this}show(){return this.isHide=!1,this.$danmuku.style.display="block",this.art.emit("artplayerPluginDanmuku:show"),this}hide(){return this.isHide=!0,this.$danmuku.style.display="none",this.art.emit("artplayerPluginDanmuku:hide"),this}emit(t){const{notice:e,i18n:n}=this.art,{utils:{clamp:i},validator:r}=this.art.constructor;return r(t,{text:"string",mode:"number|undefined",color:"string|undefined",time:"number|undefined",border:"boolean|undefined"}),t.text.trim()?t.text.length>this.option.maxlength?(e.show=`${n.get("The length of the danmu does not exceed")} ${this.option.maxlength}`,this):(t.time?t.time=i(t.time,0,1/0):t.time=this.art.currentTime+.5,this.queue.push({mode:0,...t,$state:"wait",$ref:null,$restTime:0,$lastStartTime:0,$restWidth:0}),this):(e.show=n.get("Danmu text cannot be empty"),this)}}n.default=p},{"./i18n":"8W8JK","./utils":"fpshT","./bilibili":"d2GTG","./getDanmuTop":"2l4kv","@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],"8W8JK":[function(t,e,n){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n),n.default={"zh-cn":{"Danmu opacity":"弹幕透明度","Danmu speed":"弹幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"弹幕文本不能为空","The length of the danmu does not exceed":"弹幕文本字数不能超过","Danmu speed synchronous playback multiple":"弹幕速度同步播放倍数"},"zh-tw":{"Danmu opacity":"彈幕透明度","Danmu speed":"彈幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"彈幕文本不能為空","The length of the danmu does not exceed":"彈幕文本字數不能超過","Danmu speed synchronous playback multiple":"彈幕速度同步播放倍數"}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],fRZO2:[function(t,e,n){n.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},n.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.exportAll=function(t,e){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e},n.export=function(t,e,n){Object.defineProperty(t,e,{enumerable:!0,get:n})}},{}],fpshT:[function(t,e,n){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");function r(t,e,n){return t.filter((t=>t.$state===e)).map(n)}function s(t,e){const n=t.getBoundingClientRect();return e?n[e]:n}function o(t){const e=t.find((t=>t.$ref&&"wait"===t.$state));if(e){const{$ref:t}=e;return e.$ref=null,t}const n=document.createElement("div");return n.style.cssText='\n        user-select: none;\n        position: absolute;\n        white-space: pre;\n        pointer-events: none;\n        perspective: 500px;\n        display: inline-block;\n        will-change: transform;\n        font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;\n        font-weight: normal;\n        line-height: 1.125;\n        text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n    ',n}i.defineInteropFlag(n),i.export(n,"filter",(()=>r)),i.export(n,"getRect",(()=>s)),i.export(n,"getDanmuRef",(()=>o))},{"@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],d2GTG:[function(t,e,n){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");function r(t){switch(t){case 1:case 2:case 3:default:return 0;case 4:case 5:return 1}}function s(t){if("string"!=typeof t)return[];const e=t.match(/<d([\S ]*?>[\S ]*?)<\/d>/gi);return e&&e.length?e.map((t=>{const[,e,n]=t.match(/<d p="(.+)">(.+)<\/d>/),i=e.split(",");return 8===i.length&&n.trim()?{text:n,time:Number(i[0]),mode:r(Number(i[1])),fontSize:Number(i[2]),color:`#${Number(i[3]).toString(16)}`,timestamp:Number(i[4]),pool:Number(i[5]),userID:i[6],rowID:Number(i[7])}:null})):[]}function o(t){return fetch(t).then((t=>t.text())).then((t=>s(t)))}i.defineInteropFlag(n),i.export(n,"getMode",(()=>r)),i.export(n,"bilibiliDanmuParseFromXml",(()=>s)),i.export(n,"bilibiliDanmuParseFromUrl",(()=>o))},{"@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}],"2l4kv":[function(t,e,n){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);var i=t("./utils");n.default=function(t,e){const[n,r]=t.option.margin,s=i.getRect(t.art.template.$player),o=t.queue.filter((t=>t.mode===e.mode&&"emit"===t.$state&&t.$ref&&t.$ref.style.fontSize===e.$ref.style.fontSize&&parseFloat(t.$ref.style.top)<=s.height-r)).map((t=>{const e=i.getRect(t.$ref),{width:n,height:r}=e,o=e.top-s.top,a=e.left-s.left;return{top:o,left:a,height:r,width:n,right:s.width-a-n}})).sort(((t,e)=>t.top-e.top));return 0===o.length?n:(o.unshift({top:0,left:0,right:0,height:n,width:s.width}),o.push({top:s.height-r,left:0,right:0,height:r,width:s.width}),function(t){let e=0;const n={};for(let e=0;e<t.length;e+=1){const i=t[e];n[i.top]?n[i.top].push(i):n[i.top]=[i]}const i=Object.keys(n);let r=0;for(let n=1;n<t.length;n+=1){const i=t[n],s=t[n-1],o=s.top+s.height,a=i.top-o;a>r&&(e=o,r=a)}if(0===e){let r=0;for(let s=0;s<i.length;s+=1){let o=t[0].width;const a=i[s],l=n[a];for(let t=0;t<l.length;t+=1){const e=l[t];e.right<o&&(o=e.right)}o>r&&(r=o,[{top:e}]=l)}}return 0===e&&([e]=i.filter(((t,e)=>0!==e&&e!==i.length-1)).sort(((t,e)=>n[t].length-n[e].length))),e}(o))}},{"./utils":"fpshT","@parcel/transformer-js/src/esmodule-helpers.js":"fRZO2"}]},["b8ouu"],"b8ouu");