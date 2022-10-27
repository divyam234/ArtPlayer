"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],m={title:"Iframe Plugin",sidebar_position:3},o=void 0,s={unversionedId:"en/Plugins/iframe",id:"en/Plugins/iframe",title:"Iframe Plugin",description:"Overview",source:"@site/docs/en/Plugins/iframe.mdx",sourceDirName:"en/Plugins",slug:"/en/Plugins/iframe",permalink:"/document/en/Plugins/iframe",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Iframe Plugin",sidebar_position:3},sidebar:"en",previous:{title:"Ads Plugin",permalink:"/document/en/Plugins/ads"},next:{title:"Hls Quality Plugin",permalink:"/document/en/Plugins/hls-quality"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Demo",id:"demo",level:2},{value:"Install",id:"install",level:2},{value:"Install from <code>npm</code>:",id:"install-from-npm",level:3},{value:"Install from <code>yarn</code>:",id:"install-from-yarn",level:3},{value:"Install from <code>script</code>:",id:"install-from-script",level:3},{value:"Use",id:"use",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"iframe.html",id:"iframehtml",level:3},{value:"Instance Api",id:"instance-api",level:2},{value:"commit",id:"commit",level:3},{value:"message",id:"message",level:3},{value:"destroy",id:"destroy",level:3},{value:"Iframe Api",id:"iframe-api",level:2},{value:"inject",id:"inject",level:3},{value:"postMessage",id:"postmessage",level:3}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"With this plugin, you can easily control the player in the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," page in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main page"),"."),(0,i.kt)("p",null,"For example, you can control the functions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," player through code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main page"),", or get the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," player."),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,"\ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"https://artplayer.org/?libs=./uncompiled/artplayer-plugin-iframe/index.js&example=iframe"},"View Demo")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"install-from-npm"},"Install from ",(0,i.kt)("inlineCode",{parentName:"h3"},"npm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install artplayer-plugin-iframe\n")),(0,i.kt)("h3",{id:"install-from-yarn"},"Install from ",(0,i.kt)("inlineCode",{parentName:"h3"},"yarn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add artplayer-plugin-iframe\n")),(0,i.kt)("h3",{id:"install-from-script"},"Install from ",(0,i.kt)("inlineCode",{parentName:"h3"},"script"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- local --\x3e\n<script src="path/to/artplayer-plugin-iframe.js"><\/script>\n\n\x3c!-- jsdelivr --\x3e\n<script src="https://cdn.jsdelivr.net/npm/artplayer-plugin-iframe/dist/artplayer-plugin-iframe.js"><\/script>\n\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/artplayer-plugin-iframe/dist/artplayer-plugin-iframe.js"><\/script>\n')),(0,i.kt)("p",null,"Then you can access the plugin function through ",(0,i.kt)("inlineCode",{parentName:"p"},"window.artplayerPluginIframe")),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("h3",{id:"indexhtml"},"index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="index.html"',showLineNumbers:!0,title:'"index.html"'},"<!DOCTYPE html>\n<html>\n    <head>\n        <title>ArtPlayer</title>\n        <meta charset=\"UTF-8\" />\n    </head>\n    <body>\n        <iframe id=\"iframe\"></iframe>\n        <script src=\"path/to/artplayer-plugin-iframe.js\"><\/script>\n        <script>\n            const iframe = new ArtplayerPluginIframe({\n                // iframe element\n                iframe: document.querySelector('#iframe'),\n                // iframe url\n                url: 'path/to/iframe.html',\n            });\n\n            // Push message to iframe\n            iframe.commit(() => {\n                var art = new Artplayer({\n                    container: '.artplayer-app',\n                    url: 'path/to/video.mp4',\n                });\n            });\n        <\/script>\n    </body>\n</html>\n")),(0,i.kt)("h3",{id:"iframehtml"},"iframe.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="iframe.html"',showLineNumbers:!0,title:'"iframe.html"'},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>ArtPlayer</title>\n        <meta charset="UTF-8" />\n        <style>\n            html,\n            body {\n                width: 100%;\n                height: 100%;\n                margin: 0;\n                padding: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <div class="artplayer-app" style="width: 100%; height: 100%;"></div>\n        <script src="path/to/artplayer.js"><\/script>\n        <script src="path/to/artplayer-plugin-iframe.js"><\/script>\n        <script>\n            // Inject the script, receive messages from the instance\n            ArtplayerPluginIframe.inject();\n        <\/script>\n    </body>\n</html>\n')),(0,i.kt)("h2",{id:"instance-api"},"Instance Api"),(0,i.kt)("h3",{id:"commit"},"commit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Function"))),(0,i.kt)("p",null,"Push message to iframe, the function will run inside the iframe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iframe.commit(() => {\n    var art = new Artplayer({\n        container: '.artplayer-app',\n        url: 'path/to/video.mp4',\n    });\n});\n\niframe.commit(() => {\n    art.seek = 5;\n});\n\n// Get the value from the iframe\n(async function () {\n    // Use return keyword\n    var currentTime = await iframe.commit(() => {\n        return art.currentTime;\n    });\n\n    // Or use resolve method\n    var currentTime2 = await iframe.commit((resolve) => {\n        setTimeout(() => {\n            resolve(art.currentTime);\n        }, 1000);\n    });\n})();\n")),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Function"))),(0,i.kt)("p",null,"Receive message from the iframe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iframe.message((event) => {\n    console.log(event);\n});\n")),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Function"))),(0,i.kt)("p",null,"Destroy the instance, cannot communicate with the iframe after destroy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iframe.destroy();\n")),(0,i.kt)("h2",{id:"iframe-api"},"Iframe Api"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Iframe Api")," can only be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe"),"."))),(0,i.kt)("h3",{id:"inject"},"inject"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Function"))),(0,i.kt)("p",null,"Inject the script, then can receive messages from the instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ArtplayerPluginIframe.inject();\n")),(0,i.kt)("h3",{id:"postmessage"},"postMessage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Function"))),(0,i.kt)("p",null,"Push message to instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iframe.message((event) => {\n    console.log(event);\n});\n\niframe.commit(() => {\n    ArtplayerPluginIframe.postMessage({\n        type: 'currentTime',\n        data: art.currentTime,\n    });\n});\n")))}d.isMDXComponent=!0}}]);