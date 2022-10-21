"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[201],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var o=r.createContext({}),c=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,s=n.originalType,o=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),f=c(t),p=l,h=f["".concat(o,".").concat(p)]||f[p]||m[p]||s;return t?r.createElement(h,a(a({ref:e},u),{},{components:t})):r.createElement(h,a({ref:e},u))}));function p(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=n,i.mdxType="string"==typeof n?n:l,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8582:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=t(7462),l=t(3366),s=(t(7294),t(3905)),a=["components"],i={title:"Add select in the controls",sidebar_position:1},o=void 0,c={unversionedId:"en/Questions/Create_selector_in_the_controls",id:"en/Questions/Create_selector_in_the_controls",title:"Add select in the controls",description:"Sometimes you need to add a list in the controls, then you can use the selector and onSelect attribute when adding controls",source:"@site/docs/en/Questions/Create_selector_in_the_controls.mdx",sourceDirName:"en/Questions",slug:"/en/Questions/Create_selector_in_the_controls",permalink:"/document/en/Questions/Create_selector_in_the_controls",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Add select in the controls",sidebar_position:1},sidebar:"en",previous:{title:"Iframe Plugin",permalink:"/document/en/Plugins/iframe"},next:{title:"Add button to the controls",permalink:"/document/en/Questions/Create_button_in_the_controls"}},u={},m=[{value:"Switch Subtitle",id:"switch-subtitle",level:3},{value:"Switch filter",id:"switch-filter",level:3}],f={toc:m};function p(n){var e=n.components,t=(0,l.Z)(n,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sometimes you need to add a list in the controls, then you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"selector")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"onSelect")," attribute when adding controls"),(0,s.kt)("h3",{id:"switch-subtitle"},"Switch Subtitle"),(0,s.kt)("div",{className:"run-code"},"\u25b6 Run Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    url: '/assets/sample/video.mp4',\n    controls: [\n        {\n            position: 'right',\n            html: 'Subtitle 01',\n            selector: [\n                {\n                    default: true,\n                    html: '<span style=\"color:red\">Subtitle 01</span>',\n                    url: '/assets/sample/subtitle.srt?id=1',\n                },\n                {\n                    html: '<span style=\"color:yellow\">Subtitle 02</span>',\n                    url: '/assets/sample/subtitle.srt?id=2',\n                },\n            ],\n            onSelect: function (item, $dom) {\n                console.info(item, $dom);\n\n                art.subtitle.url = item.url;\n                \n                return 'You click ' + item.html;\n            },\n        },\n    ],\n});\n")),(0,s.kt)("h3",{id:"switch-filter"},"Switch filter"),(0,s.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/instagram.css@0.1.4/dist/instagram.min.css"},"\u25b6 Run Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var instagramFilters = [\n    {\n        "html": "1977",\n        "class": "filter-1977"\n    },\n    {\n        "html": "Aden",\n        "class": "filter-aden"\n    },\n    {\n        "html": "Amaro",\n        "class": "filter-amaro"\n    },\n    {\n        "html": "Ashby",\n        "class": "filter-ashby"\n    },\n    {\n        "html": "Brannan",\n        "class": "filter-brannan"\n    },\n    {\n        "html": "Brooklyn",\n        "class": "filter-brooklyn"\n    },\n    {\n        "html": "Charmes",\n        "class": "filter-charmes"\n    },\n    {\n        "html": "Clarendon",\n        "class": "filter-clarendon"\n    },\n    {\n        "html": "Crema",\n        "class": "filter-crema"\n    },\n    {\n        "html": "Dogpatch",\n        "class": "filter-dogpatch"\n    },\n    {\n        "html": "Earlybird",\n        "class": "filter-earlybird"\n    },\n    {\n        "html": "Gingham",\n        "class": "filter-gingham"\n    },\n    {\n        "html": "Ginza",\n        "class": "filter-ginza"\n    },\n    {\n        "html": "Hefe",\n        "class": "filter-hefe"\n    },\n    {\n        "html": "Helena",\n        "class": "filter-helena"\n    },\n    {\n        "html": "Hudson",\n        "class": "filter-hudson"\n    },\n    {\n        "html": "Inkwell",\n        "class": "filter-inkwell"\n    },\n    {\n        "html": "Kelvin",\n        "class": "filter-kelvin"\n    },\n    {\n        "html": "Kuno",\n        "class": "filter-juno"\n    },\n    {\n        "html": "Lark",\n        "class": "filter-lark"\n    },\n    {\n        "html": "Lo-Fi",\n        "class": "filter-lofi"\n    },\n    {\n        "html": "Ludwig",\n        "class": "filter-ludwig"\n    },\n    {\n        "html": "Maven",\n        "class": "filter-maven"\n    },\n    {\n        "html": "Mayfair",\n        "class": "filter-mayfair"\n    },\n    {\n        "html": "Moon",\n        "class": "filter-moon"\n    },\n    {\n        "html": "Nashville",\n        "class": "filter-nashville"\n    },\n    {\n        "html": "Perpetua",\n        "class": "filter-perpetua"\n    },\n    {\n        "html": "Poprocket",\n        "class": "filter-poprocket"\n    },\n    {\n        "html": "Reyes",\n        "class": "filter-reyes"\n    },\n    {\n        "html": "Rise",\n        "class": "filter-rise"\n    },\n    {\n        "html": "Sierra",\n        "class": "filter-sierra"\n    },\n    {\n        "html": "Skyline",\n        "class": "filter-skyline"\n    },\n    {\n        "html": "Slumber",\n        "class": "filter-slumber"\n    },\n    {\n        "html": "Stinson",\n        "class": "filter-stinson"\n    },\n    {\n        "html": "Sutro",\n        "class": "filter-sutro"\n    },\n    {\n        "html": "Toaster",\n        "class": "filter-toaster"\n    },\n    {\n        "html": "Valencia",\n        "class": "filter-valencia"\n    },\n    {\n        "html": "Vesper",\n        "class": "filter-vesper"\n    },\n    {\n        "html": "Walden",\n        "class": "filter-walden"\n    },\n    {\n        "html": "Willow",\n        "class": "filter-willow"\n    },\n    {\n        "html": "X-Pro",\n        "class": "filter-xpro-ii"\n    }\n]\n\nvar art = new Artplayer({\n    container: \'.artplayer-app\',\n    url: \'/assets/sample/video.mp4\',\n    controls: [\n        {\n            position: \'right\',\n            html: \'Instagram Filters\',\n            selector: instagramFilters,\n            onSelect: function (item) {\n                art.template.$video.className = \'art-video \' + item.class;\n                return item.html;\n            },\n        },\n    ],\n});\n')))}p.isMDXComponent=!0}}]);