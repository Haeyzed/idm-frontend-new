function Bh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mh={exports:{}},ks={},zh={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),by=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),_y=Symbol.for("react.strict_mode"),Py=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Dy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),Oy=Symbol.for("react.lazy"),uf=Symbol.iterator;function Ny(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var Fh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uh=Object.assign,Hh={};function So(e,t,n){this.props=e,this.context=t,this.refs=Hh,this.updater=n||Fh}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vh(){}Vh.prototype=So.prototype;function _c(e,t,n){this.props=e,this.context=t,this.refs=Hh,this.updater=n||Fh}var Pc=_c.prototype=new Vh;Pc.constructor=_c;Uh(Pc,So.prototype);Pc.isPureReactComponent=!0;var cf=Array.isArray,Wh=Object.prototype.hasOwnProperty,Rc={current:null},Kh={key:!0,ref:!0,__self:!0,__source:!0};function Gh(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Wh.call(t,r)&&!Kh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ai,type:e,key:i,ref:a,props:o,_owner:Rc.current}}function Ay(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function Ly(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var df=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ly(""+e.key):t.toString(36)}function ka(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ai:case by:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ll(a,0):r,cf(o)?(n="",e!=null&&(n=e.replace(df,"$&/")+"/"),ka(o,t,n,"",function(u){return u})):o!=null&&(Ic(o)&&(o=Ay(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(df,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",cf(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+ll(i,s);a+=ka(i,t,n,l,o)}else if(l=Ny(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+ll(i,s++),a+=ka(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ta(e,t,n){if(e==null)return e;var r=[],o=0;return ka(e,r,"","",function(i){return t.call(n,i,o++)}),r}function By(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Ea={transition:null},My={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Rc};oe.Children={map:ta,forEach:function(e,t,n){ta(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ta(e,function(){t++}),t},toArray:function(e){return ta(e,function(t){return t})||[]},only:function(e){if(!Ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=So;oe.Fragment=Ty;oe.Profiler=Py;oe.PureComponent=_c;oe.StrictMode=_y;oe.Suspense=$y;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uh({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Rc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Wh.call(t,l)&&!Kh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ai,type:e.type,key:o,ref:i,props:r,_owner:a}};oe.createContext=function(e){return e={$$typeof:Iy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ry,_context:e},e.Consumer=e};oe.createElement=Gh;oe.createFactory=function(e){var t=Gh.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:Dy,render:e}};oe.isValidElement=Ic;oe.lazy=function(e){return{$$typeof:Oy,_payload:{_status:-1,_result:e},_init:By}};oe.memo=function(e,t){return{$$typeof:jy,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(e,t){return at.current.useCallback(e,t)};oe.useContext=function(e){return at.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return at.current.useDeferredValue(e)};oe.useEffect=function(e,t){return at.current.useEffect(e,t)};oe.useId=function(){return at.current.useId()};oe.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return at.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};oe.useRef=function(e){return at.current.useRef(e)};oe.useState=function(e){return at.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return at.current.useTransition()};oe.version="18.2.0";zh.exports=oe;var E=zh.exports;const Ne=Tc(E),zy=Bh({__proto__:null,default:Ne},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=E,Uy=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Vy=Object.prototype.hasOwnProperty,Wy=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ky={key:!0,ref:!0,__self:!0,__source:!0};function Yh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Vy.call(t,r)&&!Ky.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uy,type:e,key:i,ref:a,props:o,_owner:Wy.current}}ks.Fragment=Hy;ks.jsx=Yh;ks.jsxs=Yh;Mh.exports=ks;var m=Mh.exports,iu={},qh={exports:{}},xt={},Qh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,U){var O=A.length;A.push(U);e:for(;0<O;){var W=O-1>>>1,K=A[W];if(0<o(K,U))A[W]=U,A[O]=K,O=W;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],O=A.pop();if(O!==U){A[0]=O;e:for(var W=0,K=A.length,fe=K>>>1;W<fe;){var pe=2*(W+1)-1,re=A[pe],Ie=pe+1,ht=A[Ie];if(0>o(re,O))Ie<K&&0>o(ht,re)?(A[W]=ht,A[Ie]=O,W=Ie):(A[W]=re,A[pe]=O,W=pe);else if(Ie<K&&0>o(ht,O))A[W]=ht,A[Ie]=O,W=Ie;else break e}}return U}function o(A,U){var O=A.sortIndex-U.sortIndex;return O!==0?O:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,w=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function C(A){if(v=!1,g(A),!y)if(n(l)!==null)y=!0,Me(_);else{var U=n(u);U!==null&&ue(C,U.startTime-A)}}function _(A,U){y=!1,v&&(v=!1,d(D),D=-1),w=!0;var O=h;try{for(g(U),f=n(l);f!==null&&(!(f.expirationTime>U)||A&&!X());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var K=W(f.expirationTime<=U);U=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),g(U)}else r(l);f=n(l)}if(f!==null)var fe=!0;else{var pe=n(u);pe!==null&&ue(C,pe.startTime-U),fe=!1}return fe}finally{f=null,h=O,w=!1}}var x=!1,b=null,D=-1,L=5,z=-1;function X(){return!(e.unstable_now()-z<L)}function Y(){if(b!==null){var A=e.unstable_now();z=A;var U=!0;try{U=b(!0,A)}finally{U?j():(x=!1,b=null)}}else x=!1}var j;if(typeof p=="function")j=function(){p(Y)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,se=V.port2;V.port1.onmessage=Y,j=function(){se.postMessage(null)}}else j=function(){S(Y,0)};function Me(A){b=A,x||(x=!0,j())}function ue(A,U){D=S(function(){A(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Me(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var O=h;h=U;try{return A()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=h;h=A;try{return U()}finally{h=O}},e.unstable_scheduleCallback=function(A,U,O){var W=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,A={id:c++,callback:U,priorityLevel:A,startTime:O,expirationTime:K,sortIndex:-1},O>W?(A.sortIndex=O,t(u,A),n(l)===null&&A===n(u)&&(v?(d(D),D=-1):v=!0,ue(C,O-W))):(A.sortIndex=K,t(l,A),y||w||(y=!0,Me(_))),A},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(A){var U=h;return function(){var O=h;h=U;try{return A.apply(this,arguments)}finally{h=O}}}})(Jh);Qh.exports=Jh;var Gy=Qh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=E,wt=Gy;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zh=new Set,di={};function Pr(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(di[e]=t,e=0;e<t.length;e++)Zh.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,Yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ff={},pf={};function qy(e){return au.call(pf,e)?!0:au.call(ff,e)?!1:Yy.test(e)?pf[e]=!0:(ff[e]=!0,!1)}function Qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jy(e,t,n,r){if(t===null||typeof t>"u"||Qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function $c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dc,$c);Qe[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dc,$c);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dc,$c);Qe[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function jc(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jy(t,n,o,r)&&(n=null),r||o===null?qy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),hf=Symbol.iterator;function No(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,ul;function qo(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qo(e):""}function Xy(e){switch(e.tag){case 5:return qo(e.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,!0),e;default:return""}}function cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Mr:return"Portal";case su:return"Profiler";case Oc:return"StrictMode";case lu:return"Suspense";case uu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tm:return(e.displayName||"Context")+".Consumer";case em:return(e._context.displayName||"Context")+".Provider";case Nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ac:return t=e.displayName||null,t!==null?t:cu(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return cu(e(t))}catch{}}return null}function Zy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cu(t);case 8:return t===Oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ev(e){var t=rm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ra(e){e._valueTracker||(e._valueTracker=ev(e))}function om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function du(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function im(e,t){t=t.checked,t!=null&&jc(e,"checked",t,!1)}function fu(e,t){im(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pu(e,t.type,n):t.hasOwnProperty("defaultValue")&&pu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pu(e,t,n){(t!=="number"||Ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qo=Array.isArray;function to(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Qo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function am(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oa,lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tv=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){tv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function um(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function cm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=um(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var nv=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(e,t){if(t){if(nv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function yu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vu=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wu=null,no=null,ro=null;function wf(e){if(e=Mi(e)){if(typeof wu!="function")throw Error($(280));var t=e.stateNode;t&&(t=_s(t),wu(e.stateNode,e.type,t))}}function dm(e){no?ro?ro.push(e):ro=[e]:no=e}function fm(){if(no){var e=no,t=ro;if(ro=no=null,wf(e),t)for(e=0;e<t.length;e++)wf(t[e])}}function pm(e,t){return e(t)}function hm(){}var fl=!1;function mm(e,t,n){if(fl)return e(t,n);fl=!0;try{return pm(e,t,n)}finally{fl=!1,(no!==null||ro!==null)&&(hm(),fm())}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var r=_s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var xu=!1;if(cn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{xu=!1}function rv(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ti=!1,Ha=null,Va=!1,Su=null,ov={onError:function(e){ti=!0,Ha=e}};function iv(e,t,n,r,o,i,a,s,l){ti=!1,Ha=null,rv.apply(ov,arguments)}function av(e,t,n,r,o,i,a,s,l){if(iv.apply(this,arguments),ti){if(ti){var u=Ha;ti=!1,Ha=null}else throw Error($(198));Va||(Va=!0,Su=u)}}function Rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xf(e){if(Rr(e)!==e)throw Error($(188))}function sv(e){var t=e.alternate;if(!t){if(t=Rr(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xf(o),e;if(i===r)return xf(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function ym(e){return e=sv(e),e!==null?vm(e):null}function vm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vm(e);if(t!==null)return t;e=e.sibling}return null}var wm=wt.unstable_scheduleCallback,Sf=wt.unstable_cancelCallback,lv=wt.unstable_shouldYield,uv=wt.unstable_requestPaint,$e=wt.unstable_now,cv=wt.unstable_getCurrentPriorityLevel,Bc=wt.unstable_ImmediatePriority,xm=wt.unstable_UserBlockingPriority,Wa=wt.unstable_NormalPriority,dv=wt.unstable_LowPriority,Sm=wt.unstable_IdlePriority,Es=null,Yt=null;function fv(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:mv,pv=Math.log,hv=Math.LN2;function mv(e){return e>>>=0,e===0?32:31-(pv(e)/hv|0)|0}var ia=64,aa=4194304;function Jo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Jo(s):(i&=a,i!==0&&(r=Jo(i)))}else a=n&~o,a!==0?r=Jo(a):i!==0&&(r=Jo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),o=1<<n,r|=e[n],t&=~o;return r}function gv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Bt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=gv(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function ku(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function km(){var e=ia;return ia<<=1,!(ia&4194240)&&(ia=64),e}function pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function vv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Bt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Mc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var de=0;function Em(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cm,zc,bm,Tm,_m,Eu=!1,sa=[],Rn=null,In=null,Dn=null,hi=new Map,mi=new Map,bn=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function Lo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Mi(t),t!==null&&zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xv(e,t,n,r,o){switch(t){case"focusin":return Rn=Lo(Rn,e,t,n,r,o),!0;case"dragenter":return In=Lo(In,e,t,n,r,o),!0;case"mouseover":return Dn=Lo(Dn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return hi.set(i,Lo(hi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mi.set(i,Lo(mi.get(i)||null,e,t,n,r,o)),!0}return!1}function Pm(e){var t=rr(e.target);if(t!==null){var n=Rr(t);if(n!==null){if(t=n.tag,t===13){if(t=gm(n),t!==null){e.blockedOn=t,_m(e.priority,function(){bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vu=r,n.target.dispatchEvent(r),vu=null}else return t=Mi(n),t!==null&&zc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){Ca(e)&&n.delete(t)}function Sv(){Eu=!1,Rn!==null&&Ca(Rn)&&(Rn=null),In!==null&&Ca(In)&&(In=null),Dn!==null&&Ca(Dn)&&(Dn=null),hi.forEach(Ef),mi.forEach(Ef)}function Bo(e,t){e.blockedOn===t&&(e.blockedOn=null,Eu||(Eu=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,Sv)))}function gi(e){function t(o){return Bo(o,e)}if(0<sa.length){Bo(sa[0],e);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Bo(Rn,e),In!==null&&Bo(In,e),Dn!==null&&Bo(Dn,e),hi.forEach(t),mi.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&bn.shift()}var oo=hn.ReactCurrentBatchConfig,Ga=!0;function kv(e,t,n,r){var o=de,i=oo.transition;oo.transition=null;try{de=1,Fc(e,t,n,r)}finally{de=o,oo.transition=i}}function Ev(e,t,n,r){var o=de,i=oo.transition;oo.transition=null;try{de=4,Fc(e,t,n,r)}finally{de=o,oo.transition=i}}function Fc(e,t,n,r){if(Ga){var o=Cu(e,t,n,r);if(o===null)El(e,t,r,Ya,n),kf(e,r);else if(xv(o,e,t,n,r))r.stopPropagation();else if(kf(e,r),t&4&&-1<wv.indexOf(e)){for(;o!==null;){var i=Mi(o);if(i!==null&&Cm(i),i=Cu(e,t,n,r),i===null&&El(e,t,r,Ya,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else El(e,t,r,null,n)}}var Ya=null;function Cu(e,t,n,r){if(Ya=null,e=Lc(r),e=rr(e),e!==null)if(t=Rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function Rm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case Bc:return 1;case xm:return 4;case Wa:case dv:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var _n=null,Uc=null,ba=null;function Im(){if(ba)return ba;var e,t=Uc,n=t.length,r,o="value"in _n?_n.value:_n.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ba=o.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function Cf(){return!1}function St(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?la:Cf,this.isPropagationStopped=Cf,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),t}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=St(ko),Bi=be({},ko,{view:0,detail:0}),Cv=St(Bi),hl,ml,Mo,Cs=be({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(hl=e.screenX-Mo.screenX,ml=e.screenY-Mo.screenY):ml=hl=0,Mo=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),bf=St(Cs),bv=be({},Cs,{dataTransfer:0}),Tv=St(bv),_v=be({},Bi,{relatedTarget:0}),gl=St(_v),Pv=be({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=St(Pv),Iv=be({},ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=St(Iv),$v=be({},ko,{data:0}),Tf=St($v),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nv[e])?!!t[e]:!1}function Vc(){return Av}var Lv=be({},Bi,{key:function(e){if(e.key){var t=jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ov[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=St(Lv),Mv=be({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=St(Mv),zv=be({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Fv=St(zv),Uv=be({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=St(Uv),Vv=be({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=St(Vv),Kv=[9,13,27,32],Wc=cn&&"CompositionEvent"in window,ni=null;cn&&"documentMode"in document&&(ni=document.documentMode);var Gv=cn&&"TextEvent"in window&&!ni,Dm=cn&&(!Wc||ni&&8<ni&&11>=ni),Pf=" ",Rf=!1;function $m(e,t){switch(e){case"keyup":return Kv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Yv(e,t){switch(e){case"compositionend":return jm(t);case"keypress":return t.which!==32?null:(Rf=!0,Pf);case"textInput":return e=t.data,e===Pf&&Rf?null:e;default:return null}}function qv(e,t){if(Fr)return e==="compositionend"||!Wc&&$m(e,t)?(e=Im(),ba=Uc=_n=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dm&&t.locale!=="ko"?null:t.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qv[e.type]:t==="textarea"}function Om(e,t,n,r){dm(r),t=qa(t,"onChange"),0<t.length&&(n=new Hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,yi=null;function Jv(e){Wm(e,0)}function bs(e){var t=Vr(e);if(om(t))return e}function Xv(e,t){if(e==="change")return t}var Nm=!1;if(cn){var yl;if(cn){var vl="oninput"in document;if(!vl){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),vl=typeof Df.oninput=="function"}yl=vl}else yl=!1;Nm=yl&&(!document.documentMode||9<document.documentMode)}function $f(){ri&&(ri.detachEvent("onpropertychange",Am),yi=ri=null)}function Am(e){if(e.propertyName==="value"&&bs(yi)){var t=[];Om(t,yi,e,Lc(e)),mm(Jv,t)}}function Zv(e,t,n){e==="focusin"?($f(),ri=t,yi=n,ri.attachEvent("onpropertychange",Am)):e==="focusout"&&$f()}function ew(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(yi)}function tw(e,t){if(e==="click")return bs(t)}function nw(e,t){if(e==="input"||e==="change")return bs(t)}function rw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:rw;function vi(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!au.call(t,o)||!Ft(e[o],t[o]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,t){var n=jf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bm(){for(var e=window,t=Ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ua(e.document)}return t}function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ow(e){var t=Bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lm(n.ownerDocument.documentElement,n)){if(r!==null&&Kc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Of(n,i);var a=Of(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iw=cn&&"documentMode"in document&&11>=document.documentMode,Ur=null,bu=null,oi=null,Tu=!1;function Nf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||Ur==null||Ur!==Ua(r)||(r=Ur,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&vi(oi,r)||(oi=r,r=qa(bu,"onSelect"),0<r.length&&(t=new Hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hr={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},wl={},Mm={};cn&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Ts(e){if(wl[e])return wl[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mm)return wl[e]=t[n];return e}var zm=Ts("animationend"),Fm=Ts("animationiteration"),Um=Ts("animationstart"),Hm=Ts("transitionend"),Vm=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){Vm.set(e,t),Pr(t,[e])}for(var xl=0;xl<Af.length;xl++){var Sl=Af[xl],aw=Sl.toLowerCase(),sw=Sl[0].toUpperCase()+Sl.slice(1);Wn(aw,"on"+sw)}Wn(zm,"onAnimationEnd");Wn(Fm,"onAnimationIteration");Wn(Um,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(Hm,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,av(r,t,void 0,e),e.currentTarget=null}function Wm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Lf(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Lf(o,s,u),i=l}}}if(Va)throw e=Su,Va=!1,Su=null,e}function ye(e,t){var n=t[Du];n===void 0&&(n=t[Du]=new Set);var r=e+"__bubble";n.has(r)||(Km(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),Km(n,e,r,t)}var ca="_reactListening"+Math.random().toString(36).slice(2);function wi(e){if(!e[ca]){e[ca]=!0,Zh.forEach(function(n){n!=="selectionchange"&&(lw.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ca]||(t[ca]=!0,kl("selectionchange",!1,t))}}function Km(e,t,n,r){switch(Rm(t)){case 1:var o=kv;break;case 4:o=Ev;break;default:o=Fc}n=o.bind(null,t,n,e),o=void 0,!xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function El(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=rr(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}mm(function(){var u=i,c=Lc(n),f=[];e:{var h=Vm.get(e);if(h!==void 0){var w=Hc,y=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":w=Bv;break;case"focusin":y="focus",w=gl;break;case"focusout":y="blur",w=gl;break;case"beforeblur":case"afterblur":w=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Fv;break;case zm:case Fm:case Um:w=Rv;break;case Hm:w=Hv;break;case"scroll":w=Cv;break;case"wheel":w=Wv;break;case"copy":case"cut":case"paste":w=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_f}var v=(t&4)!==0,S=!v&&e==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,g;p!==null;){g=p;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,d!==null&&(C=pi(p,d),C!=null&&v.push(xi(p,C,g)))),S)break;p=p.return}0<v.length&&(h=new w(h,y,null,n,c),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==vu&&(y=n.relatedTarget||n.fromElement)&&(rr(y)||y[dn]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?rr(y):null,y!==null&&(S=Rr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=bf,C="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=_f,C="onPointerLeave",d="onPointerEnter",p="pointer"),S=w==null?h:Vr(w),g=y==null?h:Vr(y),h=new v(C,p+"leave",w,n,c),h.target=S,h.relatedTarget=g,C=null,rr(c)===u&&(v=new v(d,p+"enter",y,n,c),v.target=g,v.relatedTarget=S,C=v),S=C,w&&y)t:{for(v=w,d=y,p=0,g=v;g;g=Ar(g))p++;for(g=0,C=d;C;C=Ar(C))g++;for(;0<p-g;)v=Ar(v),p--;for(;0<g-p;)d=Ar(d),g--;for(;p--;){if(v===d||d!==null&&v===d.alternate)break t;v=Ar(v),d=Ar(d)}v=null}else v=null;w!==null&&Bf(f,h,w,v,!1),y!==null&&S!==null&&Bf(f,S,y,v,!0)}}e:{if(h=u?Vr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var _=Xv;else if(If(h))if(Nm)_=nw;else{_=ew;var x=Zv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=tw);if(_&&(_=_(e,u))){Om(f,_,n,c);break e}x&&x(e,h,u),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&pu(h,"number",h.value)}switch(x=u?Vr(u):window,e){case"focusin":(If(x)||x.contentEditable==="true")&&(Ur=x,bu=u,oi=null);break;case"focusout":oi=bu=Ur=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Nf(f,n,c);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":Nf(f,n,c)}var b;if(Wc)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Fr?$m(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Dm&&n.locale!=="ko"&&(Fr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Fr&&(b=Im()):(_n=c,Uc="value"in _n?_n.value:_n.textContent,Fr=!0)),x=qa(u,D),0<x.length&&(D=new Tf(D,e,null,n,c),f.push({event:D,listeners:x}),b?D.data=b:(b=jm(n),b!==null&&(D.data=b)))),(b=Gv?Yv(e,n):qv(e,n))&&(u=qa(u,"onBeforeInput"),0<u.length&&(c=new Tf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}Wm(f,t)})}function xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pi(e,n),i!=null&&r.unshift(xi(e,i,o)),i=pi(e,t),i!=null&&r.push(xi(e,i,o))),e=e.return}return r}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=pi(n,i),l!=null&&a.unshift(xi(n,l,s))):o||(l=pi(n,i),l!=null&&a.push(xi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var uw=/\r\n?/g,cw=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(uw,`
`).replace(cw,"")}function da(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error($(425))}function Qa(){}var _u=null,Pu=null;function Ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(e){return zf.resolve(null).then(e).catch(pw)}:Iu;function pw(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gi(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Eo,Si="__reactProps$"+Eo,dn="__reactContainer$"+Eo,Du="__reactEvents$"+Eo,hw="__reactListeners$"+Eo,mw="__reactHandles$"+Eo;function rr(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[Kt])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Kt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function _s(e){return e[Si]||null}var $u=[],Wr=-1;function Kn(e){return{current:e}}function xe(e){0>Wr||(e.current=$u[Wr],$u[Wr]=null,Wr--)}function ge(e,t){Wr++,$u[Wr]=e.current,e.current=t}var Hn={},tt=Kn(Hn),dt=Kn(!1),pr=Hn;function lo(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ft(e){return e=e.childContextTypes,e!=null}function Ja(){xe(dt),xe(tt)}function Uf(e,t,n){if(tt.current!==Hn)throw Error($(168));ge(tt,t),ge(dt,n)}function Gm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,Zy(e)||"Unknown",o));return be({},n,r)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,pr=tt.current,ge(tt,e),ge(dt,dt.current),!0}function Hf(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Gm(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,xe(dt),xe(tt),ge(tt,e)):xe(dt),ge(dt,n)}var nn=null,Ps=!1,bl=!1;function Ym(e){nn===null?nn=[e]:nn.push(e)}function gw(e){Ps=!0,Ym(e)}function Gn(){if(!bl&&nn!==null){bl=!0;var e=0,t=de;try{var n=nn;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Ps=!1}catch(o){throw nn!==null&&(nn=nn.slice(e+1)),wm(Bc,Gn),o}finally{de=t,bl=!1}}return null}var Kr=[],Gr=0,Za=null,es=0,Ct=[],bt=0,hr=null,rn=1,on="";function er(e,t){Kr[Gr++]=es,Kr[Gr++]=Za,Za=e,es=t}function qm(e,t,n){Ct[bt++]=rn,Ct[bt++]=on,Ct[bt++]=hr,hr=e;var r=rn;e=on;var o=32-Bt(r)-1;r&=~(1<<o),n+=1;var i=32-Bt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,rn=1<<32-Bt(t)+o|n<<o|r,on=i+e}else rn=1<<i|n<<o|r,on=e}function Gc(e){e.return!==null&&(er(e,1),qm(e,1,0))}function Yc(e){for(;e===Za;)Za=Kr[--Gr],Kr[Gr]=null,es=Kr[--Gr],Kr[Gr]=null;for(;e===hr;)hr=Ct[--bt],Ct[bt]=null,on=Ct[--bt],Ct[bt]=null,rn=Ct[--bt],Ct[bt]=null}var vt=null,yt=null,ke=!1,Lt=null;function Qm(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,yt=null,!0):!1;default:return!1}}function ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ou(e){if(ke){var t=yt;if(t){var n=t;if(!Vf(e,t)){if(ju(e))throw Error($(418));t=$n(n.nextSibling);var r=vt;t&&Vf(e,t)?Qm(r,n):(e.flags=e.flags&-4097|2,ke=!1,vt=e)}}else{if(ju(e))throw Error($(418));e.flags=e.flags&-4097|2,ke=!1,vt=e}}}function Wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function fa(e){if(e!==vt)return!1;if(!ke)return Wf(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ru(e.type,e.memoizedProps)),t&&(t=yt)){if(ju(e))throw Jm(),Error($(418));for(;t;)Qm(e,t),t=$n(t.nextSibling)}if(Wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?$n(e.stateNode.nextSibling):null;return!0}function Jm(){for(var e=yt;e;)e=$n(e.nextSibling)}function uo(){yt=vt=null,ke=!1}function qc(e){Lt===null?Lt=[e]:Lt.push(e)}var yw=hn.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ts=Kn(null),ns=null,Yr=null,Qc=null;function Jc(){Qc=Yr=ns=null}function Xc(e){var t=ts.current;xe(ts),e._currentValue=t}function Nu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function io(e,t){ns=e,Qc=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Qc!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(ns===null)throw Error($(308));Yr=e,ns.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var or=null;function Zc(e){or===null?or=[e]:or.push(e)}function Xm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Zc(t)):(n.next=o.next,o.next=n),t.interleaved=n,fn(e,r)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,fn(e,n)}return o=r.interleaved,o===null?(t.next=t,Zc(r)):(t.next=o.next,o.next=t),r.interleaved=t,fn(e,n)}function _a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mc(e,n)}}function Kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rs(e,t,n,r){var o=e.updateQueue;Cn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,c=u=l=null,s=i;do{var h=s.lane,w=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(h=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(w,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(w,f,h):y,h==null)break e;f=be({},f,h);break e;case 2:Cn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=w,l=f):c=c.next=w,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);gr|=a,e.lanes=a,e.memoizedState=f}}function Gf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var e0=new Xh.Component().refs;function Au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),o=Nn(e),i=an(r,o);i.payload=t,n!=null&&(i.callback=n),t=jn(e,i,o),t!==null&&(Mt(t,e,o,r),_a(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),o=Nn(e),i=an(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=jn(e,i,o),t!==null&&(Mt(t,e,o,r),_a(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=Nn(e),o=an(n,r);o.tag=2,t!=null&&(o.callback=t),t=jn(e,o,r),t!==null&&(Mt(t,e,r,n),_a(t,e,r))}};function Yf(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!vi(n,r)||!vi(o,i):!0}function t0(e,t,n){var r=!1,o=Hn,i=t.contextType;return typeof i=="object"&&i!==null?i=It(i):(o=ft(t)?pr:tt.current,r=t.contextTypes,i=(r=r!=null)?lo(e,o):Hn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Lu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=e0,ed(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=It(i):(i=ft(t)?pr:tt.current,o.context=lo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Au(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Rs.enqueueReplaceState(o,o.state,null),rs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===e0&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function pa(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qf(e){var t=e._init;return t(e._payload)}function n0(e){function t(d,p){if(e){var g=d.deletions;g===null?(d.deletions=[p],d.flags|=16):g.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=An(d,p),d.index=0,d.sibling=null,d}function i(d,p,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<p?(d.flags|=2,p):g):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,p,g,C){return p===null||p.tag!==6?(p=$l(g,d.mode,C),p.return=d,p):(p=o(p,g),p.return=d,p)}function l(d,p,g,C){var _=g.type;return _===zr?c(d,p,g.props.children,C,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===En&&Qf(_)===p.type)?(C=o(p,g.props),C.ref=zo(d,p,g),C.return=d,C):(C=ja(g.type,g.key,g.props,null,d.mode,C),C.ref=zo(d,p,g),C.return=d,C)}function u(d,p,g,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=jl(g,d.mode,C),p.return=d,p):(p=o(p,g.children||[]),p.return=d,p)}function c(d,p,g,C,_){return p===null||p.tag!==7?(p=dr(g,d.mode,C,_),p.return=d,p):(p=o(p,g),p.return=d,p)}function f(d,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$l(""+p,d.mode,g),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case na:return g=ja(p.type,p.key,p.props,null,d.mode,g),g.ref=zo(d,null,p),g.return=d,g;case Mr:return p=jl(p,d.mode,g),p.return=d,p;case En:var C=p._init;return f(d,C(p._payload),g)}if(Qo(p)||No(p))return p=dr(p,d.mode,g,null),p.return=d,p;pa(d,p)}return null}function h(d,p,g,C){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:s(d,p,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case na:return g.key===_?l(d,p,g,C):null;case Mr:return g.key===_?u(d,p,g,C):null;case En:return _=g._init,h(d,p,_(g._payload),C)}if(Qo(g)||No(g))return _!==null?null:c(d,p,g,C,null);pa(d,g)}return null}function w(d,p,g,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return d=d.get(g)||null,s(p,d,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case na:return d=d.get(C.key===null?g:C.key)||null,l(p,d,C,_);case Mr:return d=d.get(C.key===null?g:C.key)||null,u(p,d,C,_);case En:var x=C._init;return w(d,p,g,x(C._payload),_)}if(Qo(C)||No(C))return d=d.get(g)||null,c(p,d,C,_,null);pa(p,C)}return null}function y(d,p,g,C){for(var _=null,x=null,b=p,D=p=0,L=null;b!==null&&D<g.length;D++){b.index>D?(L=b,b=null):L=b.sibling;var z=h(d,b,g[D],C);if(z===null){b===null&&(b=L);break}e&&b&&z.alternate===null&&t(d,b),p=i(z,p,D),x===null?_=z:x.sibling=z,x=z,b=L}if(D===g.length)return n(d,b),ke&&er(d,D),_;if(b===null){for(;D<g.length;D++)b=f(d,g[D],C),b!==null&&(p=i(b,p,D),x===null?_=b:x.sibling=b,x=b);return ke&&er(d,D),_}for(b=r(d,b);D<g.length;D++)L=w(b,d,D,g[D],C),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?D:L.key),p=i(L,p,D),x===null?_=L:x.sibling=L,x=L);return e&&b.forEach(function(X){return t(d,X)}),ke&&er(d,D),_}function v(d,p,g,C){var _=No(g);if(typeof _!="function")throw Error($(150));if(g=_.call(g),g==null)throw Error($(151));for(var x=_=null,b=p,D=p=0,L=null,z=g.next();b!==null&&!z.done;D++,z=g.next()){b.index>D?(L=b,b=null):L=b.sibling;var X=h(d,b,z.value,C);if(X===null){b===null&&(b=L);break}e&&b&&X.alternate===null&&t(d,b),p=i(X,p,D),x===null?_=X:x.sibling=X,x=X,b=L}if(z.done)return n(d,b),ke&&er(d,D),_;if(b===null){for(;!z.done;D++,z=g.next())z=f(d,z.value,C),z!==null&&(p=i(z,p,D),x===null?_=z:x.sibling=z,x=z);return ke&&er(d,D),_}for(b=r(d,b);!z.done;D++,z=g.next())z=w(b,d,D,z.value,C),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?D:z.key),p=i(z,p,D),x===null?_=z:x.sibling=z,x=z);return e&&b.forEach(function(Y){return t(d,Y)}),ke&&er(d,D),_}function S(d,p,g,C){if(typeof g=="object"&&g!==null&&g.type===zr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case na:e:{for(var _=g.key,x=p;x!==null;){if(x.key===_){if(_=g.type,_===zr){if(x.tag===7){n(d,x.sibling),p=o(x,g.props.children),p.return=d,d=p;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===En&&Qf(_)===x.type){n(d,x.sibling),p=o(x,g.props),p.ref=zo(d,x,g),p.return=d,d=p;break e}n(d,x);break}else t(d,x);x=x.sibling}g.type===zr?(p=dr(g.props.children,d.mode,C,g.key),p.return=d,d=p):(C=ja(g.type,g.key,g.props,null,d.mode,C),C.ref=zo(d,p,g),C.return=d,d=C)}return a(d);case Mr:e:{for(x=g.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(d,p.sibling),p=o(p,g.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=jl(g,d.mode,C),p.return=d,d=p}return a(d);case En:return x=g._init,S(d,p,x(g._payload),C)}if(Qo(g))return y(d,p,g,C);if(No(g))return v(d,p,g,C);pa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(d,p.sibling),p=o(p,g),p.return=d,d=p):(n(d,p),p=$l(g,d.mode,C),p.return=d,d=p),a(d)):n(d,p)}return S}var co=n0(!0),r0=n0(!1),zi={},qt=Kn(zi),ki=Kn(zi),Ei=Kn(zi);function ir(e){if(e===zi)throw Error($(174));return e}function td(e,t){switch(ge(Ei,t),ge(ki,e),ge(qt,zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mu(t,e)}xe(qt),ge(qt,t)}function fo(){xe(qt),xe(ki),xe(Ei)}function o0(e){ir(Ei.current);var t=ir(qt.current),n=mu(t,e.type);t!==n&&(ge(ki,e),ge(qt,n))}function nd(e){ki.current===e&&(xe(qt),xe(ki))}var Ee=Kn(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function rd(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Pa=hn.ReactCurrentDispatcher,_l=hn.ReactCurrentBatchConfig,mr=0,Ce=null,Le=null,He=null,is=!1,ii=!1,Ci=0,vw=0;function Xe(){throw Error($(321))}function od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function id(e,t,n,r,o,i){if(mr=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pa.current=e===null||e.memoizedState===null?kw:Ew,e=n(r,o),ii){i=0;do{if(ii=!1,Ci=0,25<=i)throw Error($(301));i+=1,He=Le=null,t.updateQueue=null,Pa.current=Cw,e=n(r,o)}while(ii)}if(Pa.current=as,t=Le!==null&&Le.next!==null,mr=0,He=Le=Ce=null,is=!1,t)throw Error($(300));return e}function ad(){var e=Ci!==0;return Ci=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ce.memoizedState=He=e:He=He.next=e,He}function Dt(){if(Le===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=He===null?Ce.memoizedState:He.next;if(t!==null)He=t,Le=e;else{if(e===null)throw Error($(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},He===null?Ce.memoizedState=He=e:He=He.next=e}return He}function bi(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=Dt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,Ce.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Ft(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ce.lanes|=i,gr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=Dt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ft(i,t.memoizedState)||(ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function i0(){}function a0(e,t){var n=Ce,r=Dt(),o=t(),i=!Ft(r.memoizedState,o);if(i&&(r.memoizedState=o,ct=!0),r=r.queue,sd(u0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Ti(9,l0.bind(null,n,r,o,t),void 0,null),Ke===null)throw Error($(349));mr&30||s0(n,t,o)}return o}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l0(e,t,n,r){t.value=n,t.getSnapshot=r,c0(t)&&d0(e)}function u0(e,t,n){return n(function(){c0(t)&&d0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function d0(e){var t=fn(e,1);t!==null&&Mt(t,e,1,-1)}function Jf(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Sw.bind(null,Ce,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f0(){return Dt().memoizedState}function Ra(e,t,n,r){var o=Vt();Ce.flags|=e,o.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function Is(e,t,n,r){var o=Dt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var a=Le.memoizedState;if(i=a.destroy,r!==null&&od(r,a.deps)){o.memoizedState=Ti(t,n,i,r);return}}Ce.flags|=e,o.memoizedState=Ti(1|t,n,i,r)}function Xf(e,t){return Ra(8390656,8,e,t)}function sd(e,t){return Is(2048,8,e,t)}function p0(e,t){return Is(4,2,e,t)}function h0(e,t){return Is(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g0(e,t,n){return n=n!=null?n.concat([e]):null,Is(4,4,m0.bind(null,t,e),n)}function ld(){}function y0(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function w0(e,t,n){return mr&21?(Ft(n,t)||(n=km(),Ce.lanes|=n,gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function ww(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{de=n,_l.transition=r}}function x0(){return Dt().memoizedState}function xw(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S0(e))k0(t,n);else if(n=Xm(e,t,n,r),n!==null){var o=ot();Mt(n,e,r,o),E0(n,t,r)}}function Sw(e,t,n){var r=Nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S0(e))k0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ft(s,a)){var l=t.interleaved;l===null?(o.next=o,Zc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Xm(e,t,o,r),n!==null&&(o=ot(),Mt(n,e,r,o),E0(n,t,r))}}function S0(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function k0(e,t){ii=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mc(e,n)}}var as={readContext:It,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},kw={readContext:It,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Xf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xw.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:ld,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=ww.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,o=Vt();if(ke){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ke===null)throw Error($(349));mr&30||s0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Xf(u0.bind(null,r,i,e),[e]),r.flags|=2048,Ti(9,l0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Ke.identifierPrefix;if(ke){var n=on,r=rn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ew={readContext:It,useCallback:y0,useContext:It,useEffect:sd,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:Pl,useRef:f0,useState:function(){return Pl(bi)},useDebugValue:ld,useDeferredValue:function(e){var t=Dt();return w0(t,Le.memoizedState,e)},useTransition:function(){var e=Pl(bi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:a0,useId:x0,unstable_isNewReconciler:!1},Cw={readContext:It,useCallback:y0,useContext:It,useEffect:sd,useImperativeHandle:g0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:v0,useReducer:Rl,useRef:f0,useState:function(){return Rl(bi)},useDebugValue:ld,useDeferredValue:function(e){var t=Dt();return Le===null?t.memoizedState=e:w0(t,Le.memoizedState,e)},useTransition:function(){var e=Rl(bi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:a0,useId:x0,unstable_isNewReconciler:!1};function po(e,t){try{var n="",r=t;do n+=Xy(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bw=typeof WeakMap=="function"?WeakMap:Map;function C0(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ls||(ls=!0,Yu=r),Bu(e,t)},n}function b0(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bu(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mw.bind(null,e,t,n),t.then(e,e))}function ep(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var Tw=hn.ReactCurrentOwner,ct=!1;function nt(e,t,n,r){t.child=e===null?r0(t,null,n,r):co(t,e.child,n,r)}function np(e,t,n,r,o){n=n.render;var i=t.ref;return io(t,o),r=id(e,t,n,r,i,o),n=ad(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(ke&&n&&Gc(t),t.flags|=1,nt(e,t,r,o),t.child)}function rp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,T0(e,t,i,r,o)):(e=ja(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(a,r)&&e.ref===t.ref)return pn(e,t,o)}return t.flags|=1,e=An(i,r),e.ref=t.ref,e.return=t,t.child=e}function T0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vi(i,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,pn(e,t,o)}return Mu(e,t,n,r,o)}function _0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Qr,gt),gt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Qr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Qr,gt),gt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ge(Qr,gt),gt|=r;return nt(e,t,o,n),t.child}function P0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mu(e,t,n,r,o){var i=ft(n)?pr:tt.current;return i=lo(t,i),io(t,o),n=id(e,t,n,r,i,o),r=ad(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(ke&&r&&Gc(t),t.flags|=1,nt(e,t,n,o),t.child)}function op(e,t,n,r,o){if(ft(n)){var i=!0;Xa(t)}else i=!1;if(io(t,o),t.stateNode===null)Ia(e,t),t0(t,n,r),Lu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ft(n)?pr:tt.current,u=lo(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&qf(t,a,r,u),Cn=!1;var h=t.memoizedState;a.state=h,rs(t,r,a,o),l=t.memoizedState,s!==r||h!==l||dt.current||Cn?(typeof c=="function"&&(Au(t,n,c,r),l=t.memoizedState),(s=Cn||Yf(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Zm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ot(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=ft(n)?pr:tt.current,l=lo(t,l));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&qf(t,a,r,l),Cn=!1,h=t.memoizedState,a.state=h,rs(t,r,a,o);var y=t.memoizedState;s!==f||h!==y||dt.current||Cn?(typeof w=="function"&&(Au(t,n,w,r),y=t.memoizedState),(u=Cn||Yf(t,n,u,r,h,y,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return zu(e,t,n,r,i,o)}function zu(e,t,n,r,o,i){P0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Hf(t,n,!1),pn(e,t,i);r=t.stateNode,Tw.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=co(t,e.child,null,i),t.child=co(t,null,s,i)):nt(e,t,s,i),t.memoizedState=r.state,o&&Hf(t,n,!0),t.child}function R0(e){var t=e.stateNode;t.pendingContext?Uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uf(e,t.context,!1),td(e,t.containerInfo)}function ip(e,t,n,r,o){return uo(),qc(o),t.flags|=256,nt(e,t,n,r),t.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function Uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function I0(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ge(Ee,o&1),e===null)return Ou(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=js(a,r,0,null),e=dr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Uu(n),t.memoizedState=Fu,e):ud(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return _w(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=An(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=An(s,i):(i=dr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Uu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Fu,r}return i=e.child,e=i.sibling,r=An(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ud(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ha(e,t,n,r){return r!==null&&qc(r),co(t,e.child,null,n),e=ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _w(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error($(422))),ha(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=js({mode:"visible",children:r.children},o,0,null),i=dr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&co(t,e.child,null,a),t.child.memoizedState=Uu(a),t.memoizedState=Fu,i);if(!(t.mode&1))return ha(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=Il(i,r,void 0),ha(e,t,a,r)}if(s=(a&e.childLanes)!==0,ct||s){if(r=Ke,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,fn(e,o),Mt(r,e,o,-1))}return md(),r=Il(Error($(421))),ha(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=zw.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,yt=$n(o.nextSibling),vt=t,ke=!0,Lt=null,e!==null&&(Ct[bt++]=rn,Ct[bt++]=on,Ct[bt++]=hr,rn=e.id,on=e.overflow,hr=t),t=ud(t,r.children),t.flags|=4096,t)}function ap(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nu(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function D0(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(nt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ap(e,n,t);else if(e.tag===19)ap(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&os(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pw(e,t,n){switch(t.tag){case 3:R0(t),uo();break;case 5:o0(t);break;case 1:ft(t.type)&&Xa(t);break;case 4:td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ge(ts,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?I0(e,t,n):(ge(Ee,Ee.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return D0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,_0(e,t,n)}return pn(e,t,n)}var $0,Hu,j0,O0;$0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};j0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ir(qt.current);var i=null;switch(n){case"input":o=du(e,o),r=du(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=hu(e,o),r=hu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qa)}gu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(di.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};O0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fo(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rw(e,t,n){var r=t.pendingProps;switch(Yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return ft(t.type)&&Ja(),Ze(t),null;case 3:return r=t.stateNode,fo(),xe(dt),xe(tt),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(Ju(Lt),Lt=null))),Hu(e,t),Ze(t),null;case 5:nd(t);var o=ir(Ei.current);if(n=t.type,e!==null&&t.stateNode!=null)j0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Ze(t),null}if(e=ir(qt.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Kt]=t,r[Si]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<Xo.length;o++)ye(Xo[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":mf(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":yf(r,i),ye("invalid",r)}gu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&da(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&da(r.textContent,s,e),o=["children",""+s]):di.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":ra(r),gf(r,i,!0);break;case"textarea":ra(r),vf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Kt]=t,e[Si]=r,$0(e,t,!1,!1),t.stateNode=e;e:{switch(a=yu(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xo.length;o++)ye(Xo[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":mf(e,r),o=du(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),ye("invalid",e);break;case"textarea":yf(e,r),o=hu(e,r),ye("invalid",e);break;default:o=r}gu(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?cm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fi(e,l):typeof l=="number"&&fi(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(di.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ye("scroll",e):l!=null&&jc(e,i,l,a))}switch(n){case"input":ra(e),gf(e,r,!1);break;case"textarea":ra(e),vf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?to(e,!!r.multiple,i,!1):r.defaultValue!=null&&to(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)O0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=ir(Ei.current),ir(qt.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(i=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:da(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Ze(t),null;case 13:if(xe(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&yt!==null&&t.mode&1&&!(t.flags&128))Jm(),uo(),t.flags|=98560,i=!1;else if(i=fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[Kt]=t}else uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),i=!1}else Lt!==null&&(Ju(Lt),Lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Be===0&&(Be=3):md())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return fo(),Hu(e,t),e===null&&wi(t.stateNode.containerInfo),Ze(t),null;case 10:return Xc(t.type._context),Ze(t),null;case 17:return ft(t.type)&&Ja(),Ze(t),null;case 19:if(xe(Ee),i=t.memoizedState,i===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Fo(i,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=os(e),a!==null){for(t.flags|=128,Fo(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&$e()>ho&&(t.flags|=128,r=!0,Fo(i,!1),t.lanes=4194304)}else{if(!r)if(e=os(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ke)return Ze(t),null}else 2*$e()-i.renderingStartTime>ho&&n!==1073741824&&(t.flags|=128,r=!0,Fo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$e(),t.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return hd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Iw(e,t){switch(Yc(t),t.tag){case 1:return ft(t.type)&&Ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),xe(dt),xe(tt),rd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return fo(),null;case 10:return Xc(t.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var ma=!1,et=!1,Dw=typeof WeakSet=="function"?WeakSet:Set,B=null;function qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Vu(e,t,n){try{n()}catch(r){_e(e,t,r)}}var sp=!1;function $w(e,t){if(_u=Ga,e=Bm(),Kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var w;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++u===o&&(s=a),h===i&&++c===r&&(l=a),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:e,selectionRange:n},Ga=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ot(t.type,v),S);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(C){_e(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return y=sp,sp=!1,y}function ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vu(t,n,i)}o=o.next}while(o!==r)}}function Ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function N0(e){var t=e.alternate;t!==null&&(e.alternate=null,N0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Si],delete t[Du],delete t[hw],delete t[mw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function A0(e){return e.tag===5||e.tag===3||e.tag===4}function lp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||A0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qa));else if(r!==4&&(e=e.child,e!==null))for(Ku(e,t,n),e=e.sibling;e!==null;)Ku(e,t,n),e=e.sibling}function Gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,n),e=e.sibling;e!==null;)Gu(e,t,n),e=e.sibling}var Ye=null,Nt=!1;function wn(e,t,n){for(n=n.child;n!==null;)L0(e,t,n),n=n.sibling}function L0(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:et||qr(n,t);case 6:var r=Ye,o=Nt;Ye=null,wn(e,t,n),Ye=r,Nt=o,Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),gi(e)):Cl(Ye,n.stateNode));break;case 4:r=Ye,o=Nt,Ye=n.stateNode.containerInfo,Nt=!0,wn(e,t,n),Ye=r,Nt=o;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Vu(n,t,a),o=o.next}while(o!==r)}wn(e,t,n);break;case 1:if(!et&&(qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_e(n,t,s)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,wn(e,t,n),et=r):wn(e,t,n);break;default:wn(e,t,n)}}function up(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dw),t.forEach(function(r){var o=Fw.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ye=s.stateNode,Nt=!1;break e;case 3:Ye=s.stateNode.containerInfo,Nt=!0;break e;case 4:Ye=s.stateNode.containerInfo,Nt=!0;break e}s=s.return}if(Ye===null)throw Error($(160));L0(i,a,o),Ye=null,Nt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){_e(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B0(t,e),t=t.sibling}function B0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Ht(e),r&4){try{ai(3,e,e.return),Ds(3,e)}catch(v){_e(e,e.return,v)}try{ai(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:jt(t,e),Ht(e),r&512&&n!==null&&qr(n,n.return);break;case 5:if(jt(t,e),Ht(e),r&512&&n!==null&&qr(n,n.return),e.flags&32){var o=e.stateNode;try{fi(o,"")}catch(v){_e(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&im(o,i),yu(s,a);var u=yu(s,i);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?cm(o,f):c==="dangerouslySetInnerHTML"?lm(o,f):c==="children"?fi(o,f):jc(o,c,f,u)}switch(s){case"input":fu(o,i);break;case"textarea":am(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?to(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?to(o,!!i.multiple,i.defaultValue,!0):to(o,!!i.multiple,i.multiple?[]:"",!1))}o[Si]=i}catch(v){_e(e,e.return,v)}}break;case 6:if(jt(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){_e(e,e.return,v)}}break;case 3:if(jt(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:jt(t,e),Ht(e);break;case 13:jt(t,e),Ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fd=$e())),r&4&&up(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||c,jt(t,e),et=u):jt(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(B=e,c=e.child;c!==null;){for(f=B=c;B!==null;){switch(h=B,w=h.child,h.tag){case 0:case 11:case 14:case 15:ai(4,h,h.return);break;case 1:qr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){_e(r,n,v)}}break;case 5:qr(h,h.return);break;case 22:if(h.memoizedState!==null){dp(f);continue}}w!==null?(w.return=h,B=w):dp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=um("display",a))}catch(v){_e(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){_e(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(t,e),Ht(e),r&4&&up(e);break;case 21:break;default:jt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(A0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fi(o,""),r.flags&=-33);var i=lp(e);Gu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=lp(e);Ku(e,s,a);break;default:throw Error($(161))}}catch(l){_e(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jw(e,t,n){B=e,M0(e)}function M0(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ma;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||et;s=ma;var u=et;if(ma=a,(et=l)&&!u)for(B=o;B!==null;)a=B,l=a.child,a.tag===22&&a.memoizedState!==null?fp(o):l!==null?(l.return=a,B=l):fp(o);for(;i!==null;)B=i,M0(i),i=i.sibling;B=o,ma=s,et=u}cp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,B=i):cp(e)}}function cp(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&gi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}et||t.flags&512&&Wu(t)}catch(h){_e(t,t.return,h)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function dp(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function fp(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ds(4,t)}catch(l){_e(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){_e(t,o,l)}}var i=t.return;try{Wu(t)}catch(l){_e(t,i,l)}break;case 5:var a=t.return;try{Wu(t)}catch(l){_e(t,a,l)}}}catch(l){_e(t,t.return,l)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var Ow=Math.ceil,ss=hn.ReactCurrentDispatcher,cd=hn.ReactCurrentOwner,_t=hn.ReactCurrentBatchConfig,le=0,Ke=null,Oe=null,qe=0,gt=0,Qr=Kn(0),Be=0,_i=null,gr=0,$s=0,dd=0,si=null,ut=null,fd=0,ho=1/0,Zt=null,ls=!1,Yu=null,On=null,ga=!1,Pn=null,us=0,li=0,qu=null,Da=-1,$a=0;function ot(){return le&6?$e():Da!==-1?Da:Da=$e()}function Nn(e){return e.mode&1?le&2&&qe!==0?qe&-qe:yw.transition!==null?($a===0&&($a=km()),$a):(e=de,e!==0||(e=window.event,e=e===void 0?16:Rm(e.type)),e):1}function Mt(e,t,n,r){if(50<li)throw li=0,qu=null,Error($(185));Li(e,n,r),(!(le&2)||e!==Ke)&&(e===Ke&&(!(le&2)&&($s|=n),Be===4&&Tn(e,qe)),pt(e,r),n===1&&le===0&&!(t.mode&1)&&(ho=$e()+500,Ps&&Gn()))}function pt(e,t){var n=e.callbackNode;yv(e,t);var r=Ka(e,e===Ke?qe:0);if(r===0)n!==null&&Sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sf(n),t===1)e.tag===0?gw(pp.bind(null,e)):Ym(pp.bind(null,e)),fw(function(){!(le&6)&&Gn()}),n=null;else{switch(Em(r)){case 1:n=Bc;break;case 4:n=xm;break;case 16:n=Wa;break;case 536870912:n=Sm;break;default:n=Wa}n=G0(n,z0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function z0(e,t){if(Da=-1,$a=0,le&6)throw Error($(327));var n=e.callbackNode;if(ao()&&e.callbackNode!==n)return null;var r=Ka(e,e===Ke?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cs(e,r);else{t=r;var o=le;le|=2;var i=U0();(Ke!==e||qe!==t)&&(Zt=null,ho=$e()+500,cr(e,t));do try{Lw();break}catch(s){F0(e,s)}while(!0);Jc(),ss.current=i,le=o,Oe!==null?t=0:(Ke=null,qe=0,t=Be)}if(t!==0){if(t===2&&(o=ku(e),o!==0&&(r=o,t=Qu(e,o))),t===1)throw n=_i,cr(e,0),Tn(e,r),pt(e,$e()),n;if(t===6)Tn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nw(o)&&(t=cs(e,r),t===2&&(i=ku(e),i!==0&&(r=i,t=Qu(e,i))),t===1))throw n=_i,cr(e,0),Tn(e,r),pt(e,$e()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:tr(e,ut,Zt);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=fd+500-$e(),10<t)){if(Ka(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Iu(tr.bind(null,e,ut,Zt),t);break}tr(e,ut,Zt);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Bt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){e.timeoutHandle=Iu(tr.bind(null,e,ut,Zt),r);break}tr(e,ut,Zt);break;case 5:tr(e,ut,Zt);break;default:throw Error($(329))}}}return pt(e,$e()),e.callbackNode===n?z0.bind(null,e):null}function Qu(e,t){var n=si;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=cs(e,t),e!==2&&(t=ut,ut=n,t!==null&&Ju(t)),e}function Ju(e){ut===null?ut=e:ut.push.apply(ut,e)}function Nw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~dd,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function pp(e){if(le&6)throw Error($(327));ao();var t=Ka(e,0);if(!(t&1))return pt(e,$e()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var r=ku(e);r!==0&&(t=r,n=Qu(e,r))}if(n===1)throw n=_i,cr(e,0),Tn(e,t),pt(e,$e()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,ut,Zt),pt(e,$e()),null}function pd(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(ho=$e()+500,Ps&&Gn())}}function yr(e){Pn!==null&&Pn.tag===0&&!(le&6)&&ao();var t=le;le|=1;var n=_t.transition,r=de;try{if(_t.transition=null,de=1,e)return e()}finally{de=r,_t.transition=n,le=t,!(le&6)&&Gn()}}function hd(){gt=Qr.current,xe(Qr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dw(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:fo(),xe(dt),xe(tt),rd();break;case 5:nd(r);break;case 4:fo();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:Xc(r.type._context);break;case 22:case 23:hd()}n=n.return}if(Ke=e,Oe=e=An(e.current,null),qe=gt=t,Be=0,_i=null,dd=$s=gr=0,ut=si=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}or=null}return e}function F0(e,t){do{var n=Oe;try{if(Jc(),Pa.current=as,is){for(var r=Ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}is=!1}if(mr=0,He=Le=Ce=null,ii=!1,Ci=0,cd.current=null,n===null||n.return===null){Be=1,_i=t,Oe=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=qe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=ep(a);if(w!==null){w.flags&=-257,tp(w,a,s,i,t),w.mode&1&&Zf(i,u,t),t=w,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){Zf(i,u,t),md();break e}l=Error($(426))}}else if(ke&&s.mode&1){var S=ep(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),tp(S,a,s,i,t),qc(po(l,s));break e}}i=l=po(l,s),Be!==4&&(Be=2),si===null?si=[i]:si.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=C0(i,l,t);Kf(i,d);break e;case 1:s=l;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=b0(i,s,t);Kf(i,C);break e}}i=i.return}while(i!==null)}V0(n)}catch(_){t=_,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function U0(){var e=ss.current;return ss.current=as,e===null?as:e}function md(){(Be===0||Be===3||Be===2)&&(Be=4),Ke===null||!(gr&268435455)&&!($s&268435455)||Tn(Ke,qe)}function cs(e,t){var n=le;le|=2;var r=U0();(Ke!==e||qe!==t)&&(Zt=null,cr(e,t));do try{Aw();break}catch(o){F0(e,o)}while(!0);if(Jc(),le=n,ss.current=r,Oe!==null)throw Error($(261));return Ke=null,qe=0,Be}function Aw(){for(;Oe!==null;)H0(Oe)}function Lw(){for(;Oe!==null&&!lv();)H0(Oe)}function H0(e){var t=K0(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?V0(e):Oe=t,cd.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Iw(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Oe=null;return}}else if(n=Rw(n,t,gt),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Be===0&&(Be=5)}function tr(e,t,n){var r=de,o=_t.transition;try{_t.transition=null,de=1,Bw(e,t,n,r)}finally{_t.transition=o,de=r}return null}function Bw(e,t,n,r){do ao();while(Pn!==null);if(le&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vv(e,i),e===Ke&&(Oe=Ke=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,G0(Wa,function(){return ao(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_t.transition,_t.transition=null;var a=de;de=1;var s=le;le|=4,cd.current=null,$w(e,n),B0(n,e),ow(Pu),Ga=!!_u,Pu=_u=null,e.current=n,jw(n),uv(),le=s,de=a,_t.transition=i}else e.current=n;if(ga&&(ga=!1,Pn=e,us=o),i=e.pendingLanes,i===0&&(On=null),fv(n.stateNode),pt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ls)throw ls=!1,e=Yu,Yu=null,e;return us&1&&e.tag!==0&&ao(),i=e.pendingLanes,i&1?e===qu?li++:(li=0,qu=e):li=0,Gn(),null}function ao(){if(Pn!==null){var e=Em(us),t=_t.transition,n=de;try{if(_t.transition=null,de=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,us=0,le&6)throw Error($(331));var o=le;for(le|=4,B=e.current;B!==null;){var i=B,a=i.child;if(B.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:ai(8,c,i)}var f=c.child;if(f!==null)f.return=c,B=f;else for(;B!==null;){c=B;var h=c.sibling,w=c.return;if(N0(c),c===u){B=null;break}if(h!==null){h.return=w,B=h;break}B=w}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}B=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,B=a;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ai(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,B=d;break e}B=i.return}}var p=e.current;for(B=p;B!==null;){a=B;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,B=g;else e:for(a=p;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ds(9,s)}}catch(_){_e(s,s.return,_)}if(s===a){B=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,B=C;break e}B=s.return}}if(le=o,Gn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{de=n,_t.transition=t}}return!1}function hp(e,t,n){t=po(n,t),t=C0(e,t,1),e=jn(e,t,1),t=ot(),e!==null&&(Li(e,1,t),pt(e,t))}function _e(e,t,n){if(e.tag===3)hp(e,e,n);else for(;t!==null;){if(t.tag===3){hp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=po(n,e),e=b0(t,e,1),t=jn(t,e,1),e=ot(),t!==null&&(Li(t,1,e),pt(t,e));break}}t=t.return}}function Mw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(qe&n)===n&&(Be===4||Be===3&&(qe&130023424)===qe&&500>$e()-fd?cr(e,0):dd|=n),pt(e,t)}function W0(e,t){t===0&&(e.mode&1?(t=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):t=1);var n=ot();e=fn(e,t),e!==null&&(Li(e,t,n),pt(e,n))}function zw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),W0(e,n)}function Fw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),W0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ct=!1,Pw(e,t,n);ct=!!(e.flags&131072)}else ct=!1,ke&&t.flags&1048576&&qm(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ia(e,t),e=t.pendingProps;var o=lo(t,tt.current);io(t,n),o=id(null,t,r,e,o,n);var i=ad();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(i=!0,Xa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ed(t),o.updater=Rs,t.stateNode=o,o._reactInternals=t,Lu(t,r,e,n),t=zu(null,t,r,!0,i,n)):(t.tag=0,ke&&i&&Gc(t),nt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hw(r),e=Ot(r,e),o){case 0:t=Mu(null,t,r,e,n);break e;case 1:t=op(null,t,r,e,n);break e;case 11:t=np(null,t,r,e,n);break e;case 14:t=rp(null,t,r,Ot(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),Mu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),op(e,t,r,o,n);case 3:e:{if(R0(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zm(e,t),rs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=po(Error($(423)),t),t=ip(e,t,r,n,o);break e}else if(r!==o){o=po(Error($(424)),t),t=ip(e,t,r,n,o);break e}else for(yt=$n(t.stateNode.containerInfo.firstChild),vt=t,ke=!0,Lt=null,n=r0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===o){t=pn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return o0(t),e===null&&Ou(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ru(r,o)?a=null:i!==null&&Ru(r,i)&&(t.flags|=32),P0(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&Ou(t),null;case 13:return I0(e,t,n);case 4:return td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),np(e,t,r,o,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ge(ts,r._currentValue),r._currentValue=a,i!==null)if(Ft(i.value,a)){if(i.children===o.children&&!dt.current){t=pn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=an(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Nu(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error($(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Nu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}nt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,io(t,n),o=It(o),r=r(o),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,o=Ot(r,t.pendingProps),o=Ot(r.type,o),rp(e,t,r,o,n);case 15:return T0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ot(r,o),Ia(e,t),t.tag=1,ft(r)?(e=!0,Xa(t)):e=!1,io(t,n),t0(t,r,o),Lu(t,r,o,n),zu(null,t,r,!0,e,n);case 19:return D0(e,t,n);case 22:return _0(e,t,n)}throw Error($(156,t.tag))};function G0(e,t){return wm(e,t)}function Uw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Uw(e,t,n,r)}function gd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hw(e){if(typeof e=="function")return gd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nc)return 11;if(e===Ac)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ja(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")gd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zr:return dr(n.children,o,i,t);case Oc:a=8,o|=8;break;case su:return e=Tt(12,n,t,o|2),e.elementType=su,e.lanes=i,e;case lu:return e=Tt(13,n,t,o),e.elementType=lu,e.lanes=i,e;case uu:return e=Tt(19,n,t,o),e.elementType=uu,e.lanes=i,e;case nm:return js(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case em:a=10;break e;case tm:a=9;break e;case Nc:a=11;break e;case Ac:a=14;break e;case En:a=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=nm,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vw(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yd(e,t,n,r,o,i,a,s,l){return e=new Vw(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(i),e}function Ww(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Y0(e){if(!e)return Hn;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(ft(n))return Gm(e,n,t)}return t}function q0(e,t,n,r,o,i,a,s,l){return e=yd(n,r,!0,e,o,i,a,s,l),e.context=Y0(null),n=e.current,r=ot(),o=Nn(n),i=an(r,o),i.callback=t??null,jn(n,i,o),e.current.lanes=o,Li(e,o,r),pt(e,r),e}function Os(e,t,n,r){var o=t.current,i=ot(),a=Nn(o);return n=Y0(n),t.context===null?t.context=n:t.pendingContext=n,t=an(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(o,t,a),e!==null&&(Mt(e,o,a,i),_a(e,o,a)),a}function ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){mp(e,t),(e=e.alternate)&&mp(e,t)}function Kw(){return null}var Q0=typeof reportError=="function"?reportError:function(e){console.error(e)};function wd(e){this._internalRoot=e}Ns.prototype.render=wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Os(e,t,null,null)};Ns.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yr(function(){Os(null,e,null,null)}),t[dn]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bn.length&&t!==0&&t<bn[n].priority;n++);bn.splice(n,0,e),n===0&&Pm(e)}};function xd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Gw(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ds(a);i.call(u)}}var a=q0(t,r,e,0,null,!1,!1,"",gp);return e._reactRootContainer=a,e[dn]=a.current,wi(e.nodeType===8?e.parentNode:e),yr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ds(l);s.call(u)}}var l=yd(e,0,!1,null,null,!1,!1,"",gp);return e._reactRootContainer=l,e[dn]=l.current,wi(e.nodeType===8?e.parentNode:e),yr(function(){Os(t,l,n,r)}),l}function Ls(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ds(a);s.call(l)}}Os(t,a,e,o)}else a=Gw(n,t,e,o,r);return ds(a)}Cm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jo(t.pendingLanes);n!==0&&(Mc(t,n|1),pt(t,$e()),!(le&6)&&(ho=$e()+500,Gn()))}break;case 13:yr(function(){var r=fn(e,1);if(r!==null){var o=ot();Mt(r,e,1,o)}}),vd(e,1)}};zc=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=ot();Mt(t,e,134217728,n)}vd(e,134217728)}};bm=function(e){if(e.tag===13){var t=Nn(e),n=fn(e,t);if(n!==null){var r=ot();Mt(n,e,t,r)}vd(e,t)}};Tm=function(){return de};_m=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};wu=function(e,t,n){switch(t){case"input":if(fu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_s(r);if(!o)throw Error($(90));om(r),fu(r,o)}}}break;case"textarea":am(e,n);break;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}};pm=pd;hm=yr;var Yw={usingClientEntryPoint:!1,Events:[Mi,Vr,_s,dm,fm,pd]},Uo={findFiberByHostInstance:rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qw={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ym(e),e===null?null:e.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Es=ya.inject(qw),Yt=ya}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(t))throw Error($(200));return Ww(e,t,null,n)};xt.createRoot=function(e,t){if(!xd(e))throw Error($(299));var n=!1,r="",o=Q0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yd(e,1,!1,null,null,n,!1,r,o),e[dn]=t.current,wi(e.nodeType===8?e.parentNode:e),new wd(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=ym(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return yr(e)};xt.hydrate=function(e,t,n){if(!As(t))throw Error($(200));return Ls(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!xd(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=q0(t,null,e,1,n??null,o,!1,i,a),e[dn]=t.current,wi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ns(t)};xt.render=function(e,t,n){if(!As(t))throw Error($(200));return Ls(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!As(e))throw Error($(40));return e._reactRootContainer?(yr(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};xt.unstable_batchedUpdates=pd;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Ls(e,t,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(e){console.error(e)}}J0(),qh.exports=xt;var Sd=qh.exports;const Qw=Tc(Sd),Jw=Bh({__proto__:null,default:Qw},[Sd]);var yp=Sd;iu.createRoot=yp.createRoot,iu.hydrateRoot=yp.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pe.apply(this,arguments)}var De;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(De||(De={}));const vp="popstate";function Xw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Pi("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:wr(o)}return ex(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zw(){return Math.random().toString(36).substr(2,8)}function wp(e,t){return{usr:e.state,key:e.key,idx:t}}function Pi(e,t,n,r){return n===void 0&&(n=null),Pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mn(t):t,{state:n,key:t&&t.key||r||Zw()})}function wr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ex(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=De.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Pe({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=De.Pop;let S=c(),d=S==null?null:S-u;u=S,l&&l({action:s,location:v.location,delta:d})}function h(S,d){s=De.Push;let p=Pi(v.location,S,d);n&&n(p,S),u=c()+1;let g=wp(p,u),C=v.createHref(p);try{a.pushState(g,"",C)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(C)}i&&l&&l({action:s,location:v.location,delta:1})}function w(S,d){s=De.Replace;let p=Pi(v.location,S,d);n&&n(p,S),u=c();let g=wp(p,u),C=v.createHref(p);a.replaceState(g,"",C),i&&l&&l({action:s,location:v.location,delta:0})}function y(S){let d=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:wr(S);return ne(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let v={get action(){return s},get location(){return e(o,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(vp,f),l=S,()=>{o.removeEventListener(vp,f),l=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let d=y(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:w,go(S){return a.go(S)}};return v}var Te;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Te||(Te={}));const tx=new Set(["lazy","caseSensitive","path","id","index","children"]);function nx(e){return e.index===!0}function Xu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,i],s=typeof o.id=="string"?o.id:a.join("-");if(ne(o.index!==!0||!o.children,"Cannot specify children on an index route"),ne(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),nx(o)){let l=Pe({},o,t(o),{id:s});return r[s]=l,l}else{let l=Pe({},o,t(o),{id:s,children:void 0});return r[s]=l,o.children&&(l.children=Xu(o.children,t,a,r)),l}})}function Jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mn(t):t,o=Co(r.pathname||"/",n);if(o==null)return null;let i=X0(e);ox(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=px(i[s],gx(o));return a}function rx(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function X0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sn([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),X0(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:dx(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of Z0(i.path))o(i,a,l)}),t}function Z0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Z0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function ox(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ix=/^:\w+$/,ax=3,sx=2,lx=1,ux=10,cx=-2,xp=e=>e==="*";function dx(e,t){let n=e.split("/"),r=n.length;return n.some(xp)&&(r+=cx),t&&(r+=sx),n.filter(o=>!xp(o)).reduce((o,i)=>o+(ix.test(i)?ax:i===""?lx:ux),r)}function fx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function px(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=hx({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:sn([o,c.pathname]),pathnameBase:xx(sn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=sn([o,c.pathnameBase]))}return i}function hx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:w}=c;if(h==="*"){let v=s[f]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[f];return w&&!y?u[h]=void 0:u[h]=yx(y||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function mx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function gx(e){try{return decodeURI(e)}catch(t){return vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yx(e,t){try{return decodeURIComponent(e)}catch(n){return vr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Co(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:wx(n,t):t,search:Sx(r),hash:kx(o)}}function wx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ol(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bs(e,t){let n=eg(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ms(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=mn(e):(o=Pe({},e),ne(!o.pathname||!o.pathname.includes("?"),Ol("?","pathname","search",o)),ne(!o.pathname||!o.pathname.includes("#"),Ol("#","pathname","hash",o)),ne(!o.search||!o.search.includes("#"),Ol("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=vx(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),xx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class kd{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function tg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ng=["post","put","patch","delete"],Ex=new Set(ng),Cx=["get",...ng],bx=new Set(Cx),Tx=new Set([301,302,303,307,308]),_x=new Set([307,308]),Nl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Px={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ho={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),og="remix-router-transitions";function Ix(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;o=T=>({hasErrorBoundary:k(T)})}else o=Rx;let i={},a=Xu(e.routes,o,void 0,i),s,l=e.basename||"/",u=Pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),c=null,f=new Set,h=null,w=null,y=null,v=e.hydrationData!=null,S=Jr(a,e.history.location,l),d=null;if(S==null){let k=Et(404,{pathname:e.history.location.pathname}),{matches:T,route:P}=Pp(a);S=T,d={[P.id]:k}}let p,g=S.some(k=>k.route.lazy),C=S.some(k=>k.route.loader);if(g)p=!1;else if(!C)p=!0;else if(u.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,T=e.hydrationData?e.hydrationData.errors:null;p=S.every(P=>P.route.loader&&P.route.loader.hydrate!==!0&&(k&&k[P.route.id]!==void 0||T&&T[P.route.id]!==void 0))}else p=e.hydrationData!=null;let _,x={historyAction:e.history.action,location:e.history.location,matches:S,initialized:p,navigation:Nl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||d,fetchers:new Map,blockers:new Map},b=De.Pop,D=!1,L,z=!1,X=new Map,Y=null,j=!1,V=!1,se=[],Me=[],ue=new Map,A=0,U=-1,O=new Map,W=new Set,K=new Map,fe=new Map,pe=new Set,re=new Map,Ie=new Map,ht=!1;function Jn(){if(c=e.history.listen(k=>{let{action:T,location:P,delta:N}=k;if(ht){ht=!1;return}vr(Ie.size===0||N!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=af({currentLocation:x.location,nextLocation:P,historyAction:T});if(H&&N!=null){ht=!0,e.history.go(N*-1),Xi(H,{state:"blocked",location:P,proceed(){Xi(H,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),e.history.go(N)},reset(){let te=new Map(x.blockers);te.set(H,Ho),ze({blockers:te})}});return}return Xn(T,P)}),n){Fx(t,X);let k=()=>Ux(t,X);t.addEventListener("pagehide",k),Y=()=>t.removeEventListener("pagehide",k)}return x.initialized||Xn(De.Pop,x.location,{initialHydration:!0}),_}function Xt(){c&&c(),Y&&Y(),f.clear(),L&&L.abort(),x.fetchers.forEach((k,T)=>Ji(T)),x.blockers.forEach((k,T)=>of(T))}function $o(k){return f.add(k),()=>f.delete(k)}function ze(k,T){T===void 0&&(T={}),x=Pe({},x,k);let P=[],N=[];u.v7_fetcherPersist&&x.fetchers.forEach((H,te)=>{H.state==="idle"&&(pe.has(te)?N.push(te):P.push(te))}),[...f].forEach(H=>H(x,{deletedFetchers:N,unstable_viewTransitionOpts:T.viewTransitionOpts,unstable_flushSync:T.flushSync===!0})),u.v7_fetcherPersist&&(P.forEach(H=>x.fetchers.delete(H)),N.forEach(H=>Ji(H)))}function lt(k,T,P){var N,H;let{flushSync:te}=P===void 0?{}:P,Q=x.actionData!=null&&x.navigation.formMethod!=null&&At(x.navigation.formMethod)&&x.navigation.state==="loading"&&((N=k.state)==null?void 0:N._isRedirect)!==!0,q;T.actionData?Object.keys(T.actionData).length>0?q=T.actionData:q=null:Q?q=x.actionData:q=null;let G=T.loaderData?_p(x.loaderData,T.loaderData,T.matches||[],T.errors):x.loaderData,ie=x.blockers;ie.size>0&&(ie=new Map(ie),ie.forEach((me,Ge)=>ie.set(Ge,Ho)));let Fe=D===!0||x.navigation.formMethod!=null&&At(x.navigation.formMethod)&&((H=k.state)==null?void 0:H._isRedirect)!==!0;s&&(a=s,s=void 0),j||b===De.Pop||(b===De.Push?e.history.push(k,k.state):b===De.Replace&&e.history.replace(k,k.state));let Z;if(b===De.Pop){let me=X.get(x.location.pathname);me&&me.has(k.pathname)?Z={currentLocation:x.location,nextLocation:k}:X.has(k.pathname)&&(Z={currentLocation:k,nextLocation:x.location})}else if(z){let me=X.get(x.location.pathname);me?me.add(k.pathname):(me=new Set([k.pathname]),X.set(x.location.pathname,me)),Z={currentLocation:x.location,nextLocation:k}}ze(Pe({},T,{actionData:q,loaderData:G,historyAction:b,location:k,initialized:!0,navigation:Nl,revalidation:"idle",restoreScrollPosition:lf(k,T.matches||x.matches),preventScrollReset:Fe,blockers:ie}),{viewTransitionOpts:Z,flushSync:te===!0}),b=De.Pop,D=!1,z=!1,j=!1,V=!1,se=[],Me=[]}async function Xd(k,T){if(typeof k=="number"){e.history.go(k);return}let P=Zu(x.location,x.matches,l,u.v7_prependBasename,k,u.v7_relativeSplatPath,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:N,submission:H,error:te}=Sp(u.v7_normalizeFormMethod,!1,P,T),Q=x.location,q=Pi(x.location,N,T&&T.state);q=Pe({},q,e.history.encodeLocation(q));let G=T&&T.replace!=null?T.replace:void 0,ie=De.Push;G===!0?ie=De.Replace:G===!1||H!=null&&At(H.formMethod)&&H.formAction===x.location.pathname+x.location.search&&(ie=De.Replace);let Fe=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,Z=(T&&T.unstable_flushSync)===!0,me=af({currentLocation:Q,nextLocation:q,historyAction:ie});if(me){Xi(me,{state:"blocked",location:q,proceed(){Xi(me,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Xd(k,T)},reset(){let Ge=new Map(x.blockers);Ge.set(me,Ho),ze({blockers:Ge})}});return}return await Xn(ie,q,{submission:H,pendingError:te,preventScrollReset:Fe,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition,flushSync:Z})}function py(){if(nl(),ze({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Xn(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Xn(b||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Xn(k,T,P){L&&L.abort(),L=null,b=k,j=(P&&P.startUninterruptedRevalidation)===!0,ky(x.location,x.matches),D=(P&&P.preventScrollReset)===!0,z=(P&&P.enableViewTransition)===!0;let N=s||a,H=P&&P.overrideNavigation,te=Jr(N,T,l),Q=(P&&P.flushSync)===!0;if(!te){let Ge=Et(404,{pathname:T.pathname}),{matches:kt,route:Ue}=Pp(N);rl(),lt(T,{matches:kt,loaderData:{},errors:{[Ue.id]:Ge}},{flushSync:Q});return}if(x.initialized&&!V&&Nx(x.location,T)&&!(P&&P.submission&&At(P.submission.formMethod))){lt(T,{matches:te},{flushSync:Q});return}L=new AbortController;let q=Wo(e.history,T,L.signal,P&&P.submission),G,ie;if(P&&P.pendingError)ie={[ui(te).route.id]:P.pendingError};else if(P&&P.submission&&At(P.submission.formMethod)){let Ge=await hy(q,T,P.submission,te,{replace:P.replace,flushSync:Q});if(Ge.shortCircuited)return;G=Ge.pendingActionData,ie=Ge.pendingActionError,H=Al(T,P.submission),Q=!1,q=new Request(q.url,{signal:q.signal})}let{shortCircuited:Fe,loaderData:Z,errors:me}=await my(q,T,te,H,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,Q,G,ie);Fe||(L=null,lt(T,Pe({matches:te},G?{actionData:G}:{},{loaderData:Z,errors:me})))}async function hy(k,T,P,N,H){H===void 0&&(H={}),nl();let te=Mx(T,P);ze({navigation:te},{flushSync:H.flushSync===!0});let Q,q=tc(N,T);if(!q.route.action&&!q.route.lazy)Q={type:Te.error,error:Et(405,{method:k.method,pathname:T.pathname,routeId:q.route.id})};else if(Q=await Vo("action",k,q,N,i,o,l,u.v7_relativeSplatPath),k.signal.aborted)return{shortCircuited:!0};if(sr(Q)){let G;return H&&H.replace!=null?G=H.replace:G=Q.location===x.location.pathname+x.location.search,await jo(x,Q,{submission:P,replace:G}),{shortCircuited:!0}}if(Xr(Q)){let G=ui(N,q.route.id);return(H&&H.replace)!==!0&&(b=De.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:Q.error}}}if(ar(Q))throw Et(400,{type:"defer-action"});return{pendingActionData:{[q.route.id]:Q.data}}}async function my(k,T,P,N,H,te,Q,q,G,ie,Fe){let Z=N||Al(T,H),me=H||te||Dp(Z),Ge=s||a,[kt,Ue]=kp(e.history,x,P,me,T,u.v7_partialHydration&&q===!0,V,se,Me,pe,K,W,Ge,l,ie,Fe);if(rl(he=>!(P&&P.some(Se=>Se.route.id===he))||kt&&kt.some(Se=>Se.route.id===he)),U=++A,kt.length===0&&Ue.length===0){let he=nf();return lt(T,Pe({matches:P,loaderData:{},errors:Fe||null},ie?{actionData:ie}:{},he?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(!j&&(!u.v7_partialHydration||!q)){Ue.forEach(Se=>{let Ut=x.fetchers.get(Se.key),ea=Ko(void 0,Ut?Ut.data:void 0);x.fetchers.set(Se.key,ea)});let he=ie||x.actionData;ze(Pe({navigation:Z},he?Object.keys(he).length===0?{actionData:null}:{actionData:he}:{},Ue.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:G})}Ue.forEach(he=>{ue.has(he.key)&&yn(he.key),he.controller&&ue.set(he.key,he.controller)});let jr=()=>Ue.forEach(he=>yn(he.key));L&&L.signal.addEventListener("abort",jr);let{results:ol,loaderResults:Or,fetcherResults:vn}=await Zd(x.matches,P,kt,Ue,k);if(k.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",jr),Ue.forEach(he=>ue.delete(he.key));let Zn=Rp(ol);if(Zn){if(Zn.idx>=kt.length){let he=Ue[Zn.idx-kt.length].key;W.add(he)}return await jo(x,Zn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:il,errors:al}=Tp(x,P,kt,Or,Fe,Ue,vn,re);re.forEach((he,Se)=>{he.subscribe(Ut=>{(Ut||he.done)&&re.delete(Se)})});let sl=nf(),Nr=rf(U),Zi=sl||Nr||Ue.length>0;return Pe({loaderData:il,errors:al},Zi?{fetchers:new Map(x.fetchers)}:{})}function gy(k,T,P,N){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ue.has(k)&&yn(k);let H=(N&&N.unstable_flushSync)===!0,te=s||a,Q=Zu(x.location,x.matches,l,u.v7_prependBasename,P,u.v7_relativeSplatPath,T,N==null?void 0:N.relative),q=Jr(te,Q,l);if(!q){Oo(k,T,Et(404,{pathname:Q}),{flushSync:H});return}let{path:G,submission:ie,error:Fe}=Sp(u.v7_normalizeFormMethod,!0,Q,N);if(Fe){Oo(k,T,Fe,{flushSync:H});return}let Z=tc(q,G);if(D=(N&&N.preventScrollReset)===!0,ie&&At(ie.formMethod)){yy(k,T,G,Z,q,H,ie);return}K.set(k,{routeId:T,path:G}),vy(k,T,G,Z,q,H,ie)}async function yy(k,T,P,N,H,te,Q){if(nl(),K.delete(k),!N.route.action&&!N.route.lazy){let Se=Et(405,{method:Q.formMethod,pathname:P,routeId:T});Oo(k,T,Se,{flushSync:te});return}let q=x.fetchers.get(k);gn(k,zx(Q,q),{flushSync:te});let G=new AbortController,ie=Wo(e.history,P,G.signal,Q);ue.set(k,G);let Fe=A,Z=await Vo("action",ie,N,H,i,o,l,u.v7_relativeSplatPath);if(ie.signal.aborted){ue.get(k)===G&&ue.delete(k);return}if(u.v7_fetcherPersist&&pe.has(k)){if(sr(Z)||Xr(Z)){gn(k,Sn(void 0));return}}else{if(sr(Z))if(ue.delete(k),U>Fe){gn(k,Sn(void 0));return}else return W.add(k),gn(k,Ko(Q)),jo(x,Z,{fetcherSubmission:Q});if(Xr(Z)){Oo(k,T,Z.error);return}}if(ar(Z))throw Et(400,{type:"defer-action"});let me=x.navigation.location||x.location,Ge=Wo(e.history,me,G.signal),kt=s||a,Ue=x.navigation.state!=="idle"?Jr(kt,x.navigation.location,l):x.matches;ne(Ue,"Didn't find any matches after fetcher action");let jr=++A;O.set(k,jr);let ol=Ko(Q,Z.data);x.fetchers.set(k,ol);let[Or,vn]=kp(e.history,x,Ue,Q,me,!1,V,se,Me,pe,K,W,kt,l,{[N.route.id]:Z.data},void 0);vn.filter(Se=>Se.key!==k).forEach(Se=>{let Ut=Se.key,ea=x.fetchers.get(Ut),Cy=Ko(void 0,ea?ea.data:void 0);x.fetchers.set(Ut,Cy),ue.has(Ut)&&yn(Ut),Se.controller&&ue.set(Ut,Se.controller)}),ze({fetchers:new Map(x.fetchers)});let Zn=()=>vn.forEach(Se=>yn(Se.key));G.signal.addEventListener("abort",Zn);let{results:il,loaderResults:al,fetcherResults:sl}=await Zd(x.matches,Ue,Or,vn,Ge);if(G.signal.aborted)return;G.signal.removeEventListener("abort",Zn),O.delete(k),ue.delete(k),vn.forEach(Se=>ue.delete(Se.key));let Nr=Rp(il);if(Nr){if(Nr.idx>=Or.length){let Se=vn[Nr.idx-Or.length].key;W.add(Se)}return jo(x,Nr.result)}let{loaderData:Zi,errors:he}=Tp(x,x.matches,Or,al,void 0,vn,sl,re);if(x.fetchers.has(k)){let Se=Sn(Z.data);x.fetchers.set(k,Se)}rf(jr),x.navigation.state==="loading"&&jr>U?(ne(b,"Expected pending action"),L&&L.abort(),lt(x.navigation.location,{matches:Ue,loaderData:Zi,errors:he,fetchers:new Map(x.fetchers)})):(ze({errors:he,loaderData:_p(x.loaderData,Zi,Ue,he),fetchers:new Map(x.fetchers)}),V=!1)}async function vy(k,T,P,N,H,te,Q){let q=x.fetchers.get(k);gn(k,Ko(Q,q?q.data:void 0),{flushSync:te});let G=new AbortController,ie=Wo(e.history,P,G.signal);ue.set(k,G);let Fe=A,Z=await Vo("loader",ie,N,H,i,o,l,u.v7_relativeSplatPath);if(ar(Z)&&(Z=await sg(Z,ie.signal,!0)||Z),ue.get(k)===G&&ue.delete(k),!ie.signal.aborted){if(pe.has(k)){gn(k,Sn(void 0));return}if(sr(Z))if(U>Fe){gn(k,Sn(void 0));return}else{W.add(k),await jo(x,Z);return}if(Xr(Z)){Oo(k,T,Z.error);return}ne(!ar(Z),"Unhandled fetcher deferred data"),gn(k,Sn(Z.data))}}async function jo(k,T,P){let{submission:N,fetcherSubmission:H,replace:te}=P===void 0?{}:P;T.revalidate&&(V=!0);let Q=Pi(k.location,T.location,{_isRedirect:!0});if(ne(Q,"Expected a location on the redirect navigation"),n){let me=!1;if(T.reloadDocument)me=!0;else if(rg.test(T.location)){const Ge=e.history.createURL(T.location);me=Ge.origin!==t.location.origin||Co(Ge.pathname,l)==null}if(me){te?t.location.replace(T.location):t.location.assign(T.location);return}}L=null;let q=te===!0?De.Replace:De.Push,{formMethod:G,formAction:ie,formEncType:Fe}=k.navigation;!N&&!H&&G&&ie&&Fe&&(N=Dp(k.navigation));let Z=N||H;if(_x.has(T.status)&&Z&&At(Z.formMethod))await Xn(q,Q,{submission:Pe({},Z,{formAction:T.location}),preventScrollReset:D});else{let me=Al(Q,N);await Xn(q,Q,{overrideNavigation:me,fetcherSubmission:H,preventScrollReset:D})}}async function Zd(k,T,P,N,H){let te=await Promise.all([...P.map(G=>Vo("loader",H,G,T,i,o,l,u.v7_relativeSplatPath)),...N.map(G=>G.matches&&G.match&&G.controller?Vo("loader",Wo(e.history,G.path,G.controller.signal),G.match,G.matches,i,o,l,u.v7_relativeSplatPath):{type:Te.error,error:Et(404,{pathname:G.path})})]),Q=te.slice(0,P.length),q=te.slice(P.length);return await Promise.all([Ip(k,P,Q,Q.map(()=>H.signal),!1,x.loaderData),Ip(k,N.map(G=>G.match),q,N.map(G=>G.controller?G.controller.signal:null),!0)]),{results:te,loaderResults:Q,fetcherResults:q}}function nl(){V=!0,se.push(...rl()),K.forEach((k,T)=>{ue.has(T)&&(Me.push(T),yn(T))})}function gn(k,T,P){P===void 0&&(P={}),x.fetchers.set(k,T),ze({fetchers:new Map(x.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Oo(k,T,P,N){N===void 0&&(N={});let H=ui(x.matches,T);Ji(k),ze({errors:{[H.route.id]:P},fetchers:new Map(x.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function ef(k){return u.v7_fetcherPersist&&(fe.set(k,(fe.get(k)||0)+1),pe.has(k)&&pe.delete(k)),x.fetchers.get(k)||Px}function Ji(k){let T=x.fetchers.get(k);ue.has(k)&&!(T&&T.state==="loading"&&O.has(k))&&yn(k),K.delete(k),O.delete(k),W.delete(k),pe.delete(k),x.fetchers.delete(k)}function wy(k){if(u.v7_fetcherPersist){let T=(fe.get(k)||0)-1;T<=0?(fe.delete(k),pe.add(k)):fe.set(k,T)}else Ji(k);ze({fetchers:new Map(x.fetchers)})}function yn(k){let T=ue.get(k);ne(T,"Expected fetch controller: "+k),T.abort(),ue.delete(k)}function tf(k){for(let T of k){let P=ef(T),N=Sn(P.data);x.fetchers.set(T,N)}}function nf(){let k=[],T=!1;for(let P of W){let N=x.fetchers.get(P);ne(N,"Expected fetcher: "+P),N.state==="loading"&&(W.delete(P),k.push(P),T=!0)}return tf(k),T}function rf(k){let T=[];for(let[P,N]of O)if(N<k){let H=x.fetchers.get(P);ne(H,"Expected fetcher: "+P),H.state==="loading"&&(yn(P),O.delete(P),T.push(P))}return tf(T),T.length>0}function xy(k,T){let P=x.blockers.get(k)||Ho;return Ie.get(k)!==T&&Ie.set(k,T),P}function of(k){x.blockers.delete(k),Ie.delete(k)}function Xi(k,T){let P=x.blockers.get(k)||Ho;ne(P.state==="unblocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="blocked"||P.state==="blocked"&&T.state==="proceeding"||P.state==="blocked"&&T.state==="unblocked"||P.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+T.state);let N=new Map(x.blockers);N.set(k,T),ze({blockers:N})}function af(k){let{currentLocation:T,nextLocation:P,historyAction:N}=k;if(Ie.size===0)return;Ie.size>1&&vr(!1,"A router only supports one blocker at a time");let H=Array.from(Ie.entries()),[te,Q]=H[H.length-1],q=x.blockers.get(te);if(!(q&&q.state==="proceeding")&&Q({currentLocation:T,nextLocation:P,historyAction:N}))return te}function rl(k){let T=[];return re.forEach((P,N)=>{(!k||k(N))&&(P.cancel(),T.push(N),re.delete(N))}),T}function Sy(k,T,P){if(h=k,y=T,w=P||null,!v&&x.navigation===Nl){v=!0;let N=lf(x.location,x.matches);N!=null&&ze({restoreScrollPosition:N})}return()=>{h=null,y=null,w=null}}function sf(k,T){return w&&w(k,T.map(N=>rx(N,x.loaderData)))||k.key}function ky(k,T){if(h&&y){let P=sf(k,T);h[P]=y()}}function lf(k,T){if(h){let P=sf(k,T),N=h[P];if(typeof N=="number")return N}return null}function Ey(k){i={},s=Xu(k,o,void 0,i)}return _={get basename(){return l},get future(){return u},get state(){return x},get routes(){return a},get window(){return t},initialize:Jn,subscribe:$o,enableScrollRestoration:Sy,navigate:Xd,fetch:gy,revalidate:py,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:ef,deleteFetcher:wy,dispose:Xt,getBlocker:xy,deleteBlocker:of,_internalFetchControllers:ue,_internalActiveDeferreds:re,_internalSetRoutes:Ey},_}function Dx(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Zu(e,t,n,r,o,i,a,s){let l,u;if(a){l=[];for(let f of t)if(l.push(f),f.route.id===a){u=f;break}}else l=t,u=t[t.length-1];let c=Ms(o||".",Bs(l,i),Co(e.pathname,n)||e.pathname,s==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Ed(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:sn([n,c.pathname])),wr(c)}function Sp(e,t,n,r){if(!r||!Dx(r))return{path:n};if(r.formMethod&&!Bx(r.formMethod))return{path:n,error:Et(405,{method:r.formMethod})};let o=()=>({path:n,error:Et(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),s=ag(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!At(a))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,y)=>{let[v,S]=y;return""+w+v+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!At(a))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=ec(r.formData),u=r.formData;else if(r.body instanceof FormData)l=ec(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=bp(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=bp(l)}catch{return o()}let c={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(At(c.formMethod))return{path:n,submission:c};let f=mn(n);return t&&f.search&&Ed(f.search)&&l.append("index",""),f.search="?"+l,{path:wr(f),submission:c}}function $x(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function kp(e,t,n,r,o,i,a,s,l,u,c,f,h,w,y,v){let S=v?Object.values(v)[0]:y?Object.values(y)[0]:void 0,d=e.createURL(t.location),p=e.createURL(o),g=v?Object.keys(v)[0]:void 0,_=$x(n,g).filter((b,D)=>{let{route:L}=b;if(L.lazy)return!0;if(L.loader==null)return!1;if(i)return L.loader.hydrate?!0:t.loaderData[L.id]===void 0&&(!t.errors||t.errors[L.id]===void 0);if(jx(t.loaderData,t.matches[D],b)||s.some(Y=>Y===b.route.id))return!0;let z=t.matches[D],X=b;return Ep(b,Pe({currentUrl:d,currentParams:z.params,nextUrl:p,nextParams:X.params},r,{actionResult:S,defaultShouldRevalidate:a||d.pathname+d.search===p.pathname+p.search||d.search!==p.search||ig(z,X)}))}),x=[];return c.forEach((b,D)=>{if(i||!n.some(j=>j.route.id===b.routeId)||u.has(D))return;let L=Jr(h,b.path,w);if(!L){x.push({key:D,routeId:b.routeId,path:b.path,matches:null,match:null,controller:null});return}let z=t.fetchers.get(D),X=tc(L,b.path),Y=!1;f.has(D)?Y=!1:l.includes(D)?Y=!0:z&&z.state!=="idle"&&z.data===void 0?Y=a:Y=Ep(X,Pe({currentUrl:d,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:a})),Y&&x.push({key:D,routeId:b.routeId,path:b.path,matches:L,match:X,controller:new AbortController})}),[_,x]}function jx(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function ig(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ep(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Cp(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ne(o,"No route found in manifest");let i={};for(let a in r){let l=o[a]!==void 0&&a!=="hasErrorBoundary";vr(!l,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!tx.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,Pe({},t(o),{lazy:void 0}))}async function Vo(e,t,n,r,o,i,a,s,l){l===void 0&&(l={});let u,c,f,h=v=>{let S,d=new Promise((p,g)=>S=g);return f=()=>S(),t.signal.addEventListener("abort",f),Promise.race([v({request:t,params:n.params,context:l.requestContext}),d])};try{let v=n.route[e];if(n.route.lazy)if(v){let S,d=await Promise.all([h(v).catch(p=>{S=p}),Cp(n.route,i,o)]);if(S)throw S;c=d[0]}else if(await Cp(n.route,i,o),v=n.route[e],v)c=await h(v);else if(e==="action"){let S=new URL(t.url),d=S.pathname+S.search;throw Et(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:Te.data,data:void 0};else if(v)c=await h(v);else{let S=new URL(t.url),d=S.pathname+S.search;throw Et(404,{pathname:d})}ne(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(v){u=Te.error,c=v}finally{f&&t.signal.removeEventListener("abort",f)}if(Lx(c)){let v=c.status;if(Tx.has(v)){let d=c.headers.get("Location");if(ne(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!rg.test(d))d=Zu(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,d,s);else if(!l.isStaticRequest){let p=new URL(t.url),g=d.startsWith("//")?new URL(p.protocol+d):new URL(d),C=Co(g.pathname,a)!=null;g.origin===p.origin&&C&&(d=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw c.headers.set("Location",d),c;return{type:Te.redirect,status:v,location:d,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Te.error?Te.error:Te.data,response:c};let S;try{let d=c.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?S=await c.json():S=await c.text()}catch(d){return{type:Te.error,error:d}}return u===Te.error?{type:u,error:new kd(v,c.statusText,S),headers:c.headers}:{type:Te.data,data:S,statusCode:c.status,headers:c.headers}}if(u===Te.error)return{type:u,error:c};if(Ax(c)){var w,y;return{type:Te.deferred,deferredData:c,statusCode:(w=c.init)==null?void 0:w.status,headers:((y=c.init)==null?void 0:y.headers)&&new Headers(c.init.headers)}}return{type:Te.data,data:c}}function Wo(e,t,n,r){let o=e.createURL(ag(t)).toString(),i={signal:n};if(r&&At(r.formMethod)){let{formMethod:a,formEncType:s}=r;i.method=a.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=ec(r.formData):i.body=r.formData}return new Request(o,i)}function ec(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function bp(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Ox(e,t,n,r,o){let i={},a=null,s,l=!1,u={};return n.forEach((c,f)=>{let h=t[f].route.id;if(ne(!sr(c),"Cannot handle redirect results in processLoaderData"),Xr(c)){let w=ui(e,h),y=c.error;r&&(y=Object.values(r)[0],r=void 0),a=a||{},a[w.route.id]==null&&(a[w.route.id]=y),i[h]=void 0,l||(l=!0,s=tg(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else ar(c)?(o.set(h,c.deferredData),i[h]=c.deferredData.data):i[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(a=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:a,statusCode:s||200,loaderHeaders:u}}function Tp(e,t,n,r,o,i,a,s){let{loaderData:l,errors:u}=Ox(t,n,r,o,s);for(let c=0;c<i.length;c++){let{key:f,match:h,controller:w}=i[c];ne(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let y=a[c];if(!(w&&w.signal.aborted))if(Xr(y)){let v=ui(e.matches,h==null?void 0:h.route.id);u&&u[v.route.id]||(u=Pe({},u,{[v.route.id]:y.error})),e.fetchers.delete(f)}else if(sr(y))ne(!1,"Unhandled fetcher revalidation redirect");else if(ar(y))ne(!1,"Unhandled fetcher deferred data");else{let v=Sn(y.data);e.fetchers.set(f,v)}}return{loaderData:l,errors:u}}function _p(e,t,n,r){let o=Pe({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function ui(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Pp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Et(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new kd(e||500,a,new Error(s),!0)}function Rp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(sr(n))return{result:n,idx:t}}}function ag(e){let t=typeof e=="string"?mn(e):e;return wr(Pe({},t,{hash:""}))}function Nx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ar(e){return e.type===Te.deferred}function Xr(e){return e.type===Te.error}function sr(e){return(e&&e.type)===Te.redirect}function Ax(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Lx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Bx(e){return bx.has(e.toLowerCase())}function At(e){return Ex.has(e.toLowerCase())}async function Ip(e,t,n,r,o,i){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),c=u!=null&&!ig(u,l)&&(i&&i[l.route.id])!==void 0;if(ar(s)&&(o||c)){let f=r[a];ne(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await sg(s,f,o).then(h=>{h&&(n[a]=h||n[a])})}}}async function sg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Te.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Te.error,error:o}}return{type:Te.data,data:e.deferredData.data}}}function Ed(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function tc(e,t){let n=typeof t=="string"?mn(t).search:t.search;if(e[e.length-1].route.index&&Ed(n||""))return e[e.length-1];let r=eg(e);return r[r.length-1]}function Dp(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Al(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Mx(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ko(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function zx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Sn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Fx(e,t){try{let n=e.sessionStorage.getItem(og);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function Ux(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(og,JSON.stringify(n))}catch(r){vr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ri.apply(this,arguments)}const zs=E.createContext(null),lg=E.createContext(null),Yn=E.createContext(null),Fs=E.createContext(null),qn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ug=E.createContext(null);function Hx(e,t){let{relative:n}=t===void 0?{}:t;bo()||ne(!1);let{basename:r,navigator:o}=E.useContext(Yn),{hash:i,pathname:a,search:s}=dg(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:sn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function bo(){return E.useContext(Fs)!=null}function Ir(){return bo()||ne(!1),E.useContext(Fs).location}function cg(e){E.useContext(Yn).static||E.useLayoutEffect(e)}function Qt(){let{isDataRoute:e}=E.useContext(qn);return e?t2():Vx()}function Vx(){bo()||ne(!1);let e=E.useContext(zs),{basename:t,future:n,navigator:r}=E.useContext(Yn),{matches:o}=E.useContext(qn),{pathname:i}=Ir(),a=JSON.stringify(Bs(o,n.v7_relativeSplatPath)),s=E.useRef(!1);return cg(()=>{s.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Ms(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:sn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,i,e])}function dg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Yn),{matches:o}=E.useContext(qn),{pathname:i}=Ir(),a=JSON.stringify(Bs(o,r.v7_relativeSplatPath));return E.useMemo(()=>Ms(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Wx(e,t,n,r){bo()||ne(!1);let{navigator:o}=E.useContext(Yn),{matches:i}=E.useContext(qn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ir(),c;if(t){var f;let S=typeof t=="string"?mn(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||ne(!1),c=S}else c=u;let h=c.pathname||"/",w=l==="/"?h:h.slice(l.length)||"/",y=Jr(e,{pathname:w}),v=Qx(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:sn([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:sn([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&v?E.createElement(Fs.Provider,{value:{location:Ri({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:De.Pop}},v):v}function Kx(){let e=e2(),t=tg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,i)}const Gx=E.createElement(Kx,null);class Yx extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(qn.Provider,{value:this.props.routeContext},E.createElement(ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qx(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(zs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(qn.Provider,{value:t},r)}function Qx(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let c=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));c>=0||ne(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:w}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let w,y=!1,v=null,S=null;n&&(w=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||Gx,l&&(u<0&&h===0?(n2("route-fallback",!1),y=!0,S=null):u===h&&(y=!0,S=f.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,h+1)),p=()=>{let g;return w?g=v:y?g=S:f.route.Component?g=E.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,E.createElement(qx,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?E.createElement(Yx,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var fg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fg||{}),fs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fs||{});function Jx(e){let t=E.useContext(zs);return t||ne(!1),t}function Xx(e){let t=E.useContext(lg);return t||ne(!1),t}function Zx(e){let t=E.useContext(qn);return t||ne(!1),t}function pg(e){let t=Zx(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function e2(){var e;let t=E.useContext(ug),n=Xx(fs.UseRouteError),r=pg(fs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function t2(){let{router:e}=Jx(fg.UseNavigateStable),t=pg(fs.UseNavigateStable),n=E.useRef(!1);return cg(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ri({fromRouteId:t},i)))},[e,t])}const $p={};function n2(e,t,n){!t&&!$p[e]&&($p[e]=!0)}function r2(e){let{to:t,replace:n,state:r,relative:o}=e;bo()||ne(!1);let{future:i,static:a}=E.useContext(Yn),{matches:s}=E.useContext(qn),{pathname:l}=Ir(),u=Qt(),c=Ms(t,Bs(s,i.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(c);return E.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function o2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=De.Pop,navigator:i,static:a=!1,future:s}=e;bo()&&ne(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:i,static:a,future:Ri({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=mn(r));let{pathname:c="/",search:f="",hash:h="",state:w=null,key:y="default"}=r,v=E.useMemo(()=>{let S=Co(c,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:w,key:y},navigationType:o}},[l,c,f,h,w,y,o]);return v==null?null:E.createElement(Yn.Provider,{value:u},E.createElement(Fs.Provider,{children:n,value:v}))}new Promise(()=>{});function i2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}function a2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function s2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l2(e,t){return e.button===0&&(!t||t==="_self")&&!s2(e)}const u2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function c2(e,t){return Ix({basename:t==null?void 0:t.basename,future:Ii({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Xw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||d2(),routes:e,mapRouteProperties:i2,window:t==null?void 0:t.window}).initialize()}function d2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ii({},t,{errors:f2(t.errors)})),t}function f2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new kd(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const p2=E.createContext({isTransitioning:!1}),h2=E.createContext(new Map),m2="startTransition",jp=zy[m2],g2="flushSync",Op=Jw[g2];function y2(e){jp?jp(e):e()}function Go(e){Op?Op(e):e()}let v2=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function w2(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=E.useState(n.state),[a,s]=E.useState(),[l,u]=E.useState({isTransitioning:!1}),[c,f]=E.useState(),[h,w]=E.useState(),[y,v]=E.useState(),S=E.useRef(new Map),{v7_startTransition:d}=r||{},p=E.useCallback(b=>{d?y2(b):b()},[d]),g=E.useCallback((b,D)=>{let{deletedFetchers:L,unstable_flushSync:z,unstable_viewTransitionOpts:X}=D;L.forEach(j=>S.current.delete(j)),b.fetchers.forEach((j,V)=>{j.data!==void 0&&S.current.set(V,j.data)});let Y=n.window==null||typeof n.window.document.startViewTransition!="function";if(!X||Y){z?Go(()=>i(b)):p(()=>i(b));return}if(z){Go(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let j=n.window.document.startViewTransition(()=>{Go(()=>i(b))});j.finished.finally(()=>{Go(()=>{f(void 0),w(void 0),s(void 0),u({isTransitioning:!1})})}),Go(()=>w(j));return}h?(c&&c.resolve(),h.skipTransition(),v({state:b,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(s(b),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,h,c,S,p]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new v2)},[l]),E.useEffect(()=>{if(c&&a&&n.window){let b=a,D=c.promise,L=n.window.document.startViewTransition(async()=>{p(()=>i(b)),await D});L.finished.finally(()=>{f(void 0),w(void 0),s(void 0),u({isTransitioning:!1})}),w(L)}},[p,a,c,n.window]),E.useEffect(()=>{c&&a&&o.location.key===a.location.key&&c.resolve()},[c,h,o.location,a]),E.useEffect(()=>{!l.isTransitioning&&y&&(s(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),v(void 0))},[l.isTransitioning,y]),E.useEffect(()=>{},[]);let C=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,D,L)=>n.navigate(b,{state:D,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(b,D,L)=>n.navigate(b,{replace:!0,state:D,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),_=n.basename||"/",x=E.useMemo(()=>({router:n,navigator:C,static:!1,basename:_}),[n,C,_]);return E.createElement(E.Fragment,null,E.createElement(zs.Provider,{value:x},E.createElement(lg.Provider,{value:o},E.createElement(h2.Provider,{value:S.current},E.createElement(p2.Provider,{value:l},E.createElement(o2,{basename:_,location:o.location,navigationType:o.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?E.createElement(x2,{routes:n.routes,future:n.future,state:o}):t))))),null)}function x2(e){let{routes:t,future:n,state:r}=e;return Wx(t,void 0,r,n)}const S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E2=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=a2(t,u2),{basename:w}=E.useContext(Yn),y,v=!1;if(typeof u=="string"&&k2.test(u)&&(y=u,S2))try{let g=new URL(window.location.href),C=u.startsWith("//")?new URL(g.protocol+u):new URL(u),_=Co(C.pathname,w);C.origin===g.origin&&_!=null?u=_+C.search+C.hash:v=!0}catch{}let S=Hx(u,{relative:o}),d=C2(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||d(g)}return E.createElement("a",Ii({},h,{href:y||S,onClick:v||i?r:p,ref:n,target:l}))});var Np;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Np||(Np={}));var Ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ap||(Ap={}));function C2(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Qt(),u=Ir(),c=dg(e,{relative:a});return E.useCallback(f=>{if(l2(f,n)){f.preventDefault();let h=r!==void 0?r:wr(u)===wr(c);l(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[u,l,c,r,o,n,e,i,a,s])}var We=function(){return We=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},We.apply(this,arguments)};function mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ve="-ms-",ci="-moz-",ce="-webkit-",hg="comm",Us="rule",Cd="decl",b2="@import",mg="@keyframes",T2="@layer",gg=Math.abs,bd=String.fromCharCode,nc=Object.assign;function _2(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function yg(e){return e.trim()}function en(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Oa(e,t,n){return e.indexOf(t,n)}function Ve(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function vg(e){return e.length}function Zo(e,t){return t.push(e),e}function P2(e,t){return e.map(t).join("")}function Lp(e,t){return e.filter(function(n){return!en(n,t)})}var Hs=1,yo=1,wg=0,$t=0,je=0,To="";function Vs(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Hs,column:yo,length:a,return:"",siblings:s}}function kn(e,t){return nc(Vs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Lr(e){for(;e.root;)e=kn(e.root,{children:[e]});Zo(e,e.siblings)}function R2(){return je}function I2(){return je=$t>0?Ve(To,--$t):0,yo--,je===10&&(yo=1,Hs--),je}function zt(){return je=$t<wg?Ve(To,$t++):0,yo++,je===10&&(yo=1,Hs++),je}function fr(){return Ve(To,$t)}function Na(){return $t}function Ws(e,t){return go(To,e,t)}function rc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D2(e){return Hs=yo=1,wg=Wt(To=e),$t=0,[]}function $2(e){return To="",e}function Ll(e){return yg(Ws($t-1,oc(e===91?e+2:e===40?e+1:e)))}function j2(e){for(;(je=fr())&&je<33;)zt();return rc(e)>2||rc(je)>3?"":" "}function O2(e,t){for(;--t&&zt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Ws(e,Na()+(t<6&&fr()==32&&zt()==32))}function oc(e){for(;zt();)switch(je){case e:return $t;case 34:case 39:e!==34&&e!==39&&oc(je);break;case 40:e===41&&oc(e);break;case 92:zt();break}return $t}function N2(e,t){for(;zt()&&e+je!==57;)if(e+je===84&&fr()===47)break;return"/*"+Ws(t,$t-1)+"*"+bd(e===47?e:zt())}function A2(e){for(;!rc(fr());)zt();return Ws(e,$t)}function L2(e){return $2(Aa("",null,null,null,[""],e=D2(e),0,[0],e))}function Aa(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,f=a,h=0,w=0,y=0,v=1,S=1,d=1,p=0,g="",C=o,_=i,x=r,b=g;S;)switch(y=p,p=zt()){case 40:if(y!=108&&Ve(b,f-1)==58){Oa(b+=ee(Ll(p),"&","&\f"),"&\f",gg(u?s[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:b+=Ll(p);break;case 9:case 10:case 13:case 32:b+=j2(y);break;case 92:b+=O2(Na()-1,7);continue;case 47:switch(fr()){case 42:case 47:Zo(B2(N2(zt(),Na()),t,n,l),l);break;default:b+="/"}break;case 123*v:s[u++]=Wt(b)*d;case 125*v:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+c:d==-1&&(b=ee(b,/\f/g,"")),w>0&&Wt(b)-f&&Zo(w>32?Mp(b+";",r,n,f-1,l):Mp(ee(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(Zo(x=Bp(b,t,n,u,c,o,s,g,C=[],_=[],f,i),i),p===123)if(c===0)Aa(b,t,x,x,C,i,f,s,_);else switch(h===99&&Ve(b,3)===110?100:h){case 100:case 108:case 109:case 115:Aa(e,x,x,r&&Zo(Bp(e,x,x,0,0,o,s,g,o,C=[],f,_),_),o,_,f,s,r?C:_);break;default:Aa(b,x,x,x,[""],_,0,s,_)}}u=c=w=0,v=d=1,g=b="",f=a;break;case 58:f=1+Wt(b),w=y;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&I2()==125)continue}switch(b+=bd(p),p*v){case 38:d=c>0?1:(b+="\f",-1);break;case 44:s[u++]=(Wt(b)-1)*d,d=1;break;case 64:fr()===45&&(b+=Ll(zt())),h=fr(),c=f=Wt(g=b+=A2(Na())),p++;break;case 45:y===45&&Wt(b)==2&&(v=0)}}return i}function Bp(e,t,n,r,o,i,a,s,l,u,c,f){for(var h=o-1,w=o===0?i:[""],y=vg(w),v=0,S=0,d=0;v<r;++v)for(var p=0,g=go(e,h+1,h=gg(S=a[v])),C=e;p<y;++p)(C=yg(S>0?w[p]+" "+g:ee(g,/&\f/g,w[p])))&&(l[d++]=C);return Vs(e,t,n,o===0?Us:s,l,u,c,f)}function B2(e,t,n,r){return Vs(e,t,n,hg,bd(R2()),go(e,2,-2),0,r)}function Mp(e,t,n,r,o){return Vs(e,t,n,Cd,go(e,0,r),go(e,r+1,-1),r,o)}function xg(e,t,n){switch(_2(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+ci+e+ve+e+e;case 5936:switch(Ve(e,t+11)){case 114:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ve+e+e;case 6165:return ce+e+ve+"flex-"+e+e;case 5187:return ce+e+ee(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ce+e+ve+"flex-item-"+ee(e,/flex-|-self/g,"")+(en(e,/flex-|baseline/)?"":ve+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ve+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ve+ee(e,"shrink","negative")+e;case 5292:return ce+e+ve+ee(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ee(e,"-grow","")+ce+e+ve+ee(e,"grow","positive")+e;case 4554:return ce+ee(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4200:if(!en(e,/flex-|baseline/))return ve+"grid-column-align"+go(e,t)+e;break;case 2592:case 3360:return ve+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,en(r.props,/grid-\w+-end/)})?~Oa(e+(n=n[t].value),"span",0)?e:ve+ee(e,"-start","")+e+ve+"grid-row-span:"+(~Oa(n,"span",0)?en(n,/\d+/):+en(n,/\d+/)-+en(e,/\d+/))+";":ve+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return en(r.props,/grid-\w+-start/)})?e:ve+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+ci+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oa(e,"stretch",0)?xg(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,l,u){return ve+o+":"+i+u+(a?ve+o+"-span:"+(s?l:+l-+i)+u:"")+e});case 4949:if(Ve(e,t+6)===121)return ee(e,":",":"+ce)+e;break;case 6444:switch(Ve(e,Ve(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ve(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ve+"$2box$3")+e;case 100:return ee(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function ps(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function M2(e,t,n,r){switch(e.type){case T2:if(e.children.length)break;case b2:case Cd:return e.return=e.return||e.value;case hg:return"";case mg:return e.return=e.value+"{"+ps(e.children,r)+"}";case Us:if(!Wt(e.value=e.props.join(",")))return""}return Wt(n=ps(e.children,r))?e.return=e.value+"{"+n+"}":""}function z2(e){var t=vg(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function F2(e){return function(t){t.root||(t=t.return)&&e(t)}}function U2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cd:e.return=xg(e.value,e.length,n);return;case mg:return ps([kn(e,{value:ee(e.value,"@","@"+ce)})],r);case Us:if(e.length)return P2(n=e.props,function(o){switch(en(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lr(kn(e,{props:[ee(o,/:(read-\w+)/,":"+ci+"$1")]})),Lr(kn(e,{props:[o]})),nc(e,{props:Lp(n,r)});break;case"::placeholder":Lr(kn(e,{props:[ee(o,/:(plac\w+)/,":"+ce+"input-$1")]})),Lr(kn(e,{props:[ee(o,/:(plac\w+)/,":"+ci+"$1")]})),Lr(kn(e,{props:[ee(o,/:(plac\w+)/,ve+"input-$1")]})),Lr(kn(e,{props:[o]})),nc(e,{props:Lp(n,r)});break}return""})}}var H2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},vo=typeof process<"u"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",Sg="active",kg="data-styled-version",Ks="6.1.6",Td=`/*!sc*/
`,_d=typeof window<"u"&&"HTMLElement"in window,V2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY),W2={},Gs=Object.freeze([]),wo=Object.freeze({});function Eg(e,t,n){return n===void 0&&(n=wo),e.theme!==n.theme&&e.theme||t||n.theme}var Cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),K2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,G2=/(^-|-$)/g;function zp(e){return e.replace(K2,"-").replace(G2,"")}var Y2=/(a)(d)/gi,va=52,Fp=function(e){return String.fromCharCode(e+(e>25?39:97))};function ic(e){var t,n="";for(t=Math.abs(e);t>va;t=t/va|0)n=Fp(t%va)+n;return(Fp(t%va)+n).replace(Y2,"$1-$2")}var Bl,bg=5381,Zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tg=function(e){return Zr(bg,e)};function Pd(e){return ic(Tg(e)>>>0)}function q2(e){return e.displayName||e.name||"Component"}function Ml(e){return typeof e=="string"&&!0}var _g=typeof Symbol=="function"&&Symbol.for,Pg=_g?Symbol.for("react.memo"):60115,Q2=_g?Symbol.for("react.forward_ref"):60112,J2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z2=((Bl={})[Q2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bl[Pg]=Rg,Bl);function Up(e){return("type"in(t=e)&&t.type.$$typeof)===Pg?Rg:"$$typeof"in e?Z2[e.$$typeof]:J2;var t}var eS=Object.defineProperty,tS=Object.getOwnPropertyNames,Hp=Object.getOwnPropertySymbols,nS=Object.getOwnPropertyDescriptor,rS=Object.getPrototypeOf,Vp=Object.prototype;function Ig(e,t,n){if(typeof t!="string"){if(Vp){var r=rS(t);r&&r!==Vp&&Ig(e,r,n)}var o=tS(t);Hp&&(o=o.concat(Hp(t)));for(var i=Up(e),a=Up(t),s=0;s<o.length;++s){var l=o[s];if(!(l in X2||n&&n[l]||a&&l in a||i&&l in i)){var u=nS(t,l);try{eS(e,l,u)}catch{}}}}return e}function xr(e){return typeof e=="function"}function Rd(e){return typeof e=="object"&&"styledComponentId"in e}function lr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ac(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ac(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=ac(e[r],t[r]);return e}function Id(e,t){Object.defineProperty(e,"toString",{value:t})}function Sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var oS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Sr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(Td);return n},e}(),La=new Map,ms=new Map,Ba=1,wa=function(e){if(La.has(e))return La.get(e);for(;ms.has(Ba);)Ba++;var t=Ba++;return La.set(e,t),ms.set(t,e),t},iS=function(e,t){Ba=t+1,La.set(e,t),ms.set(t,e)},aS="style[".concat(vo,"][").concat(kg,'="').concat(Ks,'"]'),sS=new RegExp("^".concat(vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lS=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},uS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Td),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(sS);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(iS(c,u),lS(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function cS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var l=Array.from(s.querySelectorAll("style[".concat(vo,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(vo,Sg),r.setAttribute(kg,Ks);var a=cS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},dS=function(){function e(t){this.element=Dg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Sr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fS=function(){function e(t){this.element=Dg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wp=_d,hS={isServer:!_d,useCSSOMInjection:!V2},gs=function(){function e(t,n,r){t===void 0&&(t=wo),n===void 0&&(n={});var o=this;this.options=We(We({},hS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_d&&Wp&&(Wp=!1,function(i){for(var a=document.querySelectorAll(aS),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(vo)!==Sg&&(uS(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Id(this,function(){return function(i){for(var a=i.getTag(),s=a.length,l="",u=function(f){var h=function(d){return ms.get(d)}(f);if(h===void 0)return"continue";var w=i.names.get(h),y=a.getGroup(f);if(w===void 0||y.length===0)return"continue";var v="".concat(vo,".g").concat(f,'[id="').concat(h,'"]'),S="";w!==void 0&&w.forEach(function(d){d.length>0&&(S+="".concat(d,","))}),l+="".concat(y).concat(v,'{content:"').concat(S,'"}').concat(Td)},c=0;c<s;c++)u(c);return l}(o)})}return e.registerId=function(t){return wa(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(We(We({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new pS(o):r?new dS(o):new fS(o)}(this.options),new oS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(wa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(wa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mS=/&/g,gS=/^\s*\/\/.*$/gm;function $g(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=$g(n.children,t)),n})}function yS(e){var t,n,r,o=e===void 0?wo:e,i=o.options,a=i===void 0?wo:i,s=o.plugins,l=s===void 0?Gs:s,u=function(h,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Us&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(mS,n).replace(r,u))}),a.prefix&&c.push(U2),c.push(M2);var f=function(h,w,y,v){w===void 0&&(w=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(gS,""),d=L2(y||w?"".concat(y," ").concat(w," { ").concat(S," }"):S);a.namespace&&(d=$g(d,a.namespace));var p=[];return ps(d,z2(c.concat(F2(function(g){return p.push(g)})))),p};return f.hash=l.length?l.reduce(function(h,w){return w.name||Sr(15),Zr(h,w.name)},bg).toString():"",f}var vS=new gs,sc=yS(),jg=Ne.createContext({shouldForwardProp:void 0,styleSheet:vS,stylis:sc});jg.Consumer;Ne.createContext(void 0);function lc(){return E.useContext(jg)}var Og=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=sc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Id(this,function(){throw Sr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=sc),this.name+t.hash},e}(),wS=function(e){return e>="A"&&e<="Z"};function Kp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ng=function(e){return e==null||e===!1||e===""},Ag=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ng(i)&&(Array.isArray(i)&&i.isCss||xr(i)?r.push("".concat(Kp(o),":"),i,";"):Di(i)?r.push.apply(r,mo(mo(["".concat(o," {")],Ag(i),!1),["}"],!1)):r.push("".concat(Kp(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in H2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ln(e,t,n,r){if(Ng(e))return[];if(Rd(e))return[".".concat(e.styledComponentId)];if(xr(e)){if(!xr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Ln(o,t,n,r)}var i;return e instanceof Og?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?Ag(e):Array.isArray(e)?Array.prototype.concat.apply(Gs,e.map(function(a){return Ln(a,t,n,r)})):[e.toString()]}function Lg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!Rd(n))return!1}return!0}var xS=Tg(Ks),SS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lg(t),this.componentId=n,this.baseHash=Zr(xS,n),this.baseStyle=r,gs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=lr(o,this.staticRulesId);else{var i=hs(Ln(this.rules,t,n,r)),a=ic(Zr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=lr(o,a),this.staticRulesId=a}else{for(var l=Zr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=hs(Ln(f,t,n,r));l=Zr(l,h+c),u+=h}}if(u){var w=ic(l>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),o=lr(o,w)}}return o},e}(),$i=Ne.createContext(void 0);$i.Consumer;function kS(e){var t=Ne.useContext($i),n=E.useMemo(function(){return function(r,o){if(!r)throw Sr(14);if(xr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Sr(8);return o?We(We({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ne.createElement($i.Provider,{value:n},e.children):null}var zl={};function ES(e,t,n){var r=Rd(e),o=e,i=!Ml(e),a=t.attrs,s=a===void 0?Gs:a,l=t.componentId,u=l===void 0?function(C,_){var x=typeof C!="string"?"sc":zp(C);zl[x]=(zl[x]||0)+1;var b="".concat(x,"-").concat(Pd(Ks+x+zl[x]));return _?"".concat(_,"-").concat(b):b}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(C){return Ml(C)?"styled.".concat(C):"Styled(".concat(q2(C),")")}(e):c,h=t.displayName&&t.componentId?"".concat(zp(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(C,_){return v(C,_)&&S(C,_)}}else y=v}var d=new SS(n,h,r?o.componentStyle:void 0);function p(C,_){return function(x,b,D){var L=x.attrs,z=x.componentStyle,X=x.defaultProps,Y=x.foldedComponentIds,j=x.styledComponentId,V=x.target,se=Ne.useContext($i),Me=lc(),ue=x.shouldForwardProp||Me.shouldForwardProp,A=Eg(b,se,X)||wo,U=function(re,Ie,ht){for(var Jn,Xt=We(We({},Ie),{className:void 0,theme:ht}),$o=0;$o<re.length;$o+=1){var ze=xr(Jn=re[$o])?Jn(Xt):Jn;for(var lt in ze)Xt[lt]=lt==="className"?lr(Xt[lt],ze[lt]):lt==="style"?We(We({},Xt[lt]),ze[lt]):ze[lt]}return Ie.className&&(Xt.className=lr(Xt.className,Ie.className)),Xt}(L,b,A),O=U.as||V,W={};for(var K in U)U[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&U.theme===A||(K==="forwardedAs"?W.as=U.forwardedAs:ue&&!ue(K,O)||(W[K]=U[K]));var fe=function(re,Ie){var ht=lc(),Jn=re.generateAndInjectStyles(Ie,ht.styleSheet,ht.stylis);return Jn}(z,U),pe=lr(Y,j);return fe&&(pe+=" "+fe),U.className&&(pe+=" "+U.className),W[Ml(O)&&!Cg.has(O)?"class":"className"]=pe,W.ref=D,E.createElement(O,W)}(g,C,_)}p.displayName=f;var g=Ne.forwardRef(p);return g.attrs=w,g.componentStyle=d,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?lr(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(_){for(var x=[],b=1;b<arguments.length;b++)x[b-1]=arguments[b];for(var D=0,L=x;D<L.length;D++)ac(_,L[D],!0);return _}({},o.defaultProps,C):C}}),Id(g,function(){return".".concat(g.styledComponentId)}),i&&Ig(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Gp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yp=function(e){return Object.assign(e,{isCss:!0})};function J(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xr(e)||Di(e))return Yp(Ln(Gp(Gs,mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ln(r):Yp(Ln(Gp(r,t)))}function uc(e,t,n){if(n===void 0&&(n=wo),!t)throw Sr(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,J.apply(void 0,mo([o],i,!1)))};return r.attrs=function(o){return uc(e,t,We(We({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return uc(e,t,We(We({},n),o))},r}var Bg=function(e){return uc(ES,e)},I=Bg;Cg.forEach(function(e){I[e]=Bg(e)});var CS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Lg(t),gs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(hs(Ln(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&gs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function bS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=J.apply(void 0,mo([e],t,!1)),o="sc-global-".concat(Pd(JSON.stringify(r))),i=new CS(r,o),a=function(l){var u=lc(),c=Ne.useContext($i),f=Ne.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,l,u.styleSheet,c,u.stylis),Ne.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,l,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,f,h){if(i.isStatic)i.renderStyles(l,W2,c,h);else{var w=We(We({},u),{theme:Eg(u,f,a.defaultProps)});i.renderStyles(l,w,c,h)}}return Ne.memo(a)}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=hs(J.apply(void 0,mo([e],t,!1))),o=Pd(r);return new Og(o,r)}const xa={mainBackground:"#f2f2f2",mainText:"#000",sidebarBackground:"#fff",sidebarText:"#000",headerBackground:"#fff",headerText:"#000",activeBackground:"#0077ff",activeText:"#fff",hoverBackground:"#f2f2f2",hoverText:"#000",mainContainerBackground:"#fff",buttonBackground:"#0077ff",buttonText:"#fff",buttonHoverBackground:"#2980b9",primaryColor:"#0077ff",primaryButtonBackground:"#0077ff",primaryButtonText:"#fff",primaryButtonHoverBackground:"#0077ff",secondaryButtonBackground:"#6c757d",secondaryButtonText:"#fff",secondaryButtonHoverBackground:"#5a6268",dangerButtonBackground:"ef4444",dangerButtonText:"#fff",dangerButtonHoverBackground:"#c0392b",successButtonBackground:"#22c55e",successButtonText:"#fff",successButtonHoverBackground:"#27ae60",warningButtonBackground:"#f97316",warningButtonText:"#fff",warningButtonHoverBackground:"#d35400",infoButtonBackground:"#3b82f6",infoButtonText:"#fff",infoButtonHoverBackground:"#d35400",inputBorder:"#f2f2f2",inputText:"#000",inputBackground:"#f2f2f2",inputFocusBorder:"#0077ff",inputFocusShadow:"rgba(0, 123, 255, 0.2)",inputHoverBorder:"#0077ff",inputHoverShadow:"rgba(0, 123, 255, 0.2)",inputPlaceholder:"#636c72",cardBackground:"#fff",cardText:"#000",cardBorder:"#fff",navbarBackground:"#0077ff",navbarText:"#fff",alertBackground:"#dff0d8",alertText:"#3c763d",alertBorder:"#d6e9c6",loaderBorder:"#555",loaderTop:"#0077ff",modalBackground:"#fff",modalText:"#333",tooltipBackground:"#0077ff",tooltipText:"#fff",tooltipIcon:"#555",toggleSwitchBackground:"#f2f2f2",toggleSwitchBackgroundActive:"#0077ff",toggleSwitchHandle:"#fff",toggleSwitchThumb:"#fff",accordionBorder:"#ddd",accordionHeaderBackground:"#f5f5f5",accordionHeaderText:"#333",progressBarBackground:"#eee",progressBarFill:"#0077ff",dropdownButtonBackground:"#0077ff",dropdownButtonText:"#fff",dropdownContentBackground:"#fff",tabsBackground:"#f5f5f5",tabsText:"#333",stepperBackground:"#f5f5f5",stepperText:"#333",carouselBackground:"#f5f5f5",badgeBackground:"#0077ff",badgeText:"#fff",tagBackground:"#0077ff",tagText:"#fff",toggleGroupBackground:"#f5f5f5",toggleGroupText:"#333",dividerColor:"#ddd",menuItemBackground:"#fff",menuItemText:"#333",menuItemHoverBackground:"#f5f5f5",menuItemHoverText:"#0077ff",notificationText:"#31708f",checkboxBackgroundChecked:"#0077ff",checkboxBorderChecked:"#0077ff",checkboxBorder:"#f2f2f2",checkboxCheckColor:"#fff",paginationBackground:"#f5f5f5",paginationText:"#333",loadingSpinnerBorder:"#f3f3f3",loadingSpinnerTopBorder:"#0077ff",linkText:"#0077ff",scrollbarThumb:"#888",scrollbarTrack:"#ddd",disabledBackground:"#eee",errorColor:"red",errorShadow:"rgba(255, 0, 0, 0.2)",dangerColor:"red",successColor:"#00cc00",infoColor:"#3399ff",warningColor:"#ffcc00",notificationBackground:"#fff"},Sa={mainBackground:"#1a1a1a",mainText:"#fff",sidebarBackground:"#000",sidebarText:"#fff",headerBackground:"#000",headerText:"#fff",activeBackground:"#0077ff",activeText:"#fff",hoverBackground:"#1a1a1a",hoverText:"#fff",mainContainerBackground:"#1a1a1a",buttonBackground:"#0077ff",buttonText:"#fff",buttonHoverBackground:"#2980b9",primaryColor:"#0077ff",primaryButtonBackground:"#0077ff",primaryButtonText:"#fff",primaryButtonHoverBackground:"#0077ff",secondaryButtonBackground:"#6c757d",secondaryButtonText:"#fff",secondaryButtonHoverBackground:"#5a6268",dangerButtonBackground:"ef4444",dangerButtonText:"#fff",dangerButtonHoverBackground:"#c0392b",successButtonBackground:"#22c55e",successButtonText:"#fff",successButtonHoverBackground:"#27ae60",warningButtonBackground:"#f97316",warningButtonText:"#fff",warningButtonHoverBackground:"#d35400",infoButtonBackground:"#3b82f6",infoButtonText:"#fff",infoButtonHoverBackground:"#d35400",inputBorder:"#1a1a1a",inputText:"#fff",inputBackground:"#1a1a1a",inputFocusBorder:"#0077ff",inputFocusShadow:"rgba(0, 123, 255, 0.2)",inputHoverBorder:"#0077ff",inputHoverShadow:"rgba(0, 123, 255, 0.2)",inputPlaceholder:"#636c72",cardBackground:"#000",cardText:"#fff",cardBorder:"#000",navbarBackground:"#0077ff",navbarText:"#fff",alertBackground:"#2c2c2c",alertText:"#fff",alertBorder:"#555",loaderBorder:"#fff",loaderTop:"#0077ff",modalBackground:"#2c2c2c",modalText:"#fff",tooltipBackground:"#0077ff",tooltipText:"#fff",tooltipIcon:"#ccc",toggleSwitchBackground:"#333",toggleSwitchBackgroundActive:"#0077ff",toggleSwitchHandle:"#fff",toggleSwitchThumb:"#0077ff",accordionBorder:"#444",accordionHeaderBackground:"#2c2c2c",accordionHeaderText:"#fff",progressBarBackground:"#555",progressBarFill:"#0077ff",dropdownButtonBackground:"#0077ff",dropdownButtonText:"#fff",dropdownContentBackground:"#2c2c2c",tabsBackground:"#2c2c2c",tabsText:"#fff",stepperBackground:"#2c2c2c",stepperText:"#fff",carouselBackground:"#2c2c2c",badgeBackground:"#0077ff",badgeText:"#fff",tagBackground:"#0077ff",tagText:"#fff",toggleGroupBackground:"#2c2c2c",toggleGroupText:"#fff",dividerColor:"#555",menuItemBackground:"#2c2c2c",menuItemText:"#fff",menuItemHoverBackground:"#333",menuItemHoverText:"#0077ff",notificationText:"#ecf0f1",checkboxBackgroundChecked:"#0077ff",checkboxBorderChecked:"#0077ff",checkboxBorder:"#1a1a1a",checkboxCheckColor:"#fff",paginationBackground:"#2c2c2c",paginationText:"#fff",loadingSpinnerBorder:"#555",loadingSpinnerTopBorder:"#0077ff",linkText:"#0077ff",scrollbarThumb:"#aaa",scrollbarTrack:"#333",disabledBackground:"#eee",errorColor:"red",errorShadow:"rgba(255, 0, 0, 0.2)",dangerColor:"red",successColor:"#00cc00",infoColor:"#3399ff",warningColor:"#ffcc00",notificationBackground:"#1a1a1a"},TS=()=>localStorage.getItem("theme")||"light",_S=e=>{localStorage.setItem("theme",e)},qp=()=>localStorage.getItem("sidebarCollapsed")==="true",PS=e=>{localStorage.setItem("sidebarCollapsed",e)},Mg=E.createContext(),Dd=()=>{const e=E.useContext(Mg);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},RS=({children:e})=>{const t=TS(),[n,r]=E.useState(t==="dark"?Sa:xa),o=()=>{const i=n===xa?Sa:xa;r(i),_S(i===Sa?"dark":"light")};return E.useEffect(()=>{r(t==="dark"?Sa:xa)},[t]),m.jsx(Mg.Provider,{value:{theme:n,toggleTheme:o},children:m.jsx(kS,{theme:n,children:e})})},IS=_o`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;I.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${IS} 1s linear infinite;
`;const zg=E.createContext({currentUser:null,token:null,notification:null,setUser:()=>{},setToken:()=>{},setNotification:()=>{}}),DS=({children:e})=>{const t=localStorage.getItem("user"),n=t?JSON.parse(t):{},[r,o]=E.useState(n),[i,a]=E.useState(localStorage.getItem("access_token")),[s,l]=E.useState(""),u=h=>{a(h),h?localStorage.setItem("access_token",h):localStorage.removeItem("access_token")},c=h=>{o(h),h?localStorage.setItem("user",JSON.stringify(h)):localStorage.removeItem("user")},f=h=>{l(h),setTimeout(()=>{l("")},5e3)};return m.jsx(zg.Provider,{value:{user:r,setUser:c,token:i,setToken:u,notification:s,setNotification:f},children:e})},Dr=()=>E.useContext(zg),$S=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[...e.toasts,t.payload]};case"DELETE_TOAST":const n=e.toasts.filter(r=>r.id!==t.payload);return{...e,toasts:n};default:throw new Error(`Unhandled action type: ${t.type}`)}};var Fg={exports:{}},jS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",OS=jS,NS=OS;function Ug(){}function Hg(){}Hg.resetWarningCache=Ug;var AS=function(){function e(r,o,i,a,s,l){if(l!==NS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hg,resetWarningCache:Ug};return n.PropTypes=n,n};Fg.exports=AS();var LS=Fg.exports;const M=Tc(LS);var BS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},MS=Object.defineProperty,zS=Object.defineProperties,FS=Object.getOwnPropertyDescriptors,ys=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Wg=Object.prototype.propertyIsEnumerable,Qp=(e,t,n)=>t in e?MS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jp=(e,t)=>{for(var n in t||(t={}))Vg.call(t,n)&&Qp(e,n,t[n]);if(ys)for(var n of ys(t))Wg.call(t,n)&&Qp(e,n,t[n]);return e},US=(e,t)=>zS(e,FS(t)),HS=(e,t)=>{var n={};for(var r in e)Vg.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ys)for(var r of ys(e))t.indexOf(r)<0&&Wg.call(e,r)&&(n[r]=e[r]);return n},Fi=(e,t,n)=>{const r=E.forwardRef((o,i)=>{var a=o,{color:s="currentColor",size:l=24,stroke:u=2,children:c}=a,f=HS(a,["color","size","stroke","children"]);return E.createElement("svg",Jp(US(Jp({ref:i},BS),{width:l,height:l,stroke:s,strokeWidth:u,className:`tabler-icon tabler-icon-${e}`}),f),[...n.map(([h,w])=>E.createElement(h,w)),...c||[]])});return r.propTypes={color:M.string,size:M.oneOfType([M.string,M.number]),stroke:M.oneOfType([M.string,M.number])},r.displayName=`${t}`,r},VS=Fi("alert-circle-filled","IconAlertCircleFilled",[["path",{d:"M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),WS=Fi("circle-check-filled","IconCircleCheckFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),KS=Fi("circle-x-filled","IconCircleXFilled",[["path",{d:"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),GS=Fi("info-circle-filled","IconInfoCircleFilled",[["path",{d:"M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),YS=Fi("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const $r=()=>E.useContext(Kg),qS={success:{icon:m.jsx(WS,{}),iconClass:"success-icon",progressBarClass:"success",color:"#22c55e"},warning:{icon:m.jsx(VS,{}),iconClass:"warning-icon",progressBarClass:"warning",color:"#f97316"},info:{icon:m.jsx(GS,{}),iconClass:"info-icon",progressBarClass:"info",color:"#3b82f6"},error:{icon:m.jsx(KS,{}),iconClass:"error-icon",progressBarClass:"error",color:"#ef4444"}},QS=_o`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`,JS=_o`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`,XS=_o`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`,ZS=I.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.cardBackground};
  // background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  position: relative;
  width: 320px;
  overflow: hidden;
  animation: ${JS} 0.4s ease-in-out forwards;

  &.toast-dismissed {
    animation: ${XS} 0.4s ease-in-out forwards;
  }

  &:hover {
    .toast-progress-bar {
      animation-play-state: paused;
    }
  }
`,e4=I.span`
  ${({color:e})=>J`
    color: ${e};
  `}
`,t4=I.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
`,n4=I.div`
  ${({color:e})=>J`
    height: 100%;
    animation: ${QS} 4s linear forwards;
    background-color: ${e};
  `}
`,r4=I.p`
  color: ${e=>e.theme.mainText};
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
`,o4=I.button`
  cursor: pointer;
  border: none;
  background: none;
  margin-left: auto;
`,i4=({message:e,type:t,id:n,theme:r})=>{const{icon:o,iconClass:i,progressBarClass:a,color:s}=qS[t],[l,u]=E.useState(!1),c=$r(),f=E.useRef(null),h=E.useRef(null),w=()=>{u(!0),setTimeout(()=>{c.remove(n)},400)},y=()=>{clearTimeout(h.current),f.current.style.animationPlayState="paused"},v=()=>{const S=f.current.offsetWidth/f.current.parentElement.offsetWidth*4e3;f.current.style.animationPlayState="running",h.current=setTimeout(()=>{w()},S)};return E.useEffect(()=>(h.current=setTimeout(()=>{w()},4e3),()=>{clearTimeout(h.current)}),[]),m.jsxs(ZS,{className:`toast ${l?"toast-dismissed":""}`,onMouseEnter:y,onMouseLeave:v,theme:r,children:[m.jsx(e4,{className:i,color:s,children:o}),m.jsx(r4,{className:"toast-message",children:e}),m.jsx(o4,{className:"dismiss-btn",onClick:w,children:m.jsx(YS,{size:18,color:"#aeb0d7"})}),m.jsx(t4,{className:"toast-progress",children:m.jsx(n4,{ref:f,className:`toast-progress-bar ${a}`,color:s})})]})},a4=I.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 12px;
  position: fixed;
  z-index: 9999;

  &.top-right {
    top: 16px;
    right: 16px;
  }

  &.top-left {
    top: 16px;
    left: 16px;
  }

  &.top-center {
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.bottom-left {
    bottom: 16px;
    left: 16px;
  }

  &.bottom-center {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.bottom-right {
    bottom: 16px;
    right: 16px;
  }
`,s4=({toasts:e,position:t="top-right"})=>m.jsx(a4,{className:`toasts-container ${t}`,children:e.map(n=>m.jsx(i4,{...n},n.id))}),Kg=E.createContext(),l4={toasts:[]},u4=({children:e})=>{const[t,n]=E.useReducer($S,l4),r=(c,f)=>{const h=Math.floor(Math.random()*1e7);n({type:"ADD_TOAST",payload:{id:h,message:f,type:c}})},u={success:c=>{r("success",c)},warning:c=>{r("warning",c)},info:c=>{r("info",c)},error:c=>{r("error",c)},remove:c=>{n({type:"DELETE_TOAST",payload:c})}};return m.jsxs(Kg.Provider,{value:u,children:[m.jsx(s4,{toasts:t.toasts,position:"bottom-right"}),e]})};var Gg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xp=Ne.createContext&&Ne.createContext(Gg),Bn=function(){return Bn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bn.apply(this,arguments)},c4=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Yg(e){return e&&e.map(function(t,n){return Ne.createElement(t.tag,Bn({key:n},t.attr),Yg(t.child))})}function Re(e){return function(t){return Ne.createElement(d4,Bn({attr:Bn({},e.attr)},t),Yg(e.child))}}function d4(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=c4(e,["attr","size","title"]),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ne.createElement("svg",Bn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Bn(Bn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Ne.createElement("title",null,i),e.children)};return Xp!==void 0?Ne.createElement(Xp.Consumer,null,function(n){return t(n)}):t(Gg)}function f4(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function p4(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)}function h4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"}}]})(e)}function Ui(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function m4(e){return Re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}}]})(e)}function g4(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function vs(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Fl(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"}}]})(e)}function y4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function v4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function w4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function x4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function S4(e){return Re({tag:"svg",attr:{viewBox:"0 0 480 512"},child:[{tag:"path",attr:{d:"M468 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7C294.5 104.1 268.2 96 240 96c-28.2 0-54.5 8.1-76.7 22.1l-16.5-16.5 19.8-19.8c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8-19-19 16.9-16.9C107.1 12.9 101.7 0 91 0H12C5.4 0 0 5.4 0 12v79c0 10.7 12.9 16 20.5 8.5l16.9-16.9 19 19-19.8 19.8c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l19.8-19.8 16.5 16.5C104.1 185.5 96 211.8 96 240c0 68.5 47.9 125.9 112 140.4V408h-36c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4 0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM240 320c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function k4(e){return Re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"}}]})(e)}function Zp(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function E4(e){return Re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"}}]})(e)}function C4(e){return Re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"}}]})(e)}function b4(e){return Re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"}}]})(e)}function T4(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"}}]})(e)}const kr="/assets/logo-sm-dark-pMGop6II.png",Po="/assets/logo-sm-light-7KZm7wWl.png";function qg(e,t){return function(){return e.apply(t,arguments)}}const{toString:_4}=Object.prototype,{getPrototypeOf:$d}=Object,Ys=(e=>t=>{const n=_4.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=e=>(e=e.toLowerCase(),t=>Ys(t)===e),qs=e=>t=>typeof t===e,{isArray:Ro}=Array,ji=qs("undefined");function P4(e){return e!==null&&!ji(e)&&e.constructor!==null&&!ji(e.constructor)&&Pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Qg=Jt("ArrayBuffer");function R4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Qg(e.buffer),t}const I4=qs("string"),Pt=qs("function"),Jg=qs("number"),Qs=e=>e!==null&&typeof e=="object",D4=e=>e===!0||e===!1,Ma=e=>{if(Ys(e)!=="object")return!1;const t=$d(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$4=Jt("Date"),j4=Jt("File"),O4=Jt("Blob"),N4=Jt("FileList"),A4=e=>Qs(e)&&Pt(e.pipe),L4=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pt(e.append)&&((t=Ys(e))==="formdata"||t==="object"&&Pt(e.toString)&&e.toString()==="[object FormData]"))},B4=Jt("URLSearchParams"),M4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ro(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function Xg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Zg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,e1=e=>!ji(e)&&e!==Zg;function cc(){const{caseless:e}=e1(this)&&this||{},t={},n=(r,o)=>{const i=e&&Xg(t,o)||o;Ma(t[i])&&Ma(r)?t[i]=cc(t[i],r):Ma(r)?t[i]=cc({},r):Ro(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Hi(arguments[r],n);return t}const z4=(e,t,n,{allOwnKeys:r}={})=>(Hi(t,(o,i)=>{n&&Pt(o)?e[i]=qg(o,n):e[i]=o},{allOwnKeys:r}),e),F4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),U4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},H4=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&$d(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},W4=e=>{if(!e)return null;if(Ro(e))return e;let t=e.length;if(!Jg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},K4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$d(Uint8Array)),G4=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Y4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},q4=Jt("HTMLFormElement"),Q4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),eh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),J4=Jt("RegExp"),t1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Hi(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},X4=e=>{t1(e,(t,n)=>{if(Pt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Pt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Z4=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Ro(e)?r(e):r(String(e).split(t)),n},ek=()=>{},tk=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ul="abcdefghijklmnopqrstuvwxyz",th="0123456789",n1={DIGIT:th,ALPHA:Ul,ALPHA_DIGIT:Ul+Ul.toUpperCase()+th},nk=(e=16,t=n1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rk(e){return!!(e&&Pt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ok=e=>{const t=new Array(10),n=(r,o)=>{if(Qs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Ro(r)?[]:{};return Hi(r,(a,s)=>{const l=n(a,o+1);!ji(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},ik=Jt("AsyncFunction"),ak=e=>e&&(Qs(e)||Pt(e))&&Pt(e.then)&&Pt(e.catch),R={isArray:Ro,isArrayBuffer:Qg,isBuffer:P4,isFormData:L4,isArrayBufferView:R4,isString:I4,isNumber:Jg,isBoolean:D4,isObject:Qs,isPlainObject:Ma,isUndefined:ji,isDate:$4,isFile:j4,isBlob:O4,isRegExp:J4,isFunction:Pt,isStream:A4,isURLSearchParams:B4,isTypedArray:K4,isFileList:N4,forEach:Hi,merge:cc,extend:z4,trim:M4,stripBOM:F4,inherits:U4,toFlatObject:H4,kindOf:Ys,kindOfTest:Jt,endsWith:V4,toArray:W4,forEachEntry:G4,matchAll:Y4,isHTMLForm:q4,hasOwnProperty:eh,hasOwnProp:eh,reduceDescriptors:t1,freezeMethods:X4,toObjectSet:Z4,toCamelCase:Q4,noop:ek,toFiniteNumber:tk,findKey:Xg,global:Zg,isContextDefined:e1,ALPHABET:n1,generateString:nk,isSpecCompliantForm:rk,toJSONObject:ok,isAsyncFn:ik,isThenable:ak};function ae(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}R.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const r1=ae.prototype,o1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{o1[e]={value:e}});Object.defineProperties(ae,o1);Object.defineProperty(r1,"isAxiosError",{value:!0});ae.from=(e,t,n,r,o,i)=>{const a=Object.create(r1);return R.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ae.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const sk=null;function dc(e){return R.isPlainObject(e)||R.isArray(e)}function i1(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function nh(e,t,n){return e?e.concat(t).map(function(o,i){return o=i1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function lk(e){return R.isArray(e)&&!e.some(dc)}const uk=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Js(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!R.isUndefined(S[v])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(R.isDate(y))return y.toISOString();if(!l&&R.isBlob(y))throw new ae("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(y)||R.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,v,S){let d=y;if(y&&!S&&typeof y=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(R.isArray(y)&&lk(y)||(R.isFileList(y)||R.endsWith(v,"[]"))&&(d=R.toArray(y)))return v=i1(v),d.forEach(function(g,C){!(R.isUndefined(g)||g===null)&&t.append(a===!0?nh([v],C,i):a===null?v:v+"[]",u(g))}),!1}return dc(y)?!0:(t.append(nh(S,v,i),u(y)),!1)}const f=[],h=Object.assign(uk,{defaultVisitor:c,convertValue:u,isVisitable:dc});function w(y,v){if(!R.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),R.forEach(y,function(d,p){(!(R.isUndefined(d)||d===null)&&o.call(t,d,R.isString(p)?p.trim():p,v,h))===!0&&w(d,v?v.concat(p):[p])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return w(e),t}function rh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function jd(e,t){this._pairs=[],e&&Js(e,this,t)}const a1=jd.prototype;a1.append=function(t,n){this._pairs.push([t,n])};a1.toString=function(t){const n=t?function(r){return t.call(this,r,rh)}:rh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ck(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s1(e,t,n){if(!t)return e;const r=n&&n.encode||ck,o=n&&n.serialize;let i;if(o?i=o(t,n):i=R.isURLSearchParams(t)?t.toString():new jd(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class dk{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const oh=dk,l1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fk=typeof URLSearchParams<"u"?URLSearchParams:jd,pk=typeof FormData<"u"?FormData:null,hk=typeof Blob<"u"?Blob:null,mk={isBrowser:!0,classes:{URLSearchParams:fk,FormData:pk,Blob:hk},protocols:["http","https","file","blob","url","data"]},u1=typeof window<"u"&&typeof document<"u",gk=(e=>u1&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),yk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:u1,hasStandardBrowserEnv:gk,hasStandardBrowserWebWorkerEnv:yk},Symbol.toStringTag,{value:"Module"})),Gt={...vk,...mk};function wk(e,t){return Js(e,new Gt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Gt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xk(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sk(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function c1(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&R.isArray(o)?o.length:a,l?(R.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!R.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&R.isArray(o[a])&&(o[a]=Sk(o[a])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,o)=>{t(xk(r),o,n,0)}),n}return null}function kk(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Od={transitional:l1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return o&&o?JSON.stringify(c1(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wk(t,this.formSerializer).toString();if((s=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Js(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),kk(t)):t}],transformResponse:[function(t){const n=this.transitional||Od.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?ae.from(s,ae.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{Od.headers[e]={}});const Nd=Od,Ek=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ck=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Ek[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ih=Symbol("internals");function Yo(e){return e&&String(e).trim().toLowerCase()}function za(e){return e===!1||e==null?e:R.isArray(e)?e.map(za):String(e)}function bk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Tk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Hl(e,t,n,r,o){if(R.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function _k(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pk(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class Xs{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const c=Yo(l);if(!c)throw new Error("header name must be a non-empty string");const f=R.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=za(s))}const a=(s,l)=>R.forEach(s,(u,c)=>i(u,c,l));return R.isPlainObject(t)||t instanceof this.constructor?a(t,n):R.isString(t)&&(t=t.trim())&&!Tk(t)?a(Ck(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Yo(t),t){const r=R.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return bk(o);if(R.isFunction(n))return n.call(this,o,r);if(R.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Yo(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Hl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Yo(a),a){const s=R.findKey(r,a);s&&(!n||Hl(r,r[s],s,n))&&(delete r[s],o=!0)}}return R.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Hl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return R.forEach(this,(o,i)=>{const a=R.findKey(r,i);if(a){n[a]=za(o),delete n[i];return}const s=t?_k(i):String(i).trim();s!==i&&delete n[i],n[s]=za(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ih]=this[ih]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Yo(a);r[s]||(Pk(o,a),r[s]=!0)}return R.isArray(t)?t.forEach(i):i(t),this}}Xs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(Xs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(Xs);const ln=Xs;function Vl(e,t){const n=this||Nd,r=t||n,o=ln.from(r.headers);let i=r.data;return R.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function d1(e){return!!(e&&e.__CANCEL__)}function Vi(e,t,n){ae.call(this,e??"canceled",ae.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Vi,ae,{__CANCEL__:!0});function Rk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ae("Request failed with status code "+n.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ik=Gt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),R.isString(r)&&a.push("path="+r),R.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $k(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function f1(e,t){return e&&!Dk(t)?$k(e,t):t}const jk=Gt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=R.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Ok(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Nk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function ah(e,t){let n=0;const r=Nk(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const Ak=typeof XMLHttpRequest<"u",Lk=Ak&&function(e){return new Promise(function(n,r){let o=e.data;const i=ln.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let c;if(R.isFormData(o)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((c=i.getContentType())!==!1){const[v,...S]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...S].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+S))}const h=f1(e.baseURL,e.url);f.open(e.method.toUpperCase(),s1(h,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function w(){if(!f)return;const v=ln.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),d={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};Rk(function(g){n(g),u()},function(g){r(g),u()},d),f=null}if("onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(r(new ae("Request aborted",ae.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new ae("Network Error",ae.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const d=e.transitional||l1;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new ae(S,d.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,f)),f=null},Gt.hasStandardBrowserEnv&&(s&&R.isFunction(s)&&(s=s(e)),s||s!==!1&&jk(h))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&Ik.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in f&&R.forEach(i.toJSON(),function(S,d){f.setRequestHeader(d,S)}),R.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),a&&a!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",ah(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",ah(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{f&&(r(!v||v.type?new Vi(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=Ok(h);if(y&&Gt.protocols.indexOf(y)===-1){r(new ae("Unsupported protocol "+y+":",ae.ERR_BAD_REQUEST,e));return}f.send(o||null)})},fc={http:sk,xhr:Lk};R.forEach(fc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sh=e=>`- ${e}`,Bk=e=>R.isFunction(e)||e===null||e===!1,p1={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!Bk(n)&&(r=fc[(a=String(n)).toLowerCase()],r===void 0))throw new ae(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(sh).join(`
`):" "+sh(i[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:fc};function Wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vi(null,e)}function lh(e){return Wl(e),e.headers=ln.from(e.headers),e.data=Vl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),p1.getAdapter(e.adapter||Nd.adapter)(e).then(function(r){return Wl(e),r.data=Vl.call(e,e.transformResponse,r),r.headers=ln.from(r.headers),r},function(r){return d1(r)||(Wl(e),r&&r.response&&(r.response.data=Vl.call(e,e.transformResponse,r.response),r.response.headers=ln.from(r.response.headers))),Promise.reject(r)})}const uh=e=>e instanceof ln?e.toJSON():e;function xo(e,t){t=t||{};const n={};function r(u,c,f){return R.isPlainObject(u)&&R.isPlainObject(c)?R.merge.call({caseless:f},u,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function o(u,c,f){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!R.isUndefined(c))return r(void 0,c)}function a(u,c){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>o(uh(u),uh(c),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||o,h=f(e[c],t[c],c);R.isUndefined(h)&&f!==s||(n[c]=h)}),n}const h1="1.6.3",Ad={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ad[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ch={};Ad.transitional=function(t,n,r){function o(i,a){return"[Axios v"+h1+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new ae(o(a," has been removed"+(n?" in "+n:"")),ae.ERR_DEPRECATED);return n&&!ch[a]&&(ch[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function Mk(e,t,n){if(typeof e!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new ae("option "+i+" must be "+l,ae.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ae("Unknown option "+i,ae.ERR_BAD_OPTION)}}const pc={assertOptions:Mk,validators:Ad},xn=pc.validators;class ws{constructor(t){this.defaults=t,this.interceptors={request:new oh,response:new oh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xo(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&pc.assertOptions(r,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean)},!1),o!=null&&(R.isFunction(o)?n.paramsSerializer={serialize:o}:pc.assertOptions(o,{encode:xn.function,serialize:xn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&R.merge(i.common,i[n.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=ln.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,f=0,h;if(!l){const y=[lh.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),h=y.length,c=Promise.resolve(n);f<h;)c=c.then(y[f++],y[f++]);return c}h=s.length;let w=n;for(f=0;f<h;){const y=s[f++],v=s[f++];try{w=y(w)}catch(S){v.call(this,S);break}}try{c=lh.call(this,w)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=xo(this.defaults,t);const n=f1(t.baseURL,t.url);return s1(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){ws.prototype[t]=function(n,r){return this.request(xo(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(xo(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}ws.prototype[t]=n(),ws.prototype[t+"Form"]=n(!0)});const Fa=ws;class Ld{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Vi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ld(function(o){t=o}),cancel:t}}}const zk=Ld;function Fk(e){return function(n){return e.apply(null,n)}}function Uk(e){return R.isObject(e)&&e.isAxiosError===!0}const hc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hc).forEach(([e,t])=>{hc[t]=e});const Hk=hc;function m1(e){const t=new Fa(e),n=qg(Fa.prototype.request,t);return R.extend(n,Fa.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return m1(xo(e,o))},n}const Ae=m1(Nd);Ae.Axios=Fa;Ae.CanceledError=Vi;Ae.CancelToken=zk;Ae.isCancel=d1;Ae.VERSION=h1;Ae.toFormData=Js;Ae.AxiosError=ae;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=Fk;Ae.isAxiosError=Uk;Ae.mergeConfig=xo;Ae.AxiosHeaders=ln;Ae.formToJSON=e=>c1(R.isHTMLForm(e)?new FormData(e):e);Ae.getAdapter=p1.getAdapter;Ae.HttpStatusCode=Hk;Ae.default=Ae;const Vk=Ae,rt=Vk.create({baseURL:"https://idmapi.woodgreen-inventory.com.ng/api"});rt.interceptors.request.use(e=>{const t=localStorage.getItem("access_token");return e.headers.Authorization=`Bearer ${t}`,e});let g1,y1,v1,mc,gc;const Wi=e=>{g1=e},Ki=e=>{y1=e},Gi=e=>{v1=e},Yi=e=>{mc=e},Bd=e=>{gc=e},Wk=e=>{if(e.response){const{response:t}=e;switch(t.status){case 401:y1(t),gc&&(localStorage.removeItem("access_token"),localStorage.removeItem("user"),localStorage.removeItem("inactive"),gc());break;case 422:v1(t);break;default:g1(t)}}else e.request?mc({data:{message:"No response from the server"}}):mc({data:{message:"Error setting up the request"}})};rt.interceptors.response.use(e=>e,e=>(Wk(e),Promise.reject(e)));const w1=bS`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainText};
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  /* Customize scrollbar styles for WebKit browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.scrollbarThumb};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${e=>e.theme.scrollbarTrack};
  }
`,Kk=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`,qi=({children:e})=>{const{theme:t}=Dd(),{token:n,user:r}=Dr(),o=Qt(),i=E.useCallback(()=>localStorage.getItem("inactive")==="true",[]);return E.useEffect(()=>{!n&&r&&!r.is_active&&r.email_verified_at===null&&o("/verify",{state:{email:r.email}})},[n,r,o]),E.useEffect(()=>{n&&i()?o("/unlock"):n&&!i()&&o("/")},[n,i,o]),m.jsxs(m.Fragment,{children:[m.jsx(w1,{}),m.jsx(Kk,{theme:t,children:e})]})},Gk=_o`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`,Yk=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10px;
  margin: ${e=>e.margin||"0 0 0 0"};
  background-color: ${e=>e.theme.progressBarBackground};
  border-radius: 5px;
  overflow: hidden;
`,qk=I.div`
  height: 100%;
  width: ${e=>e.$progress}%; // Use $progress instead of progress
  background-color: ${e=>e.theme.progressBarFill};
  border-radius: 5px;
  animation: ${Gk} 1s linear infinite;
`,x1=({progress:e,margin:t})=>m.jsx(Yk,{margin:t,children:m.jsx(qk,{$progress:e})}),Qk=I.button`
  width: 100%;
  margin: ${e=>e.margin||"0 0 0 0"};
  background-color: ${e=>e.theme.buttonBackground};
  color: ${e=>e.theme.buttonText};
  padding: ${e=>e.size==="small"?"8px 12px":e.size==="large"?"18px 24px":"13px 16px"};
  border: none;
  border-radius: 10px;
  font-family: inherit;
  cursor: ${e=>e.isLoading?"not-allowed":"pointer"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${e=>e.theme.buttonHoverBackground};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  ${e=>e.isLoading&&J`
      cursor: not-allowed;
      opacity: 0.8;
    `}

  ${e=>e.className==="outline"&&J`
      background-color: transparent;
      border: 2px solid ${t=>t.theme.buttonBackground};
      color: ${t=>t.theme.buttonBackground};

      &:hover {
        background-color: ${t=>t.theme.buttonBackground};
        color: ${t=>t.theme.buttonText};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.className==="primary"&&J`
      background-color: ${t=>t.theme.primaryButtonBackground};
      color: ${t=>t.theme.primaryButtonText};

      &:hover {
        background-color: ${t=>t.theme.primaryButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.className==="secondary"&&J`
      background-color: ${t=>t.theme.secondaryButtonBackground};
      color: ${t=>t.theme.secondaryButtonText};

      &:hover {
        background-color: ${t=>t.theme.secondaryButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.className==="danger"&&J`
      background-color: ${t=>t.theme.dangerButtonBackground};
      color: ${t=>t.theme.dangerButtonText};

      &:hover {
        background-color: ${t=>t.theme.dangerButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.className==="success"&&J`
      background-color: ${t=>t.theme.successButtonBackground};
      color: ${t=>t.theme.successButtonText};

      &:hover {
        background-color: ${t=>t.theme.successButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.className==="warning"&&J`
      background-color: ${t=>t.theme.warningButtonBackground};
      color: ${t=>t.theme.warningButtonText};

      &:hover {
        background-color: ${t=>t.theme.warningButtonHoverBackground};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
      }
    `}

  ${e=>e.isLoading&&J`
      cursor: not-allowed;
      opacity: 0.8;
    `}
`,Je=({children:e,onClick:t,type:n,className:r,size:o,isLoading:i,margin:a})=>m.jsxs(m.Fragment,{children:[!i&&m.jsx(Qk,{onClick:t,type:n||"button",className:r,size:o,disabled:i,margin:a,isLoading:i,children:e}),i&&m.jsx(x1,{margin:"21px 0 21px 0",progress:50})]});Je.propTypes={children:M.node.isRequired,onClick:M.func,type:M.string,className:M.string,size:M.oneOf(["small","large"]),isLoading:M.bool,margin:M.string};const Jk=_o`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,Xk=I.div`
  width: ${e=>e.width||"100%"};
  max-width: ${e=>e.maxwidth||"0"};
  border: 1px solid ${e=>e.theme.cardBorder};
  background-color: ${e=>e.theme.cardBackground};
  color: ${e=>e.theme.cardText};
  padding: 30px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  animation: ${Jk} 0.3s both; /* Apply the fadeInDown animation */
`,Qi=({children:e,width:t,maxwidth:n})=>m.jsx(Xk,{width:t,maxwidth:n,children:e}),Zk=I.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${e=>e.margin||"0 0 0 0"};
`;I.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${e=>e.theme.inputText};
`;const e3=I.span`
  margin-left: 8px;
  font-family: inherit;
  font-size: 14px;
`,S1=I.input`
  display: none;

  &:checked + span {
    background-color: ${e=>e.theme.checkboxBackgroundChecked};
    border-color: ${e=>e.theme.checkboxBorderChecked};
  }
`,t3=I.span`
  position: relative;
  width: 20px;
  height: 20px;
  border: 3px solid ${e=>e.theme.checkboxBorder};
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
    outline: none;
  }

  &::before {
    content: "\u2713";
    color: ${e=>e.theme.checkboxCheckColor};
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${S1}:checked + &::before {
    opacity: 1;
  }
`,n3=I.span`
  color: ${e=>e.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`,k1=({checked:e,onChange:t,label:n,margin:r,name:o,error:i})=>{const a=s=>{const l=s.target.checked;t&&t(o,l)};return m.jsxs(m.Fragment,{children:[m.jsxs(Zk,{margin:r,children:[m.jsx(S1,{name:o,type:"checkbox",checked:e,onChange:a,error:i}),m.jsx(t3,{}),m.jsx(e3,{children:n})]}),i&&m.jsx(n3,{children:i})]})};k1.propTypes={name:M.string,checked:M.bool.isRequired,onChange:M.func.isRequired,label:M.string.isRequired,margin:M.string,error:M.string};const r3=I.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`,Qn=({onSubmit:e,children:t})=>m.jsx(r3,{onSubmit:e,children:t});Qn.propTypes={onSubmit:M.func,children:M.node.isRequired};const o3=J`
  animation: shake 0.5s;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-5px);
    }
    40%,
    80% {
      transform: translateX(5px);
    }
  }
`,i3=I.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${e=>e.theme.inputText};
`,a3=I.div`
  position: relative;
  display: flex;
  align-items: center;
`,s3=I.span`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  color: ${e=>e.theme.inputText};

  &:hover {
    color: ${e=>e.theme.inputText};
  }

  svg {
    font-size: 14px;
    color: ${e=>e.theme.inputText};
  }
`,l3=I.input`
  ${e=>e.size==="small"&&J`
      font-size: 12px;
      padding: 8px ${t=>t.lefticon?"26px":"8px"} 8px ${t=>t.lefticon?"26px":"8px"};
    `}

  ${e=>e.size==="large"&&J`
      font-size: 18px;
      padding: 18px  ${t=>t.lefticon?"38px":"18px"} 18px ${t=>t.lefticon?"38px":"18px"};
    `}

  ${e=>!e.size&&J`
      font-size: 14px;
      padding: 13px ${t=>t.lefticon?"33px":"13px"} 13px ${t=>t.lefticon?"33px":"13px"};
    `}
    
  margin: ${e=>e.margin||"0 0 0 0"};
  border: 2px solid ${e=>e.theme.inputBorder};
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  color: ${e=>e.theme.inputText};
  background-color: ${e=>e.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${e=>e.error&&o3}

  &:focus {
    border-color: ${e=>e.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${e=>e.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputHoverShadow};
    transform: translateY(-2px);

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${e=>e.theme.inputPlaceholder};
  }

  ${e=>e.error&&J`
      border-color: ${t=>t.theme.errorColor};
      box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
    `}

  ${e=>e.disabled&&J`
      background-color: ${t=>t.theme.disabledBackground};
      color: ${t=>t.theme.disabledText};
      cursor: not-allowed;
    `}
`,dh=I.span`
  color: ${e=>e.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-wrap;
`,u3=I.button`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  &:hover {
    color: ${e=>e.theme.inputText};
  }

  svg {
    font-size: 14px;
    color: ${e=>e.theme.inputText};
  }
`,Rt=({name:e,label:t,placeholder:n,value:r,onChange:o,type:i="text",error:a,margin:s,lefticon:l,showPasswordToggle:u,minLength:c,maxLength:f,disabled:h,...w})=>{const[y,v]=E.useState(!1),S=p=>{const g=p.target.value;o&&o(e,g)},d=()=>{v(!y)};return m.jsxs(m.Fragment,{children:[t&&m.jsxs(i3,{...w,htmlFor:e,children:[t," :"]}),m.jsxs(a3,{children:[l&&m.jsx(s3,{...w,children:l}),m.jsx(l3,{name:e,type:y?"text":i,placeholder:n,value:r,onChange:S,error:a,margin:s,lefticon:l,minLength:c,maxLength:f,disabled:h,...w}),i==="password"&&u&&m.jsx(u3,{...w,type:"button",onClick:d,children:y?m.jsx(m4,{}):m.jsx(g4,{})})]}),c&&f&&m.jsxs(dh,{...w,children:[r.length,"/",f," characters"]}),a&&m.jsx(dh,{...w,children:a})]})};Rt.propTypes={name:M.string,label:M.string,placeholder:M.string,value:M.string.isRequired,onChange:M.func.isRequired,type:M.string,error:M.string,margin:M.string,lefticon:M.element,showPasswordToggle:M.bool,minLength:M.number,maxLength:M.number,disabled:M.bool};var fh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},c3=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[n++],a=e[n++],s=e[n++],l=((o&7)<<18|(i&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|a&63)}}return t.join("")},C1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const i=e[o],a=o+1<e.length,s=a?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,c=i>>2,f=(i&3)<<4|s>>4;let h=(s&15)<<2|u>>6,w=u&63;l||(w=64,a||(h=64)),r.push(n[c],n[f],n[h],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c3(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const i=n[e.charAt(o++)],s=o<e.length?n[e.charAt(o)]:0;++o;const u=o<e.length?n[e.charAt(o)]:64;++o;const f=o<e.length?n[e.charAt(o)]:64;if(++o,i==null||s==null||u==null||f==null)throw new d3;const h=i<<2|s>>4;if(r.push(h),u!==64){const w=s<<4&240|u>>2;if(r.push(w),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class d3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f3=function(e){const t=E1(e);return C1.encodeByteArray(t,!0)},b1=function(e){return f3(e).replace(/\./g,"")},p3=function(e){try{return C1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3=()=>h3().__FIREBASE_DEFAULTS__,g3=()=>{if(typeof process>"u"||typeof fh>"u")return;const e=fh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},y3=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&p3(e[1]);return t&&JSON.parse(t)},v3=()=>{try{return m3()||g3()||y3()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},T1=()=>{var e;return(e=v3())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function _1(){try{return typeof indexedDB=="object"}catch{return!1}}function P1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function x3(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3="FirebaseError";class Io extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=S3,Object.setPrototypeOf(this,Io.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,i=this.errors[t],a=i?k3(i,r):"Error",s=`${this.serviceName}: ${a} (${o}).`;return new Io(o,s,r)}}function k3(e,t){return e.replace(E3,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const E3=/\{\$([^}]+)}/g;function yc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const i=e[o],a=t[o];if(ph(i)&&ph(a)){if(!yc(i,a))return!1}else if(i!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function ph(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(e){return e&&e._delegate?e._delegate:e}class Vn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new w3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(T3(t))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(t=nr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nr){return this.instances.has(t)}getOptions(t=nr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);r===s&&a.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(o,i);const a=this.instances.get(o);return a&&t(a,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b3(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nr){return this.component?this.component.multipleInstances?t:nr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b3(e){return e===nr?void 0:e}function T3(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new C3(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(we||(we={}));const P3={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},R3=we.INFO,I3={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},D3=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=I3[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $3{constructor(t){this.name=t,this._logLevel=R3,this._logHandler=D3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?P3[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const j3=(e,t)=>t.some(n=>e instanceof n);let hh,mh;function O3(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N3(){return mh||(mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I1=new WeakMap,vc=new WeakMap,D1=new WeakMap,Kl=new WeakMap,Md=new WeakMap;function A3(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(un(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&I1.set(n,e)}).catch(()=>{}),Md.set(t,e),t}function L3(e){if(vc.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});vc.set(e,t)}let wc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return vc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||D1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function B3(e){wc=e(wc)}function M3(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Gl(this),t,...n);return D1.set(r,t.sort?t.sort():[t]),un(r)}:N3().includes(e)?function(...t){return e.apply(Gl(this),t),un(I1.get(this))}:function(...t){return un(e.apply(Gl(this),t))}}function z3(e){return typeof e=="function"?M3(e):(e instanceof IDBTransaction&&L3(e),j3(e,O3())?new Proxy(e,wc):e)}function un(e){if(e instanceof IDBRequest)return A3(e);if(Kl.has(e))return Kl.get(e);const t=z3(e);return t!==e&&(Kl.set(e,t),Md.set(t,e)),t}const Gl=e=>Md.get(e);function zd(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=un(a);return r&&a.addEventListener("upgradeneeded",l=>{r(un(a.result),l.oldVersion,l.newVersion,un(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}function Yl(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),un(n).then(()=>{})}const F3=["get","getKey","getAll","getAllKeys","count"],U3=["put","add","delete","clear"],ql=new Map;function gh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ql.get(t))return ql.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=U3.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||F3.includes(n)))return;const i=async function(a,...s){const l=this.transaction(a,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),o&&l.done]))[0]};return ql.set(t,i),i}B3(e=>({...e,get:(t,n,r)=>gh(t,n)||e.get(t,n,r),has:(t,n)=>!!gh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V3(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V3(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xc="@firebase/app",yh="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new $3("@firebase/app"),W3="@firebase/app-compat",K3="@firebase/analytics-compat",G3="@firebase/analytics",Y3="@firebase/app-check-compat",q3="@firebase/app-check",Q3="@firebase/auth",J3="@firebase/auth-compat",X3="@firebase/database",Z3="@firebase/database-compat",eE="@firebase/functions",tE="@firebase/functions-compat",nE="@firebase/installations",rE="@firebase/installations-compat",oE="@firebase/messaging",iE="@firebase/messaging-compat",aE="@firebase/performance",sE="@firebase/performance-compat",lE="@firebase/remote-config",uE="@firebase/remote-config-compat",cE="@firebase/storage",dE="@firebase/storage-compat",fE="@firebase/firestore",pE="@firebase/firestore-compat",hE="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="[DEFAULT]",mE={[xc]:"fire-core",[W3]:"fire-core-compat",[G3]:"fire-analytics",[K3]:"fire-analytics-compat",[q3]:"fire-app-check",[Y3]:"fire-app-check-compat",[Q3]:"fire-auth",[J3]:"fire-auth-compat",[X3]:"fire-rtdb",[Z3]:"fire-rtdb-compat",[eE]:"fire-fn",[tE]:"fire-fn-compat",[nE]:"fire-iid",[rE]:"fire-iid-compat",[oE]:"fire-fcm",[iE]:"fire-fcm-compat",[aE]:"fire-perf",[sE]:"fire-perf-compat",[lE]:"fire-rc",[uE]:"fire-rc-compat",[cE]:"fire-gcs",[dE]:"fire-gcs-compat",[fE]:"fire-fst",[pE]:"fire-fst-compat","fire-js":"fire-js",[hE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map,kc=new Map;function gE(e,t){try{e.container.addComponent(t)}catch(n){Er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Cr(e){const t=e.name;if(kc.has(t))return Er.debug(`There were multiple attempts to register component ${t}.`),!1;kc.set(t,e);for(const n of xs.values())gE(n,e);return!0}function Fd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Zs("app","Firebase",yE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}function $1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw Mn.create("bad-app-name",{appName:String(o)});if(n||(n=T1()),!n)throw Mn.create("no-options");const i=xs.get(o);if(i){if(yc(n,i.options)&&yc(r,i.config))return i;throw Mn.create("duplicate-app",{appName:o})}const a=new _3(o);for(const l of kc.values())a.addComponent(l);const s=new vE(n,r,a);return xs.set(o,s),s}function wE(e=Sc){const t=xs.get(e);if(!t&&e===Sc&&T1())return $1();if(!t)throw Mn.create("no-app",{appName:e});return t}function zn(e,t,n){var r;let o=(r=mE[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${o}" with version "${t}":`];i&&s.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Er.warn(s.join(" "));return}Cr(new Vn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebase-heartbeat-database",SE=1,Oi="firebase-heartbeat-store";let Ql=null;function j1(){return Ql||(Ql=zd(xE,SE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oi)}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),Ql}async function kE(e){try{return await(await j1()).transaction(Oi).objectStore(Oi).get(O1(e))}catch(t){if(t instanceof Io)Er.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Er.warn(n.message)}}}async function vh(e,t){try{const r=(await j1()).transaction(Oi,"readwrite");await r.objectStore(Oi).put(t,O1(e)),await r.done}catch(n){if(n instanceof Io)Er.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function O1(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=1024,CE=30*24*60*60*1e3;class bE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _E(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=CE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wh(),{heartbeatsToSend:r,unsentEntries:o}=TE(this._heartbeatsCache.heartbeats),i=b1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wh(){return new Date().toISOString().substring(0,10)}function TE(e,t=EE){const n=[];let r=e.slice();for(const o of e){const i=n.find(a=>a.agent===o.agent);if(i){if(i.dates.push(o.date),xh(n)>t){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),xh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _E{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _1()?P1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function xh(e){return b1(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(e){Cr(new Vn("platform-logger",t=>new H3(t),"PRIVATE")),Cr(new Vn("heartbeat",t=>new bE(t),"PRIVATE")),zn(xc,yh,e),zn(xc,yh,"esm2017"),zn("fire-js","")}PE("");const RE=(e,t)=>t.some(n=>e instanceof n);let Sh,kh;function IE(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DE(){return kh||(kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N1=new WeakMap,Ec=new WeakMap,A1=new WeakMap,Jl=new WeakMap,Ud=new WeakMap;function $E(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Fn(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&N1.set(n,e)}).catch(()=>{}),Ud.set(t,e),t}function jE(e){if(Ec.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ec.set(e,t)}let Cc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ec.get(e);if(t==="objectStoreNames")return e.objectStoreNames||A1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function OE(e){Cc=e(Cc)}function NE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xl(this),t,...n);return A1.set(r,t.sort?t.sort():[t]),Fn(r)}:DE().includes(e)?function(...t){return e.apply(Xl(this),t),Fn(N1.get(this))}:function(...t){return Fn(e.apply(Xl(this),t))}}function AE(e){return typeof e=="function"?NE(e):(e instanceof IDBTransaction&&jE(e),RE(e,IE())?new Proxy(e,Cc):e)}function Fn(e){if(e instanceof IDBRequest)return $E(e);if(Jl.has(e))return Jl.get(e);const t=AE(e);return t!==e&&(Jl.set(e,t),Ud.set(t,e)),t}const Xl=e=>Ud.get(e);function LE(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=Fn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Fn(a.result),l.oldVersion,l.newVersion,Fn(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}const BE=["get","getKey","getAll","getAllKeys","count"],ME=["put","add","delete","clear"],Zl=new Map;function Eh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zl.get(t))return Zl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=ME.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||BE.includes(n)))return;const i=async function(a,...s){const l=this.transaction(a,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),o&&l.done]))[0]};return Zl.set(t,i),i}OE(e=>({...e,get:(t,n,r)=>Eh(t,n)||e.get(t,n,r),has:(t,n)=>!!Eh(t,n)||e.has(t,n)}));const L1="@firebase/installations",Hd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=1e4,M1=`w:${Hd}`,z1="FIS_v2",zE="https://firebaseinstallations.googleapis.com/v1",FE=60*60*1e3,UE="installations",HE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},br=new Zs(UE,HE,VE);function F1(e){return e instanceof Io&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1({projectId:e}){return`${zE}/projects/${e}/installations`}function H1(e){return{token:e.token,requestStatus:2,expiresIn:KE(e.expiresIn),creationTime:Date.now()}}async function V1(e,t){const r=(await t.json()).error;return br.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function W1({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WE(e,{refreshToken:t}){const n=W1(e);return n.append("Authorization",GE(t)),n}async function K1(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KE(e){return Number(e.replace("s","000"))}function GE(e){return`${z1} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=U1(e),o=W1(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const a={fid:n,authVersion:z1,appId:e.appId,sdkVersion:M1},s={method:"POST",headers:o,body:JSON.stringify(a)},l=await K1(()=>fetch(r,s));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:H1(u.authToken)}}else throw await V1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^[cdef][\w-]{21}$/,bc="";function JE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=XE(e);return QE.test(n)?n:bc}catch{return bc}}function XE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Map;function q1(e,t){const n=el(e);Q1(n,t),ZE(n,t)}function Q1(e,t){const n=Y1.get(e);if(n)for(const r of n)r(t)}function ZE(e,t){const n=e5();n&&n.postMessage({key:e,fid:t}),t5()}let ur=null;function e5(){return!ur&&"BroadcastChannel"in self&&(ur=new BroadcastChannel("[Firebase] FID Change"),ur.onmessage=e=>{Q1(e.data.key,e.data.fid)}),ur}function t5(){Y1.size===0&&ur&&(ur.close(),ur=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5="firebase-installations-database",r5=1,Tr="firebase-installations-store";let eu=null;function Vd(){return eu||(eu=LE(n5,r5,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Tr)}}})),eu}async function Ss(e,t){const n=el(e),o=(await Vd()).transaction(Tr,"readwrite"),i=o.objectStore(Tr),a=await i.get(n);return await i.put(t,n),await o.done,(!a||a.fid!==t.fid)&&q1(e,t.fid),t}async function J1(e){const t=el(e),r=(await Vd()).transaction(Tr,"readwrite");await r.objectStore(Tr).delete(t),await r.done}async function tl(e,t){const n=el(e),o=(await Vd()).transaction(Tr,"readwrite"),i=o.objectStore(Tr),a=await i.get(n),s=t(a);return s===void 0?await i.delete(n):await i.put(s,n),await o.done,s&&(!a||a.fid!==s.fid)&&q1(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(e){let t;const n=await tl(e.appConfig,r=>{const o=o5(r),i=i5(e,o);return t=i.registrationPromise,i.installationEntry});return n.fid===bc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function o5(e){const t=e||{fid:JE(),registrationStatus:0};return X1(t)}function i5(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(br.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=a5(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:s5(e)}:{installationEntry:t}}async function a5(e,t){try{const n=await YE(e,t);return Ss(e.appConfig,n)}catch(n){throw F1(n)&&n.customData.serverCode===409?await J1(e.appConfig):await Ss(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function s5(e){let t=await Ch(e.appConfig);for(;t.registrationStatus===1;)await G1(100),t=await Ch(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wd(e);return r||n}return t}function Ch(e){return tl(e,t=>{if(!t)throw br.create("installation-not-found");return X1(t)})}function X1(e){return l5(e)?{fid:e.fid,registrationStatus:0}:e}function l5(e){return e.registrationStatus===1&&e.registrationTime+B1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u5({appConfig:e,heartbeatServiceProvider:t},n){const r=c5(e,n),o=WE(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const a={installation:{sdkVersion:M1,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},l=await K1(()=>fetch(r,s));if(l.ok){const u=await l.json();return H1(u)}else throw await V1("Generate Auth Token",l)}function c5(e,{fid:t}){return`${U1(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(e,t=!1){let n;const r=await tl(e.appConfig,i=>{if(!Z1(i))throw br.create("not-registered");const a=i.authToken;if(!t&&p5(a))return i;if(a.requestStatus===1)return n=d5(e,t),i;{if(!navigator.onLine)throw br.create("app-offline");const s=m5(i);return n=f5(e,s),s}});return n?await n:r.authToken}async function d5(e,t){let n=await bh(e.appConfig);for(;n.authToken.requestStatus===1;)await G1(100),n=await bh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Kd(e,t):r}function bh(e){return tl(e,t=>{if(!Z1(t))throw br.create("not-registered");const n=t.authToken;return g5(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function f5(e,t){try{const n=await u5(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ss(e.appConfig,r),n}catch(n){if(F1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await J1(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ss(e.appConfig,r)}throw n}}function Z1(e){return e!==void 0&&e.registrationStatus===2}function p5(e){return e.requestStatus===2&&!h5(e)}function h5(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+FE}function m5(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function g5(e){return e.requestStatus===1&&e.requestTime+B1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y5(e){const t=e,{installationEntry:n,registrationPromise:r}=await Wd(t);return r?r.catch(console.error):Kd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v5(e,t=!1){const n=e;return await w5(n),(await Kd(n,t)).token}async function w5(e){const{registrationPromise:t}=await Wd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x5(e){if(!e||!e.options)throw tu("App Configuration");if(!e.name)throw tu("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw tu(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function tu(e){return br.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="installations",S5="installations-internal",k5=e=>{const t=e.getProvider("app").getImmediate(),n=x5(t),r=Fd(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},E5=e=>{const t=e.getProvider("app").getImmediate(),n=Fd(t,ey).getImmediate();return{getId:()=>y5(n),getToken:o=>v5(n,o)}};function C5(){Cr(new Vn(ey,k5,"PUBLIC")),Cr(new Vn(S5,E5,"PRIVATE"))}C5();zn(L1,Hd);zn(L1,Hd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b5="/firebase-messaging-sw.js",T5="/firebase-cloud-messaging-push-scope",ty="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_5="https://fcmregistrations.googleapis.com/v1",ny="google.c.a.c_id",P5="google.c.a.c_l",R5="google.c.a.ts",I5="google.c.a.e";var Th;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Th||(Th={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ni;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function D5(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="fcm_token_details_db",$5=5,_h="fcm_token_object_Store";async function j5(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(nu))return null;let t=null;return(await zd(nu,$5,{upgrade:async(r,o,i,a)=>{var s;if(o<2||!r.objectStoreNames.contains(_h))return;const l=a.objectStore(_h),u=await l.index("fcmSenderId").get(e);if(await l.clear(),!!u){if(o===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:(s=c.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:tn(c.vapidKey)}}}else if(o===3){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tn(c.auth),p256dh:tn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tn(c.vapidKey)}}}else if(o===4){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tn(c.auth),p256dh:tn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tn(c.vapidKey)}}}}}})).close(),await Yl(nu),await Yl("fcm_vapid_details_db"),await Yl("undefined"),O5(t)?t:null}function O5(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5="firebase-messaging-database",A5=1,_r="firebase-messaging-store";let ru=null;function Gd(){return ru||(ru=zd(N5,A5,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_r)}}})),ru}async function ry(e){const t=qd(e),r=await(await Gd()).transaction(_r).objectStore(_r).get(t);if(r)return r;{const o=await j5(e.appConfig.senderId);if(o)return await Yd(e,o),o}}async function Yd(e,t){const n=qd(e),o=(await Gd()).transaction(_r,"readwrite");return await o.objectStore(_r).put(t,n),await o.done,t}async function L5(e){const t=qd(e),r=(await Gd()).transaction(_r,"readwrite");await r.objectStore(_r).delete(t),await r.done}function qd({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},it=new Zs("messaging","Messaging",B5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M5(e,t){const n=await Jd(e),r=iy(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Qd(e.appConfig),o)).json()}catch(a){throw it.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw it.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw it.create("token-subscribe-no-token");return i.token}async function z5(e,t){const n=await Jd(e),r=iy(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Qd(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw it.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw it.create("token-update-failed",{errorInfo:a})}if(!i.token)throw it.create("token-update-no-token");return i.token}async function oy(e,t){const r={method:"DELETE",headers:await Jd(e)};try{const i=await(await fetch(`${Qd(e.appConfig)}/${t}`,r)).json();if(i.error){const a=i.error.message;throw it.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw it.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Qd({projectId:e}){return`${_5}/projects/${e}/registrations`}async function Jd({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function iy({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==ty&&(o.web.applicationPubKey=r),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5=7*24*60*60*1e3;async function U5(e){const t=await W5(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:tn(t.getKey("auth")),p256dh:tn(t.getKey("p256dh"))},r=await ry(e.firebaseDependencies);if(r){if(K5(r.subscriptionOptions,n))return Date.now()>=r.createTime+F5?V5(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await oy(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Ph(e.firebaseDependencies,n)}else return Ph(e.firebaseDependencies,n)}async function H5(e){const t=await ry(e.firebaseDependencies);t&&(await oy(e.firebaseDependencies,t.token),await L5(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function V5(e,t){try{const n=await z5(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Yd(e.firebaseDependencies,r),n}catch(n){throw await H5(e),n}}async function Ph(e,t){const r={token:await M5(e,t),createTime:Date.now(),subscriptionOptions:t};return await Yd(e,r),r.token}async function W5(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:D5(t)})}function K5(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return G5(t,e),Y5(t,e),q5(t,e),t}function G5(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}function Y5(e,t){t.data&&(e.data=t.data)}function q5(e,t){var n,r,o,i,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(i=t.notification)===null||i===void 0?void 0:i.click_action;s&&(e.fcmOptions.link=s);const l=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(e){return typeof e=="object"&&!!e&&ny in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ay("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");ay("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ay(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J5(e){if(!e||!e.options)throw ou("App Configuration Object");if(!e.name)throw ou("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ou(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ou(e){return it.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=J5(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z5(e){try{e.swRegistration=await navigator.serviceWorker.register(b5,{scope:T5}),e.swRegistration.update().catch(()=>{})}catch(t){throw it.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(e,t){if(!t&&!e.swRegistration&&await Z5(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw it.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ty)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(e,t){if(!navigator)throw it.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw it.create("permission-blocked");return await tC(e,t==null?void 0:t.vapidKey),await eC(e,t==null?void 0:t.serviceWorkerRegistration),U5(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(e,t,n){const r=rC(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ny],message_name:n[P5],message_time:n[R5],message_device_time:Math.floor(Date.now()/1e3)})}function rC(e){switch(e){case Ni.NOTIFICATION_CLICKED:return"notification_open";case Ni.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Ni.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Rh(n)):e.onMessageHandler.next(Rh(n)));const r=n.data;Q5(r)&&r[I5]==="1"&&await nC(e,n.messageType,r)}const Ih="@firebase/messaging",Dh="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=e=>{const t=new X5(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>oC(t,n)),t},aC=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>sy(t,r)}};function sC(){Cr(new Vn("messaging",iC,"PUBLIC")),Cr(new Vn("messaging-internal",aC,"PRIVATE")),zn(Ih,Dh),zn(Ih,Dh,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(){try{await P1()}catch{return!1}return typeof window<"u"&&_1()&&x3()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(e=wE()){return lC().then(t=>{if(!t)throw it.create("unsupported-browser")},t=>{throw it.create("indexed-db-unsupported")}),Fd(R1(e),"messaging").getImmediate()}async function cC(e,t){return e=R1(e),sy(e,t)}sC();var dC="firebase",fC="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(dC,fC,"app");const pC={apiKey:"AIzaSyCWz2LR4WyHW1BVN7WvFm21a_9YMrVFgvQ",authDomain:"softmax-tech.firebaseapp.com",projectId:"softmax-tech",storageBucket:"softmax-tech.appspot.com",messagingSenderId:"351161248301",appId:"1:351161248301:web:0a0957378b835a714ae6a4",measurementId:"G-67LY9CC0TP"},hC=$1(pC),mC=uC(hC);var gC={VITE_API_BASE_URL:"https://idmapi.woodgreen-inventory.com.ng",VITE_APP_API_KEY:"AIzaSyCWz2LR4WyHW1BVN7WvFm21a_9YMrVFgvQ",VITE_APP_AUTH_DOMAIN:"softmax-tech.firebaseapp.com",VITE_APP_PROJECT_ID:"softmax-tech",VITE_APP_STORAGE_BUCKET:"softmax-tech.appspot.com",VITE_APP_MESSAGING_SENDER_ID:"351161248301",VITE_APP_APP_ID:"1:351161248301:web:0a0957378b835a714ae6a4",VITE_APP_MEASUREMENT_ID:"G-67LY9CC0TP",VITE_APP_VAPID_KEY:"BPMIaC7vwGnhT6cRsDPLnYmDDf0feY2-1j_7kz2HKFzMyEf5QPFUUWIWUaJCMc9YWsvP91VEjZuVHXCNJoyIJUM",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_VAPID_KEY:yC}=gC,ly=async()=>{const e=await Notification.requestPermission();if(e==="granted")return await cC(mC,{vapidKey:yC});if(e==="denied")return alert("You denied permission for notifications."),null},vC=I.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>e.theme.mainText};
`,wC=I.p`
  font-size: 16px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,xC=I.p`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,SC=I.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`,kC=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`,EC=I.span`
  font-size: 14px;
  color: ${e=>e.theme.linkText};
  cursor: pointer;
`,CC=()=>{const e=Qt(),[t,n]=E.useState(!1),{setUser:r,setToken:o}=Dr(),[i,a]=E.useState({}),s=localStorage.getItem("theme"),l=$r(),u={email:"",password:"",fcm_token:"",remember:!1,ip_address:""},[c,f]=E.useState(u);E.useEffect(()=>{Bd(()=>{e("/login")});const d=async()=>{try{const g=await ly();h("fcm_token",g)}catch(g){console.error("Error initializing Firebase Messaging:",g)}};(async()=>{try{const C=await(await fetch("https://api64.ipify.org?format=json")).json();h("ip_address",C.ip)}catch(g){console.error("Error fetching IP address:",g)}})(),d()},[e]);const h=(d,p)=>{f(g=>({...g,[d]:p})),a(g=>({...g,[d]:""}))},w=(d,p)=>{f(g=>({...g,[d]:p}))},y=()=>{e("/reset-password",{state:{email:c.email}})},v=()=>{e("/register")};Wi(d=>{l.error(d.data.message||"An error occurred")}),Ki(d=>{l.error(d.data.message||"Unauthorized. Please log in.")}),Gi(d=>{l.warning(d.data.message||"Validation Error");const{errors:p}=d.data,g={};Object.keys(p).forEach(C=>{g[C]=p[C].join(`
`)}),a(g)}),Yi(d=>{l.error(d.data.message||"An error occurred")});const S=async d=>{d.preventDefault();try{n(!0);const p="/auth/login",g=await rt.post(p,c);r(g.data.data),o(g.data.access_token),f(u),l.success(g.data.message)}finally{n(!1)}};return m.jsx(qi,{children:m.jsxs(Qi,{width:"100%",maxwidth:"360px",children:[m.jsx(vC,{children:"Login"}),m.jsx(wC,{children:"Step back into the excitement! 🌟"}),m.jsx(xC,{children:"Log in now to unlock the wonders of your account and dive into a world of limitless possibilities. We're thrilled to have you back. Let the adventure begin! 🚀"}),m.jsx(SC,{src:s==="dark"?Po:kr,alt:"Logo"}),m.jsxs(Qn,{onSubmit:S,children:[m.jsx(Rt,{name:"email",lefticon:m.jsx(Ui,{}),type:"email",placeholder:"Enter your email",value:c.email,onChange:(d,p)=>h(d,p),margin:"0 0 5px 0",error:i.email}),m.jsx(Rt,{name:"password",lefticon:m.jsx(vs,{}),type:"password",placeholder:"Enter your password",showPasswordToggle:!0,value:c.password,onChange:(d,p)=>h(d,p),margin:"5px 0 5px 0",error:i.password}),m.jsxs(kC,{children:[m.jsx(k1,{name:"remember",checked:c.remember,onChange:(d,p)=>w(d,p),label:"Remember me",error:i.remember}),m.jsx(EC,{onClick:y,children:"Reset Password"})]}),m.jsx(Je,{type:"submit",className:"primary",isLoading:t,margin:"5px 0 5px 0",children:"Login"})]}),m.jsx(Je,{type:"button",className:"secondary",onClick:v,margin:"5px 0 0 0",children:"Register"})]})})},bC=J`
  animation: shake 0.5s;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-5px);
    }
    40%,
    80% {
      transform: translateX(5px);
    }
  }
`,TC=I.div`
  margin: ${e=>e.margin||"0 0 0 0"};
  text-align: left;
  position: relative;
  cursor: pointer;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;

  border: 2px solid ${e=>e.theme.inputBorder};
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  color: ${e=>e.theme.inputText};
  background-color: ${e=>e.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${e=>e.error&&bC}

  &:focus {
    border-color: ${e=>e.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${e=>e.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputHoverShadow};

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${e=>e.theme.inputPlaceholder};
  }

  ${e=>e.error&&J`
      border-color: ${t=>t.theme.errorColor};
      box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
    `}

  ${e=>e.disabled&&J`
      background-color: ${t=>t.theme.disabledBackground};
      color: ${t=>t.theme.disabledText};
      cursor: not-allowed;
    `}
`,_C=I.span`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  color: ${e=>e.theme.inputText};

  &:hover {
    color: ${e=>e.theme.inputText};
  }

  svg {
    font-size: 14px;
    color: ${e=>e.theme.inputText};
  }
`,PC=I.div`
  ${e=>e.size==="small"&&J`
      font-size: 12px;
      padding: 8px 8px 8px ${t=>t.lefticon?"26px":"8px"};
    `}

  ${e=>e.size==="large"&&J`
      font-size: 18px;
      padding: 18px 18px 18px ${t=>t.lefticon?"38px":"18px"};
    `}

  ${e=>!e.size&&J`
      font-size: 14px;
      padding: 10px 13px 10px ${t=>t.lefticon?"33px":"13px"};
    `}

  display: flex;
  align-items: center;

  justify-content: space-between;
  user-select: none;
  gap: 7px;

  .dropdown-selected-value.placeholder {
    color: #82868b;
  }
`,RC=I.div`
  svg {
    transition: all 0.2s ease-in-out;
  }

  svg.translate {
    transform: rotate(180deg);
  }
`,IC=I.div`
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  padding: 5px;
  position: absolute;
  transform: translateY(6px);
  border: 1px solid #dbdbdb;
  border-radius: 6px;
  overflow: auto;
  background-color: ${e=>e.theme.cardBackground};
  z-index: 99;
  max-height: 312px;
  min-height: 50px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,$h=I.div`
  padding: 7px 10px;
  margin: 0 0 3px 0;
  cursor: pointer;
  transition: background-color 0.35s ease;
  border-radius: 6px;
  font-size: 14px;
  color: ${e=>e.theme.mainText};

  &:hover {
    background-color: ${e=>e.theme.mainBackground};
    margin: 0 0 3px 0;
    color: ${e=>e.theme.mainText};
  }

  &.selected {
    background-color: rgba(0, 123, 255, 0.2);
    margin: 0 0 3px 0;
    color: ${e=>e.theme.primaryColor};
  }

  svg {
    margin-right: 5px;
    font-size: 16px;
  }

  ${e=>e.icon&&J`
      svg {
        margin-right: 5px;
        font-size: 16px;
      }
    `}
`,DC=I.div`
  padding: 5px;

  input {
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    padding: 5px;
    color: ${e=>e.theme.inputText};
    border: 2px solid ${e=>e.theme.inputBorder};
    background-color: ${e=>e.theme.inputBackground};
    border-radius: 10px;

    &:focus {
      border-color: ${e=>e.theme.inputFocusBorder};
      box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
      transform: translateY(-2px);
      outline: none;
    }

    &:hover {
      border-color: ${e=>e.theme.inputHoverBorder};
      box-shadow: 0 0 0 3px ${e=>e.theme.inputHoverShadow};
      transform: translateY(-2px);
    }
  }
`,$C=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`,jC=I.div`
  background-color: ${e=>e.theme.primaryColor};
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
`,OC=I.div`
  color: ${e=>e.theme.inputText};
  padding: 2px 4px;
  display: flex;
  align-items: center;
`,NC=I.span`
  display: flex;
  align-items: center;
  margin-left: 5px;
`,AC=I.span`
  color: ${e=>e.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-wrap;
`,LC=I.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${e=>e.theme.inputText};
`,BC=({isOpen:e})=>m.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"#222",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",className:e?"translate":"",children:m.jsx("polyline",{points:"6 9 12 15 18 9"})}),MC=()=>m.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"#fff",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),m.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),eo=({label:e,name:t,placeHolder:n,options:r,multiple:o,searchable:i,onChange:a,align:s,margin:l,error:u,size:c,lefticon:f})=>{const[h,w]=E.useState(!1),[y,v]=E.useState(o?[]:null),[S,d]=E.useState(""),p=E.useRef(),g=E.useRef();E.useEffect(()=>{d(""),h&&p.current&&p.current.focus()},[h]),E.useEffect(()=>{const j=V=>{g.current&&!g.current.contains(V.target)&&w(!1)};return window.addEventListener("click",j),()=>{window.removeEventListener("click",j)}},[]);const C=j=>{w(!h)},_=()=>!y||o&&y.length===0?n:o?m.jsx($C,{children:y.map((j,V)=>m.jsxs(jC,{children:[j.icon&&j.icon,j.label,m.jsx(NC,{onClick:se=>b(se,j),children:m.jsx(MC,{})})]},`${j.value}-${V}`))}):m.jsxs(OC,{children:[y.icon&&y.icon,y.label]}),x=j=>y.filter(V=>V.value!==j.value),b=(j,V)=>{j.stopPropagation();const se=x(V);v(se),a&&a(t,se)},D=(j,V)=>{V.stopPropagation();let se;o?y.findIndex(Me=>Me.value===j.value)>=0?se=x(j):se=[...y,j]:(se=j,w(!1)),v(se),a&&a(t,se)},L=()=>{if(r.every(V=>y.some(se=>se.value===V.value)))v([]),a(t,[]);else{const V=r.map(se=>({value:se.value,label:se.label,icon:se.icon}));v(V),a&&a(t,V)}},z=j=>o?y.filter(V=>V.value===j.value).length>0:y?y.value===j.value:!1,X=j=>{d(j.target.value)},Y=()=>S?r.filter(j=>j.label.toLowerCase().indexOf(S.toLowerCase())>=0):r;return m.jsxs(m.Fragment,{children:[e&&m.jsxs(LC,{children:[e," :"]}),m.jsxs(TC,{margin:l,error:u,name:t,children:[f&&m.jsx(_C,{children:f}),m.jsxs(PC,{ref:g,onClick:C,size:c,lefticon:f,error:u,name:t,children:[m.jsx("div",{className:`dropdown-selected-value ${!y||y.length===0?"placeholder":""}`,children:_()}),m.jsx(RC,{children:m.jsx(BC,{isOpen:h})})]}),h&&m.jsxs(IC,{className:`alignment--${s||"auto"}`,children:[i&&m.jsx(DC,{children:m.jsx("input",{className:"form-control",onChange:X,value:S,ref:p})}),o&&m.jsx($h,{onClick:L,className:"dropdown-item",children:r.every(j=>y.some(V=>V.value===j.value))?"Remove All":"Select All"}),Y().map(j=>m.jsxs($h,{onClick:V=>D(j,V),className:z(j)&&"selected",children:[j.icon&&j.icon,j.label]},j.value))]})]}),u&&m.jsx(AC,{children:u})]})};eo.propTypes={label:M.string,name:M.string,placeHolder:M.string,options:M.arrayOf(M.shape({value:M.any.isRequired,label:M.string.isRequired,icon:M.string})),multiple:M.bool,searchable:M.bool,onChange:M.func,align:M.string,margin:M.string,error:M.string,size:M.string,lefticon:M.element};const zC=e=>{const{formData:t,handleInputChange:n,handleSelectChange:r,errors:o,next:i,titleOptions:a}=e;return m.jsxs(Qn,{children:[m.jsx(eo,{name:"title",placeHolder:"Select a title",lefticon:m.jsx(k4,{}),options:a,multiple:!1,searchable:!0,onChange:(s,l)=>r(s,l),align:"left",margin:"0 0 5px 0",error:o.title}),m.jsx(Rt,{name:"name",lefticon:m.jsx(Zp,{}),type:"text",placeholder:"Enter your name",value:t.name,onChange:(s,l)=>n(s,l),margin:"5px 0 5px 0",error:o.name}),m.jsx(Rt,{name:"email",lefticon:m.jsx(Ui,{}),type:"email",placeholder:"Enter your email",value:t.email,onChange:(s,l)=>n(s,l),margin:"5px 0 5px 0",error:o.email}),m.jsx(Rt,{name:"username",lefticon:m.jsx(Zp,{}),type:"username",placeholder:"Enter your username",value:t.username,onChange:(s,l)=>n(s,l),margin:"5px 0 5px 0",error:o.username}),m.jsx(Je,{onClick:i,type:"button",className:"primary",margin:"5px 0 5px 0",children:"Next"})]})},FC=e=>{const{formData:t,handleInputChange:n,handleSelectChange:r,errors:o,next:i,back:a,countryOptions:s,genderOptions:l}=e,[u,c]=E.useState([]),[f,h]=E.useState([]);return E.useEffect(()=>{(async()=>{if(t.country_id)try{const v=(await rt.get(`/countries/${t.country_id}/states`)).data.data.map(S=>({value:S.id,label:S.name}));c(v)}catch(y){console.error("Error fetching states:",y)}})()},[t.country_id]),E.useEffect(()=>{(async()=>{if(t.state_id)try{const v=(await rt.get(`/states/${t.state_id}/cities`)).data.data.map(S=>({value:S.id,label:S.name}));h(v)}catch(y){console.error("Error fetching cities:",y)}})()},[t.state_id]),m.jsxs(Qn,{children:[m.jsx(Rt,{name:"phone_number",lefticon:m.jsx(y4,{}),type:"tel",placeholder:"Enter your phone number",value:t.phone_number,onChange:(w,y)=>n(w,y),margin:"0 0 5px 0",error:o.phone_number}),m.jsx(eo,{name:"gender",placeHolder:"Select a gender",lefticon:m.jsx(S4,{}),options:l,multiple:!1,searchable:!0,onChange:(w,y)=>r(w,y),align:"left",margin:"5px 0 5px 0",error:o.gender}),m.jsx(eo,{name:"country_id",placeHolder:"Select a country",lefticon:m.jsx(Fl,{}),options:s,multiple:!1,searchable:!0,onChange:(w,y)=>r(w,y),align:"left",margin:"5px 0 5px 0",error:o.country_id}),m.jsx(eo,{name:"state_id",placeHolder:"Select a state",lefticon:m.jsx(Fl,{}),options:u,multiple:!1,searchable:!0,onChange:(w,y)=>r(w,y),align:"left",margin:"5px 0 5px 0",error:o.state_id}),m.jsx(eo,{name:"city_id",placeHolder:"Select a city",lefticon:m.jsx(Fl,{}),options:f,multiple:!1,searchable:!0,onChange:(w,y)=>r(w,y),align:"left",margin:"5px 0 5px 0",error:o.city_id}),m.jsx(Je,{onClick:i,type:"button",className:"primary",margin:"5px 0 5px 0",children:"Next"}),m.jsx(Je,{onClick:a,type:"button",className:"secondary",margin:"5px 0 5px 0",children:"Previous"})]})};function jh(e){return Re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"}}]})(e)}function UC(e){return Re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"}}]})(e)}function HC(e){return Re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"}}]})(e)}const Oh=e=>(e/(1024*1024)).toFixed(2),VC=J`
  animation: shake 0.5s;

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    20%, 60% {
      transform: translateX(-5px);
    }
    40%, 80% {
      transform: translateX(5px);
    }
  }
`,WC=I.div`
  margin: ${e=>e.margin||"0 0 0 0"};
  border: 2px dashed ${e=>e.theme.inputBorder};
  border-radius: 10px;
  padding: 20px;
  background-color: ${e=>e.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${e=>e.error&&VC}

  &:focus {
    border-color: ${e=>e.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${e=>e.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputHoverShadow};
    transform: translateY(-2px);

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${e=>e.theme.inputPlaceholder};
  }

  ${e=>e.error&&J`
      border-color: ${t=>t.theme.errorColor};
      box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
    `}

  ${e=>e.disabled&&J`
      background-color: ${t=>t.theme.disabledBackground};
      color: ${t=>t.theme.disabledText};
      cursor: not-allowed;
    `}
`,KC=I.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`,uy=I.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
`,GC=I.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
`,YC=I.div`
  margin-right: 5px;
`,qC=I.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>e.theme.dangerColor};

  svg {
    vertical-align: middle;
  }
`,Nh=I.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 250px;
  background-color: ${e=>e.theme.mainBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 10px;
  display: none;
  border-radius: 10px;
  z-index: 1;

  ${uy}:hover & {
    display: block;
  }
`,QC=I.img`
  max-width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
`,Ah=I.div`
  font-size: 12px;
  color: ${e=>e.theme.mainColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  div {
    margin-bottom: 5px;
  }
`,JC=I.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${e=>e.theme.inputText};
`,XC=I.p`
  font-size: 14px;
  color: ${e=>e.theme.textColor};
  margin: 10px 0;
`,ZC=I.span`
  color: ${e=>e.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  white-space: pre-wrap;
`,cy=({name:e,label:t,multiple:n,onFilesSelected:r,accept:o,error:i,margin:a})=>{const[s,l]=E.useState([]),u=E.useRef(null),c=(d,p)=>{const g=p.split(".").pop().toLowerCase();return d.startsWith("image/")?m.jsx(UC,{size:20}):d==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||d==="application/vnd.ms-excel"||d==="text/csv"||d==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||d==="application/vnd.ms-excel"||d==="application/excel"||d==="application/x-excel"||d==="application/x-msexcel"||d==="application/vnd.openxmlformats-officedocument.spreadsheetml.template"||d==="application/vnd.ms-excel.sheet.macroEnabled.12"||d==="application/vnd.ms-excel.template.macroEnabled.12"||d==="application/vnd.ms-excel.addin.macroEnabled.12"||d==="application/vnd.ms-excel.sheet.binary.macroEnabled.12"||d==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||d==="application/vnd.ms-excel"||d==="application/x-excel"||d==="application/x-msexcel"||d==="application/vnd.openxmlformats-officedocument.spreadsheetml.template"||d==="application/vnd.ms-excel.sheet.macroEnabled.12"||d==="application/vnd.ms-excel.template.macroEnabled.12"||d==="application/vnd.ms-excel.addin.macroEnabled.12"||d==="application/vnd.ms-excel.sheet.binary.macroEnabled.12"?m.jsx(E4,{size:20}):d==="application/pdf"?m.jsx(C4,{size:20}):d==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||d==="application/msword"||d==="application/vnd.openxmlformats-officedocument.wordprocessingml.template"||d==="application/vnd.ms-word.document.macroEnabled.12"||d==="application/vnd.ms-word.template.macroEnabled.12"||d==="application/vnd.ms-word.document.macroEnabled.12"?m.jsx(b4,{size:20}):["sql"].includes(g)?m.jsx(jh,{size:20}):m.jsx(jh,{size:20})},f=d=>{d.preventDefault();const p=Array.from(d.dataTransfer.files);y(p)},h=d=>{const p=Array.from(d.target.files);y(p)},w=d=>{l(p=>p.filter((g,C)=>C!==d))},y=d=>{l(n?[...s,...d]:[d[0]]),r(n?[...s,...d]:[d[0]])},v=d=>{(d.key==="Enter"||d.key===" ")&&u.current.click()},S=()=>{l([]),r([]),F};return m.jsxs(m.Fragment,{children:[t&&m.jsxs(JC,{children:[t," :"]}),m.jsxs(WC,{name:e,onDrop:f,onDragOver:d=>d.preventDefault(),onClick:()=>u.current.click(),onKeyDown:v,accept:o,error:i,margin:a,children:[m.jsx("input",{name:e,ref:u,type:"file",style:{display:"none"},onChange:h,multiple:n,accept:o,error:i}),m.jsx(XC,{children:n?"Drag & drop multiple files here, or click to select files":"Drag & drop a file here, or click to select one"})]}),i&&m.jsx(ZC,{children:i}),m.jsx(KC,{children:s.length>0&&s.map((d,p)=>{var g,C;return m.jsxs(uy,{children:[m.jsxs(GC,{children:[m.jsx(YC,{children:c(d.type,d.name)}),d.name]}),m.jsx(qC,{onClick:()=>w(p),children:m.jsx(HC,{size:20})}),d.type.startsWith("image/")?m.jsxs(Nh,{children:[m.jsx(QC,{src:URL.createObjectURL(d),alt:"Image Preview"}),m.jsxs(Ah,{children:[m.jsxs("div",{children:["Name: ",d.name]}),m.jsxs("div",{children:["Size: ",Oh(d.size)," MB"]}),m.jsxs("div",{children:["Type: ",d.type]}),m.jsxs("div",{children:["Webkit Relative Path: ",d.webkitRelativePath]}),m.jsxs("div",{children:["Modified Date: ",(g=d.lastModifiedDate)==null?void 0:g.toLocaleString()]})]})]}):m.jsx(Nh,{children:m.jsxs(Ah,{children:[m.jsxs("div",{children:["Name: ",d.name]}),m.jsxs("div",{children:["Size: ",Oh(d.size)," MB"]}),m.jsxs("div",{children:["Type: ",d.type]}),m.jsxs("div",{children:["Webkit Relative Path: ",d.webkitRelativePath]}),m.jsxs("div",{children:["Modified Date: ",(C=d.lastModifiedDate)==null?void 0:C.toLocaleString()]})]})})]},p)})}),n&&s.length>0&&m.jsx(Je,{type:"button",className:"danger",margin:"5px 0 5px 0",onClick:S,children:"Clear Files"})]})};cy.propTypes={name:M.string,label:M.string,onFilesSelected:M.func.isRequired,multiple:M.bool,margin:M.string,accept:M.string,setInputError:M.func};const eb=e=>{const{formData:t,handleInputChange:n,handleFileChange:r,multiple:o,errors:i,next:a,back:s}=e;return m.jsxs(Qn,{children:[m.jsx(cy,{name:"image",onFilesSelected:l=>r("image",l),multiple:o,accept:"*/*",margin:"0 0 5px 0",error:i.image}),m.jsx(Rt,{name:"password",lefticon:m.jsx(vs,{}),type:"password",placeholder:"Enter your password",showPasswordToggle:!0,value:t.password,onChange:(l,u)=>n(l,u),margin:"5px 0 5px 0",error:i.password}),m.jsx(Rt,{name:"password_confirmation",lefticon:m.jsx(vs,{}),type:"password",placeholder:"Enter your password confirmation",showPasswordToggle:!0,value:t.password_confirmation,onChange:(l,u)=>n(l,u),margin:"5px 0 5px 0",error:i.password_confirmation}),m.jsx(Je,{onClick:a,type:"button",className:"primary",margin:"5px 0 5px 0",children:"Next"}),m.jsx(Je,{onClick:s,type:"button",className:"secondary",margin:"5px 0 5px 0",children:"Previous"})]})},tb=I.div`
  margin-top: 20px;
`,nb=I.ul`
  list-style: none;
  padding: 0;
`,rb=I.li`
  margin-bottom: 10px;

  strong {
    margin-right: 5px;
  }

  img {
    max-width: 100%;
    max-height: 100px;
    border-radius: 5px;
    margin-top: 5px;
  }
`,ob=e=>e.replace(/id/gi,"").trim().split("_").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "),ib=e=>{const{data:t,back:n,handleSubmit:r,isLoading:o}=e,i=s=>s instanceof File?`File - ${s.name}`:s,a=Object.entries(t).map(([s,l])=>m.jsxs(rb,{children:[m.jsxs("strong",{children:[ob(s)," :"]}),typeof l=="string"&&l.match(/\.(jpeg|jpg|gif|png)$/)?m.jsx("img",{src:l,alt:"Image"}):i(l)]},s));return m.jsxs(tb,{children:[m.jsx(nb,{children:a}),m.jsx(Je,{type:"submit",className:"primary",margin:"5px 0 5px 0",isLoading:o,onClick:r,children:"Submit"}),m.jsx(Je,{onClick:n,type:"button",className:"secondary",margin:"5px 0 5px 0",children:"Previous"})]})},ab=I.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>e.theme.mainText};
`,sb=I.p`
  font-size: 16px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,lb=I.p`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,ub=I.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`,cb=()=>{const e=Qt(),[t,n]=E.useState(!1),[r,o]=E.useState(1),[i,a]=E.useState({}),[s,l]=E.useState([]),[u,c]=E.useState([]),[f,h]=E.useState([]),[w,y]=E.useState([]),{setUser:v,setToken:S}=Dr(),[d,p]=E.useState([]),[g,C]=E.useState(!1),_=$r(),x=localStorage.getItem("theme"),b={title:"",name:"",username:"",email:"",phone_number:"",country_id:"",state_id:"",city_id:"",gender:"",image:"",password:"",password_confirmation:"",fcm_token:""},[D,L]=E.useState(b),z=(O,W)=>{L(K=>({...K,[O]:W})),a(K=>({...K,[O]:""}))},X=(O,W)=>{const K=W.value;L(fe=>({...fe,[O]:K})),a(fe=>({...fe,[O]:""}))},Y=(O,W)=>{console.log("fieldName:",O),console.log("selectedFiles:",W),a(K=>({...K,[O]:""})),g?(W.forEach((K,fe)=>{L(pe=>({...pe,[`${O}_${fe+1}`]:K}))}),y(K=>[...K,...W])):(L(K=>({...K,[O]:W[0]})),y(W))},j=()=>{o(r+1)},V=()=>{o(r-1)},se=()=>{e("/login")};Wi(O=>{_.error(O.data.message||"An error occurred")}),Ki(O=>{_.error(O.data.message||"Unauthorized. Please log in.")}),Gi(O=>{_.warning(O.data.message||"Validation Error");const{errors:W}=O.data,K={};Object.keys(W).forEach(fe=>{K[fe]=W[fe].join(`
`)}),a(K)}),Yi(O=>{_.error(O.data.message||"An error occurred")});const Me=async O=>{O.preventDefault();try{n(!0);const W=new FormData;Object.keys(D).forEach(pe=>{W.append(pe,D[pe])});const K="/auth/register",fe=await rt.post(K,W);v(fe.data.data),S(fe.data.access_token),_.success(fe.data.message),L(b)}finally{n(!1)}};E.useEffect(()=>{const O=async()=>{try{const re=await rt.get("/countries");c(re.data.data)}catch(re){console.error("Error fetching countries:",re)}},W=async()=>{try{const re=await rt.get("/titles");l(re.data.data)}catch(re){console.error("Error fetching titles:",re)}},K=async()=>{try{const re=await ly();z("fcm_token",re)}catch(re){console.error("Error initializing Firebase Messaging:",re)}},fe=async()=>{if(D.country_id)try{const re=await rt.get(`/countries/${D.country_id}/states`);h(re.data.data)}catch(re){console.error("Error fetching states:",re)}};(async()=>{if(D.state_id)try{const re=await rt.get(`/states/${D.state_id}/cities`);p(re.data.data)}catch(re){console.error("Error fetching cities:",re)}})(),fe(),K(),W(),O()},[e,D.country_id,D.state_id]);const ue=[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other"}],A=s.map(O=>({value:O.name,label:O.name})),U=u.map(O=>({value:O.id,label:O.name}));return m.jsx(qi,{children:m.jsxs(Qi,{width:"100%",maxwidth:"360px",children:[m.jsx(ab,{children:"Register"}),m.jsx(sb,{children:"Embark on an extraordinary journey by joining our vibrant community. 🌟"}),m.jsx(lb,{children:"Register now to unlock a world of possibilities and begin your exciting adventure with us. We're thrilled to have you on board! 🚀"}),m.jsx(ub,{src:x==="dark"?Po:kr,alt:"Logo"}),(()=>{switch(r){case 1:return m.jsx(zC,{formData:D,handleInputChange:z,handleSelectChange:X,titleOptions:A,errors:i,next:j});case 2:return m.jsx(FC,{formData:D,handleInputChange:z,handleSelectChange:X,genderOptions:ue,countryOptions:U,stateOptions:f,cityOptions:d,errors:i,next:j,back:V});case 3:return m.jsx(eb,{formData:D,handleInputChange:z,multiple:g,handleFileChange:Y,errors:i,next:j,back:V});default:return m.jsx(ib,{data:D,back:V,handleSubmit:Me,isLoading:t})}})(),m.jsx(Je,{type:"button",className:"secondary",onClick:se,margin:"5px 0 0 0",children:"Login"})]})})},db=I.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>e.theme.mainText};
`,fb=I.p`
  font-size: 16px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,pb=I.p`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,hb=I.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`,mb=()=>{var S;const e=Qt(),t=Ir(),[n,r]=E.useState(!1),{setUser:o,setToken:i}=Dr(),[a,s]=E.useState({}),l=$r(),u=localStorage.getItem("theme"),c={email:((S=t==null?void 0:t.state)==null?void 0:S.email)||""},[f,h]=E.useState(c),w=(d,p)=>{h(g=>({...g,[d]:p})),s(g=>({...g,[d]:""}))},y=()=>{e("/login")};Wi(d=>{l.error(d.data.message||"An error occurred")}),Ki(d=>{l.error(d.data.message||"Unauthorized. Please log in.")}),Gi(d=>{l.warning(d.data.message||"Validation Error");const{errors:p}=d.data,g={};Object.keys(p).forEach(C=>{g[C]=p[C].join(`
`)}),s(g)}),Yi(d=>{l.error(d.data.message||"An error occurred")});const v=async d=>{d.preventDefault();try{r(!0);const p="/auth/reset-password",g=await rt.post(p,f);o(g.data.data),i(g.data.access_token),h(c),l.success(g.data.message)}finally{r(!1)}};return m.jsx(qi,{children:m.jsxs(Qi,{width:"100%",maxwidth:"360px",children:[m.jsx(db,{children:"Reset Password"}),m.jsx(fb,{children:"Embark on the journey to regain control! 🚀"}),m.jsx(pb,{children:"Simply enter your registered email address, and we'll dispatch secret instructions to reset your password. Swiftly reclaim access to your account. Your trust is our priority! Thank you for choosing us!"}),m.jsx(hb,{src:u==="dark"?Po:kr,alt:"Logo"}),m.jsxs(Qn,{onSubmit:v,children:[m.jsx(Rt,{name:"email",lefticon:m.jsx(Ui,{}),type:"email",placeholder:"Enter your email",value:f.email,onChange:(d,p)=>w(d,p),margin:"0 0 5px 0",error:a.email}),m.jsx(Je,{type:"submit",className:"primary",isLoading:n,margin:"5px 0 5px 0",children:"Reset Password"})]}),m.jsx(Je,{type:"button",className:"secondary",onClick:y,margin:"5px 0 0 0",children:"Login"})]})})},gb=J`
  animation: shake 0.5s;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-5px);
    }
    40%,
    80% {
      transform: translateX(5px);
    }
  }
`,yb=I.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${e=>e.theme.inputText};
`,vb=I.input`
  ${e=>e.size==="small"&&J`
      font-size: 12px;
      padding: 8px 8px 8px ${t=>t.lefticon?"26px":"8px"};
    `}

  ${e=>e.size==="large"&&J`
      font-size: 18px;
      padding: 18px 18px 18px ${t=>t.lefticon?"38px":"18px"};
    `}

  ${e=>!e.size&&J`
      font-size: 14px;
      padding: 13px 13px 13px ${t=>t.lefticon?"33px":"13px"};
    `}

  margin: ${e=>e.margin||"0 0 0 0"};
  border: 2px solid ${e=>e.theme.inputBorder};
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  color: ${e=>e.theme.inputText};
  background-color: ${e=>e.theme.inputBackground};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  ${e=>e.error&&gb}

  &:focus {
    border-color: ${e=>e.theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputFocusShadow};
    transform: translateY(-2px);
    outline: none;

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &:hover {
    border-color: ${e=>e.theme.inputHoverBorder};
    box-shadow: 0 0 0 3px ${e=>e.theme.inputHoverShadow};
    transform: translateY(-2px);

    ${e=>e.error&&J`
        border-color: ${t=>t.theme.errorColor};
        box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
      `}
  }

  &::placeholder {
    color: ${e=>e.theme.inputPlaceholder};
  }

  ${e=>e.error&&J`
      border-color: ${t=>t.theme.errorColor};
      box-shadow: 0 0 0 3px ${t=>t.theme.errorShadow};
    `}

  ${e=>e.disabled&&J`
      background-color: ${t=>t.theme.disabledBackground};
      color: ${t=>t.theme.disabledText};
      cursor: not-allowed;
    `}
`,wb=I.span`
  color: ${e=>e.theme.errorColor};
  display: block;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`,xb=I.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  justify-content: center;
`,dy=({name:e,label:t,value:n,onChange:r,disabled:o,error:i,size:a,margin:s,...l})=>{const u=Array.from({length:6},()=>E.useRef(null)),c=(h,w)=>{if(r){const y=h.target.value.slice(0,1);r(y,w),setTimeout(()=>{y!==""&&w<u.length-1&&u[w+1].current.focus(),h.target.selectionStart===0&&w>0&&u[w-1].current.focus()},0)}},f=h=>{h.preventDefault();const w=h.clipboardData.getData("text").trim();/^[0-9]*$/.test(w)&&w.length===6&&w.split("").forEach((v,S)=>{const d=Math.min(S,u.length-1);c({target:{value:v}},d)})};return m.jsxs(m.Fragment,{children:[t&&m.jsxs(yb,{children:[t," :"]}),m.jsx(xb,{children:[...Array(6)].map((h,w)=>m.jsx(vb,{name:`${e}-${w}`,type:"text",placeholder:"●",value:n[w]||"",onChange:y=>c(y,w),maxLength:"1",pattern:"[0-9]*",ref:u[w],disabled:o,size:a,error:i,margin:s,onPaste:f},w))}),i&&m.jsx(wb,{children:i})]})};dy.propTypes={label:M.string,value:M.arrayOf(M.string.isRequired).isRequired,onChange:M.func.isRequired,disabled:M.bool,size:M.oneOf(["small","large"]),margin:M.string};const Sb=I.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>e.theme.mainText};
`,kb=I.p`
  font-size: 16px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,Eb=I.p`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,Cb=I.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`,bb=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`,Tb=I.span`
  font-size: 14px;
  color: ${e=>e.theme.linkText};
  cursor: pointer;
  ${e=>e.disabled&&"pointer-events: none; opacity: 0.5;"}
`,_b=I.span`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  background-color: ${e=>e.theme.mainBackground};
  padding: 5px;
  border-radius: 5px;
`,Pb=()=>{var X;const e=Qt(),t=Ir(),[n,r]=E.useState(["","","","","",""]),[o,i]=E.useState(!1),{setUser:a,setToken:s}=Dr(),[l,u]=E.useState({}),[c,f]=E.useState(!1),[h,w]=E.useState(30),[y,v]=E.useState(!1),S=localStorage.getItem("theme"),d=$r(),p={email:((X=t==null?void 0:t.state)==null?void 0:X.email)||"",otp:n.join("")},[g,C]=E.useState(p),_=(Y,j)=>{C(V=>({...V,[Y]:j})),u(V=>({...V,[Y]:""}))},x=(Y,j,V)=>{const se=[...n];se[j]=Y;const Me={...l};V==="otp"&&/[^0-9]/.test(Y)?Me[V]="Invalid OTP format. Please enter only numeric values.":Me[V]="",r(se),u(Me)},b=()=>{e("/login")},D=()=>{f(!0),v(!0),w(30);const Y=setInterval(()=>{w(j=>j===0?(clearInterval(Y),v(!1),f(!1),0):j-1)},1e3)};E.useEffect(()=>{Bd(()=>{e("/login")})},[e]),Wi(Y=>{d.error(Y.data.message||"An error occurred")}),Ki(Y=>{d.error(Y.data.message||"Unauthorized. Please log in.")}),Gi(Y=>{d.warning(Y.data.message||"Validation Error");const{errors:j}=Y.data,V={};Object.keys(j).forEach(se=>{V[se]=j[se].join(`
`)}),u(V)}),Yi(Y=>{d.error(Y.data.message||"An error occurred")});const L=async Y=>{Y.preventDefault();try{i(!0);const j="/auth/verify-email",V=await rt.post(j,g);a(V.data.data),s(V.data.access_token),C(p),d.success(V.data.message)}finally{i(!1)}},z=async Y=>{Y.preventDefault();try{f(!0);const j="/auth/issue-otp",V=await rt.post(j,g);d.success(V.data.message),D()}finally{f(!1)}};return m.jsx(qi,{children:m.jsxs(Qi,{width:"100%",maxwidth:"360px",children:[m.jsx(Sb,{children:"Verify Account"}),m.jsx(kb,{children:"Unleash the magic! 🚀"}),m.jsxs(Eb,{children:["Enter the OTP we sent to your phone or email (",m.jsx("strong",{children:g.email}),") and unlock a world of incredible services. Your journey with us is just a heartbeat away!"]}),m.jsx(Cb,{src:S==="dark"?Po:kr,alt:"Logo"}),m.jsxs(Qn,{onSubmit:L,children:[m.jsx(Rt,{name:"email",lefticon:m.jsx(Ui,{}),type:"email",placeholder:"Enter your email",value:g.email,onChange:(Y,j)=>_(Y,j),margin:"0 0 5px 0",error:l.email,hidden:!0}),m.jsx(dy,{name:"otp",value:n,onChange:(Y,j)=>x(Y,j,"otp"),margin:"5px 0 5px 0",error:l.otp}),m.jsxs(bb,{children:[m.jsx(Tb,{onClick:z,disabled:c||y,children:c?"Initiating resend OTP...":"Resend OTP"}),y&&m.jsxs(_b,{children:[h,"s"]})]}),m.jsx(Je,{type:"submit",className:"primary",isLoading:o,margin:"5px 0 5px 0",children:"Verify"})]}),m.jsx(Je,{type:"button",className:"secondary",onClick:b,margin:"5px 0 0 0",children:"Login"})]})})},Rb=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: ${e=>e.theme.headerText};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,fy=I.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ib=I(fy)`
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
`,Db=I.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,$b=I(fy)`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`,jb=I.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,Ob=I.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`,Nb=I.div`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`,Br=I.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Ab=({title:e,toggleTheme:t,onLogout:n,user:r,isLoading:o,onSidebarToggle:i})=>{const a=localStorage.getItem("theme"),s=Qt(),l=()=>a==="dark"?m.jsx(x4,{size:20}):m.jsx(T4,{size:20}),u=()=>{s("/profile")},[c,f]=E.useState(!1);return m.jsxs(Rb,{children:[m.jsxs(Ib,{children:[m.jsx(Br,{onClick:i,children:m.jsx(f4,{size:18})}),m.jsx(Db,{children:e})]}),m.jsxs($b,{children:[m.jsxs(jb,{onClick:u,children:[m.jsx(Ob,{src:r.image,alt:"User"}),m.jsx(Nb,{children:r.name})]}),m.jsx(Br,{children:m.jsx(v4,{size:18})}),m.jsx(Br,{children:m.jsx(p4,{size:18})}),m.jsx(Br,{onClick:()=>f(!c),children:c?m.jsx(h4,{size:18}):m.jsx(Ui,{size:18})}),m.jsx(Br,{onClick:t,children:l()}),!o&&m.jsx(Br,{onClick:n,children:m.jsx(w4,{size:18})}),o&&m.jsx(x1,{margin:"5px 0 5px 0",progress:50})]})]})},Lb=I.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${e=>e.theme.mainBackground};
  color: ${e=>e.theme.mainText};
  min-height: 0;
  overflow-y: auto;
`,Bb=({children:e})=>m.jsx(Lb,{children:e}),Mb="/assets/logo-lg-dark-jDOH3TCC.png",zb="/assets/logo-lg-light-AL8eU1rE.png",Fb=I.nav`
  position: relative;
  top: 0;
  bottom: 0;
  height: 100vh;
  left: 0;
  background-color: ${e=>e.theme.cardBackground};
  width: ${({collapsed:e})=>e?"60px":"200px"};
  align-items: ${({collapsed:e})=>e?"center":"flex-start"};
  overflow: hidden;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${({collapsed:e})=>"0"};
  }
`,Ub=I.div`
  text-align: center;
  display: flex;
  margin: 10px 0 0 10px;
`,Hb=I.img`
  width: ${({collapsed:e})=>e?"40px":"150px"};
  height: auto;
`,Vb=()=>{const[e,t]=E.useState(qp());Dd();const n=localStorage.getItem("theme"),r=()=>{const i=!e;t(i),PS(i)};E.useEffect(()=>{t(qp())},[]);let o;return n==="dark"&&e?o=Po:n==="dark"&&!e?o=zb:e||e?o=kr:o=Mb,m.jsx(Fb,{collapsed:e,children:m.jsx(Ub,{children:m.jsx(Hb,{src:o,alt:"Softmax Tech",collapsed:e,onClick:r})})})},Wb=I.div`
  display: flex;
`,Kb=I.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`,Do=({children:e,title:t})=>{const{toggleTheme:n,theme:r}=Dd(),o=$r(),[i,a]=E.useState(!1),{user:s,token:l,setUser:u,setToken:c}=Dr(),f=Qt(),h=()=>localStorage.getItem("inactive")==="true",w=_=>{localStorage.setItem("inactive",_)},[y,v]=E.useState(h()),[S,d]=E.useState(!0),p=()=>{v(!1)},g=()=>{v(!0),w(!0)};if(E.useEffect(()=>{let _;const x=()=>{_&&clearTimeout(_),_=setTimeout(()=>{g()},6e5)},b=["mousemove","keydown","mousedown","touchstart"];return b.forEach(D=>{window.addEventListener(D,p)}),x(),()=>{b.forEach(D=>{window.removeEventListener(D,p)}),_&&clearTimeout(_)}},[]),E.useEffect(()=>{y&&l&&(o.success("Profile has been locked"),f("/unlock",{state:{inactive:!0}}))},[y,l,o,f]),!l)return m.jsx(r2,{to:"/login"});const C=async _=>{_.preventDefault();try{a(!0);const x="/auth/logout",b=await rt.post(x);u({}),c(null),v(!1),w(!1),o.success(b.data.message)}finally{a(!1)}};return m.jsxs(m.Fragment,{children:[m.jsx(w1,{}),m.jsxs(Wb,{theme:r,children:[m.jsx(Vb,{onLogout:C,collapsed:S,onSidebarToggle:()=>d(!S)}),m.jsxs(Kb,{children:[m.jsx(Ab,{title:t,toggleTheme:n,user:s,onLogout:C,isLoading:i,onSidebarToggle:()=>d(!S)}),m.jsx(Bb,{children:e})]})]})]})},Gb=I.div`
  position: relative;
  width: 100%;
`,Yb=I.div`
  display: flex;
  width: 100%;
`,qb=I.div`
  display: flex;
  margin-top: 20px;
`,Lh=()=>m.jsx(Do,{title:"Dashboard",children:m.jsx(Gb,{children:m.jsx(Yb,{children:m.jsx(qb,{})})})}),Qb=()=>m.jsx(Do,{children:m.jsx("h2",{children:"OAuth Client Page"})}),Jb=()=>m.jsx(Do,{children:m.jsx("h2",{children:"User Form Page"})}),Xb=()=>m.jsx(Do,{title:"Users"}),Zb=I.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>e.theme.mainText};
`,e6=I.p`
  font-size: 16px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,t6=I.p`
  font-size: 14px;
  color: ${e=>e.theme.mainText};
  margin-bottom: 20px;
  text-align: left;
`,n6=I.img`
  width: 80px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`,r6=I.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: block;
`,o6=()=>{const e=Qt(),[t,n]=E.useState(!1),{setUser:r,setToken:o}=Dr(),[i,a]=E.useState({}),s=localStorage.getItem("theme"),l=$r(),u=JSON.parse(localStorage.getItem("user")),c=u&&u.image,f={password:""},[h,w]=E.useState(f);E.useEffect(()=>{Bd(()=>{e("/login")})},[e]);const y=(S,d)=>{w(p=>({...p,[S]:d})),a(p=>({...p,[S]:""}))};Wi(S=>{l.error(S.data.message||"An error occurred")}),Ki(S=>{l.error(S.data.message||"Unauthorized. Please log in.")}),Gi(S=>{l.warning(S.data.message||"Validation Error");const{errors:d}=S.data,p={};Object.keys(d).forEach(g=>{p[g]=d[g].join(`
`)}),a(p)}),Yi(S=>{l.error(S.data.message||"An error occurred")});const v=async S=>{S.preventDefault();try{n(!0);const d="/auth/unlock",p=await rt.post(d,h);r(p.data.data),o(p.data.access_token),w(f),l.success(p.data.message),localStorage.setItem("inactive","false"),e("/")}finally{n(!1)}};return m.jsx(qi,{children:m.jsxs(Qi,{width:"100%",maxwidth:"360px",children:[m.jsx(Zb,{children:"Unlock"}),m.jsx(e6,{children:"Rediscover the Thrill! 🌟"}),m.jsx(t6,{children:"Reconnect now to unleash the wonders of your account and plunge into a realm of boundless possibilities. We're ecstatic to welcome you back. Let the adventure unfold! 🚀"}),c?m.jsx(r6,{src:u.image,alt:u.name}):m.jsx(n6,{src:s==="dark"?Po:kr,alt:"Logo"}),m.jsxs(Qn,{onSubmit:v,children:[m.jsx(Rt,{name:"password",lefticon:m.jsx(vs,{}),type:"password",placeholder:"Enter your password",showPasswordToggle:!0,value:h.password,onChange:(S,d)=>y(S,d),margin:"0 0 5px 0",error:i.password}),m.jsx(Je,{type:"submit",className:"primary",isLoading:t,margin:"5px 0 5px 0",children:"Unlock"})]})]})})},i6="/assets/error-404-Up91klR4.png",a6=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`,s6=I.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.mainText};
`,l6=I.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`,u6=I.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 40px;
`,c6=I(E2)`
  text-decoration: none;
  color: ${e=>e.theme.linkText};
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.theme.linkText};
  }
`,d6=()=>m.jsx(Do,{title:"404 - Not Found",children:m.jsxs(a6,{children:[m.jsx(s6,{children:"404 - Not Found"}),m.jsx(u6,{src:i6,alt:"Not Found Illustration"}),m.jsx(l6,{children:"Oops! It seems like the page you are looking for does not exist."}),m.jsx(c6,{to:"/dashboard",children:"Go back to Home"})]})}),f6=()=>m.jsx(Do,{title:"Profile"}),p6=c2([{path:"/login",element:m.jsx(CC,{})},{path:"/register",element:m.jsx(cb,{})},{path:"/reset-password",element:m.jsx(mb,{})},{path:"/verify",element:m.jsx(Pb,{})},{path:"/dashboard",element:m.jsx(Lh,{})},{path:"/",element:m.jsx(Lh,{})},{path:"/users",element:m.jsx(Xb,{})},{path:"/users/create",element:m.jsx(Jb,{})},{path:"/oauth-clients",element:m.jsx(Qb,{})},{path:"/unlock",element:m.jsx(o6,{})},{path:"/profile",element:m.jsx(f6,{})},{path:"*",element:m.jsx(d6,{})}]);iu.createRoot(document.getElementById("root")).render(m.jsx(Ne.StrictMode,{children:m.jsx(u4,{children:m.jsx(RS,{children:m.jsx(DS,{children:m.jsx(w2,{router:p6})})})})}));
