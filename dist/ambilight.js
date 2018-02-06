!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ambilight=e():t.ambilight=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],o=e.className,i=e.style,a=r(e,["className","style"]),u=document.createElement(t);return o&&u.classList.add(o),i&&Object.assign(u.style,i),Object.keys(a).forEach(function(t){return u.setAttribute(t,a[t])}),s(n).forEach(function(t){return u.appendChild(t)}),u}};e.$node=i;var a=(e.$div=i("div"),e.$canvas=i("canvas"));a.fromVideo=function(t,e){return a(o({},e,{width:t.offsetWidth,height:t.offsetHeight}))};var s=(e.wrap=function(t,e){return e.parentNode.insertBefore(t,e.nextSibling),t.appendChild(e),t},e.drawable=function(t){var e=t.width,n=t.height,r=t.getContext("2d"),o=function(t){return r.drawImage(t,0,0,e,n)};return{node:t,draw:function(t){return o(t),this},snapshot:function(){return r.getImageData(0,0,e,n)}}},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(t)?t:[t]})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.strength,n=void 0===e?1.1:e,r=t.spread,i=void 0===r?60:r;return function(t){var e=t.video,r=t.process,a=t.wrap,s=(0,o.drawable)(o.$canvas.fromVideo(e,{className:"ambilight_backcanvas",style:{transform:"scale("+n+")",filter:"blur("+i+"px"}}));a(s.node),r(e,function(){return s.draw(e)})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(0)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ambient=e.led=void 0;var o=n(3),i=r(o),a=n(1),s=r(a),u=n(9),f=r(u);e.default=i.default,e.led=f.default,e.ambient=s.default},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.default)(),n=function(){e({video:t,process:o,wrap:function(e){var n=(0,s.$div)({className:"ambilight_player"},e);return(0,s.wrap)(n,t)}})};t.readyState>=t.HAVE_METADATA?n():t.addEventListener("loadedmetadata",n)}function o(t,e){var n=function n(){t.paused||t.ended||(e(t),requestAnimationFrame(n))};t.addEventListener("play",n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(i),s=n(0);n(4)},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,n(7)(r,o),r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,".ambilight_player{position:relative;padding:0}.ambilight_player video{z-index:1;position:relative}.ambilight_backcanvas{position:absolute;top:0;left:0;opacity:.8}.ambilight_backlayer{position:absolute;top:0;left:0;right:0;flex-wrap:wrap;display:flex;margin:0;padding:0}.ambilight_backlayer>div{flex:0 0 auto;margin:0;transition:box-shadow .8s;transition-timing-function:ease-out;transform:translateZ(0);border-radius:30px}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=v[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],e));v[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=i[1],u=i[2],f=i[3],c={css:s,media:u,sourceMap:f};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function i(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),i(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),i(t,e),e}function f(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var f=g++;n=y||(y=s(e)),r=l.bind(null,n,f,!1),o=l.bind(null,n,f,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=p.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=d.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=j(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){return document.querySelector(t)},m=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=b.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),y=null,g=0,w=[],x=n(8);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=v[s.id];u.refs--,i.push(u)}t&&r(o(t,e),e);for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete v[u.id]}}}};var j=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.vertical,n=void 0===e?6:e,r=t.horizontal,a=void 0===r?4:r;return function(t){var e=t.video,r=t.process,u=t.wrap,f=i(n,a,e.offsetWidth/n,e.offsetHeight/a),c=(0,s.$div)({className:"ambilight_backlayer"},f.map(function(t){return t.el})),l=(0,s.drawable)(s.$canvas.fromVideo(e));u(c),r(e,function(){var t=l.draw(e).snapshot();f.filter(function(t){return!t.skip}).forEach(function(e){var n=o(e,t);e.el.style.boxShadow="rgb("+n.r+", "+n.g+", "+n.b+") 0px 0px 180px 10px"})})}}function o(t,e){for(var n=t.x,r=t.y,o=t.width,i=t.height,a=new Uint32Array(e.data.buffer),s=0,u=0,f=0,c=0,l=r;l<i;l++)for(var d=n;d<o;d++){var p=function(t,n){return a[~~(t+e.width*n)]}(d+n*o,l+r*i);u+=255&p,f+=p>>8&255,c+=p>>16&255,s++}return{r:~~(u/s),g:~~(f/s),b:~~(c/s)}}function i(t,e,n,r){for(var o=[],i=0;i<e;i++)for(var s=0;s<t;s++){var u=i>0&&i<e-1&&s>0&&s<t-1;o.push(a({x:s,y:i,width:n,height:r,skip:u}))}return o}function a(t){var e=t.x,n=t.y,r=t.width,o=t.height;return{x:e,y:n,width:r,height:o,skip:t.skip,el:(0,s.$div)({style:{width:r+"px",height:o+"px"}})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=n(0)}])});
//# sourceMappingURL=ambilight.js.map