"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7596],{65134:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(67294)),a=r(56281),i=r(99790);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(h,e);var t,r,u,b=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,o=y(h);if(t){var a=y(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(e=r)&&("object"===n(e)||"function"==typeof e)?e:s(this)});function h(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(s(e=b.call.apply(b,[this].concat(r))),"callPlayer",a.callPlayer),d(s(e),"onDurationChange",function(){var t=e.getDuration();e.props.onDuration(t)}),d(s(e),"mute",function(){e.callPlayer("setMuted",!0)}),d(s(e),"unmute",function(){e.callPlayer("setMuted",!1)}),d(s(e),"ref",function(t){e.container=t}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t,r=this,n=this.props,o=n.controls,u=n.config,f=n.onError,p=n.playing,s=(function(e){if(Array.isArray(e))return e}(t=e.match(i.MATCH_URL_DAILYMOTION))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(t,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];if(this.player){this.player.load(s,{start:(0,a.parseStartTime)(e),autoplay:p});return}(0,a.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",function(e){return e.player}).then(function(t){if(r.container){var n=t.player;r.player=new n(r.container,{width:"100%",height:"100%",video:s,params:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({controls:o,autoplay:r.props.playing,mute:r.props.muted,start:(0,a.parseStartTime)(e),origin:window.location.origin},u.params),events:{apiready:r.props.onReady,seeked:function(){return r.props.onSeek(r.player.currentTime)},video_end:r.props.onEnded,durationchange:r.onDurationChange,pause:r.props.onPause,playing:r.props.onPlay,waiting:r.props.onBuffer,error:function(e){return f(e)}}})}},f)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e=this.props.display;return o.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},o.default.createElement("div",{ref:this.ref}))}}],f(h.prototype,r),u&&f(h,u),h}(o.Component);t.default=b,d(b,"displayName","DailyMotion"),d(b,"canPlay",i.canPlay.dailymotion),d(b,"loopOnEnded",!0)}}]);