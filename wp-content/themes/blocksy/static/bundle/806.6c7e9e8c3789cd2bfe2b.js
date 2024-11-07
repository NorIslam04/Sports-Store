"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[806,87],{9257:function(t,e,n){n.d(e,{O:function(){return i}});const i=function(){return"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1)}},9679:function(t,e,n){n.d(e,{$0:function(){return o},Kz:function(){return a},Vz:function(){return c},pF:function(){return u},r:function(){return s},v3:function(){return r},zT:function(){return i}});const i=function(t){t.closest(".ct-media-container, .ct-dynamic-media").dataset.state="playing"},o=function(t){t&&(t.matches('iframe[src*="youtu"]')?t.contentWindow.postMessage(JSON.stringify({event:"command",func:"mute"}),"*"):t.matches('iframe[src*="vimeo"]')&&t.contentWindow.postMessage(JSON.stringify({method:"setMuted",value:!0}),"*"))},a=function(t){t&&(t.matches("video")?t.play():t.matches('iframe[src*="youtu"]')?t.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo"}),"*"):t.matches('iframe[src*="vimeo"]')&&t.contentWindow.postMessage(JSON.stringify({method:"play"}),"*"))},r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};t&&(t.matches("video[autoplay]")||t.matches('iframe[src*="youtu"][src*="autoplay=1"]')||t.matches('iframe[src*="vimeo"][src*="autoplay=1"]')?(e(),a(t)):n())},c=function(t){t.closest(".ct-media-container, .ct-dynamic-media").dataset.state="paused"},s=function(t){if(t)if(t.matches("video"))t.pause();else if(t.matches('iframe[src*="youtu"]'))t.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo"}),"*");else if(t.matches('iframe[src*="vimeo"]'))t.contentWindow.postMessage(JSON.stringify({method:"pause"}),"*");else if(t.matches("iframe")){const e=t.src;t.src="",t.src=e}},u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(t)return t.matches("video")?(e("ready"),t.addEventListener("play",(function(){return e("play")})),void t.addEventListener("pause",(function(){return e("pause")}))):t.matches('iframe[src*="youtu"]')?(window.addEventListener("message",(function(n){if(n.data&&n.source===t.contentWindow)try{const t=JSON.parse(n.data);"onStateChange"===t.event&&(1===t.info&&e("play"),2===t.info&&e("pause"))}catch(n){}})),void t.addEventListener("load",(function(){t.contentWindow.postMessage(JSON.stringify({event:"listening",id:1,channel:"widget"}),"*"),t.contentWindow.postMessage(JSON.stringify({event:"command",func:"addEventListener",args:["onStateChange"],id:1,channel:"widget"}),"*"),e("ready")}))):void(t.matches('iframe[src*="vimeo"]')&&window.addEventListener("message",(function(n){if(n.data&&n.source===t.contentWindow)try{const i=JSON.parse(n.data);"ready"===i.event&&(t.contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:"pause"}),"*"),t.contentWindow.postMessage(JSON.stringify({method:"addEventListener",value:"play"}),"*"),e(i.event)),"pause"!==i.event&&"play"!==i.event||e(i.event)}catch(n){}})))}},4087:function(t,e,n){n.r(e),n.d(e,{fetchVideoBy:function(){return d},mount:function(){return p}});var i=n(9679),o=n(9257),a=n(2248);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const u={},d=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=c({ignoreVideoOptions:!1},e);let n=ct_localizations.ajax_url+"?action=blocksy_get_image_video_component&media="+t;return e.ignoreVideoOptions&&(n+="&ignore_video_options=true"),new Promise((function(t){(function(t){return u[t]?new Promise((function(e){e(u[t]),u[t]=u[t].clone()})):new Promise((function(e){return fetch(t).then((function(n){e(n),u[t]=n.clone()}))}))})(n).then((function(e){200===e.status&&e.json().then((function(e){let{success:n,data:i}=e;n&&t(i)}))}))}))},f=function(t){t.querySelector(".ct-video-indicator").classList.add("loading"),d(t.dataset.mediaId).then((function(e){const n=document.createElement("div");n.innerHTML=e.html;const a=n.firstChild;t.insertAdjacentElement("beforeend",a);const r=t.querySelector("video,iframe"),s=r.closest(".flexy-container[data-autoplay]"),u=null==s?void 0:s.flexy;!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=c({onPause:function(){},onPlay:function(){},onReady:function(){}},e),t.isListeningForStateChanges||(t.isListeningForStateChanges=!0,(0,i.pF)(t,(function(n){"pause"===n&&((0,i.Vz)(t),e.onPause()),"play"===n&&(e.onPlay(),(0,i.zT)(t)),"ready"===n&&e.onReady()})))}(r,{onPlay:function(){setTimeout((function(){t.querySelector(".ct-video-indicator").classList.remove("loading")}),120),u&&(u.options=c(c({},u.options),{},{autoplay:!1,_autoplay:!1}))},onPause:function(){u&&(u.options=c(c({},u.options),{},{autoplay:parseInt(s.dataset.autoplay),_autoplay:parseInt(s.dataset.autoplay)}),u.state=c(c({},u.state),{},{lastTimeAnimated:(new Date).getTime()}))},onReady:function(){(0,o.O)()&&(0,i.$0)(r),(0,i.Kz)(r)}})}))},l=function(t){const e=ct_localizations.dynamic_styles_selectors.find((function(t){return".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]"===t.selector}));e&&(0,a.Xr)(e.url).then((function(){f(t)}))};ctEvents.on("blocksy:frontend:flexy:slide-change",(function(t){let{instance:e,payload:n}=t;[...e.sliderContainer.querySelectorAll("video,iframe")].map((function(t){return(0,i.r)(t)}));const o=e.sliderContainer.children[n.currentIndex].querySelector(".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]");if(!o)return;const a=o.querySelector("video,iframe");a?(0,i.v3)(a):m(o,{performVisibilityCheck:!1})})),ctEvents.on("blocksy:ajax:filters:done",(function(){[...document.querySelectorAll(".ct-media-container[data-media-id]")].map((function(t){m(t)}))}));const m=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=c({performVisibilityCheck:!0},e),!t.matches('[data-state*="autoplay"]'))return;let n=!0;if(e.performVisibilityCheck&&t.closest(".flexy-items")){const e=t.getBoundingClientRect(),i=t.closest(".flexy-items").getBoundingClientRect();n=e.left>=i.left&&e.left<=i.left+i.width&&e.top>=i.top&&e.top<=i.top+i.height}n&&(t.removeAttribute("data-state"),l(t))};let y=!1;const p=function(t,e){let{event:n}=e;if(!n||"scroll"===n.type){if(y)return;y=!0;const t=function(){[...document.querySelectorAll(".ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]")].map((function(t){console.log(t),m(t)}))};return ctEvents.on("blocksy:frontend:init",(function(){t()})),void t()}const o=t.querySelector("video,iframe");o?t.matches('[data-state="playing"]')?(0,i.r)(o):(0,i.Kz)(o):l(t)}}}]);