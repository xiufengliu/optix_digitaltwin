(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sg={exports:{}},ac={},og={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),Nf=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,cg={};function qs(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ug(){}ug.prototype=qs.prototype;function yh(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}var xh=yh.prototype=new ug;xh.constructor=yh;lg(xh,qs.prototype);xh.isPureReactComponent=!0;var If=Array.isArray,dg=Object.prototype.hasOwnProperty,Sh={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:s,ref:o,props:r,_owner:Sh.current}}function Sv(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uf=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bc(o,0):i,If(r)?(n="",t!=null&&(n=t.replace(Uf,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=Sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",If(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bc(s,a);o+=dl(s,e,n,l,r)}else if(l=xv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},hl={transition:null},wv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Sh};function pg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=qs;$e.Fragment=dv;$e.Profiler=fv;$e.PureComponent=yh;$e.StrictMode=hv;$e.Suspense=_v;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;$e.act=pg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dg.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};$e.createElement=fg;$e.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:gv,render:t}};$e.isValidElement=Mh;$e.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Ev}};$e.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};$e.unstable_act=pg;$e.useCallback=function(t,e){return rn.current.useCallback(t,e)};$e.useContext=function(t){return rn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return rn.current.useEffect(t,e)};$e.useId=function(){return rn.current.useId()};$e.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return rn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};$e.useRef=function(t){return rn.current.useRef(t)};$e.useState=function(t){return rn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return rn.current.useTransition()};$e.version="18.3.1";og.exports=$e;var ae=og.exports;const mg=cv(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=ae,Av=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:Rv.current}}ac.Fragment=bv;ac.jsx=gg;ac.jsxs=gg;sg.exports=ac;var M=sg.exports,Uu={},_g={exports:{}},Mn={},vg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var te=N.length;N.push(q);e:for(;0<te;){var oe=te-1>>>1,he=N[oe];if(0<r(he,q))N[oe]=q,N[te]=he,te=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],te=N.pop();if(te!==q){N[0]=te;e:for(var oe=0,he=N.length,De=he>>>1;oe<De;){var D=2*(oe+1)-1,Z=N[D],le=D+1,Q=N[le];if(0>r(Z,te))le<he&&0>r(Q,Z)?(N[oe]=Q,N[le]=te,oe=le):(N[oe]=Z,N[D]=te,oe=D);else if(le<he&&0>r(Q,te))N[oe]=Q,N[le]=te,oe=le;else break e}}return q}function r(N,q){var te=N.sortIndex-q.sortIndex;return te!==0?te:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,g=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(N){if(S=!1,v(N),!g)if(n(l)!==null)g=!0,X(P);else{var q=n(c);q!==null&&ne(y,q.startTime-N)}}function P(N,q){g=!1,S&&(S=!1,u(R),R=-1),p=!0;var te=h;try{for(v(q),f=n(l);f!==null&&(!(f.expirationTime>q)||N&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var he=oe(f.expirationTime<=q);q=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),v(q)}else i(l);f=n(l)}if(f!==null)var De=!0;else{var D=n(c);D!==null&&ne(y,D.startTime-q),De=!1}return De}finally{f=null,h=te,p=!1}}var b=!1,C=null,R=-1,T=5,w=-1;function L(){return!(t.unstable_now()-w<T)}function W(){if(C!==null){var N=t.unstable_now();w=N;var q=!0;try{q=C(!0,N)}finally{q?F():(b=!1,C=null)}}else b=!1}var F;if(typeof _=="function")F=function(){_(W)};else if(typeof MessageChannel!="undefined"){var j=new MessageChannel,K=j.port2;j.port1.onmessage=W,F=function(){K.postMessage(null)}}else F=function(){m(W,0)};function X(N){C=N,b||(b=!0,F())}function ne(N,q){R=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,X(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var te=h;h=q;try{return N()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var te=h;h=N;try{return q()}finally{h=te}},t.unstable_scheduleCallback=function(N,q,te){var oe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?oe+te:oe):te=oe,N){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=te+he,N={id:d++,callback:q,priorityLevel:N,startTime:te,expirationTime:he,sortIndex:-1},te>oe?(N.sortIndex=te,e(c,N),n(l)===null&&N===n(c)&&(S?(u(R),R=-1):S=!0,ne(y,te-oe))):(N.sortIndex=he,e(l,N),g||p||(g=!0,X(P))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var q=h;return function(){var te=h;h=q;try{return N.apply(this,arguments)}finally{h=te}}}})(yg);vg.exports=yg;var Lv=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=ae,Sn=Lv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,Ho={};function Hr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ho[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var Ai=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fu=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Of={};function Iv(t){return Fu.call(Of,t)?!0:Fu.call(Ff,t)?!1:Nv.test(t)?Of[t]=!0:(Ff[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e=="undefined"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),kf=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Cc;function Mo(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function Pc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function Ov(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case Ou:return"Profiler";case Ah:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Sg:return(t._context.displayName||"Context")+".Provider";case bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=zv(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Vu(t,e){Ag(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Eo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function bg(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Rg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,bs=null,Cs=null;function Gf(t){if(t=la(t)){if(typeof qu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=hc(e),qu(t.stateNode,t.type,e))}}function Dg(t){bs?Cs?Cs.push(t):Cs=[t]:bs=t}function Ng(){if(bs){var t=bs,e=Cs;if(Cs=bs=null,Gf(t),e)for(t=0;t<e.length;t++)Gf(e[t])}}function Ig(t,e){return t(e)}function Ug(){}var Lc=!1;function Fg(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return Ig(t,e,n)}finally{Lc=!1,(bs!==null||Cs!==null)&&(Ug(),Ng())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Ku=!1;if(Ai)try{var so={};Object.defineProperty(so,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Ku=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Po=!1,Ll=null,Dl=!1,Zu=null,Gv={onError:function(t){Po=!0,Ll=t}};function Wv(t,e,n,i,r,s,o,a,l){Po=!1,Ll=null,Vv.apply(Gv,arguments)}function jv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),Po){if(Po){var c=Ll;Po=!1,Ll=null}else throw Error(ce(198));Dl||(Dl=!0,Zu=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(Vr(t)!==t)throw Error(ce(188))}function Xv(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wf(r),t;if(s===i)return Wf(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function kg(t){return t=Xv(t),t!==null?zg(t):null}function zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=Sn.unstable_scheduleCallback,jf=Sn.unstable_cancelCallback,Yv=Sn.unstable_shouldYield,$v=Sn.unstable_requestPaint,At=Sn.unstable_now,qv=Sn.unstable_getCurrentPriorityLevel,Ph=Sn.unstable_ImmediatePriority,Hg=Sn.unstable_UserBlockingPriority,Nl=Sn.unstable_NormalPriority,Kv=Sn.unstable_LowPriority,Vg=Sn.unstable_IdlePriority,lc=null,si=null;function Zv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:ey,Jv=Math.log,Qv=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(Jv(t)/Qv|0)|0}var Sa=64,Ma=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wo(a):(s&=o,s!==0&&(i=wo(s)))}else o=n&~r,o!==0?i=wo(o):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ty(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,Dh,Xg,Yg,$g,Qu=!1,Ea=[],qi=null,Ki=null,Zi=null,Wo=new Map,jo=new Map,Wi=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=la(e),e!==null&&Dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return qi=oo(qi,t,e,n,i,r),!0;case"dragenter":return Ki=oo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=oo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,oo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,oo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=Tr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,$g(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=la(n),e!==null&&Dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){fl(t)&&n.delete(e)}function oy(){Qu=!1,qi!==null&&fl(qi)&&(qi=null),Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Wo.forEach(Yf),jo.forEach(Yf)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,oy)))}function Xo(t){function e(r){return ao(r,t)}if(0<Ea.length){ao(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&ao(qi,t),Ki!==null&&ao(Ki,t),Zi!==null&&ao(Zi,t),Wo.forEach(e),jo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&Wi.shift()}var Rs=Li.ReactCurrentBatchConfig,Ul=!0;function ay(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=1,Nh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function ly(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=4,Nh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Nh(t,e,n,i){if(Ul){var r=ed(t,e,n,i);if(r===null)Vc(t,e,i,Fl,n),Xf(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Xf(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=la(r);if(s!==null&&jg(s),s=ed(t,e,n,i),s===null&&Vc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Fl=null;function ed(t,e,n,i){if(Fl=null,t=Rh(i),t=Tr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Ph:return 1;case Hg:return 4;case Nl:case Kv:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var Yi=null,Ih=null,pl=null;function Zg(){if(pl)return pl;var t,e=Ih,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function $f(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:$f,this.isPropagationStopped=$f,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=En(Ks),aa=Et({},Ks,{view:0,detail:0}),cy=En(aa),Nc,Ic,lo,cc=Et({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Nc=t.screenX-lo.screenX,Ic=t.screenY-lo.screenY):Ic=Nc=0,lo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),qf=En(cc),uy=Et({},cc,{dataTransfer:0}),dy=En(uy),hy=Et({},aa,{relatedTarget:0}),Uc=En(hy),fy=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),py=En(fy),my=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=En(my),_y=Et({},Ks,{data:0}),Kf=En(_y),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xy[t])?!!e[t]:!1}function Fh(){return Sy}var My=Et({},aa,{key:function(t){if(t.key){var e=vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ey=En(My),wy=Et({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=En(wy),Ty=Et({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),Ay=En(Ty),by=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=En(by),Ry=Et({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=En(Ry),Ly=[9,13,27,32],Oh=Ai&&"CompositionEvent"in window,Lo=null;Ai&&"documentMode"in document&&(Lo=document.documentMode);var Dy=Ai&&"TextEvent"in window&&!Lo,Jg=Ai&&(!Oh||Lo&&8<Lo&&11>=Lo),Jf=" ",Qf=!1;function Qg(t,e){switch(t){case"keyup":return Ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Ny(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(Qf=!0,Jf);case"textInput":return t=e.data,t===Jf&&Qf?null:t;default:return null}}function Iy(t,e){if(ps)return t==="compositionend"||!Oh&&Qg(t,e)?(t=Zg(),pl=Ih=Yi=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uy[t.type]:e==="textarea"}function t_(t,e,n,i){Dg(i),e=Ol(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,Yo=null;function Fy(t){h_(t,0)}function uc(t){var e=_s(t);if(Tg(e))return t}function Oy(t,e){if(t==="change")return e}var n_=!1;if(Ai){var Fc;if(Ai){var Oc="oninput"in document;if(!Oc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Oc=typeof tp.oninput=="function"}Fc=Oc}else Fc=!1;n_=Fc&&(!document.documentMode||9<document.documentMode)}function np(){Do&&(Do.detachEvent("onpropertychange",i_),Yo=Do=null)}function i_(t){if(t.propertyName==="value"&&uc(Yo)){var e=[];t_(e,Yo,t,Rh(t)),Fg(Fy,e)}}function ky(t,e,n){t==="focusin"?(np(),Do=e,Yo=n,Do.attachEvent("onpropertychange",i_)):t==="focusout"&&np()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Yo)}function By(t,e){if(t==="click")return uc(e)}function Hy(t,e){if(t==="input"||t==="change")return uc(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Vy;function $o(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=s_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(i!==null&&kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wy=Ai&&"documentMode"in document&&11>=document.documentMode,ms=null,td=null,No=null,nd=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ms==null||ms!==Pl(i)||(i=ms,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&$o(No,i)||(No=i,i=Ol(td,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},kc={},o_={};Ai&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function dc(t){if(kc[t])return kc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return kc[t]=e[n];return t}var a_=dc("animationend"),l_=dc("animationiteration"),c_=dc("animationstart"),u_=dc("transitionend"),d_=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){d_.set(t,e),Hr(e,[t])}for(var zc=0;zc<op.length;zc++){var Bc=op[zc],jy=Bc.toLowerCase(),Xy=Bc[0].toUpperCase()+Bc.slice(1);ur(jy,"on"+Xy)}ur(a_,"onAnimationEnd");ur(l_,"onAnimationIteration");ur(c_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(u_,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}}}if(Dl)throw t=Zu,Dl=!1,Zu=null,t}function _t(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Aa]){t[Aa]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,Hc("selectionchange",!1,e))}}function f_(t,e,n,i){switch(Kg(e)){case 1:var r=ay;break;case 4:r=ly;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fg(function(){var c=s,d=Rh(n),f=[];e:{var h=d_.get(t);if(h!==void 0){var p=Uh,g=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=Ey;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ay;break;case a_:case l_:case c_:p=py;break;case u_:p=Cy;break;case"scroll":p=cy;break;case"wheel":p=Py;break;case"copy":case"cut":case"paste":p=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zf}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Go(_,u),y!=null&&S.push(Ko(_,y,v)))),m)break;_=_.return}0<S.length&&(h=new p(h,g,null,n,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==$u&&(g=n.relatedTarget||n.fromElement)&&(Tr(g)||g[bi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Tr(g):null,g!==null&&(m=Vr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=qf,y="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Zf,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?h:_s(p),v=g==null?h:_s(g),h=new S(y,_+"leave",p,n,d),h.target=m,h.relatedTarget=v,y=null,Tr(d)===c&&(S=new S(u,_+"enter",g,n,d),S.target=v,S.relatedTarget=m,y=S),m=y,p&&g)t:{for(S=p,u=g,_=0,v=S;v;v=jr(v))_++;for(v=0,y=u;y;y=jr(y))v++;for(;0<_-v;)S=jr(S),_--;for(;0<v-_;)u=jr(u),v--;for(;_--;){if(S===u||u!==null&&S===u.alternate)break t;S=jr(S),u=jr(u)}S=null}else S=null;p!==null&&lp(f,h,p,S,!1),g!==null&&m!==null&&lp(f,m,g,S,!0)}}e:{if(h=c?_s(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=Oy;else if(ep(h))if(n_)P=Hy;else{P=zy;var b=ky}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=By);if(P&&(P=P(t,c))){t_(f,P,n,d);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Gu(h,"number",h.value)}switch(b=c?_s(c):window,t){case"focusin":(ep(b)||b.contentEditable==="true")&&(ms=b,td=c,No=null);break;case"focusout":No=td=ms=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,sp(f,n,d);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":sp(f,n,d)}var C;if(Oh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ps?Qg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Jg&&n.locale!=="ko"&&(ps||R!=="onCompositionStart"?R==="onCompositionEnd"&&ps&&(C=Zg()):(Yi=d,Ih="value"in Yi?Yi.value:Yi.textContent,ps=!0)),b=Ol(c,R),0<b.length&&(R=new Kf(R,t,null,n,d),f.push({event:R,listeners:b}),C?R.data=C:(C=e_(n),C!==null&&(R.data=C)))),(C=Dy?Ny(t,n):Iy(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(d=new Kf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}h_(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $y=/\r\n?/g,qy=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(qy,"")}function ba(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(ce(425))}function kl(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof up!="undefined"?function(t){return up.resolve(null).then(t).catch(Jy)}:od;function Jy(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Zs,Zo="__reactProps$"+Zs,bi="__reactContainer$"+Zs,ad="__reactEvents$"+Zs,Qy="__reactListeners$"+Zs,ex="__reactHandles$"+Zs;function Tr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[ni])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[ni]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function hc(t){return t[Zo]||null}var ld=[],vs=-1;function dr(t){return{current:t}}function vt(t){0>vs||(t.current=ld[vs],ld[vs]=null,vs--)}function ht(t,e){vs++,ld[vs]=t.current,t.current=e}var ar={},Kt=dr(ar),dn=dr(!1),Dr=ar;function Os(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function zl(){vt(dn),vt(Kt)}function hp(t,e,n){if(Kt.current!==ar)throw Error(ce(168));ht(Kt,e),ht(dn,n)}function p_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,kv(t)||"Unknown",r));return Et({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Dr=Kt.current,ht(Kt,t),ht(dn,dn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=p_(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,vt(dn),vt(Kt),ht(Kt,t)):vt(dn),ht(dn,n)}var gi=null,fc=!1,Wc=!1;function m_(t){gi===null?gi=[t]:gi.push(t)}function tx(t){fc=!0,m_(t)}function hr(){if(!Wc&&gi!==null){Wc=!0;var t=0,e=rt;try{var n=gi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,fc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Bg(Ph,hr),r}finally{rt=e,Wc=!1}}return null}var ys=[],xs=0,Hl=null,Vl=0,Rn=[],Pn=0,Nr=null,yi=1,xi="";function xr(t,e){ys[xs++]=Vl,ys[xs++]=Hl,Hl=t,Vl=e}function g_(t,e,n){Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Nr,Nr=t;var i=yi;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Yn(e)+r|n<<r|i,xi=s+t}else yi=1<<s|n<<r|i,xi=t}function zh(t){t.return!==null&&(xr(t,1),g_(t,1,0))}function Bh(t){for(;t===Hl;)Hl=ys[--xs],ys[xs]=null,Vl=ys[--xs],ys[xs]=null;for(;t===Nr;)Nr=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null,yi=Rn[--Pn],Rn[Pn]=null}var xn=null,yn=null,xt=!1,jn=null;function __(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(xt){var e=yn;if(e){var n=e;if(!pp(t,e)){if(cd(t))throw Error(ce(418));e=Ji(n.nextSibling);var i=xn;e&&pp(t,e)?__(i,n):(t.flags=t.flags&-4097|2,xt=!1,xn=t)}}else{if(cd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,xt=!1,xn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ca(t){if(t!==xn)return!1;if(!xt)return mp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=yn)){if(cd(t))throw v_(),Error(ce(418));for(;e;)__(t,e),e=Ji(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?Ji(t.stateNode.nextSibling):null;return!0}function v_(){for(var t=yn;t;)t=Ji(t.nextSibling)}function ks(){yn=xn=null,xt=!1}function Hh(t){jn===null?jn=[t]:jn.push(t)}var nx=Li.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function y_(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=nr(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,y){return _===null||_.tag!==6?(_=Zc(v,u.mode,y),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,y){var P=v.type;return P===fs?d(u,_,v.props.children,y,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vi&&gp(P)===_.type)?(y=r(_,v.props),y.ref=co(u,_,v),y.return=u,y):(y=Ml(v.type,v.key,v.props,null,u.mode,y),y.ref=co(u,_,v),y.return=u,y)}function c(u,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Jc(v,u.mode,y),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function d(u,_,v,y,P){return _===null||_.tag!==7?(_=Lr(v,u.mode,y,P),_.return=u,_):(_=r(_,v),_.return=u,_)}function f(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case va:return v=Ml(_.type,_.key,_.props,null,u.mode,v),v.ref=co(u,null,_),v.return=u,v;case hs:return _=Jc(_,u.mode,v),_.return=u,_;case Vi:var y=_._init;return f(u,y(_._payload),v)}if(Eo(_)||ro(_))return _=Lr(_,u.mode,v,null),_.return=u,_;Ra(u,_)}return null}function h(u,_,v,y){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return v.key===P?l(u,_,v,y):null;case hs:return v.key===P?c(u,_,v,y):null;case Vi:return P=v._init,h(u,_,P(v._payload),y)}if(Eo(v)||ro(v))return P!==null?null:d(u,_,v,y,null);Ra(u,v)}return null}function p(u,_,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(_,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case va:return u=u.get(y.key===null?v:y.key)||null,l(_,u,y,P);case hs:return u=u.get(y.key===null?v:y.key)||null,c(_,u,y,P);case Vi:var b=y._init;return p(u,_,v,b(y._payload),P)}if(Eo(y)||ro(y))return u=u.get(v)||null,d(_,u,y,P,null);Ra(_,y)}return null}function g(u,_,v,y){for(var P=null,b=null,C=_,R=_=0,T=null;C!==null&&R<v.length;R++){C.index>R?(T=C,C=null):T=C.sibling;var w=h(u,C,v[R],y);if(w===null){C===null&&(C=T);break}t&&C&&w.alternate===null&&e(u,C),_=s(w,_,R),b===null?P=w:b.sibling=w,b=w,C=T}if(R===v.length)return n(u,C),xt&&xr(u,R),P;if(C===null){for(;R<v.length;R++)C=f(u,v[R],y),C!==null&&(_=s(C,_,R),b===null?P=C:b.sibling=C,b=C);return xt&&xr(u,R),P}for(C=i(u,C);R<v.length;R++)T=p(C,u,R,v[R],y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?R:T.key),_=s(T,_,R),b===null?P=T:b.sibling=T,b=T);return t&&C.forEach(function(L){return e(u,L)}),xt&&xr(u,R),P}function S(u,_,v,y){var P=ro(v);if(typeof P!="function")throw Error(ce(150));if(v=P.call(v),v==null)throw Error(ce(151));for(var b=P=null,C=_,R=_=0,T=null,w=v.next();C!==null&&!w.done;R++,w=v.next()){C.index>R?(T=C,C=null):T=C.sibling;var L=h(u,C,w.value,y);if(L===null){C===null&&(C=T);break}t&&C&&L.alternate===null&&e(u,C),_=s(L,_,R),b===null?P=L:b.sibling=L,b=L,C=T}if(w.done)return n(u,C),xt&&xr(u,R),P;if(C===null){for(;!w.done;R++,w=v.next())w=f(u,w.value,y),w!==null&&(_=s(w,_,R),b===null?P=w:b.sibling=w,b=w);return xt&&xr(u,R),P}for(C=i(u,C);!w.done;R++,w=v.next())w=p(C,u,R,w.value,y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?R:w.key),_=s(w,_,R),b===null?P=w:b.sibling=w,b=w);return t&&C.forEach(function(W){return e(u,W)}),xt&&xr(u,R),P}function m(u,_,v,y){if(typeof v=="object"&&v!==null&&v.type===fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case va:e:{for(var P=v.key,b=_;b!==null;){if(b.key===P){if(P=v.type,P===fs){if(b.tag===7){n(u,b.sibling),_=r(b,v.props.children),_.return=u,u=_;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vi&&gp(P)===b.type){n(u,b.sibling),_=r(b,v.props),_.ref=co(u,b,v),_.return=u,u=_;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===fs?(_=Lr(v.props.children,u.mode,y,v.key),_.return=u,u=_):(y=Ml(v.type,v.key,v.props,null,u.mode,y),y.ref=co(u,_,v),y.return=u,u=y)}return o(u);case hs:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Jc(v,u.mode,y),_.return=u,u=_}return o(u);case Vi:return b=v._init,m(u,_,b(v._payload),y)}if(Eo(v))return g(u,_,v,y);if(ro(v))return S(u,_,v,y);Ra(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=Zc(v,u.mode,y),_.return=u,u=_),o(u)):n(u,_)}return m}var zs=y_(!0),x_=y_(!1),Gl=dr(null),Wl=null,Ss=null,Vh=null;function Gh(){Vh=Ss=Wl=null}function Wh(t){var e=Gl.current;vt(Gl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Wl=t,Vh=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Vh!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Wl===null)throw Error(ce(308));Ss=t,Wl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ar=null;function jh(t){Ar===null?Ar=[t]:Ar.push(t)}function S_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,S=a;switch(h=e,p=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Et({},f,h);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=f}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ca={},oi=dr(ca),Jo=dr(ca),Qo=dr(ca);function br(t){if(t===ca)throw Error(ce(174));return t}function Yh(t,e){switch(ht(Qo,e),ht(Jo,t),ht(oi,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}vt(oi),ht(oi,e)}function Bs(){vt(oi),vt(Jo),vt(Qo)}function E_(t){br(Qo.current);var e=br(oi.current),n=ju(e,t.type);e!==n&&(ht(Jo,t),ht(oi,n))}function $h(t){Jo.current===t&&(vt(oi),vt(Jo))}var St=dr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function qh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var _l=Li.ReactCurrentDispatcher,Xc=Li.ReactCurrentBatchConfig,Ir=0,Mt=null,Lt=null,kt=null,Yl=!1,Io=!1,ea=0,ix=0;function jt(){throw Error(ce(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Zh(t,e,n,i,r,s){if(Ir=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?ax:lx,t=n(i,r),Io){s=0;do{if(Io=!1,ea=0,25<=s)throw Error(ce(301));s+=1,kt=Lt=null,e.updateQueue=null,_l.current=cx,t=n(i,r)}while(Io)}if(_l.current=$l,e=Lt!==null&&Lt.next!==null,Ir=0,kt=Lt=Mt=null,Yl=!1,e)throw Error(ce(300));return t}function Jh(){var t=ea!==0;return ea=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Mt.memoizedState=kt=t:kt=kt.next=t,kt}function On(){if(Lt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?Mt.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(ce(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?Mt.memoizedState=kt=t:kt=kt.next=t}return kt}function ta(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w_(){}function T_(t,e){var n=Mt,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Qh(C_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,na(9,b_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Ir&30||A_(n,e,r)}return r}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&P_(t)}function C_(t,e,n){return n(function(){R_(e)&&P_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function P_(t){var e=Ci(t,1);e!==null&&$n(e,t,1,-1)}function yp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,Mt,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function L_(){return On().memoizedState}function vl(t,e,n,i){var r=ei();Mt.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Kh(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=na(1|e,n,s,i)}function xp(t,e){return vl(8390656,8,t,e)}function Qh(t,e){return pc(2048,8,t,e)}function D_(t,e){return pc(4,2,t,e)}function N_(t,e){return pc(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,I_.bind(null,e,t),n)}function ef(){}function F_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return Ir&21?(Kn(n,e)||(n=Gg(),Mt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function rx(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{rt=n,Xc.transition=i}}function z_(){return On().memoizedState}function sx(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))H_(e,n);else if(n=S_(t,e,n,i),n!==null){var r=tn();$n(n,t,i,r),V_(n,e,i)}}function ox(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))H_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S_(t,e,r,i),n!==null&&(r=tn(),$n(n,t,i,r),V_(n,e,i))}}function B_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function H_(t,e){Io=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var $l={readContext:Fn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},ax={readContext:Fn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:ef,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=rx.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ei();if(xt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Ir&30||A_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xp(C_.bind(null,i,s,t),[t]),i.flags|=2048,na(9,b_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=zt.identifierPrefix;if(xt){var n=xi,i=yi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Fn,useCallback:F_,useContext:Fn,useEffect:Qh,useImperativeHandle:U_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:Yc,useRef:L_,useState:function(){return Yc(ta)},useDebugValue:ef,useDeferredValue:function(t){var e=On();return k_(e,Lt.memoizedState,t)},useTransition:function(){var t=Yc(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1},cx={readContext:Fn,useCallback:F_,useContext:Fn,useEffect:Qh,useImperativeHandle:U_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:$c,useRef:L_,useState:function(){return $c(ta)},useDebugValue:ef,useDeferredValue:function(t){var e=On();return Lt===null?e.memoizedState=t:k_(e,Lt.memoizedState,t)},useTransition:function(){var t=$c(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=tr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&($n(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=tr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&($n(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=tr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&($n(e,t,i,n),gl(e,t,i))}};function Sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function G_(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=hn(e)?Dr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=hn(e)?Dr:Kt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,wd=i),pd(t,e)},n}function j_(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var dx=Li.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?x_(e,null,n,i):zs(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Zh(t,e,n,i,s,r),n=Jh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(xt&&n&&zh(e),e.flags|=1,en(t,e,i,r),e.child)}function bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X_(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function X_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return md(t,e,n,i,r)}function Y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Es,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Es,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Es,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Es,vn),vn|=i;return en(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=hn(n)?Dr:Kt.current;return s=Os(e,s),Ps(e,r),n=Zh(t,e,n,i,s,r),i=Jh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(xt&&i&&zh(e),e.flags|=1,en(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(hn(n)){var s=!0;Bl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)yl(t,e),G_(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=hn(n)?Dr:Kt.current,c=Os(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),Gi=!1;var h=e.memoizedState;o.state=h,jl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||Gi?(typeof d=="function"&&(hd(e,n,d,i),l=e.memoizedState),(a=Gi||Sp(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,M_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=hn(n)?Dr:Kt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mp(e,o,i,l),Gi=!1,h=e.memoizedState,o.state=h,jl(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||dn.current||Gi?(typeof p=="function"&&(hd(e,n,p,i),g=e.memoizedState),(c=Gi||Sp(e,n,c,i,h,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fp(e,n,!1),Ri(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Yh(t,e.containerInfo)}function Rp(t,e,n,i,r){return ks(),Hh(r),e.flags|=256,en(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=_d,t):tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tf(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Hh(i),zs(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qc(Error(ce(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=_d,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=qc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),$n(i,t,r,-1))}return lf(),i=qc(Error(ce(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Ji(r.nextSibling),xn=e,xt=!0,jn=null,t!==null&&(Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Nr,yi=t.id,xi=t.overflow,Nr=e),e=tf(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:q_(e),ks();break;case 5:E_(e);break;case 1:hn(e.type)&&Bl(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(ht(St,St.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return Ri(t,e,n)}var J_,yd,Q_,e0;J_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(oi.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}Xu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};e0=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function px(t,e,n){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&zl(),Xt(e),null;case 3:return i=e.stateNode,Bs(),vt(dn),vt(Kt),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(bd(jn),jn=null))),yd(t,e),Xt(e),null;case 5:$h(e);var r=br(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Xt(e),null}if(t=br(oi.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)_t(To[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":zf(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Hf(i,s),_t("invalid",i)}Xu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":ya(i),Bf(i,s,!0);break;case"textarea":ya(i),Vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Zo]=i,J_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)_t(To[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":zf(t,i),r=Hu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Hf(t,i),r=Wu(t,i),_t("invalid",t);break;default:r=i}Xu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":ya(t),Bf(t,i,!1);break;case"textarea":ya(t),Vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=br(Qo.current),br(oi.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Xt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&yn!==null&&e.mode&1&&!(e.flags&128))v_(),ks(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ni]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(bd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Dt===0&&(Dt=3):lf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Bs(),yd(t,e),t===null&&qo(e.stateNode.containerInfo),Xt(e),null;case 10:return Wh(e.type._context),Xt(e),null;case 17:return hn(e.type)&&zl(),Xt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Vs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Xt(e),null}else 2*At()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function mx(t,e){switch(Bh(e),e.tag){case 1:return hn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),vt(dn),vt(Kt),qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $h(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Bs(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var La=!1,qt=!1,gx=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Lp=!1;function _x(t,e){if(id=Ul,t=s_(),kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Ul=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Gn(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=Lp,Lp=!1,g}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Zo],delete e[ad],delete e[Qy],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Bt=null,Wn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:qt||Ms(n,e);case 6:var i=Bt,r=Wn;Bt=null,Ui(t,e,n),Bt=i,Wn=r,Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Xo(t)):Gc(Bt,n.stateNode));break;case 4:i=Bt,r=Wn,Bt=n.stateNode.containerInfo,Wn=!0,Ui(t,e,n),Bt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!qt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ui(t,e,n),qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(i){var r=Ax.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Wn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Bt===null)throw Error(ce(160));i0(s,o,r),Bt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(S){wt(t,t.return,S)}try{Uo(5,t,t.return)}catch(S){wt(t,t.return,S)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(S){wt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ag(r,s),Yu(a,o);var c=Yu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Lg(r,f):d==="dangerouslySetInnerHTML"?Rg(r,f):d==="children"?Vo(r,f):Th(r,d,f,c)}switch(a){case"input":Vu(r,s);break;case"textarea":bg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(S){wt(t,t.return,S)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){wt(t,t.return,S)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(S){wt(t,t.return,S)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sf=At())),i&4&&Np(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,zn(e,t),qt=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(we=t,d=t.child;d!==null;){for(f=we=d;we!==null;){switch(h=we,p=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:Ms(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){wt(i,n,S)}}break;case 5:Ms(h,h.return);break;case 22:if(h.memoizedState!==null){Up(f);continue}}p!==null?(p.return=h,we=p):Up(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(S){wt(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){wt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&Np(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=Dp(t);Ed(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);Md(t,a,o);break;default:throw Error(ce(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){we=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=La;var c=qt;if(La=o,(qt=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,we=l):Fp(r);for(;s!==null;)we=s,s0(s),s=s.sibling;we=r,La=a,qt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Ip(t)}}function Ip(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}qt||e.flags&512&&Sd(e)}catch(h){wt(e,e.return,h)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Up(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Fp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Sd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var yx=Math.ceil,ql=Li.ReactCurrentDispatcher,nf=Li.ReactCurrentOwner,In=Li.ReactCurrentBatchConfig,Je=0,zt=null,Ct=null,Vt=0,vn=0,Es=dr(0),Dt=0,ia=null,Ur=0,_c=0,rf=0,Fo=null,cn=null,sf=0,Vs=1/0,mi=null,Kl=!1,wd=null,er=null,Da=!1,$i=null,Zl=0,Oo=0,Td=null,xl=-1,Sl=0;function tn(){return Je&6?At():xl!==-1?xl:xl=At()}function tr(t){return t.mode&1?Je&2&&Vt!==0?Vt&-Vt:nx.transition!==null?(Sl===0&&(Sl=Gg()),Sl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Kg(t.type)),t):1}function $n(t,e,n,i){if(50<Oo)throw Oo=0,Td=null,Error(ce(185));oa(t,n,i),(!(Je&2)||t!==zt)&&(t===zt&&(!(Je&2)&&(_c|=n),Dt===4&&ji(t,Vt)),fn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=At()+500,fc&&hr()))}function fn(t,e){var n=t.callbackNode;ny(t,e);var i=Il(t,t===zt?Vt:0);if(i===0)n!==null&&jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jf(n),e===1)t.tag===0?tx(Op.bind(null,t)):m_(Op.bind(null,t)),Zy(function(){!(Je&6)&&hr()}),n=null;else{switch(Wg(i)){case 1:n=Ph;break;case 4:n=Hg;break;case 16:n=Nl;break;case 536870912:n=Vg;break;default:n=Nl}n=f0(n,o0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o0(t,e){if(xl=-1,Sl=0,Je&6)throw Error(ce(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Il(t,t===zt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=Je;Je|=2;var s=l0();(zt!==t||Vt!==e)&&(mi=null,Vs=At()+500,Pr(t,e));do try{Mx();break}catch(a){a0(t,a)}while(!0);Gh(),ql.current=s,Je=r,Ct!==null?e=0:(zt=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=ia,Pr(t,0),ji(t,i),fn(t,At()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!xx(r)&&(e=Jl(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=ia,Pr(t,0),ji(t,i),fn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Sr(t,cn,mi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=sf+500-At(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=od(Sr.bind(null,t,cn,mi),e);break}Sr(t,cn,mi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=od(Sr.bind(null,t,cn,mi),i);break}Sr(t,cn,mi);break;case 5:Sr(t,cn,mi);break;default:throw Error(ce(329))}}}return fn(t,At()),t.callbackNode===n?o0.bind(null,t):null}function Ad(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=cn,cn=n,e!==null&&bd(e)),t}function bd(t){cn===null?cn=t:cn.push.apply(cn,t)}function xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~rf,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(Je&6)throw Error(ce(327));Ls();var e=Il(t,0);if(!(e&1))return fn(t,At()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=ia,Pr(t,0),ji(t,e),fn(t,At()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,cn,mi),fn(t,At()),null}function of(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=At()+500,fc&&hr())}}function Fr(t){$i!==null&&$i.tag===0&&!(Je&6)&&Ls();var e=Je;Je|=1;var n=In.transition,i=rt;try{if(In.transition=null,rt=1,t)return t()}finally{rt=i,In.transition=n,Je=e,!(Je&6)&&hr()}}function af(){vn=Es.current,vt(Es)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Bs(),vt(dn),vt(Kt),qh();break;case 5:$h(i);break;case 4:Bs();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Wh(i.type._context);break;case 22:case 23:af()}n=n.return}if(zt=t,Ct=t=nr(t.current,null),Vt=vn=e,Dt=0,ia=null,rf=_c=Ur=0,cn=Fo=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function a0(t,e){do{var n=Ct;try{if(Gh(),_l.current=$l,Yl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(Ir=0,kt=Lt=Mt=null,Io=!1,ea=0,nf.current=null,n===null||n.return===null){Dt=1,ia=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wp(o);if(p!==null){p.flags&=-257,Tp(p,o,a,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){Ep(s,c,e),lf();break e}l=Error(ce(426))}}else if(xt&&a.mode&1){var m=wp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,o,a,s,e),Hh(Hs(l,a));break e}}s=l=Hs(l,a),Dt!==4&&(Dt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=W_(s,l,e);_p(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(er===null||!er.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=j_(s,a,e);_p(s,y);break e}}s=s.return}while(s!==null)}u0(n)}catch(P){e=P,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function l0(){var t=ql.current;return ql.current=$l,t===null?$l:t}function lf(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(Ur&268435455)&&!(_c&268435455)||ji(zt,Vt)}function Jl(t,e){var n=Je;Je|=2;var i=l0();(zt!==t||Vt!==e)&&(mi=null,Pr(t,e));do try{Sx();break}catch(r){a0(t,r)}while(!0);if(Gh(),Je=n,ql.current=i,Ct!==null)throw Error(ce(261));return zt=null,Vt=0,Dt}function Sx(){for(;Ct!==null;)c0(Ct)}function Mx(){for(;Ct!==null&&!Yv();)c0(Ct)}function c0(t){var e=h0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?u0(t):Ct=e,nf.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=px(n,e,vn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function Sr(t,e,n){var i=rt,r=In.transition;try{In.transition=null,rt=1,Ex(t,e,n,i)}finally{In.transition=r,rt=i}return null}function Ex(t,e,n,i){do Ls();while($i!==null);if(Je&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===zt&&(Ct=zt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,f0(Nl,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=rt;rt=1;var a=Je;Je|=4,nf.current=null,_x(t,n),r0(n,t),Gy(rd),Ul=!!id,rd=id=null,t.current=n,vx(n),$v(),Je=a,rt=o,In.transition=s}else t.current=n;if(Da&&(Da=!1,$i=t,Zl=r),s=t.pendingLanes,s===0&&(er=null),Zv(n.stateNode),fn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=wd,wd=null,t;return Zl&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Td?Oo++:(Oo=0,Td=t):Oo=0,hr(),null}function Ls(){if($i!==null){var t=Wg(Zl),e=In.transition,n=rt;try{if(In.transition=null,rt=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Zl=0,Je&6)throw Error(ce(331));var r=Je;for(Je|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var d=we;switch(d.tag){case 0:case 11:case 15:Uo(8,d,s)}var f=d.child;if(f!==null)f.return=d,we=f;else for(;we!==null;){d=we;var h=d.sibling,p=d.return;if(t0(d),d===c){we=null;break}if(h!==null){h.return=p,we=h;break}we=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var _=t.current;for(we=_;we!==null;){o=we;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,we=v;else e:for(o=_;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(P){wt(a,a.return,P)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(Je=r,hr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{rt=n,In.transition=e}}return!1}function kp(t,e,n){e=Hs(n,e),e=W_(t,e,1),t=Qi(t,e,1),e=tn(),t!==null&&(oa(t,1,e),fn(t,e))}function wt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Hs(n,t),t=j_(e,t,1),e=Qi(e,t,1),t=tn(),e!==null&&(oa(e,1,t),fn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Vt&n)===n&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>At()-sf?Pr(t,0):rf|=n),fn(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=tn();t=Ci(t,e),t!==null&&(oa(t,e,n),fn(t,n))}function Tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),d0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,fx(t,e,n);un=!!(t.flags&131072)}else un=!1,xt&&e.flags&1048576&&g_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=Os(e,Kt.current);Ps(e,n),r=Zh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xh(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&zh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cx(i),t=Gn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=bp(null,e,i,Gn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Cp(t,e,i,r,n);case 3:e:{if(q_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,M_(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ce(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ce(424)),e),e=Rp(t,e,i,n,r);break e}else for(yn=Ji(e.stateNode.containerInfo.firstChild),xn=e,xt=!0,jn=null,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return E_(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sd(i,r)?o=null:s!==null&&sd(i,s)&&(e.flags|=32),$_(t,e),en(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return K_(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ap(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Gl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Fn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),bp(t,e,i,r,n);case 15:return X_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yl(t,e),e.tag=1,hn(i)?(t=!0,Bl(e)):t=!1,Ps(e,n),G_(e,i,r),fd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return Z_(t,e,n);case 22:return Y_(t,e,n)}throw Error(ce(156,e.tag))};function f0(t,e){return Bg(t,e)}function bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new bx(t,e,n,i)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bh)return 11;if(t===Ch)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Lr(n.children,r,s,e);case Ah:o=8,r|=8;break;case Ou:return t=Nn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case ku:return t=Nn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=Nn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case Eg:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sg:o=10;break e;case Mg:o=9;break e;case bh:o=11;break e;case Ch:o=14;break e;case Vi:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,i,r,s,o,a,l){return t=new Rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),t}function Px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return ar;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(hn(n))return p_(t,n,e)}return e}function m0(t,e,n,i,r,s,o,a,l){return t=uf(n,i,!0,t,r,s,o,a,l),t.context=p0(null),n=t.current,i=tn(),r=tr(n),s=wi(i,r),s.callback=e!=null?e:null,Qi(n,s,r),t.current.lanes=r,oa(t,r,i),fn(t,i),t}function yc(t,e,n,i){var r=e.current,s=tn(),o=tr(r);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&($n(t,r,o,s),gl(t,r,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Lx(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}xc.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));yc(t,e,null,null)};xc.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){yc(null,t,null,null)}),e[bi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&qg(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Dx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ql(o);s.call(c)}}var o=m0(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[bi]=o.current,qo(t.nodeType===8?t.parentNode:t),Fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ql(l);a.call(c)}}var l=uf(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[bi]=l.current,qo(t.nodeType===8?t.parentNode:t),Fr(function(){yc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}yc(e,o,t,r)}else o=Dx(n,e,t,r,i);return Ql(o)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Lh(e,n|1),fn(e,At()),!(Je&6)&&(Vs=At()+500,hr()))}break;case 13:Fr(function(){var i=Ci(t,1);if(i!==null){var r=tn();$n(i,t,1,r)}}),df(t,1)}};Dh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=tn();$n(e,t,134217728,n)}df(t,134217728)}};Xg=function(t){if(t.tag===13){var e=tr(t),n=Ci(t,e);if(n!==null){var i=tn();$n(n,t,e,i)}df(t,e)}};Yg=function(){return rt};$g=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};qu=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(ce(90));Tg(i),Vu(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};Ig=of;Ug=Fr;var Nx={usingClientEntryPoint:!1,Events:[la,_s,hc,Dg,Ng,of]},ho={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{lc=Na.inject(Ix),si=Na}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(ce(200));return Px(t,e,null,n)};Mn.createRoot=function(t,e){if(!ff(t))throw Error(ce(299));var n=!1,i="",r=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,qo(t.nodeType===8?t.parentNode:t),new hf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Fr(t)};Mn.hydrate=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=g0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[bi]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};Mn.render=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(ce(40));return t._reactRootContainer?(Fr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Mn.unstable_batchedUpdates=of;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Mc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),_g.exports=Mn;var Ux=_g.exports,Hp=Ux;Uu.createRoot=Hp.createRoot,Uu.hydrateRoot=Hp.hydrateRoot;function Fx({runs:t,selectedId:e,onSelect:n,onRefresh:i,onDelete:r,isLoading:s}){return M.jsxs("aside",{className:"sidebar",children:[M.jsxs("div",{className:"header",children:[M.jsx("h2",{children:"Simulation Runs"}),M.jsx("button",{className:"button",onClick:i,disabled:s,children:"Refresh"})]}),M.jsxs("div",{style:{marginTop:"1rem"},children:[t.length===0&&M.jsx("p",{children:"No runs yet. Create one from the backend."}),t.map(o=>{var a;return M.jsxs("div",{className:`run-item ${e===o.id?"active":""} run-item--with-icon`,onClick:()=>n(o.id),children:[M.jsxs("div",{className:"run-item__content",children:[M.jsx("strong",{children:(a=o.name)!=null?a:"Untitled Run"}),M.jsxs("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:["Status: ",o.status]}),M.jsxs("div",{style:{fontSize:"0.75rem",marginTop:"0.4rem",color:"#64748b"},children:["Updated: ",new Date(o.updated_at).toLocaleString()]})]}),r&&M.jsx("button",{className:"icon-btn",title:"Delete run","aria-label":"Delete run",onClick:l=>{l.stopPropagation(),confirm("Delete this run? This cannot be undone.")&&r(o.id)},children:"🗑"})]},o.id)})]})]})}function Ox({apiBase:t,runId:e}){const[n,i]=ae.useState(null),[r,s]=ae.useState(null),[o,a]=ae.useState(null),[l,c]=ae.useState(!1),[d,f]=ae.useState(null),[h,p]=ae.useState(!0),[g,S]=ae.useState(!0),[m,u]=ae.useState(500);ae.useState(null)[0];const[_,v]=ae.useState(null);return ae.useEffect(()=>{if(!e){i(null),s(null);return}const y=new AbortController,P=R=>{const T=t.endsWith("/")?t:t+"/",w=R.replace(/^\/+/,"");return new URL(w,T).toString()},b=async()=>{var R;try{const T=P(`/runs/${e}/ped`),w=P(`/runs/${e}/energy_series?limit=${encodeURIComponent(m)}`),[L,W]=await Promise.all([fetch(T,{signal:y.signal}),fetch(w,{signal:y.signal})]);if(!L.ok){const K=await L.text();a(`PED fetch failed (${L.status}): ${K}`),i(null),s(null);return}if(!W.ok){const K=await W.text();a(`Series fetch failed (${W.status}): ${K}`),i(null),s(null);return}const F=await L.json(),j=await W.json();if(typeof F!="object"||F===null||typeof F.total_gen_mwh!="number"){a("PED payload invalid"),i(null),s(null);return}if(a(null),i(F),s(j),l){const K=P(`/runs/${e}/optimize`),X=await fetch(K,{signal:y.signal});X.ok?f(await X.json()):f(null)}else f(null)}catch(T){a((R=T==null?void 0:T.message)!=null?R:String(T)),i(null),s(null)}};b();const C=setInterval(b,3e3);return()=>{clearInterval(C),y.abort()}},[t,e,l,m]),M.jsxs("div",{className:"metric-card",style:{gridColumn:"1 / -1"},children:[M.jsx("div",{className:"metric-label",children:"PED (Positive Energy District)"}),M.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:8,alignItems:"center",flexWrap:"wrap"},children:[M.jsx("button",{className:"button",onClick:()=>c(y=>!y),"aria-pressed":l,"aria-label":"Toggle dispatch overlays",children:l?"Hide Dispatch":"Show Dispatch"}),M.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[M.jsx("input",{type:"checkbox",checked:h,onChange:y=>p(y.target.checked),"aria-label":"Toggle generation series"})," Gen"]}),M.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[M.jsx("input",{type:"checkbox",checked:g,onChange:y=>S(y.target.checked),"aria-label":"Toggle load series"})," Load"]}),M.jsxs("label",{title:"Timeframe",style:{display:"inline-flex",alignItems:"center",gap:6},children:["Range",M.jsxs("select",{value:m,onChange:y=>u(Number(y.target.value)),children:[M.jsx("option",{value:100,children:"100"}),M.jsx("option",{value:500,children:"500"}),M.jsx("option",{value:2e3,children:"2000"}),M.jsx("option",{value:1e4,children:"10000"})]})]}),M.jsx("button",{className:"button",onClick:()=>kx(r,d,n),"aria-label":"Export CSV",children:"Export CSV"})]}),o&&M.jsx("div",{style:{color:"#fca5a5",marginBottom:"0.5rem"},children:o}),n?M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"metric-label",children:"Total Gen (MWh)"}),M.jsx("div",{className:"metric-value",children:Number(n.total_gen_mwh).toFixed(1)})]}),M.jsxs("div",{children:[M.jsx("div",{className:"metric-label",children:"Total Demand (MWh)"}),M.jsx("div",{className:"metric-value",children:Number(n.total_demand_mwh).toFixed(1)})]}),M.jsxs("div",{children:[M.jsx("div",{className:"metric-label",children:"Balance (MWh)"}),M.jsx("div",{className:"metric-value",children:Number(n.ped_absolute_mwh).toFixed(1)})]}),M.jsxs("div",{children:[M.jsx("div",{className:"metric-label",children:"PED Ratio"}),M.jsx("div",{className:"metric-value",children:Number(n.ped_ratio).toFixed(3)})]})]}):M.jsx("div",{children:"—"}),r&&M.jsxs("div",{style:{position:"relative",marginTop:"0.75rem"},children:[M.jsxs("div",{style:{position:"absolute",top:0,right:0,background:"rgba(15,23,42,0.85)",border:"1px solid rgba(148,163,184,0.3)",borderRadius:8,padding:"6px 8px",display:"flex",gap:"0.6rem",alignItems:"center",flexWrap:"wrap",zIndex:2},children:[M.jsx(Xr,{color:"#22c55e",label:"Generation"}),M.jsx(Xr,{color:"#ef4444",label:"Load"}),l&&M.jsxs(M.Fragment,{children:[M.jsx(Xr,{color:"#84cc16",label:"PV→Load"}),M.jsx(Xr,{color:"#22d3ee",label:"PV→Export"}),M.jsx(Xr,{color:"#f59e0b",label:"Battery→Load"}),M.jsx(Xr,{color:"#a78bfa",label:"Grid Import"})]})]}),M.jsx("svg",{ref:y=>{},width:"100%",height:"180",viewBox:"0 0 640 180",preserveAspectRatio:"none",onMouseMove:y=>{var P,b;try{const R=y.currentTarget.getBoundingClientRect(),T=y.clientX-R.left-40,w=r.gen_mw,L=r.load_mw,W=Math.max(w.length,L.length),F=560/Math.max(1,W-1),j=Math.max(0,Math.min(W-1,Math.round(T/(R.width-80)*(560/560)))),K=(P=w[j])!=null?P:0,X=(b=L[j])!=null?b:0;let ne=[`Gen: ${K.toFixed(2)} MW`,`Load: ${X.toFixed(2)} MW`];if(d&&d.series_mw){const N=d.series_mw,q=te=>N[te]&&N[te][j]!==void 0?N[te][j]:0;ne.push(`PV→Load: ${q("pv_to_load_mw").toFixed(2)} MW`),ne.push(`PV→Export: ${q("pv_export_mw").toFixed(2)} MW`),ne.push(`Batt→Load: ${q("batt_to_load_mw").toFixed(2)} MW`),ne.push(`Grid Import: ${q("grid_import_mw").toFixed(2)} MW`)}v({visible:!0,x:y.clientX-R.left+10,y:y.clientY-R.top-10,idx:j,text:ne.join(`
`)})}catch{}},onMouseLeave:()=>v(null),children:(()=>{const y=r.gen_mw,P=r.load_mw,b=Math.max(y.length,P.length);if(b===0)return null;const C=Math.max(1,...h?y:[0],...g?P:[0]),R=560/Math.max(1,b-1),T=L=>150-L/C*120,w=L=>L.map((W,F)=>`${F===0?"M":"L"} ${40+F*R} ${T(W)}`).join(" ");return M.jsxs(M.Fragment,{children:[M.jsx("line",{x1:40,y1:30,x2:40,y2:150,stroke:"#334155"}),M.jsx("line",{x1:40,y1:150,x2:600,y2:150,stroke:"#334155"}),M.jsx("text",{x:8,y:32,fill:"#94a3b8",fontSize:"10",children:"MW"}),M.jsx("text",{x:580,y:170,fill:"#94a3b8",fontSize:"10",children:"steps"}),h&&M.jsx("path",{d:w(y),stroke:"#22c55e",fill:"none",strokeWidth:"2"}),g&&M.jsx("path",{d:w(P),stroke:"#ef4444",fill:"none",strokeWidth:"2"}),d&&d.series_mw&&(()=>{const L=d.series_mw,W=["pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"],F={pv_to_load_mw:"#84cc16",pv_export_mw:"#22d3ee",batt_to_load_mw:"#f59e0b",grid_import_mw:"#a78bfa"},j=Math.max(C,...W.flatMap(ne=>L[ne]||[0])),K=ne=>150-ne/j*120,X=ne=>ne.map((N,q)=>`${q===0?"M":"L"} ${40+q*R} ${K(N)}`).join(" ");return M.jsx(M.Fragment,{children:W.map(ne=>L[ne]&&M.jsx("path",{d:X(L[ne]),stroke:F[ne],fill:"none",strokeWidth:"1.5"},ne))})})()]})})()}),_&&_.visible&&M.jsx("div",{style:{position:"absolute",left:_.x,top:_.y,pointerEvents:"none",background:"rgba(15,23,42,0.9)",color:"#e5e7eb",border:"1px solid rgba(148,163,184,0.3)",padding:"6px 8px",borderRadius:6,whiteSpace:"pre"},children:_.text})]})]})}function Xr({color:t,label:e}){return M.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[M.jsx("span",{style:{width:12,height:12,background:t,borderRadius:3,display:"inline-block"}}),M.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.85rem"},children:e})]})}function kx(t,e,n){var i,r,s,o,a,l,c,d,f,h;try{const p=[],g=["step","gen_mw","load_mw","pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"];p.push(g.join(","));const S=Math.max(((i=t==null?void 0:t.gen_mw)==null?void 0:i.length)||0,((r=t==null?void 0:t.load_mw)==null?void 0:r.length)||0),m=y=>{var P;return((P=e==null?void 0:e.series_mw)==null?void 0:P[y])||[]};for(let y=0;y<S;y++){const P=[String(((t==null?void 0:t.start)||0)+y),String((o=(s=t==null?void 0:t.gen_mw)==null?void 0:s[y])!=null?o:""),String((l=(a=t==null?void 0:t.load_mw)==null?void 0:a[y])!=null?l:""),String((c=m("pv_to_load_mw")[y])!=null?c:""),String((d=m("pv_export_mw")[y])!=null?d:""),String((f=m("batt_to_load_mw")[y])!=null?f:""),String((h=m("grid_import_mw")[y])!=null?h:"")];p.push(P.join(","))}n&&(p.push(""),Object.entries(n).forEach(([y,P])=>p.push(`# ${y},${String(P)}`)));const u=new Blob([p.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(u),v=document.createElement("a");v.href=_,v.download="digital_twin_series.csv",v.click(),URL.revokeObjectURL(_)}catch{}}const Ia={owned_wind_capacity_mw:270,owned_solar_capacity_mw:100,owned_hydro_capacity_mw:40,owned_battery_capacity_mwh:10,physical_allocation:.88,financial_allocation:.12,investment_freq:12};function zx({apiBase:t,onRun:e}){var N,q,te,oe,he,De;const[n,i]=ae.useState([]),[r,s]=ae.useState(!1),[o,a]=ae.useState("My Scenario"),[l,c]=ae.useState(""),[d,f]=ae.useState(""),[h,p]=ae.useState(Ia),[g,S]=ae.useState(null),[m,u]=ae.useState(!0),[_,v]=ae.useState(null),[y,P]=ae.useState(null),[b,C]=ae.useState([]),R=D=>{const Z=t.endsWith("/")?t:t+"/",le=D.replace(/^\/+/,"");return new URL(le,Z).toString()},T=async()=>{s(!0);try{const Z=await(await fetch(R("/scenarios"))).json();i(Z)}catch{}s(!1)};ae.useEffect(()=>{T()},[]);const w=async()=>{const D={name:o,description:l,details:d,config_overrides:h};(await fetch(R("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)})).ok&&await T()},L=async D=>{var le,Q,me;P(null),v(D);const Z=n.find(Me=>Me.id===D);Z&&(S(Z.id),a(Z.name),c((le=Z.description)!=null?le:""),f((Q=Z.details)!=null?Q:""),p({...Ia,...Z.config_overrides||{}}));try{const Me=await fetch(R(`/scenarios/${D}/run`),{method:"POST"});if(Me.ok){const Ne=await Me.json();e(Ne.id)}else{const Ne=await Me.text();P(`Run failed (${Me.status}): ${Ne}`)}}catch(Me){P((me=Me==null?void 0:Me.message)!=null?me:String(Me))}finally{v(null)}},W=async D=>{if(!confirm("Delete this scenario? This cannot be undone."))return;(await fetch(R(`/scenarios/${D}`),{method:"DELETE"})).ok&&await T()},F=(D,Z)=>p({...h,[D]:Z}),j=async()=>{try{const D=await fetch(R("/runs"));if(!D.ok)return;const le=(await D.json()).slice(0,8),Q=[];for(const me of le)try{const Me=await fetch(R(`/runs/${me.id}/ped`));if(!Me.ok){Q.push({name:me.name,status:me.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"});continue}const Ne=await Me.json();Q.push({name:me.name,status:me.status,ped_ratio:Number(Ne.ped_ratio).toFixed(3),total_gen_mwh:Number(Ne.total_gen_mwh).toFixed(1),total_demand_mwh:Number(Ne.total_demand_mwh).toFixed(1)})}catch{Q.push({name:me.name,status:me.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"})}C(Q)}catch{}};ae.useEffect(()=>{j()},[]);const K=["Scenario 1: Baseline","Scenario 2: High PV Deployment","Scenario 3: High PV + Battery (4h)","Scenario 4: High PV + Large Battery","Scenario 5: DSM (Flexible Demand)"],X=D=>K.includes(D),ne=[...n].sort((D,Z)=>{var me,Me;const le=X(D.name),Q=X(Z.name);if(le&&Q){const Ne=parseInt(((me=D.name.match(/Scenario (\d)/))==null?void 0:me[1])||"0"),He=parseInt(((Me=Z.name.match(/Scenario (\d)/))==null?void 0:Me[1])||"0");return Ne-He}return le?-1:Q?1:0});return M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"360px 1fr",gap:"1rem",height:"100%",overflow:"hidden"},children:[M.jsxs("div",{className:"sidebar",style:{height:"100%",overflowY:"auto"},children:[M.jsxs("div",{className:"header",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[M.jsx("h2",{style:{flex:1},children:"Scenarios"}),M.jsx("button",{className:"button",onClick:()=>{S(null),a("My Scenario"),c(""),f(""),p({...Ia}),u(!0)},children:"New"}),M.jsx("button",{className:"button",onClick:T,disabled:r,children:"Refresh"})]}),M.jsx("div",{style:{marginTop:"1rem"},children:ne.map(D=>{var le;const Z=X(D.name);return M.jsxs("div",{className:`run-item run-item--with-icon ${g===D.id?"active":""}`,style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:Z?"linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)":void 0,borderLeft:Z?"3px solid #3b82f6":void 0},onClick:()=>{var Q,me;S(D.id),a(D.name),c((Q=D.description)!=null?Q:""),f((me=D.details)!=null?me:""),p({...Ia,...D.config_overrides||{}})},children:[M.jsxs("div",{style:{flex:1},children:[M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[M.jsx("strong",{children:D.name}),Z&&M.jsx("span",{style:{fontSize:9,padding:"2px 5px",background:"#3b82f6",borderRadius:3,color:"#fff"},children:"PAPER"})]}),M.jsx("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:(le=D.description)!=null?le:""}),D.details&&M.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b",marginTop:4},children:[String(D.details).slice(0,120),String(D.details).length>120?"…":""]})]}),M.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:M.jsx("button",{className:"button",onClick:()=>L(D.id),"aria-busy":_===D.id,"aria-label":`Run ${D.name}`,children:_===D.id?"Running…":"Run"})}),!Z&&M.jsx("button",{className:"icon-btn",title:"Delete scenario","aria-label":"Delete scenario",onClick:Q=>{Q.stopPropagation(),W(D.id)},children:"🗑"})]},D.id)})})]}),M.jsxs("div",{className:"main-content",style:{height:"100%",overflowY:"auto"},children:[M.jsx("div",{className:"header",children:M.jsx("h2",{children:"Create / Edit Scenario"})}),y&&M.jsx("div",{className:"metric-card",style:{color:"#fecaca"},children:y}),M.jsxs("div",{className:"metric-card",children:[M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[M.jsxs("label",{children:["Name",M.jsx("input",{style:{width:"100%"},value:o,onChange:D=>a(D.target.value)})]}),M.jsxs("label",{children:["Description",M.jsx("input",{style:{width:"100%"},value:l,onChange:D=>c(D.target.value)})]}),M.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Details",M.jsx("textarea",{style:{width:"100%",minHeight:90},value:d,onChange:D=>f(D.target.value)})]}),M.jsxs("label",{children:["Wind (MW)",M.jsx("input",{type:"number",value:h.owned_wind_capacity_mw,onChange:D=>F("owned_wind_capacity_mw",Number(D.target.value))})]}),M.jsxs("label",{children:["Solar (MW)",M.jsx("input",{type:"number",value:h.owned_solar_capacity_mw,onChange:D=>F("owned_solar_capacity_mw",Number(D.target.value))})]}),M.jsxs("label",{children:["Hydro (MW)",M.jsx("input",{type:"number",value:h.owned_hydro_capacity_mw,onChange:D=>F("owned_hydro_capacity_mw",Number(D.target.value))})]}),M.jsxs("label",{children:["Battery (MWh)",M.jsx("input",{type:"number",value:h.owned_battery_capacity_mwh,onChange:D=>F("owned_battery_capacity_mwh",Number(D.target.value))})]}),M.jsxs("label",{children:["Physical Allocation",M.jsx("input",{type:"number",step:"0.01",value:h.physical_allocation,onChange:D=>F("physical_allocation",Number(D.target.value))})]}),M.jsxs("label",{children:["Financial Allocation",M.jsx("input",{type:"number",step:"0.01",value:h.financial_allocation,onChange:D=>F("financial_allocation",Number(D.target.value))})]}),M.jsxs("label",{children:["Investment Freq (steps)",M.jsx("input",{type:"number",value:h.investment_freq,onChange:D=>F("investment_freq",Number(D.target.value))})]})]}),M.jsx("div",{style:{marginTop:"0.75rem",display:"flex",gap:"0.5rem",alignItems:"center"},children:g&&X(((N=n.find(D=>D.id===g))==null?void 0:N.name)||"")?M.jsxs(M.Fragment,{children:[M.jsx("button",{className:"button",onClick:async()=>{const Z=`My ${o.replace(/^Scenario \d+:\s*/,"")}`,le={name:Z,description:l,details:d,config_overrides:h},Q=await fetch(R("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(le)});if(Q.ok){const me=await Q.json();await T(),S(me.id),a(Z),alert("New user scenario created!")}},children:"Save As New"}),M.jsx("span",{style:{fontSize:11,color:"#94a3b8"},children:"Paper scenarios are read-only. Changes apply to this session only."})]}):M.jsxs(M.Fragment,{children:[M.jsx("button",{className:"button",onClick:w,children:"Save Scenario"}),g&&M.jsx("button",{className:"button",onClick:async()=>{const D=R(`/scenarios/${g}`);(await fetch(D,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,description:l,details:d,config_overrides:h})})).ok&&await T()},children:"Save Changes"})]})})]}),M.jsxs("div",{className:"metric-card",style:{whiteSpace:"pre-wrap"},children:[M.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[M.jsx("h3",{style:{margin:0},children:"Guideline: Designing a Scenario for PED"}),M.jsx("button",{className:"button",onClick:()=>u(D=>!D),children:m?"Hide":"Show"})]}),m&&M.jsxs("div",{children:[M.jsx("p",{children:"PED (Positive Energy District) targets annual on‑site renewable generation ≥ annual demand. Tune parameters below; then check Runs → Charts → PED to monitor total generation, total demand, balance and ratio (≥ 1.0 for PED)."}),M.jsxs("ul",{children:[M.jsxs("li",{children:[M.jsx("b",{children:"Solar (MW)"}),": rooftop PV nameplate. Increasing this primarily raises mid‑day generation. Current: ",String((q=h.owned_solar_capacity_mw)!=null?q:"—")," MW."]}),M.jsxs("li",{children:[M.jsx("b",{children:"Battery (MWh)"}),": storage energy. Shifts PV from mid‑day to evenings; reduces imports and exports; increases self‑consumption. Current: ",String((te=h.owned_battery_capacity_mwh)!=null?te:"—")," MWh."]}),M.jsxs("li",{children:[M.jsx("b",{children:"Investment Freq (steps)"}),": decision cadence (lower = more responsive). Use 6 for DSM‑like responsiveness; 12 for baseline. Current: ",String((oe=h.investment_freq)!=null?oe:"—"),"."]}),M.jsxs("li",{children:[M.jsx("b",{children:"Physical / Financial Allocation"}),": budget split that influences physical assets vs trading. Keep sensible totals (≈1.0). Current: ",String((he=h.physical_allocation)!=null?he:"—")," / ",String((De=h.financial_allocation)!=null?De:"—"),"."]})]}),M.jsxs("p",{children:[M.jsx("b",{children:"Suggested recipes"}),":",M.jsx("br",{}),"– Baseline: modest PV, no battery; observe import/export baseline.",M.jsx("br",{}),"– High PV: maximize PV; expect high mid‑day export.",M.jsx("br",{}),"– PV + Battery (4 h): add 0.32–0.64 MWh storage to boost self‑consumption.",M.jsx("br",{}),"– DSM‑like: keep PV+Battery and set investment_freq=6 to react faster."]}),M.jsx("p",{children:"Iterate: create → run → check PED ratio → adjust PV/battery/decisions until balance ≥ 0 and ratio ≥ 1.0. Use multiple saved scenarios to compare results."})]})]}),M.jsxs("div",{className:"metric-card",children:[M.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[M.jsx("h3",{style:{margin:0},children:"Compare Runs (latest)"}),M.jsx("button",{className:"button",onClick:j,children:"Refresh"})]}),M.jsx("div",{style:{overflowX:"auto"},children:M.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Name"}),M.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Status"}),M.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"PED Ratio"}),M.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Gen (MWh)"}),M.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Demand (MWh)"})]})}),M.jsx("tbody",{children:b.map((D,Z)=>M.jsxs("tr",{children:[M.jsx("td",{style:{padding:"6px 8px"},children:D.name}),M.jsx("td",{style:{padding:"6px 8px",color:"#94a3b8"},children:D.status}),M.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:D.ped_ratio}),M.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:D.total_gen_mwh}),M.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:D.total_demand_mwh})]},Z))})]})})]})]})]})}const Ao={smart_building:{label:"Smart Building",icon:"🏢",color:"#6366f1",defaultParams:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30},description:"Intelligent building with controllable loads"},solar_pv:{label:"Solar PV",icon:"☀️",color:"#eab308",defaultParams:{capacity_kwp:100,tilt_deg:15,azimuth_deg:180,efficiency:.2},description:"Rooftop or ground-mounted photovoltaic panels"},battery_storage:{label:"Battery Storage",icon:"🔋",color:"#22c55e",defaultParams:{capacity_kwh:200,power_kw:50,efficiency:.92,initial_soc:.5},description:"Lithium-ion battery energy storage system"},wind_turbine:{label:"Wind Turbine",icon:"🌬️",color:"#06b6d4",defaultParams:{capacity_kw:500,hub_height_m:80,rotor_diameter_m:50},description:"Small-scale wind power generation"},district_heating:{label:"District Heating",icon:"🔥",color:"#ef4444",defaultParams:{supply_temp_c:70,return_temp_c:40,capacity_kw:500},description:"Connection to district heating network"},smart_grid:{label:"Smart Grid",icon:"⚡",color:"#8b5cf6",defaultParams:{import_limit_kw:1e3,export_limit_kw:500,tariff_type:"dynamic"},description:"Grid connection point with smart metering"},ev_charger:{label:"EV Charger",icon:"🚗",color:"#3b82f6",defaultParams:{num_ports:4,power_per_port_kw:22,v2g_enabled:!0},description:"Electric vehicle charging station with V2G"},heat_pump:{label:"Heat Pump",icon:"❄️",color:"#14b8a6",defaultParams:{capacity_kw:50,cop:3.5,type:"air_source"},description:"Air or ground source heat pump"},chp_unit:{label:"CHP Unit",icon:"⚙️",color:"#f97316",defaultParams:{electrical_kw:100,thermal_kw:150,fuel:"biogas"},description:"Combined heat and power generation"},thermal_storage:{label:"Thermal Storage",icon:"🌡️",color:"#ec4899",defaultParams:{capacity_kwh:500,max_temp_c:95,loss_pct_day:2},description:"Hot water thermal energy storage"},load_center:{label:"Load Center",icon:"📊",color:"#64748b",defaultParams:{base_load_kw:100,peak_load_kw:300,dsm_enabled:!0},description:"Aggregated electrical load point"}},Bx=Object.entries(Ao).map(([t,e])=>({type:t,...e}));function Hx({onConfigChange:t,initialConfig:e,apiBase:n,onRunSimulation:i}){var We;const[r,s]=ae.useState((e==null?void 0:e.components)||[]),[o,a]=ae.useState((e==null?void 0:e.connections)||[]),[l,c]=ae.useState(null),[d,f]=ae.useState(null),[h,p]=ae.useState((e==null?void 0:e.name)||"My Digital Twin"),[g,S]=ae.useState(null),[m,u]=ae.useState(()=>{const O=e==null?void 0:e.id;return O&&/^\d+$/.test(O)?O:null}),[_,v]=ae.useState(!1),[y,P]=ae.useState(!1),[b,C]=ae.useState([]),[R,T]=ae.useState(null),w=ae.useRef(null),L=O=>{if(!n)return O;try{const G=n.endsWith("/")?n:n+"/";return new URL(O.replace(/^\/+/,""),G).toString()}catch{return n.replace(/\/+$/,"")+"/"+O.replace(/^\/+/,"")}};ae.useEffect(()=>{n&&fetch(L("/scenarios")).then(O=>O.json()).then(O=>C(O||[])).catch(()=>{})},[n]),ae.useEffect(()=>{if(!e)try{const O=localStorage.getItem("dt_builder_config");if(O){const G=JSON.parse(O);s(G.components||[]),a(G.connections||[]),p(G.name||"My Digital Twin")}}catch{}},[e]),ae.useEffect(()=>{const O={id:(e==null?void 0:e.id)||`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:(e==null?void 0:e.created_at)||new Date().toISOString()};try{localStorage.setItem("dt_builder_config",JSON.stringify(O))}catch{}t==null||t(O)},[r,o,h,t,e]);const W=O=>{S(O)},F=ae.useCallback(O=>{if(O.preventDefault(),!g||!w.current)return;const G=w.current.getBoundingClientRect(),V=O.clientX-G.left,E=O.clientY-G.top,x=Ao[g],U={id:`${g}-${Date.now()}`,type:g,name:x.label,x:V,y:E,params:{...x.defaultParams}};s(ee=>[...ee,U]),S(null)},[g]),j=O=>{O.target===w.current&&(c(null),f(null))},K={solar_pv:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},wind_turbine:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},battery_storage:{targets:["smart_building","smart_grid","ev_charger","load_center","solar_pv","wind_turbine"],type:"electricity"},smart_grid:{targets:["smart_building","battery_storage","ev_charger","load_center","heat_pump"],type:"electricity"},ev_charger:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},load_center:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},heat_pump:{targets:["smart_building","thermal_storage","district_heating"],type:"heat"},district_heating:{targets:["smart_building","thermal_storage","heat_pump"],type:"heat"},thermal_storage:{targets:["smart_building","heat_pump","district_heating"],type:"heat"},chp_unit:{targets:["smart_building","smart_grid","battery_storage","thermal_storage"],type:"both"},smart_building:{targets:["smart_grid","ev_charger","load_center"],type:"electricity"}},X=(O,G)=>{const V=r.find(U=>U.id===O),E=r.find(U=>U.id===G);if(!V||!E)return{valid:!1,type:"electricity",error:"Component not found"};const x=K[V.type];if(!x.targets.includes(E.type)){const U=K[E.type];return U.targets.includes(V.type)?{valid:!0,type:U.type}:{valid:!1,type:"electricity",error:`Cannot connect ${Ao[V.type].label} to ${Ao[E.type].label}`}}return{valid:!0,type:x.type}},ne=(O,G)=>{if(G.stopPropagation(),d&&d!==O){const V=X(d,O);if(!V.valid){alert(V.error),f(null);return}const E={id:`conn-${Date.now()}`,from:d,to:O,type:V.type,capacity_kw:100};a(x=>[...x,E]),f(null)}else c(O)},N=O=>{f(O),c(null)},q=O=>{s(G=>G.filter(V=>V.id!==O)),a(G=>G.filter(V=>V.from!==O&&V.to!==O)),c(null)},te=O=>{a(G=>G.filter(V=>V.id!==O))},oe=(O,G,V)=>{s(E=>E.map(x=>x.id===O?{...x,params:{...x.params,[G]:V}}:x))},he=(O,G,V)=>{s(E=>E.map(x=>x.id===O?{...x,x:G,y:V}:x))},De=(O,G)=>{if(!w.current)return;const V=w.current.getBoundingClientRect(),E=G.clientX-V.left,x=G.clientY-V.top;E>0&&x>0&&he(O,E,x)},D=r.find(O=>O.id===l),Z=O=>o.some(V=>V.from===O||V.to===O)?"valid":"isolated",Q=(()=>{let O=0,G=0,V=0,E=0,x=0,U=0,ee=0,re=0,ie=0,Ae=0;r.forEach(st=>{st.type==="solar_pv"&&(x+=Number(st.params.capacity_kwp||0),O+=Number(st.params.capacity_kwp||0)),st.type==="wind_turbine"&&(U+=Number(st.params.capacity_kw||0),O+=Number(st.params.capacity_kw||0)),st.type==="chp_unit"&&(ee+=Number(st.params.electrical_kw||0),O+=Number(st.params.electrical_kw||0)),st.type==="smart_building"&&(G+=Number(st.params.load_kw||0)),st.type==="load_center"&&(G+=Number(st.params.base_load_kw||0)),st.type==="ev_charger"&&(ie+=Number(st.params.num_ports||0)*Number(st.params.power_per_port_kw||0)),st.type==="heat_pump"&&(re+=Number(st.params.capacity_kw||0)),st.type==="battery_storage"&&(Ae+=Number(st.params.capacity_kwh||0),V+=Number(st.params.capacity_kwh||0)),st.type==="thermal_storage"&&(E+=Number(st.params.capacity_kwh||0))});const ge=.11,Ee=.25,Ke=.6,ue=.35,ve=(x*ge+U*Ee+ee*Ke)*8.76,be=G*ue*8.76,Ue=G>0?Ae/G:0,Te=.3,qe=Math.min(Ue*.1,.4),ze=Math.min(Te+qe,.85),tt=Math.min(ve*ze,be),k=ve-tt,fe=Math.max(be-tt,0),J=be>0?tt/be:0,_e=fe*1e3*.3-k*1e3*.08,Be=x*1200,yt=Ae*400,Ft=U*1500,et=Be+yt+Ft,on=.14,wn=fe*1e3*on,pa=be*1e3*on-wn,Zn=ve-be,eo=be>0?ve/be:0,to=Zn>=0,ma=to?0:(be-ve)/8.76/ge;return{genKw:O,loadKw:G,storageKwh:V,ratio:eo,isPed:to,annualGenMwh:ve,annualLoadMwh:be,netBalance:Zn,selfConsumptionRate:ze,selfSufficiencyRate:J,gridImportMwh:fe,gridExportMwh:k,annualGridCost:_e,totalCapex:et,annualCO2:wn,co2Savings:pa,shortfallKw:ma}})(),me=()=>{confirm("Clear all components?")&&(s([]),a([]),c(null),u(null))},Me=async()=>{if(n){v(!0);try{const O={name:h,description:`Digital twin with ${r.length} components`,components:r.map(x=>({...x})),connections:o.map(x=>({...x}))},G=L(m?`/digital-twins/${m}`:"/digital-twins"),E=await fetch(G,{method:m?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(E.ok){const x=await E.json();u(x.id),alert("Saved successfully!")}else alert("Save failed: "+await E.text())}catch(O){alert("Save error: "+O.message)}finally{v(!1)}}},Ne=async()=>{if(!n){alert("API not configured");return}if(r.length===0){alert("Please add components to your digital twin first");return}P(!0);try{let O=m;if(!O){const V={name:h,description:`Digital twin with ${r.length} components`,components:r.map(U=>({...U})),connections:o.map(U=>({...U}))},E=await fetch(L("/digital-twins"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(V)});if(!E.ok){alert("Failed to save: "+await E.text());return}O=(await E.json()).id,u(O)}const G=await fetch(L(`/digital-twins/${O}/run`),{method:"POST"});if(G.ok){const V=await G.json();i==null||i(V.id)}else alert("Run failed: "+await G.text())}catch(O){alert("Run error: "+((O==null?void 0:O.message)||String(O)))}finally{P(!1)}},He=async()=>{if(!n){alert("API not configured");return}const O=ke(),G={name:`Scenario: ${h}`,description:`Auto-generated from digital twin "${h}"`,details:`Components: ${r.map(E=>E.name).join(", ")}`,config_overrides:O},V=L("/scenarios");console.log("Creating scenario at:",V,G);try{const E=await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)});if(E.ok){const x=await E.json();T(x.id);const U=await fetch(L("/scenarios"));U.ok&&C(await U.json()),alert("Scenario created! You can now run it from the Scenarios tab.")}else{const x=await E.text();alert("Failed to create scenario: "+x)}}catch(E){console.error("Create scenario error:",E),alert("Error creating scenario: "+((E==null?void 0:E.message)||String(E)))}},ke=()=>{let O=0,G=0,V=0;return r.forEach(E=>{E.type==="solar_pv"&&(O+=Number(E.params.capacity_kwp||0)/1e3),E.type==="battery_storage"&&(G+=Number(E.params.capacity_kwh||0)/1e3),E.type==="wind_turbine"&&(V+=Number(E.params.capacity_kw||0)/1e3)}),{owned_solar_capacity_mw:O,owned_battery_capacity_mwh:G,owned_wind_capacity_mw:V,investment_freq:12}},pt=()=>{const O={id:`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:new Date().toISOString()},G=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),V=URL.createObjectURL(G),E=document.createElement("a");E.href=V,E.download=`${h.replace(/\s+/g,"_")}.json`,E.click(),URL.revokeObjectURL(V)},z=O=>{var E;const G=(E=O.target.files)==null?void 0:E[0];if(!G)return;const V=new FileReader;V.onload=x=>{var U;try{const ee=JSON.parse((U=x.target)==null?void 0:U.result);s(ee.components||[]),a(ee.connections||[]),p(ee.name||"Imported Config")}catch{alert("Invalid config file")}},V.readAsText(G)},Rt={scenario_1_baseline:{name:"Scenario 1: Baseline",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Existing Rooftop PV",x:300,y:60,params:{capacity_kwp:30,tilt_deg:15,azimuth_deg:180,efficiency:.18}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:100,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:30},{id:"c2",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c3",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_2_high_pv:{name:"Scenario 2: High PV",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Maximized Rooftop PV",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:171},{id:"c2",from:"pv-1",to:"grid-1",type:"electricity",capacity_kw:100},{id:"c3",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c4",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_3_pv_battery:{name:"Scenario 3: PV + Battery (4h)",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery 4h (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_4_large_battery:{name:"Scenario 4: PV + Large Battery",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Large Battery (640 kWh)",x:450,y:100,params:{capacity_kwh:640,power_kw:160,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:160},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:160},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_5_dsm:{name:"Scenario 5: DSM (Flexible)",components:[{id:"bld-1",type:"smart_building",name:"Smart Office (DSM)",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"load-1",type:"load_center",name:"Flexible Loads",x:150,y:100,params:{base_load_kw:100,peak_load_kw:150,dsm_enabled:!0}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"pv-1",to:"load-1",type:"electricity",capacity_kw:50},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"load-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c6",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c7",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},smart_district:{name:"Smart District PED",components:[{id:"bld-1",type:"smart_building",name:"Residential A",x:150,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"bld-2",type:"smart_building",name:"Residential B",x:350,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"pv-1",type:"solar_pv",name:"Community Solar",x:250,y:50,params:{capacity_kwp:300,tilt_deg:20,azimuth_deg:180,efficiency:.21}},{id:"bat-1",type:"battery_storage",name:"Community Battery",x:250,y:270,params:{capacity_kwh:600,power_kw:150,efficiency:.93,initial_soc:.5}},{id:"hp-1",type:"heat_pump",name:"Central Heat Pump",x:500,y:150,params:{capacity_kw:100,cop:3.8,type:"ground_source"}},{id:"grid-1",type:"smart_grid",name:"Grid PCC",x:50,y:270,params:{import_limit_kw:400,export_limit_kw:300,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bld-2",type:"electricity",capacity_kw:100},{id:"c3",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:150},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"bat-1",to:"bld-2",type:"electricity",capacity_kw:80},{id:"c6",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:300},{id:"c7",from:"hp-1",to:"bld-1",type:"heat",capacity_kw:50},{id:"c8",from:"hp-1",to:"bld-2",type:"heat",capacity_kw:50}]}},Fe=O=>{var E;const G=Rt[O];if(!G||r.length>0&&!confirm("This will replace your current design. Continue?"))return;s(G.components),a(G.connections),p(G.name),u(null);const V=(E=O.match(/scenario_(\d)/))==null?void 0:E[1];if(V&&b.length>0){const x=b.find(U=>U.name.toLowerCase().includes(`scenario ${V}`)||U.name.toLowerCase().includes(`s${V}`));x&&T(x.id)}};return M.jsxs("div",{style:{display:"flex",height:"100%",background:"#0f172a",color:"#e2e8f0"},children:[M.jsxs("div",{style:{width:220,borderRight:"1px solid #334155",padding:12,overflowY:"auto"},children:[M.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Components"}),M.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Bx.map(O=>M.jsxs("div",{draggable:!0,onDragStart:()=>W(O.type),style:{padding:"8px 10px",background:"#1e293b",borderRadius:6,cursor:"grab",display:"flex",alignItems:"center",gap:8,border:`2px solid ${O.color}33`,transition:"all 0.15s"},onMouseEnter:G=>G.currentTarget.style.borderColor=O.color,onMouseLeave:G=>G.currentTarget.style.borderColor=`${O.color}33`,title:O.description,children:[M.jsx("span",{style:{fontSize:20},children:O.icon}),M.jsx("span",{style:{fontSize:12},children:O.label})]},O.type))}),M.jsxs("div",{style:{marginTop:20,padding:10,background:"#1e293b",borderRadius:8,fontSize:10},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[M.jsx("h4",{style:{margin:0,fontSize:12,color:"#94a3b8"},children:"PED Status"}),M.jsx("span",{style:{padding:"2px 6px",borderRadius:4,fontSize:9,background:Q.isPed?"#166534":"#7f1d1d"},children:Q.isPed?"✓ PED":`${(Q.ratio*100).toFixed(0)}%`})]}),M.jsxs("div",{style:{marginBottom:8},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[M.jsx("span",{style:{color:"#64748b"},children:"Annual Balance"}),M.jsxs("span",{style:{color:Q.netBalance>=0?"#22c55e":"#ef4444"},children:[Q.netBalance>=0?"+":"",Q.netBalance.toFixed(1)," MWh"]})]}),M.jsx("div",{style:{height:6,background:"#334155",borderRadius:3,overflow:"hidden"},children:M.jsx("div",{style:{height:"100%",width:`${Math.min(Q.ratio*100,100)}%`,background:Q.isPed?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:3}})})]}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginBottom:8},children:[M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Generation"}),M.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[Q.annualGenMwh.toFixed(0)," MWh/y"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Consumption"}),M.jsxs("div",{style:{color:"#ef4444",fontWeight:600},children:[Q.annualLoadMwh.toFixed(0)," MWh/y"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Consumption"}),M.jsxs("div",{style:{color:"#eab308",fontWeight:600},children:[(Q.selfConsumptionRate*100).toFixed(0),"%"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Sufficiency"}),M.jsxs("div",{style:{color:"#3b82f6",fontWeight:600},children:[(Q.selfSufficiencyRate*100).toFixed(0),"%"]})]})]}),M.jsxs("div",{style:{padding:6,background:"#0f172a",borderRadius:4,marginBottom:8},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[M.jsx("span",{style:{color:"#64748b"},children:"Grid Import:"}),M.jsxs("span",{style:{color:"#f97316"},children:[Q.gridImportMwh.toFixed(1)," MWh/y"]})]}),M.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[M.jsx("span",{style:{color:"#64748b"},children:"Grid Export:"}),M.jsxs("span",{style:{color:"#22c55e"},children:[Q.gridExportMwh.toFixed(1)," MWh/y"]})]})]}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. Grid Cost"}),M.jsxs("div",{style:{color:"#f97316",fontWeight:600},children:["€",(Q.annualGridCost/1e3).toFixed(1),"k/y"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. CAPEX"}),M.jsxs("div",{style:{color:"#8b5cf6",fontWeight:600},children:["€",(Q.totalCapex/1e3).toFixed(0),"k"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Emissions"}),M.jsxs("div",{style:{color:"#94a3b8",fontWeight:600},children:[(Q.annualCO2/1e3).toFixed(1)," t/y"]})]}),M.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[M.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Savings"}),M.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[(Q.co2Savings/1e3).toFixed(1)," t/y"]})]})]}),!Q.isPed&&Q.shortfallKw>0&&M.jsxs("div",{style:{marginTop:8,padding:6,background:"#1e3a5f",borderRadius:4,fontSize:9},children:["💡 Add ~",Q.shortfallKw.toFixed(0)," kWp solar to achieve PED"]})]}),M.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[n&&M.jsxs(M.Fragment,{children:[M.jsx("button",{onClick:Me,disabled:_||r.length===0,style:{...Zt,background:"#16a34a"},children:_?"💾 Saving...":m?"💾 Update":"💾 Save"}),M.jsx("button",{onClick:Ne,disabled:y||r.length===0,style:{...Zt,background:"#2563eb"},children:y?"▶️ Starting...":"▶️ Run Simulation"}),M.jsx("button",{onClick:He,disabled:r.length===0,style:{...Zt,background:"#7c3aed"},children:"📋 Create Scenario"})]}),M.jsx("button",{onClick:pt,style:Zt,children:"📤 Export JSON"}),M.jsxs("label",{style:{...Zt,textAlign:"center",cursor:"pointer"},children:["📥 Import JSON",M.jsx("input",{type:"file",accept:".json",onChange:z,style:{display:"none"}})]}),M.jsx("button",{onClick:me,style:{...Zt,background:"#7f1d1d"},children:"🗑️ Clear All"})]}),n&&R&&M.jsxs("div",{style:{marginTop:16,padding:8,background:"#1e3a5f",borderRadius:6,fontSize:11},children:[M.jsx("span",{style:{color:"#94a3b8"},children:"Linked: "}),M.jsx("span",{style:{color:"#60a5fa"},children:((We=b.find(O=>O.id===R))==null?void 0:We.name)||R}),M.jsx("button",{onClick:()=>T(null),style:{marginLeft:8,background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:10},children:"✕"})]}),M.jsxs("div",{style:{marginTop:20},children:[M.jsx("h4",{style:{margin:"0 0 8px",fontSize:12,color:"#94a3b8"},children:"Paper Scenarios"}),M.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[M.jsx("button",{onClick:()=>Fe("scenario_1_baseline"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S1: Baseline"}),M.jsx("button",{onClick:()=>Fe("scenario_2_high_pv"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S2: High PV"}),M.jsx("button",{onClick:()=>Fe("scenario_3_pv_battery"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S3: PV + Battery"}),M.jsx("button",{onClick:()=>Fe("scenario_4_large_battery"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S4: Large Battery"}),M.jsx("button",{onClick:()=>Fe("scenario_5_dsm"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S5: DSM"})]}),M.jsx("h4",{style:{margin:"12px 0 8px",fontSize:12,color:"#94a3b8"},children:"Other Templates"}),M.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:M.jsx("button",{onClick:()=>Fe("smart_district"),style:{...Zt,background:"#065f46",fontSize:10,padding:"6px 8px"},children:"🏘️ Smart District"})})]})]}),M.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[M.jsxs("div",{style:{padding:"8px 12px",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",gap:12},children:[M.jsx("input",{value:h,onChange:O=>p(O.target.value),style:{background:"#1e293b",border:"1px solid #334155",borderRadius:4,padding:"4px 8px",color:"#e2e8f0",fontSize:14,width:200}}),M.jsxs("span",{style:{fontSize:12,color:"#64748b"},children:[r.length," components • ",o.length," connections"]}),d&&M.jsx("span",{style:{fontSize:12,color:"#eab308",marginLeft:"auto"},children:"🔗 Click another component to connect, or click canvas to cancel"})]}),M.jsxs("div",{ref:w,onDrop:F,onDragOver:O=>O.preventDefault(),onClick:j,style:{flex:1,position:"relative",background:"linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px), #1e293b",backgroundSize:"20px 20px",overflow:"hidden"},children:[M.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:[M.jsxs("defs",{children:[M.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:M.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})}),M.jsx("marker",{id:"arrowhead-heat",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:M.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ef4444"})})]}),o.map(O=>{const G=r.find(ie=>ie.id===O.from),V=r.find(ie=>ie.id===O.to);if(!G||!V)return null;const E=O.type==="heat"?"#ef4444":O.type==="both"?"#a855f7":"#3b82f6",x=G.x+30,U=G.y+30,ee=V.x+30,re=V.y+30;return M.jsxs("g",{onClick:()=>c(O.id),style:{cursor:"pointer",pointerEvents:"stroke"},children:[M.jsx("line",{x1:x,y1:U,x2:ee,y2:re,stroke:E,strokeWidth:3,strokeDasharray:O.type==="heat"?"8,4":"none",markerEnd:"url(#arrowhead)"}),M.jsx("circle",{r:"4",fill:E,children:M.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",path:`M${x},${U} L${ee},${re}`})}),M.jsx("circle",{r:"4",fill:E,children:M.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"0.66s",path:`M${x},${U} L${ee},${re}`})}),M.jsx("circle",{r:"4",fill:E,children:M.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"1.33s",path:`M${x},${U} L${ee},${re}`})})]},O.id)})]}),r.map(O=>{const G=Ao[O.type],V=l===O.id,E=d===O.id,x=Z(O.id);return M.jsxs("div",{draggable:!0,onDragEnd:U=>De(O.id,U),onClick:U=>ne(O.id,U),style:{position:"absolute",left:O.x,top:O.y,width:60,height:60,background:`${G.color}22`,border:`2px solid ${V||E?"#fff":x==="isolated"?"#f97316":G.color}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"move",boxShadow:V?"0 0 12px rgba(255,255,255,0.3)":x==="isolated"?"0 0 8px rgba(249,115,22,0.5)":"none",transition:"box-shadow 0.15s"},children:[M.jsx("div",{style:{position:"absolute",top:-6,right:-6,width:14,height:14,borderRadius:"50%",background:x==="valid"?"#22c55e":"#f97316",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,border:"2px solid #0f172a"},children:x==="valid"?"✓":"!"}),M.jsx("span",{style:{fontSize:24},children:G.icon}),M.jsx("span",{style:{fontSize:9,color:"#94a3b8",marginTop:2,textAlign:"center",maxWidth:56,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.name})]},O.id)}),r.length===0&&M.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[M.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),M.jsx("div",{children:"Drag components here to build your digital twin"})]})]})]}),M.jsxs("div",{style:{width:260,borderLeft:"1px solid #334155",padding:12,overflowY:"auto"},children:[M.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Properties"}),D?M.jsxs("div",{children:[M.jsxs("div",{style:{marginBottom:12},children:[M.jsx("label",{style:{fontSize:11,color:"#64748b"},children:"Name"}),M.jsx("input",{value:D.name,onChange:O=>s(G=>G.map(V=>V.id===D.id?{...V,name:O.target.value}:V)),style:fo})]}),M.jsx("div",{style:{fontSize:11,color:"#64748b",marginBottom:8},children:"Parameters"}),Object.entries(D.params).map(([O,G])=>M.jsxs("div",{style:{marginBottom:8},children:[M.jsx("label",{style:{fontSize:10,color:"#94a3b8",display:"block",marginBottom:2},children:O.replace(/_/g," ")}),typeof G=="boolean"?M.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12},children:[M.jsx("input",{type:"checkbox",checked:G,onChange:V=>oe(D.id,O,V.target.checked)}),G?"Enabled":"Disabled"]}):typeof G=="number"?M.jsx("input",{type:"number",value:G,onChange:V=>oe(D.id,O,parseFloat(V.target.value)||0),style:fo}):M.jsx("input",{value:G,onChange:V=>oe(D.id,O,V.target.value),style:fo})]},O)),M.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[M.jsx("button",{onClick:()=>N(D.id),style:{...Zt,background:"#1d4ed8"},children:"🔗 Connect to..."}),M.jsx("button",{onClick:()=>q(D.id),style:{...Zt,background:"#7f1d1d"},children:"🗑️ Delete"})]})]}):o.find(O=>O.id===l)?M.jsx("div",{children:(()=>{const O=o.find(E=>E.id===l),G=r.find(E=>E.id===O.from),V=r.find(E=>E.id===O.to);return M.jsxs(M.Fragment,{children:[M.jsxs("div",{style:{fontSize:12,marginBottom:12},children:[M.jsx("b",{children:G==null?void 0:G.name})," → ",M.jsx("b",{children:V==null?void 0:V.name})]}),M.jsxs("div",{style:{marginBottom:8},children:[M.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Type"}),M.jsxs("select",{value:O.type,onChange:E=>a(x=>x.map(U=>U.id===O.id?{...U,type:E.target.value}:U)),style:fo,children:[M.jsx("option",{value:"electricity",children:"⚡ Electricity"}),M.jsx("option",{value:"heat",children:"🔥 Heat"}),M.jsx("option",{value:"both",children:"🔄 Both"})]})]}),M.jsxs("div",{style:{marginBottom:8},children:[M.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Capacity (kW)"}),M.jsx("input",{type:"number",value:O.capacity_kw||0,onChange:E=>a(x=>x.map(U=>U.id===O.id?{...U,capacity_kw:parseFloat(E.target.value)||0}:U)),style:fo})]}),M.jsx("button",{onClick:()=>te(O.id),style:{...Zt,background:"#7f1d1d",marginTop:12},children:"🗑️ Delete Connection"})]})})()}):M.jsx("div",{style:{color:"#64748b",fontSize:12},children:"Select a component or connection to edit its properties"})]})]})}const Zt={padding:"8px 12px",background:"#334155",border:"none",borderRadius:4,color:"#e2e8f0",fontSize:12,cursor:"pointer"},fo={width:"100%",padding:"6px 8px",background:"#1e293b",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0",fontSize:12};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="170",Ds={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Vp=1,Gx=2,v0=1,Wx=2,pi=3,lr=0,pn=1,vi=2,ir=0,Ns=1,Cd=2,Gp=3,Wp=4,jx=5,Er=100,Xx=101,Yx=102,$x=103,qx=104,Kx=200,Zx=201,Jx=202,Qx=203,Rd=204,Pd=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,oS=212,aS=213,lS=214,Ld=0,Dd=1,Nd=2,Gs=3,Id=4,Ud=5,Fd=6,Od=7,y0=0,cS=1,uS=2,rr=0,dS=1,hS=2,fS=3,pS=4,mS=5,gS=6,_S=7,x0=300,Ws=301,js=302,kd=303,zd=304,Ec=306,Bd=1e3,Cr=1001,Hd=1002,qn=1003,vS=1004,Ua=1005,ri=1006,Qc=1007,Rr=1008,Pi=1009,S0=1010,M0=1011,ra=1012,mf=1013,Or=1014,Si=1015,ua=1016,gf=1017,_f=1018,Xs=1020,E0=35902,w0=1021,T0=1022,Xn=1023,A0=1024,b0=1025,Is=1026,Ys=1027,C0=1028,vf=1029,R0=1030,yf=1031,xf=1033,El=33776,wl=33777,Tl=33778,Al=33779,Vd=35840,Gd=35841,Wd=35842,jd=35843,Xd=36196,Yd=37492,$d=37496,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,oh=37819,ah=37820,lh=37821,bl=36492,ch=36494,uh=36495,P0=36283,dh=36284,hh=36285,fh=36286,yS=3200,xS=3201,L0=0,SS=1,Xi="",Cn="srgb",Js="srgb-linear",wc="linear",ot="srgb",Yr=7680,jp=519,MS=512,ES=513,wS=514,D0=515,TS=516,AS=517,bS=518,CS=519,ph=35044,Xp="300 es",Mi=2e3,ec=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,mh=180/Math.PI;function sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ht(t,e,n){return Math.max(e,Math.min(n,t))}function RS(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const PS={DEG2RAD:Cl};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],g=i[8],S=r[0],m=r[3],u=r[6],_=r[1],v=r[4],y=r[7],P=r[2],b=r[5],C=r[8];return s[0]=o*S+a*_+l*P,s[3]=o*m+a*v+l*b,s[6]=o*u+a*y+l*C,s[1]=c*S+d*_+f*P,s[4]=c*m+d*v+f*b,s[7]=c*u+d*y+f*C,s[2]=h*S+p*_+g*P,s[5]=h*m+p*v+g*b,s[8]=h*u+p*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(r*c-d*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Ge;function N0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LS(){const t=tc("canvas");return t.style.display="block",t}const Yp={};function bo(t){t in Yp||(Yp[t]=!0,console.warn(t))}function DS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function NS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Ti(t.r),t.g=Ti(t.g),t.b=Ti(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=Us(t.r),t.g=Us(t.g),t.b=Us(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Xi?wc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],qp=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Js]:{primaries:$p,whitePoint:Kp,transfer:wc,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:$p,whitePoint:Kp,transfer:ot,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let $r;class US{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=tc("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FS=0;class I0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class nn extends Gr{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Cr,r=Cr,s=ri,o=Rr,a=Xn,l=Pi,c=nn.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=sr(),this.name="",this.source=new I0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=x0;nn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,P=(u+1)/2,b=(d+h)/4,C=(f+S)/4,R=(g+m)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=C/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-S)/_,this.z=(h-d)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new I0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends kS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=S;return}if(f!==S||l!==h||c!==p||d!==g){let m=1-a;const u=l*h+c*p+d*g+f*S,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,u*_);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,d=d*m+g*y,f=f*m+S*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*f+l*p-c*h,e[n+1]=l*g+d*h+c*f-a*p,e[n+2]=c*g+d*p+a*h-l*f,e[n+3]=d*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"YZX":this._x=h*d*f+c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f-h*p*g;break;case"XZY":this._x=h*d*f-c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new I,Qp=new zr;class Br{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Oa.subVectors(this.max,po),qr.subVectors(e.a,po),Kr.subVectors(e.b,po),Zr.subVectors(e.c,po),Fi.subVectors(Kr,qr),Oi.subVectors(Zr,Kr),pr.subVectors(qr,Zr);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-pr.z,pr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,pr.z,0,-pr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-pr.y,pr.x,0];return!ru(n,qr,Kr,Zr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,qr,Kr,Zr,Oa))?!1:(ka.crossVectors(Fi,Oi),n=[ka.x,ka.y,ka.z],ru(n,qr,Kr,Zr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],Bn=new I,Fa=new Br,qr=new I,Kr=new I,Zr=new I,Fi=new I,Oi=new I,pr=new I,po=new I,Oa=new I,ka=new I,mr=new I;function ru(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),d=i.dot(mr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const BS=new Br,mo=new I,su=new I;class da{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(su)),this.expandByPoint(mo.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new I,ou=new I,za=new I,ki=new I,au=new I,Ba=new I,lu=new I;class ha{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=ki.dot(this.direction),l=-ki.dot(za),c=ki.lengthSq(),d=Math.abs(1-o*o);let f,h,p,g;if(d>0)if(f=o*l-a,h=o*a-l,g=s*d,f>=0)if(h>=-g)if(h<=g){const S=1/d;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ou).addScaledVector(za,h),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Ba.subVectors(i,e),lu.crossVectors(au,Ba);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(ki,Ba));if(l<0)return null;const c=a*this.direction.dot(au.cross(ki));if(c<0||l+c>o)return null;const d=-a*ki.dot(lu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,g,S,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,S,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,g=a*d,S=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=c*d,S=c*f;n[0]=h+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=c*d,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,g=a*d,S=a*f;n[0]=l*d,n[4]=g*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*d,n[4]=S-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+g,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+S,n[5]=o*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HS,e,VS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),zi.crossVectors(i,gn),zi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),zi.crossVectors(i,gn)),zi.normalize(),Ha.crossVectors(gn,zi),r[0]=zi.x,r[4]=Ha.x,r[8]=gn.x,r[1]=zi.y,r[5]=Ha.y,r[9]=gn.y,r[2]=zi.z,r[6]=Ha.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],g=i[2],S=i[6],m=i[10],u=i[14],_=i[3],v=i[7],y=i[11],P=i[15],b=r[0],C=r[4],R=r[8],T=r[12],w=r[1],L=r[5],W=r[9],F=r[13],j=r[2],K=r[6],X=r[10],ne=r[14],N=r[3],q=r[7],te=r[11],oe=r[15];return s[0]=o*b+a*w+l*j+c*N,s[4]=o*C+a*L+l*K+c*q,s[8]=o*R+a*W+l*X+c*te,s[12]=o*T+a*F+l*ne+c*oe,s[1]=d*b+f*w+h*j+p*N,s[5]=d*C+f*L+h*K+p*q,s[9]=d*R+f*W+h*X+p*te,s[13]=d*T+f*F+h*ne+p*oe,s[2]=g*b+S*w+m*j+u*N,s[6]=g*C+S*L+m*K+u*q,s[10]=g*R+S*W+m*X+u*te,s[14]=g*T+S*F+m*ne+u*oe,s[3]=_*b+v*w+y*j+P*N,s[7]=_*C+v*L+y*K+P*q,s[11]=_*R+v*W+y*X+P*te,s[15]=_*T+v*F+y*ne+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],u=e[15],_=f*m*c-S*h*c+S*l*p-a*m*p-f*l*u+a*h*u,v=g*h*c-d*m*c-g*l*p+o*m*p+d*l*u-o*h*u,y=d*S*c-g*f*c+g*a*p-o*S*p-d*a*u+o*f*u,P=g*f*l-d*S*l-g*a*h+o*S*h+d*a*m-o*f*m,b=n*_+i*v+r*y+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*u-i*h*u)*C,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*u+i*l*u)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(d*m*s-g*h*s+g*r*p-n*m*p-d*r*u+n*h*u)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*C,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*C,e[8]=y*C,e[9]=(g*f*s-d*S*s-g*i*p+n*S*p+d*i*u-n*f*u)*C,e[10]=(o*S*s-g*a*s+g*i*c-n*S*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=P*C,e[13]=(d*S*r-g*f*r+g*i*h-n*S*h-d*i*m+n*f*m)*C,e[14]=(g*a*r-o*S*r-g*i*l+n*S*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,g=s*f,S=o*d,m=o*f,u=a*f,_=l*c,v=l*d,y=l*f,P=i.x,b=i.y,C=i.z;return r[0]=(1-(S+u))*P,r[1]=(p+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(h+u))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(g+v)*C,r[9]=(m-_)*C,r[10]=(1-(h+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,d=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ec)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*d;let g,S;if(a===Mi)g=(o+s)*f,S=-2*f;else if(a===ec)g=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new I,Hn=new ct,HS=new I(0,0,0),VS=new I(1,1,1),zi=new I,Ha=new I,gn=new I,em=new ct,tm=new zr;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const nm=new I,Qr=new zr,di=new ct,Va=new I,go=new I,WS=new I,jS=new zr,im=new I(1,0,0),rm=new I(0,1,0),sm=new I(0,0,1),om={type:"added"},XS={type:"removed"},es={type:"childadded",child:null},cu={type:"childremoved",child:null};class Nt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new I,n=new ai,i=new zr,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(go,Va,this.up):di.lookAt(Va,go,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(di),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XS),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,WS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new I,hi=new I,uu=new I,fi=new I,ts=new I,ns=new I,am=new I,du=new I,hu=new I,fu=new I,pu=new Tt,mu=new Tt,gu=new Tt;class Dn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),hi.subVectors(i,n),uu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(hi),l=Vn.dot(uu),c=hi.dot(hi),d=hi.dot(uu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pu,s.x),o.addScaledVector(mu,s.y),o.addScaledVector(gu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),hi.subVectors(e,n),Vn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Vn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),du.subVectors(e,i);const l=ts.dot(du),c=ns.dot(du);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const d=ts.dot(hu),f=ns.dot(hu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ts,o);fu.subVectors(e,s);const p=ts.dot(fu),g=ns.dot(fu);if(g>=0&&p<=g)return n.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ns,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return am.subVectors(s,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(am,a);const u=1/(m+S+h);return o=S*u,a=h*u,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=RS(e,1),n=Ht(n,0,1),i=Ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(Ht($t.r*255,0,255))*65536+Math.round(Ht($t.g*255,0,255))*256+Math.round(Ht($t.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Cn){Ze.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Ga);const i=eu(Bi.h,Ga.h,n),r=eu(Bi.s,Ga.s,n),s=eu(Bi.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ye;Ye.NAMES=F0;let YS=0;class fr extends Gr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=sr(),this.name="",this.blending=Ns,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O0 extends fr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,Wa=new Se;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class k0 extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z0 extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ft extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $S=0;const An=new ct,vu=new Nt,is=new I,_n=new Br,_o=new Br,Ot=new I;class Wt extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?z0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,_o.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,_o.max),_n.expandByPoint(Ot)):(_n.expandByPoint(_o.min),_n.expandByPoint(_o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Ot.add(is)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new I,l[R]=new I;const c=new I,d=new I,f=new I,h=new Se,p=new Se,g=new Se,S=new I,m=new I;function u(R,T,w){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),d.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(S.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[R].add(S),a[T].add(S),a[w].add(S),l[R].add(m),l[T].add(m),l[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,T=_.length;R<T;++R){const w=_[R],L=w.start,W=w.count;for(let F=L,j=L+W;F<j;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new I,y=new I,P=new I,b=new I;function C(R){P.fromBufferAttribute(r,R),b.copy(P);const T=a[R];v.copy(T),v.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(b,T);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,T=_.length;R<T;++R){const w=_[R],L=w.start,W=w.count;for(let F=L,j=L+W;F<j;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*d;for(let u=0;u<d;u++)h[g++]=c[p++]}return new Un(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new ct,gr=new ha,ja=new da,cm=new I,Xa=new I,Ya=new I,$a=new I,yu=new I,qa=new I,um=new I,Ka=new I;class Ie extends Nt{constructor(e=new Wt,n=new O0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(yu.fromBufferAttribute(f,e),o?qa.addScaledVector(yu,d):qa.addScaledVector(yu.sub(n),d))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(ja.containsPoint(gr.origin)===!1&&(gr.intersectSphere(ja,cm)===null||gr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),gr.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const b=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);r=Za(this,u,e,i,c,d,f,b,C,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,u=S;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Za(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const b=y,C=y+1,R=y+2;r=Za(this,u,e,i,c,d,f,b,C,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,u=S;m<u;m+=3){const _=m,v=m+1,y=m+2;r=Za(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qS(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xa),t.getVertexPosition(l,Ya),t.getVertexPosition(c,$a);const d=qS(t,e,n,i,Xa,Ya,$a,um);if(d){const f=new I;Dn.getBarycoord(um,Xa,Ya,$a,f),r&&(d.uv=Dn.getInterpolatedAttribute(r,a,l,c,f,new Se)),s&&(d.uv1=Dn.getInterpolatedAttribute(s,a,l,c,f,new Se)),o&&(d.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Dn.getNormal(Xa,Ya,$a,h.normal),d.face=h,d.barycoord=f}return d}class dt extends Wt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function g(S,m,u,_,v,y,P,b,C,R,T){const w=y/C,L=P/R,W=y/2,F=P/2,j=b/2,K=C+1,X=R+1;let ne=0,N=0;const q=new I;for(let te=0;te<X;te++){const oe=te*L-F;for(let he=0;he<K;he++){const De=he*w-W;q[S]=De*_,q[m]=oe*v,q[u]=j,c.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[u]=b>0?1:-1,d.push(q.x,q.y,q.z),f.push(he/C),f.push(1-te/R),ne+=1}}for(let te=0;te<R;te++)for(let oe=0;oe<C;oe++){const he=h+oe+K*te,De=h+oe+K*(te+1),D=h+(oe+1)+K*(te+1),Z=h+(oe+1)+K*te;l.push(he,De,Z),l.push(De,D,Z),N+=6}a.addGroup(p,N,T),p+=N,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function KS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ZS={clone:$s,merge:Qt};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends fr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H0 extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new I,dm=new Se,hm=new Se;class Ln extends H0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class eM extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new Ln(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new Ln(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new Ln(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new Ln(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new Ln(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class V0 extends nn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dt(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ir});s.uniforms.tEquirect.value=n;const o=new Ie(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=ri),new eM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new I,nM=new I,iM=new Ge;class _i{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(nM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iM.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new da,Ja=new I;class Mf{constructor(e=new _i,n=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],g=r[9],S=r[10],m=r[11],u=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-u).normalize(),i[1].setComponents(l+s,h+c,m+p,y+u).normalize(),i[2].setComponents(l+o,h+d,m+g,y+_).normalize(),i[3].setComponents(l-o,h-d,m-g,y-_).normalize(),i[4].setComponents(l-a,h-f,m-S,y-v).normalize(),n===Mi)i[5].setComponents(l+a,h+f,m+S,y+v).normalize();else if(n===ec)i[5].setComponents(a,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class fa extends Wt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],g=[],S=[],m=[];for(let u=0;u<d;u++){const _=u*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-_,0),S.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,y=_+c*(u+1),P=_+1+c*(u+1),b=_+1+c*u;p.push(v,y,b),p.push(y,P,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var sM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ew=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Aw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:sM,alphahash_pars_fragment:oM,alphamap_fragment:aM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:yM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:wM,color_pars_fragment:TM,color_pars_vertex:AM,color_vertex:bM,common:CM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:PM,displacementmap_pars_vertex:LM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:IM,colorspace_fragment:UM,colorspace_pars_fragment:FM,envmap_fragment:OM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:ZM,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:jM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:qM,lights_pars_begin:KM,lights_toon_fragment:JM,lights_toon_pars_fragment:QM,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:dE,map_pars_fragment:hE,map_particle_fragment:fE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:yE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:wE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:LE,opaque_fragment:DE,packing:NE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:FE,dithering_pars_fragment:OE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:HE,shadowmap_vertex:VE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:jE,skinning_vertex:XE,skinnormal_vertex:YE,specularmap_fragment:$E,specularmap_pars_fragment:qE,tonemapping_fragment:KE,tonemapping_pars_fragment:ZE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:ew,uv_pars_vertex:tw,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:ow,backgroundCube_frag:aw,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:dw,distanceRGBA_vert:hw,distanceRGBA_frag:fw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:gw,linedashed_frag:_w,meshbasic_vert:vw,meshbasic_frag:yw,meshlambert_vert:xw,meshlambert_frag:Sw,meshmatcap_vert:Mw,meshmatcap_frag:Ew,meshnormal_vert:ww,meshnormal_frag:Tw,meshphong_vert:Aw,meshphong_frag:bw,meshphysical_vert:Cw,meshphysical_frag:Rw,meshtoon_vert:Pw,meshtoon_frag:Lw,points_vert:Dw,points_frag:Nw,shadow_vert:Iw,shadow_frag:Uw,sprite_vert:Fw,sprite_frag:Ow},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Qt([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Qt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:Qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Qa={r:0,b:0,g:0},vr=new ai,kw=new ct;function zw(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function S(_){let v=!1;const y=g(_);y===null?u(a,l):y&&y.isColor&&(u(y,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ec)?(d===void 0&&(d=new Ie(new dt(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:$s(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),vr.copy(v.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(vr)),d.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,(f!==y||h!==y.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ie(new fa(2,2),new cr({name:"BackgroundMaterial",uniforms:$s(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Qa,B0(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:S,addToRenderList:m}}function Bw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(w,L,W,F,j){let K=!1;const X=f(F,W,L);s!==X&&(s=X,c(s.object)),K=p(w,F,W,j),K&&g(w,F,W,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(w,L,W,F),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function f(w,L,W){const F=W.wireframe===!0;let j=i[w.id];j===void 0&&(j={},i[w.id]=j);let K=j[L.id];K===void 0&&(K={},j[L.id]=K);let X=K[F];return X===void 0&&(X=h(l()),K[F]=X),X}function h(w){const L=[],W=[],F=[];for(let j=0;j<n;j++)L[j]=0,W[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,L,W,F){const j=s.attributes,K=L.attributes;let X=0;const ne=W.getAttributes();for(const N in ne)if(ne[N].location>=0){const te=j[N];let oe=K[N];if(oe===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function g(w,L,W,F){const j={},K=L.attributes;let X=0;const ne=W.getAttributes();for(const N in ne)if(ne[N].location>=0){let te=K[N];te===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(te=w.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),j[N]=oe,X++}s.attributes=j,s.attributesNum=X,s.index=F}function S(){const w=s.newAttributes;for(let L=0,W=w.length;L<W;L++)w[L]=0}function m(w){u(w,0)}function u(w,L){const W=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;W[w]=1,F[w]===0&&(t.enableVertexAttribArray(w),F[w]=1),j[w]!==L&&(t.vertexAttribDivisor(w,L),j[w]=L)}function _(){const w=s.newAttributes,L=s.enabledAttributes;for(let W=0,F=L.length;W<F;W++)L[W]!==w[W]&&(t.disableVertexAttribArray(W),L[W]=0)}function v(w,L,W,F,j,K,X){X===!0?t.vertexAttribIPointer(w,L,W,j,K):t.vertexAttribPointer(w,L,W,F,j,K)}function y(w,L,W,F){S();const j=F.attributes,K=W.getAttributes(),X=L.defaultAttributeValues;for(const ne in K){const N=K[ne];if(N.location>=0){let q=j[ne];if(q===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(q=w.instanceColor)),q!==void 0){const te=q.normalized,oe=q.itemSize,he=e.get(q);if(he===void 0)continue;const De=he.buffer,D=he.type,Z=he.bytesPerElement,le=D===t.INT||D===t.UNSIGNED_INT||q.gpuType===mf;if(q.isInterleavedBufferAttribute){const Q=q.data,me=Q.stride,Me=q.offset;if(Q.isInstancedInterleavedBuffer){for(let Ne=0;Ne<N.locationSize;Ne++)u(N.location+Ne,Q.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ne=0;Ne<N.locationSize;Ne++)m(N.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Ne=0;Ne<N.locationSize;Ne++)v(N.location+Ne,oe/N.locationSize,D,te,me*Z,(Me+oe/N.locationSize*Ne)*Z,le)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<N.locationSize;Q++)u(N.location+Q,q.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<N.locationSize;Q++)m(N.location+Q);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Q=0;Q<N.locationSize;Q++)v(N.location+Q,oe/N.locationSize,D,te,oe*Z,oe/N.locationSize*Q*Z,le)}}else if(X!==void 0){const te=X[ne];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(N.location,te);break;case 3:t.vertexAttrib3fv(N.location,te);break;case 4:t.vertexAttrib4fv(N.location,te);break;default:t.vertexAttrib1fv(N.location,te)}}}}_()}function P(){R();for(const w in i){const L=i[w];for(const W in L){const F=L[W];for(const j in F)d(F[j].object),delete F[j];delete L[W]}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const W in L){const F=L[W];for(const j in F)d(F[j].object),delete F[j];delete L[W]}delete i[w.id]}function C(w){for(const L in i){const W=i[L];if(W[w.id]===void 0)continue;const F=W[w.id];for(const j in F)d(F[j].object),delete F[j];delete W[w.id]}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function Hw(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let g=0;for(let S=0;S<f;S++)g+=d[S]*h[S];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Xn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Si&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:b}}function Gw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _i,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,v=_*4;let y=u.clippingState||null;l.value=y,y=d(g,h,v,p);for(let P=0;P!==v;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const u=p+S*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==S;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Ww(t){let e=new WeakMap;function n(o,a){return a===kd?o.mapping=Ws:a===zd&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kd||a===zd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class W0 extends H0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,fm=[.125,.215,.35,.446,.526,.582],wr=20,Su=new W0,pm=new Ye;let Mu=null,Eu=0,wu=0,Tu=!1;const Mr=(1+Math.sqrt(5))/2,os=1/Mr,mm=[new I(-Mr,os,0),new I(Mr,os,0),new I(-os,0,Mr),new I(os,0,Mr),new I(0,Mr,-os),new I(0,Mr,os),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,wu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ua,format:Xn,colorSpace:Js,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jw(s)),this._blurMaterial=Xw(s,e,n)}return r}_compileMaterial(e){const n=new Ie(this._lodPlanes[0],e);this._renderer.compile(n,Su)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(pm),d.toneMapping=rr,d.autoClear=!1;const p=new O0({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ie(new dt,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(pm),S=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;el(r,_*v,u>2?v:0,v,v),d.setRenderTarget(r),S&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ie(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),S=s/g,m=isFinite(s)?1+Math.floor(d*S):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const u=[];let _=0;for(let C=0;C<wr;++C){const R=C/S,T=Math.exp(-R*R/2);u.push(T),C===0?_+=T:C<m&&(_+=2*T)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Ts?r-v+Ts:0),b=4*(this._cubeSize-y);el(n,P,b,3*y,2*y),l.setRenderTarget(n),l.render(f,Su)}}function jw(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=fm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,S=3,m=2,u=1,_=new Float32Array(S*g*p),v=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,R=b>2?0:-1,T=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];_.set(T,S*g*b),v.set(h,m*g*b);const w=[b,b,b,b,b,b];y.set(w,u*g*b)}const P=new Wt;P.setAttribute("position",new Un(_,S)),P.setAttribute("uv",new Un(v,m)),P.setAttribute("faceIndex",new Un(y,u)),e.push(P),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Xw(t,e,n){const i=new Float32Array(wr),r=new I(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function vm(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function ym(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Ef(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kd||l===zd,d=l===Ws||l===js;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $w(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const S=h.morphAttributes[g];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const S=p[g];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let S=0;if(p!==null){const _=p.array;S=p.version;for(let v=0,y=_.length;v<y;v+=3){const P=_[v+0],b=_[v+1],C=_[v+2];h.push(P,b,b,C,C,P)}}else if(g!==void 0){const _=g.array;S=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const P=v+0,b=v+1,C=v+2;h.push(P,b,b,C,C,P)}}else return;const m=new(N0(h)?z0:k0)(h,1);m.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Kw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function f(h,p,g,S){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*S[_];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Zw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jw(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),S===!0&&(v=3);let y=a.attributes.position.count*v,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*P*4*f),C=new U0(b,y,P,f);C.type=Si,C.needsUpdate=!0;const R=v*4;for(let w=0;w<f;w++){const L=m[w],W=u[w],F=_[w],j=y*P*4*w;for(let K=0;K<L.count;K++){const X=K*R;p===!0&&(r.fromBufferAttribute(L,K),b[j+X+0]=r.x,b[j+X+1]=r.y,b[j+X+2]=r.z,b[j+X+3]=0),g===!0&&(r.fromBufferAttribute(W,K),b[j+X+4]=r.x,b[j+X+5]=r.y,b[j+X+6]=r.z,b[j+X+7]=0),S===!0&&(r.fromBufferAttribute(F,K),b[j+X+8]=r.x,b[j+X+9]=r.y,b[j+X+10]=r.z,b[j+X+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Se(y,P)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Qw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class j0 extends nn{constructor(e,n,i,r,s,o,a,l,c,d=Is){if(d!==Is&&d!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Is&&(i=Or),i===void 0&&d===Ys&&(i=Xs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const X0=new nn,xm=new j0(1,1),Y0=new U0,$0=new zS,q0=new V0,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function e1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function r1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),Ut(n,i)}}function s1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),Ut(n,i)}}function o1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),Ut(n,i)}}function a1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function d1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function m1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xm.compareFunction=D0,s=xm):s=X0,n.setTexture2D(e||s,r)}function g1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$0,r)}function _1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q0,r)}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Y0,r)}function y1(t){switch(t){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return h1;case 36295:return f1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function x1(t,e){t.uniform1fv(this.addr,e)}function S1(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function M1(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function E1(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function w1(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function T1(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function A1(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function b1(t,e){t.uniform1iv(this.addr,e)}function C1(t,e){t.uniform2iv(this.addr,e)}function R1(t,e){t.uniform3iv(this.addr,e)}function P1(t,e){t.uniform4iv(this.addr,e)}function L1(t,e){t.uniform1uiv(this.addr,e)}function D1(t,e){t.uniform2uiv(this.addr,e)}function N1(t,e){t.uniform3uiv(this.addr,e)}function I1(t,e){t.uniform4uiv(this.addr,e)}function U1(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||X0,s[o])}function F1(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$0,s[o])}function O1(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||q0,s[o])}function k1(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Y0,s[o])}function z1(t){switch(t){case 5126:return x1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return w1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return b1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}class B1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=y1(n.type)}}class H1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=z1(n.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function G1(t,e,n){const i=t.name,r=i.length;for(Au.lastIndex=0;;){const s=Au.exec(i),o=Au.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(n,c===void 0?new B1(a,t,e):new H1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new V1(a),Am(n,f)),n=f}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);G1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const W1=37297;let j1=0;function X1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Cm=new Ge;function Y1(t){Ze._getMatrix(Cm,Ze.workingColorSpace,t);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case wc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+X1(t.getShaderSource(e),o)}else return r}function $1(t,e){const n=Y1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function q1(t,e){let n;switch(e){case dS:n="Linear";break;case hS:n="Reinhard";break;case fS:n="Cineon";break;case pS:n="ACESFilmic";break;case gS:n="AgX";break;case _S:n="Neutral";break;case mS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tl=new I;function K1(){Ze.getLuminanceCoefficients(tl);const t=tl.x.toFixed(4),e=tl.y.toFixed(4),n=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function J1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(t){return t.replace(eT,nT)}const tT=new Map;function nT(t,e){let n=Xe[e];if(n===void 0){const i=tT.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(n)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(iT,rT)}function rT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function oT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case cS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function cT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sT(n),c=oT(n),d=aT(n),f=lT(n),h=cT(n),p=Z1(n),g=J1(s),S=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),u.length>0&&(u+=`
`)):(m=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),u=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==rr?q1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=gh(o),o=Pm(o,n),o=Lm(o,n),a=gh(a),a=Pm(a,n),a=Lm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+o,y=_+u+a,P=bm(r,r.VERTEX_SHADER,v),b=bm(r,r.FRAGMENT_SHADER,y);r.attachShader(S,P),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(L){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(S).trim(),F=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(b).trim();let K=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,P,b);else{const ne=Rm(r,P,"vertex"),N=Rm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ne+`
`+N)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||j==="")&&(X=!1);X&&(L.diagnostics={runnable:K,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(P),r.deleteShader(b),R=new Rl(r,S),T=Q1(r,S)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(S,W1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=b,this}let dT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function pT(t,e,n,i,r,s,o){const a=new Sf,l=new hT,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,w,L,W,F){const j=W.fog,K=F.geometry,X=T.isMeshStandardMaterial?W.environment:null,ne=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),N=ne&&ne.mapping===Ec?ne.image.height:null,q=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=te!==void 0?te.length:0;let he=0;K.morphAttributes.position!==void 0&&(he=1),K.morphAttributes.normal!==void 0&&(he=2),K.morphAttributes.color!==void 0&&(he=3);let De,D,Z,le;if(q){const et=ti[q];De=et.vertexShader,D=et.fragmentShader}else De=T.vertexShader,D=T.fragmentShader,l.update(T),Z=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const Q=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Me=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,He=!!T.map,ke=!!T.matcap,pt=!!ne,z=!!T.aoMap,Rt=!!T.lightMap,Fe=!!T.bumpMap,We=!!T.normalMap,O=!!T.displacementMap,G=!!T.emissiveMap,V=!!T.metalnessMap,E=!!T.roughnessMap,x=T.anisotropy>0,U=T.clearcoat>0,ee=T.dispersion>0,re=T.iridescence>0,ie=T.sheen>0,Ae=T.transmission>0,ge=x&&!!T.anisotropyMap,Ee=U&&!!T.clearcoatMap,Ke=U&&!!T.clearcoatNormalMap,ue=U&&!!T.clearcoatRoughnessMap,ve=re&&!!T.iridescenceMap,be=re&&!!T.iridescenceThicknessMap,Ue=ie&&!!T.sheenColorMap,Te=ie&&!!T.sheenRoughnessMap,qe=!!T.specularMap,ze=!!T.specularColorMap,tt=!!T.specularIntensityMap,k=Ae&&!!T.transmissionMap,fe=Ae&&!!T.thicknessMap,J=!!T.gradientMap,se=!!T.alphaMap,ye=T.alphaTest>0,_e=!!T.alphaHash,Be=!!T.extensions;let yt=rr;T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Ft={shaderID:q,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:D,defines:T.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Me,instancingColor:Me&&F.instanceColor!==null,instancingMorph:Me&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Js,alphaToCoverage:!!T.alphaToCoverage,map:He,matcap:ke,envMap:pt,envMapMode:pt&&ne.mapping,envMapCubeUVHeight:N,aoMap:z,lightMap:Rt,bumpMap:Fe,normalMap:We,displacementMap:h&&O,emissiveMap:G,normalMapObjectSpace:We&&T.normalMapType===SS,normalMapTangentSpace:We&&T.normalMapType===L0,metalnessMap:V,roughnessMap:E,anisotropy:x,anisotropyMap:ge,clearcoat:U,clearcoatMap:Ee,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ue,dispersion:ee,iridescence:re,iridescenceMap:ve,iridescenceThicknessMap:be,sheen:ie,sheenColorMap:Ue,sheenRoughnessMap:Te,specularMap:qe,specularColorMap:ze,specularIntensityMap:tt,transmission:Ae,transmissionMap:k,thicknessMap:fe,gradientMap:J,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:ye,alphaHash:_e,combine:T.combine,mapUv:He&&S(T.map.channel),aoMapUv:z&&S(T.aoMap.channel),lightMapUv:Rt&&S(T.lightMap.channel),bumpMapUv:Fe&&S(T.bumpMap.channel),normalMapUv:We&&S(T.normalMap.channel),displacementMapUv:O&&S(T.displacementMap.channel),emissiveMapUv:G&&S(T.emissiveMap.channel),metalnessMapUv:V&&S(T.metalnessMap.channel),roughnessMapUv:E&&S(T.roughnessMap.channel),anisotropyMapUv:ge&&S(T.anisotropyMap.channel),clearcoatMapUv:Ee&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&S(T.sheenRoughnessMap.channel),specularMapUv:qe&&S(T.specularMap.channel),specularColorMapUv:ze&&S(T.specularColorMap.channel),specularIntensityMapUv:tt&&S(T.specularIntensityMap.channel),transmissionMapUv:k&&S(T.transmissionMap.channel),thicknessMapUv:fe&&S(T.thicknessMap.channel),alphaMapUv:se&&S(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(We||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(He||se),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:me,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:He&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:G&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)w.push(L),w.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(w,T),v(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function _(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function v(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const w=g[T.type];let L;if(w){const W=ti[w];L=ZS.clone(W.uniforms)}else L=T.uniforms;return L}function P(T,w){let L;for(let W=0,F=d.length;W<F;W++){const j=d[W];if(j.cacheKey===w){L=j,++L.usedTimes;break}}return L===void 0&&(L=new uT(t,w,T,s),d.push(L)),L}function b(T){if(--T.usedTimes===0){const w=d.indexOf(T);d[w]=d[d.length-1],d.pop(),T.destroy()}}function C(T){l.remove(T)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:b,releaseShaderCache:C,programs:d,dispose:R}}function mT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,S,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:S,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=S,u.group=m),e++,u}function a(f,h,p,g,S,m){const u=o(f,h,p,g,S,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,g,S,m){const u=o(f,h,p,g,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||gT),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function _T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Um,t.set(i,[o])):r>=s.length?(o=new Um,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ye};break;case"SpotLight":n={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function yT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function ST(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MT(t){const e=new vT,n=yT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ct,o=new ct;function a(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,S=0,m=0,u=0,_=0,v=0,y=0,P=0,b=0,C=0;c.sort(ST);for(let T=0,w=c.length;T<w;T++){const L=c[T],W=L.color,F=L.intensity,j=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=W.r*F,f+=W.g*F,h+=W.b*F;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],F);C++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,N=n.get(L);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(W).multiplyScalar(F),X.distance=j,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[S]=X;const ne=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ne.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[S]=ne.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=K,y++}S++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(W).multiplyScalar(F),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ne=L.shadow,N=n.get(L);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,N.shadowCameraNear=ne.camera.near,N.shadowCameraFar=ne.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(F),X.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==P||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=S,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=P,R.numLightProbes=C,i.version=xT++)}function l(c,d){let f=0,h=0,p=0,g=0,S=0;const m=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new MT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ET(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fm(t),e.set(r,[a])):s>=o.length?(a=new Fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class wT extends fr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TT extends fr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CT(t,e,n){let i=new Mf;const r=new Se,s=new Se,o=new Tt,a=new wT({depthPacking:xS}),l=new TT,c={},d=n.maxTextureSize,f={[lr]:pn,[pn]:lr,[vi]:vi},h=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:AT,fragmentShader:bT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let u=this.type;this.render=function(b,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),W=t.state;W.setBlending(ir),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=u!==pi&&this.type===pi,j=u===pi&&this.type!==pi;for(let K=0,X=b.length;K<X;K++){const ne=b[K],N=ne.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||F===!0||j===!0){const oe=this.type!==pi?{minFilter:qn,magFilter:qn}:{};N.map!==null&&N.map.dispose(),N.map=new kr(r.x,r.y,oe),N.map.texture.name=ne.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const te=N.getViewportCount();for(let oe=0;oe<te;oe++){const he=N.getViewport(oe);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),W.viewport(o),N.updateMatrices(ne,oe),i=N.getFrustum(),y(C,R,N.camera,ne,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&_(N,R),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,L)};function _(b,C){const R=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,R,h,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,R,p,S,null)}function v(b,C,R,T){let w=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)w=L;else if(w=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=w.uuid,F=C.uuid;let j=c[W];j===void 0&&(j={},c[W]=j);let K=j[F];K===void 0&&(K=w.clone(),j[F]=K,C.addEventListener("dispose",P)),w=K}if(w.visible=C.visible,w.wireframe=C.wireframe,T===pi?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:f[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=R}return w}function y(b,C,R,T,w){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const F=e.update(b),j=b.material;if(Array.isArray(j)){const K=F.groups;for(let X=0,ne=K.length;X<ne;X++){const N=K[X],q=j[N.materialIndex];if(q&&q.visible){const te=v(b,q,T,w);b.onBeforeShadow(t,b,C,R,F,te,N),t.renderBufferDirect(R,null,F,te,b,N),b.onAfterShadow(t,b,C,R,F,te,N)}}}else if(j.visible){const K=v(b,j,T,w);b.onBeforeShadow(t,b,C,R,F,K,null),t.renderBufferDirect(R,null,F,K,b,null),b.onAfterShadow(t,b,C,R,F,K,null)}}const W=b.children;for(let F=0,j=W.length;F<j;F++)y(W[F],C,R,T,w)}function P(b){b.target.removeEventListener("dispose",P);for(const R in c){const T=c[R],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const RT={[Ld]:Dd,[Nd]:Fd,[Id]:Od,[Gs]:Ud,[Dd]:Ld,[Fd]:Nd,[Od]:Id,[Ud]:Gs};function PT(t,e){function n(){let k=!1;const fe=new Tt;let J=null;const se=new Tt(0,0,0,0);return{setMask:function(ye){J!==ye&&!k&&(t.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){k=ye},setClear:function(ye,_e,Be,yt,Ft){Ft===!0&&(ye*=yt,_e*=yt,Be*=yt),fe.set(ye,_e,Be,yt),se.equals(fe)===!1&&(t.clearColor(ye,_e,Be,yt),se.copy(fe))},reset:function(){k=!1,J=null,se.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,J=null,se=null,ye=null;return{setReversed:function(_e){if(fe!==_e){const Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=ye;ye=null,this.setClear(yt)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?Q(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(_e){J!==_e&&!k&&(t.depthMask(_e),J=_e)},setFunc:function(_e){if(fe&&(_e=RT[_e]),se!==_e){switch(_e){case Ld:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=_e}},setLocked:function(_e){k=_e},setClear:function(_e){ye!==_e&&(fe&&(_e=1-_e),t.clearDepth(_e),ye=_e)},reset:function(){k=!1,J=null,se=null,ye=null,fe=!1}}}function r(){let k=!1,fe=null,J=null,se=null,ye=null,_e=null,Be=null,yt=null,Ft=null;return{setTest:function(et){k||(et?Q(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(et){fe!==et&&!k&&(t.stencilMask(et),fe=et)},setFunc:function(et,on,wn){(J!==et||se!==on||ye!==wn)&&(t.stencilFunc(et,on,wn),J=et,se=on,ye=wn)},setOp:function(et,on,wn){(_e!==et||Be!==on||yt!==wn)&&(t.stencilOp(et,on,wn),_e=et,Be=on,yt=wn)},setLocked:function(et){k=et},setClear:function(et){Ft!==et&&(t.clearStencil(et),Ft=et)},reset:function(){k=!1,fe=null,J=null,se=null,ye=null,_e=null,Be=null,yt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],g=null,S=!1,m=null,u=null,_=null,v=null,y=null,P=null,b=null,C=new Ye(0,0,0),R=0,T=!1,w=null,L=null,W=null,F=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=ne>=1):N.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=ne>=2);let q=null,te={};const oe=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),De=new Tt().fromArray(oe),D=new Tt().fromArray(he);function Z(k,fe,J,se){const ye=new Uint8Array(4),_e=t.createTexture();t.bindTexture(k,_e),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<J;Be++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(fe+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return _e}const le={};le[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(t.DEPTH_TEST),o.setFunc(Gs),Fe(!1),We(Vp),Q(t.CULL_FACE),z(ir);function Q(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function me(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function Me(k,fe){return f[k]!==fe?(t.bindFramebuffer(k,fe),f[k]=fe,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(k,fe){let J=p,se=!1;if(k){J=h.get(fe),J===void 0&&(J=[],h.set(fe,J));const ye=k.textures;if(J.length!==ye.length||J[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Be=ye.length;_e<Be;_e++)J[_e]=t.COLOR_ATTACHMENT0+_e;J.length=ye.length,se=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,se=!0);se&&t.drawBuffers(J)}function He(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const ke={[Er]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[Yx]:t.FUNC_REVERSE_SUBTRACT};ke[$x]=t.MIN,ke[qx]=t.MAX;const pt={[Kx]:t.ZERO,[Zx]:t.ONE,[Jx]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Qx]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[oS]:t.ONE_MINUS_CONSTANT_COLOR,[aS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function z(k,fe,J,se,ye,_e,Be,yt,Ft,et){if(k===ir){S===!0&&(me(t.BLEND),S=!1);return}if(S===!1&&(Q(t.BLEND),S=!0),k!==jx){if(k!==m||et!==T){if((u!==Er||y!==Er)&&(t.blendEquation(t.FUNC_ADD),u=Er,y=Er),et)switch(k){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,v=null,P=null,b=null,C.set(0,0,0),R=0,m=k,T=et}return}ye=ye||fe,_e=_e||J,Be=Be||se,(fe!==u||ye!==y)&&(t.blendEquationSeparate(ke[fe],ke[ye]),u=fe,y=ye),(J!==_||se!==v||_e!==P||Be!==b)&&(t.blendFuncSeparate(pt[J],pt[se],pt[_e],pt[Be]),_=J,v=se,P=_e,b=Be),(yt.equals(C)===!1||Ft!==R)&&(t.blendColor(yt.r,yt.g,yt.b,Ft),C.copy(yt),R=Ft),m=k,T=!1}function Rt(k,fe){k.side===vi?me(t.CULL_FACE):Q(t.CULL_FACE);let J=k.side===pn;fe&&(J=!J),Fe(J),k.blending===Ns&&k.transparent===!1?z(ir):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const se=k.stencilWrite;a.setTest(se),se&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),G(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(k){w!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),w=k)}function We(k){k!==Vx?(Q(t.CULL_FACE),k!==L&&(k===Vp?t.cullFace(t.BACK):k===Gx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),L=k}function O(k){k!==W&&(X&&t.lineWidth(k),W=k)}function G(k,fe,J){k?(Q(t.POLYGON_OFFSET_FILL),(F!==fe||j!==J)&&(t.polygonOffset(fe,J),F=fe,j=J)):me(t.POLYGON_OFFSET_FILL)}function V(k){k?Q(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function E(k){k===void 0&&(k=t.TEXTURE0+K-1),q!==k&&(t.activeTexture(k),q=k)}function x(k,fe,J){J===void 0&&(q===null?J=t.TEXTURE0+K-1:J=q);let se=te[J];se===void 0&&(se={type:void 0,texture:void 0},te[J]=se),(se.type!==k||se.texture!==fe)&&(q!==J&&(t.activeTexture(J),q=J),t.bindTexture(k,fe||le[k]),se.type=k,se.texture=fe)}function U(){const k=te[q];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(k){De.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),De.copy(k))}function Te(k){D.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),D.copy(k))}function qe(k,fe){let J=c.get(fe);J===void 0&&(J=new WeakMap,c.set(fe,J));let se=J.get(k);se===void 0&&(se=t.getUniformBlockIndex(fe,k.name),J.set(k,se))}function ze(k,fe){const se=c.get(fe).get(k);l.get(fe)!==se&&(t.uniformBlockBinding(fe,se,k.__bindingPointIndex),l.set(fe,se))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},q=null,te={},f={},h=new WeakMap,p=[],g=null,S=!1,m=null,u=null,_=null,v=null,y=null,P=null,b=null,C=new Ye(0,0,0),R=0,T=!1,w=null,L=null,W=null,F=null,j=null,De.set(0,0,t.canvas.width,t.canvas.height),D.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:me,bindFramebuffer:Me,drawBuffers:Ne,useProgram:He,setBlending:z,setMaterial:Rt,setFlipSided:Fe,setCullFace:We,setLineWidth:O,setPolygonOffset:G,setScissorTest:V,activeTexture:E,bindTexture:x,unbindTexture:U,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:ve,texImage3D:be,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Ke,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:Ae,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ee,scissor:Ue,viewport:Te,reset:tt}}function Om(t,e,n,i){const r=LT(i);switch(n){case w0:return t*e;case A0:return t*e;case b0:return t*e*2;case C0:return t*e/r.components*r.byteLength;case vf:return t*e/r.components*r.byteLength;case R0:return t*e*2/r.components*r.byteLength;case yf:return t*e*2/r.components*r.byteLength;case T0:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case xf:return t*e*4/r.components*r.byteLength;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Vd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case Xd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case ch:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P0:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hh:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LT(t){switch(t){case Pi:case S0:return{byteLength:1,components:1};case ra:case M0:case ua:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case Or:case mf:case Si:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function DT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):tc("canvas")}function S(E,x,U){let ee=1;const re=V(E);if((re.width>U||re.height>U)&&(ee=U/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){const ie=Math.floor(ee*re.width),Ae=Math.floor(ee*re.height);f===void 0&&(f=g(ie,Ae));const ge=x?g(ie,Ae):f;return ge.width=ie,ge.height=Ae,ge.getContext("2d").drawImage(E,0,0,ie,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ie+"x"+Ae+")."),ge}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){t.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(E,x,U,ee,re=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=x;if(x===t.RED&&(U===t.FLOAT&&(ie=t.R32F),U===t.HALF_FLOAT&&(ie=t.R16F),U===t.UNSIGNED_BYTE&&(ie=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(ie=t.R8UI),U===t.UNSIGNED_SHORT&&(ie=t.R16UI),U===t.UNSIGNED_INT&&(ie=t.R32UI),U===t.BYTE&&(ie=t.R8I),U===t.SHORT&&(ie=t.R16I),U===t.INT&&(ie=t.R32I)),x===t.RG&&(U===t.FLOAT&&(ie=t.RG32F),U===t.HALF_FLOAT&&(ie=t.RG16F),U===t.UNSIGNED_BYTE&&(ie=t.RG8)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(ie=t.RG8UI),U===t.UNSIGNED_SHORT&&(ie=t.RG16UI),U===t.UNSIGNED_INT&&(ie=t.RG32UI),U===t.BYTE&&(ie=t.RG8I),U===t.SHORT&&(ie=t.RG16I),U===t.INT&&(ie=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),U===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),U===t.UNSIGNED_INT&&(ie=t.RGB32UI),U===t.BYTE&&(ie=t.RGB8I),U===t.SHORT&&(ie=t.RGB16I),U===t.INT&&(ie=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),U===t.UNSIGNED_INT&&(ie=t.RGBA32UI),U===t.BYTE&&(ie=t.RGBA8I),U===t.SHORT&&(ie=t.RGBA16I),U===t.INT&&(ie=t.RGBA32I)),x===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),x===t.RGBA){const Ae=re?wc:Ze.getTransfer(ee);U===t.FLOAT&&(ie=t.RGBA32F),U===t.HALF_FLOAT&&(ie=t.RGBA16F),U===t.UNSIGNED_BYTE&&(ie=Ae===ot?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(E,x){let U;return E?x===null||x===Or||x===Xs?U=t.DEPTH24_STENCIL8:x===Si?U=t.DEPTH32F_STENCIL8:x===ra&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Or||x===Xs?U=t.DEPTH_COMPONENT24:x===Si?U=t.DEPTH_COMPONENT32F:x===ra&&(U=t.DEPTH_COMPONENT16),U}function P(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qn&&E.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function b(E){const x=E.target;x.removeEventListener("dispose",b),R(x),x.isVideoTexture&&d.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),w(x)}function R(E){const x=i.get(E);if(x.__webglInit===void 0)return;const U=E.source,ee=h.get(U);if(ee){const re=ee[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(E),Object.keys(ee).length===0&&h.delete(U)}i.remove(E)}function T(E){const x=i.get(E);t.deleteTexture(x.__webglTexture);const U=E.source,ee=h.get(U);delete ee[x.__cacheKey],o.memory.textures--}function w(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let re=0;re<x.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(x.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[ee]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=E.textures;for(let ee=0,re=U.length;ee<re;ee++){const ie=i.get(U[ee]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(U[ee])}i.remove(E)}let L=0;function W(){L=0}function F(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function j(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const U=i.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(U,E,x);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function X(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){D(U,E,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function ne(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){D(U,E,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function N(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Z(U,E,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const q={[Bd]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},te={[qn]:t.NEAREST,[vS]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},oe={[MS]:t.NEVER,[CS]:t.ALWAYS,[ES]:t.LESS,[D0]:t.LEQUAL,[wS]:t.EQUAL,[bS]:t.GEQUAL,[TS]:t.GREATER,[AS]:t.NOTEQUAL};function he(E,x){if(x.type===Si&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===Qc||x.magFilter===Ua||x.magFilter===Rr||x.minFilter===ri||x.minFilter===Qc||x.minFilter===Ua||x.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,q[x.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,q[x.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,q[x.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,te[x.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn||x.minFilter!==Ua&&x.minFilter!==Rr||x.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function De(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",b));const ee=x.source;let re=h.get(ee);re===void 0&&(re={},h.set(ee,re));const ie=j(x);if(ie!==E.__cacheKey){re[ie]===void 0&&(re[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),re[ie].usedTimes++;const Ae=re[E.__cacheKey];Ae!==void 0&&(re[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(x)),E.__cacheKey=ie,E.__webglTexture=re[ie].texture}return U}function D(E,x,U){let ee=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=t.TEXTURE_3D);const re=De(E,x),ie=x.source;n.bindTexture(ee,E.__webglTexture,t.TEXTURE0+U);const Ae=i.get(ie);if(ie.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+U);const ge=Ze.getPrimaries(Ze.workingColorSpace),Ee=x.colorSpace===Xi?null:Ze.getPrimaries(x.colorSpace),Ke=x.colorSpace===Xi||ge===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ue=S(x.image,!1,r.maxTextureSize);ue=G(x,ue);const ve=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let Ue=v(x.internalFormat,ve,be,x.colorSpace,x.isVideoTexture);he(ee,x);let Te;const qe=x.mipmaps,ze=x.isVideoTexture!==!0,tt=Ae.__version===void 0||re===!0,k=ie.dataReady,fe=P(x,ue);if(x.isDepthTexture)Ue=y(x.format===Ys,x.type),tt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Ue,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ue,ue.width,ue.height,0,ve,be,null));else if(x.isDataTexture)if(qe.length>0){ze&&tt&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,qe[0].width,qe[0].height);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],ze?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Te.width,Te.height,ve,be,Te.data):n.texImage2D(t.TEXTURE_2D,J,Ue,Te.width,Te.height,0,ve,be,Te.data);x.generateMipmaps=!1}else ze?(tt&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,ue.width,ue.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,be,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,ue.width,ue.height,0,ve,be,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ue,qe[0].width,qe[0].height,ue.depth);for(let J=0,se=qe.length;J<se;J++)if(Te=qe[J],x.format!==Xn)if(ve!==null)if(ze){if(k)if(x.layerUpdates.size>0){const ye=Om(Te.width,Te.height,x.format,x.type);for(const _e of x.layerUpdates){const Be=Te.data.subarray(_e*ye/Te.data.BYTES_PER_ELEMENT,(_e+1)*ye/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,_e,Te.width,Te.height,1,ve,Be)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,ue.depth,ve,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ue,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,ue.depth,ve,be,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ue,Te.width,Te.height,ue.depth,0,ve,be,Te.data)}else{ze&&tt&&n.texStorage2D(t.TEXTURE_2D,fe,Ue,qe[0].width,qe[0].height);for(let J=0,se=qe.length;J<se;J++)Te=qe[J],x.format!==Xn?ve!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Te.width,Te.height,ve,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Te.width,Te.height,ve,be,Te.data):n.texImage2D(t.TEXTURE_2D,J,Ue,Te.width,Te.height,0,ve,be,Te.data)}else if(x.isDataArrayTexture)if(ze){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ue,ue.width,ue.height,ue.depth),k)if(x.layerUpdates.size>0){const J=Om(ue.width,ue.height,x.format,x.type);for(const se of x.layerUpdates){const ye=ue.data.subarray(se*J/ue.data.BYTES_PER_ELEMENT,(se+1)*J/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,ve,be,ye)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,be,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,ue.width,ue.height,ue.depth,0,ve,be,ue.data);else if(x.isData3DTexture)ze?(tt&&n.texStorage3D(t.TEXTURE_3D,fe,Ue,ue.width,ue.height,ue.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,be,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,ue.width,ue.height,ue.depth,0,ve,be,ue.data);else if(x.isFramebufferTexture){if(tt)if(ze)n.texStorage2D(t.TEXTURE_2D,fe,Ue,ue.width,ue.height);else{let J=ue.width,se=ue.height;for(let ye=0;ye<fe;ye++)n.texImage2D(t.TEXTURE_2D,ye,Ue,J,se,0,ve,be,null),J>>=1,se>>=1}}else if(qe.length>0){if(ze&&tt){const J=V(qe[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ue,J.width,J.height)}for(let J=0,se=qe.length;J<se;J++)Te=qe[J],ze?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ve,be,Te):n.texImage2D(t.TEXTURE_2D,J,Ue,ve,be,Te);x.generateMipmaps=!1}else if(ze){if(tt){const J=V(ue);n.texStorage2D(t.TEXTURE_2D,fe,Ue,J.width,J.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,be,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ve,be,ue);m(x)&&u(ee),Ae.__version=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Z(E,x,U){if(x.image.length!==6)return;const ee=De(E,x),re=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+U);const ie=i.get(re);if(re.version!==ie.__version||ee===!0){n.activeTexture(t.TEXTURE0+U);const Ae=Ze.getPrimaries(Ze.workingColorSpace),ge=x.colorSpace===Xi?null:Ze.getPrimaries(x.colorSpace),Ee=x.colorSpace===Xi||Ae===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ke&&!ue?ve[se]=S(x.image[se],!0,r.maxCubemapSize):ve[se]=ue?x.image[se].image:x.image[se],ve[se]=G(x,ve[se]);const be=ve[0],Ue=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),qe=v(x.internalFormat,Ue,Te,x.colorSpace),ze=x.isVideoTexture!==!0,tt=ie.__version===void 0||ee===!0,k=re.dataReady;let fe=P(x,be);he(t.TEXTURE_CUBE_MAP,x);let J;if(Ke){ze&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,be.width,be.height);for(let se=0;se<6;se++){J=ve[se].mipmaps;for(let ye=0;ye<J.length;ye++){const _e=J[ye];x.format!==Xn?Ue!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,_e.width,_e.height,Ue,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,_e.width,_e.height,Ue,Te,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,qe,_e.width,_e.height,0,Ue,Te,_e.data)}}}else{if(J=x.mipmaps,ze&&tt){J.length>0&&fe++;const se=V(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Ue,Te,ve[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ve[se].width,ve[se].height,0,Ue,Te,ve[se].data);for(let ye=0;ye<J.length;ye++){const Be=J[ye].image[se].image;ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Be.width,Be.height,Ue,Te,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,qe,Be.width,Be.height,0,Ue,Te,Be.data)}}else{ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,Te,ve[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Ue,Te,ve[se]);for(let ye=0;ye<J.length;ye++){const _e=J[ye];ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Ue,Te,_e.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,qe,Ue,Te,_e.image[se])}}}m(x)&&u(t.TEXTURE_CUBE_MAP),ie.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function le(E,x,U,ee,re,ie){const Ae=s.convert(U.format,U.colorSpace),ge=s.convert(U.type),Ee=v(U.internalFormat,Ae,ge,U.colorSpace),Ke=i.get(x),ue=i.get(U);if(ue.__renderTarget=x,!Ke.__hasExternalTextures){const ve=Math.max(1,x.width>>ie),be=Math.max(1,x.height>>ie);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ie,Ee,ve,be,x.depth,0,Ae,ge,null):n.texImage2D(re,ie,Ee,ve,be,0,Ae,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),We(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,ue.__webglTexture,0,Fe(x)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,ue.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Q(E,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,E),x.depthBuffer){const ee=x.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,ie=y(x.stencilBuffer,re),Ae=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=Fe(x);We(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,ie,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ie,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,E)}else{const ee=x.textures;for(let re=0;re<ee.length;re++){const ie=ee[re],Ae=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),Ee=v(ie.internalFormat,Ae,ge,ie.colorSpace),Ke=Fe(x);U&&We(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,Ee,x.width,x.height):We(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,Ee,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const re=ee.__webglTexture,ie=Fe(x);if(x.depthTexture.format===Is)We(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(x.depthTexture.format===Ys)We(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(E){const x=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){const re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=ee}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");me(x.__webglFramebuffer,E)}else if(U){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=t.createRenderbuffer(),Q(x.__webglDepthbuffer[ee],E,!1);else{const re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ie)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Q(x.__webglDepthbuffer,E,!1);else{const ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(E,x,U){const ee=i.get(E);x!==void 0&&le(ee.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Me(E)}function He(E){const x=E.texture,U=i.get(E),ee=i.get(x);E.addEventListener("dispose",C);const re=E.textures,ie=E.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=x.version,o.memory.textures++),ie){U.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ge]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)U.__webglFramebuffer[ge][Ee]=t.createFramebuffer()}else U.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)U.__webglFramebuffer[ge]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ge=0,Ee=re.length;ge<Ee;ge++){const Ke=i.get(re[ge]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&We(E)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const Ee=re[ge];U.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ge]);const Ke=s.convert(Ee.format,Ee.colorSpace),ue=s.convert(Ee.type),ve=v(Ee.internalFormat,Ke,ue,Ee.colorSpace,E.isXRRenderTarget===!0),be=Fe(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ve,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,U.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Q(U.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),he(t.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)le(U.__webglFramebuffer[ge][Ee],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee);else le(U.__webglFramebuffer[ge],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ge=0,Ee=re.length;ge<Ee;ge++){const Ke=re[ge],ue=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),he(t.TEXTURE_2D,Ke),le(U.__webglFramebuffer,E,Ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(Ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ee.__webglTexture),he(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)le(U.__webglFramebuffer[Ee],E,x,t.COLOR_ATTACHMENT0,ge,Ee);else le(U.__webglFramebuffer,E,x,t.COLOR_ATTACHMENT0,ge,0);m(x)&&u(ge),n.unbindTexture()}E.depthBuffer&&Me(E)}function ke(E){const x=E.textures;for(let U=0,ee=x.length;U<ee;U++){const re=x[U];if(m(re)){const ie=_(E),Ae=i.get(re).__webglTexture;n.bindTexture(ie,Ae),u(ie),n.unbindTexture()}}}const pt=[],z=[];function Rt(E){if(E.samples>0){if(We(E)===!1){const x=E.textures,U=E.width,ee=E.height;let re=t.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(E),ge=x.length>1;if(ge)for(let Ee=0;Ee<x.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const Ke=i.get(x[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,U,ee,0,0,U,ee,re,t.NEAREST),l===!0&&(pt.length=0,z.length=0,pt.push(t.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(ie),z.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<x.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const Ke=i.get(x[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Fe(E){return Math.min(r.maxSamples,E.samples)}function We(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(E){const x=o.render.frame;d.get(E)!==x&&(d.set(E,x),E.update())}function G(E,x){const U=E.colorSpace,ee=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Js&&U!==Xi&&(Ze.getTransfer(U)===ot?(ee!==Xn||re!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function V(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=N,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=We}function NT(t,e){function n(i,r=Xi){let s;const o=Ze.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===gf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S0)return t.BYTE;if(i===M0)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===mf)return t.INT;if(i===Or)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===w0)return t.ALPHA;if(i===T0)return t.RGB;if(i===Xn)return t.RGBA;if(i===A0)return t.LUMINANCE;if(i===b0)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===C0)return t.RED;if(i===vf)return t.RED_INTEGER;if(i===R0)return t.RG;if(i===yf)return t.RG_INTEGER;if(i===xf)return t.RGBA_INTEGER;if(i===El||i===wl||i===Tl||i===Al)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===Gd||i===Wd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xd||i===Yd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xd||i===Yd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===ch||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P0||i===dh||i===hh||i===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IT extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const FT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:FT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ie(new fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,g=null;const S=new kT,m=n.getContextAttributes();let u=null,_=null;const v=[],y=[],P=new Se;let b=null;const C=new Ln;C.viewport=new Tt;const R=new Ln;R.viewport=new Tt;const T=[C,R],w=new IT;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Z=v[D];return Z===void 0&&(Z=new bu,v[D]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(D){let Z=v[D];return Z===void 0&&(Z=new bu,v[D]=Z),Z.getGripSpace()},this.getHand=function(D){let Z=v[D];return Z===void 0&&(Z=new bu,v[D]=Z),Z.getHandSpace()};function F(D){const Z=y.indexOf(D.inputSource);if(Z===-1)return;const le=v[Z];le!==void 0&&(le.update(D.inputSource,D.frame,c||o),le.dispatchEvent({type:D.type,data:D.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let D=0;D<v.length;D++){const Z=y[D];Z!==null&&(y[D]=null,v[D].disconnect(Z))}L=null,W=null,S.reset(),e.setRenderTarget(u),p=null,h=null,f=null,r=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new kr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,le=null,Q=null;m.depth&&(Q=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?Ys:Is,le=m.stencil?Xs:Or);const me={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new kr(h.textureWidth,h.textureHeight,{format:Xn,type:Pi,depthTexture:new j0(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(D){for(let Z=0;Z<D.removed.length;Z++){const le=D.removed[Z],Q=y.indexOf(le);Q>=0&&(y[Q]=null,v[Q].disconnect(le))}for(let Z=0;Z<D.added.length;Z++){const le=D.added[Z];let Q=y.indexOf(le);if(Q===-1){for(let Me=0;Me<v.length;Me++)if(Me>=y.length){y.push(le),Q=Me;break}else if(y[Me]===null){y[Me]=le,Q=Me;break}if(Q===-1)break}const me=v[Q];me&&me.connect(le)}}const X=new I,ne=new I;function N(D,Z,le){X.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(le.matrixWorld);const Q=X.distanceTo(ne),me=Z.projectionMatrix.elements,Me=le.projectionMatrix.elements,Ne=me[14]/(me[10]-1),He=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],pt=(me[9]-1)/me[5],z=(me[8]-1)/me[0],Rt=(Me[8]+1)/Me[0],Fe=Ne*z,We=Ne*Rt,O=Q/(-z+Rt),G=O*-z;if(Z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(G),D.translateZ(O),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),me[10]===-1)D.projectionMatrix.copy(Z.projectionMatrix),D.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const V=Ne+O,E=He+O,x=Fe-G,U=We+(Q-G),ee=ke*He/E*V,re=pt*He/E*V;D.projectionMatrix.makePerspective(x,U,ee,re,V,E),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function q(D,Z){Z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let Z=D.near,le=D.far;S.texture!==null&&(S.depthNear>0&&(Z=S.depthNear),S.depthFar>0&&(le=S.depthFar)),w.near=R.near=C.near=Z,w.far=R.far=C.far=le,(L!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,W=w.far),C.layers.mask=D.layers.mask|2,R.layers.mask=D.layers.mask|4,w.layers.mask=C.layers.mask|R.layers.mask;const Q=D.parent,me=w.cameras;q(w,Q);for(let Me=0;Me<me.length;Me++)q(me[Me],Q);me.length===2?N(w,C,R):w.projectionMatrix.copy(C.projectionMatrix),te(D,w,Q)};function te(D,Z,le){le===null?D.matrix.copy(Z.matrixWorld):(D.matrix.copy(le.matrixWorld),D.matrix.invert(),D.matrix.multiply(Z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Z.projectionMatrix),D.projectionMatrixInverse.copy(Z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=mh*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(w)};let oe=null;function he(D,Z){if(d=Z.getViewerPose(c||o),g=Z,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Q=!1;le.length!==w.cameras.length&&(w.cameras.length=0,Q=!0);for(let Me=0;Me<le.length;Me++){const Ne=le[Me];let He=null;if(p!==null)He=p.getViewport(Ne);else{const pt=f.getViewSubImage(h,Ne);He=pt.viewport,Me===0&&(e.setRenderTargetTextures(_,pt.colorTexture,h.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(_))}let ke=T[Me];ke===void 0&&(ke=new Ln,ke.layers.enable(Me),ke.viewport=new Tt,T[Me]=ke),ke.matrix.fromArray(Ne.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ne.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(He.x,He.y,He.width,He.height),Me===0&&(w.matrix.copy(ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Q===!0&&w.cameras.push(ke)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const Me=f.getDepthInformation(le[0]);Me&&Me.isValid&&Me.texture&&S.init(e,Me,r.renderState)}}for(let le=0;le<v.length;le++){const Q=y[le],me=v[le];Q!==null&&me!==void 0&&me.update(Q,Z,c||o)}oe&&oe(D,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const De=new G0;De.setAnimationLoop(he),this.setAnimationLoop=function(D){oe=D},this.dispose=function(){}}}const yr=new ai,BT=new ct;function HT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,B0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,yr.copy(y),yr.x*=-1,yr.y*=-1,yr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(yr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(_,P);const b=e.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function d(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),P=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,C=y.length;b<C;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,w=R.length;T<w;T++){const L=R[T];if(p(L,b,T,P)===!0){const W=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let K=0;K<F.length;K++){const X=F[K],ne=S(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,W+j,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,j),j+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,P){const b=_.value,C=v+"_"+y;if(P[C]===void 0)return typeof b=="number"||typeof b=="boolean"?P[C]=b:P[C]=b.clone(),!0;{const R=P[C];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[C]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(_){const v=_.uniforms;let y=0;const P=16;for(let C=0,R=v.length;C<R;C++){const T=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,L=T.length;w<L;w++){const W=T[w],F=Array.isArray(W.value)?W.value:[W.value];for(let j=0,K=F.length;j<K;j++){const X=F[j],ne=S(X),N=y%P,q=N%ne.boundary,te=N+q;y+=q,te!==0&&P-te<ne.storage&&(y+=P-te),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=ne.storage}}}const b=y%P;return b>0&&(y+=P-b),_.__size=y,_.__cache={},this}function S(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class GT{constructor(e={}){const{canvas:n=LS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),S=new Int32Array(4);let m=null,u=null;const _=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=rr,this.toneMappingExposure=1;const y=this;let P=!1,b=0,C=0,R=null,T=-1,w=null;const L=new Tt,W=new Tt;let F=null;const j=new Ye(0);let K=0,X=n.width,ne=n.height,N=1,q=null,te=null;const oe=new Tt(0,0,X,ne),he=new Tt(0,0,X,ne);let De=!1;const D=new Mf;let Z=!1,le=!1;const Q=new ct,me=new ct,Me=new I,Ne=new Tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function pt(){return R===null?N:1}let z=i;function Rt(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pf}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",_e,!1),z===null){const B="webgl2";if(z=Rt(B,A),z===null)throw Rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Fe,We,O,G,V,E,x,U,ee,re,ie,Ae,ge,Ee,Ke,ue,ve,be,Ue,Te,qe,ze,tt,k;function fe(){Fe=new $w(z),Fe.init(),ze=new NT(z,Fe),We=new Vw(z,Fe,e,ze),O=new PT(z,Fe),We.reverseDepthBuffer&&h&&O.buffers.depth.setReversed(!0),G=new Zw(z),V=new mT,E=new DT(z,Fe,O,V,We,ze,G),x=new Ww(y),U=new Yw(y),ee=new rM(z),tt=new Bw(z,ee),re=new qw(z,ee,G,tt),ie=new Qw(z,re,ee,G),Ue=new Jw(z,We,E),ue=new Gw(V),Ae=new pT(y,x,U,Fe,We,tt,ue),ge=new HT(y,V),Ee=new _T,Ke=new ET(Fe),be=new zw(y,x,U,O,ie,p,l),ve=new CT(y,ie,We),k=new VT(z,G,We,O),Te=new Hw(z,Fe,G),qe=new Kw(z,Fe,G),G.programs=Ae.programs,y.capabilities=We,y.extensions=Fe,y.properties=V,y.renderLists=Ee,y.shadowMap=ve,y.state=O,y.info=G}fe();const J=new zT(y,z);this.xr=J,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(X,ne,!1))},this.getSize=function(A){return A.set(X,ne)},this.setSize=function(A,B,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ne=B,n.width=Math.floor(A*N),n.height=Math.floor(B*N),Y===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(X*N,ne*N).floor()},this.setDrawingBufferSize=function(A,B,Y){X=A,ne=B,N=Y,n.width=Math.floor(A*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,B,Y,$){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,B,Y,$),O.viewport(L.copy(oe).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,B,Y,$){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,B,Y,$),O.scissor(W.copy(he).multiplyScalar(N).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){O.setScissorTest(De=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(A=!0,B=!0,Y=!0){let $=0;if(A){let H=!1;if(R!==null){const de=R.texture.format;H=de===xf||de===yf||de===vf}if(H){const de=R.texture.type,xe=de===Pi||de===Or||de===ra||de===Xs||de===gf||de===_f,Ce=be.getClearColor(),Re=be.getClearAlpha(),Oe=Ce.r,Ve=Ce.g,Pe=Ce.b;xe?(g[0]=Oe,g[1]=Ve,g[2]=Pe,g[3]=Re,z.clearBufferuiv(z.COLOR,0,g)):(S[0]=Oe,S[1]=Ve,S[2]=Pe,S[3]=Re,z.clearBufferiv(z.COLOR,0,S))}else $|=z.COLOR_BUFFER_BIT}B&&($|=z.DEPTH_BUFFER_BIT),Y&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),Ke.dispose(),V.dispose(),x.dispose(),U.dispose(),ie.dispose(),tt.dispose(),k.dispose(),Ae.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ac),J.removeEventListener("sessionend",pa),Zn.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=G.autoReset,B=ve.enabled,Y=ve.autoUpdate,$=ve.needsUpdate,H=ve.type;fe(),G.autoReset=A,ve.enabled=B,ve.autoUpdate=Y,ve.needsUpdate=$,ve.type=H}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const B=A.target;B.removeEventListener("dispose",Be),yt(B)}function yt(A){Ft(A),V.remove(A)}function Ft(A){const B=V.get(A).programs;B!==void 0&&(B.forEach(function(Y){Ae.releaseProgram(Y)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,$,H,de){B===null&&(B=He);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Ce=ov(A,B,Y,$,H);O.setMaterial($,xe);let Re=Y.index,Oe=1;if($.wireframe===!0){if(Re=re.getWireframeAttribute(Y),Re===void 0)return;Oe=2}const Ve=Y.drawRange,Pe=Y.attributes.position;let Qe=Ve.start*Oe,ut=(Ve.start+Ve.count)*Oe;de!==null&&(Qe=Math.max(Qe,de.start*Oe),ut=Math.min(ut,(de.start+de.count)*Oe)),Re!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Re.count)):Pe!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Pe.count));const mt=ut-Qe;if(mt<0||mt===1/0)return;tt.setup(H,$,Ce,Y,Re);let an,nt=Te;if(Re!==null&&(an=ee.get(Re),nt=qe,nt.setIndex(an)),H.isMesh)$.wireframe===!0?(O.setLineWidth($.wireframeLinewidth*pt()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(H.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),O.setLineWidth(Le*pt()),H.isLineSegments?nt.setMode(z.LINES):H.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else H.isPoints?nt.setMode(z.POINTS):H.isSprite&&nt.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,li=H._multiDrawCounts,it=H._multiDrawCount,kn=Re?ee.get(Re).bytesPerElement:1,Wr=V.get($).currentProgram.getUniforms();for(let mn=0;mn<it;mn++)Wr.setValue(z,"_gl_DrawID",mn),nt.render(Le[mn]/kn,li[mn])}else if(H.isInstancedMesh)nt.renderInstances(Qe,mt,H.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,li=Math.min(Y.instanceCount,Le);nt.renderInstances(Qe,mt,li)}else nt.render(Qe,mt)};function et(A,B,Y){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,ga(A,B,Y),A.side=lr,A.needsUpdate=!0,ga(A,B,Y),A.side=vi):ga(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),u=Ke.get(Y),u.init(B),v.push(u),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),A!==Y&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const Ce=de[xe];et(Ce,Y,H),$.add(Ce)}else et(de,Y,H),$.add(de)}),v.pop(),u=null,$},this.compileAsync=function(A,B,Y=null){const $=this.compile(A,B,Y);return new Promise(H=>{function de(){if($.forEach(function(xe){V.get(xe).currentProgram.isReady()&&$.delete(xe)}),$.size===0){H(A);return}setTimeout(de,10)}Fe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let on=null;function wn(A){on&&on(A)}function Ac(){Zn.stop()}function pa(){Zn.start()}const Zn=new G0;Zn.setAnimationLoop(wn),typeof self!="undefined"&&Zn.setContext(self),this.setAnimationLoop=function(A){on=A,J.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},J.addEventListener("sessionstart",Ac),J.addEventListener("sessionend",pa),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,R),u=Ke.get(A,v.length),u.init(B),v.push(u),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),D.setFromProjectionMatrix(me),le=this.localClippingEnabled,Z=ue.init(this.clippingPlanes,le),m=Ee.get(A,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&eo(de,B,-1/0,y.sortObjects)}eo(A,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(q,te),ke=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ke&&be.addToRenderList(m,A),this.info.render.frame++,Z===!0&&ue.beginShadows();const Y=u.state.shadowsArray;ve.render(Y,A,B),Z===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(u.setupLights(),B.isArrayCamera){const de=B.cameras;if(H.length>0)for(let xe=0,Ce=de.length;xe<Ce;xe++){const Re=de[xe];ma($,H,A,Re)}ke&&be.render(A);for(let xe=0,Ce=de.length;xe<Ce;xe++){const Re=de[xe];to(m,A,Re,Re.viewport)}}else H.length>0&&ma($,H,A,B),ke&&be.render(A),to(m,A,B);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,B),tt.resetDefaultState(),T=-1,w=null,v.pop(),v.length>0?(u=v[v.length-1],Z===!0&&ue.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function eo(A,B,Y,$){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||D.intersectsSprite(A)){$&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const xe=ie.update(A),Ce=A.material;Ce.visible&&m.push(A,xe,Ce,Y,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||D.intersectsObject(A))){const xe=ie.update(A),Ce=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ce)){const Re=xe.groups;for(let Oe=0,Ve=Re.length;Oe<Ve;Oe++){const Pe=Re[Oe],Qe=Ce[Pe.materialIndex];Qe&&Qe.visible&&m.push(A,xe,Qe,Y,Ne.z,Pe)}}else Ce.visible&&m.push(A,xe,Ce,Y,Ne.z,null)}}const de=A.children;for(let xe=0,Ce=de.length;xe<Ce;xe++)eo(de[xe],B,Y,$)}function to(A,B,Y,$){const H=A.opaque,de=A.transmissive,xe=A.transparent;u.setupLightsView(Y),Z===!0&&ue.setGlobalState(y.clippingPlanes,Y),$&&O.viewport(L.copy($)),H.length>0&&st(H,B,Y),de.length>0&&st(de,B,Y),xe.length>0&&st(xe,B,Y),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ma(A,B,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[$.id]===void 0&&(u.state.transmissionRenderTarget[$.id]=new kr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?ua:Pi,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const de=u.state.transmissionRenderTarget[$.id],xe=$.viewport||L;de.setSize(xe.z,xe.w);const Ce=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(j),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),ke&&be.render(Y);const Re=y.toneMapping;y.toneMapping=rr;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),u.setupLightsView($),Z===!0&&ue.setGlobalState(y.clippingPlanes,$),st(A,Y,$),E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Pe=0,Qe=B.length;Pe<Qe;Pe++){const ut=B[Pe],mt=ut.object,an=ut.geometry,nt=ut.material,Le=ut.group;if(nt.side===vi&&mt.layers.test($.layers)){const li=nt.side;nt.side=pn,nt.needsUpdate=!0,Rf(mt,Y,$,an,nt,Le),nt.side=li,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de))}y.setRenderTarget(Ce),y.setClearColor(j,K),Oe!==void 0&&($.viewport=Oe),y.toneMapping=Re}function st(A,B,Y){const $=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=A.length;H<de;H++){const xe=A[H],Ce=xe.object,Re=xe.geometry,Oe=$===null?xe.material:$,Ve=xe.group;Ce.layers.test(Y.layers)&&Rf(Ce,B,Y,Re,Oe,Ve)}}function Rf(A,B,Y,$,H,de){A.onBeforeRender(y,B,Y,$,H,de),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,B,Y,$,A,de),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,y.renderBufferDirect(Y,B,$,H,A,de),H.side=lr,H.needsUpdate=!0,y.renderBufferDirect(Y,B,$,H,A,de),H.side=vi):y.renderBufferDirect(Y,B,$,H,A,de),A.onAfterRender(y,B,Y,$,H,de)}function ga(A,B,Y){B.isScene!==!0&&(B=He);const $=V.get(A),H=u.state.lights,de=u.state.shadowsArray,xe=H.state.version,Ce=Ae.getParameters(A,H.state,de,B,Y),Re=Ae.getProgramCacheKey(Ce);let Oe=$.programs;$.environment=A.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(A.isMeshStandardMaterial?U:x).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Be),Oe=new Map,$.programs=Oe);let Ve=Oe.get(Re);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===xe)return Lf(A,Ce),Ve}else Ce.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Ce,y),Ve=Ae.acquireProgram(Ce,Re),Oe.set(Re,Ve),$.uniforms=Ce.uniforms;const Pe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),Lf(A,Ce),$.needsLights=lv(A),$.lightsStateVersion=xe,$.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Pf(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Lf(A,B){const Y=V.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function ov(A,B,Y,$,H){B.isScene!==!0&&(B=He),E.resetTextureUnits();const de=B.fog,xe=$.isMeshStandardMaterial?B.environment:null,Ce=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Js,Re=($.isMeshStandardMaterial?U:x).get($.envMap||xe),Oe=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color;let mt=rr;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=y.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=an!==void 0?an.length:0,Le=V.get($),li=u.state.lights;if(Z===!0&&(le===!0||A!==w)){const Tn=A===w&&$.id===T;ue.setState($,A,Tn)}let it=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==li.state.version||Le.outputColorSpace!==Ce||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==Re||$.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ue.numPlanes||Le.numIntersection!==ue.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Ve||Le.morphTargets!==Pe||Le.morphNormals!==Qe||Le.morphColors!==ut||Le.toneMapping!==mt||Le.morphTargetsCount!==nt)&&(it=!0):(it=!0,Le.__version=$.version);let kn=Le.currentProgram;it===!0&&(kn=ga($,B,H));let Wr=!1,mn=!1,no=!1;const gt=kn.getUniforms(),Jn=Le.uniforms;if(O.useProgram(kn.program)&&(Wr=!0,mn=!0,no=!0),$.id!==T&&(T=$.id,mn=!0),Wr||w!==A){O.buffers.depth.getReversed()?(Q.copy(A.projectionMatrix),NS(Q),IS(Q),gt.setValue(z,"projectionMatrix",Q)):gt.setValue(z,"projectionMatrix",A.projectionMatrix),gt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Ni=gt.map.cameraPosition;Ni!==void 0&&Ni.setValue(z,Me.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&gt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,mn=!0,no=!0)}if(H.isSkinnedMesh){gt.setOptional(z,H,"bindMatrix"),gt.setOptional(z,H,"bindMatrixInverse");const Tn=H.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),gt.setValue(z,"boneTexture",Tn.boneTexture,E))}H.isBatchedMesh&&(gt.setOptional(z,H,"batchingTexture"),gt.setValue(z,"batchingTexture",H._matricesTexture,E),gt.setOptional(z,H,"batchingIdTexture"),gt.setValue(z,"batchingIdTexture",H._indirectTexture,E),gt.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&gt.setValue(z,"batchingColorTexture",H._colorsTexture,E));const io=Y.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Ue.update(H,Y,kn),(mn||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,gt.setValue(z,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Jn.envMap.value=Re,Jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Jn.envMapIntensity.value=B.environmentIntensity),mn&&(gt.setValue(z,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&av(Jn,no),de&&$.fog===!0&&ge.refreshFogUniforms(Jn,de),ge.refreshMaterialUniforms(Jn,$,N,ne,u.state.transmissionRenderTarget[A.id]),Rl.upload(z,Pf(Le),Jn,E)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Rl.upload(z,Pf(Le),Jn,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(z,"center",H.center),gt.setValue(z,"modelViewMatrix",H.modelViewMatrix),gt.setValue(z,"normalMatrix",H.normalMatrix),gt.setValue(z,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Tn=$.uniformsGroups;for(let Ni=0,Ii=Tn.length;Ni<Ii;Ni++){const Df=Tn[Ni];k.update(Df,kn),k.bind(Df,kn)}}return kn}function av(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function lv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,Y){V.get(A.texture).__webglTexture=B,V.get(A.depthTexture).__webglTexture=Y;const $=V.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const Y=V.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){R=A,b=B,C=Y;let $=!0,H=null,de=!1,xe=!1;if(A){const Re=V.get(A);if(Re.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Re.__hasExternalTextures)E.rebindTextures(A,V.get(A.texture).__webglTexture,V.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&V.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Ve=V.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?H=Ve[B][Y]:H=Ve[B],de=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?H=V.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[Y]:H=Ve,L.copy(A.viewport),W.copy(A.scissor),F=A.scissorTest}else L.copy(oe).multiplyScalar(N).floor(),W.copy(he).multiplyScalar(N).floor(),F=De;if(O.bindFramebuffer(z.FRAMEBUFFER,H)&&$&&O.drawBuffers(A,H),O.viewport(L),O.scissor(W),O.setScissorTest(F),de){const Re=V.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,Y)}else if(xe){const Re=V.get(A.texture),Oe=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Oe)}T=-1},this.readRenderTargetPixels=function(A,B,Y,$,H,de,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){O.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Re=A.texture,Oe=Re.format,Ve=Re.type;if(!We.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-$&&Y>=0&&Y<=A.height-H&&z.readPixels(B,Y,$,H,ze.convert(Oe),ze.convert(Ve),de)}finally{const Re=R!==null?V.get(R).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,$,H,de,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Re=A.texture,Oe=Re.format,Ve=Re.type;if(!We.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-$&&Y>=0&&Y<=A.height-H){O.bindFramebuffer(z.FRAMEBUFFER,Ce);const Pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.bufferData(z.PIXEL_PACK_BUFFER,de.byteLength,z.STREAM_READ),z.readPixels(B,Y,$,H,ze.convert(Oe),ze.convert(Ve),0);const Qe=R!==null?V.get(R).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Qe);const ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await DS(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,de),z.deleteBuffer(Pe),z.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,Y=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-Y),H=Math.floor(A.image.width*$),de=Math.floor(A.image.height*$),xe=B!==null?B.x:0,Ce=B!==null?B.y:0;E.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,xe,Ce,H,de),O.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,$=null,H=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,Y=null);let de,xe,Ce,Re,Oe,Ve,Pe,Qe,ut;const mt=A.isCompressedTexture?A.mipmaps[H]:A.image;Y!==null?(de=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,Oe=Y.min.y,Ve=Y.isBox3?Y.min.z:0):(de=mt.width,xe=mt.height,Ce=mt.depth||1,Re=0,Oe=0,Ve=0),$!==null?(Pe=$.x,Qe=$.y,ut=$.z):(Pe=0,Qe=0,ut=0);const an=ze.convert(B.format),nt=ze.convert(B.type);let Le;B.isData3DTexture?(E.setTexture3D(B,0),Le=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),Le=z.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const li=z.getParameter(z.UNPACK_ROW_LENGTH),it=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),Wr=z.getParameter(z.UNPACK_SKIP_ROWS),mn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),z.pixelStorei(z.UNPACK_SKIP_ROWS,Oe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ve);const no=A.isDataArrayTexture||A.isData3DTexture,gt=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Jn=V.get(A),io=V.get(B),Tn=V.get(Jn.__renderTarget),Ni=V.get(io.__renderTarget);O.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ii=0;Ii<Ce;Ii++)no&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(A).__webglTexture,H,Ve+Ii),A.isDepthTexture?(gt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(B).__webglTexture,H,ut+Ii),z.blitFramebuffer(Re,Oe,de,xe,Pe,Qe,de,xe,z.DEPTH_BUFFER_BIT,z.NEAREST)):gt?z.copyTexSubImage3D(Le,H,Pe,Qe,ut+Ii,Re,Oe,de,xe):z.copyTexSubImage2D(Le,H,Pe,Qe,ut+Ii,Re,Oe,de,xe);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else gt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Le,H,Pe,Qe,ut,de,xe,Ce,an,nt,mt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,H,Pe,Qe,ut,de,xe,Ce,an,mt.data):z.texSubImage3D(Le,H,Pe,Qe,ut,de,xe,Ce,an,nt,mt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,Pe,Qe,de,xe,an,nt,mt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,Pe,Qe,mt.width,mt.height,an,mt.data):z.texSubImage2D(z.TEXTURE_2D,H,Pe,Qe,de,xe,an,nt,mt);z.pixelStorei(z.UNPACK_ROW_LENGTH,li),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mn),H===0&&B.generateMipmaps&&z.generateMipmap(Le),O.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Y=null,$=null,H=0){return A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,Y,$,H)},this.initRenderTarget=function(A){V.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,O.reset(),tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class WT extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new I;class nc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Un(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class K0 extends fr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const vo=new I,ls=new I,cs=new I,us=new Se,yo=new Se,Z0=new ct,nl=new I,xo=new I,il=new I,km=new Se,Cu=new Se,zm=new Se;class XT extends Nt{constructor(e=new K0){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Wt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jT(n,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new nc(i,3,0,!1)),as.setAttribute("uv",new nc(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new Se(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),Z0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;rl(nl.set(-.5,-.5,0),cs,o,ls,r,s),rl(xo.set(.5,-.5,0),cs,o,ls,r,s),rl(il.set(.5,.5,0),cs,o,ls,r,s),km.set(0,0),Cu.set(1,0),zm.set(1,1);let a=e.ray.intersectTriangle(nl,xo,il,!1,vo);if(a===null&&(rl(xo.set(-.5,.5,0),cs,o,ls,r,s),Cu.set(0,1),a=e.ray.intersectTriangle(nl,il,xo,!1,vo),a===null))return;const l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||n.push({distance:l,point:vo.clone(),uv:Dn.getInterpolation(vo,nl,xo,il,km,Cu,zm,new Se),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rl(t,e,n,i,r,s){us.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(yo.x=s*us.x-r*us.y,yo.y=r*us.x+s*us.y):yo.copy(us),t.copy(e),t.x+=yo.x,t.y+=yo.y,t.applyMatrix4(Z0)}class J0 extends fr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new I,rc=new I,Bm=new ct,So=new ha,sl=new da,Ru=new I,Hm=new I;class YT extends Nt{constructor(e=new Wt,n=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ic.fromBufferAttribute(n,r-1),rc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Bm.copy(r).invert(),So.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const u=d.getX(S),_=d.getX(S+1),v=ol(this,e,So,l,u,_);v&&n.push(v)}if(this.isLineLoop){const S=d.getX(g-1),m=d.getX(p),u=ol(this,e,So,l,S,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const u=ol(this,e,So,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=ol(this,e,So,l,g-1,p);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),n.distanceSqToSegment(ic,rc,Ru,Hm)>i)return;Ru.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ru);if(!(l<e.near||l>e.far))return{distance:l,point:Hm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Vm=new I,Gm=new I;class $T extends YT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Vm.fromBufferAttribute(n,r),Gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vm.distanceTo(Gm);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends fr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new ct,_h=new ha,al=new da,ll=new I;class qT extends Nt{constructor(e=new Wt,n=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;Wm.copy(r).invert(),_h.copy(e.ray).applyMatrix4(Wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,S=p;g<S;g++){const m=c.getX(g);ll.fromBufferAttribute(f,m),jm(ll,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,S=p;g<S;g++)ll.fromBufferAttribute(f,g),jm(ll,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(t,e,n,i,r,s,o){const a=_h.distanceSqToPoint(t);if(a<n){const l=new I;_h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class KT extends nn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new ct;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ev extends Di{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Se){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZT extends ev{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const cl=new I,Pu=new wf,Lu=new wf,Du=new wf;class JT extends Di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(cl.subVectors(r[0],r[1]).add(r[0]),c=cl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(cl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Pu.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,g,S,m),Lu.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,g,S,m),Du.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,g,S,m)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Lu.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Du.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Pu.calc(l),Lu.calc(l),Du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function QT(t,e){const n=1-t;return n*n*e}function eA(t,e){return 2*(1-t)*t*e}function tA(t,e){return t*t*e}function ko(t,e,n,i){return QT(t,e)+eA(t,n)+tA(t,i)}function nA(t,e){const n=1-t;return n*n*n*e}function iA(t,e){const n=1-t;return 3*n*n*t*e}function rA(t,e){return 3*(1-t)*t*t*e}function sA(t,e){return t*t*t*e}function zo(t,e,n,i,r){return nA(t,e)+iA(t,n)+rA(t,i)+sA(t,r)}class oA extends Di{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aA extends Di{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lA extends Di{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends Di{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cA extends Di{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends Di{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uA extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Xm(a,l.x,c.x,d.x,f.x),Xm(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var dA=Object.freeze({__proto__:null,ArcCurve:ZT,CatmullRomCurve3:JT,CubicBezierCurve:oA,CubicBezierCurve3:aA,EllipseCurve:ev,LineCurve:lA,LineCurve3:tv,QuadraticBezierCurve:cA,QuadraticBezierCurve3:nv,SplineCurve:uA});class sc extends Wt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new I,d=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bn extends Wt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let g=0;const S=[],m=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function _(){const y=new I,P=new I;let b=0;const C=(n-e)/i;for(let R=0;R<=s;R++){const T=[],w=R/s,L=w*(n-e)+e;for(let W=0;W<=r;W++){const F=W/r,j=F*l+a,K=Math.sin(j),X=Math.cos(j);P.x=L*K,P.y=-w*i+m,P.z=L*X,f.push(P.x,P.y,P.z),y.set(K,C,X).normalize(),h.push(y.x,y.y,y.z),p.push(F,1-w),T.push(g++)}S.push(T)}for(let R=0;R<r;R++)for(let T=0;T<s;T++){const w=S[T][R],L=S[T+1][R],W=S[T+1][R+1],F=S[T][R+1];(e>0||T!==0)&&(d.push(w,L,F),b+=3),(n>0||T!==s-1)&&(d.push(L,W,F),b+=3)}c.addGroup(u,b,0),u+=b}function v(y){const P=g,b=new Se,C=new I;let R=0;const T=y===!0?e:n,w=y===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),g++;const L=g;for(let W=0;W<=r;W++){const j=W/r*l+a,K=Math.cos(j),X=Math.sin(j);C.x=T*X,C.y=m*w,C.z=T*K,f.push(C.x,C.y,C.z),h.push(0,w,0),b.x=K*.5+.5,b.y=X*.5*w+.5,p.push(b.x,b.y),g++}for(let W=0;W<r;W++){const F=P+W,j=L+W;y===!0?d.push(j,j+1,F):d.push(j+1,j,F),R+=3}c.addGroup(u,R,y===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends bn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tf extends Wt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new I,h=new I,p=[],g=[],S=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let P=0;P<=n;P++){const b=P/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(b+y,1-v),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=d[u][_+1],y=d[u][_],P=d[u+1][_],b=d[u+1][_+1];(u!==0||o>0)&&p.push(v,y,b),(u!==i-1||l<Math.PI)&&p.push(y,P,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends Wt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new I,f=new I,h=new I;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const S=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(S),f.y=(e+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const S=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(S,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Af extends Wt{constructor(e=new nv(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new Se;let d=new I;const f=[],h=[],p=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function S(){for(let v=0;v<n;v++)m(v);m(s===!1?n:0),_(),u()}function m(v){d=e.getPointAt(v/n,d);const y=o.normals[v],P=o.binormals[v];for(let b=0;b<=r;b++){const C=b/r*Math.PI*2,R=Math.sin(C),T=-Math.cos(C);l.x=T*y.x+R*P.x,l.y=T*y.y+R*P.y,l.z=T*y.z+R*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const P=(r+1)*(v-1)+(y-1),b=(r+1)*v+(y-1),C=(r+1)*v+y,R=(r+1)*(v-1)+y;g.push(P,b,R),g.push(b,C,R)}}function _(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Af(new dA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class je extends fr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iv extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Nu=new ct,Ym=new I,$m=new I;class hA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fA extends hA{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends iv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new fA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pA extends iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Km=new ct;class mA{constructor(e,n,i=0,r=1/0){this.ray=new ha(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,n=!0,i=[]){return vh(e,this,i,n),i.sort(Zm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vh(e[r],this,i,n);return i.sort(Zm),i}}function Zm(t,e){return t.distance-e.distance}function vh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vh(s[o],e,n,!0)}}class Jm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gA extends $T{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const S=h===s?i:r;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const d=new Wt;d.setAttribute("position",new ft(l,3)),d.setAttribute("color",new ft(c,3));const f=new J0({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _A extends Gr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);const Qm={type:"change"},bf={type:"start"},rv={type:"end"},ul=new ha,eg=new _i,vA=Math.cos(70*PS.DEG2RAD),Pt=new I,ln=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6;class yA extends _A{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new zr,this._lastTargetPosition=new I,this._quat=new zr().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jm,this._sphericalDelta=new Jm,this._scale=1,this._panOffset=new I,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new I,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=MA.bind(this),this._onContextMenu=RA.bind(this),this._onMouseWheel=TA.bind(this),this._onKeyDown=AA.bind(this),this._onTouchStart=bA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=EA.bind(this),this._onMouseMove=wA.bind(this),this._interceptControlDown=PA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qm),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Pt.copy(n).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<vA?this.object.lookAt(this.target):(eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(eg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(Qm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Pt.setFromMatrixColumn(n,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,n){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(n,1):(Pt.setFromMatrixColumn(n,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pt.copy(r).sub(this.target);let s=Pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Se,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function SA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function MA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function EA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Ds.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Ds.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(bf)}function wA(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function TA(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(bf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(rv))}function AA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function bA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(bf)}function CA(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function RA(t){this.enabled!==!1&&t.preventDefault()}function PA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DA(t,e){const n=new Ei;switch(t){case"solar_pv":{for(let r=0;r<3;r++){const s=new Ie(new dt(1.2,.05,.8),new je({color:1981023,metalness:.8,roughness:.2})),o=new Ie(new dt(1.18,.06,.78),new je({color:4886745,metalness:.5}));s.add(o),s.position.set(r*1.4-1.4,.8,0),s.rotation.x=-Math.PI*.2,n.add(s);const a=new Ie(new bn(.03,.03,.7,8),new je({color:8947848}));a.position.set(r*1.4-1.4,.35,.2),n.add(a)}break}case"smart_building":{const i=e.floors||5,r=i*.6,s=new Ie(new dt(2,r,1.5),new je({color:4871528}));s.position.y=r/2,n.add(s);for(let a=0;a<i;a++)for(let l=0;l<3;l++){const c=new Ie(new dt(.4,.3,.02),new je({color:8900331,emissive:2245802,emissiveIntensity:.3}));c.position.set(l*.6-.6,a*.6+.4,.76),n.add(c)}const o=new Ie(new dt(2.1,.1,1.6),new je({color:2963272}));o.position.y=r+.05,n.add(o);break}case"battery_storage":{const i=new Ie(new dt(1.2,1.5,.8),new je({color:2278750}));i.position.y=.75,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new dt(.3,.2,.02),new je({color:1467700,emissive:65280,emissiveIntensity:.2}));o.position.set(0,.5+s*.35,.41),n.add(o)}const r=new Ie(new oc(.15,.4,4),new je({color:16498468}));r.position.set(0,1.3,.41),r.rotation.z=Math.PI,n.add(r);break}case"wind_turbine":{const i=new Ie(new bn(.15,.25,4,8),new je({color:16119285}));i.position.y=2,n.add(i);const r=new Ie(new dt(.6,.4,.4),new je({color:15066597}));r.position.set(0,4.1,0),n.add(r);const s=new Ie(new oc(.15,.3,16),new je({color:13421772}));s.position.set(0,4.1,.35),s.rotation.x=Math.PI/2,n.add(s);const o=new Ei;for(let a=0;a<3;a++){const l=new Ie(new dt(.15,1.8,.05),new je({color:16777215}));l.position.y=.9;const c=new Ei;c.add(l),c.rotation.z=a*Math.PI*2/3,o.add(c)}o.position.set(0,4.1,.5),o.userData.isRotating=!0,n.add(o);break}case"district_heating":{const i=new Ie(new dt(1.5,1,1),new je({color:14427686}));i.position.y=.5,n.add(i);const r=new Ie(new bn(.1,.1,1.2,16),new je({color:15680580}));r.rotation.z=Math.PI/2,r.position.set(0,.8,.6),n.add(r);const s=new Ie(new bn(.08,.08,1.2,16),new je({color:3900150}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.6),n.add(s);const o=new Ie(new Bo(.2,.03,8,16,Math.PI),new je({color:16739179,emissive:16711680,emissiveIntensity:.5}));o.position.set(0,1.2,0),o.rotation.x=Math.PI/2,n.add(o);break}case"smart_grid":{const i=new Ie(new dt(1,.3,.8),new je({color:3621201}));i.position.y=.15,n.add(i);const r=new Ie(new dt(.6,.8,.5),new je({color:7041664}));r.position.y=.7,n.add(r);for(let s=0;s<3;s++){const o=new Ie(new bn(.05,.08,.4,8),new je({color:9133302}));o.position.set(s*.25-.25,1.3,0),n.add(o)}for(let s=0;s<3;s++){const o=new Ie(new bn(.01,.01,.8,8),new je({color:1118481}));o.rotation.z=Math.PI/2,o.position.set(.4,1.5,s*.15-.15),n.add(o)}break}case"ev_charger":{const i=new Ie(new dt(.3,1.4,.2),new je({color:1982639}));i.position.y=.7,n.add(i);const r=new Ie(new dt(.25,.2,.02),new je({color:0,emissive:65280,emissiveIntensity:.3}));r.position.set(0,1.1,.11),n.add(r);const s=new Ie(new Bo(.15,.02,8,16,Math.PI),new je({color:1118481}));s.position.set(.2,.5,.15),s.rotation.y=Math.PI/2,n.add(s);const o=new Ie(new dt(.8,.3,.4),new je({color:3900150,transparent:!0,opacity:.6}));o.position.set(.8,.15,0),n.add(o);break}case"heat_pump":{const i=new Ie(new dt(1.2,.9,.5),new je({color:16119285}));i.position.y=.45,n.add(i);const r=new Ie(new sc(.3,32),new je({color:3355443}));r.position.set(0,.5,.26),n.add(r);const s=new Ei;for(let a=0;a<4;a++){const l=new Ie(new dt(.25,.05,.02),new je({color:6710886}));l.rotation.z=a*Math.PI/2,s.add(l)}s.position.set(0,.5,.27),s.userData.isRotating=!0,n.add(s);const o=new Ie(new bn(.04,.04,.5,8),new je({color:15680580}));o.position.set(-.4,.7,-.3),n.add(o);break}case"chp_unit":{const i=new Ie(new dt(1.5,1.2,1),new je({color:16347926}));i.position.y=.6,n.add(i);const r=new Ie(new bn(.1,.12,.8,16),new je({color:6710886}));r.position.set(.5,1.6,0),n.add(r);const s=new Ie(new dt(.4,.3,.05),new je({color:2042167,emissive:2278750,emissiveIntensity:.2}));s.position.set(-.4,.8,.53),n.add(s);break}case"thermal_storage":{const i=new Ie(new bn(.6,.6,1.8,24),new je({color:15485081}));i.position.y=.9,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new Bo(.62,.03,8,32),new je({color:12458077}));o.position.y=.4+s*.5,o.rotation.x=Math.PI/2,n.add(o)}const r=new Ie(new sc(.1,16),new je({color:16777215,emissive:16729156,emissiveIntensity:.5}));r.position.set(0,1.2,.61),n.add(r);break}case"load_center":{const i=new Ie(new dt(.8,1.2,.2),new je({color:4937059}));i.position.y=.6,n.add(i);for(let s=0;s<3;s++)for(let o=0;o<2;o++){const a=new Ie(new dt(.15,.2,.05),new je({color:1118481}));a.position.set(o*.25-.12,.3+s*.3,.12),n.add(a)}const r=new Ie(new Tf(.05,16,16),new je({color:2278750,emissive:65280,emissiveIntensity:.8}));r.position.set(.25,1,.12),n.add(r);break}}return n}function NA(t,e,n){const i=document.createElement("canvas"),r=i.getContext("2d");i.width=256,i.height=64,r.fillStyle="rgba(15, 23, 42, 0.85)",r.beginPath(),r.roundRect(4,4,i.width-8,i.height-8,8),r.fill(),r.font="bold 22px Arial",r.fillStyle="#e2e8f0",r.textAlign="center",r.textBaseline="middle",r.fillText(t.substring(0,20),i.width/2,i.height/2);const s=new KT(i),o=new K0({map:s,transparent:!0}),a=new XT(o);return a.position.copy(e),a.position.y=n+1.5,a.scale.set(2.5,.6,1),a}class IA{constructor(e,n,i,r=20){this.startPos=e.clone(),this.endPos=n.clone(),this.count=r,this.speed=.015,this.positions=new Float32Array(r*3),this.progress=new Float32Array(r);for(let a=0;a<r;a++)this.progress[a]=a/r,this.updateParticlePosition(a);const s=new Wt;s.setAttribute("position",new Un(this.positions,3));const o=new Q0({color:i,size:.2,transparent:!0,opacity:.9,blending:Cd});this.particles=new qT(s,o)}updateParticlePosition(e){const n=this.progress[e];this.positions[e*3]=this.startPos.x+(this.endPos.x-this.startPos.x)*n,this.positions[e*3+1]=this.startPos.y+(this.endPos.y-this.startPos.y)*n+Math.sin(n*Math.PI)*.4,this.positions[e*3+2]=this.startPos.z+(this.endPos.z-this.startPos.z)*n}update(){for(let e=0;e<this.count;e++)this.progress[e]+=this.speed,this.progress[e]>1&&(this.progress[e]=0),this.updateParticlePosition(e);this.particles.geometry.attributes.position.needsUpdate=!0}}function tg({config:t,animate:e=!0,onComponentMove:n}){const i=ae.useRef(null),r=ae.useRef(null),s=ae.useRef(null),o=ae.useRef(null),a=ae.useRef(null),l=ae.useRef(new Map),c=ae.useRef(null),d=ae.useRef(new Map),f=ae.useRef([]),h=ae.useRef([]),p=ae.useRef(0),g=ae.useRef(new mA),S=ae.useRef(new Se),m=ae.useRef(null),u=ae.useRef(new _i(new I(0,1,0),0)),_=ae.useRef(e);return ae.useEffect(()=>{_.current=e},[e]),ae.useEffect(()=>{if(!i.current)return;const v=i.current,y=new WT;y.background=new Ye(661032),r.current=y;const P=v.clientWidth||600,b=v.clientHeight||400,C=new Ln(50,P/b,.1,500);C.position.set(12,10,12),o.current=C;const R=new GT({antialias:!0});R.setSize(P,b),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.shadowMap.enabled=!0,v.appendChild(R.domElement),s.current=R;const T=new yA(C,R.domElement);T.enableDamping=!0,T.dampingFactor=.08,a.current=T,y.add(new pA(16777215,.5));const w=new qm(16777215,1);w.position.set(10,20,10),w.castShadow=!0,y.add(w);const L=new qm(4491519,.3);L.position.set(-10,5,-10),y.add(L);const W=new Ie(new fa(60,60),new je({color:1712946,roughness:.9}));W.rotation.x=-Math.PI/2,W.receiveShadow=!0,y.add(W);const F=new gA(60,30,2767434,1714746);F.position.y=.01,y.add(F);const j=new Ei;y.add(j),c.current=j;const K=()=>{p.current=requestAnimationFrame(K),T.update(),_.current&&(f.current.forEach(oe=>oe.update()),h.current.forEach(oe=>{oe.rotation.z+=.02})),R.render(y,C)};K();const X=()=>{const oe=v.clientWidth,he=v.clientHeight;C.aspect=oe/he,C.updateProjectionMatrix(),R.setSize(oe,he)};window.addEventListener("resize",X);const ne=oe=>{const he=R.domElement.getBoundingClientRect();S.current.x=(oe.clientX-he.left)/he.width*2-1,S.current.y=-((oe.clientY-he.top)/he.height)*2+1},N=oe=>{if(!n)return;ne(oe),g.current.setFromCamera(S.current,C);const he=Array.from(l.current.entries());for(const[De,D]of he)if(g.current.intersectObject(D,!0).length>0){T.enabled=!1;const le=new I;g.current.ray.intersectPlane(u.current,le),m.current={id:De,model:D,offset:D.position.clone().sub(le)},R.domElement.style.cursor="grabbing";break}},q=oe=>{if(!m.current){if(n){ne(oe),g.current.setFromCamera(S.current,C);let Z=!1;for(const le of l.current.values())if(g.current.intersectObject(le,!0).length>0){Z=!0;break}R.domElement.style.cursor=Z?"grab":"default"}return}ne(oe),g.current.setFromCamera(S.current,C);const he=new I;g.current.ray.intersectPlane(u.current,he);const De=he.add(m.current.offset);m.current.model.position.x=De.x,m.current.model.position.z=De.z;const D=d.current.get(m.current.id);D&&(D.position.x=De.x,D.position.z=De.z)},te=()=>{if(m.current&&n){const{id:oe,model:he}=m.current,De=.035,D=-300*De,Z=-200*De,le=(he.position.x-D)/De,Q=(he.position.z-Z)/De;n(oe,le,Q)}m.current=null,T.enabled=!0,R.domElement.style.cursor="default"};return R.domElement.addEventListener("pointerdown",N),R.domElement.addEventListener("pointermove",q),R.domElement.addEventListener("pointerup",te),R.domElement.addEventListener("pointerleave",te),()=>{window.removeEventListener("resize",X),R.domElement.removeEventListener("pointerdown",N),R.domElement.removeEventListener("pointermove",q),R.domElement.removeEventListener("pointerup",te),R.domElement.removeEventListener("pointerleave",te),cancelAnimationFrame(p.current),R.dispose(),v.removeChild(R.domElement)}},[n]),ae.useEffect(()=>{var w,L,W;const v=r.current,y=c.current;if(!v||!y)return;for(l.current.forEach(F=>v.remove(F)),l.current.clear();y.children.length;)y.remove(y.children[0]);if(f.current.forEach(F=>v.remove(F.particles)),f.current=[],h.current=[],!t)return;const P=.035,b=-300*P,C=-200*P;t.components.forEach(F=>{const j=DA(F.type,F.params),K=F.x*P+b,X=F.y*P+C;j.position.set(K,0,X),v.add(j),l.current.set(F.id,j),j.traverse(te=>{te.userData.isRotating&&h.current.push(te)});const N=new Br().setFromObject(j).max.y,q=NA(F.name,new I(K,0,X),N);y.add(q)});const R=new Set(["solar_pv","wind_turbine","chp_unit"]),T=new Set(["smart_building","ev_charger","load_center","heat_pump"]);if(t.connections.forEach(F=>{const j=t.components.find(me=>me.id===F.from),K=t.components.find(me=>me.id===F.to),X=l.current.get(F.from),ne=l.current.get(F.to);if(!X||!ne||!j||!K)return;let N=X.position.clone(),q=ne.position.clone();const te=R.has(j.type),oe=R.has(K.type),he=T.has(j.type),De=T.has(K.type);(he&&!De||oe&&!te)&&([N,q]=[q,N]),N.y=.5,q.y=.5;const D=F.type==="heat"?15680580:F.type==="both"?11032055:3900150,Z=new tv(X.position.clone().setY(.5),ne.position.clone().setY(.5)),le=new Ie(new Af(Z,8,.04,8,!1),new je({color:D,transparent:!0,opacity:.4}));v.add(le);const Q=new IA(N,q,D,18);v.add(Q.particles),f.current.push(Q)}),t.components.length>0){const F=new Br;l.current.forEach(ne=>F.expandByObject(ne));const j=new I,K=new I;F.getCenter(j),F.getSize(K),(w=a.current)==null||w.target.copy(j);const X=Math.max(K.x,K.z)*2;(L=o.current)==null||L.position.set(j.x+X,X*.7,j.z+X),(W=a.current)==null||W.update()}},[t]),M.jsx("div",{ref:i,style:{width:"100%",height:"100%",minHeight:300}})}function sv(t){return t.endsWith("/")?t:t+"/"}const ds=(t,e)=>{const n=t.replace(/^\/+/,"");return new URL(n,sv(e)).toString()},UA=(t,e)=>{const n=t.replace(/^\/+/,""),i=new URL(n,sv(e));return i.protocol=i.protocol.startsWith("https")?"wss:":"ws:",i.toString()};function ng(t){return t==null?"—":new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:2}).format(t)}function FA(t){return t==null?"—":t.toLocaleString(void 0,{maximumFractionDigits:2})}function OA(){var Fe,We,O;const t=ae.useMemo(()=>window.location.origin,[]),[e,n]=ae.useState([]),[i,r]=ae.useState(!1),[s,o]=ae.useState(null),[a,l]=ae.useState(null),[c,d]=ae.useState(null),[f,h]=ae.useState(null),[p,g]=ae.useState([]),[S,m]=ae.useState("idle"),[u,_]=ae.useState("runs"),[v,y]=ae.useState("3d"),[P,b]=ae.useState("2d"),[C,R]=ae.useState(null),[T,w]=ae.useState(!1),[L,W]=ae.useState(12),[F,j]=ae.useState(800),[K,X]=ae.useState(.5),[ne,N]=ae.useState(!1);ae.useState(null)[0];const[q,te]=ae.useState(.58),[oe,he]=ae.useState(!1),[De,D]=ae.useState(320),[Z,le]=ae.useState(!1),[Q,me]=ae.useState(!1),[Me,Ne]=ae.useState(!1),He=ae.useCallback(G=>{g(V=>[...V,`${new Date().toLocaleTimeString()} ${G}`].slice(-50))},[]),ke=ae.useCallback(async()=>{r(!0);try{const G=await fetch(ds("/runs",t));if(!G.ok)throw new Error(`Failed to load runs (${G.status})`);const V=await G.json();if(n(V),V.length===0){o(E=>E!==null?null:E);return}o(E=>!(E?V.some(U=>U.id===E):!1)&&V.length>0?V[0].id:E)}catch(G){console.error(G),He(`Error loading runs: ${G.message}`)}finally{r(!1)}},[t,He]);ae.useEffect(()=>{ke();const G=setInterval(ke,15e3);return()=>clearInterval(G)},[ke]),ae.useEffect(()=>{if(!s){h(null),l(null),d(null);return}const G=new AbortController;return(async()=>{try{const E=await fetch(ds(`/runs/${s}/state`,t),{signal:G.signal});if(!E.ok)throw new Error(`Failed to load state (${E.status})`);const x=await E.json();h(x)}catch(E){E.name!=="AbortError"&&He(`Error fetching state: ${E.message}`)}})(),()=>G.abort()},[t,He,s]),ae.useEffect(()=>{const G=new AbortController;return(async()=>{if(s)try{const E=await fetch(ds(`/runs/${s}`,t),{signal:G.signal});if(!E.ok)return;const x=await E.json();if(l(x),x.scenario_id){const U=await fetch(ds(`/scenarios/${x.scenario_id}`,t),{signal:G.signal});U.ok?d(await U.json()):d(null)}else d(null)}catch{}})(),()=>G.abort()},[t,s]),ae.useEffect(()=>{if(!s)return;const G=UA(`/runs/${s}/ws`,t);m("connecting"),He(`Connecting to ${G}`);const V=new WebSocket(G);return V.onopen=()=>{m("open"),He("WebSocket connected"),V.send(JSON.stringify({command:"state"}))},V.onclose=E=>{m("closed"),He(`WebSocket closed (code ${E.code})`)},V.onerror=E=>{console.error("WebSocket error",E),He("WebSocket error encountered")},V.onmessage=E=>{try{const x=JSON.parse(E.data);x.type==="state"?h(x.payload):x.type==="error"&&He(`Backend error: ${x.message}`)}catch(x){console.error("Malformed message",x)}},()=>{V.close()}},[He,s,t]);const pt=G=>{o(G)},z=async G=>{if(s)try{const V=await fetch(ds(`/runs/${s}/step`,t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({steps:G})});if(!V.ok)throw new Error(`Step failed (${V.status})`);const E=await V.json();h(E),He(`Advanced simulation by ${G} step(s)`)}catch(V){He(`Error stepping simulation: ${V.message}`)}};ae.useEffect(()=>{if(!T||!s||u!=="runs"||(a==null?void 0:a.status)!=="running")return;let G=!1,V;const E=async()=>{G||(await z(L),V=window.setTimeout(E,Math.max(100,F)))};return V=window.setTimeout(E,0),()=>{G=!0,V&&window.clearTimeout(V)}},[T,L,F,s,u,a==null?void 0:a.status]);const Rt=(Fe=f==null?void 0:f.metrics)!=null?Fe:{};return ae.useEffect(()=>{const G=E=>{if(!ne)return;const x=document.querySelector(".split-container");if(!x)return;const U=x.getBoundingClientRect(),ee=E.clientX-U.left,re=Math.max(.2,Math.min(.8,ee/U.width));X(re)},V=()=>N(!1);return window.addEventListener("mousemove",G),window.addEventListener("mouseup",V),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",V)}},[ne]),ae.useEffect(()=>{const G=E=>{if(!oe)return;const x=document.querySelector(".vsplit-container");if(!x)return;const U=x.getBoundingClientRect(),ee=E.clientY-U.top,re=Math.max(.25,Math.min(.85,ee/U.height));te(re)},V=()=>he(!1);return window.addEventListener("mousemove",G),window.addEventListener("mouseup",V),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",V)}},[oe]),ae.useEffect(()=>{const G=E=>{if(!Z)return;const x=document.querySelector(".app-shell");if(!x)return;const U=x.getBoundingClientRect(),ee=E.clientX-U.left,re=220,ie=Math.max(360,U.width*.5);D(Math.max(re,Math.min(ie,ee)))},V=()=>le(!1);return window.addEventListener("mousemove",G),window.addEventListener("mouseup",V),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",V)}},[Z]),M.jsxs("div",{className:"app-shell",style:{"--sidebar-width":`${De}px`},children:[u==="runs"?M.jsxs(M.Fragment,{children:[M.jsx(Fx,{runs:e,selectedId:s,onSelect:pt,onRefresh:ke,onDelete:async G=>{var V;try{const E=ds(`/runs/${G}`,t),x=await fetch(E,{method:"DELETE"});if(!x.ok)throw new Error(`Delete failed (${x.status})`);s===G&&o(null),await ke()}catch(E){He(`Delete run error: ${(V=E==null?void 0:E.message)!=null?V:String(E)}`)}},isLoading:i}),M.jsx("div",{className:"sidebar-divider",onMouseDown:()=>le(!0),title:"Resize sidebar"}),M.jsxs("main",{className:"main-content",children:[M.jsxs("div",{className:"header",children:[M.jsxs("div",{children:[M.jsx("h1",{children:"Digital Twin Console"}),M.jsxs("p",{style:{color:"#64748b"},children:["WebSocket status: ",S]})]}),M.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[M.jsx("button",{className:"button",onClick:()=>_("builder"),children:"🏗️ Digital Twin"}),M.jsx("button",{className:"button button-secondary",onClick:()=>_("scenarios"),children:"Scenarios"}),M.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),M.jsx("button",{className:"button",onClick:()=>y("3d"),style:{background:v==="3d"?"#2563eb":"#475569"},children:"3D"}),M.jsx("button",{className:"button",onClick:()=>y("charts"),style:{background:v==="charts"?"#2563eb":"#475569"},children:"Charts"}),M.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),M.jsx("button",{className:"button",onClick:()=>z(1),disabled:!s||(a==null?void 0:a.status)!=="running",children:"Step"}),M.jsx("button",{className:"button",onClick:()=>z(12),disabled:!s||(a==null?void 0:a.status)!=="running",children:"×12"}),M.jsx("button",{className:"button",onClick:()=>w(G=>!G),disabled:!s||(a==null?void 0:a.status)!=="running",style:{background:T?"#dc2626":"#2563eb"},children:T?"⏸ Pause":"▶ Auto"}),M.jsx("input",{type:"number",value:L,min:1,max:288,onChange:G=>W(Math.max(1,Math.min(288,Number(G.target.value)))),style:{width:50},title:"Steps per interval"}),M.jsx("input",{type:"number",value:F,min:100,step:100,onChange:G=>j(Math.max(100,Number(G.target.value))),style:{width:60},title:"Interval (ms)"}),M.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:"0.8rem",color:"#94a3b8"},children:[M.jsx("input",{type:"checkbox",checked:Me,onChange:G=>Ne(G.target.checked)})," Reduce motion"]}),M.jsx("button",{className:"button button-secondary",onClick:()=>me(G=>!G),style:{padding:"0.35rem 0.5rem"},children:Q?"▼":"▲"})]})]}),M.jsxs("section",{className:"metrics-grid",children:[M.jsxs("article",{className:"metric-card",children:[M.jsx("div",{className:"metric-label",children:"Timestep"}),M.jsx("div",{className:"metric-value",children:(We=Rt.timestep)!=null?We:"—"})]}),M.jsxs("article",{className:"metric-card",children:[M.jsx("div",{className:"metric-label",children:"Fund NAV (DKK)"}),M.jsx("div",{className:"metric-value",children:ng(Rt.fund_nav)})]}),M.jsxs("article",{className:"metric-card",children:[M.jsx("div",{className:"metric-label",children:"Trading Budget (DKK)"}),M.jsx("div",{className:"metric-value",children:ng(Rt.budget)})]}),M.jsxs("article",{className:"metric-card",children:[M.jsx("div",{className:"metric-label",children:"Last Revenue"}),M.jsx("div",{className:"metric-value",children:FA(Rt.last_revenue)})]})]}),M.jsxs("section",{className:"vsplit-container",style:{height:"100%"},children:[M.jsx("div",{className:"vsplit-pane",style:{flexBasis:Q?"100%":`${Math.round(q*100)}%`,flexGrow:1,minHeight:0,padding:v==="3d"?0:"1rem",display:"flex",flexDirection:"column"},children:v==="3d"?M.jsxs("div",{className:"viewer-panel",style:{minHeight:320,height:"100%",position:"relative"},children:[M.jsx("div",{style:{position:"absolute",top:8,right:8,zIndex:20,display:"flex",gap:8,alignItems:"center",background:"rgba(15,23,42,0.65)",padding:"6px 8px",borderRadius:6,border:"1px solid rgba(148,163,184,0.2)"},children:M.jsx("button",{className:"button",onClick:()=>_("builder"),style:{fontSize:11,padding:"4px 8px"},children:"🏗️ Edit Digital Twin"})}),M.jsx(tg,{config:C,animate:!Me}),!C&&M.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[M.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),M.jsx("div",{children:"No digital twin configured"}),M.jsx("button",{className:"button",onClick:()=>_("builder"),style:{marginTop:12},children:"Create Digital Twin"})]})]}):M.jsx("div",{className:"metrics-grid",style:{height:"100%",overflow:"auto"},children:M.jsx(Ox,{apiBase:t,runId:s})})}),!Q&&M.jsx("div",{className:"vsplit-divider",onMouseDown:()=>he(!0),onDoubleClick:()=>te(.58)}),!Q&&M.jsxs("div",{className:"split-container",style:{flexBasis:`${Math.round((1-q)*100)}%`,minHeight:180},children:[M.jsxs("div",{className:"split-pane",style:{flexBasis:`${Math.round(K*100)}%`,padding:"1rem",minHeight:220,display:"flex",flexDirection:"column",overflow:"auto"},children:[M.jsx("div",{className:"metric-label",children:"Scenario"}),c?M.jsxs("div",{children:[M.jsx("h3",{style:{margin:"0.25rem 0 0.5rem 0"},children:c.name}),M.jsx("p",{style:{color:"#94a3b8"},children:(O=c.description)!=null?O:"—"}),M.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.95rem",whiteSpace:"pre-wrap"},children:c.details&&M.jsx("p",{style:{marginTop:0},children:c.details})}),M.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.9rem"},children:[M.jsx("div",{style:{color:"#94a3b8",marginBottom:4},children:"Overrides"}),M.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:Object.entries(c.config_overrides||{}).map(([G,V])=>M.jsxs("li",{children:[M.jsx("code",{children:G}),": ",M.jsx("span",{children:String(V)})]},G))})]})]}):M.jsx("div",{children:"—"})]}),M.jsx("div",{className:"split-divider",onMouseDown:()=>N(!0),onDoubleClick:()=>X(.5)}),M.jsx("div",{className:"split-pane",style:{flexBasis:`${Math.round((1-K)*100)}%`,padding:0,minHeight:220,display:"flex",flexDirection:"column"},children:M.jsx("div",{className:"log-panel",style:{height:"100%",maxHeight:"100%",flex:1},children:p.map((G,V)=>M.jsx("div",{children:G},V))})})]})]})]})]}):M.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1"},children:[M.jsxs("div",{className:"header",children:[M.jsx("h1",{children:"Scenarios"}),M.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:M.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})})]}),M.jsx(zx,{apiBase:t,onRun:G=>{_("runs"),o(G),ke()}})]}),u==="builder"&&M.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[M.jsxs("div",{className:"header",style:{flexShrink:0},children:[M.jsxs("div",{children:[M.jsx("h1",{children:"🏗️ Digital Twin Builder"}),M.jsx("p",{style:{color:"#64748b",margin:0},children:"Drag and drop components to design your PED system"})]}),M.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[M.jsx("button",{className:"button",onClick:()=>b("2d"),disabled:P==="2d",children:"2D Editor"}),M.jsx("button",{className:"button",onClick:()=>b("3d"),disabled:P==="3d",children:"3D Preview"}),M.jsx("button",{className:"button",onClick:()=>_("scenarios"),children:"Scenarios"}),M.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})]})]}),M.jsx("div",{style:{flex:1,minHeight:0,overflow:"hidden"},children:P==="2d"?M.jsx(Hx,{onConfigChange:R,initialConfig:C,apiBase:t,onRunSimulation:G=>{o(G),_("runs"),ke()}}):M.jsx(tg,{config:C,animate:!Me})})]})]})}class kA extends mg.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){var n;return{hasError:!0,message:(n=e==null?void 0:e.message)!=null?n:String(e)}}componentDidCatch(e,n){console.error("[UI ErrorBoundary]",e,n)}render(){return this.state.hasError?M.jsxs("div",{style:{padding:"1rem",color:"#fca5a5"},children:[M.jsx("h2",{children:"Something went wrong rendering the UI."}),M.jsx("pre",{style:{whiteSpace:"pre-wrap"},children:this.state.message})]}):this.props.children}}function Cf(t,e){try{const n="__boot_error_overlay__";let i=document.getElementById(n);i||(i=document.createElement("div"),i.id=n,i.setAttribute("role","alert"),i.style.position="fixed",i.style.inset="0",i.style.zIndex="9999",i.style.background="rgba(15,23,42,0.96)",i.style.color="#fca5a5",i.style.fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial",i.style.padding="24px",document.body.appendChild(i));const r=typeof e=="string"?e:e instanceof Error?e.stack||e.message:JSON.stringify(e);i.innerHTML=`<h2 style="margin:0 0 8px 0; color:#fecaca">${t}</h2><pre style="white-space:pre-wrap; font-size:14px; color:#fca5a5">${r!=null?r:""}</pre>`}catch{}}window.addEventListener("error",t=>{Cf("Runtime error",(t==null?void 0:t.error)||(t==null?void 0:t.message))});window.addEventListener("unhandledrejection",t=>{Cf("Unhandled promise rejection",t==null?void 0:t.reason)});var ig,rg;try{let t=document.getElementById("root");t||(t=document.createElement("div"),t.id="root",document.body.appendChild(t)),console.log("[UI] Mounting app. API base =",(rg=(ig=import.meta)==null?void 0:ig.env)==null?void 0:rg.VITE_API_BASE),Uu.createRoot(t).render(M.jsx(mg.StrictMode,{children:M.jsx(kA,{children:M.jsx(OA,{})})}))}catch(t){console.error("[UI] Failed to mount app",t),Cf("Failed to mount app",t)}
//# sourceMappingURL=index-D6oVkEQS.js.map
