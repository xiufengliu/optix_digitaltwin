(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jm={exports:{}},ac={},eg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),J0=Symbol.for("react.portal"),ev=Symbol.for("react.fragment"),tv=Symbol.for("react.strict_mode"),nv=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),sv=Symbol.for("react.forward_ref"),ov=Symbol.for("react.suspense"),av=Symbol.for("react.memo"),lv=Symbol.for("react.lazy"),Cf=Symbol.iterator;function cv(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,ig={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rg(){}rg.prototype=Zs.prototype;function yh(t,e,n){this.props=t,this.context=e,this.refs=ig,this.updater=n||tg}var xh=yh.prototype=new rg;xh.constructor=yh;ng(xh,Zs.prototype);xh.isPureReactComponent=!0;var Rf=Array.isArray,sg=Object.prototype.hasOwnProperty,Sh={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,i)&&!og.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:Sh.current}}function uv(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pf=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case J0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,Rf(r)?(n="",t!=null&&(n=t.replace(Pf,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=uv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Pf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=dl(s,e,n,l,r)}else if(l=cv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function hv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},hl={transition:null},fv={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Sh};function lg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Zs;Je.Fragment=ev;Je.Profiler=nv;Je.PureComponent=yh;Je.StrictMode=tv;Je.Suspense=ov;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;Je.act=lg;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ng({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sg.call(e,l)&&!og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:rv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iv,_context:t},t.Consumer=t};Je.createElement=ag;Je.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:sv,render:t}};Je.isValidElement=Mh;Je.lazy=function(t){return{$$typeof:lv,_payload:{_status:-1,_result:t},_init:hv}};Je.memo=function(t,e){return{$$typeof:av,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Je.unstable_act=lg;Je.useCallback=function(t,e){return nn.current.useCallback(t,e)};Je.useContext=function(t){return nn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return nn.current.useEffect(t,e)};Je.useId=function(){return nn.current.useId()};Je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return nn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Je.useRef=function(t){return nn.current.useRef(t)};Je.useState=function(t){return nn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return nn.current.useTransition()};Je.version="18.3.1";eg.exports=Je;var ce=eg.exports;const cg=Q0(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=ce,mv=Symbol.for("react.element"),gv=Symbol.for("react.fragment"),_v=Object.prototype.hasOwnProperty,vv=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yv={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_v.call(e,i)&&!yv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mv,type:t,key:s,ref:o,props:r,_owner:vv.current}}ac.Fragment=gv;ac.jsx=ug;ac.jsxs=ug;Jm.exports=ac;var m=Jm.exports,Iu={},dg={exports:{}},Sn={},hg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,J){var re=L.length;L.push(J);e:for(;0<re;){var he=re-1>>>1,Re=L[he];if(0<r(Re,J))L[he]=J,L[re]=Re,re=he;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var J=L[0],re=L.pop();if(re!==J){L[0]=re;e:for(var he=0,Re=L.length,He=Re>>>1;he<He;){var ne=2*(he+1)-1,le=L[ne],k=ne+1,ee=L[k];if(0>r(le,re))k<Re&&0>r(ee,le)?(L[he]=ee,L[k]=re,he=k):(L[he]=le,L[ne]=re,he=ne);else if(k<Re&&0>r(ee,re))L[he]=ee,L[k]=re,he=k;else break e}}return J}function r(L,J){var re=L.sortIndex-J.sortIndex;return re!==0?re:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=L)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function y(L){if(S=!1,x(L),!v)if(n(l)!==null)v=!0,X(D);else{var J=n(c);J!==null&&ie(y,J.startTime-L)}}function D(L,J){v=!1,S&&(S=!1,u(R),R=-1),p=!0;var re=d;try{for(x(J),f=n(l);f!==null&&(!(f.expirationTime>J)||L&&!P());){var he=f.callback;if(typeof he=="function"){f.callback=null,d=f.priorityLevel;var Re=he(f.expirationTime<=J);J=t.unstable_now(),typeof Re=="function"?f.callback=Re:f===n(l)&&i(l),x(J)}else i(l);f=n(l)}if(f!==null)var He=!0;else{var ne=n(c);ne!==null&&ie(y,ne.startTime-J),He=!1}return He}finally{f=null,d=re,p=!1}}var b=!1,C=null,R=-1,w=5,M=-1;function P(){return!(t.unstable_now()-M<w)}function G(){if(C!==null){var L=t.unstable_now();M=L;var J=!0;try{J=C(!0,L)}finally{J?V():(b=!1,C=null)}}else b=!1}var V;if(typeof _=="function")V=function(){_(G)};else if(typeof MessageChannel!="undefined"){var z=new MessageChannel,Y=z.port2;z.port1.onmessage=G,V=function(){Y.postMessage(null)}}else V=function(){g(G,0)};function X(L){C=L,b||(b=!0,V())}function ie(L,J){R=g(function(){L(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,X(D))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var J=3;break;default:J=d}var re=d;d=J;try{return L()}finally{d=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var re=d;d=L;try{return J()}finally{d=re}},t.unstable_scheduleCallback=function(L,J,re){var he=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?he+re:he):re=he,L){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=re+Re,L={id:h++,callback:J,priorityLevel:L,startTime:re,expirationTime:Re,sortIndex:-1},re>he?(L.sortIndex=re,e(c,L),n(l)===null&&L===n(c)&&(S?(u(R),R=-1):S=!0,ie(y,re-he))):(L.sortIndex=Re,e(l,L),v||p||(v=!0,X(D))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var J=d;return function(){var re=d;d=J;try{return L.apply(this,arguments)}finally{d=re}}}})(fg);hg.exports=fg;var xv=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=ce,xn=xv;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,Bo={};function Vr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Bo[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var bi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Uu=Object.prototype.hasOwnProperty,Mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},Lf={};function wv(t){return Uu.call(Lf,t)?!0:Uu.call(Df,t)?!1:Mv.test(t)?Lf[t]=!0:(Df[t]=!0,!1)}function Ev(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tv(t,e,n,i){if(e===null||typeof e=="undefined"||Ev(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,Eh);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tv(e,n,r,i)&&(n=null),i||r===null?wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),Nf=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Pc;function Eo(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Dc=!1;function Lc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function bv(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case Fu:return"Profiler";case bh:return"StrictMode";case ku:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function Av(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cv(t){var e=vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=Cv(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function If(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xg(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Hu(t,e){xg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(To(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Sg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,wg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rv=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){Rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function Eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function Tg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Eg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Pv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(Pv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Ps=null,Ds=null;function Of(t){if(t=aa(t)){if(typeof Yu!="function")throw Error(me(280));var e=t.stateNode;e&&(e=hc(e),Yu(t.stateNode,t.type,e))}}function bg(t){Ps?Ds?Ds.push(t):Ds=[t]:Ps=t}function Ag(){if(Ps){var t=Ps,e=Ds;if(Ds=Ps=null,Of(t),e)for(t=0;t<e.length;t++)Of(e[t])}}function Cg(t,e){return t(e)}function Rg(){}var Nc=!1;function Pg(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return Cg(t,e,n)}finally{Nc=!1,(Ps!==null||Ds!==null)&&(Rg(),Ag())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var qu=!1;if(bi)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{qu=!1}function Dv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Do=!1,Dl=null,Ll=!1,Ku=null,Lv={onError:function(t){Do=!0,Dl=t}};function Nv(t,e,n,i,r,s,o,a,l){Do=!1,Dl=null,Dv.apply(Lv,arguments)}function Iv(t,e,n,i,r,s,o,a,l){if(Nv.apply(this,arguments),Do){if(Do){var c=Dl;Do=!1,Dl=null}else throw Error(me(198));Ll||(Ll=!0,Ku=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zf(t){if(Gr(t)!==t)throw Error(me(188))}function Uv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zf(r),t;if(s===i)return zf(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function Lg(t){return t=Uv(t),t!==null?Ng(t):null}function Ng(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ng(t);if(e!==null)return e;t=t.sibling}return null}var Ig=xn.unstable_scheduleCallback,Bf=xn.unstable_cancelCallback,Fv=xn.unstable_shouldYield,kv=xn.unstable_requestPaint,Ct=xn.unstable_now,Ov=xn.unstable_getCurrentPriorityLevel,Ph=xn.unstable_ImmediatePriority,Ug=xn.unstable_UserBlockingPriority,Nl=xn.unstable_NormalPriority,zv=xn.unstable_LowPriority,Fg=xn.unstable_IdlePriority,lc=null,ri=null;function Bv(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Gv,Hv=Math.log,Vv=Math.LN2;function Gv(t){return t>>>=0,t===0?32:31-(Hv(t)/Vv|0)|0}var Ma=64,wa=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=jv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zg,Lh,Bg,Hg,Vg,Qu=!1,Ea=[],Ki=null,Zi=null,Qi=null,Go=new Map,jo=new Map,ji=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&Lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yv(t,e,n,i,r){switch(e){case"focusin":return Ki=lo(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=lo(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=lo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,lo(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,lo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function Gg(t){var e=br(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dg(n),e!==null){t.blockedOn=e,Vg(t.priority,function(){Bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=aa(n),e!==null&&Lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Vf(t,e,n){fl(t)&&n.delete(e)}function qv(){Qu=!1,Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Qi!==null&&fl(Qi)&&(Qi=null),Go.forEach(Vf),jo.forEach(Vf)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,qv)))}function Wo(t){function e(r){return co(r,t)}if(0<Ea.length){co(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&co(Ki,t),Zi!==null&&co(Zi,t),Qi!==null&&co(Qi,t),Go.forEach(e),jo.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&ji.shift()}var Ls=Di.ReactCurrentBatchConfig,Ul=!0;function Kv(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=1,Nh(t,e,n,i)}finally{st=r,Ls.transition=s}}function Zv(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=4,Nh(t,e,n,i)}finally{st=r,Ls.transition=s}}function Nh(t,e,n,i){if(Ul){var r=Ju(t,e,n,i);if(r===null)jc(t,e,i,Fl,n),Hf(t,i);else if(Yv(r,t,e,n,i))i.stopPropagation();else if(Hf(t,i),e&4&&-1<$v.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&zg(s),s=Ju(t,e,n,i),s===null&&jc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var Fl=null;function Ju(t,e,n,i){if(Fl=null,t=Rh(i),t=br(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ov()){case Ph:return 1;case Ug:return 4;case Nl:case zv:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var $i=null,Ih=null,pl=null;function Wg(){if(pl)return pl;var t,e=Ih,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Gf(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ta:Gf,this.isPropagationStopped=Gf,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=Mn(Qs),oa=Et({},Qs,{view:0,detail:0}),Qv=Mn(oa),Uc,Fc,uo,cc=Et({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Uc=t.screenX-uo.screenX,Fc=t.screenY-uo.screenY):Fc=Uc=0,uo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),jf=Mn(cc),Jv=Et({},cc,{dataTransfer:0}),ey=Mn(Jv),ty=Et({},oa,{relatedTarget:0}),kc=Mn(ty),ny=Et({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=Mn(ny),ry=Et({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sy=Mn(ry),oy=Et({},Qs,{data:0}),Wf=Mn(oy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function Fh(){return uy}var dy=Et({},oa,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ly[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=Mn(dy),fy=Et({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xf=Mn(fy),py=Et({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),my=Mn(py),gy=Et({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Mn(gy),vy=Et({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=Mn(vy),xy=[9,13,27,32],kh=bi&&"CompositionEvent"in window,Lo=null;bi&&"documentMode"in document&&(Lo=document.documentMode);var Sy=bi&&"TextEvent"in window&&!Lo,Xg=bi&&(!kh||Lo&&8<Lo&&11>=Lo),$f=" ",Yf=!1;function $g(t,e){switch(t){case"keyup":return xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function My(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(Yf=!0,$f);case"textInput":return t=e.data,t===$f&&Yf?null:t;default:return null}}function wy(t,e){if(vs)return t==="compositionend"||!kh&&$g(t,e)?(t=Wg(),pl=Ih=$i=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function qg(t,e,n,i){bg(i),e=kl(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Xo=null;function Ty(t){o_(t,0)}function uc(t){var e=Ss(t);if(yg(e))return t}function by(t,e){if(t==="change")return e}var Kg=!1;if(bi){var Oc;if(bi){var zc="oninput"in document;if(!zc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),zc=typeof Kf.oninput=="function"}Oc=zc}else Oc=!1;Kg=Oc&&(!document.documentMode||9<document.documentMode)}function Zf(){No&&(No.detachEvent("onpropertychange",Zg),Xo=No=null)}function Zg(t){if(t.propertyName==="value"&&uc(Xo)){var e=[];qg(e,Xo,t,Rh(t)),Pg(Ty,e)}}function Ay(t,e,n){t==="focusin"?(Zf(),No=e,Xo=n,No.attachEvent("onpropertychange",Zg)):t==="focusout"&&Zf()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Xo)}function Ry(t,e){if(t==="click")return uc(e)}function Py(t,e){if(t==="input"||t==="change")return uc(e)}function Dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Dy;function $o(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jf(t,e){var n=Qf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qf(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ly(t){var e=Jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(i!==null&&Oh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jf(n,s);var o=Jf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ny=bi&&"documentMode"in document&&11>=document.documentMode,ys=null,ed=null,Io=null,td=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||ys==null||ys!==Pl(i)||(i=ys,"selectionStart"in i&&Oh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&$o(Io,i)||(Io=i,i=kl(ed,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Bc={},e_={};bi&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function dc(t){if(Bc[t])return Bc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in e_)return Bc[t]=e[n];return t}var t_=dc("animationend"),n_=dc("animationiteration"),i_=dc("animationstart"),r_=dc("transitionend"),s_=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){s_.set(t,e),Vr(e,[t])}for(var Hc=0;Hc<tp.length;Hc++){var Vc=tp[Hc],Iy=Vc.toLowerCase(),Uy=Vc[0].toUpperCase()+Vc.slice(1);dr(Iy,"on"+Uy)}dr(t_,"onAnimationEnd");dr(n_,"onAnimationIteration");dr(i_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(r_,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Iv(i,e,void 0,t),t.currentTarget=null}function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}}}if(Ll)throw t=Ku,Ll=!1,Ku=null,t}function gt(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(a_(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),a_(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Aa]){t[Aa]=!0,pg.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,Gc("selectionchange",!1,e))}}function a_(t,e,n,i){switch(jg(e)){case 1:var r=Kv;break;case 4:r=Zv;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pg(function(){var c=s,h=Rh(n),f=[];e:{var d=s_.get(t);if(d!==void 0){var p=Uh,v=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=hy;break;case"focusin":v="focus",p=kc;break;case"focusout":v="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=my;break;case t_:case n_:case i_:p=iy;break;case r_:p=_y;break;case"scroll":p=Qv;break;case"wheel":p=yy;break;case"copy":case"cut":case"paste":p=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xf}var S=(e&4)!==0,g=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Vo(_,u),y!=null&&S.push(qo(_,y,x)))),g)break;_=_.return}0<S.length&&(d=new p(d,v,null,n,h),f.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$u&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ai]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?br(v):null,v!==null&&(g=Gr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(S=jf,y="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xf,y="onPointerLeave",u="onPointerEnter",_="pointer"),g=p==null?d:Ss(p),x=v==null?d:Ss(v),d=new S(y,_+"leave",p,n,h),d.target=g,d.relatedTarget=x,y=null,br(h)===c&&(S=new S(u,_+"enter",v,n,h),S.target=x,S.relatedTarget=g,y=S),g=y,p&&v)t:{for(S=p,u=v,_=0,x=S;x;x=qr(x))_++;for(x=0,y=u;y;y=qr(y))x++;for(;0<_-x;)S=qr(S),_--;for(;0<x-_;)u=qr(u),x--;for(;_--;){if(S===u||u!==null&&S===u.alternate)break t;S=qr(S),u=qr(u)}S=null}else S=null;p!==null&&ip(f,d,p,S,!1),v!==null&&g!==null&&ip(f,g,v,S,!0)}}e:{if(d=c?Ss(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var D=by;else if(qf(d))if(Kg)D=Py;else{D=Cy;var b=Ay}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(D=Ry);if(D&&(D=D(t,c))){qg(f,D,n,h);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Vu(d,"number",d.value)}switch(b=c?Ss(c):window,t){case"focusin":(qf(b)||b.contentEditable==="true")&&(ys=b,ed=c,Io=null);break;case"focusout":Io=ed=ys=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,ep(f,n,h);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":ep(f,n,h)}var C;if(kh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else vs?$g(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Xg&&n.locale!=="ko"&&(vs||R!=="onCompositionStart"?R==="onCompositionEnd"&&vs&&(C=Wg()):($i=h,Ih="value"in $i?$i.value:$i.textContent,vs=!0)),b=kl(c,R),0<b.length&&(R=new Wf(R,t,null,n,h),f.push({event:R,listeners:b}),C?R.data=C:(C=Yg(n),C!==null&&(R.data=C)))),(C=Sy?My(t,n):wy(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(h=new Wf("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}o_(f,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(t,n),s!=null&&i.unshift(qo(t,s,r)),s=Vo(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Vo(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=Vo(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ky=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Oy,"")}function Ca(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(me(425))}function Ol(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof sp!="undefined"?function(t){return sp.resolve(null).then(t).catch(Hy)}:sd;function Hy(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ti="__reactFiber$"+Js,Ko="__reactProps$"+Js,Ai="__reactContainer$"+Js,od="__reactEvents$"+Js,Vy="__reactListeners$"+Js,Gy="__reactHandles$"+Js;function br(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[ti])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ti]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function hc(t){return t[Ko]||null}var ad=[],Ms=-1;function hr(t){return{current:t}}function _t(t){0>Ms||(t.current=ad[Ms],ad[Ms]=null,Ms--)}function dt(t,e){Ms++,ad[Ms]=t.current,t.current=e}var lr={},Yt=hr(lr),cn=hr(!1),Nr=lr;function zs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function zl(){_t(cn),_t(Yt)}function ap(t,e,n){if(Yt.current!==lr)throw Error(me(168));dt(Yt,e),dt(cn,n)}function l_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,Av(t)||"Unknown",r));return Et({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=Yt.current,dt(Yt,t),dt(cn,cn.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=l_(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,_t(cn),_t(Yt),dt(Yt,t)):_t(cn),dt(cn,n)}var mi=null,fc=!1,Xc=!1;function c_(t){mi===null?mi=[t]:mi.push(t)}function jy(t){fc=!0,c_(t)}function fr(){if(!Xc&&mi!==null){Xc=!0;var t=0,e=st;try{var n=mi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,fc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Ig(Ph,fr),r}finally{st=e,Xc=!1}}return null}var ws=[],Es=0,Hl=null,Vl=0,An=[],Cn=0,Ir=null,vi=1,yi="";function Sr(t,e){ws[Es++]=Vl,ws[Es++]=Hl,Hl=t,Vl=e}function u_(t,e,n){An[Cn++]=vi,An[Cn++]=yi,An[Cn++]=Ir,Ir=t;var i=vi;t=yi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-$n(e)+r|n<<r|i,yi=s+t}else vi=1<<s|n<<r|i,yi=t}function zh(t){t.return!==null&&(Sr(t,1),u_(t,1,0))}function Bh(t){for(;t===Hl;)Hl=ws[--Es],ws[Es]=null,Vl=ws[--Es],ws[Es]=null;for(;t===Ir;)Ir=An[--Cn],An[Cn]=null,yi=An[--Cn],An[Cn]=null,vi=An[--Cn],An[Cn]=null}var yn=null,vn=null,yt=!1,Wn=null;function d_(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,vn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:vi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,vn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(yt){var e=vn;if(e){var n=e;if(!cp(t,e)){if(ld(t))throw Error(me(418));e=Ji(n.nextSibling);var i=yn;e&&cp(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,yt=!1,yn=t)}}else{if(ld(t))throw Error(me(418));t.flags=t.flags&-4097|2,yt=!1,yn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Ra(t){if(t!==yn)return!1;if(!yt)return up(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=vn)){if(ld(t))throw h_(),Error(me(418));for(;e;)d_(t,e),e=Ji(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=yn?Ji(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=vn;t;)t=Ji(t.nextSibling)}function Bs(){vn=yn=null,yt=!1}function Hh(t){Wn===null?Wn=[t]:Wn.push(t)}var Wy=Di.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function f_(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=ir(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,y){return _===null||_.tag!==6?(_=Jc(x,u.mode,y),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,y){var D=x.type;return D===_s?h(u,_,x.props.children,y,x.key):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vi&&dp(D)===_.type)?(y=r(_,x.props),y.ref=ho(u,_,x),y.return=u,y):(y=Ml(x.type,x.key,x.props,null,u.mode,y),y.ref=ho(u,_,x),y.return=u,y)}function c(u,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=eu(x,u.mode,y),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function h(u,_,x,y,D){return _===null||_.tag!==7?(_=Lr(x,u.mode,y,D),_.return=u,_):(_=r(_,x),_.return=u,_)}function f(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jc(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:return x=Ml(_.type,_.key,_.props,null,u.mode,x),x.ref=ho(u,null,_),x.return=u,x;case gs:return _=eu(_,u.mode,x),_.return=u,_;case Vi:var y=_._init;return f(u,y(_._payload),x)}if(To(_)||oo(_))return _=Lr(_,u.mode,x,null),_.return=u,_;Pa(u,_)}return null}function d(u,_,x,y){var D=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return D!==null?null:a(u,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ya:return x.key===D?l(u,_,x,y):null;case gs:return x.key===D?c(u,_,x,y):null;case Vi:return D=x._init,d(u,_,D(x._payload),y)}if(To(x)||oo(x))return D!==null?null:h(u,_,x,y,null);Pa(u,x)}return null}function p(u,_,x,y,D){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(_,u,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ya:return u=u.get(y.key===null?x:y.key)||null,l(_,u,y,D);case gs:return u=u.get(y.key===null?x:y.key)||null,c(_,u,y,D);case Vi:var b=y._init;return p(u,_,x,b(y._payload),D)}if(To(y)||oo(y))return u=u.get(x)||null,h(_,u,y,D,null);Pa(_,y)}return null}function v(u,_,x,y){for(var D=null,b=null,C=_,R=_=0,w=null;C!==null&&R<x.length;R++){C.index>R?(w=C,C=null):w=C.sibling;var M=d(u,C,x[R],y);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(u,C),_=s(M,_,R),b===null?D=M:b.sibling=M,b=M,C=w}if(R===x.length)return n(u,C),yt&&Sr(u,R),D;if(C===null){for(;R<x.length;R++)C=f(u,x[R],y),C!==null&&(_=s(C,_,R),b===null?D=C:b.sibling=C,b=C);return yt&&Sr(u,R),D}for(C=i(u,C);R<x.length;R++)w=p(C,u,R,x[R],y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?R:w.key),_=s(w,_,R),b===null?D=w:b.sibling=w,b=w);return t&&C.forEach(function(P){return e(u,P)}),yt&&Sr(u,R),D}function S(u,_,x,y){var D=oo(x);if(typeof D!="function")throw Error(me(150));if(x=D.call(x),x==null)throw Error(me(151));for(var b=D=null,C=_,R=_=0,w=null,M=x.next();C!==null&&!M.done;R++,M=x.next()){C.index>R?(w=C,C=null):w=C.sibling;var P=d(u,C,M.value,y);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(u,C),_=s(P,_,R),b===null?D=P:b.sibling=P,b=P,C=w}if(M.done)return n(u,C),yt&&Sr(u,R),D;if(C===null){for(;!M.done;R++,M=x.next())M=f(u,M.value,y),M!==null&&(_=s(M,_,R),b===null?D=M:b.sibling=M,b=M);return yt&&Sr(u,R),D}for(C=i(u,C);!M.done;R++,M=x.next())M=p(C,u,R,M.value,y),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?R:M.key),_=s(M,_,R),b===null?D=M:b.sibling=M,b=M);return t&&C.forEach(function(G){return e(u,G)}),yt&&Sr(u,R),D}function g(u,_,x,y){if(typeof x=="object"&&x!==null&&x.type===_s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ya:e:{for(var D=x.key,b=_;b!==null;){if(b.key===D){if(D=x.type,D===_s){if(b.tag===7){n(u,b.sibling),_=r(b,x.props.children),_.return=u,u=_;break e}}else if(b.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Vi&&dp(D)===b.type){n(u,b.sibling),_=r(b,x.props),_.ref=ho(u,b,x),_.return=u,u=_;break e}n(u,b);break}else e(u,b);b=b.sibling}x.type===_s?(_=Lr(x.props.children,u.mode,y,x.key),_.return=u,u=_):(y=Ml(x.type,x.key,x.props,null,u.mode,y),y.ref=ho(u,_,x),y.return=u,u=y)}return o(u);case gs:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=eu(x,u.mode,y),_.return=u,u=_}return o(u);case Vi:return b=x._init,g(u,_,b(x._payload),y)}if(To(x))return v(u,_,x,y);if(oo(x))return S(u,_,x,y);Pa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=Jc(x,u.mode,y),_.return=u,u=_),o(u)):n(u,_)}return g}var Hs=f_(!0),p_=f_(!1),Gl=hr(null),jl=null,Ts=null,Vh=null;function Gh(){Vh=Ts=jl=null}function jh(t){var e=Gl.current;_t(Gl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){jl=t,Vh=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Vh!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(jl===null)throw Error(me(308));Ts=t,jl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Ar=null;function Wh(t){Ar===null?Ar=[t]:Ar.push(t)}function m_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(d=e,p=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Et({},f,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var la={},si=hr(la),Zo=hr(la),Qo=hr(la);function Cr(t){if(t===la)throw Error(me(174));return t}function $h(t,e){switch(dt(Qo,e),dt(Zo,t),dt(si,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}_t(si),dt(si,e)}function Vs(){_t(si),_t(Zo),_t(Qo)}function __(t){Cr(Qo.current);var e=Cr(si.current),n=ju(e,t.type);e!==n&&(dt(Zo,t),dt(si,n))}function Yh(t){Zo.current===t&&(_t(si),_t(Zo))}var St=hr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function qh(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var _l=Di.ReactCurrentDispatcher,Yc=Di.ReactCurrentBatchConfig,Ur=0,Mt=null,Lt=null,Ot=null,$l=!1,Uo=!1,Jo=0,Xy=0;function Gt(){throw Error(me(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Zh(t,e,n,i,r,s){if(Ur=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?Ky:Zy,t=n(i,r),Uo){s=0;do{if(Uo=!1,Jo=0,25<=s)throw Error(me(301));s+=1,Ot=Lt=null,e.updateQueue=null,_l.current=Qy,t=n(i,r)}while(Uo)}if(_l.current=Yl,e=Lt!==null&&Lt.next!==null,Ur=0,Ot=Lt=Mt=null,$l=!1,e)throw Error(me(300));return t}function Qh(){var t=Jo!==0;return Jo=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Un(){if(Lt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?Mt.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(me(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function ea(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=h,Fr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kc(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function v_(){}function y_(t,e){var n=Mt,i=Un(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Jh(M_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,ta(9,S_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(me(349));Ur&30||x_(n,e,r)}return r}function x_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S_(t,e,n,i){e.value=n,e.getSnapshot=i,w_(e)&&E_(t)}function M_(t,e,n){return n(function(){w_(e)&&E_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function E_(t){var e=Ci(t,1);e!==null&&Yn(e,t,1,-1)}function pp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=qy.bind(null,Mt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function T_(){return Un().memoizedState}function vl(t,e,n,i){var r=Jn();Mt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Kh(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function mp(t,e){return vl(8390656,8,t,e)}function Jh(t,e){return pc(2048,8,t,e)}function b_(t,e){return pc(4,2,t,e)}function A_(t,e){return pc(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,C_.bind(null,e,t),n)}function ef(){}function P_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function L_(t,e,n){return Ur&21?(Kn(n,e)||(n=kg(),Mt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function $y(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{st=n,Yc.transition=i}}function N_(){return Un().memoizedState}function Yy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))U_(e,n);else if(n=m_(t,e,n,i),n!==null){var r=en();Yn(n,t,i,r),F_(n,e,i)}}function qy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))U_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=m_(t,e,r,i),n!==null&&(r=en(),Yn(n,t,i,r),F_(n,e,i))}}function I_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function U_(t,e){Uo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}var Yl={readContext:In,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Ky={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Yy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:ef,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=$y.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=Jn();if(yt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),zt===null)throw Error(me(349));Ur&30||x_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(M_.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,S_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=zt.identifierPrefix;if(yt){var n=yi,i=vi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zy={readContext:In,useCallback:P_,useContext:In,useEffect:Jh,useImperativeHandle:R_,useInsertionEffect:b_,useLayoutEffect:A_,useMemo:D_,useReducer:qc,useRef:T_,useState:function(){return qc(ea)},useDebugValue:ef,useDeferredValue:function(t){var e=Un();return L_(e,Lt.memoizedState,t)},useTransition:function(){var t=qc(ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1},Qy={readContext:In,useCallback:P_,useContext:In,useEffect:Jh,useImperativeHandle:R_,useInsertionEffect:b_,useLayoutEffect:A_,useMemo:D_,useReducer:Kc,useRef:T_,useState:function(){return Kc(ea)},useDebugValue:ef,useDeferredValue:function(t){var e=Un();return Lt===null?e.memoizedState=t:L_(e,Lt.memoizedState,t)},useTransition:function(){var t=Kc(ea)[0],e=Un().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:y_,useId:N_,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=nr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Yn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=nr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Yn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Yn(e,t,i,n),gl(e,t,i))}};function gp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function k_(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=un(e)?Nr:Yt.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=un(e)?Nr:Yt.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=bv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function O_(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,wd=i),fd(t,e)},n}function z_(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fx.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var ex=Di.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?p_(e,null,n,i):Hs(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=Zh(t,e,n,i,s,r),n=Qh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(yt&&n&&zh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,B_(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function B_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return pd(t,e,n,i,r)}function H_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(As,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(As,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(As,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(As,_n),_n|=i;return Qt(t,e,r,n),e.child}function V_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=un(n)?Nr:Yt.current;return s=zs(e,s),Ns(e,r),n=Zh(t,e,n,i,s,r),i=Qh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(yt&&i&&zh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(un(n)){var s=!0;Bl(e)}else s=!1;if(Ns(e,r),e.stateNode===null)yl(t,e),k_(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=un(n)?Nr:Yt.current,c=zs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_p(e,o,i,c),Gi=!1;var d=e.memoizedState;o.state=d,Wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||cn.current||Gi?(typeof h=="function"&&(dd(e,n,h,i),l=e.memoizedState),(a=Gi||gp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,g_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=un(n)?Nr:Yt.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&_p(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,Wl(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||cn.current||Gi?(typeof p=="function"&&(dd(e,n,p,i),v=e.memoizedState),(c=Gi||gp(e,n,c,i,d,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){V_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lp(e,n,!1),Ri(t,e,s);i=e.stateNode,ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function G_(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),$h(t,e.containerInfo)}function Ep(t,e,n,i,r){return Bs(),Hh(r),e.flags|=256,Qt(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=gd,t):tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tf(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&Hh(i),Hs(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zc(Error(me(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=gd,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=Zc(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Yn(i,t,r,-1))}return lf(),i=Zc(Error(me(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=px.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Ji(r.nextSibling),yn=e,yt=!0,Wn=null,t!==null&&(An[Cn++]=vi,An[Cn++]=yi,An[Cn++]=Ir,vi=t.id,yi=t.overflow,Ir=e),e=tf(e,i.children),e.flags|=4096,e)}function Tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function Qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function W_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tp(t,n,e);else if(t.tag===19)Tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nx(t,e,n){switch(e.tag){case 3:G_(e),Bs();break;case 5:__(e);break;case 1:un(e.type)&&Bl(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(dt(St,St.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return W_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Ri(t,e,n)}var X_,vd,$_,Y_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};$_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(si.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Wu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ix(t,e,n){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return un(e.type)&&zl(),jt(e),null;case 3:return i=e.stateNode,Vs(),_t(cn),_t(Yt),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(bd(Wn),Wn=null))),vd(t,e),jt(e),null;case 5:Yh(e);var r=Cr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)$_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return jt(e),null}if(t=Cr(si.current),Ra(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)gt(Ao[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":If(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Ff(i,s),gt("invalid",i)}Wu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":xa(i),Uf(i,s,!0);break;case"textarea":xa(i),kf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[Ko]=i,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)gt(Ao[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":If(t,i),r=Bu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Ff(t,i),r=Gu(t,i),gt("invalid",t);break;default:r=i}Wu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":xa(t),Uf(t,i,!1);break;case"textarea":xa(t),kf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Cr(Qo.current),Cr(si.current),Ra(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return jt(e),null;case 13:if(_t(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&vn!==null&&e.mode&1&&!(e.flags&128))h_(),Bs(),e.flags|=98560,s=!1;else if(s=Ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[ti]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Wn!==null&&(bd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Nt===0&&(Nt=3):lf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Vs(),vd(t,e),t===null&&Yo(e.stateNode.containerInfo),jt(e),null;case 10:return jh(e.type._context),jt(e),null;case 17:return un(e.type)&&zl(),jt(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>js&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return jt(e),null}else 2*Ct()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function rx(t,e){switch(Bh(e),e.tag){case 1:return un(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),_t(cn),_t(Yt),qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(_t(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(St),null;case 4:return Vs(),null;case 10:return jh(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var La=!1,$t=!1,sx=typeof WeakSet=="function"?WeakSet:Set,De=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var bp=!1;function ox(t,e){if(nd=Ul,t=Jg(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Ul=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Gn(e.type,S),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return v=bp,bp=!1,v}function Fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q_(t){var e=t.alternate;e!==null&&(t.alternate=null,q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Ko],delete e[od],delete e[Vy],delete e[Gy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K_(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Bt=null,jn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Z_(t,e,n),n=n.sibling}function Z_(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:$t||bs(n,e);case 6:var i=Bt,r=jn;Bt=null,Ii(t,e,n),Bt=i,jn=r,Bt!==null&&(jn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(jn?(t=Bt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Wo(t)):Wc(Bt,n.stateNode));break;case 4:i=Bt,r=jn,Bt=n.stateNode.containerInfo,jn=!0,Ii(t,e,n),Bt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yd(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!$t&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ii(t,e,n),$t=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sx),e.forEach(function(i){var r=mx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,jn=!1;break e;case 3:Bt=a.stateNode.containerInfo,jn=!0;break e;case 4:Bt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Bt===null)throw Error(me(160));Z_(s,o,r),Bt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Fo(3,t,t.return),gc(3,t)}catch(S){Tt(t,t.return,S)}try{Fo(5,t,t.return)}catch(S){Tt(t,t.return,S)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(S){Tt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xg(r,s),Xu(a,o);var c=Xu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Tg(r,f):h==="dangerouslySetInnerHTML"?wg(r,f):h==="children"?Ho(r,f):Th(r,h,f,c)}switch(a){case"input":Hu(r,s);break;case"textarea":Sg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(S){Tt(t,t.return,S)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Tt(t,t.return,S)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(S){Tt(t,t.return,S)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sf=Ct())),i&4&&Cp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,zn(e,t),$t=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(De=t,h=t.child;h!==null;){for(f=De=h;De!==null;){switch(d=De,p=d.child,d.tag){case 0:case 11:case 14:case 15:Fo(4,d,d.return);break;case 1:bs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Tt(i,n,S)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){Pp(f);continue}}p!==null?(p.return=d,De=p):Pp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Eg("display",o))}catch(S){Tt(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Tt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&Cp(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K_(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=Ap(t);Md(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ap(t);Sd(t,a,o);break;default:throw Error(me(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){De=t,J_(t)}function J_(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=La;var c=$t;if(La=o,($t=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Dp(r):l!==null?(l.return=o,De=l):Dp(r);for(;s!==null;)De=s,J_(s),s=s.sibling;De=r,La=a,$t=c}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Rp(t)}}function Rp(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}$t||e.flags&512&&xd(e)}catch(d){Tt(e,e.return,d)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function Pp(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function Dp(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{xd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var lx=Math.ceil,ql=Di.ReactCurrentDispatcher,nf=Di.ReactCurrentOwner,Ln=Di.ReactCurrentBatchConfig,tt=0,zt=null,Pt=null,Ht=0,_n=0,As=hr(0),Nt=0,na=null,Fr=0,_c=0,rf=0,ko=null,an=null,sf=0,js=1/0,pi=null,Kl=!1,wd=null,tr=null,Na=!1,Yi=null,Zl=0,Oo=0,Ed=null,xl=-1,Sl=0;function en(){return tt&6?Ct():xl!==-1?xl:xl=Ct()}function nr(t){return t.mode&1?tt&2&&Ht!==0?Ht&-Ht:Wy.transition!==null?(Sl===0&&(Sl=kg()),Sl):(t=st,t!==0||(t=window.event,t=t===void 0?16:jg(t.type)),t):1}function Yn(t,e,n,i){if(50<Oo)throw Oo=0,Ed=null,Error(me(185));sa(t,n,i),(!(tt&2)||t!==zt)&&(t===zt&&(!(tt&2)&&(_c|=n),Nt===4&&Wi(t,Ht)),dn(t,i),n===1&&tt===0&&!(e.mode&1)&&(js=Ct()+500,fc&&fr()))}function dn(t,e){var n=t.callbackNode;Wv(t,e);var i=Il(t,t===zt?Ht:0);if(i===0)n!==null&&Bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bf(n),e===1)t.tag===0?jy(Lp.bind(null,t)):c_(Lp.bind(null,t)),By(function(){!(tt&6)&&fr()}),n=null;else{switch(Og(i)){case 1:n=Ph;break;case 4:n=Ug;break;case 16:n=Nl;break;case 536870912:n=Fg;break;default:n=Nl}n=a0(n,e0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e0(t,e){if(xl=-1,Sl=0,tt&6)throw Error(me(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Il(t,t===zt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=tt;tt|=2;var s=n0();(zt!==t||Ht!==e)&&(pi=null,js=Ct()+500,Dr(t,e));do try{dx();break}catch(a){t0(t,a)}while(!0);Gh(),ql.current=s,tt=r,Pt!==null?e=0:(zt=null,Ht=0,e=Nt)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=na,Dr(t,0),Wi(t,i),dn(t,Ct()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!cx(r)&&(e=Ql(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=na,Dr(t,0),Wi(t,i),dn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Mr(t,an,pi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=sf+500-Ct(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Mr.bind(null,t,an,pi),e);break}Mr(t,an,pi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lx(i/1960))-i,10<i){t.timeoutHandle=sd(Mr.bind(null,t,an,pi),i);break}Mr(t,an,pi);break;case 5:Mr(t,an,pi);break;default:throw Error(me(329))}}}return dn(t,Ct()),t.callbackNode===n?e0.bind(null,t):null}function Td(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=an,an=n,e!==null&&bd(e)),t}function bd(t){an===null?an=t:an.push.apply(an,t)}function cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~rf,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Lp(t){if(tt&6)throw Error(me(327));Is();var e=Il(t,0);if(!(e&1))return dn(t,Ct()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=na,Dr(t,0),Wi(t,e),dn(t,Ct()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,an,pi),dn(t,Ct()),null}function of(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(js=Ct()+500,fc&&fr())}}function kr(t){Yi!==null&&Yi.tag===0&&!(tt&6)&&Is();var e=tt;tt|=1;var n=Ln.transition,i=st;try{if(Ln.transition=null,st=1,t)return t()}finally{st=i,Ln.transition=n,tt=e,!(tt&6)&&fr()}}function af(){_n=As.current,_t(As)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zy(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Vs(),_t(cn),_t(Yt),qh();break;case 5:Yh(i);break;case 4:Vs();break;case 13:_t(St);break;case 19:_t(St);break;case 10:jh(i.type._context);break;case 22:case 23:af()}n=n.return}if(zt=t,Pt=t=ir(t.current,null),Ht=_n=e,Nt=0,na=null,rf=_c=Fr=0,an=ko=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function t0(t,e){do{var n=Pt;try{if(Gh(),_l.current=Yl,$l){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Ur=0,Ot=Lt=Mt=null,Uo=!1,Jo=0,nf.current=null,n===null||n.return===null){Nt=1,na=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=yp(o);if(p!==null){p.flags&=-257,xp(p,o,a,s,e),p.mode&1&&vp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){vp(s,c,e),lf();break e}l=Error(me(426))}}else if(yt&&a.mode&1){var g=yp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),xp(g,o,a,s,e),Hh(Gs(l,a));break e}}s=l=Gs(l,a),Nt!==4&&(Nt=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=O_(s,l,e);hp(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=z_(s,a,e);hp(s,y);break e}}s=s.return}while(s!==null)}r0(n)}catch(D){e=D,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function n0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function lf(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),zt===null||!(Fr&268435455)&&!(_c&268435455)||Wi(zt,Ht)}function Ql(t,e){var n=tt;tt|=2;var i=n0();(zt!==t||Ht!==e)&&(pi=null,Dr(t,e));do try{ux();break}catch(r){t0(t,r)}while(!0);if(Gh(),tt=n,ql.current=i,Pt!==null)throw Error(me(261));return zt=null,Ht=0,Nt}function ux(){for(;Pt!==null;)i0(Pt)}function dx(){for(;Pt!==null&&!Fv();)i0(Pt)}function i0(t){var e=o0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?r0(t):Pt=e,nf.current=null}function r0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rx(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=ix(n,e,_n),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Mr(t,e,n){var i=st,r=Ln.transition;try{Ln.transition=null,st=1,hx(t,e,n,i)}finally{Ln.transition=r,st=i}return null}function hx(t,e,n,i){do Is();while(Yi!==null);if(tt&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xv(t,s),t===zt&&(Pt=zt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,a0(Nl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=st;st=1;var a=tt;tt|=4,nf.current=null,ox(t,n),Q_(n,t),Ly(id),Ul=!!nd,id=nd=null,t.current=n,ax(n),kv(),tt=a,st=o,Ln.transition=s}else t.current=n;if(Na&&(Na=!1,Yi=t,Zl=r),s=t.pendingLanes,s===0&&(tr=null),Bv(n.stateNode),dn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=wd,wd=null,t;return Zl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Ed?Oo++:(Oo=0,Ed=t):Oo=0,fr(),null}function Is(){if(Yi!==null){var t=Og(Zl),e=Ln.transition,n=st;try{if(Ln.transition=null,st=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Zl=0,tt&6)throw Error(me(331));var r=tt;for(tt|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var h=De;switch(h.tag){case 0:case 11:case 15:Fo(8,h,s)}var f=h.child;if(f!==null)f.return=h,De=f;else for(;De!==null;){h=De;var d=h.sibling,p=h.return;if(q_(h),h===c){De=null;break}if(d!==null){d.return=p,De=d;break}De=p}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var _=t.current;for(De=_;De!==null;){o=De;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,De=x;else e:for(o=_;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(D){Tt(a,a.return,D)}if(a===o){De=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,De=y;break e}De=a.return}}if(tt=r,fr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{st=n,Ln.transition=e}}return!1}function Np(t,e,n){e=Gs(n,e),e=O_(t,e,1),t=er(t,e,1),e=en(),t!==null&&(sa(t,1,e),dn(t,e))}function Tt(t,e,n){if(t.tag===3)Np(t,t,n);else for(;e!==null;){if(e.tag===3){Np(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Gs(n,t),t=z_(e,t,1),e=er(e,t,1),t=en(),e!==null&&(sa(e,1,t),dn(e,t));break}}e=e.return}}function fx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Ht&n)===n&&(Nt===4||Nt===3&&(Ht&130023424)===Ht&&500>Ct()-sf?Dr(t,0):rf|=n),dn(t,e)}function s0(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=en();t=Ci(t,e),t!==null&&(sa(t,e,n),dn(t,n))}function px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s0(t,n)}function mx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),s0(t,n)}var o0;o0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,nx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,yt&&e.flags&1048576&&u_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=zs(e,Yt.current);Ns(e,n),r=Zh(null,e,i,t,r,n);var s=Qh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xh(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&zh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_x(i),t=Gn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Gn(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),wp(t,e,i,r,n);case 3:e:{if(G_(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,g_(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(me(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(me(424)),e),e=Ep(t,e,i,n,r);break e}else for(vn=Ji(e.stateNode.containerInfo.firstChild),yn=e,yt=!0,Wn=null,n=p_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ri(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,rd(i,r)?o=null:s!==null&&rd(i,s)&&(e.flags|=32),V_(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&cd(e),null;case 13:return j_(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Sp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Gl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!cn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=In(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Mp(t,e,i,r,n);case 15:return B_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yl(t,e),e.tag=1,un(i)?(t=!0,Bl(e)):t=!1,Ns(e,n),k_(e,i,r),hd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return W_(t,e,n);case 22:return H_(t,e,n)}throw Error(me(156,e.tag))};function a0(t,e){return Ig(t,e)}function gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new gx(t,e,n,i)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _x(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Ch)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Lr(n.children,r,s,e);case bh:o=8,r|=8;break;case Fu:return t=Dn(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case ku:return t=Dn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case Ou:return t=Dn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case _g:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:o=10;break e;case gg:o=9;break e;case Ah:o=11;break e;case Ch:o=14;break e;case Vi:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=_g,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,i,r,s,o,a,l){return t=new vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),t}function yx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function l0(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(un(n))return l_(t,n,e)}return e}function c0(t,e,n,i,r,s,o,a,l){return t=uf(n,i,!0,t,r,s,o,a,l),t.context=l0(null),n=t.current,i=en(),r=nr(n),s=wi(i,r),s.callback=e!=null?e:null,er(n,s,r),t.current.lanes=r,sa(t,r,i),dn(t,i),t}function yc(t,e,n,i){var r=e.current,s=en(),o=nr(r);return n=l0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Yn(t,r,o,s),gl(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function xx(){return null}var u0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}xc.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));yc(t,e,null,null)};xc.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){yc(null,t,null,null)}),e[Ai]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&Gg(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Sx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=c0(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=o,t[Ai]=o.current,Yo(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=uf(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Ai]=l.current,Yo(t.nodeType===8?t.parentNode:t),kr(function(){yc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}yc(e,o,t,r)}else o=Sx(n,e,t,r,i);return Jl(o)}zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Dh(e,n|1),dn(e,Ct()),!(tt&6)&&(js=Ct()+500,fr()))}break;case 13:kr(function(){var i=Ci(t,1);if(i!==null){var r=en();Yn(i,t,1,r)}}),df(t,1)}};Lh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=en();Yn(e,t,134217728,n)}df(t,134217728)}};Bg=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=en();Yn(n,t,e,i)}df(t,e)}};Hg=function(){return st};Vg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Yu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(me(90));yg(i),Hu(i,r)}}}break;case"textarea":Sg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};Cg=of;Rg=kr;var Mx={usingClientEntryPoint:!1,Events:[aa,Ss,hc,bg,Ag,of]},po={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wx={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{lc=Ia.inject(wx),ri=Ia}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(me(200));return yx(t,e,null,n)};Sn.createRoot=function(t,e){if(!ff(t))throw Error(me(299));var n=!1,i="",r=u0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Yo(t.nodeType===8?t.parentNode:t),new hf(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return kr(t)};Sn.hydrate=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=u0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ai]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};Sn.render=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(me(40));return t._reactRootContainer?(kr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Sn.unstable_batchedUpdates=of;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Mc(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),dg.exports=Sn;var Ex=dg.exports,Fp=Ex;Iu.createRoot=Fp.createRoot,Iu.hydrateRoot=Fp.hydrateRoot;function Tx({runs:t,selectedId:e,onSelect:n,onRefresh:i,onDelete:r,isLoading:s}){return m.jsxs("aside",{className:"sidebar",children:[m.jsxs("div",{className:"header",children:[m.jsx("h2",{children:"Simulation Runs"}),m.jsx("button",{className:"button",onClick:i,disabled:s,children:"Refresh"})]}),m.jsxs("div",{style:{marginTop:"1rem"},children:[t.length===0&&m.jsx("p",{children:"No runs yet. Create one from the backend."}),t.map(o=>{var a;return m.jsxs("div",{className:`run-item ${e===o.id?"active":""} run-item--with-icon`,onClick:()=>n(o.id),children:[m.jsxs("div",{className:"run-item__content",children:[m.jsx("strong",{children:(a=o.name)!=null?a:"Untitled Run"}),m.jsxs("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:["Status: ",o.status]}),m.jsxs("div",{style:{fontSize:"0.75rem",marginTop:"0.4rem",color:"#64748b"},children:["Updated: ",new Date(o.updated_at).toLocaleString()]})]}),r&&m.jsx("button",{className:"icon-btn",title:"Delete run","aria-label":"Delete run",onClick:l=>{l.stopPropagation(),confirm("Delete this run? This cannot be undone.")&&r(o.id)},children:"🗑"})]},o.id)})]})]})}function bx({apiBase:t,runId:e}){const[n,i]=ce.useState(null),[r,s]=ce.useState(null),[o,a]=ce.useState(null),[l,c]=ce.useState(!1),[h,f]=ce.useState(null),[d,p]=ce.useState(!0),[v,S]=ce.useState(!0),[g,u]=ce.useState(500);ce.useState(null)[0];const[_,x]=ce.useState(null);return ce.useEffect(()=>{if(!e){i(null),s(null);return}const y=new AbortController,D=R=>{const w=t.endsWith("/")?t:t+"/",M=R.replace(/^\/+/,"");return new URL(M,w).toString()},b=async()=>{var R;try{const w=D(`/runs/${e}/ped`),M=D(`/runs/${e}/energy_series?limit=${encodeURIComponent(g)}`),[P,G]=await Promise.all([fetch(w,{signal:y.signal}),fetch(M,{signal:y.signal})]);if(!P.ok){const Y=await P.text();a(`PED fetch failed (${P.status}): ${Y}`),i(null),s(null);return}if(!G.ok){const Y=await G.text();a(`Series fetch failed (${G.status}): ${Y}`),i(null),s(null);return}const V=await P.json(),z=await G.json();if(typeof V!="object"||V===null||typeof V.total_gen_mwh!="number"){a("PED payload invalid"),i(null),s(null);return}if(a(null),i(V),s(z),l){const Y=D(`/runs/${e}/optimize`),X=await fetch(Y,{signal:y.signal});X.ok?f(await X.json()):f(null)}else f(null)}catch(w){a((R=w==null?void 0:w.message)!=null?R:String(w)),i(null),s(null)}};b();const C=setInterval(b,3e3);return()=>{clearInterval(C),y.abort()}},[t,e,l,g]),m.jsxs("div",{className:"metric-card",style:{gridColumn:"1 / -1"},children:[m.jsx("div",{className:"metric-label",children:"PED (Positive Energy District)"}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:8,alignItems:"center",flexWrap:"wrap"},children:[m.jsx("button",{className:"button",onClick:()=>c(y=>!y),"aria-pressed":l,"aria-label":"Toggle dispatch overlays",children:l?"Hide Dispatch":"Show Dispatch"}),m.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[m.jsx("input",{type:"checkbox",checked:d,onChange:y=>p(y.target.checked),"aria-label":"Toggle generation series"})," Gen"]}),m.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[m.jsx("input",{type:"checkbox",checked:v,onChange:y=>S(y.target.checked),"aria-label":"Toggle load series"})," Load"]}),m.jsxs("label",{title:"Timeframe",style:{display:"inline-flex",alignItems:"center",gap:6},children:["Range",m.jsxs("select",{value:g,onChange:y=>u(Number(y.target.value)),children:[m.jsx("option",{value:100,children:"100"}),m.jsx("option",{value:500,children:"500"}),m.jsx("option",{value:2e3,children:"2000"}),m.jsx("option",{value:1e4,children:"10000"})]})]}),m.jsx("button",{className:"button",onClick:()=>Ax(r,h,n),"aria-label":"Export CSV",children:"Export CSV"})]}),o&&m.jsx("div",{style:{color:"#fca5a5",marginBottom:"0.5rem"},children:o}),n?m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:[m.jsxs("div",{children:[m.jsx("div",{className:"metric-label",children:"Total Gen (MWh)"}),m.jsx("div",{className:"metric-value",children:Number(n.total_gen_mwh).toFixed(1)})]}),m.jsxs("div",{children:[m.jsx("div",{className:"metric-label",children:"Total Demand (MWh)"}),m.jsx("div",{className:"metric-value",children:Number(n.total_demand_mwh).toFixed(1)})]}),m.jsxs("div",{children:[m.jsx("div",{className:"metric-label",children:"Balance (MWh)"}),m.jsx("div",{className:"metric-value",children:Number(n.ped_absolute_mwh).toFixed(1)})]}),m.jsxs("div",{children:[m.jsx("div",{className:"metric-label",children:"PED Ratio"}),m.jsx("div",{className:"metric-value",children:Number(n.ped_ratio).toFixed(3)})]})]}):m.jsx("div",{children:"—"}),r&&m.jsxs("div",{style:{position:"relative",marginTop:"0.75rem"},children:[m.jsxs("div",{style:{position:"absolute",top:0,right:0,background:"rgba(15,23,42,0.85)",border:"1px solid rgba(148,163,184,0.3)",borderRadius:8,padding:"6px 8px",display:"flex",gap:"0.6rem",alignItems:"center",flexWrap:"wrap",zIndex:2},children:[m.jsx(Kr,{color:"#22c55e",label:"Generation"}),m.jsx(Kr,{color:"#ef4444",label:"Load"}),l&&m.jsxs(m.Fragment,{children:[m.jsx(Kr,{color:"#84cc16",label:"PV→Load"}),m.jsx(Kr,{color:"#22d3ee",label:"PV→Export"}),m.jsx(Kr,{color:"#f59e0b",label:"Battery→Load"}),m.jsx(Kr,{color:"#a78bfa",label:"Grid Import"})]})]}),m.jsx("svg",{ref:y=>{},width:"100%",height:"180",viewBox:"0 0 640 180",preserveAspectRatio:"none",onMouseMove:y=>{var D,b;try{const R=y.currentTarget.getBoundingClientRect(),w=y.clientX-R.left-40,M=r.gen_mw,P=r.load_mw,G=Math.max(M.length,P.length),V=560/Math.max(1,G-1),z=Math.max(0,Math.min(G-1,Math.round(w/(R.width-80)*(560/560)))),Y=(D=M[z])!=null?D:0,X=(b=P[z])!=null?b:0;let ie=[`Gen: ${Y.toFixed(2)} MW`,`Load: ${X.toFixed(2)} MW`];if(h&&h.series_mw){const L=h.series_mw,J=re=>L[re]&&L[re][z]!==void 0?L[re][z]:0;ie.push(`PV→Load: ${J("pv_to_load_mw").toFixed(2)} MW`),ie.push(`PV→Export: ${J("pv_export_mw").toFixed(2)} MW`),ie.push(`Batt→Load: ${J("batt_to_load_mw").toFixed(2)} MW`),ie.push(`Grid Import: ${J("grid_import_mw").toFixed(2)} MW`)}x({visible:!0,x:y.clientX-R.left+10,y:y.clientY-R.top-10,idx:z,text:ie.join(`
`)})}catch{}},onMouseLeave:()=>x(null),children:(()=>{const y=r.gen_mw,D=r.load_mw,b=Math.max(y.length,D.length);if(b===0)return null;const C=Math.max(1,...d?y:[0],...v?D:[0]),R=560/Math.max(1,b-1),w=P=>150-P/C*120,M=P=>P.map((G,V)=>`${V===0?"M":"L"} ${40+V*R} ${w(G)}`).join(" ");return m.jsxs(m.Fragment,{children:[m.jsx("line",{x1:40,y1:30,x2:40,y2:150,stroke:"#334155"}),m.jsx("line",{x1:40,y1:150,x2:600,y2:150,stroke:"#334155"}),m.jsx("text",{x:8,y:32,fill:"#94a3b8",fontSize:"10",children:"MW"}),m.jsx("text",{x:580,y:170,fill:"#94a3b8",fontSize:"10",children:"steps"}),d&&m.jsx("path",{d:M(y),stroke:"#22c55e",fill:"none",strokeWidth:"2"}),v&&m.jsx("path",{d:M(D),stroke:"#ef4444",fill:"none",strokeWidth:"2"}),h&&h.series_mw&&(()=>{const P=h.series_mw,G=["pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"],V={pv_to_load_mw:"#84cc16",pv_export_mw:"#22d3ee",batt_to_load_mw:"#f59e0b",grid_import_mw:"#a78bfa"},z=Math.max(C,...G.flatMap(ie=>P[ie]||[0])),Y=ie=>150-ie/z*120,X=ie=>ie.map((L,J)=>`${J===0?"M":"L"} ${40+J*R} ${Y(L)}`).join(" ");return m.jsx(m.Fragment,{children:G.map(ie=>P[ie]&&m.jsx("path",{d:X(P[ie]),stroke:V[ie],fill:"none",strokeWidth:"1.5"},ie))})})()]})})()}),_&&_.visible&&m.jsx("div",{style:{position:"absolute",left:_.x,top:_.y,pointerEvents:"none",background:"rgba(15,23,42,0.9)",color:"#e5e7eb",border:"1px solid rgba(148,163,184,0.3)",padding:"6px 8px",borderRadius:6,whiteSpace:"pre"},children:_.text})]})]})}function Kr({color:t,label:e}){return m.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[m.jsx("span",{style:{width:12,height:12,background:t,borderRadius:3,display:"inline-block"}}),m.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.85rem"},children:e})]})}function Ax(t,e,n){var i,r,s,o,a,l,c,h,f,d;try{const p=[],v=["step","gen_mw","load_mw","pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"];p.push(v.join(","));const S=Math.max(((i=t==null?void 0:t.gen_mw)==null?void 0:i.length)||0,((r=t==null?void 0:t.load_mw)==null?void 0:r.length)||0),g=y=>{var D;return((D=e==null?void 0:e.series_mw)==null?void 0:D[y])||[]};for(let y=0;y<S;y++){const D=[String(((t==null?void 0:t.start)||0)+y),String((o=(s=t==null?void 0:t.gen_mw)==null?void 0:s[y])!=null?o:""),String((l=(a=t==null?void 0:t.load_mw)==null?void 0:a[y])!=null?l:""),String((c=g("pv_to_load_mw")[y])!=null?c:""),String((h=g("pv_export_mw")[y])!=null?h:""),String((f=g("batt_to_load_mw")[y])!=null?f:""),String((d=g("grid_import_mw")[y])!=null?d:"")];p.push(D.join(","))}n&&(p.push(""),Object.entries(n).forEach(([y,D])=>p.push(`# ${y},${String(D)}`)));const u=new Blob([p.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(u),x=document.createElement("a");x.href=_,x.download="digital_twin_series.csv",x.click(),URL.revokeObjectURL(_)}catch{}}const Ua={owned_wind_capacity_mw:270,owned_solar_capacity_mw:100,owned_hydro_capacity_mw:40,owned_battery_capacity_mwh:10,physical_allocation:.88,financial_allocation:.12,investment_freq:12};function Cx({apiBase:t,onRun:e}){var re,he,Re,He,ne,le;const[n,i]=ce.useState([]),[r,s]=ce.useState(!1),[o,a]=ce.useState("My Scenario"),[l,c]=ce.useState(""),[h,f]=ce.useState(""),[d,p]=ce.useState(Ua),[v,S]=ce.useState(null),[g,u]=ce.useState(!0),[_,x]=ce.useState(null),[y,D]=ce.useState(null),[b,C]=ce.useState([]),[R,w]=ce.useState("list"),M=k=>{const ee=t.endsWith("/")?t:t+"/",ae=k.replace(/^\/+/,"");return new URL(ae,ee).toString()},P=async()=>{s(!0);try{const ee=await(await fetch(M("/scenarios"))).json();i(ee)}catch{}s(!1)};ce.useEffect(()=>{P()},[]);const G=async()=>{const k={name:o,description:l,details:h,config_overrides:d};(await fetch(M("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).ok&&await P()},V=async k=>{var ae,ve,_e;D(null),x(k);const ee=n.find(we=>we.id===k);ee&&(S(ee.id),a(ee.name),c((ae=ee.description)!=null?ae:""),f((ve=ee.details)!=null?ve:""),p({...Ua,...ee.config_overrides||{}}));try{const we=await fetch(M(`/scenarios/${k}/run`),{method:"POST"});if(we.ok){const Le=await we.json();e(Le.id)}else{const Le=await we.text();D(`Run failed (${we.status}): ${Le}`)}}catch(we){D((_e=we==null?void 0:we.message)!=null?_e:String(we))}finally{x(null)}},z=async k=>{if(!confirm("Delete this scenario? This cannot be undone."))return;(await fetch(M(`/scenarios/${k}`),{method:"DELETE"})).ok&&await P()},Y=(k,ee)=>p({...d,[k]:ee}),X=async()=>{try{const k=await fetch(M("/runs"));if(!k.ok)return;const ae=(await k.json()).slice(0,8),ve=[];for(const _e of ae)try{const we=await fetch(M(`/runs/${_e.id}/ped`));if(!we.ok){ve.push({name:_e.name,status:_e.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"});continue}const Le=await we.json();ve.push({name:_e.name,status:_e.status,ped_ratio:Number(Le.ped_ratio).toFixed(3),total_gen_mwh:Number(Le.total_gen_mwh).toFixed(1),total_demand_mwh:Number(Le.total_demand_mwh).toFixed(1)})}catch{ve.push({name:_e.name,status:_e.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"})}C(ve)}catch{}};ce.useEffect(()=>{X()},[]);const ie=["Scenario 1: Baseline","Scenario 2: High PV Deployment","Scenario 3: High PV + Battery (4h)","Scenario 4: High PV + Large Battery","Scenario 5: DSM (Flexible Demand)"],L=k=>ie.includes(k),J=[...n].sort((k,ee)=>{var _e,we;const ae=L(k.name),ve=L(ee.name);if(ae&&ve){const Le=parseInt(((_e=k.name.match(/Scenario (\d)/))==null?void 0:_e[1])||"0"),ze=parseInt(((we=ee.name.match(/Scenario (\d)/))==null?void 0:we[1])||"0");return Le-ze}return ae?-1:ve?1:0});return m.jsxs("div",{className:"scenario-container",children:[m.jsxs("div",{className:"scenario-mobile-tabs",children:[m.jsx("button",{className:R==="list"?"active":"",onClick:()=>w("list"),children:"📋 List"}),m.jsx("button",{className:R==="edit"?"active":"",onClick:()=>w("edit"),children:"✏️ Edit"}),m.jsx("button",{className:R==="compare"?"active":"",onClick:()=>w("compare"),children:"📊 Compare"})]}),m.jsxs("div",{className:"scenario-grid",children:[m.jsxs("div",{className:`sidebar scenario-sidebar ${R==="list"?"mobile-visible":""}`,children:[m.jsxs("div",{className:"header",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[m.jsx("h2",{style:{flex:1},children:"Scenarios"}),m.jsx("button",{className:"button",onClick:()=>{S(null),a("My Scenario"),c(""),f(""),p({...Ua}),u(!0),w("edit")},children:"New"}),m.jsx("button",{className:"button",onClick:P,disabled:r,children:"Refresh"})]}),m.jsx("div",{style:{marginTop:"1rem"},children:J.map(k=>{var ae;const ee=L(k.name);return m.jsxs("div",{className:`run-item run-item--with-icon ${v===k.id?"active":""}`,style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:ee?"linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)":void 0,borderLeft:ee?"3px solid #3b82f6":void 0},onClick:()=>{var ve,_e;S(k.id),a(k.name),c((ve=k.description)!=null?ve:""),f((_e=k.details)!=null?_e:""),p({...Ua,...k.config_overrides||{}}),w("edit")},children:[m.jsxs("div",{style:{flex:1},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("strong",{children:k.name}),ee&&m.jsx("span",{style:{fontSize:9,padding:"2px 5px",background:"#3b82f6",borderRadius:3,color:"#fff"},children:"PAPER"})]}),m.jsx("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:(ae=k.description)!=null?ae:""}),k.details&&m.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b",marginTop:4},children:[String(k.details).slice(0,120),String(k.details).length>120?"…":""]})]}),m.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:m.jsx("button",{className:"button",onClick:()=>V(k.id),"aria-busy":_===k.id,"aria-label":`Run ${k.name}`,children:_===k.id?"Running…":"Run"})}),!ee&&m.jsx("button",{className:"icon-btn",title:"Delete scenario","aria-label":"Delete scenario",onClick:ve=>{ve.stopPropagation(),z(k.id)},children:"🗑"})]},k.id)})})]}),m.jsxs("div",{className:`scenario-edit-panel ${R==="edit"?"mobile-visible":""}`,children:[m.jsx("div",{className:"header",children:m.jsx("h2",{children:"Create / Edit Scenario"})}),y&&m.jsx("div",{className:"metric-card",style:{color:"#fecaca"},children:y}),m.jsxs("div",{className:"metric-card",children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[m.jsxs("label",{children:["Name",m.jsx("input",{style:{width:"100%"},value:o,onChange:k=>a(k.target.value)})]}),m.jsxs("label",{children:["Description",m.jsx("input",{style:{width:"100%"},value:l,onChange:k=>c(k.target.value)})]}),m.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Details",m.jsx("textarea",{style:{width:"100%",minHeight:90},value:h,onChange:k=>f(k.target.value)})]}),m.jsxs("label",{children:["Wind (MW)",m.jsx("input",{type:"number",value:d.owned_wind_capacity_mw,onChange:k=>Y("owned_wind_capacity_mw",Number(k.target.value))})]}),m.jsxs("label",{children:["Solar (MW)",m.jsx("input",{type:"number",value:d.owned_solar_capacity_mw,onChange:k=>Y("owned_solar_capacity_mw",Number(k.target.value))})]}),m.jsxs("label",{children:["Hydro (MW)",m.jsx("input",{type:"number",value:d.owned_hydro_capacity_mw,onChange:k=>Y("owned_hydro_capacity_mw",Number(k.target.value))})]}),m.jsxs("label",{children:["Battery (MWh)",m.jsx("input",{type:"number",value:d.owned_battery_capacity_mwh,onChange:k=>Y("owned_battery_capacity_mwh",Number(k.target.value))})]}),m.jsxs("label",{children:["Physical Allocation",m.jsx("input",{type:"number",step:"0.01",value:d.physical_allocation,onChange:k=>Y("physical_allocation",Number(k.target.value))})]}),m.jsxs("label",{children:["Financial Allocation",m.jsx("input",{type:"number",step:"0.01",value:d.financial_allocation,onChange:k=>Y("financial_allocation",Number(k.target.value))})]}),m.jsxs("label",{children:["Investment Freq (steps)",m.jsx("input",{type:"number",value:d.investment_freq,onChange:k=>Y("investment_freq",Number(k.target.value))})]})]}),m.jsx("div",{style:{marginTop:"0.75rem",display:"flex",gap:"0.5rem",alignItems:"center"},children:v&&L(((re=n.find(k=>k.id===v))==null?void 0:re.name)||"")?m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"button",onClick:async()=>{const ee=`My ${o.replace(/^Scenario \d+:\s*/,"")}`,ae={name:ee,description:l,details:h,config_overrides:d},ve=await fetch(M("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae)});if(ve.ok){const _e=await ve.json();await P(),S(_e.id),a(ee),alert("New user scenario created!")}},children:"Save As New"}),m.jsx("span",{style:{fontSize:11,color:"#94a3b8"},children:"Paper scenarios are read-only. Changes apply to this session only."})]}):m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"button",onClick:G,children:"Save Scenario"}),v&&m.jsx("button",{className:"button",onClick:async()=>{const k=M(`/scenarios/${v}`);(await fetch(k,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,description:l,details:h,config_overrides:d})})).ok&&await P()},children:"Save Changes"})]})})]}),m.jsxs("div",{className:"metric-card",style:{whiteSpace:"pre-wrap"},children:[m.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[m.jsx("h3",{style:{margin:0},children:"Guideline: Designing a Scenario for PED"}),m.jsx("button",{className:"button",onClick:()=>u(k=>!k),children:g?"Hide":"Show"})]}),g&&m.jsxs("div",{children:[m.jsx("p",{children:"PED (Positive Energy District) targets annual on‑site renewable generation ≥ annual demand. Tune parameters below; then check Runs → Charts → PED to monitor total generation, total demand, balance and ratio (≥ 1.0 for PED)."}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("b",{children:"Solar (MW)"}),": rooftop PV nameplate. Increasing this primarily raises mid‑day generation. Current: ",String((he=d.owned_solar_capacity_mw)!=null?he:"—")," MW."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Battery (MWh)"}),": storage energy. Shifts PV from mid‑day to evenings; reduces imports and exports; increases self‑consumption. Current: ",String((Re=d.owned_battery_capacity_mwh)!=null?Re:"—")," MWh."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Investment Freq (steps)"}),": decision cadence (lower = more responsive). Use 6 for DSM‑like responsiveness; 12 for baseline. Current: ",String((He=d.investment_freq)!=null?He:"—"),"."]}),m.jsxs("li",{children:[m.jsx("b",{children:"Physical / Financial Allocation"}),": budget split that influences physical assets vs trading. Keep sensible totals (≈1.0). Current: ",String((ne=d.physical_allocation)!=null?ne:"—")," / ",String((le=d.financial_allocation)!=null?le:"—"),"."]})]}),m.jsxs("p",{children:[m.jsx("b",{children:"Suggested recipes"}),":",m.jsx("br",{}),"– Baseline: modest PV, no battery; observe import/export baseline.",m.jsx("br",{}),"– High PV: maximize PV; expect high mid‑day export.",m.jsx("br",{}),"– PV + Battery (4 h): add 0.32–0.64 MWh storage to boost self‑consumption.",m.jsx("br",{}),"– DSM‑like: keep PV+Battery and set investment_freq=6 to react faster."]}),m.jsx("p",{children:"Iterate: create → run → check PED ratio → adjust PV/battery/decisions until balance ≥ 0 and ratio ≥ 1.0. Use multiple saved scenarios to compare results."})]})]}),m.jsxs("div",{className:"metric-card desktop-compare",children:[m.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[m.jsx("h3",{style:{margin:0},children:"Compare Runs"}),m.jsx("button",{className:"button",onClick:X,children:"Refresh"})]}),b.length>0?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginBottom:"1rem",marginTop:"1rem"},children:[m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"PED Ratio"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.filter(k=>k.ped_ratio!=="-").slice(0,5).map((k,ee)=>{const ae=parseFloat(k.ped_ratio),ve=Math.min(ae*100,150);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:k.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsxs("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden",position:"relative"},children:[m.jsx("div",{style:{position:"absolute",left:"66.7%",top:0,bottom:0,width:2,background:"#fbbf24",zIndex:1},title:"PED Target (1.0)"}),m.jsx("div",{style:{height:"100%",width:`${ve/1.5}%`,background:ae>=1?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:4}})]}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:ae>=1?"#22c55e":"#ef4444",minWidth:40},children:ae.toFixed(2)})]})]},ee)})})]}),m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Generation (MWh)"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const k=b.filter(ae=>ae.total_gen_mwh!=="-").slice(0,5),ee=Math.max(...k.map(ae=>parseFloat(ae.total_gen_mwh)),1);return k.map((ae,ve)=>{const _e=parseFloat(ae.total_gen_mwh);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ae.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${_e/ee*100}%`,background:"linear-gradient(90deg, #22c55e, #4ade80)",borderRadius:4}})}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#22c55e",minWidth:50},children:_e.toFixed(0)})]})]},ve)})})()})]}),m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Demand (MWh)"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const k=b.filter(ae=>ae.total_demand_mwh!=="-").slice(0,5),ee=Math.max(...k.map(ae=>parseFloat(ae.total_demand_mwh)),1);return k.map((ae,ve)=>{const _e=parseFloat(ae.total_demand_mwh);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ae.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${_e/ee*100}%`,background:"linear-gradient(90deg, #f97316, #fb923c)",borderRadius:4}})}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#f97316",minWidth:50},children:_e.toFixed(0)})]})]},ve)})})()})]})]}),m.jsx("div",{style:{overflowX:"auto"},children:m.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[m.jsx("thead",{children:m.jsxs("tr",{style:{borderBottom:"1px solid #334155"},children:[m.jsx("th",{style:{textAlign:"left",padding:"8px",color:"#94a3b8"},children:"Run"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"PED"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"Gen"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"Load"})]})}),m.jsx("tbody",{children:b.map((k,ee)=>m.jsxs("tr",{style:{borderBottom:"1px solid #1e293b"},children:[m.jsx("td",{style:{padding:"8px",fontSize:11},children:k.name}),m.jsx("td",{style:{padding:"8px",textAlign:"right",fontWeight:600,color:k.ped_ratio!=="-"&&parseFloat(k.ped_ratio)>=1?"#22c55e":"#ef4444"},children:k.ped_ratio}),m.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#22c55e"},children:k.total_gen_mwh}),m.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#f97316"},children:k.total_demand_mwh})]},ee))})]})})]}):m.jsx("div",{style:{textAlign:"center",padding:"1rem",color:"#64748b"},children:"No runs to compare."})]})]}),m.jsxs("div",{className:`scenario-compare-panel ${R==="compare"?"mobile-visible":""}`,children:[m.jsxs("div",{className:"header",style:{marginBottom:"1rem"},children:[m.jsx("h2",{children:"Compare Runs"}),m.jsx("button",{className:"button",onClick:X,children:"Refresh"})]}),b.length>0?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"1rem"},children:[m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"PED Ratio"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.filter(k=>k.ped_ratio!=="-").slice(0,5).map((k,ee)=>{const ae=parseFloat(k.ped_ratio),ve=Math.min(ae*100,150);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2},children:k.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsxs("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden",position:"relative"},children:[m.jsx("div",{style:{position:"absolute",left:"66.7%",top:0,bottom:0,width:2,background:"#fbbf24",zIndex:1}}),m.jsx("div",{style:{height:"100%",width:`${ve/1.5}%`,background:ae>=1?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:4}})]}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:ae>=1?"#22c55e":"#ef4444",minWidth:40},children:ae.toFixed(2)})]})]},ee)})})]}),m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Generation (MWh)"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const k=b.filter(ae=>ae.total_gen_mwh!=="-").slice(0,5),ee=Math.max(...k.map(ae=>parseFloat(ae.total_gen_mwh)),1);return k.map((ae,ve)=>{const _e=parseFloat(ae.total_gen_mwh);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2},children:ae.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${_e/ee*100}%`,background:"linear-gradient(90deg, #22c55e, #4ade80)",borderRadius:4}})}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#22c55e",minWidth:50},children:_e.toFixed(0)})]})]},ve)})})()})]}),m.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[m.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Demand (MWh)"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const k=b.filter(ae=>ae.total_demand_mwh!=="-").slice(0,5),ee=Math.max(...k.map(ae=>parseFloat(ae.total_demand_mwh)),1);return k.map((ae,ve)=>{const _e=parseFloat(ae.total_demand_mwh);return m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2},children:ae.name}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${_e/ee*100}%`,background:"linear-gradient(90deg, #f97316, #fb923c)",borderRadius:4}})}),m.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#f97316",minWidth:50},children:_e.toFixed(0)})]})]},ve)})})()})]})]}),m.jsx("div",{style:{overflowX:"auto"},children:m.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[m.jsx("thead",{children:m.jsxs("tr",{style:{borderBottom:"1px solid #334155"},children:[m.jsx("th",{style:{textAlign:"left",padding:"8px",color:"#94a3b8"},children:"Run"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"PED"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"Gen"}),m.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8"},children:"Load"})]})}),m.jsx("tbody",{children:b.map((k,ee)=>m.jsxs("tr",{style:{borderBottom:"1px solid #1e293b"},children:[m.jsx("td",{style:{padding:"8px",fontSize:11},children:k.name}),m.jsx("td",{style:{padding:"8px",textAlign:"right",fontWeight:600,color:k.ped_ratio!=="-"&&parseFloat(k.ped_ratio)>=1?"#22c55e":"#ef4444"},children:k.ped_ratio}),m.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#22c55e"},children:k.total_gen_mwh}),m.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#f97316"},children:k.total_demand_mwh})]},ee))})]})})]}):m.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No runs to compare. Run some scenarios first!"})]})]})]})}const ms={smart_building:{label:"Smart Building",icon:"🏢",color:"#6366f1",defaultParams:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30},description:"Intelligent building with controllable loads"},solar_pv:{label:"Solar PV",icon:"☀️",color:"#eab308",defaultParams:{capacity_kwp:100,tilt_deg:15,azimuth_deg:180,efficiency:.2},description:"Rooftop or ground-mounted photovoltaic panels"},battery_storage:{label:"Battery Storage",icon:"🔋",color:"#22c55e",defaultParams:{capacity_kwh:200,power_kw:50,efficiency:.92,initial_soc:.5},description:"Lithium-ion battery energy storage system"},wind_turbine:{label:"Wind Turbine",icon:"🌬️",color:"#06b6d4",defaultParams:{capacity_kw:500,hub_height_m:80,rotor_diameter_m:50},description:"Small-scale wind power generation"},district_heating:{label:"District Heating",icon:"🔥",color:"#ef4444",defaultParams:{supply_temp_c:70,return_temp_c:40,capacity_kw:500},description:"Connection to district heating network"},smart_grid:{label:"Smart Grid",icon:"⚡",color:"#8b5cf6",defaultParams:{import_limit_kw:1e3,export_limit_kw:500,tariff_type:"dynamic"},description:"Grid connection point with smart metering"},ev_charger:{label:"EV Charger",icon:"🚗",color:"#3b82f6",defaultParams:{num_ports:4,power_per_port_kw:22,v2g_enabled:!0},description:"Electric vehicle charging station with V2G"},heat_pump:{label:"Heat Pump",icon:"❄️",color:"#14b8a6",defaultParams:{capacity_kw:50,cop:3.5,type:"air_source"},description:"Air or ground source heat pump"},chp_unit:{label:"CHP Unit",icon:"⚙️",color:"#f97316",defaultParams:{electrical_kw:100,thermal_kw:150,fuel:"biogas"},description:"Combined heat and power generation"},thermal_storage:{label:"Thermal Storage",icon:"🌡️",color:"#ec4899",defaultParams:{capacity_kwh:500,max_temp_c:95,loss_pct_day:2},description:"Hot water thermal energy storage"},load_center:{label:"Load Center",icon:"📊",color:"#64748b",defaultParams:{base_load_kw:100,peak_load_kw:300,dsm_enabled:!0},description:"Aggregated electrical load point"}},Rx=Object.entries(ms).map(([t,e])=>({type:t,...e}));function Px({onConfigChange:t,initialConfig:e,apiBase:n,onRunSimulation:i}){var Te;const[r,s]=ce.useState((e==null?void 0:e.components)||[]),[o,a]=ce.useState((e==null?void 0:e.connections)||[]),[l,c]=ce.useState(null),[h,f]=ce.useState(null),[d,p]=ce.useState((e==null?void 0:e.name)||"My Digital Twin"),[v,S]=ce.useState(null),[g,u]=ce.useState(()=>{const N=e==null?void 0:e.id;return N&&/^\d+$/.test(N)?N:null}),[_,x]=ce.useState(!1),[y,D]=ce.useState(!1),[b,C]=ce.useState([]),[R,w]=ce.useState(null),[M,P]=ce.useState("canvas"),[G,V]=ce.useState(null),[z,Y]=ce.useState(1),[X,ie]=ce.useState(null),L=ce.useRef(null),J=N=>{(N.ctrlKey||N.metaKey)&&(N.preventDefault(),Y(Q=>Math.max(.5,Math.min(2,Q-N.deltaY*.001))))},re=N=>{if(N.touches.length===2){const Q=Math.hypot(N.touches[0].clientX-N.touches[1].clientX,N.touches[0].clientY-N.touches[1].clientY);ie(Q)}},he=N=>{if(N.touches.length===2&&X){const Q=Math.hypot(N.touches[0].clientX-N.touches[1].clientX,N.touches[0].clientY-N.touches[1].clientY),q=Q/X;Y(se=>Math.max(.5,Math.min(2,se*q))),ie(Q)}},Re=(N,Q)=>{if(Q.touches.length>1)return;const q=Q.touches[0],se=r.find(Ee=>Ee.id===N);if(!se||!L.current)return;const ue=L.current.getBoundingClientRect();V({id:N,offsetX:(q.clientX-ue.left)/z-se.x,offsetY:(q.clientY-ue.top)/z-se.y}),c(N)},He=N=>{if(N.touches.length===2){he(N);return}if(!G||!L.current)return;N.preventDefault();const Q=N.touches[0],q=L.current.getBoundingClientRect(),se=Math.max(0,(Q.clientX-q.left)/z-G.offsetX),ue=Math.max(0,(Q.clientY-q.top)/z-G.offsetY);je(G.id,se,ue)},ne=()=>{V(null),ie(null)},le=N=>{if(!n)return N;try{const Q=n.endsWith("/")?n:n+"/";return new URL(N.replace(/^\/+/,""),Q).toString()}catch{return n.replace(/\/+$/,"")+"/"+N.replace(/^\/+/,"")}};ce.useEffect(()=>{n&&fetch(le("/scenarios")).then(N=>N.json()).then(N=>C(N||[])).catch(()=>{})},[n]),ce.useEffect(()=>{if(!e)try{const N=localStorage.getItem("dt_builder_config");if(N){const Q=JSON.parse(N);s(Q.components||[]),a(Q.connections||[]),p(Q.name||"My Digital Twin")}}catch{}},[e]),ce.useEffect(()=>{const N={id:(e==null?void 0:e.id)||`dt-${Date.now()}`,name:d,components:r,connections:o,created_at:(e==null?void 0:e.created_at)||new Date().toISOString()};try{localStorage.setItem("dt_builder_config",JSON.stringify(N))}catch{}t==null||t(N)},[r,o,d,t,e]);const k=N=>{S(N)},ee=ce.useCallback(N=>{if(N.preventDefault(),!v||!L.current)return;const Q=L.current.getBoundingClientRect(),q=N.clientX-Q.left,se=N.clientY-Q.top,ue=ms[v],Ee={id:`${v}-${Date.now()}`,type:v,name:ue.label,x:q,y:se,params:{...ue.defaultParams}};s(I=>[...I,Ee]),S(null)},[v]),ae=N=>{N.target===L.current&&(c(null),f(null))},ve={solar_pv:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},wind_turbine:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},battery_storage:{targets:["smart_building","smart_grid","ev_charger","load_center","solar_pv","wind_turbine"],type:"electricity"},smart_grid:{targets:["smart_building","battery_storage","ev_charger","load_center","heat_pump"],type:"electricity"},ev_charger:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},load_center:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},heat_pump:{targets:["smart_building","thermal_storage","district_heating"],type:"heat"},district_heating:{targets:["smart_building","thermal_storage","heat_pump"],type:"heat"},thermal_storage:{targets:["smart_building","heat_pump","district_heating"],type:"heat"},chp_unit:{targets:["smart_building","smart_grid","battery_storage","thermal_storage"],type:"both"},smart_building:{targets:["smart_grid","ev_charger","load_center"],type:"electricity"}},_e=(N,Q)=>{const q=r.find(Ee=>Ee.id===N),se=r.find(Ee=>Ee.id===Q);if(!q||!se)return{valid:!1,type:"electricity",error:"Component not found"};const ue=ve[q.type];if(!ue.targets.includes(se.type)){const Ee=ve[se.type];return Ee.targets.includes(q.type)?{valid:!0,type:Ee.type}:{valid:!1,type:"electricity",error:`Cannot connect ${ms[q.type].label} to ${ms[se.type].label}`}}return{valid:!0,type:ue.type}},we=(N,Q)=>{if(Q.stopPropagation(),h&&h!==N){const q=_e(h,N);if(!q.valid){alert(q.error),f(null);return}const se={id:`conn-${Date.now()}`,from:h,to:N,type:q.type,capacity_kw:100};a(ue=>[...ue,se]),f(null)}else c(N)},Le=N=>{f(N),c(null)},ze=N=>{s(Q=>Q.filter(q=>q.id!==N)),a(Q=>Q.filter(q=>q.from!==N&&q.to!==N)),c(null)},U=N=>{a(Q=>Q.filter(q=>q.id!==N))},ft=(N,Q,q)=>{s(se=>se.map(ue=>ue.id===N?{...ue,params:{...ue.params,[Q]:q}}:ue))},je=(N,Q,q)=>{s(se=>se.map(ue=>ue.id===N?{...ue,x:Q,y:q}:ue))},$e=(N,Q)=>{if(!L.current)return;const q=L.current.getBoundingClientRect(),se=Q.clientX-q.left,ue=Q.clientY-q.top;se>0&&ue>0&&je(N,se,ue)},Pe=r.find(N=>N.id===l),Ze=N=>o.some(q=>q.from===N||q.to===N)?"valid":"isolated",A=(()=>{let N=0,Q=0,q=0,se=0,ue=0,Ee=0,I=0,xe=0,te=0,oe=0;r.forEach(ye=>{ye.type==="solar_pv"&&(ue+=Number(ye.params.capacity_kwp||0),N+=Number(ye.params.capacity_kwp||0)),ye.type==="wind_turbine"&&(Ee+=Number(ye.params.capacity_kw||0),N+=Number(ye.params.capacity_kw||0)),ye.type==="chp_unit"&&(I+=Number(ye.params.electrical_kw||0),N+=Number(ye.params.electrical_kw||0)),ye.type==="smart_building"&&(Q+=Number(ye.params.load_kw||0)),ye.type==="load_center"&&(Q+=Number(ye.params.base_load_kw||0)),ye.type==="ev_charger"&&(te+=Number(ye.params.num_ports||0)*Number(ye.params.power_per_port_kw||0)),ye.type==="heat_pump"&&(xe+=Number(ye.params.capacity_kw||0)),ye.type==="battery_storage"&&(oe+=Number(ye.params.capacity_kwh||0),q+=Number(ye.params.capacity_kwh||0)),ye.type==="thermal_storage"&&(se+=Number(ye.params.capacity_kwh||0))});const be=.11,Ae=.25,Ge=.6,vt=.35,xt=(ue*be+Ee*Ae+I*Ge)*8.76,Ye=Q*vt*8.76,fn=Q>0?oe/Q:0,Fn=.3,fa=Math.min(fn*.1,.4),no=Math.min(Fn+fa,.85),kn=Math.min(xt*no,Ye),Wr=xt-kn,Xr=Math.max(Ye-kn,0),pa=Ye>0?kn/Ye:0,$r=Xr*1e3*.3-Wr*1e3*.08,ma=ue*1200,ga=oe*400,Ac=Ee*1500,Cc=ma+ga+Ac,_a=.14,T=Xr*1e3*_a,K=Ye*1e3*_a-T,Z=xt-Ye,H=Ye>0?xt/Ye:0,ge=Z>=0,Ce=ge?0:(Ye-xt)/8.76/be;return{genKw:N,loadKw:Q,storageKwh:q,ratio:H,isPed:ge,annualGenMwh:xt,annualLoadMwh:Ye,netBalance:Z,selfConsumptionRate:no,selfSufficiencyRate:pa,gridImportMwh:Xr,gridExportMwh:Wr,annualGridCost:$r,totalCapex:Cc,annualCO2:T,co2Savings:K,shortfallKw:Ce}})(),E=()=>{confirm("Clear all components?")&&(s([]),a([]),c(null),u(null))},$=async()=>{if(n){x(!0);try{const N={name:d,description:`Digital twin with ${r.length} components`,components:r.map(ue=>({...ue})),connections:o.map(ue=>({...ue}))},Q=le(g?`/digital-twins/${g}`:"/digital-twins"),se=await fetch(Q,{method:g?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(se.ok){const ue=await se.json();u(ue.id),alert("Saved successfully!")}else alert("Save failed: "+await se.text())}catch(N){alert("Save error: "+N.message)}finally{x(!1)}}},F=async()=>{if(!n){alert("API not configured");return}if(r.length===0){alert("Please add components to your digital twin first");return}D(!0);try{let N=g;if(!N){const q={name:d,description:`Digital twin with ${r.length} components`,components:r.map(Ee=>({...Ee})),connections:o.map(Ee=>({...Ee}))},se=await fetch(le("/digital-twins"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)});if(!se.ok){alert("Failed to save: "+await se.text());return}N=(await se.json()).id,u(N)}const Q=await fetch(le(`/digital-twins/${N}/run`),{method:"POST"});if(Q.ok){const q=await Q.json();i==null||i(q.id)}else alert("Run failed: "+await Q.text())}catch(N){alert("Run error: "+((N==null?void 0:N.message)||String(N)))}finally{D(!1)}},W=async()=>{if(!n){alert("API not configured");return}const N=j(),Q={name:`Scenario: ${d}`,description:`Auto-generated from digital twin "${d}"`,details:`Components: ${r.map(se=>se.name).join(", ")}`,config_overrides:N},q=le("/scenarios");console.log("Creating scenario at:",q,Q);try{const se=await fetch(q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)});if(se.ok){const ue=await se.json();w(ue.id);const Ee=await fetch(le("/scenarios"));Ee.ok&&C(await Ee.json()),alert("Scenario created! You can now run it from the Scenarios tab.")}else{const ue=await se.text();alert("Failed to create scenario: "+ue)}}catch(se){console.error("Create scenario error:",se),alert("Error creating scenario: "+((se==null?void 0:se.message)||String(se)))}},j=()=>{let N=0,Q=0,q=0;return r.forEach(se=>{se.type==="solar_pv"&&(N+=Number(se.params.capacity_kwp||0)/1e3),se.type==="battery_storage"&&(Q+=Number(se.params.capacity_kwh||0)/1e3),se.type==="wind_turbine"&&(q+=Number(se.params.capacity_kw||0)/1e3)}),{owned_solar_capacity_mw:N,owned_battery_capacity_mwh:Q,owned_wind_capacity_mw:q,investment_freq:12}},de=()=>{const N={id:`dt-${Date.now()}`,name:d,components:r,connections:o,created_at:new Date().toISOString()},Q=new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),q=URL.createObjectURL(Q),se=document.createElement("a");se.href=q,se.download=`${d.replace(/\s+/g,"_")}.json`,se.click(),URL.revokeObjectURL(q)},fe=N=>{var se;const Q=(se=N.target.files)==null?void 0:se[0];if(!Q)return;const q=new FileReader;q.onload=ue=>{var Ee;try{const I=JSON.parse((Ee=ue.target)==null?void 0:Ee.result);s(I.components||[]),a(I.connections||[]),p(I.name||"Imported Config")}catch{alert("Invalid config file")}},q.readAsText(Q)},Se={scenario_1_baseline:{name:"Scenario 1: Baseline",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Existing Rooftop PV",x:300,y:60,params:{capacity_kwp:30,tilt_deg:15,azimuth_deg:180,efficiency:.18}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:100,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:30},{id:"c2",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c3",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_2_high_pv:{name:"Scenario 2: High PV",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Maximized Rooftop PV",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:171},{id:"c2",from:"pv-1",to:"grid-1",type:"electricity",capacity_kw:100},{id:"c3",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c4",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_3_pv_battery:{name:"Scenario 3: PV + Battery (4h)",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery 4h (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_4_large_battery:{name:"Scenario 4: PV + Large Battery",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Large Battery (640 kWh)",x:450,y:100,params:{capacity_kwh:640,power_kw:160,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:160},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:160},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_5_dsm:{name:"Scenario 5: DSM (Flexible)",components:[{id:"bld-1",type:"smart_building",name:"Smart Office (DSM)",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"load-1",type:"load_center",name:"Flexible Loads",x:150,y:100,params:{base_load_kw:100,peak_load_kw:150,dsm_enabled:!0}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"pv-1",to:"load-1",type:"electricity",capacity_kw:50},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"load-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c6",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c7",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},smart_district:{name:"Smart District PED",components:[{id:"bld-1",type:"smart_building",name:"Residential A",x:150,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"bld-2",type:"smart_building",name:"Residential B",x:350,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"pv-1",type:"solar_pv",name:"Community Solar",x:250,y:50,params:{capacity_kwp:300,tilt_deg:20,azimuth_deg:180,efficiency:.21}},{id:"bat-1",type:"battery_storage",name:"Community Battery",x:250,y:270,params:{capacity_kwh:600,power_kw:150,efficiency:.93,initial_soc:.5}},{id:"hp-1",type:"heat_pump",name:"Central Heat Pump",x:500,y:150,params:{capacity_kw:100,cop:3.8,type:"ground_source"}},{id:"grid-1",type:"smart_grid",name:"Grid PCC",x:50,y:270,params:{import_limit_kw:400,export_limit_kw:300,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bld-2",type:"electricity",capacity_kw:100},{id:"c3",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:150},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"bat-1",to:"bld-2",type:"electricity",capacity_kw:80},{id:"c6",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:300},{id:"c7",from:"hp-1",to:"bld-1",type:"heat",capacity_kw:50},{id:"c8",from:"hp-1",to:"bld-2",type:"heat",capacity_kw:50}]},industrial_microgrid:{name:"Industrial Microgrid",components:[{id:"chp-1",type:"chp_unit",name:"CHP Plant",x:100,y:100,params:{capacity_kw_e:500,capacity_kw_th:600,efficiency_e:.38,efficiency_th:.45}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV",x:300,y:50,params:{capacity_kwp:400,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"wind-1",type:"wind_turbine",name:"Wind Farm",x:500,y:50,params:{capacity_kw:800,hub_height_m:80,rotor_diameter_m:60,cut_in_speed:3}},{id:"bat-1",type:"battery_storage",name:"Industrial Battery",x:300,y:200,params:{capacity_kwh:2e3,power_kw:500,efficiency:.92,initial_soc:.6}},{id:"load-1",type:"load_center",name:"Factory Load",x:500,y:200,params:{base_load_kw:600,peak_load_kw:1200,load_profile:"industrial"}},{id:"bld-1",type:"smart_building",name:"Office Complex",x:100,y:300,params:{floors:6,area_m2:3e3,load_kw:150,flexible_load_pct:30}},{id:"grid-1",type:"smart_grid",name:"Utility Grid",x:300,y:350,params:{import_limit_kw:1e3,export_limit_kw:800,tariff_type:"tou"}},{id:"dh-1",type:"district_heating",name:"Heat Network",x:500,y:350,params:{supply_temp_c:90,return_temp_c:50,capacity_kw:800}}],connections:[{id:"c1",from:"chp-1",to:"bat-1",type:"electricity",capacity_kw:500},{id:"c2",from:"chp-1",to:"dh-1",type:"heat",capacity_kw:600},{id:"c3",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:400},{id:"c4",from:"wind-1",to:"bat-1",type:"electricity",capacity_kw:800},{id:"c5",from:"bat-1",to:"load-1",type:"electricity",capacity_kw:500},{id:"c6",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:200},{id:"c7",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:1e3},{id:"c8",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200},{id:"c9",from:"dh-1",to:"load-1",type:"heat",capacity_kw:400}]},university_campus:{name:"University Campus",components:[{id:"pv-1",type:"solar_pv",name:"Campus Solar",x:100,y:50,params:{capacity_kwp:600,tilt_deg:25,azimuth_deg:180,efficiency:.21}},{id:"pv-2",type:"solar_pv",name:"Parking Canopy",x:300,y:50,params:{capacity_kwp:200,tilt_deg:10,azimuth_deg:180,efficiency:.19}},{id:"bat-1",type:"battery_storage",name:"Central Storage",x:200,y:150,params:{capacity_kwh:1500,power_kw:400,efficiency:.94,initial_soc:.5}},{id:"bld-1",type:"smart_building",name:"Science Hall",x:100,y:250,params:{floors:5,area_m2:4e3,load_kw:200,flexible_load_pct:25}},{id:"bld-2",type:"smart_building",name:"Library",x:300,y:250,params:{floors:3,area_m2:2500,load_kw:120,flexible_load_pct:35}},{id:"bld-3",type:"smart_building",name:"Dormitory",x:500,y:250,params:{floors:8,area_m2:5e3,load_kw:180,flexible_load_pct:50}},{id:"hp-1",type:"heat_pump",name:"Geothermal HP",x:400,y:150,params:{capacity_kw:300,cop:4.2,type:"ground_source"}},{id:"ev-1",type:"ev_charger",name:"EV Station",x:500,y:50,params:{num_ports:20,power_per_port_kw:22,smart_charging:!0}},{id:"grid-1",type:"smart_grid",name:"Campus Grid",x:200,y:350,params:{import_limit_kw:800,export_limit_kw:500,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:600},{id:"c2",from:"pv-2",to:"bat-1",type:"electricity",capacity_kw:200},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:200},{id:"c4",from:"bat-1",to:"bld-2",type:"electricity",capacity_kw:150},{id:"c5",from:"bat-1",to:"bld-3",type:"electricity",capacity_kw:200},{id:"c6",from:"hp-1",to:"bld-1",type:"heat",capacity_kw:100},{id:"c7",from:"hp-1",to:"bld-2",type:"heat",capacity_kw:80},{id:"c8",from:"hp-1",to:"bld-3",type:"heat",capacity_kw:120},{id:"c9",from:"pv-2",to:"ev-1",type:"electricity",capacity_kw:200},{id:"c10",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:800}]},renewable_island:{name:"Renewable Island Grid",components:[{id:"wind-1",type:"wind_turbine",name:"Offshore Wind",x:100,y:50,params:{capacity_kw:2e3,hub_height_m:100,rotor_diameter_m:90,cut_in_speed:3}},{id:"pv-1",type:"solar_pv",name:"Solar Farm",x:300,y:50,params:{capacity_kwp:1e3,tilt_deg:30,azimuth_deg:180,efficiency:.22}},{id:"bat-1",type:"battery_storage",name:"Grid Battery A",x:150,y:180,params:{capacity_kwh:5e3,power_kw:1500,efficiency:.93,initial_soc:.7}},{id:"bat-2",type:"battery_storage",name:"Grid Battery B",x:350,y:180,params:{capacity_kwh:5e3,power_kw:1500,efficiency:.93,initial_soc:.7}},{id:"chp-1",type:"chp_unit",name:"Backup CHP",x:500,y:100,params:{capacity_kw_e:400,capacity_kw_th:500,efficiency_e:.35,efficiency_th:.45}},{id:"load-1",type:"load_center",name:"Town Center",x:250,y:300,params:{base_load_kw:800,peak_load_kw:1500,load_profile:"residential"}},{id:"bld-1",type:"smart_building",name:"Resort Hotel",x:450,y:300,params:{floors:10,area_m2:8e3,load_kw:400,flexible_load_pct:30}},{id:"dh-1",type:"district_heating",name:"District Heat",x:100,y:300,params:{supply_temp_c:80,return_temp_c:45,capacity_kw:600}}],connections:[{id:"c1",from:"wind-1",to:"bat-1",type:"electricity",capacity_kw:1500},{id:"c2",from:"pv-1",to:"bat-2",type:"electricity",capacity_kw:1e3},{id:"c3",from:"bat-1",to:"load-1",type:"electricity",capacity_kw:1e3},{id:"c4",from:"bat-2",to:"load-1",type:"electricity",capacity_kw:1e3},{id:"c5",from:"bat-2",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c6",from:"chp-1",to:"bat-1",type:"electricity",capacity_kw:400},{id:"c7",from:"chp-1",to:"dh-1",type:"heat",capacity_kw:500},{id:"c8",from:"dh-1",to:"load-1",type:"heat",capacity_kw:400},{id:"c9",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]}},Ne=N=>{var se;const Q=Se[N];if(!Q||r.length>0&&!confirm("This will replace your current design. Continue?"))return;s(Q.components),a(Q.connections),p(Q.name),u(null);const q=(se=N.match(/scenario_(\d)/))==null?void 0:se[1];if(q&&b.length>0){const ue=b.find(Ee=>Ee.name.toLowerCase().includes(`scenario ${q}`)||Ee.name.toLowerCase().includes(`s${q}`));ue&&w(ue.id)}},pe=N=>{if(!L.current)return;const Q=ms[N],q={id:`${N}-${Date.now()}`,type:N,name:Q.label,x:100+Math.random()*150,y:80+Math.random()*100,params:{...Q.defaultParams}};s(se=>[...se,q]),P("canvas")};return m.jsxs("div",{className:"dt-builder-container",children:[m.jsxs("div",{className:"dt-mobile-tabs",children:[m.jsx("button",{className:M==="palette"?"active":"",onClick:()=>P("palette"),children:"🧩 Add"}),m.jsx("button",{className:M==="canvas"?"active":"",onClick:()=>P("canvas"),children:"🎨 Canvas"}),m.jsx("button",{className:M==="properties"?"active":"",onClick:()=>P("properties"),children:"⚙️ Props"})]}),m.jsxs("div",{className:"dt-builder-main",children:[m.jsxs("div",{className:`dt-panel dt-palette-panel ${M==="palette"?"mobile-visible":""}`,children:[m.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Components"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},className:"dt-component-list",children:Rx.map(N=>m.jsxs("div",{draggable:!0,onDragStart:()=>k(N.type),onClick:()=>pe(N.type),style:{padding:"8px 10px",background:"#1e293b",borderRadius:6,cursor:"grab",display:"flex",alignItems:"center",gap:8,border:`2px solid ${N.color}33`,transition:"all 0.15s"},onMouseEnter:Q=>Q.currentTarget.style.borderColor=N.color,onMouseLeave:Q=>Q.currentTarget.style.borderColor=`${N.color}33`,title:N.description,children:[m.jsx("span",{style:{fontSize:20},children:N.icon}),m.jsx("span",{style:{fontSize:12},children:N.label})]},N.type))}),m.jsxs("div",{style:{marginTop:20,padding:10,background:"#1e293b",borderRadius:8,fontSize:10},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[m.jsx("h4",{style:{margin:0,fontSize:12,color:"#94a3b8"},children:"PED Status"}),m.jsx("span",{style:{padding:"2px 6px",borderRadius:4,fontSize:9,background:A.isPed?"#166534":"#7f1d1d"},children:A.isPed?"✓ PED":`${(A.ratio*100).toFixed(0)}%`})]}),m.jsxs("div",{style:{marginBottom:8},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[m.jsx("span",{style:{color:"#64748b"},children:"Annual Balance"}),m.jsxs("span",{style:{color:A.netBalance>=0?"#22c55e":"#ef4444"},children:[A.netBalance>=0?"+":"",A.netBalance.toFixed(1)," MWh"]})]}),m.jsx("div",{style:{height:6,background:"#334155",borderRadius:3,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${Math.min(A.ratio*100,100)}%`,background:A.isPed?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:3}})})]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginBottom:8},children:[m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Generation"}),m.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[A.annualGenMwh.toFixed(0)," MWh/y"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Consumption"}),m.jsxs("div",{style:{color:"#ef4444",fontWeight:600},children:[A.annualLoadMwh.toFixed(0)," MWh/y"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Consumption"}),m.jsxs("div",{style:{color:"#eab308",fontWeight:600},children:[(A.selfConsumptionRate*100).toFixed(0),"%"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Sufficiency"}),m.jsxs("div",{style:{color:"#3b82f6",fontWeight:600},children:[(A.selfSufficiencyRate*100).toFixed(0),"%"]})]})]}),m.jsxs("div",{style:{padding:6,background:"#0f172a",borderRadius:4,marginBottom:8},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[m.jsx("span",{style:{color:"#64748b"},children:"Grid Import:"}),m.jsxs("span",{style:{color:"#f97316"},children:[A.gridImportMwh.toFixed(1)," MWh/y"]})]}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[m.jsx("span",{style:{color:"#64748b"},children:"Grid Export:"}),m.jsxs("span",{style:{color:"#22c55e"},children:[A.gridExportMwh.toFixed(1)," MWh/y"]})]})]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. Grid Cost"}),m.jsxs("div",{style:{color:"#f97316",fontWeight:600},children:["€",(A.annualGridCost/1e3).toFixed(1),"k/y"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. CAPEX"}),m.jsxs("div",{style:{color:"#8b5cf6",fontWeight:600},children:["€",(A.totalCapex/1e3).toFixed(0),"k"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Emissions"}),m.jsxs("div",{style:{color:"#94a3b8",fontWeight:600},children:[(A.annualCO2/1e3).toFixed(1)," t/y"]})]}),m.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[m.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Savings"}),m.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[(A.co2Savings/1e3).toFixed(1)," t/y"]})]})]}),!A.isPed&&A.shortfallKw>0&&m.jsxs("div",{style:{marginTop:8,padding:6,background:"#1e3a5f",borderRadius:4,fontSize:9},children:["💡 Add ~",A.shortfallKw.toFixed(0)," kWp solar to achieve PED"]})]}),m.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[n&&m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:$,disabled:_||r.length===0,style:{...At,background:"#16a34a"},children:_?"💾 Saving...":g?"💾 Update":"💾 Save"}),m.jsx("button",{onClick:F,disabled:y||r.length===0,style:{...At,background:"#2563eb"},children:y?"▶️ Starting...":"▶️ Run Simulation"}),m.jsx("button",{onClick:W,disabled:r.length===0,style:{...At,background:"#7c3aed"},children:"📋 Create Scenario"})]}),m.jsx("button",{onClick:de,style:At,children:"📤 Export JSON"}),m.jsxs("label",{style:{...At,textAlign:"center",cursor:"pointer"},children:["📥 Import JSON",m.jsx("input",{type:"file",accept:".json",onChange:fe,style:{display:"none"}})]}),m.jsx("button",{onClick:E,style:{...At,background:"#7f1d1d"},children:"🗑️ Clear All"})]}),n&&R&&m.jsxs("div",{style:{marginTop:16,padding:8,background:"#1e3a5f",borderRadius:6,fontSize:11},children:[m.jsx("span",{style:{color:"#94a3b8"},children:"Linked: "}),m.jsx("span",{style:{color:"#60a5fa"},children:((Te=b.find(N=>N.id===R))==null?void 0:Te.name)||R}),m.jsx("button",{onClick:()=>w(null),style:{marginLeft:8,background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:10},children:"✕"})]}),m.jsxs("div",{style:{marginTop:20},children:[m.jsx("h4",{style:{margin:"0 0 8px",fontSize:12,color:"#94a3b8"},children:"Paper Scenarios"}),m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[m.jsx("button",{onClick:()=>{Ne("scenario_1_baseline"),P("canvas")},style:{...At,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S1: Baseline"}),m.jsx("button",{onClick:()=>{Ne("scenario_2_high_pv"),P("canvas")},style:{...At,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S2: High PV"}),m.jsx("button",{onClick:()=>{Ne("scenario_3_pv_battery"),P("canvas")},style:{...At,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S3: PV + Battery"}),m.jsx("button",{onClick:()=>{Ne("scenario_4_large_battery"),P("canvas")},style:{...At,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S4: Large Battery"}),m.jsx("button",{onClick:()=>{Ne("scenario_5_dsm"),P("canvas")},style:{...At,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S5: DSM"})]}),m.jsx("h4",{style:{margin:"12px 0 8px",fontSize:12,color:"#94a3b8"},children:"Other Templates"}),m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[m.jsx("button",{onClick:()=>{Ne("smart_district"),P("canvas")},style:{...At,background:"#065f46",fontSize:10,padding:"6px 8px"},children:"🏘️ Smart District"}),m.jsx("button",{onClick:()=>{Ne("industrial_microgrid"),P("canvas")},style:{...At,background:"#7c2d12",fontSize:10,padding:"6px 8px"},children:"🏭 Industrial Microgrid"}),m.jsx("button",{onClick:()=>{Ne("university_campus"),P("canvas")},style:{...At,background:"#4c1d95",fontSize:10,padding:"6px 8px"},children:"🎓 University Campus"}),m.jsx("button",{onClick:()=>{Ne("renewable_island"),P("canvas")},style:{...At,background:"#0e7490",fontSize:10,padding:"6px 8px"},children:"🏝️ Renewable Island"})]})]})]}),m.jsxs("div",{className:`dt-panel dt-canvas-panel ${M==="canvas"?"mobile-visible":""}`,children:[m.jsxs("div",{className:"dt-toolbar",children:[m.jsx("input",{value:d,onChange:N=>p(N.target.value),style:{background:"#1e293b",border:"1px solid #334155",borderRadius:4,padding:"4px 8px",color:"#e2e8f0",fontSize:14,flex:1,minWidth:0,maxWidth:200}}),m.jsxs("span",{className:"dt-toolbar-info",children:[r.length," • ",o.length]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginLeft:"auto"},children:[m.jsx("button",{onClick:()=>Y(N=>Math.max(.5,N-.1)),style:{...At,padding:"4px 8px",fontSize:14},children:"−"}),m.jsxs("span",{style:{fontSize:11,color:"#94a3b8",minWidth:40,textAlign:"center"},children:[Math.round(z*100),"%"]}),m.jsx("button",{onClick:()=>Y(N=>Math.min(2,N+.1)),style:{...At,padding:"4px 8px",fontSize:14},children:"+"}),m.jsx("button",{onClick:()=>Y(1),style:{...At,padding:"4px 6px",fontSize:10},children:"Reset"})]}),h&&m.jsx("span",{style:{fontSize:12,color:"#eab308"},children:"🔗 Click to connect"})]}),m.jsx("div",{ref:L,onDrop:ee,onDragOver:N=>N.preventDefault(),onClick:ae,onWheel:J,onTouchStart:N=>{N.touches.length===2&&re(N)},onTouchMove:He,onTouchEnd:ne,style:{flex:1,position:"relative",background:"linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px), #1e293b",backgroundSize:`${20*z}px ${20*z}px`,overflow:"hidden",touchAction:G||X?"none":"pan-x pan-y"},children:m.jsxs("div",{style:{transform:`scale(${z})`,transformOrigin:"0 0",width:`${100/z}%`,height:`${100/z}%`,position:"relative"},children:[m.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:[m.jsxs("defs",{children:[m.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:m.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})}),m.jsx("marker",{id:"arrowhead-heat",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:m.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ef4444"})})]}),o.map(N=>{const Q=r.find(te=>te.id===N.from),q=r.find(te=>te.id===N.to);if(!Q||!q)return null;const se=N.type==="heat"?"#ef4444":N.type==="both"?"#a855f7":"#3b82f6",ue=Q.x+30,Ee=Q.y+30,I=q.x+30,xe=q.y+30;return m.jsxs("g",{onClick:()=>c(N.id),style:{cursor:"pointer",pointerEvents:"stroke"},children:[m.jsx("line",{x1:ue,y1:Ee,x2:I,y2:xe,stroke:se,strokeWidth:3,strokeDasharray:N.type==="heat"?"8,4":"none",markerEnd:"url(#arrowhead)"}),m.jsx("circle",{r:"4",fill:se,children:m.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",path:`M${ue},${Ee} L${I},${xe}`})}),m.jsx("circle",{r:"4",fill:se,children:m.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"0.66s",path:`M${ue},${Ee} L${I},${xe}`})}),m.jsx("circle",{r:"4",fill:se,children:m.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"1.33s",path:`M${ue},${Ee} L${I},${xe}`})})]},N.id)})]}),r.map(N=>{const Q=ms[N.type],q=l===N.id,se=h===N.id,ue=Ze(N.id);return m.jsxs("div",{draggable:!0,onDragEnd:Ee=>$e(N.id,Ee),onClick:Ee=>we(N.id,Ee),onTouchStart:Ee=>Re(N.id,Ee),style:{position:"absolute",left:N.x,top:N.y,width:60,height:60,background:`${Q.color}22`,border:`2px solid ${q||se?"#fff":ue==="isolated"?"#f97316":Q.color}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"move",boxShadow:q?"0 0 12px rgba(255,255,255,0.3)":ue==="isolated"?"0 0 8px rgba(249,115,22,0.5)":"none",transition:(G==null?void 0:G.id)===N.id?"none":"box-shadow 0.15s",touchAction:"none"},children:[m.jsx("div",{style:{position:"absolute",top:-6,right:-6,width:14,height:14,borderRadius:"50%",background:ue==="valid"?"#22c55e":"#f97316",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,border:"2px solid #0f172a"},children:ue==="valid"?"✓":"!"}),m.jsx("span",{style:{fontSize:24},children:Q.icon}),m.jsx("span",{style:{fontSize:9,color:"#94a3b8",marginTop:2,textAlign:"center",maxWidth:56,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:N.name})]},N.id)}),r.length===0&&m.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),m.jsx("div",{children:"Drag components here to build your digital twin"})]})]})})]}),m.jsxs("div",{className:`dt-panel dt-properties-panel ${M==="properties"?"mobile-visible":""}`,children:[m.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Properties"}),Pe?m.jsxs("div",{children:[m.jsxs("div",{style:{marginBottom:12},children:[m.jsx("label",{style:{fontSize:11,color:"#64748b"},children:"Name"}),m.jsx("input",{value:Pe.name,onChange:N=>s(Q=>Q.map(q=>q.id===Pe.id?{...q,name:N.target.value}:q)),style:mo})]}),m.jsx("div",{style:{fontSize:11,color:"#64748b",marginBottom:8},children:"Parameters"}),Object.entries(Pe.params).map(([N,Q])=>m.jsxs("div",{style:{marginBottom:8},children:[m.jsx("label",{style:{fontSize:10,color:"#94a3b8",display:"block",marginBottom:2},children:N.replace(/_/g," ")}),typeof Q=="boolean"?m.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12},children:[m.jsx("input",{type:"checkbox",checked:Q,onChange:q=>ft(Pe.id,N,q.target.checked)}),Q?"Enabled":"Disabled"]}):typeof Q=="number"?m.jsx("input",{type:"number",value:Q,onChange:q=>ft(Pe.id,N,parseFloat(q.target.value)||0),style:mo}):m.jsx("input",{value:Q,onChange:q=>ft(Pe.id,N,q.target.value),style:mo})]},N)),m.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[m.jsx("button",{onClick:()=>Le(Pe.id),style:{...At,background:"#1d4ed8"},children:"🔗 Connect to..."}),m.jsx("button",{onClick:()=>ze(Pe.id),style:{...At,background:"#7f1d1d"},children:"🗑️ Delete"})]})]}):o.find(N=>N.id===l)?m.jsx("div",{children:(()=>{const N=o.find(se=>se.id===l),Q=r.find(se=>se.id===N.from),q=r.find(se=>se.id===N.to);return m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{fontSize:12,marginBottom:12},children:[m.jsx("b",{children:Q==null?void 0:Q.name})," → ",m.jsx("b",{children:q==null?void 0:q.name})]}),m.jsxs("div",{style:{marginBottom:8},children:[m.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Type"}),m.jsxs("select",{value:N.type,onChange:se=>a(ue=>ue.map(Ee=>Ee.id===N.id?{...Ee,type:se.target.value}:Ee)),style:mo,children:[m.jsx("option",{value:"electricity",children:"⚡ Electricity"}),m.jsx("option",{value:"heat",children:"🔥 Heat"}),m.jsx("option",{value:"both",children:"🔄 Both"})]})]}),m.jsxs("div",{style:{marginBottom:8},children:[m.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Capacity (kW)"}),m.jsx("input",{type:"number",value:N.capacity_kw||0,onChange:se=>a(ue=>ue.map(Ee=>Ee.id===N.id?{...Ee,capacity_kw:parseFloat(se.target.value)||0}:Ee)),style:mo})]}),m.jsx("button",{onClick:()=>U(N.id),style:{...At,background:"#7f1d1d",marginTop:12},children:"🗑️ Delete Connection"})]})})()}):m.jsx("div",{style:{color:"#64748b",fontSize:12},children:"Select a component or connection to edit its properties"})]})]})]})}const At={padding:"8px 12px",background:"#334155",border:"none",borderRadius:4,color:"#e2e8f0",fontSize:12,cursor:"pointer"},mo={width:"100%",padding:"6px 8px",background:"#1e293b",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0",fontSize:12};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="170",Ei={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dx=0,kp=1,Lx=2,h0=1,f0=2,fi=3,cr=0,hn=1,_i=2,rr=0,Us=1,Ad=2,Op=3,zp=4,Nx=5,Er=100,Ix=101,Ux=102,Fx=103,kx=104,Ox=200,zx=201,Bx=202,Hx=203,Cd=204,Rd=205,Vx=206,Gx=207,jx=208,Wx=209,Xx=210,$x=211,Yx=212,qx=213,Kx=214,Pd=0,Dd=1,Ld=2,Ws=3,Nd=4,Id=5,Ud=6,Fd=7,p0=0,Zx=1,Qx=2,sr=0,Jx=1,eS=2,tS=3,nS=4,iS=5,rS=6,sS=7,m0=300,Xs=301,$s=302,kd=303,Od=304,wc=306,zd=1e3,Rr=1001,Bd=1002,qn=1003,oS=1004,Fa=1005,ii=1006,tu=1007,Pr=1008,Pi=1009,g0=1010,_0=1011,ia=1012,mf=1013,Or=1014,xi=1015,ca=1016,gf=1017,_f=1018,Ys=1020,v0=35902,y0=1021,x0=1022,Xn=1023,S0=1024,M0=1025,Fs=1026,qs=1027,w0=1028,vf=1029,E0=1030,yf=1031,xf=1033,wl=33776,El=33777,Tl=33778,bl=33779,Hd=35840,Vd=35841,Gd=35842,jd=35843,Wd=36196,Xd=37492,$d=37496,Yd=37808,qd=37809,Kd=37810,Zd=37811,Qd=37812,Jd=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,Al=36492,lh=36494,ch=36495,T0=36283,uh=36284,dh=36285,hh=36286,aS=3200,lS=3201,b0=0,cS=1,Xi="",bn="srgb",eo="srgb-linear",Ec="linear",ot="srgb",Zr=7680,Bp=519,uS=512,dS=513,hS=514,A0=515,fS=516,pS=517,mS=518,gS=519,fh=35044,Hp="300 es",Si=2e3,ec=2001;class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,ph=180/Math.PI;function or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function _S(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vS={DEG2RAD:Cl};class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],v=i[8],S=r[0],g=r[3],u=r[6],_=r[1],x=r[4],y=r[7],D=r[2],b=r[5],C=r[8];return s[0]=o*S+a*_+l*D,s[3]=o*g+a*x+l*b,s[6]=o*u+a*y+l*C,s[1]=c*S+h*_+f*D,s[4]=c*g+h*x+f*b,s[7]=c*u+h*y+f*C,s[2]=d*S+p*_+v*D,s[5]=d*g+p*x+v*b,s[8]=d*u+p*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-h*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new Xe;function C0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yS(){const t=tc("canvas");return t.style.display="block",t}const Vp={};function Co(t){t in Vp||(Vp[t]=!0,console.warn(t))}function xS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function MS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Ti(t.r),t.g=Ti(t.g),t.b=Ti(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=ks(t.r),t.g=ks(t.g),t.b=ks(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Xi?Ec:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Gp=[.64,.33,.3,.6,.15,.06],jp=[.2126,.7152,.0722],Wp=[.3127,.329],Xp=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[eo]:{primaries:Gp,whitePoint:Wp,transfer:Ec,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:jp,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Gp,whitePoint:Wp,transfer:ot,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:jp,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let Qr;class wS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=tc("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class R0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ru(r[o].image)):s.push(ru(r[o]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?wS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TS=0;class tn extends jr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Rr,r=Rr,s=ii,o=Pr,a=Xn,l=Pi,c=tn.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=or(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=m0;tn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],v=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,D=(u+1)/2,b=(h+d)/4,C=(f+S)/4,R=(v+g)/4;return x>y&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=C/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=R/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=C/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(f-S)*(f-S)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(f-S)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new R0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends bS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=S;return}if(f!==S||l!==d||c!==p||h!==v){let g=1-a;const u=l*d+c*p+h*v+f*S,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const D=Math.sqrt(x),b=Math.atan2(D,u*_);g=Math.sin(g*b)/D,a=Math.sin(a*b)/D}const y=a*_;if(l=l*g+d*y,c=c*g+p*y,h=h*g+v*y,f=f*g+S*y,g===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*f+l*p-c*d,e[n+1]=l*v+h*d+c*f-a*p,e[n+2]=c*v+h*p+a*d-l*f,e[n+3]=h*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f+d*p*v;break;case"YZX":this._x=d*h*f+c*p*v,this._y=c*p*f+d*h*v,this._z=c*h*v-d*p*f,this._w=c*h*f-d*p*v;break;case"XZY":this._x=d*h*f-c*p*v,this._y=c*p*f-d*h*v,this._z=c*h*v+d*p*f,this._w=c*h*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new O,Yp=new Br;class Hr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Oa.subVectors(this.max,go),Jr.subVectors(e.a,go),es.subVectors(e.b,go),ts.subVectors(e.c,go),Ui.subVectors(es,Jr),Fi.subVectors(ts,es),mr.subVectors(Jr,ts);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!ou(n,Jr,es,ts,Oa)||(n=[1,0,0,0,1,0,0,0,1],!ou(n,Jr,es,ts,Oa))?!1:(za.crossVectors(Ui,Fi),n=[za.x,za.y,za.z],ou(n,Jr,es,ts,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,ka=new Hr,Jr=new O,es=new O,ts=new O,Ui=new O,Fi=new O,mr=new O,go=new O,Oa=new O,za=new O,gr=new O;function ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const CS=new Hr,_o=new O,au=new O;class ua{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(au)),this.expandByPoint(_o.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new O,lu=new O,Ba=new O,ki=new O,cu=new O,Ha=new O,uu=new O;class da{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=ki.dot(this.direction),l=-ki.dot(Ba),c=ki.lengthSq(),h=Math.abs(1-o*o);let f,d,p,v;if(h>0)if(f=o*l-a,d=o*a-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const S=1/h;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lu).addScaledVector(Ba,d),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Ha.subVectors(i,e),uu.crossVectors(cu,Ha);let o=this.direction.dot(uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(ki,Ha));if(l<0)return null;const c=a*this.direction.dot(cu.cross(ki));if(c<0||l+c>o)return null;const h=-a*ki.dot(uu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,v,S,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,v,S,g)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,v,S,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,v=a*h,S=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,v=c*h,S=c*f;n[0]=d+S*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,v=c*h,S=c*f;n[0]=d-S*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,v=a*h,S=a*f;n[0]=l*h,n[4]=v*c-p,n[8]=d*c+S,n[1]=l*f,n[5]=S*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*h,n[4]=S-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+v,n[10]=d-S*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,S=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+S,n[5]=o*h,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*h,n[10]=S*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RS,e,PS)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Oi.crossVectors(i,mn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Oi.crossVectors(i,mn)),Oi.normalize(),Va.crossVectors(mn,Oi),r[0]=Oi.x,r[4]=Va.x,r[8]=mn.x,r[1]=Oi.y,r[5]=Va.y,r[9]=mn.y,r[2]=Oi.z,r[6]=Va.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],v=i[2],S=i[6],g=i[10],u=i[14],_=i[3],x=i[7],y=i[11],D=i[15],b=r[0],C=r[4],R=r[8],w=r[12],M=r[1],P=r[5],G=r[9],V=r[13],z=r[2],Y=r[6],X=r[10],ie=r[14],L=r[3],J=r[7],re=r[11],he=r[15];return s[0]=o*b+a*M+l*z+c*L,s[4]=o*C+a*P+l*Y+c*J,s[8]=o*R+a*G+l*X+c*re,s[12]=o*w+a*V+l*ie+c*he,s[1]=h*b+f*M+d*z+p*L,s[5]=h*C+f*P+d*Y+p*J,s[9]=h*R+f*G+d*X+p*re,s[13]=h*w+f*V+d*ie+p*he,s[2]=v*b+S*M+g*z+u*L,s[6]=v*C+S*P+g*Y+u*J,s[10]=v*R+S*G+g*X+u*re,s[14]=v*w+S*V+g*ie+u*he,s[3]=_*b+x*M+y*z+D*L,s[7]=_*C+x*P+y*Y+D*J,s[11]=_*R+x*G+y*X+D*re,s[15]=_*w+x*V+y*ie+D*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],S=e[7],g=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],S=e[13],g=e[14],u=e[15],_=f*g*c-S*d*c+S*l*p-a*g*p-f*l*u+a*d*u,x=v*d*c-h*g*c-v*l*p+o*g*p+h*l*u-o*d*u,y=h*S*c-v*f*c+v*a*p-o*S*p-h*a*u+o*f*u,D=v*f*l-h*S*l-v*a*d+o*S*d+h*a*g-o*f*g,b=n*_+i*x+r*y+s*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(S*d*s-f*g*s-S*r*p+i*g*p+f*r*u-i*d*u)*C,e[2]=(a*g*s-S*l*s+S*r*c-i*g*c-a*r*u+i*l*u)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=x*C,e[5]=(h*g*s-v*d*s+v*r*p-n*g*p-h*r*u+n*d*u)*C,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*u-n*l*u)*C,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=y*C,e[9]=(v*f*s-h*S*s-v*i*p+n*S*p+h*i*u-n*f*u)*C,e[10]=(o*S*s-v*a*s+v*i*c-n*S*c-o*i*u+n*a*u)*C,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=D*C,e[13]=(h*S*r-v*f*r+v*i*d-n*S*d-h*i*g+n*f*g)*C,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*g-n*a*g)*C,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,v=s*f,S=o*h,g=o*f,u=a*f,_=l*c,x=l*h,y=l*f,D=i.x,b=i.y,C=i.z;return r[0]=(1-(S+u))*D,r[1]=(p+y)*D,r[2]=(v-x)*D,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(d+u))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(v+x)*C,r[9]=(g-_)*C,r[10]=(1-(d+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ns.set(r[0],r[1],r[2]).length();const o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,h=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Si)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ec)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h;let v,S;if(a===Si)v=(o+s)*f,S=-2*f;else if(a===ec)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ns=new O,Hn=new ht,RS=new O(0,0,0),PS=new O(1,1,1),Oi=new O,Va=new O,mn=new O,qp=new ht,Kp=new Br;class oi{constructor(e=0,n=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DS=0;const Zp=new O,is=new Br,ui=new ht,Ga=new O,vo=new O,LS=new O,NS=new Br,Qp=new O(1,0,0),Jp=new O(0,1,0),em=new O(0,0,1),tm={type:"added"},IS={type:"removed"},rs={type:"childadded",child:null},du={type:"childremoved",child:null};class It extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new O,n=new oi,i=new Br,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Xe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(vo,Ga,this.up):ui.lookAt(Ga,vo,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),is.setFromRotationMatrix(ui),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IS),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new O(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new O,di=new O,hu=new O,hi=new O,ss=new O,os=new O,nm=new O,fu=new O,pu=new O,mu=new O,gu=new bt,_u=new bt,vu=new bt;class Pn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),di.subVectors(i,n),hu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(hu),c=di.dot(di),h=di.dot(hu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return gu.setScalar(0),_u.setScalar(0),vu.setScalar(0),gu.fromBufferAttribute(e,n),_u.fromBufferAttribute(e,i),vu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gu,s.x),o.addScaledVector(_u,s.y),o.addScaledVector(vu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),di.subVectors(e,n),Vn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),fu.subVectors(e,i);const l=ss.dot(fu),c=os.dot(fu);if(l<=0&&c<=0)return n.copy(i);pu.subVectors(e,r);const h=ss.dot(pu),f=os.dot(pu);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ss,o);mu.subVectors(e,s);const p=ss.dot(mu),v=os.dot(mu);if(v>=0&&p<=v)return n.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(os,a);const g=h*v-p*f;if(g<=0&&f-h>=0&&p-v>=0)return nm.subVectors(s,r),a=(f-h)/(f-h+(p-v)),n.copy(r).addScaledVector(nm,a);const u=1/(g+S+d);return o=S*u,a=d*u,n.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=_S(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return et.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Jt(Xt.r*255,0,255))*65536+Math.round(Jt(Xt.g*255,0,255))*256+Math.round(Jt(Xt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=bn){et.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(ja);const i=nu(zi.h,ja.h,n),r=nu(zi.s,ja.s,n),s=nu(zi.l,ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Qe;Qe.NAMES=D0;let US=0;class pr extends jr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=or(),this.name="",this.blending=Us,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L0 extends pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new O,Wa=new Oe;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class N0 extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class I0 extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FS=0;const En=new ht,xu=new It,as=new O,gn=new Hr,yo=new Hr,kt=new O;class qt extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?I0:N0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(gn.min,yo.min),gn.expandByPoint(kt),kt.addVectors(gn.max,yo.max),gn.expandByPoint(kt)):(gn.expandByPoint(yo.min),gn.expandByPoint(yo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),kt.add(as)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const c=new O,h=new O,f=new O,d=new Oe,p=new Oe,v=new Oe,S=new O,g=new O;function u(R,w,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),h.sub(c),f.sub(c),p.sub(d),v.sub(d);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),a[R].add(S),a[w].add(S),a[M].add(S),l[R].add(g),l[w].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,w=_.length;R<w;++R){const M=_[R],P=M.start,G=M.count;for(let V=P,z=P+G;V<z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new O,y=new O,D=new O,b=new O;function C(R){D.fromBufferAttribute(r,R),b.copy(D);const w=a[R];x.copy(w),x.sub(D.multiplyScalar(D.dot(w))).normalize(),y.crossVectors(b,w);const P=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,w=_.length;R<w;++R){const M=_[R],P=M.start,G=M.count;for(let V=P,z=P+G;V<z;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*h;for(let u=0;u<h;u++)d[v++]=c[p++]}return new Nn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new ht,_r=new da,Xa=new ua,rm=new O,$a=new O,Ya=new O,qa=new O,Su=new O,Ka=new O,sm=new O,Za=new O;class Be extends It{constructor(e=new qt,n=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Su.fromBufferAttribute(f,e),o?Ka.addScaledVector(Su,h):Ka.addScaledVector(Su.sub(n),h))}n.add(Ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Xa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Xa,rm)===null||_r.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),_r.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const g=d[v],u=o[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,D=x;y<D;y+=3){const b=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);r=Qa(this,u,e,i,c,h,f,b,C,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=v,u=S;g<u;g+=3){const _=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=Qa(this,o,e,i,c,h,f,_,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const g=d[v],u=o[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,D=x;y<D;y+=3){const b=y,C=y+1,R=y+2;r=Qa(this,u,e,i,c,h,f,b,C,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=v,u=S;g<u;g+=3){const _=g,x=g+1,y=g+2;r=Qa(this,o,e,i,c,h,f,_,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function kS(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Za);return c<n.near||c>n.far?null:{distance:c,point:Za.clone(),object:t}}function Qa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$a),t.getVertexPosition(l,Ya),t.getVertexPosition(c,qa);const h=kS(t,e,n,i,$a,Ya,qa,sm);if(h){const f=new O;Pn.getBarycoord(sm,$a,Ya,qa,f),r&&(h.uv=Pn.getInterpolatedAttribute(r,a,l,c,f,new Oe)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,a,l,c,f,new Oe)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Pn.getNormal($a,Ya,qa,d.normal),h.face=d,h.barycoord=f}return h}class ut extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function v(S,g,u,_,x,y,D,b,C,R,w){const M=y/C,P=D/R,G=y/2,V=D/2,z=b/2,Y=C+1,X=R+1;let ie=0,L=0;const J=new O;for(let re=0;re<X;re++){const he=re*P-V;for(let Re=0;Re<Y;Re++){const He=Re*M-G;J[S]=He*_,J[g]=he*x,J[u]=z,c.push(J.x,J.y,J.z),J[S]=0,J[g]=0,J[u]=b>0?1:-1,h.push(J.x,J.y,J.z),f.push(Re/C),f.push(1-re/R),ie+=1}}for(let re=0;re<R;re++)for(let he=0;he<C;he++){const Re=d+he+Y*re,He=d+he+Y*(re+1),ne=d+(he+1)+Y*(re+1),le=d+(he+1)+Y*re;l.push(Re,He,le),l.push(He,ne,le),L+=6}a.addGroup(p,L,w),p+=L,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function OS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function U0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const zS={clone:Ks,merge:Zt};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class F0 extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new O,om=new Oe,am=new Oe;class Rn extends F0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,om,am),n.subVectors(am,om)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ls=-90,cs=1;class VS extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ls,cs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(ls,cs,e,n);s.layers=this.layers,this.add(s);const o=new Rn(ls,cs,e,n);o.layers=this.layers,this.add(o);const a=new Rn(ls,cs,e,n);a.layers=this.layers,this.add(a);const l=new Rn(ls,cs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(ls,cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class k0 extends tn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GS extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ut(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Be(r,s),a=n.minFilter;return n.minFilter===Pr&&(n.minFilter=ii),new VS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Mu=new O,jS=new O,WS=new Xe;class gi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mu.subVectors(i,n).cross(jS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WS.getNormalMatrix(e),r=this.coplanarPoint(Mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new ua,Ja=new O;class Mf{constructor(e=new gi,n=new gi,i=new gi,r=new gi,s=new gi,o=new gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],v=r[9],S=r[10],g=r[11],u=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,g-p,y-u).normalize(),i[1].setComponents(l+s,d+c,g+p,y+u).normalize(),i[2].setComponents(l+o,d+h,g+v,y+_).normalize(),i[3].setComponents(l-o,d-h,g-v,y-_).normalize(),i[4].setComponents(l-a,d-f,g-S,y-x).normalize(),n===Si)i[5].setComponents(l+a,d+f,g+S,y+x).normalize();else if(n===ec)i[5].setComponents(a,f,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function XS(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const S=f[p];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ha extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],v=[],S=[],g=[];for(let u=0;u<h;u++){const _=u*d-o;for(let x=0;x<c;x++){const y=x*f-s;v.push(y,-_,0),S.push(0,0,1),g.push(x/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,y=_+c*(u+1),D=_+1+c*(u+1),b=_+1+c*u;p.push(x,y,b),p.push(y,D,b)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(S,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
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
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
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
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,aM=`#ifdef USE_BUMPMAP
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gM=`#define PI 3.141592653589793
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
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vM=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
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
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
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
#endif`,WM=`struct PhysicalMaterial {
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
}`,XM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n1=`#if defined( USE_POINTS_UV )
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
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
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
#endif`,c1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
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
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,F1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,J1=`#if DEPTH_PACKING == 3200
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
}`,ew=`#define DISTANCE
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
}`,tw=`#define DISTANCE
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`uniform float scale;
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#include <common>
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
}`,aw=`uniform vec3 diffuse;
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
}`,lw=`#define LAMBERT
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
}`,cw=`#define LAMBERT
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
}`,uw=`#define MATCAP
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
}`,dw=`#define MATCAP
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
}`,hw=`#define NORMAL
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
}`,fw=`#define NORMAL
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
}`,pw=`#define PHONG
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
}`,mw=`#define PHONG
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
}`,gw=`#define STANDARD
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
}`,_w=`#define STANDARD
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
}`,vw=`#define TOON
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
}`,yw=`#define TOON
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
}`,xw=`uniform float size;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,ww=`uniform vec3 color;
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
}`,Ew=`uniform float rotation;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:$S,alphahash_pars_fragment:YS,alphamap_fragment:qS,alphamap_pars_fragment:KS,alphatest_fragment:ZS,alphatest_pars_fragment:QS,aomap_fragment:JS,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:oM,bumpmap_pars_fragment:aM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:fM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:vM,displacementmap_pars_vertex:yM,displacementmap_vertex:xM,emissivemap_fragment:SM,emissivemap_pars_fragment:MM,colorspace_fragment:wM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:bM,envmap_pars_fragment:AM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:zM,envmap_vertex:RM,fog_vertex:PM,fog_pars_vertex:DM,fog_fragment:LM,fog_pars_fragment:NM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:UM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:kM,lights_pars_begin:OM,lights_toon_fragment:BM,lights_toon_pars_fragment:HM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:jM,lights_physical_pars_fragment:WM,lights_fragment_begin:XM,lights_fragment_maps:$M,lights_fragment_end:YM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:QM,map_fragment:JM,map_pars_fragment:e1,map_particle_fragment:t1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:r1,morphinstance_vertex:s1,morphcolor_vertex:o1,morphnormal_vertex:a1,morphtarget_pars_vertex:l1,morphtarget_vertex:c1,normal_fragment_begin:u1,normal_fragment_maps:d1,normal_pars_fragment:h1,normal_pars_vertex:f1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:y1,opaque_fragment:x1,packing:S1,premultiplied_alpha_fragment:M1,project_vertex:w1,dithering_fragment:E1,dithering_pars_fragment:T1,roughnessmap_fragment:b1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:R1,shadowmap_vertex:P1,shadowmask_pars_fragment:D1,skinbase_vertex:L1,skinning_pars_vertex:N1,skinning_vertex:I1,skinnormal_vertex:U1,specularmap_fragment:F1,specularmap_pars_fragment:k1,tonemapping_fragment:O1,tonemapping_pars_fragment:z1,transmission_fragment:B1,transmission_pars_fragment:H1,uv_pars_fragment:V1,uv_pars_vertex:G1,uv_vertex:j1,worldpos_vertex:W1,background_vert:X1,background_frag:$1,backgroundCube_vert:Y1,backgroundCube_frag:q1,cube_vert:K1,cube_frag:Z1,depth_vert:Q1,depth_frag:J1,distanceRGBA_vert:ew,distanceRGBA_frag:tw,equirect_vert:nw,equirect_frag:iw,linedashed_vert:rw,linedashed_frag:sw,meshbasic_vert:ow,meshbasic_frag:aw,meshlambert_vert:lw,meshlambert_frag:cw,meshmatcap_vert:uw,meshmatcap_frag:dw,meshnormal_vert:hw,meshnormal_frag:fw,meshphong_vert:pw,meshphong_frag:mw,meshphysical_vert:gw,meshphysical_frag:_w,meshtoon_vert:vw,meshtoon_frag:yw,points_vert:xw,points_frag:Sw,shadow_vert:Mw,shadow_frag:ww,sprite_vert:Ew,sprite_frag:Tw},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const el={r:0,b:0,g:0},yr=new oi,bw=new ht;function Aw(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function S(_){let x=!1;const y=v(_);y===null?u(a,l):y&&y.isColor&&(u(y,1),x=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===wc)?(h===void 0&&(h=new Be(new ut(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Ks(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),yr.copy(x.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(yr)),h.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,(f!==y||d!==y.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new ha(2,2),new ur({name:"BackgroundMaterial",uniforms:Ks(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(el,U0(t)),i.buffers.color.setClear(el.r,el.g,el.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:S,addToRenderList:g}}function Cw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,P,G,V,z){let Y=!1;const X=f(V,G,P);s!==X&&(s=X,c(s.object)),Y=p(M,V,G,z),Y&&v(M,V,G,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(M,P,G,V),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function f(M,P,G){const V=G.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let Y=z[P.id];Y===void 0&&(Y={},z[P.id]=Y);let X=Y[V];return X===void 0&&(X=d(l()),Y[V]=X),X}function d(M){const P=[],G=[],V=[];for(let z=0;z<n;z++)P[z]=0,G[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,P,G,V){const z=s.attributes,Y=P.attributes;let X=0;const ie=G.getAttributes();for(const L in ie)if(ie[L].location>=0){const re=z[L];let he=Y[L];if(he===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),re===void 0||re.attribute!==he||he&&re.data!==he.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function v(M,P,G,V){const z={},Y=P.attributes;let X=0;const ie=G.getAttributes();for(const L in ie)if(ie[L].location>=0){let re=Y[L];re===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const he={};he.attribute=re,re&&re.data&&(he.data=re.data),z[L]=he,X++}s.attributes=z,s.attributesNum=X,s.index=V}function S(){const M=s.newAttributes;for(let P=0,G=M.length;P<G;P++)M[P]=0}function g(M){u(M,0)}function u(M,P){const G=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;G[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),z[M]!==P&&(t.vertexAttribDivisor(M,P),z[M]=P)}function _(){const M=s.newAttributes,P=s.enabledAttributes;for(let G=0,V=P.length;G<V;G++)P[G]!==M[G]&&(t.disableVertexAttribArray(G),P[G]=0)}function x(M,P,G,V,z,Y,X){X===!0?t.vertexAttribIPointer(M,P,G,z,Y):t.vertexAttribPointer(M,P,G,V,z,Y)}function y(M,P,G,V){S();const z=V.attributes,Y=G.getAttributes(),X=P.defaultAttributeValues;for(const ie in Y){const L=Y[ie];if(L.location>=0){let J=z[ie];if(J===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const re=J.normalized,he=J.itemSize,Re=e.get(J);if(Re===void 0)continue;const He=Re.buffer,ne=Re.type,le=Re.bytesPerElement,k=ne===t.INT||ne===t.UNSIGNED_INT||J.gpuType===mf;if(J.isInterleavedBufferAttribute){const ee=J.data,ae=ee.stride,ve=J.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<L.locationSize;_e++)u(L.location+_e,ee.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<L.locationSize;_e++)g(L.location+_e);t.bindBuffer(t.ARRAY_BUFFER,He);for(let _e=0;_e<L.locationSize;_e++)x(L.location+_e,he/L.locationSize,ne,re,ae*le,(ve+he/L.locationSize*_e)*le,k)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<L.locationSize;ee++)u(L.location+ee,J.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<L.locationSize;ee++)g(L.location+ee);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ee=0;ee<L.locationSize;ee++)x(L.location+ee,he/L.locationSize,ne,re,he*le,he/L.locationSize*ee*le,k)}}else if(X!==void 0){const re=X[ie];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(L.location,re);break;case 3:t.vertexAttrib3fv(L.location,re);break;case 4:t.vertexAttrib4fv(L.location,re);break;default:t.vertexAttrib1fv(L.location,re)}}}}_()}function D(){R();for(const M in i){const P=i[M];for(const G in P){const V=P[G];for(const z in V)h(V[z].object),delete V[z];delete P[G]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const G in P){const V=P[G];for(const z in V)h(V[z].object),delete V[z];delete P[G]}delete i[M.id]}function C(M){for(const P in i){const G=i[P];if(G[M.id]===void 0)continue;const V=G[M.id];for(const z in V)h(V[z].object),delete V[z];delete G[M.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:_}}function Rw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=h[v];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=h[S]*d[S];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Xn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xi&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:D,maxSamples:b}}function Dw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,x=_*4;let y=u.clippingState||null;l.value=y,y=h(v,d,x,p);for(let D=0;D!==x;++D)y[D]=n[D];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,v){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const u=p+S*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let x=0,y=p;x!==S;++x,y+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Lw(t){let e=new WeakMap;function n(o,a){return a===kd?o.mapping=Xs:a===Od&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kd||a===Od)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new GS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class z0 extends F0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,lm=[.125,.215,.35,.446,.526,.582],Tr=20,wu=new z0,cm=new Qe;let Eu=null,Tu=0,bu=0,Au=!1;const wr=(1+Math.sqrt(5))/2,us=1/wr,um=[new O(-wr,us,0),new O(wr,us,0),new O(-us,0,wr),new O(us,0,wr),new O(0,wr,-us),new O(0,wr,us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,Tu,bu),this._renderer.xr.enabled=Au,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ca,format:Xn,colorSpace:eo,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nw(s)),this._blurMaterial=Iw(s,e,n)}return r}_compileMaterial(e){const n=new Be(this._lodPlanes[0],e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(cm),h.toneMapping=sr,h.autoClear=!1;const p=new L0({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new Be(new ut,p);let S=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy(cm),S=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;tl(r,_*x,u>2?x:0,x,x),h.setRenderTarget(r),S&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=um[(r-s-1)%um.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Be(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),S=s/v,g=isFinite(s)?1+Math.floor(h*S):Tr;g>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Tr}`);const u=[];let _=0;for(let C=0;C<Tr;++C){const R=C/S,w=Math.exp(-R*R/2);u.push(w),C===0?_+=w:C<g&&(_+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const y=this._sizeLods[r],D=3*y*(r>x-Cs?r-x+Cs:0),b=4*(this._cubeSize-y);tl(n,D,b,3*y,2*y),l.setRenderTarget(n),l.render(f,wu)}}function Nw(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cs?l=lm[o-t+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,S=3,g=2,u=1,_=new Float32Array(S*v*p),x=new Float32Array(g*v*p),y=new Float32Array(u*v*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,R=b>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];_.set(w,S*v*b),x.set(d,g*v*b);const M=[b,b,b,b,b,b];y.set(M,u*v*b)}const D=new qt;D.setAttribute("position",new Nn(_,S)),D.setAttribute("uv",new Nn(x,g)),D.setAttribute("faceIndex",new Nn(y,u)),e.push(D),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Iw(t,e,n){const i=new Float32Array(Tr),r=new O(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function fm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function pm(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function Uw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kd||l===Od,h=l===Xs||l===$s;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Fw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const S=d.morphAttributes[v];for(let g=0,u=S.length;g<u;g++)e.remove(S[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const S=p[v];for(let g=0,u=S.length;g<u;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const _=p.array;S=p.version;for(let x=0,y=_.length;x<y;x+=3){const D=_[x+0],b=_[x+1],C=_[x+2];d.push(D,b,b,C,C,D)}}else if(v!==void 0){const _=v.array;S=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const D=x+0,b=x+1,C=x+2;d.push(D,b,b,C,C,D)}}else return;const g=new(C0(d)?I0:N0)(d,1);g.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ow(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let g=0;for(let u=0;u<v;u++)g+=p[u];n.update(g,i,1)}function f(d,p,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_]*S[_];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Bw(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),S===!0&&(x=3);let y=a.attributes.position.count*x,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*D*4*f),C=new P0(b,y,D,f);C.type=xi,C.needsUpdate=!0;const R=x*4;for(let M=0;M<f;M++){const P=g[M],G=u[M],V=_[M],z=y*D*4*M;for(let Y=0;Y<P.count;Y++){const X=Y*R;p===!0&&(r.fromBufferAttribute(P,Y),b[z+X+0]=r.x,b[z+X+1]=r.y,b[z+X+2]=r.z,b[z+X+3]=0),v===!0&&(r.fromBufferAttribute(G,Y),b[z+X+4]=r.x,b[z+X+5]=r.y,b[z+X+6]=r.z,b[z+X+7]=0),S===!0&&(r.fromBufferAttribute(V,Y),b[z+X+8]=r.x,b[z+X+9]=r.y,b[z+X+10]=r.z,b[z+X+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Oe(y,D)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Hw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class B0 extends tn{constructor(e,n,i,r,s,o,a,l,c,h=Fs){if(h!==Fs&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fs&&(i=Or),i===void 0&&h===qs&&(i=Ys),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const H0=new tn,mm=new B0(1,1),V0=new P0,G0=new AS,j0=new k0,gm=[],_m=[],vm=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Ft(n,i)}}function $w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Ft(n,i)}}function Yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),Ft(n,i)}}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function tE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function nE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function iE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mm.compareFunction=A0,s=mm):s=H0,n.setTexture2D(e||s,r)}function rE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G0,r)}function sE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||j0,r)}function oE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||V0,r)}function aE(t){switch(t){case 5126:return Vw;case 35664:return Gw;case 35665:return jw;case 35666:return Ww;case 35674:return Xw;case 35675:return $w;case 35676:return Yw;case 5124:case 35670:return qw;case 35667:case 35671:return Kw;case 35668:case 35672:return Zw;case 35669:case 35673:return Qw;case 5125:return Jw;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}function lE(t,e){t.uniform1fv(this.addr,e)}function cE(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function uE(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function dE(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function hE(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fE(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pE(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mE(t,e){t.uniform1iv(this.addr,e)}function gE(t,e){t.uniform2iv(this.addr,e)}function _E(t,e){t.uniform3iv(this.addr,e)}function vE(t,e){t.uniform4iv(this.addr,e)}function yE(t,e){t.uniform1uiv(this.addr,e)}function xE(t,e){t.uniform2uiv(this.addr,e)}function SE(t,e){t.uniform3uiv(this.addr,e)}function ME(t,e){t.uniform4uiv(this.addr,e)}function wE(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||H0,s[o])}function EE(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||G0,s[o])}function TE(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||j0,s[o])}function bE(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||V0,s[o])}function AE(t){switch(t){case 5126:return lE;case 35664:return cE;case 35665:return uE;case 35666:return dE;case 35674:return hE;case 35675:return fE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return _E;case 35669:case 35673:return vE;case 5125:return yE;case 36294:return xE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return bE}}class CE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aE(n.type)}}class RE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AE(n.type)}}class PE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function DE(t,e,n){const i=t.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sm(n,c===void 0?new CE(a,t,e):new RE(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new PE(a),Sm(n,f)),n=f}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);DE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LE=37297;let NE=0;function IE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const wm=new Xe;function UE(t){et._getMatrix(wm,et.workingColorSpace,t);const e=`mat3( ${wm.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Ec:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+IE(t.getShaderSource(e),o)}else return r}function FE(t,e){const n=UE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kE(t,e){let n;switch(e){case Jx:n="Linear";break;case eS:n="Reinhard";break;case tS:n="Cineon";break;case nS:n="ACESFilmic";break;case rS:n="AgX";break;case sS:n="Neutral";break;case iS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new O;function OE(){et.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function BE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(VE,jE)}const GE=new Map;function jE(t,e){let n=qe[e];if(n===void 0){const i=GE.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mh(n)}const WE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(WE,XE)}function XE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $E(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function YE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case $s:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function KE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Qx:e="ENVMAP_BLENDING_ADD";break}return e}function ZE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$E(n),c=YE(n),h=qE(n),f=KE(n),d=ZE(n),p=zE(n),v=BE(s),S=r.createProgram();let g,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ro).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ro).join(`
`),u.length>0&&(u+=`
`)):(g=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),u=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?qe.tonemapping_pars_fragment:"",n.toneMapping!==sr?kE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,FE("linearToOutputTexel",n.outputColorSpace),OE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=mh(o),o=Tm(o,n),o=bm(o,n),a=mh(a),a=Tm(a,n),a=bm(a,n),o=Am(o),a=Am(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+g+o,y=_+u+a,D=Mm(r,r.VERTEX_SHADER,x),b=Mm(r,r.FRAGMENT_SHADER,y);r.attachShader(S,D),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(D).trim(),z=r.getShaderInfoLog(b).trim();let Y=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,D,b);else{const ie=Em(r,D,"vertex"),L=Em(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ie+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||z==="")&&(X=!1);X&&(P.diagnostics={runnable:Y,programLog:G,vertexShader:{log:V,prefix:g},fragmentShader:{log:z,prefix:u}})}r.deleteShader(D),r.deleteShader(b),R=new Rl(r,S),w=HE(r,S)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,LE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=b,this}let JE=0;class eT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tT(e),n.set(e,i)),i}}class tT{constructor(e){this.id=JE++,this.code=e,this.usedTimes=0}}function nT(t,e,n,i,r,s,o){const a=new Sf,l=new eT,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,P,G,V){const z=G.fog,Y=V.geometry,X=w.isMeshStandardMaterial?G.environment:null,ie=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),L=ie&&ie.mapping===wc?ie.image.height:null,J=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=re!==void 0?re.length:0;let Re=0;Y.morphAttributes.position!==void 0&&(Re=1),Y.morphAttributes.normal!==void 0&&(Re=2),Y.morphAttributes.color!==void 0&&(Re=3);let He,ne,le,k;if(J){const Ye=ei[J];He=Ye.vertexShader,ne=Ye.fragmentShader}else He=w.vertexShader,ne=w.fragmentShader,l.update(w),le=l.getVertexShaderID(w),k=l.getFragmentShaderID(w);const ee=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),ve=V.isInstancedMesh===!0,_e=V.isBatchedMesh===!0,we=!!w.map,Le=!!w.matcap,ze=!!ie,U=!!w.aoMap,ft=!!w.lightMap,je=!!w.bumpMap,$e=!!w.normalMap,Pe=!!w.displacementMap,Ze=!!w.emissiveMap,ke=!!w.metalnessMap,A=!!w.roughnessMap,E=w.anisotropy>0,$=w.clearcoat>0,F=w.dispersion>0,W=w.iridescence>0,j=w.sheen>0,de=w.transmission>0,fe=E&&!!w.anisotropyMap,Se=$&&!!w.clearcoatMap,Ne=$&&!!w.clearcoatNormalMap,pe=$&&!!w.clearcoatRoughnessMap,Te=W&&!!w.iridescenceMap,N=W&&!!w.iridescenceThicknessMap,Q=j&&!!w.sheenColorMap,q=j&&!!w.sheenRoughnessMap,se=!!w.specularMap,ue=!!w.specularColorMap,Ee=!!w.specularIntensityMap,I=de&&!!w.transmissionMap,xe=de&&!!w.thicknessMap,te=!!w.gradientMap,oe=!!w.alphaMap,be=w.alphaTest>0,Ae=!!w.alphaHash,Ge=!!w.extensions;let vt=sr;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(vt=t.toneMapping);const xt={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:ne,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:k,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:_e,batchingColor:_e&&V._colorsTexture!==null,instancing:ve,instancingColor:ve&&V.instanceColor!==null,instancingMorph:ve&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:eo,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:Le,envMap:ze,envMapMode:ze&&ie.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:ft,bumpMap:je,normalMap:$e,displacementMap:d&&Pe,emissiveMap:Ze,normalMapObjectSpace:$e&&w.normalMapType===cS,normalMapTangentSpace:$e&&w.normalMapType===b0,metalnessMap:ke,roughnessMap:A,anisotropy:E,anisotropyMap:fe,clearcoat:$,clearcoatMap:Se,clearcoatNormalMap:Ne,clearcoatRoughnessMap:pe,dispersion:F,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:N,sheen:j,sheenColorMap:Q,sheenRoughnessMap:q,specularMap:se,specularColorMap:ue,specularIntensityMap:Ee,transmission:de,transmissionMap:I,thicknessMap:xe,gradientMap:te,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:be,alphaHash:Ae,combine:w.combine,mapUv:we&&S(w.map.channel),aoMapUv:U&&S(w.aoMap.channel),lightMapUv:ft&&S(w.lightMap.channel),bumpMapUv:je&&S(w.bumpMap.channel),normalMapUv:$e&&S(w.normalMap.channel),displacementMapUv:Pe&&S(w.displacementMap.channel),emissiveMapUv:Ze&&S(w.emissiveMap.channel),metalnessMapUv:ke&&S(w.metalnessMap.channel),roughnessMapUv:A&&S(w.roughnessMap.channel),anisotropyMapUv:fe&&S(w.anisotropyMap.channel),clearcoatMapUv:Se&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:N&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:q&&S(w.sheenRoughnessMap.channel),specularMapUv:se&&S(w.specularMap.channel),specularColorMapUv:ue&&S(w.specularColorMap.channel),specularIntensityMapUv:Ee&&S(w.specularIntensityMap.channel),transmissionMapUv:I&&S(w.transmissionMap.channel),thicknessMapUv:xe&&S(w.thicknessMap.channel),alphaMapUv:oe&&S(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($e||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(we||oe),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:Ze&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(M,w),x(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const M=v[w.type];let P;if(M){const G=ei[M];P=zS.clone(G.uniforms)}else P=w.uniforms;return P}function D(w,M){let P;for(let G=0,V=h.length;G<V;G++){const z=h[G];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new QE(t,M,w,s),h.push(P)),P}function b(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:D,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:R}}function iT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function rT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,S,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=S,u.group=g),e++,u}function a(f,d,p,v,S,g){const u=o(f,d,p,v,S,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,v,S,g){const u=o(f,d,p,v,S,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||rT),i.length>1&&i.sort(d||Rm),r.length>1&&r.sort(d||Rm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function sT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pm,t.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Qe};break;case"SpotLight":n={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function aT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lT=0;function cT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uT(t){const e=new oT,n=aT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ht,o=new ht;function a(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,S=0,g=0,u=0,_=0,x=0,y=0,D=0,b=0,C=0;c.sort(cT);for(let w=0,M=c.length;w<M;w++){const P=c[w],G=P.color,V=P.intensity,z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*V,f+=G.g*V,d+=G.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);C++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,L=n.get(P);L.shadowIntensity=ie.intensity,L.shadowBias=ie.bias,L.shadowNormalBias=ie.normalBias,L.shadowRadius=ie.radius,L.shadowMapSize=ie.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=P.shadow.matrix,_++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(V),X.distance=z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[S]=X;const ie=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,ie.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[S]=ie.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=ie.intensity,L.shadowBias=ie.bias,L.shadowNormalBias=ie.normalBias,L.shadowRadius=ie.radius,L.shadowMapSize=ie.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=Y,y++}S++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(G).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ie=P.shadow,L=n.get(P);L.shadowIntensity=ie.intensity,L.shadowBias=ie.bias,L.shadowNormalBias=ie.normalBias,L.shadowRadius=ie.radius,L.shadowMapSize=ie.mapSize,L.shadowCameraNear=ie.camera.near,L.shadowCameraFar=ie.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=P.shadow.matrix,x++}i.point[v]=X,v++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[u]=X,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==S||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==D||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+D-b,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,R.directionalLength=p,R.pointLength=v,R.spotLength=S,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=D,R.numLightProbes=C,i.version=lT++)}function l(c,h){let f=0,d=0,p=0,v=0,S=0;const g=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function Dm(t){const e=new uT(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dm(t),e.set(r,[a])):s>=o.length?(a=new Dm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class hT extends pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fT extends pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
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
}`;function gT(t,e,n){let i=new Mf;const r=new Oe,s=new Oe,o=new bt,a=new hT({depthPacking:lS}),l=new fT,c={},h=n.maxTextureSize,f={[cr]:hn,[hn]:cr,[_i]:_i},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Be(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let u=this.type;this.render=function(b,C,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),G=t.state;G.setBlending(rr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=u!==fi&&this.type===fi,z=u===fi&&this.type!==fi;for(let Y=0,X=b.length;Y<X;Y++){const ie=b[Y],L=ie.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const J=L.getFrameExtents();if(r.multiply(J),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,L.mapSize.y=s.y)),L.map===null||V===!0||z===!0){const he=this.type!==fi?{minFilter:qn,magFilter:qn}:{};L.map!==null&&L.map.dispose(),L.map=new zr(r.x,r.y,he),L.map.texture.name=ie.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const re=L.getViewportCount();for(let he=0;he<re;he++){const Re=L.getViewport(he);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),G.viewport(o),L.updateMatrices(ie,he),i=L.getFrustum(),y(C,R,L.camera,ie,this.type)}L.isPointLightShadow!==!0&&this.type===fi&&_(L,R),L.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(w,M,P)};function _(b,C){const R=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,R,d,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,R,p,S,null)}function x(b,C,R,w){let M=null;const P=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,V=C.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let Y=z[V];Y===void 0&&(Y=M.clone(),z[V]=Y,C.addEventListener("dispose",D)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,w===fi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=R}return M}function y(b,C,R,w,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===fi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const V=e.update(b),z=b.material;if(Array.isArray(z)){const Y=V.groups;for(let X=0,ie=Y.length;X<ie;X++){const L=Y[X],J=z[L.materialIndex];if(J&&J.visible){const re=x(b,J,w,M);b.onBeforeShadow(t,b,C,R,V,re,L),t.renderBufferDirect(R,null,V,re,b,L),b.onAfterShadow(t,b,C,R,V,re,L)}}}else if(z.visible){const Y=x(b,z,w,M);b.onBeforeShadow(t,b,C,R,V,Y,null),t.renderBufferDirect(R,null,V,Y,b,null),b.onAfterShadow(t,b,C,R,V,Y,null)}}const G=b.children;for(let V=0,z=G.length;V<z;V++)y(G[V],C,R,w,M)}function D(b){b.target.removeEventListener("dispose",D);for(const R in c){const w=c[R],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const _T={[Pd]:Dd,[Ld]:Ud,[Nd]:Fd,[Ws]:Id,[Dd]:Pd,[Ud]:Ld,[Fd]:Nd,[Id]:Ws};function vT(t,e){function n(){let I=!1;const xe=new bt;let te=null;const oe=new bt(0,0,0,0);return{setMask:function(be){te!==be&&!I&&(t.colorMask(be,be,be,be),te=be)},setLocked:function(be){I=be},setClear:function(be,Ae,Ge,vt,xt){xt===!0&&(be*=vt,Ae*=vt,Ge*=vt),xe.set(be,Ae,Ge,vt),oe.equals(xe)===!1&&(t.clearColor(be,Ae,Ge,vt),oe.copy(xe))},reset:function(){I=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let I=!1,xe=!1,te=null,oe=null,be=null;return{setReversed:function(Ae){if(xe!==Ae){const Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const vt=be;be=null,this.setClear(vt)}xe=Ae},getReversed:function(){return xe},setTest:function(Ae){Ae?ee(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(Ae){te!==Ae&&!I&&(t.depthMask(Ae),te=Ae)},setFunc:function(Ae){if(xe&&(Ae=_T[Ae]),oe!==Ae){switch(Ae){case Pd:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case Ld:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case Nd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){be!==Ae&&(xe&&(Ae=1-Ae),t.clearDepth(Ae),be=Ae)},reset:function(){I=!1,te=null,oe=null,be=null,xe=!1}}}function r(){let I=!1,xe=null,te=null,oe=null,be=null,Ae=null,Ge=null,vt=null,xt=null;return{setTest:function(Ye){I||(Ye?ee(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ye){xe!==Ye&&!I&&(t.stencilMask(Ye),xe=Ye)},setFunc:function(Ye,fn,Fn){(te!==Ye||oe!==fn||be!==Fn)&&(t.stencilFunc(Ye,fn,Fn),te=Ye,oe=fn,be=Fn)},setOp:function(Ye,fn,Fn){(Ae!==Ye||Ge!==fn||vt!==Fn)&&(t.stencilOp(Ye,fn,Fn),Ae=Ye,Ge=fn,vt=Fn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){xt!==Ye&&(t.clearStencil(Ye),xt=Ye)},reset:function(){I=!1,xe=null,te=null,oe=null,be=null,Ae=null,Ge=null,vt=null,xt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],v=null,S=!1,g=null,u=null,_=null,x=null,y=null,D=null,b=null,C=new Qe(0,0,0),R=0,w=!1,M=null,P=null,G=null,V=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(L)[1]),X=ie>=1):L.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),X=ie>=2);let J=null,re={};const he=t.getParameter(t.SCISSOR_BOX),Re=t.getParameter(t.VIEWPORT),He=new bt().fromArray(he),ne=new bt().fromArray(Re);function le(I,xe,te,oe){const be=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(I,Ae),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<te;Ge++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(xe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Ae}const k={};k[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(t.DEPTH_TEST),o.setFunc(Ws),je(!1),$e(kp),ee(t.CULL_FACE),U(rr);function ee(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function ae(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function ve(I,xe){return f[I]!==xe?(t.bindFramebuffer(I,xe),f[I]=xe,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function _e(I,xe){let te=p,oe=!1;if(I){te=d.get(xe),te===void 0&&(te=[],d.set(xe,te));const be=I.textures;if(te.length!==be.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,Ge=be.length;Ae<Ge;Ae++)te[Ae]=t.COLOR_ATTACHMENT0+Ae;te.length=be.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function we(I){return v!==I?(t.useProgram(I),v=I,!0):!1}const Le={[Er]:t.FUNC_ADD,[Ix]:t.FUNC_SUBTRACT,[Ux]:t.FUNC_REVERSE_SUBTRACT};Le[Fx]=t.MIN,Le[kx]=t.MAX;const ze={[Ox]:t.ZERO,[zx]:t.ONE,[Bx]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[Xx]:t.SRC_ALPHA_SATURATE,[jx]:t.DST_COLOR,[Vx]:t.DST_ALPHA,[Hx]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[Wx]:t.ONE_MINUS_DST_COLOR,[Gx]:t.ONE_MINUS_DST_ALPHA,[$x]:t.CONSTANT_COLOR,[Yx]:t.ONE_MINUS_CONSTANT_COLOR,[qx]:t.CONSTANT_ALPHA,[Kx]:t.ONE_MINUS_CONSTANT_ALPHA};function U(I,xe,te,oe,be,Ae,Ge,vt,xt,Ye){if(I===rr){S===!0&&(ae(t.BLEND),S=!1);return}if(S===!1&&(ee(t.BLEND),S=!0),I!==Nx){if(I!==g||Ye!==w){if((u!==Er||y!==Er)&&(t.blendEquation(t.FUNC_ADD),u=Er,y=Er),Ye)switch(I){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ad:t.blendFunc(t.ONE,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ad:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,x=null,D=null,b=null,C.set(0,0,0),R=0,g=I,w=Ye}return}be=be||xe,Ae=Ae||te,Ge=Ge||oe,(xe!==u||be!==y)&&(t.blendEquationSeparate(Le[xe],Le[be]),u=xe,y=be),(te!==_||oe!==x||Ae!==D||Ge!==b)&&(t.blendFuncSeparate(ze[te],ze[oe],ze[Ae],ze[Ge]),_=te,x=oe,D=Ae,b=Ge),(vt.equals(C)===!1||xt!==R)&&(t.blendColor(vt.r,vt.g,vt.b,xt),C.copy(vt),R=xt),g=I,w=!1}function ft(I,xe){I.side===_i?ae(t.CULL_FACE):ee(t.CULL_FACE);let te=I.side===hn;xe&&(te=!te),je(te),I.blending===Us&&I.transparent===!1?U(rr):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const oe=I.stencilWrite;a.setTest(oe),oe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ze(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function $e(I){I!==Dx?(ee(t.CULL_FACE),I!==P&&(I===kp?t.cullFace(t.BACK):I===Lx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),P=I}function Pe(I){I!==G&&(X&&t.lineWidth(I),G=I)}function Ze(I,xe,te){I?(ee(t.POLYGON_OFFSET_FILL),(V!==xe||z!==te)&&(t.polygonOffset(xe,te),V=xe,z=te)):ae(t.POLYGON_OFFSET_FILL)}function ke(I){I?ee(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+Y-1),J!==I&&(t.activeTexture(I),J=I)}function E(I,xe,te){te===void 0&&(J===null?te=t.TEXTURE0+Y-1:te=J);let oe=re[te];oe===void 0&&(oe={type:void 0,texture:void 0},re[te]=oe),(oe.type!==I||oe.texture!==xe)&&(J!==te&&(t.activeTexture(te),J=te),t.bindTexture(I,xe||k[I]),oe.type=I,oe.texture=xe)}function $(){const I=re[J];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(I){He.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function q(I){ne.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ne.copy(I))}function se(I,xe){let te=c.get(xe);te===void 0&&(te=new WeakMap,c.set(xe,te));let oe=te.get(I);oe===void 0&&(oe=t.getUniformBlockIndex(xe,I.name),te.set(I,oe))}function ue(I,xe){const oe=c.get(xe).get(I);l.get(xe)!==oe&&(t.uniformBlockBinding(xe,oe,I.__bindingPointIndex),l.set(xe,oe))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},J=null,re={},f={},d=new WeakMap,p=[],v=null,S=!1,g=null,u=null,_=null,x=null,y=null,D=null,b=null,C=new Qe(0,0,0),R=0,w=!1,M=null,P=null,G=null,V=null,z=null,He.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ae,bindFramebuffer:ve,drawBuffers:_e,useProgram:we,setBlending:U,setMaterial:ft,setFlipSided:je,setCullFace:$e,setLineWidth:Pe,setPolygonOffset:Ze,setScissorTest:ke,activeTexture:A,bindTexture:E,unbindTexture:$,compressedTexImage2D:F,compressedTexImage3D:W,texImage2D:Te,texImage3D:N,updateUBOMapping:se,uniformBlockBinding:ue,texStorage2D:Ne,texStorage3D:pe,texSubImage2D:j,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:Q,viewport:q,reset:Ee}}function Lm(t,e,n,i){const r=yT(i);switch(n){case y0:return t*e;case S0:return t*e;case M0:return t*e*2;case w0:return t*e/r.components*r.byteLength;case vf:return t*e/r.components*r.byteLength;case E0:return t*e*2/r.components*r.byteLength;case yf:return t*e*2/r.components*r.byteLength;case x0:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case xf:return t*e*4/r.components*r.byteLength;case wl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Hd:case Gd:return Math.max(t,8)*Math.max(e,8)/2;case Wd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case T0:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yT(t){switch(t){case Pi:case g0:return{byteLength:1,components:1};case ia:case _0:case ca:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case Or:case mf:case xi:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,E){return p?new OffscreenCanvas(A,E):tc("canvas")}function S(A,E,$){let F=1;const W=ke(A);if((W.width>$||W.height>$)&&(F=$/Math.max(W.width,W.height)),F<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const j=Math.floor(F*W.width),de=Math.floor(F*W.height);f===void 0&&(f=v(j,de));const fe=E?v(j,de):f;return fe.width=j,fe.height=de,fe.getContext("2d").drawImage(A,0,0,j,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+j+"x"+de+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function g(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,E,$,F,W=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=E;if(E===t.RED&&($===t.FLOAT&&(j=t.R32F),$===t.HALF_FLOAT&&(j=t.R16F),$===t.UNSIGNED_BYTE&&(j=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(j=t.R8UI),$===t.UNSIGNED_SHORT&&(j=t.R16UI),$===t.UNSIGNED_INT&&(j=t.R32UI),$===t.BYTE&&(j=t.R8I),$===t.SHORT&&(j=t.R16I),$===t.INT&&(j=t.R32I)),E===t.RG&&($===t.FLOAT&&(j=t.RG32F),$===t.HALF_FLOAT&&(j=t.RG16F),$===t.UNSIGNED_BYTE&&(j=t.RG8)),E===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(j=t.RG8UI),$===t.UNSIGNED_SHORT&&(j=t.RG16UI),$===t.UNSIGNED_INT&&(j=t.RG32UI),$===t.BYTE&&(j=t.RG8I),$===t.SHORT&&(j=t.RG16I),$===t.INT&&(j=t.RG32I)),E===t.RGB_INTEGER&&($===t.UNSIGNED_BYTE&&(j=t.RGB8UI),$===t.UNSIGNED_SHORT&&(j=t.RGB16UI),$===t.UNSIGNED_INT&&(j=t.RGB32UI),$===t.BYTE&&(j=t.RGB8I),$===t.SHORT&&(j=t.RGB16I),$===t.INT&&(j=t.RGB32I)),E===t.RGBA_INTEGER&&($===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),$===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),$===t.UNSIGNED_INT&&(j=t.RGBA32UI),$===t.BYTE&&(j=t.RGBA8I),$===t.SHORT&&(j=t.RGBA16I),$===t.INT&&(j=t.RGBA32I)),E===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),E===t.RGBA){const de=W?Ec:et.getTransfer(F);$===t.FLOAT&&(j=t.RGBA32F),$===t.HALF_FLOAT&&(j=t.RGBA16F),$===t.UNSIGNED_BYTE&&(j=de===ot?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,E){let $;return A?E===null||E===Or||E===Ys?$=t.DEPTH24_STENCIL8:E===xi?$=t.DEPTH32F_STENCIL8:E===ia&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Or||E===Ys?$=t.DEPTH_COMPONENT24:E===xi?$=t.DEPTH_COMPONENT32F:E===ia&&($=t.DEPTH_COMPONENT16),$}function D(A,E){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==qn&&A.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function b(A){const E=A.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&h.delete(E)}function C(A){const E=A.target;E.removeEventListener("dispose",C),M(E)}function R(A){const E=i.get(A);if(E.__webglInit===void 0)return;const $=A.source,F=d.get($);if(F){const W=F[E.__cacheKey];W.usedTimes--,W.usedTimes===0&&w(A),Object.keys(F).length===0&&d.delete($)}i.remove(A)}function w(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const $=A.source,F=d.get($);delete F[E.__cacheKey],o.memory.textures--}function M(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(E.__webglFramebuffer[F]))for(let W=0;W<E.__webglFramebuffer[F].length;W++)t.deleteFramebuffer(E.__webglFramebuffer[F][W]);else t.deleteFramebuffer(E.__webglFramebuffer[F]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[F])}else{if(Array.isArray(E.__webglFramebuffer))for(let F=0;F<E.__webglFramebuffer.length;F++)t.deleteFramebuffer(E.__webglFramebuffer[F]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let F=0;F<E.__webglColorRenderbuffer.length;F++)E.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[F]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=A.textures;for(let F=0,W=$.length;F<W;F++){const j=i.get($[F]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove($[F])}i.remove(A)}let P=0;function G(){P=0}function V(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function z(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Y(A,E){const $=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne($,A,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function X(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){ne($,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function ie(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){ne($,A,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function L(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){le($,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const J={[zd]:t.REPEAT,[Rr]:t.CLAMP_TO_EDGE,[Bd]:t.MIRRORED_REPEAT},re={[qn]:t.NEAREST,[oS]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[tu]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},he={[uS]:t.NEVER,[gS]:t.ALWAYS,[dS]:t.LESS,[A0]:t.LEQUAL,[hS]:t.EQUAL,[mS]:t.GEQUAL,[fS]:t.GREATER,[pS]:t.NOTEQUAL};function Re(A,E){if(E.type===xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===tu||E.magFilter===Fa||E.magFilter===Pr||E.minFilter===ii||E.minFilter===tu||E.minFilter===Fa||E.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,J[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,J[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,J[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,re[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==Fa&&E.minFilter!==Pr||E.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function He(A,E){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const F=E.source;let W=d.get(F);W===void 0&&(W={},d.set(F,W));const j=z(E);if(j!==A.__cacheKey){W[j]===void 0&&(W[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),W[j].usedTimes++;const de=W[A.__cacheKey];de!==void 0&&(W[A.__cacheKey].usedTimes--,de.usedTimes===0&&w(E)),A.__cacheKey=j,A.__webglTexture=W[j].texture}return $}function ne(A,E,$){let F=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(F=t.TEXTURE_3D);const W=He(A,E),j=E.source;n.bindTexture(F,A.__webglTexture,t.TEXTURE0+$);const de=i.get(j);if(j.version!==de.__version||W===!0){n.activeTexture(t.TEXTURE0+$);const fe=et.getPrimaries(et.workingColorSpace),Se=E.colorSpace===Xi?null:et.getPrimaries(E.colorSpace),Ne=E.colorSpace===Xi||fe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let pe=S(E.image,!1,r.maxTextureSize);pe=Ze(E,pe);const Te=s.convert(E.format,E.colorSpace),N=s.convert(E.type);let Q=x(E.internalFormat,Te,N,E.colorSpace,E.isVideoTexture);Re(F,E);let q;const se=E.mipmaps,ue=E.isVideoTexture!==!0,Ee=de.__version===void 0||W===!0,I=j.dataReady,xe=D(E,pe);if(E.isDepthTexture)Q=y(E.format===qs,E.type),Ee&&(ue?n.texStorage2D(t.TEXTURE_2D,1,Q,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Q,pe.width,pe.height,0,Te,N,null));else if(E.isDataTexture)if(se.length>0){ue&&Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Q,se[0].width,se[0].height);for(let te=0,oe=se.length;te<oe;te++)q=se[te],ue?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,q.width,q.height,Te,N,q.data):n.texImage2D(t.TEXTURE_2D,te,Q,q.width,q.height,0,Te,N,q.data);E.generateMipmaps=!1}else ue?(Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Q,pe.width,pe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Te,N,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Q,pe.width,pe.height,0,Te,N,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ue&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Q,se[0].width,se[0].height,pe.depth);for(let te=0,oe=se.length;te<oe;te++)if(q=se[te],E.format!==Xn)if(Te!==null)if(ue){if(I)if(E.layerUpdates.size>0){const be=Lm(q.width,q.height,E.format,E.type);for(const Ae of E.layerUpdates){const Ge=q.data.subarray(Ae*be/q.data.BYTES_PER_ELEMENT,(Ae+1)*be/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Ae,q.width,q.height,1,Te,Ge)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,q.width,q.height,pe.depth,Te,q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Q,q.width,q.height,pe.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,q.width,q.height,pe.depth,Te,N,q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Q,q.width,q.height,pe.depth,0,Te,N,q.data)}else{ue&&Ee&&n.texStorage2D(t.TEXTURE_2D,xe,Q,se[0].width,se[0].height);for(let te=0,oe=se.length;te<oe;te++)q=se[te],E.format!==Xn?Te!==null?ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,q.width,q.height,Te,q.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Q,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,q.width,q.height,Te,N,q.data):n.texImage2D(t.TEXTURE_2D,te,Q,q.width,q.height,0,Te,N,q.data)}else if(E.isDataArrayTexture)if(ue){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Q,pe.width,pe.height,pe.depth),I)if(E.layerUpdates.size>0){const te=Lm(pe.width,pe.height,E.format,E.type);for(const oe of E.layerUpdates){const be=pe.data.subarray(oe*te/pe.data.BYTES_PER_ELEMENT,(oe+1)*te/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,Te,N,be)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,N,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Q,pe.width,pe.height,pe.depth,0,Te,N,pe.data);else if(E.isData3DTexture)ue?(Ee&&n.texStorage3D(t.TEXTURE_3D,xe,Q,pe.width,pe.height,pe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,N,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Q,pe.width,pe.height,pe.depth,0,Te,N,pe.data);else if(E.isFramebufferTexture){if(Ee)if(ue)n.texStorage2D(t.TEXTURE_2D,xe,Q,pe.width,pe.height);else{let te=pe.width,oe=pe.height;for(let be=0;be<xe;be++)n.texImage2D(t.TEXTURE_2D,be,Q,te,oe,0,Te,N,null),te>>=1,oe>>=1}}else if(se.length>0){if(ue&&Ee){const te=ke(se[0]);n.texStorage2D(t.TEXTURE_2D,xe,Q,te.width,te.height)}for(let te=0,oe=se.length;te<oe;te++)q=se[te],ue?I&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,Te,N,q):n.texImage2D(t.TEXTURE_2D,te,Q,Te,N,q);E.generateMipmaps=!1}else if(ue){if(Ee){const te=ke(pe);n.texStorage2D(t.TEXTURE_2D,xe,Q,te.width,te.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,N,pe)}else n.texImage2D(t.TEXTURE_2D,0,Q,Te,N,pe);g(E)&&u(F),de.__version=j.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function le(A,E,$){if(E.image.length!==6)return;const F=He(A,E),W=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+$);const j=i.get(W);if(W.version!==j.__version||F===!0){n.activeTexture(t.TEXTURE0+$);const de=et.getPrimaries(et.workingColorSpace),fe=E.colorSpace===Xi?null:et.getPrimaries(E.colorSpace),Se=E.colorSpace===Xi||de===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Ne&&!pe?Te[oe]=S(E.image[oe],!0,r.maxCubemapSize):Te[oe]=pe?E.image[oe].image:E.image[oe],Te[oe]=Ze(E,Te[oe]);const N=Te[0],Q=s.convert(E.format,E.colorSpace),q=s.convert(E.type),se=x(E.internalFormat,Q,q,E.colorSpace),ue=E.isVideoTexture!==!0,Ee=j.__version===void 0||F===!0,I=W.dataReady;let xe=D(E,N);Re(t.TEXTURE_CUBE_MAP,E);let te;if(Ne){ue&&Ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,se,N.width,N.height);for(let oe=0;oe<6;oe++){te=Te[oe].mipmaps;for(let be=0;be<te.length;be++){const Ae=te[be];E.format!==Xn?Q!==null?ue?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Ae.width,Ae.height,Q,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,Ae.width,Ae.height,Q,q,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,se,Ae.width,Ae.height,0,Q,q,Ae.data)}}}else{if(te=E.mipmaps,ue&&Ee){te.length>0&&xe++;const oe=ke(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,se,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Q,q,Te[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,se,Te[oe].width,Te[oe].height,0,Q,q,Te[oe].data);for(let be=0;be<te.length;be++){const Ge=te[be].image[oe].image;ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,Ge.width,Ge.height,Q,q,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,se,Ge.width,Ge.height,0,Q,q,Ge.data)}}else{ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Q,q,Te[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,se,Q,q,Te[oe]);for(let be=0;be<te.length;be++){const Ae=te[be];ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,Q,q,Ae.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,se,Q,q,Ae.image[oe])}}}g(E)&&u(t.TEXTURE_CUBE_MAP),j.__version=W.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function k(A,E,$,F,W,j){const de=s.convert($.format,$.colorSpace),fe=s.convert($.type),Se=x($.internalFormat,de,fe,$.colorSpace),Ne=i.get(E),pe=i.get($);if(pe.__renderTarget=E,!Ne.__hasExternalTextures){const Te=Math.max(1,E.width>>j),N=Math.max(1,E.height>>j);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,j,Se,Te,N,E.depth,0,de,fe,null):n.texImage2D(W,j,Se,Te,N,0,de,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,W,pe.__webglTexture,0,je(E)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,W,pe.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(A,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const F=E.depthTexture,W=F&&F.isDepthTexture?F.type:null,j=y(E.stencilBuffer,W),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=je(E);$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,j,E.width,E.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,j,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,j,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,A)}else{const F=E.textures;for(let W=0;W<F.length;W++){const j=F[W],de=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),Se=x(j.internalFormat,de,fe,j.colorSpace),Ne=je(E);$&&$e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,Se,E.width,E.height):$e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=i.get(E.depthTexture);F.__renderTarget=E,(!F.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const W=F.__webglTexture,j=je(E);if(E.depthTexture.format===Fs)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0);else if(E.depthTexture.format===qs)$e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function ve(A){const E=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const F=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),F){const W=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,F.removeEventListener("dispose",W)};F.addEventListener("dispose",W),E.__depthDisposeCallback=W}E.__boundDepthTexture=F}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ae(E.__webglFramebuffer,A)}else if($){E.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[F]),E.__webglDepthbuffer[F]===void 0)E.__webglDepthbuffer[F]=t.createRenderbuffer(),ee(E.__webglDepthbuffer[F],A,!1);else{const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,j)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ee(E.__webglDepthbuffer,A,!1);else{const F=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,W)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(A,E,$){const F=i.get(A);E!==void 0&&k(F.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&ve(A)}function we(A){const E=A.texture,$=i.get(A),F=i.get(E);A.addEventListener("dispose",C);const W=A.textures,j=A.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=E.version,o.memory.textures++),j){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let Se=0;Se<E.mipmaps.length;Se++)$.__webglFramebuffer[fe][Se]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(de)for(let fe=0,Se=W.length;fe<Se;fe++){const Ne=i.get(W[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&$e(A)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<W.length;fe++){const Se=W[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Ne=s.convert(Se.format,Se.colorSpace),pe=s.convert(Se.type),Te=x(Se.internalFormat,Ne,pe,Se.colorSpace,A.isXRRenderTarget===!0),N=je(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,N,Te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ee($.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),Re(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)k($.__webglFramebuffer[fe][Se],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else k($.__webglFramebuffer[fe],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let fe=0,Se=W.length;fe<Se;fe++){const Ne=W[fe],pe=i.get(Ne);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Re(t.TEXTURE_2D,Ne),k($.__webglFramebuffer,A,Ne,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Ne)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,F.__webglTexture),Re(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)k($.__webglFramebuffer[Se],A,E,t.COLOR_ATTACHMENT0,fe,Se);else k($.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,fe,0);g(E)&&u(fe),n.unbindTexture()}A.depthBuffer&&ve(A)}function Le(A){const E=A.textures;for(let $=0,F=E.length;$<F;$++){const W=E[$];if(g(W)){const j=_(A),de=i.get(W).__webglTexture;n.bindTexture(j,de),u(j),n.unbindTexture()}}}const ze=[],U=[];function ft(A){if(A.samples>0){if($e(A)===!1){const E=A.textures,$=A.width,F=A.height;let W=t.COLOR_BUFFER_BIT;const j=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),fe=E.length>1;if(fe)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Se]);const Ne=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,$,F,0,0,$,F,W,t.NEAREST),l===!0&&(ze.length=0,U.length=0,ze.push(t.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ze.push(j),U.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,de.__webglColorRenderbuffer[Se]);const Ne=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function je(A){return Math.min(r.maxSamples,A.samples)}function $e(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Ze(A,E){const $=A.colorSpace,F=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||$!==eo&&$!==Xi&&(et.getTransfer($)===ot?(F!==Xn||W!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function ke(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=L,this.rebindTextures=_e,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=k,this.useMultisampledRTT=$e}function ST(t,e){function n(i,r=Xi){let s;const o=et.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===gf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===v0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===g0)return t.BYTE;if(i===_0)return t.SHORT;if(i===ia)return t.UNSIGNED_SHORT;if(i===mf)return t.INT;if(i===Or)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===ca)return t.HALF_FLOAT;if(i===y0)return t.ALPHA;if(i===x0)return t.RGB;if(i===Xn)return t.RGBA;if(i===S0)return t.LUMINANCE;if(i===M0)return t.LUMINANCE_ALPHA;if(i===Fs)return t.DEPTH_COMPONENT;if(i===qs)return t.DEPTH_STENCIL;if(i===w0)return t.RED;if(i===vf)return t.RED_INTEGER;if(i===E0)return t.RG;if(i===yf)return t.RG_INTEGER;if(i===xf)return t.RGBA_INTEGER;if(i===wl||i===El||i===Tl||i===bl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hd||i===Vd||i===Gd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===Xd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===Xd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yd||i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===lh||i===ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===T0||i===uh||i===dh||i===hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class MT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
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

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:ET,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AT extends jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,v=null;const S=new bT,g=n.getContextAttributes();let u=null,_=null;const x=[],y=[],D=new Oe;let b=null;const C=new Rn;C.viewport=new bt;const R=new Rn;R.viewport=new bt;const w=[C,R],M=new MT;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=x[ne];return le===void 0&&(le=new Ru,x[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=x[ne];return le===void 0&&(le=new Ru,x[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=x[ne];return le===void 0&&(le=new Ru,x[ne]=le),le.getHandSpace()};function V(ne){const le=y.indexOf(ne.inputSource);if(le===-1)return;const k=x[le];k!==void 0&&(k.update(ne.inputSource,ne.frame,c||o),k.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<x.length;ne++){const le=y[ne];le!==null&&(y[ne]=null,x[ne].disconnect(le))}P=null,G=null,S.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new zr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,k=null,ee=null;g.depth&&(ee=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?qs:Fs,k=g.stencil?Ys:Or);const ae={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new zr(d.textureWidth,d.textureHeight,{format:Xn,type:Pi,depthTexture:new B0(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ne){for(let le=0;le<ne.removed.length;le++){const k=ne.removed[le],ee=y.indexOf(k);ee>=0&&(y[ee]=null,x[ee].disconnect(k))}for(let le=0;le<ne.added.length;le++){const k=ne.added[le];let ee=y.indexOf(k);if(ee===-1){for(let ve=0;ve<x.length;ve++)if(ve>=y.length){y.push(k),ee=ve;break}else if(y[ve]===null){y[ve]=k,ee=ve;break}if(ee===-1)break}const ae=x[ee];ae&&ae.connect(k)}}const X=new O,ie=new O;function L(ne,le,k){X.setFromMatrixPosition(le.matrixWorld),ie.setFromMatrixPosition(k.matrixWorld);const ee=X.distanceTo(ie),ae=le.projectionMatrix.elements,ve=k.projectionMatrix.elements,_e=ae[14]/(ae[10]-1),we=ae[14]/(ae[10]+1),Le=(ae[9]+1)/ae[5],ze=(ae[9]-1)/ae[5],U=(ae[8]-1)/ae[0],ft=(ve[8]+1)/ve[0],je=_e*U,$e=_e*ft,Pe=ee/(-U+ft),Ze=Pe*-U;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ze),ne.translateZ(Pe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ae[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ke=_e+Pe,A=we+Pe,E=je-Ze,$=$e+(ee-Ze),F=Le*we/A*ke,W=ze*we/A*ke;ne.projectionMatrix.makePerspective(E,$,F,W,ke,A),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function J(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let le=ne.near,k=ne.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(k=S.depthFar)),M.near=R.near=C.near=le,M.far=R.far=C.far=k,(P!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,G=M.far),C.layers.mask=ne.layers.mask|2,R.layers.mask=ne.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;const ee=ne.parent,ae=M.cameras;J(M,ee);for(let ve=0;ve<ae.length;ve++)J(ae[ve],ee);ae.length===2?L(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),re(ne,M,ee)};function re(ne,le,k){k===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(k.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ph*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let he=null;function Re(ne,le){if(h=le.getViewerPose(c||o),v=le,h!==null){const k=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ee=!1;k.length!==M.cameras.length&&(M.cameras.length=0,ee=!0);for(let ve=0;ve<k.length;ve++){const _e=k[ve];let we=null;if(p!==null)we=p.getViewport(_e);else{const ze=f.getViewSubImage(d,_e);we=ze.viewport,ve===0&&(e.setRenderTargetTextures(_,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let Le=w[ve];Le===void 0&&(Le=new Rn,Le.layers.enable(ve),Le.viewport=new bt,w[ve]=Le),Le.matrix.fromArray(_e.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(_e.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(we.x,we.y,we.width,we.height),ve===0&&(M.matrix.copy(Le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ee===!0&&M.cameras.push(Le)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ve=f.getDepthInformation(k[0]);ve&&ve.isValid&&ve.texture&&S.init(e,ve,r.renderState)}}for(let k=0;k<x.length;k++){const ee=y[k],ae=x[k];ee!==null&&ae!==void 0&&ae.update(ee,le,c||o)}he&&he(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const He=new O0;He.setAnimationLoop(Re),this.setAnimationLoop=function(ne){he=ne},this.dispose=function(){}}}const xr=new oi,CT=new ht;function RT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,U0(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,_,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),S(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,_,x):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===hn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===hn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,y=_.envMapRotation;x&&(g.envMap.value=x,xr.copy(y),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(xr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,x){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=x*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(v(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",g));const D=x.program;i.updateUBOMapping(_,D);const b=e.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const x=f();_.__bindingPointIndex=x;const y=t.createBuffer(),D=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],y=_.uniforms,D=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,C=y.length;b<C;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,M=R.length;w<M;w++){const P=R[w];if(p(P,b,w,D)===!0){const G=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let Y=0;Y<V.length;Y++){const X=V[Y],ie=S(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,G+z,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,z),z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,y,D){const b=_.value,C=x+"_"+y;if(D[C]===void 0)return typeof b=="number"||typeof b=="boolean"?D[C]=b:D[C]=b.clone(),!0;{const R=D[C];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return D[C]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function v(_){const x=_.uniforms;let y=0;const D=16;for(let C=0,R=x.length;C<R;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,P=w.length;M<P;M++){const G=w[M],V=Array.isArray(G.value)?G.value:[G.value];for(let z=0,Y=V.length;z<Y;z++){const X=V[z],ie=S(X),L=y%D,J=L%ie.boundary,re=L+J;y+=J,re!==0&&D-re<ie.storage&&(y+=D-re),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ie.storage}}}const b=y%D;return b>0&&(y+=D-b),_.__size=y,_.__cache={},this}function S(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class DT{constructor(e={}){const{canvas:n=yS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=sr,this.toneMappingExposure=1;const y=this;let D=!1,b=0,C=0,R=null,w=-1,M=null;const P=new bt,G=new bt;let V=null;const z=new Qe(0);let Y=0,X=n.width,ie=n.height,L=1,J=null,re=null;const he=new bt(0,0,X,ie),Re=new bt(0,0,X,ie);let He=!1;const ne=new Mf;let le=!1,k=!1;const ee=new ht,ae=new ht,ve=new O,_e=new bt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ze(){return R===null?L:1}let U=i;function ft(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),U===null){const B="webgl2";if(U=ft(B,T),U===null)throw ft(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let je,$e,Pe,Ze,ke,A,E,$,F,W,j,de,fe,Se,Ne,pe,Te,N,Q,q,se,ue,Ee,I;function xe(){je=new Fw(U),je.init(),ue=new ST(U,je),$e=new Pw(U,je,e,ue),Pe=new vT(U,je),$e.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),Ze=new zw(U),ke=new iT,A=new xT(U,je,Pe,ke,$e,ue,Ze),E=new Lw(y),$=new Uw(y),F=new XS(U),Ee=new Cw(U,F),W=new kw(U,F,Ze,Ee),j=new Hw(U,W,F,Ze),Q=new Bw(U,$e,A),pe=new Dw(ke),de=new nT(y,E,$,je,$e,Ee,pe),fe=new RT(y,ke),Se=new sT,Ne=new dT(je),N=new Aw(y,E,$,Pe,j,p,l),Te=new gT(y,j,$e),I=new PT(U,Ze,$e,Pe),q=new Rw(U,je,Ze),se=new Ow(U,je,Ze),Ze.programs=de.programs,y.capabilities=$e,y.extensions=je,y.properties=ke,y.renderLists=Se,y.shadowMap=Te,y.state=Pe,y.info=Ze}xe();const te=new AT(y,U);this.xr=te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(X,ie,!1))},this.getSize=function(T){return T.set(X,ie)},this.setSize=function(T,B,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ie=B,n.width=Math.floor(T*L),n.height=Math.floor(B*L),K===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*L,ie*L).floor()},this.setDrawingBufferSize=function(T,B,K){X=T,ie=B,L=K,n.width=Math.floor(T*K),n.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,B,K,Z){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,B,K,Z),Pe.viewport(P.copy(he).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,B,K,Z){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,B,K,Z),Pe.scissor(G.copy(Re).multiplyScalar(L).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){Pe.setScissorTest(He=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(T=!0,B=!0,K=!0){let Z=0;if(T){let H=!1;if(R!==null){const ge=R.texture.format;H=ge===xf||ge===yf||ge===vf}if(H){const ge=R.texture.type,Ce=ge===Pi||ge===Or||ge===ia||ge===Ys||ge===gf||ge===_f,ye=N.getClearColor(),Ie=N.getClearAlpha(),Ve=ye.r,We=ye.g,Ue=ye.b;Ce?(v[0]=Ve,v[1]=We,v[2]=Ue,v[3]=Ie,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=Ve,S[1]=We,S[2]=Ue,S[3]=Ie,U.clearBufferiv(U.COLOR,0,S))}else Z|=U.COLOR_BUFFER_BIT}B&&(Z|=U.DEPTH_BUFFER_BIT),K&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Se.dispose(),Ne.dispose(),ke.dispose(),E.dispose(),$.dispose(),j.dispose(),Ee.dispose(),I.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",fa),te.removeEventListener("sessionend",no),kn.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=Ze.autoReset,B=Te.enabled,K=Te.autoUpdate,Z=Te.needsUpdate,H=Te.type;xe(),Ze.autoReset=T,Te.enabled=B,Te.autoUpdate=K,Te.needsUpdate=Z,Te.type=H}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const B=T.target;B.removeEventListener("dispose",Ge),vt(B)}function vt(T){xt(T),ke.remove(T)}function xt(T){const B=ke.get(T).programs;B!==void 0&&(B.forEach(function(K){de.releaseProgram(K)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,Z,H,ge){B===null&&(B=we);const Ce=H.isMesh&&H.matrixWorld.determinant()<0,ye=Ac(T,B,K,Z,H);Pe.setMaterial(Z,Ce);let Ie=K.index,Ve=1;if(Z.wireframe===!0){if(Ie=W.getWireframeAttribute(K),Ie===void 0)return;Ve=2}const We=K.drawRange,Ue=K.attributes.position;let nt=We.start*Ve,ct=(We.start+We.count)*Ve;ge!==null&&(nt=Math.max(nt,ge.start*Ve),ct=Math.min(ct,(ge.start+ge.count)*Ve)),Ie!==null?(nt=Math.max(nt,0),ct=Math.min(ct,Ie.count)):Ue!=null&&(nt=Math.max(nt,0),ct=Math.min(ct,Ue.count));const pt=ct-nt;if(pt<0||pt===1/0)return;Ee.setup(H,Z,ye,K,Ie);let sn,it=q;if(Ie!==null&&(sn=F.get(Ie),it=se,it.setIndex(sn)),H.isMesh)Z.wireframe===!0?(Pe.setLineWidth(Z.wireframeLinewidth*ze()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(H.isLine){let Fe=Z.linewidth;Fe===void 0&&(Fe=1),Pe.setLineWidth(Fe*ze()),H.isLineSegments?it.setMode(U.LINES):H.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else H.isPoints?it.setMode(U.POINTS):H.isSprite&&it.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,ai=H._multiDrawCounts,rt=H._multiDrawCount,On=Ie?F.get(Ie).bytesPerElement:1,Yr=ke.get(Z).currentProgram.getUniforms();for(let pn=0;pn<rt;pn++)Yr.setValue(U,"_gl_DrawID",pn),it.render(Fe[pn]/On,ai[pn])}else if(H.isInstancedMesh)it.renderInstances(nt,pt,H.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ai=Math.min(K.instanceCount,Fe);it.renderInstances(nt,pt,ai)}else it.render(nt,pt)};function Ye(T,B,K){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,$r(T,B,K),T.side=cr,T.needsUpdate=!0,$r(T,B,K),T.side=_i):$r(T,B,K)}this.compile=function(T,B,K=null){K===null&&(K=T),u=Ne.get(K),u.init(B),x.push(u),K.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),T!==K&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const Z=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const ye=ge[Ce];Ye(ye,K,H),Z.add(ye)}else Ye(ge,K,H),Z.add(ge)}),x.pop(),u=null,Z},this.compileAsync=function(T,B,K=null){const Z=this.compile(T,B,K);return new Promise(H=>{function ge(){if(Z.forEach(function(Ce){ke.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){H(T);return}setTimeout(ge,10)}je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let fn=null;function Fn(T){fn&&fn(T)}function fa(){kn.stop()}function no(){kn.start()}const kn=new O0;kn.setAnimationLoop(Fn),typeof self!="undefined"&&kn.setContext(self),this.setAnimationLoop=function(T){fn=T,te.setAnimationLoop(T),T===null?kn.stop():kn.start()},te.addEventListener("sessionstart",fa),te.addEventListener("sessionend",no),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(B),B=te.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,R),u=Ne.get(T,x.length),u.init(B),x.push(u),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(ae),k=this.localClippingEnabled,le=pe.init(this.clippingPlanes,k),g=Se.get(T,_.length),g.init(),_.push(g),te.enabled===!0&&te.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&Wr(ge,B,-1/0,y.sortObjects)}Wr(T,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,re),Le=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Le&&N.addToRenderList(g,T),this.info.render.frame++,le===!0&&pe.beginShadows();const K=u.state.shadowsArray;Te.render(K,T,B),le===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,H=g.transmissive;if(u.setupLights(),B.isArrayCamera){const ge=B.cameras;if(H.length>0)for(let Ce=0,ye=ge.length;Ce<ye;Ce++){const Ie=ge[Ce];pa(Z,H,T,Ie)}Le&&N.render(T);for(let Ce=0,ye=ge.length;Ce<ye;Ce++){const Ie=ge[Ce];Xr(g,T,Ie,Ie.viewport)}}else H.length>0&&pa(Z,H,T,B),Le&&N.render(T),Xr(g,T,B);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,B),Ee.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],le===!0&&pe.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Wr(T,B,K,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){Z&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const Ce=j.update(T),ye=T.material;ye.visible&&g.push(T,Ce,ye,K,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const Ce=j.update(T),ye=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),_e.copy(Ce.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){const Ie=Ce.groups;for(let Ve=0,We=Ie.length;Ve<We;Ve++){const Ue=Ie[Ve],nt=ye[Ue.materialIndex];nt&&nt.visible&&g.push(T,Ce,nt,K,_e.z,Ue)}}else ye.visible&&g.push(T,Ce,ye,K,_e.z,null)}}const ge=T.children;for(let Ce=0,ye=ge.length;Ce<ye;Ce++)Wr(ge[Ce],B,K,Z)}function Xr(T,B,K,Z){const H=T.opaque,ge=T.transmissive,Ce=T.transparent;u.setupLightsView(K),le===!0&&pe.setGlobalState(y.clippingPlanes,K),Z&&Pe.viewport(P.copy(Z)),H.length>0&&io(H,B,K),ge.length>0&&io(ge,B,K),Ce.length>0&&io(Ce,B,K),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function pa(T,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Z.id]===void 0&&(u.state.transmissionRenderTarget[Z.id]=new zr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ca:Pi,minFilter:Pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ge=u.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||P;ge.setSize(Ce.z,Ce.w);const ye=y.getRenderTarget();y.setRenderTarget(ge),y.getClearColor(z),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Le&&N.render(K);const Ie=y.toneMapping;y.toneMapping=sr;const Ve=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),u.setupLightsView(Z),le===!0&&pe.setGlobalState(y.clippingPlanes,Z),io(T,K,Z),A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge),je.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ue=0,nt=B.length;Ue<nt;Ue++){const ct=B[Ue],pt=ct.object,sn=ct.geometry,it=ct.material,Fe=ct.group;if(it.side===_i&&pt.layers.test(Z.layers)){const ai=it.side;it.side=hn,it.needsUpdate=!0,bc(pt,K,Z,sn,it,Fe),it.side=ai,it.needsUpdate=!0,We=!0}}We===!0&&(A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge))}y.setRenderTarget(ye),y.setClearColor(z,Y),Ve!==void 0&&(Z.viewport=Ve),y.toneMapping=Ie}function io(T,B,K){const Z=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ge=T.length;H<ge;H++){const Ce=T[H],ye=Ce.object,Ie=Ce.geometry,Ve=Z===null?Ce.material:Z,We=Ce.group;ye.layers.test(K.layers)&&bc(ye,B,K,Ie,Ve,We)}}function bc(T,B,K,Z,H,ge){T.onBeforeRender(y,B,K,Z,H,ge),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,B,K,Z,T,ge),H.transparent===!0&&H.side===_i&&H.forceSinglePass===!1?(H.side=hn,H.needsUpdate=!0,y.renderBufferDirect(K,B,Z,H,T,ge),H.side=cr,H.needsUpdate=!0,y.renderBufferDirect(K,B,Z,H,T,ge),H.side=_i):y.renderBufferDirect(K,B,Z,H,T,ge),T.onAfterRender(y,B,K,Z,H,ge)}function $r(T,B,K){B.isScene!==!0&&(B=we);const Z=ke.get(T),H=u.state.lights,ge=u.state.shadowsArray,Ce=H.state.version,ye=de.getParameters(T,H.state,ge,B,K),Ie=de.getProgramCacheKey(ye);let Ve=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?$:E).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Ge),Ve=new Map,Z.programs=Ve);let We=Ve.get(Ie);if(We!==void 0){if(Z.currentProgram===We&&Z.lightsStateVersion===Ce)return ga(T,ye),We}else ye.uniforms=de.getUniforms(T),T.onBeforeCompile(ye,y),We=de.acquireProgram(ye,Ie),Ve.set(Ie,We),Z.uniforms=ye.uniforms;const Ue=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),ga(T,ye),Z.needsLights=_a(T),Z.lightsStateVersion=Ce,Z.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=We,Z.uniformsList=null,We}function ma(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Rl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ga(T,B){const K=ke.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ac(T,B,K,Z,H){B.isScene!==!0&&(B=we),A.resetTextureUnits();const ge=B.fog,Ce=Z.isMeshStandardMaterial?B.environment:null,ye=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:eo,Ie=(Z.isMeshStandardMaterial?$:E).get(Z.envMap||Ce),Ve=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let pt=sr;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pt=y.toneMapping);const sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,it=sn!==void 0?sn.length:0,Fe=ke.get(Z),ai=u.state.lights;if(le===!0&&(k===!0||T!==M)){const wn=T===M&&Z.id===w;pe.setState(Z,T,wn)}let rt=!1;Z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ai.state.version||Fe.outputColorSpace!==ye||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Ie||Z.fog===!0&&Fe.fog!==ge||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==pe.numPlanes||Fe.numIntersection!==pe.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==We||Fe.morphTargets!==Ue||Fe.morphNormals!==nt||Fe.morphColors!==ct||Fe.toneMapping!==pt||Fe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Fe.__version=Z.version);let On=Fe.currentProgram;rt===!0&&(On=$r(Z,B,H));let Yr=!1,pn=!1,ro=!1;const mt=On.getUniforms(),Zn=Fe.uniforms;if(Pe.useProgram(On.program)&&(Yr=!0,pn=!0,ro=!0),Z.id!==w&&(w=Z.id,pn=!0),Yr||M!==T){Pe.buffers.depth.getReversed()?(ee.copy(T.projectionMatrix),SS(ee),MS(ee),mt.setValue(U,"projectionMatrix",ee)):mt.setValue(U,"projectionMatrix",T.projectionMatrix),mt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Li=mt.map.cameraPosition;Li!==void 0&&Li.setValue(U,ve.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,pn=!0,ro=!0)}if(H.isSkinnedMesh){mt.setOptional(U,H,"bindMatrix"),mt.setOptional(U,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),mt.setValue(U,"boneTexture",wn.boneTexture,A))}H.isBatchedMesh&&(mt.setOptional(U,H,"batchingTexture"),mt.setValue(U,"batchingTexture",H._matricesTexture,A),mt.setOptional(U,H,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",H._indirectTexture,A),mt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",H._colorsTexture,A));const so=K.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&Q.update(H,K,On),(pn||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,mt.setValue(U,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Zn.envMap.value=Ie,Zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Zn.envMapIntensity.value=B.environmentIntensity),pn&&(mt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&Cc(Zn,ro),ge&&Z.fog===!0&&fe.refreshFogUniforms(Zn,ge),fe.refreshMaterialUniforms(Zn,Z,L,ie,u.state.transmissionRenderTarget[T.id]),Rl.upload(U,ma(Fe),Zn,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Rl.upload(U,ma(Fe),Zn,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(U,"center",H.center),mt.setValue(U,"modelViewMatrix",H.modelViewMatrix),mt.setValue(U,"normalMatrix",H.normalMatrix),mt.setValue(U,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const wn=Z.uniformsGroups;for(let Li=0,Ni=wn.length;Li<Ni;Li++){const Af=wn[Li];I.update(Af,On),I.bind(Af,On)}}return On}function Cc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function _a(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,K){ke.get(T.texture).__webglTexture=B,ke.get(T.depthTexture).__webglTexture=K;const Z=ke.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const K=ke.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){R=T,b=B,C=K;let Z=!0,H=null,ge=!1,Ce=!1;if(T){const Ie=ke.get(T);if(Ie.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ie.__hasExternalTextures)A.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Ie.__boundDepthTexture!==Ue){if(Ue!==null&&ke.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const We=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[B])?H=We[B][K]:H=We[B],ge=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?H=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[K]:H=We,P.copy(T.viewport),G.copy(T.scissor),V=T.scissorTest}else P.copy(he).multiplyScalar(L).floor(),G.copy(Re).multiplyScalar(L).floor(),V=He;if(Pe.bindFramebuffer(U.FRAMEBUFFER,H)&&Z&&Pe.drawBuffers(T,H),Pe.viewport(P),Pe.scissor(G),Pe.setScissorTest(V),ge){const Ie=ke.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,K)}else if(Ce){const Ie=ke.get(T.texture),Ve=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,Ve)}w=-1},this.readRenderTargetPixels=function(T,B,K,Z,H,ge,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(ye=ye[Ce]),ye){Pe.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Ie=T.texture,Ve=Ie.format,We=Ie.type;if(!$e.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&K>=0&&K<=T.height-H&&U.readPixels(B,K,Z,H,ue.convert(Ve),ue.convert(We),ge)}finally{const Ie=R!==null?ke.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,Z,H,ge,Ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(ye=ye[Ce]),ye){const Ie=T.texture,Ve=Ie.format,We=Ie.type;if(!$e.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Z&&K>=0&&K<=T.height-H){Pe.bindFramebuffer(U.FRAMEBUFFER,ye);const Ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(B,K,Z,H,ue.convert(Ve),ue.convert(We),0);const nt=R!==null?ke.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,nt);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await xS(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.deleteBuffer(Ue),U.deleteSync(ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,K=0){T.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-K),H=Math.floor(T.image.width*Z),ge=Math.floor(T.image.height*Z),Ce=B!==null?B.x:0,ye=B!==null?B.y:0;A.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ce,ye,H,ge),Pe.unbindTexture()},this.copyTextureToTexture=function(T,B,K=null,Z=null,H=0){T.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],B=arguments[2],H=arguments[3]||0,K=null);let ge,Ce,ye,Ie,Ve,We,Ue,nt,ct;const pt=T.isCompressedTexture?T.mipmaps[H]:T.image;K!==null?(ge=K.max.x-K.min.x,Ce=K.max.y-K.min.y,ye=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,Ve=K.min.y,We=K.isBox3?K.min.z:0):(ge=pt.width,Ce=pt.height,ye=pt.depth||1,Ie=0,Ve=0,We=0),Z!==null?(Ue=Z.x,nt=Z.y,ct=Z.z):(Ue=0,nt=0,ct=0);const sn=ue.convert(B.format),it=ue.convert(B.type);let Fe;B.isData3DTexture?(A.setTexture3D(B,0),Fe=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Fe=U.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Fe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ai=U.getParameter(U.UNPACK_ROW_LENGTH),rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),On=U.getParameter(U.UNPACK_SKIP_PIXELS),Yr=U.getParameter(U.UNPACK_SKIP_ROWS),pn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const ro=T.isDataArrayTexture||T.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Zn=ke.get(T),so=ke.get(B),wn=ke.get(Zn.__renderTarget),Li=ke.get(so.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,wn.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ni=0;Ni<ye;Ni++)ro&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,H,We+Ni),T.isDepthTexture?(mt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(B).__webglTexture,H,ct+Ni),U.blitFramebuffer(Ie,Ve,ge,Ce,Ue,nt,ge,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST)):mt?U.copyTexSubImage3D(Fe,H,Ue,nt,ct+Ni,Ie,Ve,ge,Ce):U.copyTexSubImage2D(Fe,H,Ue,nt,ct+Ni,Ie,Ve,ge,Ce);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Fe,H,Ue,nt,ct,ge,Ce,ye,sn,it,pt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Fe,H,Ue,nt,ct,ge,Ce,ye,sn,pt.data):U.texSubImage3D(Fe,H,Ue,nt,ct,ge,Ce,ye,sn,it,pt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Ue,nt,ge,Ce,sn,it,pt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Ue,nt,pt.width,pt.height,sn,pt.data):U.texSubImage2D(U.TEXTURE_2D,H,Ue,nt,ge,Ce,sn,it,pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ai),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,On),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,pn),H===0&&B.generateMipmaps&&U.generateMipmap(Fe),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,B,K=null,Z=null,H=0){return T.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],B=arguments[3],H=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,K,Z,H)},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,Pe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}class LT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class NT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new O;class nc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ni(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class W0 extends pr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const xo=new O,hs=new O,fs=new O,ps=new Oe,So=new Oe,X0=new ht,il=new O,Mo=new O,rl=new O,Nm=new Oe,Pu=new Oe,Im=new Oe;class IT extends It{constructor(e=new W0){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new qt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new NT(n,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new nc(i,3,0,!1)),ds.setAttribute("uv",new nc(i,2,3,!1))}this.geometry=ds,this.material=e,this.center=new Oe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),X0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-fs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;sl(il.set(-.5,-.5,0),fs,o,hs,r,s),sl(Mo.set(.5,-.5,0),fs,o,hs,r,s),sl(rl.set(.5,.5,0),fs,o,hs,r,s),Nm.set(0,0),Pu.set(1,0),Im.set(1,1);let a=e.ray.intersectTriangle(il,Mo,rl,!1,xo);if(a===null&&(sl(Mo.set(-.5,.5,0),fs,o,hs,r,s),Pu.set(0,1),a=e.ray.intersectTriangle(il,rl,Mo,!1,xo),a===null))return;const l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||n.push({distance:l,point:xo.clone(),uv:Pn.getInterpolation(xo,il,Mo,rl,Nm,Pu,Im,new Oe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sl(t,e,n,i,r,s){ps.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(So.x=s*ps.x-r*ps.y,So.y=r*ps.x+s*ps.y):So.copy(ps),t.copy(e),t.x+=So.x,t.y+=So.y,t.applyMatrix4(X0)}class $0 extends pr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new O,rc=new O,Um=new ht,wo=new da,ol=new ua,Du=new O,Fm=new O;class UT extends It{constructor(e=new qt,n=new $0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ic.fromBufferAttribute(n,r-1),rc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Um.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let S=p,g=v-1;S<g;S+=c){const u=h.getX(S),_=h.getX(S+1),x=al(this,e,wo,l,u,_);x&&n.push(x)}if(this.isLineLoop){const S=h.getX(v-1),g=h.getX(p),u=al(this,e,wo,l,S,g);u&&n.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let S=p,g=v-1;S<g;S+=c){const u=al(this,e,wo,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=al(this,e,wo,l,v-1,p);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function al(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),n.distanceSqToSegment(ic,rc,Du,Fm)>i)return;Du.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Du);if(!(l<e.near||l>e.far))return{distance:l,point:Fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const km=new O,Om=new O;class FT extends UT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)km.fromBufferAttribute(n,r),Om.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+km.distanceTo(Om);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends pr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zm=new ht,gh=new da,ll=new ua,cl=new O;class kT extends It{constructor(e=new qt,n=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;zm.copy(r).invert(),gh.copy(e.ray).applyMatrix4(zm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,S=p;v<S;v++){const g=c.getX(v);cl.fromBufferAttribute(f,g),Bm(cl,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,S=p;v<S;v++)cl.fromBufferAttribute(f,v),Bm(cl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bm(t,e,n,i,r,s,o){const a=gh.distanceSqToPoint(t);if(a<n){const l=new O;gh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _h extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sc extends qt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,h=new Oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tn extends qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let v=0;const S=[],g=i/2;let u=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function _(){const y=new O,D=new O;let b=0;const C=(n-e)/i;for(let R=0;R<=s;R++){const w=[],M=R/s,P=M*(n-e)+e;for(let G=0;G<=r;G++){const V=G/r,z=V*l+a,Y=Math.sin(z),X=Math.cos(z);D.x=P*Y,D.y=-M*i+g,D.z=P*X,f.push(D.x,D.y,D.z),y.set(Y,C,X).normalize(),d.push(y.x,y.y,y.z),p.push(V,1-M),w.push(v++)}S.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){const M=S[w][R],P=S[w+1][R],G=S[w+1][R+1],V=S[w][R+1];(e>0||w!==0)&&(h.push(M,P,V),b+=3),(n>0||w!==s-1)&&(h.push(P,G,V),b+=3)}c.addGroup(u,b,0),u+=b}function x(y){const D=v,b=new Oe,C=new O;let R=0;const w=y===!0?e:n,M=y===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),v++;const P=v;for(let G=0;G<=r;G++){const z=G/r*l+a,Y=Math.cos(z),X=Math.sin(z);C.x=w*X,C.y=g*M,C.z=w*Y,f.push(C.x,C.y,C.z),d.push(0,M,0),b.x=Y*.5+.5,b.y=X*.5*M+.5,p.push(b.x,b.y),v++}for(let G=0;G<r;G++){const V=D+G,z=P+G;y===!0?h.push(z,z+1,V):h.push(z+1,z,V),R+=3}c.addGroup(u,R,y===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends Tn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ef extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new O,d=new O,p=[],v=[],S=[],g=[];for(let u=0;u<=i;u++){const _=[],x=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let D=0;D<=n;D++){const b=D/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),g.push(b+y,1-x),_.push(c++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const x=h[u][_+1],y=h[u][_],D=h[u+1][_],b=h[u+1][_+1];(u!==0||o>0)&&p.push(x,y,b),(u!==i-1||l<Math.PI)&&p.push(y,D,b)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(S,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zo extends qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new O,f=new O,d=new O;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const S=v/r*s,g=p/i*Math.PI*2;f.x=(e+n*Math.cos(g))*Math.cos(S),f.y=(e+n*Math.cos(g))*Math.sin(S),f.z=n*Math.sin(g),a.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const S=(r+1)*p+v-1,g=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,_=(r+1)*p+v;o.push(S,g,_),o.push(g,u,_)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ke extends pr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class q0 extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Lu=new ht,Hm=new O,Vm=new O;class OT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zT extends OT{constructor(){super(new z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends q0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new zT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class BT extends q0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const jm=new ht;class HT{constructor(e,n,i=0,r=1/0){this.ray=new da(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jm),this}intersectObject(e,n=!0,i=[]){return vh(e,this,i,n),i.sort(Wm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vh(e[r],this,i,n);return i.sort(Wm),i}}function Wm(t,e){return t.distance-e.distance}function vh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vh(s[o],e,n,!0)}}class Xm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class VT extends FT{constructor(e=10,n=10,i=4473924,r=8947848){i=new Qe(i),r=new Qe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,v=-a;d<=n;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const S=d===s?i:r;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const h=new qt;h.setAttribute("position",new wt(l,3)),h.setAttribute("color",new wt(c,3));const f=new $0({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class GT extends jr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);const $m={type:"change"},Tf={type:"start"},K0={type:"end"},ul=new da,Ym=new gi,jT=Math.cos(70*vS.DEG2RAD),Dt=new O,on=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nu=1e-6;class WT extends GT{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Br,this._lastTargetPosition=new O,this._quat=new Br().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xm,this._sphericalDelta=new Xm,this._scale=1,this._panOffset=new O,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new O,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$T.bind(this),this._onPointerDown=XT.bind(this),this._onPointerUp=YT.bind(this),this._onContextMenu=tb.bind(this),this._onMouseWheel=ZT.bind(this),this._onKeyDown=QT.bind(this),this._onTouchStart=JT.bind(this),this._onTouchMove=eb.bind(this),this._onMouseDown=qT.bind(this),this._onMouseMove=KT.bind(this),this._interceptControlDown=nb.bind(this),this._interceptControlUp=ib.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($m),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<jT?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nu||this._lastTargetPosition.distanceToSquared(this.target)>Nu?(this.dispatchEvent($m),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Oe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function XT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function $T(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function YT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(K0),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function qT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Ei.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Ei.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Tf)}function KT(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ZT(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(K0))}function QT(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function JT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Tf)}function eb(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function tb(t){this.enabled!==!1&&t.preventDefault()}function nb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ib(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rb(t,e){const n=new Mi;switch(t){case"solar_pv":{for(let r=0;r<3;r++){const s=new Be(new ut(1.2,.05,.8),new Ke({color:1981023,metalness:.8,roughness:.2})),o=new Be(new ut(1.18,.06,.78),new Ke({color:4886745,metalness:.5}));s.add(o),s.position.set(r*1.4-1.4,.8,0),s.rotation.x=-Math.PI*.2,n.add(s);const a=new Be(new Tn(.03,.03,.7,8),new Ke({color:8947848}));a.position.set(r*1.4-1.4,.35,.2),n.add(a)}break}case"smart_building":{const i=e.floors||5,r=i*.6,s=new Be(new ut(2.4,r,1.5),new Ke({color:4871528}));s.position.y=r/2,n.add(s);for(let a=0;a<i;a++)for(let l=0;l<4;l++){const c=new Be(new ut(.35,.3,.02),new Ke({color:8900331,emissive:2245802,emissiveIntensity:.3}));c.position.set(l*.55-.825,a*.6+.4,.76),n.add(c)}const o=new Be(new ut(2.5,.1,1.6),new Ke({color:2963272}));o.position.y=r+.05,n.add(o);break}case"battery_storage":{const i=new Be(new ut(1.2,1.5,.8),new Ke({color:2278750}));i.position.y=.75,n.add(i);for(let s=0;s<3;s++){const o=new Be(new ut(.3,.2,.02),new Ke({color:1467700,emissive:65280,emissiveIntensity:.2}));o.position.set(0,.5+s*.35,.41),n.add(o)}const r=new Be(new oc(.15,.4,4),new Ke({color:16498468}));r.position.set(0,1.3,.41),r.rotation.z=Math.PI,n.add(r);break}case"wind_turbine":{const i=new Be(new Tn(.15,.25,4,8),new Ke({color:16119285}));i.position.y=2,n.add(i);const r=new Be(new ut(.6,.4,.4),new Ke({color:15066597}));r.position.set(0,4.1,0),n.add(r);const s=new Be(new oc(.15,.3,16),new Ke({color:13421772}));s.position.set(0,4.1,.35),s.rotation.x=Math.PI/2,n.add(s);const o=new Mi;for(let a=0;a<3;a++){const l=new Be(new ut(.15,1.8,.05),new Ke({color:16777215}));l.position.y=.9;const c=new Mi;c.add(l),c.rotation.z=a*Math.PI*2/3,o.add(c)}o.position.set(0,4.1,.5),o.userData.isRotating=!0,n.add(o);break}case"district_heating":{const i=new Be(new ut(1.5,1,1),new Ke({color:14427686}));i.position.y=.5,n.add(i);const r=new Be(new Tn(.1,.1,1.2,16),new Ke({color:15680580}));r.rotation.z=Math.PI/2,r.position.set(0,.8,.6),n.add(r);const s=new Be(new Tn(.08,.08,1.2,16),new Ke({color:3900150}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.6),n.add(s);const o=new Be(new zo(.2,.03,8,16,Math.PI),new Ke({color:16739179,emissive:16711680,emissiveIntensity:.5}));o.position.set(0,1.2,0),o.rotation.x=Math.PI/2,n.add(o);break}case"smart_grid":{const i=new Be(new ut(1,.3,.8),new Ke({color:3621201}));i.position.y=.15,n.add(i);const r=new Be(new ut(.6,.8,.5),new Ke({color:7041664}));r.position.y=.7,n.add(r);for(let s=0;s<3;s++){const o=new Be(new Tn(.05,.08,.4,8),new Ke({color:9133302}));o.position.set(s*.25-.25,1.3,0),n.add(o)}for(let s=0;s<3;s++){const o=new Be(new Tn(.01,.01,.8,8),new Ke({color:1118481}));o.rotation.z=Math.PI/2,o.position.set(.4,1.5,s*.15-.15),n.add(o)}break}case"ev_charger":{const i=new Be(new ut(.3,1.4,.2),new Ke({color:1982639}));i.position.y=.7,n.add(i);const r=new Be(new ut(.25,.2,.02),new Ke({color:0,emissive:65280,emissiveIntensity:.3}));r.position.set(0,1.1,.11),n.add(r);const s=new Be(new zo(.15,.02,8,16,Math.PI),new Ke({color:1118481}));s.position.set(.2,.5,.15),s.rotation.y=Math.PI/2,n.add(s);const o=new Be(new ut(.8,.3,.4),new Ke({color:3900150,transparent:!0,opacity:.6}));o.position.set(.8,.15,0),n.add(o);break}case"heat_pump":{const i=new Be(new ut(1.2,.9,.5),new Ke({color:16119285}));i.position.y=.45,n.add(i);const r=new Be(new sc(.3,32),new Ke({color:3355443}));r.position.set(0,.5,.26),n.add(r);const s=new Mi;for(let a=0;a<4;a++){const l=new Be(new ut(.25,.05,.02),new Ke({color:6710886}));l.rotation.z=a*Math.PI/2,s.add(l)}s.position.set(0,.5,.27),s.userData.isRotating=!0,n.add(s);const o=new Be(new Tn(.04,.04,.5,8),new Ke({color:15680580}));o.position.set(-.4,.7,-.3),n.add(o);break}case"chp_unit":{const i=new Be(new ut(1.5,1.2,1),new Ke({color:16347926}));i.position.y=.6,n.add(i);const r=new Be(new Tn(.1,.12,.8,16),new Ke({color:6710886}));r.position.set(.5,1.6,0),n.add(r);const s=new Be(new ut(.4,.3,.05),new Ke({color:2042167,emissive:2278750,emissiveIntensity:.2}));s.position.set(-.4,.8,.53),n.add(s);break}case"thermal_storage":{const i=new Be(new Tn(.6,.6,1.8,24),new Ke({color:15485081}));i.position.y=.9,n.add(i);for(let s=0;s<3;s++){const o=new Be(new zo(.62,.03,8,32),new Ke({color:12458077}));o.position.y=.4+s*.5,o.rotation.x=Math.PI/2,n.add(o)}const r=new Be(new sc(.1,16),new Ke({color:16777215,emissive:16729156,emissiveIntensity:.5}));r.position.set(0,1.2,.61),n.add(r);break}case"load_center":{const i=new Be(new ut(.8,1.2,.2),new Ke({color:4937059}));i.position.y=.6,n.add(i);for(let s=0;s<3;s++)for(let o=0;o<2;o++){const a=new Be(new ut(.15,.2,.05),new Ke({color:1118481}));a.position.set(o*.25-.12,.3+s*.3,.12),n.add(a)}const r=new Be(new Ef(.05,16,16),new Ke({color:2278750,emissive:65280,emissiveIntensity:.8}));r.position.set(.25,1,.12),n.add(r);break}}return n}function sb(t,e,n){const i=document.createElement("canvas"),r=i.getContext("2d");i.width=256,i.height=64,r.fillStyle="rgba(15, 23, 42, 0.85)",r.beginPath(),r.roundRect(4,4,i.width-8,i.height-8,8),r.fill(),r.font="bold 22px Arial",r.fillStyle="#e2e8f0",r.textAlign="center",r.textBaseline="middle",r.fillText(t.substring(0,20),i.width/2,i.height/2);const s=new _h(i),o=new W0({map:s,transparent:!0}),a=new IT(o);return a.position.copy(e),a.position.y=n+.3,a.scale.set(1.8,.45,1),a}class ob{constructor(e,n,i,r=20){this.startPos=e.clone(),this.endPos=n.clone(),this.count=r,this.speed=.015,this.positions=new Float32Array(r*3),this.progress=new Float32Array(r);for(let a=0;a<r;a++)this.progress[a]=a/r,this.updateParticlePosition(a);const s=new qt;s.setAttribute("position",new Nn(this.positions,3));const o=new Y0({color:i,size:.15,transparent:!0,opacity:1,blending:Ad,sizeAttenuation:!0});this.particles=new kT(s,o)}updateParticlePosition(e){const n=this.progress[e];this.positions[e*3]=this.startPos.x+(this.endPos.x-this.startPos.x)*n,this.positions[e*3+1]=this.startPos.y+(this.endPos.y-this.startPos.y)*n+Math.sin(n*Math.PI)*.25,this.positions[e*3+2]=this.startPos.z+(this.endPos.z-this.startPos.z)*n}update(){for(let e=0;e<this.count;e++)this.progress[e]+=this.speed,this.progress[e]>1&&(this.progress[e]=0),this.updateParticlePosition(e);this.particles.geometry.attributes.position.needsUpdate=!0}}function qm({config:t,animate:e=!0,onComponentMove:n}){const i=ce.useRef(null),r=ce.useRef(null),s=ce.useRef(null),o=ce.useRef(null),a=ce.useRef(null),l=ce.useRef(new Map),c=ce.useRef(null),h=ce.useRef(new Map),f=ce.useRef([]),d=ce.useRef([]),p=ce.useRef(0),v=ce.useRef(new HT),S=ce.useRef(new Oe),g=ce.useRef(null),u=ce.useRef(new gi(new O(0,1,0),0)),_=ce.useRef(e),x=ce.useRef(n);return ce.useEffect(()=>{_.current=e},[e]),ce.useEffect(()=>{x.current=n},[n]),ce.useEffect(()=>{if(!i.current)return;const y=i.current,D=new LT;D.background=new Qe(661032),r.current=D;const b=y.clientWidth||600,C=y.clientHeight||400,R=new Rn(45,b/C,.1,500);R.position.set(5,4,5),o.current=R;const w=new DT({antialias:!0});w.setSize(b,C),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=f0,y.appendChild(w.domElement),s.current=w;const M=new WT(R,w.domElement);M.enableDamping=!0,M.dampingFactor=.08,M.enablePan=!0,M.screenSpacePanning=!0,M.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},M.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},M.target.set(0,1,0),a.current=M,D.add(new BT(16777215,.4));const P=new Gm(16777215,1.2);P.position.set(15,25,15),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=.5,P.shadow.camera.far=100,P.shadow.camera.left=-20,P.shadow.camera.right=20,P.shadow.camera.top=20,P.shadow.camera.bottom=-20,D.add(P);const G=new Gm(4491519,.3);G.position.set(-10,5,-10),D.add(G);const V=document.createElement("canvas");V.width=512,V.height=512;const z=V.getContext("2d"),Y=z.createRadialGradient(256,256,0,256,256,360);Y.addColorStop(0,"#1e293b"),Y.addColorStop(1,"#0f172a"),z.fillStyle=Y,z.fillRect(0,0,512,512);const X=new _h(V),ie=new Be(new ha(60,60),new Ke({map:X,roughness:.9}));ie.rotation.x=-Math.PI/2,ie.receiveShadow=!0,D.add(ie);const L=new VT(60,30,3900150,1981023);L.position.y=.01,D.add(L);const J=document.createElement("canvas");J.width=2,J.height=512;const re=J.getContext("2d"),he=re.createLinearGradient(0,0,0,512);he.addColorStop(0,"#0f172a"),he.addColorStop(.5,"#1e293b"),he.addColorStop(1,"#334155"),re.fillStyle=he,re.fillRect(0,0,2,512);const Re=new _h(J);D.background=Re;const He=new Mi;D.add(He),c.current=He;const ne=()=>{if(p.current=requestAnimationFrame(ne),M.update(),_.current){f.current.forEach(we=>we.update()),d.current.forEach(we=>{we.rotation.z+=.02});const _e=Date.now()*.003;l.current.forEach(we=>{if(we.userData.isGenerator){const Le=1+Math.sin(_e)*.03;we.scale.set(Le,Le,Le)}})}w.render(D,R)};ne();const le=()=>{const _e=y.clientWidth,we=y.clientHeight;R.aspect=_e/we,R.updateProjectionMatrix(),w.setSize(_e,we)};window.addEventListener("resize",le);const k=_e=>{const we=w.domElement.getBoundingClientRect();S.current.x=(_e.clientX-we.left)/we.width*2-1,S.current.y=-((_e.clientY-we.top)/we.height)*2+1},ee=_e=>{if(!x.current)return;k(_e),v.current.setFromCamera(S.current,R);const we=Array.from(l.current.entries());for(const[Le,ze]of we)if(v.current.intersectObject(ze,!0).length>0){M.enabled=!1;const ft=new O;v.current.ray.intersectPlane(u.current,ft),g.current={id:Le,model:ze,offset:ze.position.clone().sub(ft)},w.domElement.style.cursor="grabbing";break}},ae=_e=>{if(!g.current){if(x.current){k(_e),v.current.setFromCamera(S.current,R);let U=!1;for(const ft of l.current.values())if(v.current.intersectObject(ft,!0).length>0){U=!0;break}w.domElement.style.cursor=U?"grab":"default"}return}k(_e),v.current.setFromCamera(S.current,R);const we=new O;v.current.ray.intersectPlane(u.current,we);const Le=we.add(g.current.offset);g.current.model.position.x=Le.x,g.current.model.position.z=Le.z;const ze=h.current.get(g.current.id);ze&&(ze.position.x=Le.x,ze.position.z=Le.z)},ve=()=>{if(g.current&&x.current){const{id:_e,model:we}=g.current,Le=.035,ze=-5,U=8,ft=(we.position.x-ze)/Le,je=(we.position.z-U)/Le;x.current(_e,ft,je)}g.current=null,M.enabled=!0,w.domElement.style.cursor="default"};return w.domElement.addEventListener("pointerdown",ee),w.domElement.addEventListener("pointermove",ae),w.domElement.addEventListener("pointerup",ve),w.domElement.addEventListener("pointerleave",ve),()=>{window.removeEventListener("resize",le),w.domElement.removeEventListener("pointerdown",ee),w.domElement.removeEventListener("pointermove",ae),w.domElement.removeEventListener("pointerup",ve),w.domElement.removeEventListener("pointerleave",ve),cancelAnimationFrame(p.current),w.dispose(),y.removeChild(w.domElement)}},[]),ce.useEffect(()=>{var P,G,V;const y=r.current,D=c.current;if(!y||!D)return;for(l.current.forEach(z=>y.remove(z)),l.current.clear();D.children.length;)D.remove(D.children[0]);if(f.current.forEach(z=>y.remove(z.particles)),f.current=[],d.current=[],!t)return;const b=.035,C=-5,R=8,w=new Set(["solar_pv","wind_turbine","chp_unit"]);t.components.forEach(z=>{const Y=rb(z.type,z.params),X=z.x*b+C,ie=z.y*b+R;Y.position.set(X,0,ie),Y.traverse(he=>{he.isMesh&&(he.castShadow=!0,he.receiveShadow=!0)}),Y.userData.isGenerator=w.has(z.type),y.add(Y),l.current.set(z.id,Y),Y.traverse(he=>{he.userData.isRotating&&d.current.push(he)});const J=new Hr().setFromObject(Y).max.y,re=sb(z.name,new O(X,0,ie),J);D.add(re)});const M=new Set(["smart_building","ev_charger","load_center","heat_pump"]);if(t.connections.forEach(z=>{const Y=t.components.find(ee=>ee.id===z.from),X=t.components.find(ee=>ee.id===z.to),ie=l.current.get(z.from),L=l.current.get(z.to);if(!ie||!L||!Y||!X)return;let J=ie.position.clone(),re=L.position.clone();const he=w.has(Y.type),Re=w.has(X.type),He=M.has(Y.type),ne=M.has(X.type);(He&&!ne||Re&&!he)&&([J,re]=[re,J]),J.y=.5,re.y=.5;const le=z.type==="heat"?15680580:z.type==="both"?11032055:3900150,k=new ob(J,re,le,18);y.add(k.particles),f.current.push(k)}),t.components.length>0){const z=new Hr;l.current.forEach(L=>z.expandByObject(L));const Y=new O,X=new O;z.getCenter(Y),z.getSize(X),(P=a.current)==null||P.target.copy(Y);const ie=Math.max(X.x,X.z)*2;(G=o.current)==null||G.position.set(Y.x+ie,ie*.7,Y.z+ie),(V=a.current)==null||V.update()}},[t]),m.jsx("div",{ref:i,style:{width:"100%",height:"100%",minHeight:300}})}function Z0(t){return t.endsWith("/")?t:t+"/"}const Hi=(t,e)=>{const n=t.replace(/^\/+/,"");return new URL(n,Z0(e)).toString()},ab=(t,e)=>{const n=t.replace(/^\/+/,""),i=new URL(n,Z0(e));return i.protocol=i.protocol.startsWith("https")?"wss:":"ws:",i.toString()};function Km(t){return t==null?"—":new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:2}).format(t)}function lb(t){return t==null?"—":t.toLocaleString(void 0,{maximumFractionDigits:2})}function cb(){var ke,A,E,$;const t=ce.useMemo(()=>window.location.origin,[]),[e,n]=ce.useState([]),[i,r]=ce.useState(!1),[s,o]=ce.useState(null),[a,l]=ce.useState(null),[c,h]=ce.useState(null),[f,d]=ce.useState(null),[p,v]=ce.useState([]),[S,g]=ce.useState("idle"),[u,_]=ce.useState("runs"),[x,y]=ce.useState("3d"),[D,b]=ce.useState("2d"),[C,R]=ce.useState(null),[w,M]=ce.useState(!1),[P,G]=ce.useState(12),[V,z]=ce.useState(800),[Y,X]=ce.useState(.5),[ie,L]=ce.useState(!1);ce.useState(null)[0];const[J,re]=ce.useState(.48),[he,Re]=ce.useState(!1),[He,ne]=ce.useState(320),[le,k]=ce.useState(!1),[ee,ae]=ce.useState(!1),[ve,_e]=ce.useState(!1),[we,Le]=ce.useState("view"),ze=ce.useCallback(F=>{v(W=>[...W,`${new Date().toLocaleTimeString()} ${F}`].slice(-50))},[]),U=ce.useCallback(async()=>{r(!0);try{const F=await fetch(Hi("/runs",t));if(!F.ok)throw new Error(`Failed to load runs (${F.status})`);const W=await F.json();if(n(W),W.length===0){o(j=>j!==null?null:j);return}o(j=>!(j?W.some(fe=>fe.id===j):!1)&&W.length>0?W[0].id:j)}catch(F){console.error(F),ze(`Error loading runs: ${F.message}`)}finally{r(!1)}},[t,ze]);ce.useEffect(()=>{U();const F=setInterval(U,15e3);return()=>clearInterval(F)},[U]),ce.useEffect(()=>{if(!s){d(null),l(null),h(null);return}const F=new AbortController;return(async()=>{try{const j=await fetch(Hi(`/runs/${s}/state`,t),{signal:F.signal});if(!j.ok)throw new Error(`Failed to load state (${j.status})`);const de=await j.json();d(de)}catch(j){j.name!=="AbortError"&&ze(`Error fetching state: ${j.message}`)}})(),()=>F.abort()},[t,ze,s]);const ft=F=>{const W=F.config_overrides||{},j=[],de=[];let fe=1;return j.push({id:"bld-1",type:"smart_building",name:"Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150}}),W.owned_solar_capacity_mw>0&&(j.push({id:"pv-1",type:"solar_pv",name:`Solar (${(W.owned_solar_capacity_mw*1e3).toFixed(0)} kWp)`,x:300,y:60,params:{capacity_kwp:W.owned_solar_capacity_mw*1e3}}),de.push({id:`c${fe++}`,from:"pv-1",to:"bld-1",type:"electricity"})),W.owned_battery_capacity_mwh>0&&(j.push({id:"bat-1",type:"battery_storage",name:`Battery (${(W.owned_battery_capacity_mwh*1e3).toFixed(0)} kWh)`,x:450,y:120,params:{capacity_kwh:W.owned_battery_capacity_mwh*1e3}}),de.push({id:`c${fe++}`,from:"bat-1",to:"bld-1",type:"electricity"}),W.owned_solar_capacity_mw>0&&de.push({id:`c${fe++}`,from:"pv-1",to:"bat-1",type:"electricity"})),W.owned_wind_capacity_mw>0&&(j.push({id:"wind-1",type:"wind_turbine",name:`Wind (${(W.owned_wind_capacity_mw*1e3).toFixed(0)} kW)`,x:150,y:60,params:{capacity_kw:W.owned_wind_capacity_mw*1e3}}),de.push({id:`c${fe++}`,from:"wind-1",to:"bld-1",type:"electricity"})),j.push({id:"grid-1",type:"smart_grid",name:"Grid",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:200}}),de.push({id:`c${fe++}`,from:"grid-1",to:"bld-1",type:"electricity"}),j.push({id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{capacity_kw:200}}),de.push({id:`c${fe++}`,from:"dh-1",to:"bld-1",type:"heat"}),{id:`gen-${F.id}`,name:F.name,components:j,connections:de,created_at:F.created_at}};ce.useEffect(()=>{const F=new AbortController;return(async()=>{if(s)try{const j=await fetch(Hi(`/runs/${s}`,t),{signal:F.signal});if(!j.ok)return;const de=await j.json();l(de);let fe=!1;if(de.digital_twin_id){const Se=await fetch(Hi(`/digital-twins/${de.digital_twin_id}`,t),{signal:F.signal});if(Se.ok){const Ne=await Se.json();R({id:Ne.id,name:Ne.name,components:Ne.components||[],connections:Ne.connections||[],created_at:Ne.created_at}),fe=!0}}if(de.scenario_id){const Se=await fetch(Hi(`/scenarios/${de.scenario_id}`,t),{signal:F.signal});if(Se.ok){const Ne=await Se.json();if(h(Ne),!fe&&Ne.digital_twin_id){const pe=await fetch(Hi(`/digital-twins/${Ne.digital_twin_id}`,t),{signal:F.signal});if(pe.ok){const Te=await pe.json();R({id:Te.id,name:Te.name,components:Te.components||[],connections:Te.connections||[],created_at:Te.created_at}),fe=!0}}fe||R(ft(Ne))}else h(null)}else h(null)}catch{}})(),()=>F.abort()},[t,s]),ce.useEffect(()=>{if(!s)return;const F=ab(`/runs/${s}/ws`,t);g("connecting"),ze(`Connecting to ${F}`);const W=new WebSocket(F);return W.onopen=()=>{g("open"),ze("WebSocket connected"),W.send(JSON.stringify({command:"state"}))},W.onclose=j=>{g("closed"),ze(`WebSocket closed (code ${j.code})`)},W.onerror=j=>{console.error("WebSocket error",j),ze("WebSocket error encountered")},W.onmessage=j=>{try{const de=JSON.parse(j.data);de.type==="state"?d(de.payload):de.type==="error"&&ze(`Backend error: ${de.message}`)}catch(de){console.error("Malformed message",de)}},()=>{W.close()}},[ze,s,t]);const je=F=>{o(F)},$e=async F=>{if(s)try{const W=await fetch(Hi(`/runs/${s}/step`,t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({steps:F})});if(!W.ok)throw new Error(`Step failed (${W.status})`);const j=await W.json();d(j),ze(`Advanced simulation by ${F} step(s)`)}catch(W){ze(`Error stepping simulation: ${W.message}`)}},Pe=(f==null?void 0:f.terminations)&&Object.values(f.terminations).some(F=>F===!0);ce.useEffect(()=>{if(!w||!s||u!=="runs"||(a==null?void 0:a.status)!=="running")return;if(Pe){M(!1),ze("✓ Simulation completed!");return}let F=!1,W;const j=async()=>{F||(await $e(P),W=window.setTimeout(j,Math.max(100,V)))};return W=window.setTimeout(j,0),()=>{F=!0,W&&window.clearTimeout(W)}},[w,P,V,s,u,a==null?void 0:a.status,Pe]);const Ze=(ke=f==null?void 0:f.metrics)!=null?ke:{};return ce.useEffect(()=>{const F=j=>{if(!ie)return;const de=document.querySelector(".split-container");if(!de)return;const fe=de.getBoundingClientRect(),Se=j.clientX-fe.left,Ne=Math.max(.2,Math.min(.8,Se/fe.width));X(Ne)},W=()=>L(!1);return window.addEventListener("mousemove",F),window.addEventListener("mouseup",W),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",W)}},[ie]),ce.useEffect(()=>{const F=j=>{if(!he)return;const de=document.querySelector(".vsplit-container");if(!de)return;const fe=de.getBoundingClientRect(),Se=j.clientY-fe.top,Ne=Math.max(.25,Math.min(.85,Se/fe.height));re(Ne)},W=()=>Re(!1);return window.addEventListener("mousemove",F),window.addEventListener("mouseup",W),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",W)}},[he]),ce.useEffect(()=>{const F=j=>{if(!le)return;const de=document.querySelector(".app-shell");if(!de)return;const fe=de.getBoundingClientRect(),Se=j.clientX-fe.left,Ne=220,pe=Math.max(360,fe.width*.5);ne(Math.max(Ne,Math.min(pe,Se)))},W=()=>k(!1);return window.addEventListener("mousemove",F),window.addEventListener("mouseup",W),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",W)}},[le]),m.jsx("div",{className:"app-shell",style:{"--sidebar-width":`${He}px`},children:u==="runs"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"console-mobile-tabs",children:[m.jsx("button",{className:we==="runs"?"active":"",onClick:()=>Le("runs"),children:"📋 Runs"}),m.jsx("button",{className:we==="view"?"active":"",onClick:()=>Le("view"),children:"👁️ View"}),m.jsx("button",{className:we==="info"?"active":"",onClick:()=>Le("info"),children:"ℹ️ Info"})]}),m.jsx("div",{className:`console-panel console-runs-panel ${we==="runs"?"mobile-visible":""}`,children:m.jsx(Tx,{runs:e,selectedId:s,onSelect:F=>{je(F),Le("view")},onRefresh:U,onDelete:async F=>{var W;try{const j=Hi(`/runs/${F}`,t),de=await fetch(j,{method:"DELETE"});if(!de.ok)throw new Error(`Delete failed (${de.status})`);s===F&&o(null),await U()}catch(j){ze(`Delete run error: ${(W=j==null?void 0:j.message)!=null?W:String(j)}`)}},isLoading:i})}),m.jsx("div",{className:"sidebar-divider",onMouseDown:()=>k(!0),title:"Resize sidebar"}),m.jsxs("main",{className:`main-content console-panel console-view-panel ${we==="view"?"mobile-visible":""}`,children:[m.jsxs("div",{className:"header console-header",children:[m.jsxs("div",{children:[m.jsx("h1",{children:"Digital Twin Console"}),m.jsxs("p",{style:{color:"#64748b",margin:0,fontSize:12},children:["WS: ",S]})]}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[m.jsx("button",{className:"button",onClick:()=>_("builder"),children:"🏗️ Builder"}),m.jsx("button",{className:"button button-secondary",onClick:()=>_("scenarios"),children:"Scenarios"}),m.jsx("span",{className:"header-divider"}),m.jsx("button",{className:"button",onClick:()=>y("3d"),style:{background:x==="3d"?"#2563eb":"#475569"},children:"3D"}),m.jsx("button",{className:"button",onClick:()=>y("charts"),style:{background:x==="charts"?"#2563eb":"#475569"},children:"Charts"}),m.jsx("span",{className:"header-divider"}),s&&Ze.total_steps&&m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[m.jsx("div",{style:{width:100,height:8,background:"#334155",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${Math.min((Ze.timestep||0)/Ze.total_steps*100,100)}%`,background:Pe?"#22c55e":"#3b82f6",transition:"width 0.3s"}})}),m.jsxs("span",{style:{fontSize:11,color:"#94a3b8",minWidth:80},children:[Ze.timestep||0," / ",Ze.total_steps,Pe&&" ✓"]})]}),m.jsx("button",{className:"button",onClick:()=>$e(1),disabled:!s||(a==null?void 0:a.status)!=="running"||Pe,children:"Step"}),m.jsx("button",{className:"button",onClick:()=>$e(12),disabled:!s||(a==null?void 0:a.status)!=="running"||Pe,children:"×12"}),m.jsx("button",{className:"button",onClick:()=>M(F=>!F),disabled:!s||(a==null?void 0:a.status)!=="running"||Pe,style:{background:w?"#dc2626":"#2563eb"},children:w?"⏸ Pause":"▶ Auto"}),m.jsx("input",{type:"number",value:P,min:1,max:288,onChange:F=>G(Math.max(1,Math.min(288,Number(F.target.value)))),style:{width:50},title:"Steps per interval"}),m.jsx("input",{type:"number",value:V,min:100,step:100,onChange:F=>z(Math.max(100,Number(F.target.value))),style:{width:60},title:"Interval (ms)"}),m.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:"0.8rem",color:"#94a3b8"},children:[m.jsx("input",{type:"checkbox",checked:ve,onChange:F=>_e(F.target.checked)})," Reduce motion"]}),m.jsx("button",{className:"button button-secondary",onClick:()=>ae(F=>!F),style:{padding:"0.35rem 0.5rem"},children:ee?"▼":"▲"})]})]}),m.jsxs("section",{className:"metrics-grid",children:[m.jsxs("article",{className:"metric-card",children:[m.jsx("div",{className:"metric-label",children:"Timestep"}),m.jsx("div",{className:"metric-value",children:(A=Ze.timestep)!=null?A:"—"})]}),m.jsxs("article",{className:"metric-card",children:[m.jsx("div",{className:"metric-label",children:"Fund NAV (DKK)"}),m.jsx("div",{className:"metric-value",children:Km(Ze.fund_nav)})]}),m.jsxs("article",{className:"metric-card",children:[m.jsx("div",{className:"metric-label",children:"Trading Budget (DKK)"}),m.jsx("div",{className:"metric-value",children:Km(Ze.budget)})]}),m.jsxs("article",{className:"metric-card",children:[m.jsx("div",{className:"metric-label",children:"Last Revenue"}),m.jsx("div",{className:"metric-value",children:lb(Ze.last_revenue)})]})]}),m.jsxs("section",{className:"vsplit-container",style:{flex:1,minHeight:0,overflow:"hidden"},children:[m.jsx("div",{className:"vsplit-pane",style:{flexBasis:ee?"100%":`${Math.round(J*100)}%`,flexGrow:0,flexShrink:0,minHeight:0,padding:x==="3d"?0:"1rem",display:"flex",flexDirection:"column",overflow:"hidden"},children:x==="3d"?m.jsxs("div",{className:"viewer-panel",style:{minHeight:320,height:"100%",position:"relative"},children:[m.jsx("div",{style:{position:"absolute",top:8,right:8,zIndex:20,display:"flex",gap:8,alignItems:"center",background:"rgba(15,23,42,0.65)",padding:"6px 8px",borderRadius:6,border:"1px solid rgba(148,163,184,0.2)"},children:m.jsx("button",{className:"button",onClick:()=>_("builder"),style:{fontSize:11,padding:"4px 8px"},children:"🏗️ Edit Digital Twin"})}),m.jsx(qm,{config:C,animate:!ve}),!C&&m.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),m.jsx("div",{children:"No digital twin configured"}),m.jsx("button",{className:"button",onClick:()=>_("builder"),style:{marginTop:12},children:"Create Digital Twin"})]})]}):m.jsx("div",{className:"metrics-grid",style:{height:"100%",overflow:"auto"},children:m.jsx(bx,{apiBase:t,runId:s})})}),!ee&&m.jsx("div",{className:"vsplit-divider desktop-only",onMouseDown:()=>Re(!0),onDoubleClick:()=>re(.58)}),!ee&&m.jsxs("div",{className:"split-container desktop-only",style:{flexBasis:`${Math.round((1-J)*100)}%`,flexGrow:0,flexShrink:0,minHeight:0,overflow:"hidden"},children:[m.jsxs("div",{className:"split-pane",style:{flexBasis:`${Math.round(Y*100)}%`,padding:"1rem",minHeight:220,display:"flex",flexDirection:"column",overflow:"auto"},children:[m.jsx("div",{className:"metric-label",children:"Scenario"}),c?m.jsxs("div",{children:[m.jsx("h3",{style:{margin:"0.25rem 0 0.5rem 0"},children:c.name}),m.jsx("p",{style:{color:"#94a3b8"},children:(E=c.description)!=null?E:"—"}),m.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.95rem",whiteSpace:"pre-wrap"},children:c.details&&m.jsx("p",{style:{marginTop:0},children:c.details})}),m.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.9rem"},children:[m.jsx("div",{style:{color:"#94a3b8",marginBottom:4},children:"Overrides"}),m.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:Object.entries(c.config_overrides||{}).map(([F,W])=>m.jsxs("li",{children:[m.jsx("code",{children:F}),": ",m.jsx("span",{children:String(W)})]},F))})]})]}):m.jsx("div",{children:"—"})]}),m.jsx("div",{className:"split-divider",onMouseDown:()=>L(!0),onDoubleClick:()=>X(.5)}),m.jsx("div",{className:"split-pane",style:{flexBasis:`${Math.round((1-Y)*100)}%`,padding:0,display:"flex",flexDirection:"column",overflow:"hidden"},children:m.jsx("div",{className:"log-panel",style:{flex:1,overflow:"auto"},children:p.map((F,W)=>m.jsx("div",{children:F},W))})})]})]})]}),m.jsx("div",{className:`console-panel console-info-panel ${we==="info"?"mobile-visible":""}`,children:m.jsxs("div",{style:{padding:"1rem",overflowY:"auto",height:"100%"},children:[m.jsxs("div",{className:"metric-card",style:{marginBottom:"1rem"},children:[m.jsx("div",{className:"metric-label",children:"Scenario"}),c?m.jsxs("div",{children:[m.jsx("h3",{style:{margin:"0.25rem 0 0.5rem 0"},children:c.name}),m.jsx("p",{style:{color:"#94a3b8",fontSize:12},children:($=c.description)!=null?$:"—"}),c.details&&m.jsx("p",{style:{fontSize:12,marginTop:8},children:c.details})]}):m.jsx("div",{style:{color:"#64748b"},children:"No scenario selected"})]}),m.jsxs("div",{className:"metric-card",children:[m.jsx("div",{className:"metric-label",children:"Log"}),m.jsx("div",{style:{fontSize:11,fontFamily:"monospace",maxHeight:200,overflowY:"auto"},children:p.slice(-10).map((F,W)=>m.jsx("div",{style:{color:"#94a3b8"},children:F},W))})]})]})})]}):u==="scenarios"?m.jsxs("main",{style:{gridColumn:"1 / -1",gridRow:"1 / -1",padding:"1.5rem",overflowY:"auto"},children:[m.jsxs("div",{className:"header",style:{marginBottom:"1rem"},children:[m.jsx("h1",{children:"Scenarios"}),m.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:m.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})})]}),m.jsx(Cx,{apiBase:t,onRun:F=>{_("runs"),o(F),U()}})]}):u==="builder"?m.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[m.jsxs("div",{className:"header",style:{flexShrink:0},children:[m.jsxs("div",{children:[m.jsx("h1",{children:"🏗️ Digital Twin Builder"}),m.jsx("p",{style:{color:"#64748b",margin:0},children:"Drag and drop components to design your PED system"})]}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[m.jsx("button",{className:"button",onClick:()=>b("2d"),disabled:D==="2d",children:"2D Editor"}),m.jsx("button",{className:"button",onClick:()=>b("3d"),disabled:D==="3d",children:"3D Preview"}),m.jsx("button",{className:"button",onClick:()=>_("scenarios"),children:"Scenarios"}),m.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})]})]}),m.jsx("div",{style:{flex:1,minHeight:0,overflow:"hidden"},children:D==="2d"?m.jsx(Px,{onConfigChange:R,initialConfig:C,apiBase:t,onRunSimulation:F=>{o(F),_("runs"),U()}}):m.jsx(qm,{config:C,animate:!ve,onComponentMove:(F,W,j)=>{C&&R({...C,components:C.components.map(de=>de.id===F?{...de,x:W,y:j}:de)})}})})]}):null})}class ub extends cg.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){var n;return{hasError:!0,message:(n=e==null?void 0:e.message)!=null?n:String(e)}}componentDidCatch(e,n){console.error("[UI ErrorBoundary]",e,n)}render(){return this.state.hasError?m.jsxs("div",{style:{padding:"1rem",color:"#fca5a5"},children:[m.jsx("h2",{children:"Something went wrong rendering the UI."}),m.jsx("pre",{style:{whiteSpace:"pre-wrap"},children:this.state.message})]}):this.props.children}}function bf(t,e){try{const n="__boot_error_overlay__";let i=document.getElementById(n);i||(i=document.createElement("div"),i.id=n,i.setAttribute("role","alert"),i.style.position="fixed",i.style.inset="0",i.style.zIndex="9999",i.style.background="rgba(15,23,42,0.96)",i.style.color="#fca5a5",i.style.fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial",i.style.padding="24px",document.body.appendChild(i));const r=typeof e=="string"?e:e instanceof Error?e.stack||e.message:JSON.stringify(e);i.innerHTML=`<h2 style="margin:0 0 8px 0; color:#fecaca">${t}</h2><pre style="white-space:pre-wrap; font-size:14px; color:#fca5a5">${r!=null?r:""}</pre>`}catch{}}window.addEventListener("error",t=>{bf("Runtime error",(t==null?void 0:t.error)||(t==null?void 0:t.message))});window.addEventListener("unhandledrejection",t=>{bf("Unhandled promise rejection",t==null?void 0:t.reason)});var Zm,Qm;try{let t=document.getElementById("root");t||(t=document.createElement("div"),t.id="root",document.body.appendChild(t)),console.log("[UI] Mounting app. API base =",(Qm=(Zm=import.meta)==null?void 0:Zm.env)==null?void 0:Qm.VITE_API_BASE),Iu.createRoot(t).render(m.jsx(cg.StrictMode,{children:m.jsx(ub,{children:m.jsx(cb,{})})}))}catch(t){console.error("[UI] Failed to mount app",t),bf("Failed to mount app",t)}
//# sourceMappingURL=index-CRFe-cyC.js.map
