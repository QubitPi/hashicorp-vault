"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2121],{26429:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(67294)),a=r(56281),u=r(99790);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y="https://connect.facebook.net/en_US/sdk.js",b="fbAsyncInit",d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(i,e);var t,r,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=f(i);return e=t?Reflect.construct(r,arguments,f(this).constructor):r.apply(this,arguments),e&&("object"===n(e)||"function"==typeof e)?e:s(this)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return p(s(e=u.call.apply(u,[this].concat(r))),"callPlayer",a.callPlayer),p(s(e),"playerID",e.props.config.playerId||"".concat("facebook-player-").concat((0,a.randomString)())),p(s(e),"mute",function(){e.callPlayer("mute")}),p(s(e),"unmute",function(){e.callPlayer("unmute")}),e}return r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this;if(t){(0,a.getSDK)(y,"FB",b).then(function(e){return e.XFBML.parse()});return}(0,a.getSDK)(y,"FB",b).then(function(e){e.init({appId:r.props.config.appId,xfbml:!0,version:r.props.config.version}),e.Event.subscribe("xfbml.render",function(e){r.props.onLoaded()}),e.Event.subscribe("xfbml.ready",function(e){"video"===e.type&&e.id===r.playerID&&(r.player=e.instance,r.player.subscribe("startedPlaying",r.props.onPlay),r.player.subscribe("paused",r.props.onPause),r.player.subscribe("finishedPlaying",r.props.onEnded),r.player.subscribe("startedBuffering",r.props.onBuffer),r.player.subscribe("finishedBuffering",r.props.onBufferEnd),r.player.subscribe("error",r.props.onError),r.props.muted?r.callPlayer("mute"):r.callPlayer("unmute"),r.props.onReady(),document.getElementById(r.playerID).querySelector("iframe").style.visibility="visible")})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.config.attributes;return o.default.createElement("div",l({style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"},e))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,r),i}(o.Component);t.default=d,p(d,"displayName","Facebook"),p(d,"canPlay",u.canPlay.facebook),p(d,"loopOnEnded",!0)}}]);