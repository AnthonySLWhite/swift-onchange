parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>null===e||"object"!=typeof e&&"function"!=typeof e,t=Symbol("ProxyTarget"),r=0,n=(r,n={},o=0)=>{null===n&&(n={});let c=!1,f=!1;const l=new WeakMap,s=e=>{c?f||(f=!0):r(e)},u=(e,t)=>{if(!l.has(e))return;l.get(e).delete(t)},p={get(r,n,o){if(n===t)return r;let c=Reflect.get(r,n,o);if(e(c))return c;const f=((e,t)=>{l.has(e)||l.set(e,new Map);const r=l.get(e);if(r.has(t))return r.get(t);const n=Reflect.getOwnPropertyDescriptor(e,t);return r.set(t,n),n})(r,n);if(f&&!f.configurable){if(f.set&&!f.get)return;if(!1===f.writable)return c}return c=i(c),new Proxy(c,p)},set(e,r,n,o){n&&void 0!==n[t]&&(n=n[t]);const c=Reflect.get(e,r,n,o);n=i(n);const f=Reflect.set(e,r,n);return c!==n&&s(n),f},defineProperty(e,t,r){const n=Reflect.defineProperty(e,t,r);return u(e,t),s(e),n},deleteProperty(e,t){const r=Reflect.deleteProperty(e,t);return u(e,t),s(e),r},apply(e,t,n){if(!c){c=!0;const o=Reflect.apply(e,t,n);return f&&r(t),c=!1,f=!1,o}return Reflect.apply(e,t,n)}};function i(e){return o&&!Array.isArray(e)&&"object"==typeof e?(e.SetState=function(t){return Object.keys(t).map(r=>e[r]=t[r]),s(e),e},e):e}return n=i(n),new Proxy(n,p)};var o=n;exports.default=o;
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.map