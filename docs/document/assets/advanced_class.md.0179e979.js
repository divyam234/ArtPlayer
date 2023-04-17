import{_ as s,c as o,o as n,U as a,x as e}from"./chunks/framework.75837252.js";const U=JSON.parse('{"title":"静态属性","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/class.md","lastUpdated":1674271984000}'),l={name:"advanced/class.md"},t=a('<h1 id="静态属性" tabindex="-1">静态属性 <a class="header-anchor" href="#静态属性" aria-label="Permalink to &quot;静态属性&quot;">​</a></h1><p>这里的 <code>静态属性</code> 是指挂载在 <code>构造函数</code> 的 <code>一级属性</code>，非常少使用</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>有些属性是全大写的，说明这些属性是不稳定的，可能会在将来被更改</p></div><h2 id="instances" tabindex="-1"><code>instances</code> <a class="header-anchor" href="#instances" aria-label="Permalink to &quot;`instances`&quot;">​</a></h2><p>返回全部播放器实例的数组，假如你想同时管理多个播放器的时候，可以用到该属性</p>',5),r=e("div",{className:"run-code"},"▶ Run Code",-1),c=a(`<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">instances])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> art </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Artplayer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.artplayer-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/assets/sample/video.mp4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">instances])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="version" tabindex="-1"><code>version</code> <a class="header-anchor" href="#version" aria-label="Permalink to &quot;\`version\`&quot;">​</a></h2><p>返回播放器的版本信息</p>`,3),i=e("div",{className:"run-code"},"▶ Run Code",-1),p=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">version)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="env" tabindex="-1"><code>env</code> <a class="header-anchor" href="#env" aria-label="Permalink to &quot;`env`&quot;">​</a></h2><p>返回播放器的环境变量</p>',3),d=e("div",{className:"run-code"},"▶ Run Code",-1),h=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="build" tabindex="-1"><code>build</code> <a class="header-anchor" href="#build" aria-label="Permalink to &quot;`build`&quot;">​</a></h2><p>返回播放器的打包时间</p>',3),_=e("div",{className:"run-code"},"▶ Run Code",-1),u=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">build)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="config" tabindex="-1"><code>config</code> <a class="header-anchor" href="#config" aria-label="Permalink to &quot;`config`&quot;">​</a></h2><p>返回视频的默认配置</p>',3),A=e("div",{className:"run-code"},"▶ Run Code",-1),b=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="utils" tabindex="-1"><code>utils</code> <a class="header-anchor" href="#utils" aria-label="Permalink to &quot;`utils`&quot;">​</a></h2><p>返回播放器的工具函数集合</p>',3),m=e("div",{className:"run-code"},"▶ Run Code",-1),C=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">全部工具函数请参考以下地址：</p><p><a href="https://github.com/zhw2590582/ArtPlayer/blob/master/packages/artplayer/types/utils.d.ts" target="_blank" rel="noreferrer">artplayer/types/utils.d.ts</a></p></div><h2 id="scheme" tabindex="-1"><code>scheme</code> <a class="header-anchor" href="#scheme" aria-label="Permalink to &quot;`scheme`&quot;">​</a></h2><p>返回播放器选项的校验方案</p>',4),D=e("div",{className:"run-code"},"▶ Run Code",-1),T=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scheme)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="emitter" tabindex="-1"><code>Emitter</code> <a class="header-anchor" href="#emitter" aria-label="Permalink to &quot;`Emitter`&quot;">​</a></h2><p>返回事件分发器的构造函数</p>',3),y=e("div",{className:"run-code"},"▶ Run Code",-1),F=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Emitter)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="validator" tabindex="-1"><code>validator</code> <a class="header-anchor" href="#validator" aria-label="Permalink to &quot;`validator`&quot;">​</a></h2><p>返回选项的校验函数</p>',3),E=e("div",{className:"run-code"},"▶ Run Code",-1),I=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">validator)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="kindof" tabindex="-1"><code>kindOf</code> <a class="header-anchor" href="#kindof" aria-label="Permalink to &quot;`kindOf`&quot;">​</a></h2><p>返回类型检测的函数工具</p>',3),P=e("div",{className:"run-code"},"▶ Run Code",-1),q=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">kindOf)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="html" tabindex="-1"><code>html</code> <a class="header-anchor" href="#html" aria-label="Permalink to &quot;`html`&quot;">​</a></h2><p>返回播放器所需的 <code>html</code> 字符串</p>',3),f=e("div",{className:"run-code"},"▶ Run Code",-1),v=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="option" tabindex="-1"><code>option</code> <a class="header-anchor" href="#option" aria-label="Permalink to &quot;`option`&quot;">​</a></h2><p>返回播放器的默认选项</p>',3),k=e("div",{className:"run-code"},"▶ Run Code",-1),O=a('<div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#A6ACCD;">(Artplayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">option)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="debug" tabindex="-1"><code>DEBUG</code> <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;`DEBUG`&quot;">​</a></h2><h2 id="contextmenu" tabindex="-1"><code>CONTEXTMENU</code> <a class="header-anchor" href="#contextmenu" aria-label="Permalink to &quot;`CONTEXTMENU`&quot;">​</a></h2><h2 id="notice-time" tabindex="-1"><code>NOTICE_TIME</code> <a class="header-anchor" href="#notice-time" aria-label="Permalink to &quot;`NOTICE_TIME`&quot;">​</a></h2><h2 id="setting-width" tabindex="-1"><code>SETTING_WIDTH</code> <a class="header-anchor" href="#setting-width" aria-label="Permalink to &quot;`SETTING_WIDTH`&quot;">​</a></h2><h2 id="setting-item-width" tabindex="-1"><code>SETTING_ITEM_WIDTH</code> <a class="header-anchor" href="#setting-item-width" aria-label="Permalink to &quot;`SETTING_ITEM_WIDTH`&quot;">​</a></h2><h2 id="setting-item-height" tabindex="-1"><code>SETTING_ITEM_HEIGHT</code> <a class="header-anchor" href="#setting-item-height" aria-label="Permalink to &quot;`SETTING_ITEM_HEIGHT`&quot;">​</a></h2><h2 id="indicator-size" tabindex="-1"><code>INDICATOR_SIZE</code> <a class="header-anchor" href="#indicator-size" aria-label="Permalink to &quot;`INDICATOR_SIZE`&quot;">​</a></h2><h2 id="indicator-size-icon" tabindex="-1"><code>INDICATOR_SIZE_ICON</code> <a class="header-anchor" href="#indicator-size-icon" aria-label="Permalink to &quot;`INDICATOR_SIZE_ICON`&quot;">​</a></h2><h2 id="indicator-size-mobile" tabindex="-1"><code>INDICATOR_SIZE_MOBILE</code> <a class="header-anchor" href="#indicator-size-mobile" aria-label="Permalink to &quot;`INDICATOR_SIZE_MOBILE`&quot;">​</a></h2><h2 id="indicator-size-mobile-icon" tabindex="-1"><code>INDICATOR_SIZE_MOBILE_ICON</code> <a class="header-anchor" href="#indicator-size-mobile-icon" aria-label="Permalink to &quot;`INDICATOR_SIZE_MOBILE_ICON`&quot;">​</a></h2><h2 id="volume-panel-width" tabindex="-1"><code>VOLUME_PANEL_WIDTH</code> <a class="header-anchor" href="#volume-panel-width" aria-label="Permalink to &quot;`VOLUME_PANEL_WIDTH`&quot;">​</a></h2><h2 id="volume-handle-width" tabindex="-1"><code>VOLUME_HANDLE_WIDTH</code> <a class="header-anchor" href="#volume-handle-width" aria-label="Permalink to &quot;`VOLUME_HANDLE_WIDTH`&quot;">​</a></h2><h2 id="resize-time" tabindex="-1"><code>RESIZE_TIME</code> <a class="header-anchor" href="#resize-time" aria-label="Permalink to &quot;`RESIZE_TIME`&quot;">​</a></h2><h2 id="scroll-time" tabindex="-1"><code>SCROLL_TIME</code> <a class="header-anchor" href="#scroll-time" aria-label="Permalink to &quot;`SCROLL_TIME`&quot;">​</a></h2><h2 id="scroll-gap" tabindex="-1"><code>SCROLL_GAP</code> <a class="header-anchor" href="#scroll-gap" aria-label="Permalink to &quot;`SCROLL_GAP`&quot;">​</a></h2><h2 id="auto-playback-max" tabindex="-1"><code>AUTO_PLAYBACK_MAX</code> <a class="header-anchor" href="#auto-playback-max" aria-label="Permalink to &quot;`AUTO_PLAYBACK_MAX`&quot;">​</a></h2><h2 id="auto-playback-min" tabindex="-1"><code>AUTO_PLAYBACK_MIN</code> <a class="header-anchor" href="#auto-playback-min" aria-label="Permalink to &quot;`AUTO_PLAYBACK_MIN`&quot;">​</a></h2><h2 id="auto-playback-timeout" tabindex="-1"><code>AUTO_PLAYBACK_TIMEOUT</code> <a class="header-anchor" href="#auto-playback-timeout" aria-label="Permalink to &quot;`AUTO_PLAYBACK_TIMEOUT`&quot;">​</a></h2><h2 id="reconnect-time-max" tabindex="-1"><code>RECONNECT_TIME_MAX</code> <a class="header-anchor" href="#reconnect-time-max" aria-label="Permalink to &quot;`RECONNECT_TIME_MAX`&quot;">​</a></h2><h2 id="reconnect-sleep-time" tabindex="-1"><code>RECONNECT_SLEEP_TIME</code> <a class="header-anchor" href="#reconnect-sleep-time" aria-label="Permalink to &quot;`RECONNECT_SLEEP_TIME`&quot;">​</a></h2><h2 id="control-hide-time" tabindex="-1"><code>CONTROL_HIDE_TIME</code> <a class="header-anchor" href="#control-hide-time" aria-label="Permalink to &quot;`CONTROL_HIDE_TIME`&quot;">​</a></h2><h2 id="db-clice-time" tabindex="-1"><code>DB_CLICE_TIME</code> <a class="header-anchor" href="#db-clice-time" aria-label="Permalink to &quot;`DB_CLICE_TIME`&quot;">​</a></h2><h2 id="mobile-auto-playbackrate" tabindex="-1"><code>MOBILE_AUTO_PLAYBACKRATE</code> <a class="header-anchor" href="#mobile-auto-playbackrate" aria-label="Permalink to &quot;`MOBILE_AUTO_PLAYBACKRATE`&quot;">​</a></h2><h2 id="mobile-auto-playbackrate-time" tabindex="-1"><code>MOBILE_AUTO_PLAYBACKRATE_TIME</code> <a class="header-anchor" href="#mobile-auto-playbackrate-time" aria-label="Permalink to &quot;`MOBILE_AUTO_PLAYBACKRATE_TIME`&quot;">​</a></h2><h2 id="mobile-auto-orientation-time" tabindex="-1"><code>MOBILE_AUTO_ORIENTATION_TIME</code> <a class="header-anchor" href="#mobile-auto-orientation-time" aria-label="Permalink to &quot;`MOBILE_AUTO_ORIENTATION_TIME`&quot;">​</a></h2><h2 id="info-loop-time" tabindex="-1"><code>INFO_LOOP_TIME</code> <a class="header-anchor" href="#info-loop-time" aria-label="Permalink to &quot;`INFO_LOOP_TIME`&quot;">​</a></h2><h2 id="fast-forward-value" tabindex="-1"><code>FAST_FORWARD_VALUE</code> <a class="header-anchor" href="#fast-forward-value" aria-label="Permalink to &quot;`FAST_FORWARD_VALUE`&quot;">​</a></h2><h2 id="fast-forward-time" tabindex="-1"><code>FAST_FORWARD_TIME</code> <a class="header-anchor" href="#fast-forward-time" aria-label="Permalink to &quot;`FAST_FORWARD_TIME`&quot;">​</a></h2><h2 id="touch-move-ratio" tabindex="-1"><code>TOUCH_MOVE_RATIO</code> <a class="header-anchor" href="#touch-move-ratio" aria-label="Permalink to &quot;`TOUCH_MOVE_RATIO`&quot;">​</a></h2><h2 id="volume-step" tabindex="-1"><code>VOLUME_STEP</code> <a class="header-anchor" href="#volume-step" aria-label="Permalink to &quot;`VOLUME_STEP`&quot;">​</a></h2><h2 id="seek-step" tabindex="-1"><code>SEEK_STEP</code> <a class="header-anchor" href="#seek-step" aria-label="Permalink to &quot;`SEEK_STEP`&quot;">​</a></h2><h2 id="progress-height" tabindex="-1"><code>PROGRESS_HEIGHT</code> <a class="header-anchor" href="#progress-height" aria-label="Permalink to &quot;`PROGRESS_HEIGHT`&quot;">​</a></h2><h2 id="playback-rate" tabindex="-1"><code>PLAYBACK_RATE</code> <a class="header-anchor" href="#playback-rate" aria-label="Permalink to &quot;`PLAYBACK_RATE`&quot;">​</a></h2><h2 id="aspect-ratio" tabindex="-1"><code>ASPECT_RATIO</code> <a class="header-anchor" href="#aspect-ratio" aria-label="Permalink to &quot;`ASPECT_RATIO`&quot;">​</a></h2><h2 id="flip" tabindex="-1"><code>FLIP</code> <a class="header-anchor" href="#flip" aria-label="Permalink to &quot;`FLIP`&quot;">​</a></h2><h2 id="fullscreen-web-in-body" tabindex="-1"><code>FULLSCREEN_WEB_IN_BODY</code> <a class="header-anchor" href="#fullscreen-web-in-body" aria-label="Permalink to &quot;`FULLSCREEN_WEB_IN_BODY`&quot;">​</a></h2>',37),S=[t,r,c,i,p,d,h,_,u,A,b,m,C,D,T,y,F,E,I,P,q,f,v,k,O];function N(g,R,x,L,M,V){return n(),o("div",null,S)}const w=s(l,[["render",N]]);export{U as __pageData,w as default};