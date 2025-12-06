(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sg={exports:{}},ac={},og={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),Nf=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,cg={};function qs(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ug(){}ug.prototype=qs.prototype;function yh(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}var xh=yh.prototype=new ug;xh.constructor=yh;lg(xh,qs.prototype);xh.isPureReactComponent=!0;var If=Array.isArray,dg=Object.prototype.hasOwnProperty,Sh={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:s,ref:o,props:r,_owner:Sh.current}}function Sv(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uf=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ac(o,0):i,If(r)?(n="",t!=null&&(n=t.replace(Uf,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=Sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",If(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ac(s,a);o+=dl(s,e,n,l,r)}else if(l=xv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},hl={transition:null},wv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Sh};function pg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=qs;$e.Fragment=dv;$e.Profiler=fv;$e.PureComponent=yh;$e.StrictMode=hv;$e.Suspense=_v;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;$e.act=pg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dg.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};$e.createElement=fg;$e.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:gv,render:t}};$e.isValidElement=Mh;$e.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Ev}};$e.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};$e.unstable_act=pg;$e.useCallback=function(t,e){return rn.current.useCallback(t,e)};$e.useContext=function(t){return rn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return rn.current.useEffect(t,e)};$e.useId=function(){return rn.current.useId()};$e.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return rn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};$e.useRef=function(t){return rn.current.useRef(t)};$e.useState=function(t){return rn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return rn.current.useTransition()};$e.version="18.3.1";og.exports=$e;var le=og.exports;const mg=cv(le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=le,bv=Symbol.for("react.element"),Av=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bv,type:t,key:s,ref:o,props:r,_owner:Rv.current}}ac.Fragment=Av;ac.jsx=gg;ac.jsxs=gg;sg.exports=ac;var S=sg.exports,Uu={},_g={exports:{}},Mn={},vg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,$){var ne=I.length;I.push($);e:for(;0<ne;){var ae=ne-1>>>1,he=I[ae];if(0<r(he,$))I[ae]=$,I[ne]=he,ne=ae;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],ne=I.pop();if(ne!==$){I[0]=ne;e:for(var ae=0,he=I.length,Le=he>>>1;ae<Le;){var N=2*(ae+1)-1,q=I[N],re=N+1,Z=I[re];if(0>r(q,ne))re<he&&0>r(Z,q)?(I[ae]=Z,I[re]=ne,ae=re):(I[ae]=q,I[N]=ne,ae=N);else if(re<he&&0>r(Z,ne))I[ae]=Z,I[re]=ne,ae=re;else break e}}return $}function r(I,$){var ne=I.sortIndex-$.sortIndex;return ne!==0?ne:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,g=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=I)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function x(I){if(M=!1,y(I),!g)if(n(l)!==null)g=!0,j(P);else{var $=n(c);$!==null&&ie(x,$.startTime-I)}}function P(I,$){g=!1,M&&(M=!1,u(C),C=-1),p=!0;var ne=h;try{for(y($),f=n(l);f!==null&&(!(f.expirationTime>$)||I&&!L());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var he=ae(f.expirationTime<=$);$=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),y($)}else i(l);f=n(l)}if(f!==null)var Le=!0;else{var N=n(c);N!==null&&ie(x,N.startTime-$),Le=!1}return Le}finally{f=null,h=ne,p=!1}}var A=!1,R=null,C=-1,T=5,w=-1;function L(){return!(t.unstable_now()-w<T)}function V(){if(R!==null){var I=t.unstable_now();w=I;var $=!0;try{$=R(!0,I)}finally{$?F():(A=!1,R=null)}}else A=!1}var F;if(typeof v=="function")F=function(){v(V)};else if(typeof MessageChannel!="undefined"){var G=new MessageChannel,K=G.port2;G.port1.onmessage=V,F=function(){K.postMessage(null)}}else F=function(){m(V,0)};function j(I){R=I,A||(A=!0,F())}function ie(I,$){C=m(function(){I(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var ne=h;h=$;try{return I()}finally{h=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ne=h;h=I;try{return $()}finally{h=ne}},t.unstable_scheduleCallback=function(I,$,ne){var ae=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,I){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ne+he,I={id:d++,callback:$,priorityLevel:I,startTime:ne,expirationTime:he,sortIndex:-1},ne>ae?(I.sortIndex=ne,e(c,I),n(l)===null&&I===n(c)&&(M?(u(C),C=-1):M=!0,ie(x,ne-ae))):(I.sortIndex=he,e(l,I),g||p||(g=!0,j(P))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var $=h;return function(){var ne=h;h=$;try{return I.apply(this,arguments)}finally{h=ne}}}})(yg);vg.exports=yg;var Dv=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=le,Sn=Dv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,Ho={};function Vr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ho[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var bi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fu=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Of={};function Iv(t){return Fu.call(Of,t)?!0:Fu.call(Ff,t)?!1:Nv.test(t)?Of[t]=!0:(Ff[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e=="undefined"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),kf=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Cc;function Mo(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function Pc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function Ov(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case Ou:return"Profiler";case bh:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Sg:return(t._context.displayName||"Context")+".Provider";case Ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=zv(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bg(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Vu(t,e){bg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Eo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Ag(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Rg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,As=null,Cs=null;function Gf(t){if(t=la(t)){if(typeof qu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=hc(e),qu(t.stateNode,t.type,e))}}function Lg(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function Ng(){if(As){var t=As,e=Cs;if(Cs=As=null,Gf(t),e)for(t=0;t<e.length;t++)Gf(e[t])}}function Ig(t,e){return t(e)}function Ug(){}var Dc=!1;function Fg(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return Ig(t,e,n)}finally{Dc=!1,(As!==null||Cs!==null)&&(Ug(),Ng())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Ku=!1;if(bi)try{var so={};Object.defineProperty(so,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Ku=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Po=!1,Dl=null,Ll=!1,Zu=null,Gv={onError:function(t){Po=!0,Dl=t}};function Wv(t,e,n,i,r,s,o,a,l){Po=!1,Dl=null,Vv.apply(Gv,arguments)}function jv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),Po){if(Po){var c=Dl;Po=!1,Dl=null}else throw Error(ce(198));Ll||(Ll=!0,Zu=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(Gr(t)!==t)throw Error(ce(188))}function Xv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wf(r),t;if(s===i)return Wf(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function kg(t){return t=Xv(t),t!==null?zg(t):null}function zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=Sn.unstable_scheduleCallback,jf=Sn.unstable_cancelCallback,Yv=Sn.unstable_shouldYield,$v=Sn.unstable_requestPaint,bt=Sn.unstable_now,qv=Sn.unstable_getCurrentPriorityLevel,Ph=Sn.unstable_ImmediatePriority,Hg=Sn.unstable_UserBlockingPriority,Nl=Sn.unstable_NormalPriority,Kv=Sn.unstable_LowPriority,Vg=Sn.unstable_IdlePriority,lc=null,si=null;function Zv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:ey,Jv=Math.log,Qv=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(Jv(t)/Qv|0)|0}var Sa=64,Ma=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wo(a):(s&=o,s!==0&&(i=wo(s)))}else o=n&~r,o!==0?i=wo(o):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ty(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,Lh,Xg,Yg,$g,Qu=!1,Ea=[],Ki=null,Zi=null,Ji=null,Wo=new Map,jo=new Map,ji=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=la(e),e!==null&&Lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return Ki=oo(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=oo(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=oo(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,oo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,oo(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=br(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,$g(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=la(n),e!==null&&Lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){fl(t)&&n.delete(e)}function oy(){Qu=!1,Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Ji!==null&&fl(Ji)&&(Ji=null),Wo.forEach(Yf),jo.forEach(Yf)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,oy)))}function Xo(t){function e(r){return ao(r,t)}if(0<Ea.length){ao(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&ao(Ki,t),Zi!==null&&ao(Zi,t),Ji!==null&&ao(Ji,t),Wo.forEach(e),jo.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&ji.shift()}var Rs=Di.ReactCurrentBatchConfig,Ul=!0;function ay(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=1,Nh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function ly(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=4,Nh(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Nh(t,e,n,i){if(Ul){var r=ed(t,e,n,i);if(r===null)Vc(t,e,i,Fl,n),Xf(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Xf(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=la(r);if(s!==null&&jg(s),s=ed(t,e,n,i),s===null&&Vc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Fl=null;function ed(t,e,n,i){if(Fl=null,t=Rh(i),t=br(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Ph:return 1;case Hg:return 4;case Nl:case Kv:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var $i=null,Ih=null,pl=null;function Zg(){if(pl)return pl;var t,e=Ih,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function $f(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:$f,this.isPropagationStopped=$f,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=En(Ks),aa=Et({},Ks,{view:0,detail:0}),cy=En(aa),Nc,Ic,lo,cc=Et({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Nc=t.screenX-lo.screenX,Ic=t.screenY-lo.screenY):Ic=Nc=0,lo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),qf=En(cc),uy=Et({},cc,{dataTransfer:0}),dy=En(uy),hy=Et({},aa,{relatedTarget:0}),Uc=En(hy),fy=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),py=En(fy),my=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=En(my),_y=Et({},Ks,{data:0}),Kf=En(_y),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xy[t])?!!e[t]:!1}function Fh(){return Sy}var My=Et({},aa,{key:function(t){if(t.key){var e=vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ey=En(My),wy=Et({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=En(wy),Ty=Et({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),by=En(Ty),Ay=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=En(Ay),Ry=Et({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=En(Ry),Dy=[9,13,27,32],Oh=bi&&"CompositionEvent"in window,Do=null;bi&&"documentMode"in document&&(Do=document.documentMode);var Ly=bi&&"TextEvent"in window&&!Do,Jg=bi&&(!Oh||Do&&8<Do&&11>=Do),Jf=" ",Qf=!1;function Qg(t,e){switch(t){case"keyup":return Dy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Ny(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(Qf=!0,Jf);case"textInput":return t=e.data,t===Jf&&Qf?null:t;default:return null}}function Iy(t,e){if(ps)return t==="compositionend"||!Oh&&Qg(t,e)?(t=Zg(),pl=Ih=$i=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uy[t.type]:e==="textarea"}function t_(t,e,n,i){Lg(i),e=Ol(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Yo=null;function Fy(t){h_(t,0)}function uc(t){var e=_s(t);if(Tg(e))return t}function Oy(t,e){if(t==="change")return e}var n_=!1;if(bi){var Fc;if(bi){var Oc="oninput"in document;if(!Oc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Oc=typeof tp.oninput=="function"}Fc=Oc}else Fc=!1;n_=Fc&&(!document.documentMode||9<document.documentMode)}function np(){Lo&&(Lo.detachEvent("onpropertychange",i_),Yo=Lo=null)}function i_(t){if(t.propertyName==="value"&&uc(Yo)){var e=[];t_(e,Yo,t,Rh(t)),Fg(Fy,e)}}function ky(t,e,n){t==="focusin"?(np(),Lo=e,Yo=n,Lo.attachEvent("onpropertychange",i_)):t==="focusout"&&np()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Yo)}function By(t,e){if(t==="click")return uc(e)}function Hy(t,e){if(t==="input"||t==="change")return uc(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Vy;function $o(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=s_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(i!==null&&kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wy=bi&&"documentMode"in document&&11>=document.documentMode,ms=null,td=null,No=null,nd=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ms==null||ms!==Pl(i)||(i=ms,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&$o(No,i)||(No=i,i=Ol(td,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},kc={},o_={};bi&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function dc(t){if(kc[t])return kc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return kc[t]=e[n];return t}var a_=dc("animationend"),l_=dc("animationiteration"),c_=dc("animationstart"),u_=dc("transitionend"),d_=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){d_.set(t,e),Vr(e,[t])}for(var zc=0;zc<op.length;zc++){var Bc=op[zc],jy=Bc.toLowerCase(),Xy=Bc[0].toUpperCase()+Bc.slice(1);dr(jy,"on"+Xy)}dr(a_,"onAnimationEnd");dr(l_,"onAnimationIteration");dr(c_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(u_,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}}}if(Ll)throw t=Zu,Ll=!1,Zu=null,t}function _t(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[ba]){t[ba]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Hc("selectionchange",!1,e))}}function f_(t,e,n,i){switch(Kg(e)){case 1:var r=ay;break;case 4:r=ly;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fg(function(){var c=s,d=Rh(n),f=[];e:{var h=d_.get(t);if(h!==void 0){var p=Uh,g=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=Ey;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=by;break;case a_:case l_:case c_:p=py;break;case u_:p=Cy;break;case"scroll":p=cy;break;case"wheel":p=Py;break;case"copy":case"cut":case"paste":p=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zf}var M=(e&4)!==0,m=!M&&t==="scroll",u=M?h!==null?h+"Capture":null:h;M=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,u!==null&&(x=Go(v,u),x!=null&&M.push(Ko(v,x,y)))),m)break;v=v.return}0<M.length&&(h=new p(h,g,null,n,d),f.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==$u&&(g=n.relatedTarget||n.fromElement)&&(br(g)||g[Ai]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?br(g):null,g!==null&&(m=Gr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(M=qf,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Zf,x="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:_s(p),y=g==null?h:_s(g),h=new M(x,v+"leave",p,n,d),h.target=m,h.relatedTarget=y,x=null,br(d)===c&&(M=new M(u,v+"enter",g,n,d),M.target=y,M.relatedTarget=m,x=M),m=x,p&&g)t:{for(M=p,u=g,v=0,y=M;y;y=Xr(y))v++;for(y=0,x=u;x;x=Xr(x))y++;for(;0<v-y;)M=Xr(M),v--;for(;0<y-v;)u=Xr(u),y--;for(;v--;){if(M===u||u!==null&&M===u.alternate)break t;M=Xr(M),u=Xr(u)}M=null}else M=null;p!==null&&lp(f,h,p,M,!1),g!==null&&m!==null&&lp(f,m,g,M,!0)}}e:{if(h=c?_s(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=Oy;else if(ep(h))if(n_)P=Hy;else{P=zy;var A=ky}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=By);if(P&&(P=P(t,c))){t_(f,P,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Gu(h,"number",h.value)}switch(A=c?_s(c):window,t){case"focusin":(ep(A)||A.contentEditable==="true")&&(ms=A,td=c,No=null);break;case"focusout":No=td=ms=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,sp(f,n,d);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":sp(f,n,d)}var R;if(Oh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ps?Qg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Jg&&n.locale!=="ko"&&(ps||C!=="onCompositionStart"?C==="onCompositionEnd"&&ps&&(R=Zg()):($i=d,Ih="value"in $i?$i.value:$i.textContent,ps=!0)),A=Ol(c,C),0<A.length&&(C=new Kf(C,t,null,n,d),f.push({event:C,listeners:A}),R?C.data=R:(R=e_(n),R!==null&&(C.data=R)))),(R=Ly?Ny(t,n):Iy(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(d=new Kf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}h_(f,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $y=/\r\n?/g,qy=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(qy,"")}function Aa(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(ce(425))}function kl(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof up!="undefined"?function(t){return up.resolve(null).then(t).catch(Jy)}:od;function Jy(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Zs,Zo="__reactProps$"+Zs,Ai="__reactContainer$"+Zs,ad="__reactEvents$"+Zs,Qy="__reactListeners$"+Zs,ex="__reactHandles$"+Zs;function br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[ni])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[ni]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function hc(t){return t[Zo]||null}var ld=[],vs=-1;function hr(t){return{current:t}}function vt(t){0>vs||(t.current=ld[vs],ld[vs]=null,vs--)}function ht(t,e){vs++,ld[vs]=t.current,t.current=e}var lr={},Kt=hr(lr),dn=hr(!1),Nr=lr;function Os(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function zl(){vt(dn),vt(Kt)}function hp(t,e,n){if(Kt.current!==lr)throw Error(ce(168));ht(Kt,e),ht(dn,n)}function p_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,kv(t)||"Unknown",r));return Et({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=Kt.current,ht(Kt,t),ht(dn,dn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=p_(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,vt(dn),vt(Kt),ht(Kt,t)):vt(dn),ht(dn,n)}var gi=null,fc=!1,Wc=!1;function m_(t){gi===null?gi=[t]:gi.push(t)}function tx(t){fc=!0,m_(t)}function fr(){if(!Wc&&gi!==null){Wc=!0;var t=0,e=rt;try{var n=gi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,fc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Bg(Ph,fr),r}finally{rt=e,Wc=!1}}return null}var ys=[],xs=0,Hl=null,Vl=0,Rn=[],Pn=0,Ir=null,yi=1,xi="";function Sr(t,e){ys[xs++]=Vl,ys[xs++]=Hl,Hl=t,Vl=e}function g_(t,e,n){Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Ir,Ir=t;var i=yi;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Yn(e)+r|n<<r|i,xi=s+t}else yi=1<<s|n<<r|i,xi=t}function zh(t){t.return!==null&&(Sr(t,1),g_(t,1,0))}function Bh(t){for(;t===Hl;)Hl=ys[--xs],ys[xs]=null,Vl=ys[--xs],ys[xs]=null;for(;t===Ir;)Ir=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null,yi=Rn[--Pn],Rn[Pn]=null}var xn=null,yn=null,xt=!1,jn=null;function __(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(xt){var e=yn;if(e){var n=e;if(!pp(t,e)){if(cd(t))throw Error(ce(418));e=Qi(n.nextSibling);var i=xn;e&&pp(t,e)?__(i,n):(t.flags=t.flags&-4097|2,xt=!1,xn=t)}}else{if(cd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,xt=!1,xn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ca(t){if(t!==xn)return!1;if(!xt)return mp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=yn)){if(cd(t))throw v_(),Error(ce(418));for(;e;)__(t,e),e=Qi(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?Qi(t.stateNode.nextSibling):null;return!0}function v_(){for(var t=yn;t;)t=Qi(t.nextSibling)}function ks(){yn=xn=null,xt=!1}function Hh(t){jn===null?jn=[t]:jn.push(t)}var nx=Di.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function y_(t){function e(u,v){if(t){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ir(u,v),u.index=0,u.sibling=null,u}function s(u,v,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,y,x){return v===null||v.tag!==6?(v=Zc(y,u.mode,x),v.return=u,v):(v=r(v,y),v.return=u,v)}function l(u,v,y,x){var P=y.type;return P===fs?d(u,v,y.props.children,x,y.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&gp(P)===v.type)?(x=r(v,y.props),x.ref=co(u,v,y),x.return=u,x):(x=Ml(y.type,y.key,y.props,null,u.mode,x),x.ref=co(u,v,y),x.return=u,x)}function c(u,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Jc(y,u.mode,x),v.return=u,v):(v=r(v,y.children||[]),v.return=u,v)}function d(u,v,y,x,P){return v===null||v.tag!==7?(v=Lr(y,u.mode,x,P),v.return=u,v):(v=r(v,y),v.return=u,v)}function f(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Zc(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return y=Ml(v.type,v.key,v.props,null,u.mode,y),y.ref=co(u,null,v),y.return=u,y;case hs:return v=Jc(v,u.mode,y),v.return=u,v;case Gi:var x=v._init;return f(u,x(v._payload),y)}if(Eo(v)||ro(v))return v=Lr(v,u.mode,y,null),v.return=u,v;Ra(u,v)}return null}function h(u,v,y,x){var P=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:a(u,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case va:return y.key===P?l(u,v,y,x):null;case hs:return y.key===P?c(u,v,y,x):null;case Gi:return P=y._init,h(u,v,P(y._payload),x)}if(Eo(y)||ro(y))return P!==null?null:d(u,v,y,x,null);Ra(u,y)}return null}function p(u,v,y,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(y)||null,a(v,u,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case va:return u=u.get(x.key===null?y:x.key)||null,l(v,u,x,P);case hs:return u=u.get(x.key===null?y:x.key)||null,c(v,u,x,P);case Gi:var A=x._init;return p(u,v,y,A(x._payload),P)}if(Eo(x)||ro(x))return u=u.get(y)||null,d(v,u,x,P,null);Ra(v,x)}return null}function g(u,v,y,x){for(var P=null,A=null,R=v,C=v=0,T=null;R!==null&&C<y.length;C++){R.index>C?(T=R,R=null):T=R.sibling;var w=h(u,R,y[C],x);if(w===null){R===null&&(R=T);break}t&&R&&w.alternate===null&&e(u,R),v=s(w,v,C),A===null?P=w:A.sibling=w,A=w,R=T}if(C===y.length)return n(u,R),xt&&Sr(u,C),P;if(R===null){for(;C<y.length;C++)R=f(u,y[C],x),R!==null&&(v=s(R,v,C),A===null?P=R:A.sibling=R,A=R);return xt&&Sr(u,C),P}for(R=i(u,R);C<y.length;C++)T=p(R,u,C,y[C],x),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?C:T.key),v=s(T,v,C),A===null?P=T:A.sibling=T,A=T);return t&&R.forEach(function(L){return e(u,L)}),xt&&Sr(u,C),P}function M(u,v,y,x){var P=ro(y);if(typeof P!="function")throw Error(ce(150));if(y=P.call(y),y==null)throw Error(ce(151));for(var A=P=null,R=v,C=v=0,T=null,w=y.next();R!==null&&!w.done;C++,w=y.next()){R.index>C?(T=R,R=null):T=R.sibling;var L=h(u,R,w.value,x);if(L===null){R===null&&(R=T);break}t&&R&&L.alternate===null&&e(u,R),v=s(L,v,C),A===null?P=L:A.sibling=L,A=L,R=T}if(w.done)return n(u,R),xt&&Sr(u,C),P;if(R===null){for(;!w.done;C++,w=y.next())w=f(u,w.value,x),w!==null&&(v=s(w,v,C),A===null?P=w:A.sibling=w,A=w);return xt&&Sr(u,C),P}for(R=i(u,R);!w.done;C++,w=y.next())w=p(R,u,C,w.value,x),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?C:w.key),v=s(w,v,C),A===null?P=w:A.sibling=w,A=w);return t&&R.forEach(function(V){return e(u,V)}),xt&&Sr(u,C),P}function m(u,v,y,x){if(typeof y=="object"&&y!==null&&y.type===fs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case va:e:{for(var P=y.key,A=v;A!==null;){if(A.key===P){if(P=y.type,P===fs){if(A.tag===7){n(u,A.sibling),v=r(A,y.props.children),v.return=u,u=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gi&&gp(P)===A.type){n(u,A.sibling),v=r(A,y.props),v.ref=co(u,A,y),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}y.type===fs?(v=Lr(y.props.children,u.mode,x,y.key),v.return=u,u=v):(x=Ml(y.type,y.key,y.props,null,u.mode,x),x.ref=co(u,v,y),x.return=u,u=x)}return o(u);case hs:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),v=r(v,y.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Jc(y,u.mode,x),v.return=u,u=v}return o(u);case Gi:return A=y._init,m(u,v,A(y._payload),x)}if(Eo(y))return g(u,v,y,x);if(ro(y))return M(u,v,y,x);Ra(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,y),v.return=u,u=v):(n(u,v),v=Zc(y,u.mode,x),v.return=u,u=v),o(u)):n(u,v)}return m}var zs=y_(!0),x_=y_(!1),Gl=hr(null),Wl=null,Ss=null,Vh=null;function Gh(){Vh=Ss=Wl=null}function Wh(t){var e=Gl.current;vt(Gl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Wl=t,Vh=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Vh!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Wl===null)throw Error(ce(308));Ss=t,Wl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ar=null;function jh(t){Ar===null?Ar=[t]:Ar.push(t)}function S_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,M=a;switch(h=e,p=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Et({},f,h);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ca={},oi=hr(ca),Jo=hr(ca),Qo=hr(ca);function Cr(t){if(t===ca)throw Error(ce(174));return t}function Yh(t,e){switch(ht(Qo,e),ht(Jo,t),ht(oi,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}vt(oi),ht(oi,e)}function Bs(){vt(oi),vt(Jo),vt(Qo)}function E_(t){Cr(Qo.current);var e=Cr(oi.current),n=ju(e,t.type);e!==n&&(ht(Jo,t),ht(oi,n))}function $h(t){Jo.current===t&&(vt(oi),vt(Jo))}var St=hr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function qh(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var _l=Di.ReactCurrentDispatcher,Xc=Di.ReactCurrentBatchConfig,Ur=0,Mt=null,Pt=null,kt=null,Yl=!1,Io=!1,ea=0,ix=0;function jt(){throw Error(ce(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Zh(t,e,n,i,r,s){if(Ur=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?ax:lx,t=n(i,r),Io){s=0;do{if(Io=!1,ea=0,25<=s)throw Error(ce(301));s+=1,kt=Pt=null,e.updateQueue=null,_l.current=cx,t=n(i,r)}while(Io)}if(_l.current=$l,e=Pt!==null&&Pt.next!==null,Ur=0,kt=Pt=Mt=null,Yl=!1,e)throw Error(ce(300));return t}function Jh(){var t=ea!==0;return ea=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Mt.memoizedState=kt=t:kt=kt.next=t,kt}function On(){if(Pt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=kt===null?Mt.memoizedState:kt.next;if(e!==null)kt=e,Pt=t;else{if(t===null)throw Error(ce(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},kt===null?Mt.memoizedState=kt=t:kt=kt.next=t}return kt}function ta(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ur&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=d,Fr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=On(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w_(){}function T_(t,e){var n=Mt,i=On(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Qh(C_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,na(9,A_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Ur&30||b_(n,e,r)}return r}function b_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&P_(t)}function C_(t,e,n){return n(function(){R_(e)&&P_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function P_(t){var e=Ci(t,1);e!==null&&$n(e,t,1,-1)}function yp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,Mt,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function D_(){return On().memoizedState}function vl(t,e,n,i){var r=ei();Mt.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Kh(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=na(1|e,n,s,i)}function xp(t,e){return vl(8390656,8,t,e)}function Qh(t,e){return pc(2048,8,t,e)}function L_(t,e){return pc(4,2,t,e)}function N_(t,e){return pc(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,I_.bind(null,e,t),n)}function ef(){}function F_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return Ur&21?(Kn(n,e)||(n=Gg(),Mt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function rx(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{rt=n,Xc.transition=i}}function z_(){return On().memoizedState}function sx(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))H_(e,n);else if(n=S_(t,e,n,i),n!==null){var r=tn();$n(n,t,i,r),V_(n,e,i)}}function ox(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))H_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S_(t,e,r,i),n!==null&&(r=tn(),$n(n,t,i,r),V_(n,e,i))}}function B_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function H_(t,e){Io=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}var $l={readContext:Fn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},ax={readContext:Fn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:ef,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=rx.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ei();if(xt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Ur&30||b_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xp(C_.bind(null,i,s,t),[t]),i.flags|=2048,na(9,A_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=zt.identifierPrefix;if(xt){var n=xi,i=yi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Fn,useCallback:F_,useContext:Fn,useEffect:Qh,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:N_,useMemo:O_,useReducer:Yc,useRef:D_,useState:function(){return Yc(ta)},useDebugValue:ef,useDeferredValue:function(t){var e=On();return k_(e,Pt.memoizedState,t)},useTransition:function(){var t=Yc(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1},cx={readContext:Fn,useCallback:F_,useContext:Fn,useEffect:Qh,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:N_,useMemo:O_,useReducer:$c,useRef:D_,useState:function(){return $c(ta)},useDebugValue:ef,useDeferredValue:function(t){var e=On();return Pt===null?e.memoizedState=t:k_(e,Pt.memoizedState,t)},useTransition:function(){var t=$c(ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&($n(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=nr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&($n(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&($n(e,t,i,n),gl(e,t,i))}};function Sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function G_(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=hn(e)?Nr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=hn(e)?Nr:Kt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,wd=i),pd(t,e)},n}function j_(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var dx=Di.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?x_(e,null,n,i):zs(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Zh(t,e,n,i,s,r),n=Jh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(xt&&n&&zh(e),e.flags|=1,en(t,e,i,r),e.child)}function Ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X_(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function X_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return md(t,e,n,i,r)}function Y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Es,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Es,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Es,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Es,vn),vn|=i;return en(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=hn(n)?Nr:Kt.current;return s=Os(e,s),Ps(e,r),n=Zh(t,e,n,i,s,r),i=Jh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(xt&&i&&zh(e),e.flags|=1,en(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(hn(n)){var s=!0;Bl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)yl(t,e),G_(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=hn(n)?Nr:Kt.current,c=Os(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),Wi=!1;var h=e.memoizedState;o.state=h,jl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||Wi?(typeof d=="function"&&(hd(e,n,d,i),l=e.memoizedState),(a=Wi||Sp(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,M_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=hn(n)?Nr:Kt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mp(e,o,i,l),Wi=!1,h=e.memoizedState,o.state=h,jl(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||dn.current||Wi?(typeof p=="function"&&(hd(e,n,p,i),g=e.memoizedState),(c=Wi||Sp(e,n,c,i,h,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fp(e,n,!1),Ri(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Yh(t,e.containerInfo)}function Rp(t,e,n,i,r){return ks(),Hh(r),e.flags|=256,en(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=_d,t):tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tf(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Hh(i),zs(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qc(Error(ce(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=_d,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=qc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),$n(i,t,r,-1))}return lf(),i=qc(Error(ce(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Qi(r.nextSibling),xn=e,xt=!0,jn=null,t!==null&&(Rn[Pn++]=yi,Rn[Pn++]=xi,Rn[Pn++]=Ir,yi=t.id,xi=t.overflow,Ir=e),e=tf(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:q_(e),ks();break;case 5:E_(e);break;case 1:hn(e.type)&&Bl(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(ht(St,St.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return Ri(t,e,n)}var J_,yd,Q_,e0;J_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(oi.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}Xu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};e0=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function px(t,e,n){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&zl(),Xt(e),null;case 3:return i=e.stateNode,Bs(),vt(dn),vt(Kt),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Ad(jn),jn=null))),yd(t,e),Xt(e),null;case 5:$h(e);var r=Cr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Xt(e),null}if(t=Cr(oi.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)_t(To[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":zf(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Hf(i,s),_t("invalid",i)}Xu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":ya(i),Bf(i,s,!0);break;case"textarea":ya(i),Vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Zo]=i,J_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)_t(To[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":zf(t,i),r=Hu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Hf(t,i),r=Wu(t,i),_t("invalid",t);break;default:r=i}Xu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":ya(t),Bf(t,i,!1);break;case"textarea":ya(t),Vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Cr(Qo.current),Cr(oi.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Aa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Xt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&yn!==null&&e.mode&1&&!(e.flags&128))v_(),ks(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ni]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(Ad(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Dt===0&&(Dt=3):lf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Bs(),yd(t,e),t===null&&qo(e.stateNode.containerInfo),Xt(e),null;case 10:return Wh(e.type._context),Xt(e),null;case 17:return hn(e.type)&&zl(),Xt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Vs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Xt(e),null}else 2*bt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function mx(t,e){switch(Bh(e),e.tag){case 1:return hn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),vt(dn),vt(Kt),qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $h(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Bs(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Da=!1,qt=!1,gx=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Dp=!1;function _x(t,e){if(id=Ul,t=s_(),kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Ul=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gn(e.type,M),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=Dp,Dp=!1,g}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Zo],delete e[ad],delete e[Qy],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Bt=null,Wn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:qt||Ms(n,e);case 6:var i=Bt,r=Wn;Bt=null,Ui(t,e,n),Bt=i,Wn=r,Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Xo(t)):Gc(Bt,n.stateNode));break;case 4:i=Bt,r=Wn,Bt=n.stateNode.containerInfo,Wn=!0,Ui(t,e,n),Bt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!qt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ui(t,e,n),qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(i){var r=bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Wn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Bt===null)throw Error(ce(160));i0(s,o,r),Bt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(M){wt(t,t.return,M)}try{Uo(5,t,t.return)}catch(M){wt(t,t.return,M)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(M){wt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bg(r,s),Yu(a,o);var c=Yu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Dg(r,f):d==="dangerouslySetInnerHTML"?Rg(r,f):d==="children"?Vo(r,f):Th(r,d,f,c)}switch(a){case"input":Vu(r,s);break;case"textarea":Ag(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(M){wt(t,t.return,M)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){wt(t,t.return,M)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(M){wt(t,t.return,M)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sf=bt())),i&4&&Np(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,zn(e,t),qt=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(f=Te=d;Te!==null;){switch(h=Te,p=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:Ms(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){wt(i,n,M)}}break;case 5:Ms(h,h.return);break;case 22:if(h.memoizedState!==null){Up(f);continue}}p!==null?(p.return=h,Te=p):Up(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(M){wt(t,t.return,M)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){wt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&Np(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=Lp(t);Ed(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lp(t);Md(t,a,o);break;default:throw Error(ce(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){Te=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Da;var c=qt;if(Da=o,(qt=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,Te=l):Fp(r);for(;s!==null;)Te=s,s0(s),s=s.sibling;Te=r,Da=a,qt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ip(t)}}function Ip(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}qt||e.flags&512&&Sd(e)}catch(h){wt(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Up(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Fp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Sd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var yx=Math.ceil,ql=Di.ReactCurrentDispatcher,nf=Di.ReactCurrentOwner,In=Di.ReactCurrentBatchConfig,Je=0,zt=null,Ct=null,Vt=0,vn=0,Es=hr(0),Dt=0,ia=null,Fr=0,_c=0,rf=0,Fo=null,cn=null,sf=0,Vs=1/0,mi=null,Kl=!1,wd=null,tr=null,La=!1,qi=null,Zl=0,Oo=0,Td=null,xl=-1,Sl=0;function tn(){return Je&6?bt():xl!==-1?xl:xl=bt()}function nr(t){return t.mode&1?Je&2&&Vt!==0?Vt&-Vt:nx.transition!==null?(Sl===0&&(Sl=Gg()),Sl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Kg(t.type)),t):1}function $n(t,e,n,i){if(50<Oo)throw Oo=0,Td=null,Error(ce(185));oa(t,n,i),(!(Je&2)||t!==zt)&&(t===zt&&(!(Je&2)&&(_c|=n),Dt===4&&Xi(t,Vt)),fn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=bt()+500,fc&&fr()))}function fn(t,e){var n=t.callbackNode;ny(t,e);var i=Il(t,t===zt?Vt:0);if(i===0)n!==null&&jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jf(n),e===1)t.tag===0?tx(Op.bind(null,t)):m_(Op.bind(null,t)),Zy(function(){!(Je&6)&&fr()}),n=null;else{switch(Wg(i)){case 1:n=Ph;break;case 4:n=Hg;break;case 16:n=Nl;break;case 536870912:n=Vg;break;default:n=Nl}n=f0(n,o0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o0(t,e){if(xl=-1,Sl=0,Je&6)throw Error(ce(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Il(t,t===zt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=Je;Je|=2;var s=l0();(zt!==t||Vt!==e)&&(mi=null,Vs=bt()+500,Dr(t,e));do try{Mx();break}catch(a){a0(t,a)}while(!0);Gh(),ql.current=s,Je=r,Ct!==null?e=0:(zt=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=ia,Dr(t,0),Xi(t,i),fn(t,bt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!xx(r)&&(e=Jl(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=ia,Dr(t,0),Xi(t,i),fn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Mr(t,cn,mi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=sf+500-bt(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=od(Mr.bind(null,t,cn,mi),e);break}Mr(t,cn,mi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=od(Mr.bind(null,t,cn,mi),i);break}Mr(t,cn,mi);break;case 5:Mr(t,cn,mi);break;default:throw Error(ce(329))}}}return fn(t,bt()),t.callbackNode===n?o0.bind(null,t):null}function bd(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=cn,cn=n,e!==null&&Ad(e)),t}function Ad(t){cn===null?cn=t:cn.push.apply(cn,t)}function xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~rf,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(Je&6)throw Error(ce(327));Ds();var e=Il(t,0);if(!(e&1))return fn(t,bt()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=ia,Dr(t,0),Xi(t,e),fn(t,bt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,cn,mi),fn(t,bt()),null}function of(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=bt()+500,fc&&fr())}}function Or(t){qi!==null&&qi.tag===0&&!(Je&6)&&Ds();var e=Je;Je|=1;var n=In.transition,i=rt;try{if(In.transition=null,rt=1,t)return t()}finally{rt=i,In.transition=n,Je=e,!(Je&6)&&fr()}}function af(){vn=Es.current,vt(Es)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Bs(),vt(dn),vt(Kt),qh();break;case 5:$h(i);break;case 4:Bs();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Wh(i.type._context);break;case 22:case 23:af()}n=n.return}if(zt=t,Ct=t=ir(t.current,null),Vt=vn=e,Dt=0,ia=null,rf=_c=Fr=0,cn=Fo=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function a0(t,e){do{var n=Ct;try{if(Gh(),_l.current=$l,Yl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(Ur=0,kt=Pt=Mt=null,Io=!1,ea=0,nf.current=null,n===null||n.return===null){Dt=1,ia=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wp(o);if(p!==null){p.flags&=-257,Tp(p,o,a,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){Ep(s,c,e),lf();break e}l=Error(ce(426))}}else if(xt&&a.mode&1){var m=wp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,o,a,s,e),Hh(Hs(l,a));break e}}s=l=Hs(l,a),Dt!==4&&(Dt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=W_(s,l,e);_p(s,u);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tr===null||!tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=j_(s,a,e);_p(s,x);break e}}s=s.return}while(s!==null)}u0(n)}catch(P){e=P,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function l0(){var t=ql.current;return ql.current=$l,t===null?$l:t}function lf(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(Fr&268435455)&&!(_c&268435455)||Xi(zt,Vt)}function Jl(t,e){var n=Je;Je|=2;var i=l0();(zt!==t||Vt!==e)&&(mi=null,Dr(t,e));do try{Sx();break}catch(r){a0(t,r)}while(!0);if(Gh(),Je=n,ql.current=i,Ct!==null)throw Error(ce(261));return zt=null,Vt=0,Dt}function Sx(){for(;Ct!==null;)c0(Ct)}function Mx(){for(;Ct!==null&&!Yv();)c0(Ct)}function c0(t){var e=h0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?u0(t):Ct=e,nf.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=px(n,e,vn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function Mr(t,e,n){var i=rt,r=In.transition;try{In.transition=null,rt=1,Ex(t,e,n,i)}finally{In.transition=r,rt=i}return null}function Ex(t,e,n,i){do Ds();while(qi!==null);if(Je&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===zt&&(Ct=zt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,f0(Nl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=rt;rt=1;var a=Je;Je|=4,nf.current=null,_x(t,n),r0(n,t),Gy(rd),Ul=!!id,rd=id=null,t.current=n,vx(n),$v(),Je=a,rt=o,In.transition=s}else t.current=n;if(La&&(La=!1,qi=t,Zl=r),s=t.pendingLanes,s===0&&(tr=null),Zv(n.stateNode),fn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=wd,wd=null,t;return Zl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Td?Oo++:(Oo=0,Td=t):Oo=0,fr(),null}function Ds(){if(qi!==null){var t=Wg(Zl),e=In.transition,n=rt;try{if(In.transition=null,rt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Zl=0,Je&6)throw Error(ce(331));var r=Je;for(Je|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Uo(8,d,s)}var f=d.child;if(f!==null)f.return=d,Te=f;else for(;Te!==null;){d=Te;var h=d.sibling,p=d.return;if(t0(d),d===c){Te=null;break}if(h!==null){h.return=p,Te=h;break}Te=p}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Te=y;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(P){wt(a,a.return,P)}if(a===o){Te=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Te=x;break e}Te=a.return}}if(Je=r,fr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{rt=n,In.transition=e}}return!1}function kp(t,e,n){e=Hs(n,e),e=W_(t,e,1),t=er(t,e,1),e=tn(),t!==null&&(oa(t,1,e),fn(t,e))}function wt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Hs(n,t),t=j_(e,t,1),e=er(e,t,1),t=tn(),e!==null&&(oa(e,1,t),fn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Vt&n)===n&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>bt()-sf?Dr(t,0):rf|=n),fn(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=tn();t=Ci(t,e),t!==null&&(oa(t,e,n),fn(t,n))}function Tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),d0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,fx(t,e,n);un=!!(t.flags&131072)}else un=!1,xt&&e.flags&1048576&&g_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=Os(e,Kt.current);Ps(e,n),r=Zh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xh(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&zh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cx(i),t=Gn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Ap(null,e,i,Gn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Cp(t,e,i,r,n);case 3:e:{if(q_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,M_(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ce(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ce(424)),e),e=Rp(t,e,i,n,r);break e}else for(yn=Qi(e.stateNode.containerInfo.firstChild),xn=e,xt=!0,jn=null,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return E_(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sd(i,r)?o=null:s!==null&&sd(i,s)&&(e.flags|=32),$_(t,e),en(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return K_(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Gl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Fn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Ap(t,e,i,r,n);case 15:return X_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),yl(t,e),e.tag=1,hn(i)?(t=!0,Bl(e)):t=!1,Ps(e,n),G_(e,i,r),fd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return Z_(t,e,n);case 22:return Y_(t,e,n)}throw Error(ce(156,e.tag))};function f0(t,e){return Bg(t,e)}function Ax(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new Ax(t,e,n,i)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ah)return 11;if(t===Ch)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Lr(n.children,r,s,e);case bh:o=8,r|=8;break;case Ou:return t=Nn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case ku:return t=Nn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=Nn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case Eg:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sg:o=10;break e;case Mg:o=9;break e;case Ah:o=11;break e;case Ch:o=14;break e;case Gi:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,i,r,s,o,a,l){return t=new Rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),t}function Px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(hn(n))return p_(t,n,e)}return e}function m0(t,e,n,i,r,s,o,a,l){return t=uf(n,i,!0,t,r,s,o,a,l),t.context=p0(null),n=t.current,i=tn(),r=nr(n),s=wi(i,r),s.callback=e!=null?e:null,er(n,s,r),t.current.lanes=r,oa(t,r,i),fn(t,i),t}function yc(t,e,n,i){var r=e.current,s=tn(),o=nr(r);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&($n(t,r,o,s),gl(t,r,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Dx(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}xc.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));yc(t,e,null,null)};xc.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){yc(null,t,null,null)}),e[Ai]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&qg(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Lx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ql(o);s.call(c)}}var o=m0(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[Ai]=o.current,qo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ql(l);a.call(c)}}var l=uf(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Ai]=l.current,qo(t.nodeType===8?t.parentNode:t),Or(function(){yc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}yc(e,o,t,r)}else o=Lx(n,e,t,r,i);return Ql(o)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Dh(e,n|1),fn(e,bt()),!(Je&6)&&(Vs=bt()+500,fr()))}break;case 13:Or(function(){var i=Ci(t,1);if(i!==null){var r=tn();$n(i,t,1,r)}}),df(t,1)}};Lh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=tn();$n(e,t,134217728,n)}df(t,134217728)}};Xg=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=tn();$n(n,t,e,i)}df(t,e)}};Yg=function(){return rt};$g=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};qu=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(ce(90));Tg(i),Vu(i,r)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};Ig=of;Ug=Or;var Nx={usingClientEntryPoint:!1,Events:[la,_s,hc,Lg,Ng,of]},ho={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{lc=Na.inject(Ix),si=Na}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(ce(200));return Px(t,e,null,n)};Mn.createRoot=function(t,e){if(!ff(t))throw Error(ce(299));var n=!1,i="",r=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,qo(t.nodeType===8?t.parentNode:t),new hf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Or(t)};Mn.hydrate=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=g0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ai]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};Mn.render=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(ce(40));return t._reactRootContainer?(Or(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Mn.unstable_batchedUpdates=of;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Mc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),_g.exports=Mn;var Ux=_g.exports,Hp=Ux;Uu.createRoot=Hp.createRoot,Uu.hydrateRoot=Hp.hydrateRoot;function Fx({runs:t,selectedId:e,onSelect:n,onRefresh:i,onDelete:r,isLoading:s}){return S.jsxs("aside",{className:"sidebar",children:[S.jsxs("div",{className:"header",children:[S.jsx("h2",{children:"Simulation Runs"}),S.jsx("button",{className:"button",onClick:i,disabled:s,children:"Refresh"})]}),S.jsxs("div",{style:{marginTop:"1rem"},children:[t.length===0&&S.jsx("p",{children:"No runs yet. Create one from the backend."}),t.map(o=>{var a;return S.jsxs("div",{className:`run-item ${e===o.id?"active":""} run-item--with-icon`,onClick:()=>n(o.id),children:[S.jsxs("div",{className:"run-item__content",children:[S.jsx("strong",{children:(a=o.name)!=null?a:"Untitled Run"}),S.jsxs("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:["Status: ",o.status]}),S.jsxs("div",{style:{fontSize:"0.75rem",marginTop:"0.4rem",color:"#64748b"},children:["Updated: ",new Date(o.updated_at).toLocaleString()]})]}),r&&S.jsx("button",{className:"icon-btn",title:"Delete run","aria-label":"Delete run",onClick:l=>{l.stopPropagation(),confirm("Delete this run? This cannot be undone.")&&r(o.id)},children:"🗑"})]},o.id)})]})]})}function Ox({apiBase:t,runId:e}){const[n,i]=le.useState(null),[r,s]=le.useState(null),[o,a]=le.useState(null),[l,c]=le.useState(!1),[d,f]=le.useState(null),[h,p]=le.useState(!0),[g,M]=le.useState(!0),[m,u]=le.useState(500);le.useState(null)[0];const[v,y]=le.useState(null);return le.useEffect(()=>{if(!e){i(null),s(null);return}const x=new AbortController,P=C=>{const T=t.endsWith("/")?t:t+"/",w=C.replace(/^\/+/,"");return new URL(w,T).toString()},A=async()=>{var C;try{const T=P(`/runs/${e}/ped`),w=P(`/runs/${e}/energy_series?limit=${encodeURIComponent(m)}`),[L,V]=await Promise.all([fetch(T,{signal:x.signal}),fetch(w,{signal:x.signal})]);if(!L.ok){const K=await L.text();a(`PED fetch failed (${L.status}): ${K}`),i(null),s(null);return}if(!V.ok){const K=await V.text();a(`Series fetch failed (${V.status}): ${K}`),i(null),s(null);return}const F=await L.json(),G=await V.json();if(typeof F!="object"||F===null||typeof F.total_gen_mwh!="number"){a("PED payload invalid"),i(null),s(null);return}if(a(null),i(F),s(G),l){const K=P(`/runs/${e}/optimize`),j=await fetch(K,{signal:x.signal});j.ok?f(await j.json()):f(null)}else f(null)}catch(T){a((C=T==null?void 0:T.message)!=null?C:String(T)),i(null),s(null)}};A();const R=setInterval(A,3e3);return()=>{clearInterval(R),x.abort()}},[t,e,l,m]),S.jsxs("div",{className:"metric-card",style:{gridColumn:"1 / -1"},children:[S.jsx("div",{className:"metric-label",children:"PED (Positive Energy District)"}),S.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:8,alignItems:"center",flexWrap:"wrap"},children:[S.jsx("button",{className:"button",onClick:()=>c(x=>!x),"aria-pressed":l,"aria-label":"Toggle dispatch overlays",children:l?"Hide Dispatch":"Show Dispatch"}),S.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[S.jsx("input",{type:"checkbox",checked:h,onChange:x=>p(x.target.checked),"aria-label":"Toggle generation series"})," Gen"]}),S.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[S.jsx("input",{type:"checkbox",checked:g,onChange:x=>M(x.target.checked),"aria-label":"Toggle load series"})," Load"]}),S.jsxs("label",{title:"Timeframe",style:{display:"inline-flex",alignItems:"center",gap:6},children:["Range",S.jsxs("select",{value:m,onChange:x=>u(Number(x.target.value)),children:[S.jsx("option",{value:100,children:"100"}),S.jsx("option",{value:500,children:"500"}),S.jsx("option",{value:2e3,children:"2000"}),S.jsx("option",{value:1e4,children:"10000"})]})]}),S.jsx("button",{className:"button",onClick:()=>kx(r,d,n),"aria-label":"Export CSV",children:"Export CSV"})]}),o&&S.jsx("div",{style:{color:"#fca5a5",marginBottom:"0.5rem"},children:o}),n?S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:[S.jsxs("div",{children:[S.jsx("div",{className:"metric-label",children:"Total Gen (MWh)"}),S.jsx("div",{className:"metric-value",children:Number(n.total_gen_mwh).toFixed(1)})]}),S.jsxs("div",{children:[S.jsx("div",{className:"metric-label",children:"Total Demand (MWh)"}),S.jsx("div",{className:"metric-value",children:Number(n.total_demand_mwh).toFixed(1)})]}),S.jsxs("div",{children:[S.jsx("div",{className:"metric-label",children:"Balance (MWh)"}),S.jsx("div",{className:"metric-value",children:Number(n.ped_absolute_mwh).toFixed(1)})]}),S.jsxs("div",{children:[S.jsx("div",{className:"metric-label",children:"PED Ratio"}),S.jsx("div",{className:"metric-value",children:Number(n.ped_ratio).toFixed(3)})]})]}):S.jsx("div",{children:"—"}),r&&S.jsxs("div",{style:{position:"relative",marginTop:"0.75rem"},children:[S.jsxs("div",{style:{position:"absolute",top:0,right:0,background:"rgba(15,23,42,0.85)",border:"1px solid rgba(148,163,184,0.3)",borderRadius:8,padding:"6px 8px",display:"flex",gap:"0.6rem",alignItems:"center",flexWrap:"wrap",zIndex:2},children:[S.jsx(Yr,{color:"#22c55e",label:"Generation"}),S.jsx(Yr,{color:"#ef4444",label:"Load"}),l&&S.jsxs(S.Fragment,{children:[S.jsx(Yr,{color:"#84cc16",label:"PV→Load"}),S.jsx(Yr,{color:"#22d3ee",label:"PV→Export"}),S.jsx(Yr,{color:"#f59e0b",label:"Battery→Load"}),S.jsx(Yr,{color:"#a78bfa",label:"Grid Import"})]})]}),S.jsx("svg",{ref:x=>{},width:"100%",height:"180",viewBox:"0 0 640 180",preserveAspectRatio:"none",onMouseMove:x=>{var P,A;try{const C=x.currentTarget.getBoundingClientRect(),T=x.clientX-C.left-40,w=r.gen_mw,L=r.load_mw,V=Math.max(w.length,L.length),F=560/Math.max(1,V-1),G=Math.max(0,Math.min(V-1,Math.round(T/(C.width-80)*(560/560)))),K=(P=w[G])!=null?P:0,j=(A=L[G])!=null?A:0;let ie=[`Gen: ${K.toFixed(2)} MW`,`Load: ${j.toFixed(2)} MW`];if(d&&d.series_mw){const I=d.series_mw,$=ne=>I[ne]&&I[ne][G]!==void 0?I[ne][G]:0;ie.push(`PV→Load: ${$("pv_to_load_mw").toFixed(2)} MW`),ie.push(`PV→Export: ${$("pv_export_mw").toFixed(2)} MW`),ie.push(`Batt→Load: ${$("batt_to_load_mw").toFixed(2)} MW`),ie.push(`Grid Import: ${$("grid_import_mw").toFixed(2)} MW`)}y({visible:!0,x:x.clientX-C.left+10,y:x.clientY-C.top-10,idx:G,text:ie.join(`
`)})}catch{}},onMouseLeave:()=>y(null),children:(()=>{const x=r.gen_mw,P=r.load_mw,A=Math.max(x.length,P.length);if(A===0)return null;const R=Math.max(1,...h?x:[0],...g?P:[0]),C=560/Math.max(1,A-1),T=L=>150-L/R*120,w=L=>L.map((V,F)=>`${F===0?"M":"L"} ${40+F*C} ${T(V)}`).join(" ");return S.jsxs(S.Fragment,{children:[S.jsx("line",{x1:40,y1:30,x2:40,y2:150,stroke:"#334155"}),S.jsx("line",{x1:40,y1:150,x2:600,y2:150,stroke:"#334155"}),S.jsx("text",{x:8,y:32,fill:"#94a3b8",fontSize:"10",children:"MW"}),S.jsx("text",{x:580,y:170,fill:"#94a3b8",fontSize:"10",children:"steps"}),h&&S.jsx("path",{d:w(x),stroke:"#22c55e",fill:"none",strokeWidth:"2"}),g&&S.jsx("path",{d:w(P),stroke:"#ef4444",fill:"none",strokeWidth:"2"}),d&&d.series_mw&&(()=>{const L=d.series_mw,V=["pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"],F={pv_to_load_mw:"#84cc16",pv_export_mw:"#22d3ee",batt_to_load_mw:"#f59e0b",grid_import_mw:"#a78bfa"},G=Math.max(R,...V.flatMap(ie=>L[ie]||[0])),K=ie=>150-ie/G*120,j=ie=>ie.map((I,$)=>`${$===0?"M":"L"} ${40+$*C} ${K(I)}`).join(" ");return S.jsx(S.Fragment,{children:V.map(ie=>L[ie]&&S.jsx("path",{d:j(L[ie]),stroke:F[ie],fill:"none",strokeWidth:"1.5"},ie))})})()]})})()}),v&&v.visible&&S.jsx("div",{style:{position:"absolute",left:v.x,top:v.y,pointerEvents:"none",background:"rgba(15,23,42,0.9)",color:"#e5e7eb",border:"1px solid rgba(148,163,184,0.3)",padding:"6px 8px",borderRadius:6,whiteSpace:"pre"},children:v.text})]})]})}function Yr({color:t,label:e}){return S.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[S.jsx("span",{style:{width:12,height:12,background:t,borderRadius:3,display:"inline-block"}}),S.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.85rem"},children:e})]})}function kx(t,e,n){var i,r,s,o,a,l,c,d,f,h;try{const p=[],g=["step","gen_mw","load_mw","pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"];p.push(g.join(","));const M=Math.max(((i=t==null?void 0:t.gen_mw)==null?void 0:i.length)||0,((r=t==null?void 0:t.load_mw)==null?void 0:r.length)||0),m=x=>{var P;return((P=e==null?void 0:e.series_mw)==null?void 0:P[x])||[]};for(let x=0;x<M;x++){const P=[String(((t==null?void 0:t.start)||0)+x),String((o=(s=t==null?void 0:t.gen_mw)==null?void 0:s[x])!=null?o:""),String((l=(a=t==null?void 0:t.load_mw)==null?void 0:a[x])!=null?l:""),String((c=m("pv_to_load_mw")[x])!=null?c:""),String((d=m("pv_export_mw")[x])!=null?d:""),String((f=m("batt_to_load_mw")[x])!=null?f:""),String((h=m("grid_import_mw")[x])!=null?h:"")];p.push(P.join(","))}n&&(p.push(""),Object.entries(n).forEach(([x,P])=>p.push(`# ${x},${String(P)}`)));const u=new Blob([p.join(`
`)],{type:"text/csv"}),v=URL.createObjectURL(u),y=document.createElement("a");y.href=v,y.download="digital_twin_series.csv",y.click(),URL.revokeObjectURL(v)}catch{}}const Ia={owned_wind_capacity_mw:270,owned_solar_capacity_mw:100,owned_hydro_capacity_mw:40,owned_battery_capacity_mwh:10,physical_allocation:.88,financial_allocation:.12,investment_freq:12};function zx({apiBase:t,onRun:e}){var I,$,ne,ae,he,Le;const[n,i]=le.useState([]),[r,s]=le.useState(!1),[o,a]=le.useState("My Scenario"),[l,c]=le.useState(""),[d,f]=le.useState(""),[h,p]=le.useState(Ia),[g,M]=le.useState(null),[m,u]=le.useState(!0),[v,y]=le.useState(null),[x,P]=le.useState(null),[A,R]=le.useState([]),C=N=>{const q=t.endsWith("/")?t:t+"/",re=N.replace(/^\/+/,"");return new URL(re,q).toString()},T=async()=>{s(!0);try{const q=await(await fetch(C("/scenarios"))).json();i(q)}catch{}s(!1)};le.useEffect(()=>{T()},[]);const w=async()=>{const N={name:o,description:l,details:d,config_overrides:h};(await fetch(C("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).ok&&await T()},L=async N=>{var re,Z,fe;P(null),y(N);const q=n.find(we=>we.id===N);q&&(M(q.id),a(q.name),c((re=q.description)!=null?re:""),f((Z=q.details)!=null?Z:""),p({...Ia,...q.config_overrides||{}}));try{const we=await fetch(C(`/scenarios/${N}/run`),{method:"POST"});if(we.ok){const Ne=await we.json();e(Ne.id)}else{const Ne=await we.text();P(`Run failed (${we.status}): ${Ne}`)}}catch(we){P((fe=we==null?void 0:we.message)!=null?fe:String(we))}finally{y(null)}},V=async N=>{if(!confirm("Delete this scenario? This cannot be undone."))return;(await fetch(C(`/scenarios/${N}`),{method:"DELETE"})).ok&&await T()},F=(N,q)=>p({...h,[N]:q}),G=async()=>{try{const N=await fetch(C("/runs"));if(!N.ok)return;const re=(await N.json()).slice(0,8),Z=[];for(const fe of re)try{const we=await fetch(C(`/runs/${fe.id}/ped`));if(!we.ok){Z.push({name:fe.name,status:fe.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"});continue}const Ne=await we.json();Z.push({name:fe.name,status:fe.status,ped_ratio:Number(Ne.ped_ratio).toFixed(3),total_gen_mwh:Number(Ne.total_gen_mwh).toFixed(1),total_demand_mwh:Number(Ne.total_demand_mwh).toFixed(1)})}catch{Z.push({name:fe.name,status:fe.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"})}R(Z)}catch{}};le.useEffect(()=>{G()},[]);const K=["Scenario 1: Baseline","Scenario 2: High PV Deployment","Scenario 3: High PV + Battery (4h)","Scenario 4: High PV + Large Battery","Scenario 5: DSM (Flexible Demand)"],j=N=>K.includes(N),ie=[...n].sort((N,q)=>{var fe,we;const re=j(N.name),Z=j(q.name);if(re&&Z){const Ne=parseInt(((fe=N.name.match(/Scenario (\d)/))==null?void 0:fe[1])||"0"),He=parseInt(((we=q.name.match(/Scenario (\d)/))==null?void 0:we[1])||"0");return Ne-He}return re?-1:Z?1:0});return S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"360px 1fr",gap:"1rem"},children:[S.jsxs("div",{className:"sidebar",style:{maxHeight:"calc(100vh - 120px)",overflowY:"auto"},children:[S.jsxs("div",{className:"header",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[S.jsx("h2",{style:{flex:1},children:"Scenarios"}),S.jsx("button",{className:"button",onClick:()=>{M(null),a("My Scenario"),c(""),f(""),p({...Ia}),u(!0)},children:"New"}),S.jsx("button",{className:"button",onClick:T,disabled:r,children:"Refresh"})]}),S.jsx("div",{style:{marginTop:"1rem"},children:ie.map(N=>{var re;const q=j(N.name);return S.jsxs("div",{className:`run-item run-item--with-icon ${g===N.id?"active":""}`,style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:q?"linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%)":void 0,borderLeft:q?"3px solid #3b82f6":void 0},onClick:()=>{var Z,fe;M(N.id),a(N.name),c((Z=N.description)!=null?Z:""),f((fe=N.details)!=null?fe:""),p({...Ia,...N.config_overrides||{}})},children:[S.jsxs("div",{style:{flex:1},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S.jsx("strong",{children:N.name}),q&&S.jsx("span",{style:{fontSize:9,padding:"2px 5px",background:"#3b82f6",borderRadius:3,color:"#fff"},children:"PAPER"})]}),S.jsx("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:(re=N.description)!=null?re:""}),N.details&&S.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b",marginTop:4},children:[String(N.details).slice(0,120),String(N.details).length>120?"…":""]})]}),S.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:S.jsx("button",{className:"button",onClick:()=>L(N.id),"aria-busy":v===N.id,"aria-label":`Run ${N.name}`,children:v===N.id?"Running…":"Run"})}),!q&&S.jsx("button",{className:"icon-btn",title:"Delete scenario","aria-label":"Delete scenario",onClick:Z=>{Z.stopPropagation(),V(N.id)},children:"🗑"})]},N.id)})})]}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[S.jsx("div",{className:"header",children:S.jsx("h2",{children:"Create / Edit Scenario"})}),x&&S.jsx("div",{className:"metric-card",style:{color:"#fecaca"},children:x}),S.jsxs("div",{className:"metric-card",children:[S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[S.jsxs("label",{children:["Name",S.jsx("input",{style:{width:"100%"},value:o,onChange:N=>a(N.target.value)})]}),S.jsxs("label",{children:["Description",S.jsx("input",{style:{width:"100%"},value:l,onChange:N=>c(N.target.value)})]}),S.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Details",S.jsx("textarea",{style:{width:"100%",minHeight:90},value:d,onChange:N=>f(N.target.value)})]}),S.jsxs("label",{children:["Wind (MW)",S.jsx("input",{type:"number",value:h.owned_wind_capacity_mw,onChange:N=>F("owned_wind_capacity_mw",Number(N.target.value))})]}),S.jsxs("label",{children:["Solar (MW)",S.jsx("input",{type:"number",value:h.owned_solar_capacity_mw,onChange:N=>F("owned_solar_capacity_mw",Number(N.target.value))})]}),S.jsxs("label",{children:["Hydro (MW)",S.jsx("input",{type:"number",value:h.owned_hydro_capacity_mw,onChange:N=>F("owned_hydro_capacity_mw",Number(N.target.value))})]}),S.jsxs("label",{children:["Battery (MWh)",S.jsx("input",{type:"number",value:h.owned_battery_capacity_mwh,onChange:N=>F("owned_battery_capacity_mwh",Number(N.target.value))})]}),S.jsxs("label",{children:["Physical Allocation",S.jsx("input",{type:"number",step:"0.01",value:h.physical_allocation,onChange:N=>F("physical_allocation",Number(N.target.value))})]}),S.jsxs("label",{children:["Financial Allocation",S.jsx("input",{type:"number",step:"0.01",value:h.financial_allocation,onChange:N=>F("financial_allocation",Number(N.target.value))})]}),S.jsxs("label",{children:["Investment Freq (steps)",S.jsx("input",{type:"number",value:h.investment_freq,onChange:N=>F("investment_freq",Number(N.target.value))})]})]}),S.jsx("div",{style:{marginTop:"0.75rem",display:"flex",gap:"0.5rem",alignItems:"center"},children:g&&j(((I=n.find(N=>N.id===g))==null?void 0:I.name)||"")?S.jsxs(S.Fragment,{children:[S.jsx("button",{className:"button",onClick:async()=>{const q=`My ${o.replace(/^Scenario \d+:\s*/,"")}`,re={name:q,description:l,details:d,config_overrides:h},Z=await fetch(C("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(Z.ok){const fe=await Z.json();await T(),M(fe.id),a(q),alert("New user scenario created!")}},children:"Save As New"}),S.jsx("span",{style:{fontSize:11,color:"#94a3b8"},children:"Paper scenarios are read-only. Changes apply to this session only."})]}):S.jsxs(S.Fragment,{children:[S.jsx("button",{className:"button",onClick:w,children:"Save Scenario"}),g&&S.jsx("button",{className:"button",onClick:async()=>{const N=C(`/scenarios/${g}`);(await fetch(N,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,description:l,details:d,config_overrides:h})})).ok&&await T()},children:"Save Changes"})]})})]}),S.jsxs("div",{className:"metric-card",style:{whiteSpace:"pre-wrap"},children:[S.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[S.jsx("h3",{style:{margin:0},children:"Guideline: Designing a Scenario for PED"}),S.jsx("button",{className:"button",onClick:()=>u(N=>!N),children:m?"Hide":"Show"})]}),m&&S.jsxs("div",{children:[S.jsx("p",{children:"PED (Positive Energy District) targets annual on‑site renewable generation ≥ annual demand. Tune parameters below; then check Runs → Charts → PED to monitor total generation, total demand, balance and ratio (≥ 1.0 for PED)."}),S.jsxs("ul",{children:[S.jsxs("li",{children:[S.jsx("b",{children:"Solar (MW)"}),": rooftop PV nameplate. Increasing this primarily raises mid‑day generation. Current: ",String(($=h.owned_solar_capacity_mw)!=null?$:"—")," MW."]}),S.jsxs("li",{children:[S.jsx("b",{children:"Battery (MWh)"}),": storage energy. Shifts PV from mid‑day to evenings; reduces imports and exports; increases self‑consumption. Current: ",String((ne=h.owned_battery_capacity_mwh)!=null?ne:"—")," MWh."]}),S.jsxs("li",{children:[S.jsx("b",{children:"Investment Freq (steps)"}),": decision cadence (lower = more responsive). Use 6 for DSM‑like responsiveness; 12 for baseline. Current: ",String((ae=h.investment_freq)!=null?ae:"—"),"."]}),S.jsxs("li",{children:[S.jsx("b",{children:"Physical / Financial Allocation"}),": budget split that influences physical assets vs trading. Keep sensible totals (≈1.0). Current: ",String((he=h.physical_allocation)!=null?he:"—")," / ",String((Le=h.financial_allocation)!=null?Le:"—"),"."]})]}),S.jsxs("p",{children:[S.jsx("b",{children:"Suggested recipes"}),":",S.jsx("br",{}),"– Baseline: modest PV, no battery; observe import/export baseline.",S.jsx("br",{}),"– High PV: maximize PV; expect high mid‑day export.",S.jsx("br",{}),"– PV + Battery (4 h): add 0.32–0.64 MWh storage to boost self‑consumption.",S.jsx("br",{}),"– DSM‑like: keep PV+Battery and set investment_freq=6 to react faster."]}),S.jsx("p",{children:"Iterate: create → run → check PED ratio → adjust PV/battery/decisions until balance ≥ 0 and ratio ≥ 1.0. Use multiple saved scenarios to compare results."})]})]}),S.jsxs("div",{className:"metric-card",children:[S.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[S.jsx("h3",{style:{margin:0},children:"Compare Runs (latest)"}),S.jsx("button",{className:"button",onClick:G,children:"Refresh"})]}),A.length>0?S.jsxs(S.Fragment,{children:[S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginBottom:"1rem"},children:[S.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[S.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"PED Ratio"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:A.filter(N=>N.ped_ratio!=="-").slice(0,5).map((N,q)=>{const re=parseFloat(N.ped_ratio),Z=Math.min(re*100,150);return S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:N.name}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S.jsxs("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",left:"66.7%",top:0,bottom:0,width:2,background:"#fbbf24",zIndex:1},title:"PED Target (1.0)"}),S.jsx("div",{style:{height:"100%",width:`${Z/1.5}%`,background:re>=1?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:4}})]}),S.jsx("span",{style:{fontSize:11,fontWeight:600,color:re>=1?"#22c55e":"#ef4444",minWidth:40},children:re.toFixed(2)})]})]},q)})})]}),S.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[S.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Generation (MWh)"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const N=A.filter(re=>re.total_gen_mwh!=="-").slice(0,5),q=Math.max(...N.map(re=>parseFloat(re.total_gen_mwh)),1);return N.map((re,Z)=>{const fe=parseFloat(re.total_gen_mwh);return S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:re.name}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:S.jsx("div",{style:{height:"100%",width:`${fe/q*100}%`,background:"linear-gradient(90deg, #22c55e, #4ade80)",borderRadius:4}})}),S.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#22c55e",minWidth:50},children:fe.toFixed(0)})]})]},Z)})})()})]}),S.jsxs("div",{style:{background:"#1e293b",borderRadius:8,padding:"12px"},children:[S.jsx("div",{style:{fontSize:11,color:"#94a3b8",marginBottom:8},children:"Demand (MWh)"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:(()=>{const N=A.filter(re=>re.total_demand_mwh!=="-").slice(0,5),q=Math.max(...N.map(re=>parseFloat(re.total_demand_mwh)),1);return N.map((re,Z)=>{const fe=parseFloat(re.total_demand_mwh);return S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,color:"#64748b",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:re.name}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S.jsx("div",{style:{flex:1,height:16,background:"#0f172a",borderRadius:4,overflow:"hidden"},children:S.jsx("div",{style:{height:"100%",width:`${fe/q*100}%`,background:"linear-gradient(90deg, #f97316, #fb923c)",borderRadius:4}})}),S.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#f97316",minWidth:50},children:fe.toFixed(0)})]})]},Z)})})()})]})]}),S.jsx("div",{style:{overflowX:"auto"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[S.jsx("thead",{children:S.jsxs("tr",{style:{borderBottom:"1px solid #334155"},children:[S.jsx("th",{style:{textAlign:"left",padding:"8px",color:"#94a3b8",fontWeight:500},children:"Run Name"}),S.jsx("th",{style:{textAlign:"center",padding:"8px",color:"#94a3b8",fontWeight:500},children:"Status"}),S.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8",fontWeight:500},children:"PED Ratio"}),S.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8",fontWeight:500},children:"Gen (MWh)"}),S.jsx("th",{style:{textAlign:"right",padding:"8px",color:"#94a3b8",fontWeight:500},children:"Demand (MWh)"}),S.jsx("th",{style:{textAlign:"center",padding:"8px",color:"#94a3b8",fontWeight:500},children:"PED Status"})]})}),S.jsx("tbody",{children:A.map((N,q)=>{const re=N.ped_ratio!=="-"&&parseFloat(N.ped_ratio)>=1;return S.jsxs("tr",{style:{borderBottom:"1px solid #1e293b"},children:[S.jsx("td",{style:{padding:"8px",fontWeight:500},children:N.name}),S.jsx("td",{style:{padding:"8px",textAlign:"center"},children:S.jsx("span",{style:{padding:"2px 8px",borderRadius:4,fontSize:10,background:N.status==="completed"?"#166534":N.status==="running"?"#1e40af":"#374151"},children:N.status})}),S.jsx("td",{style:{padding:"8px",textAlign:"right",fontWeight:600,color:N.ped_ratio!=="-"&&parseFloat(N.ped_ratio)>=1?"#22c55e":"#ef4444"},children:N.ped_ratio}),S.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#22c55e"},children:N.total_gen_mwh}),S.jsx("td",{style:{padding:"8px",textAlign:"right",color:"#f97316"},children:N.total_demand_mwh}),S.jsx("td",{style:{padding:"8px",textAlign:"center"},children:N.ped_ratio==="-"?"—":re?S.jsx("span",{style:{color:"#22c55e"},children:"✓ PED"}):S.jsx("span",{style:{color:"#ef4444"},children:"✗ Not PED"})})]},q)})})]})})]}):S.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"No runs to compare. Run some scenarios first!"})]})]})]})}const bo={smart_building:{label:"Smart Building",icon:"🏢",color:"#6366f1",defaultParams:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30},description:"Intelligent building with controllable loads"},solar_pv:{label:"Solar PV",icon:"☀️",color:"#eab308",defaultParams:{capacity_kwp:100,tilt_deg:15,azimuth_deg:180,efficiency:.2},description:"Rooftop or ground-mounted photovoltaic panels"},battery_storage:{label:"Battery Storage",icon:"🔋",color:"#22c55e",defaultParams:{capacity_kwh:200,power_kw:50,efficiency:.92,initial_soc:.5},description:"Lithium-ion battery energy storage system"},wind_turbine:{label:"Wind Turbine",icon:"🌬️",color:"#06b6d4",defaultParams:{capacity_kw:500,hub_height_m:80,rotor_diameter_m:50},description:"Small-scale wind power generation"},district_heating:{label:"District Heating",icon:"🔥",color:"#ef4444",defaultParams:{supply_temp_c:70,return_temp_c:40,capacity_kw:500},description:"Connection to district heating network"},smart_grid:{label:"Smart Grid",icon:"⚡",color:"#8b5cf6",defaultParams:{import_limit_kw:1e3,export_limit_kw:500,tariff_type:"dynamic"},description:"Grid connection point with smart metering"},ev_charger:{label:"EV Charger",icon:"🚗",color:"#3b82f6",defaultParams:{num_ports:4,power_per_port_kw:22,v2g_enabled:!0},description:"Electric vehicle charging station with V2G"},heat_pump:{label:"Heat Pump",icon:"❄️",color:"#14b8a6",defaultParams:{capacity_kw:50,cop:3.5,type:"air_source"},description:"Air or ground source heat pump"},chp_unit:{label:"CHP Unit",icon:"⚙️",color:"#f97316",defaultParams:{electrical_kw:100,thermal_kw:150,fuel:"biogas"},description:"Combined heat and power generation"},thermal_storage:{label:"Thermal Storage",icon:"🌡️",color:"#ec4899",defaultParams:{capacity_kwh:500,max_temp_c:95,loss_pct_day:2},description:"Hot water thermal energy storage"},load_center:{label:"Load Center",icon:"📊",color:"#64748b",defaultParams:{base_load_kw:100,peak_load_kw:300,dsm_enabled:!0},description:"Aggregated electrical load point"}},Bx=Object.entries(bo).map(([t,e])=>({type:t,...e}));function Hx({onConfigChange:t,initialConfig:e,apiBase:n,onRunSimulation:i}){var Ve;const[r,s]=le.useState((e==null?void 0:e.components)||[]),[o,a]=le.useState((e==null?void 0:e.connections)||[]),[l,c]=le.useState(null),[d,f]=le.useState(null),[h,p]=le.useState((e==null?void 0:e.name)||"My Digital Twin"),[g,M]=le.useState(null),[m,u]=le.useState(()=>{const O=e==null?void 0:e.id;return O&&/^\d+$/.test(O)?O:null}),[v,y]=le.useState(!1),[x,P]=le.useState(!1),[A,R]=le.useState([]),[C,T]=le.useState(null),w=le.useRef(null),L=O=>{if(!n)return O;try{const se=n.endsWith("/")?n:n+"/";return new URL(O.replace(/^\/+/,""),se).toString()}catch{return n.replace(/\/+$/,"")+"/"+O.replace(/^\/+/,"")}};le.useEffect(()=>{n&&fetch(L("/scenarios")).then(O=>O.json()).then(O=>R(O||[])).catch(()=>{})},[n]),le.useEffect(()=>{if(!e)try{const O=localStorage.getItem("dt_builder_config");if(O){const se=JSON.parse(O);s(se.components||[]),a(se.connections||[]),p(se.name||"My Digital Twin")}}catch{}},[e]),le.useEffect(()=>{const O={id:(e==null?void 0:e.id)||`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:(e==null?void 0:e.created_at)||new Date().toISOString()};try{localStorage.setItem("dt_builder_config",JSON.stringify(O))}catch{}t==null||t(O)},[r,o,h,t,e]);const V=O=>{M(O)},F=le.useCallback(O=>{if(O.preventDefault(),!g||!w.current)return;const se=w.current.getBoundingClientRect(),te=O.clientX-se.left,E=O.clientY-se.top,_=bo[g],D={id:`${g}-${Date.now()}`,type:g,name:_.label,x:te,y:E,params:{..._.defaultParams}};s(W=>[...W,D]),M(null)},[g]),G=O=>{O.target===w.current&&(c(null),f(null))},K={solar_pv:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},wind_turbine:{targets:["smart_building","battery_storage","smart_grid","ev_charger","load_center","heat_pump"],type:"electricity"},battery_storage:{targets:["smart_building","smart_grid","ev_charger","load_center","solar_pv","wind_turbine"],type:"electricity"},smart_grid:{targets:["smart_building","battery_storage","ev_charger","load_center","heat_pump"],type:"electricity"},ev_charger:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},load_center:{targets:["smart_building","smart_grid","battery_storage"],type:"electricity"},heat_pump:{targets:["smart_building","thermal_storage","district_heating"],type:"heat"},district_heating:{targets:["smart_building","thermal_storage","heat_pump"],type:"heat"},thermal_storage:{targets:["smart_building","heat_pump","district_heating"],type:"heat"},chp_unit:{targets:["smart_building","smart_grid","battery_storage","thermal_storage"],type:"both"},smart_building:{targets:["smart_grid","ev_charger","load_center"],type:"electricity"}},j=(O,se)=>{const te=r.find(D=>D.id===O),E=r.find(D=>D.id===se);if(!te||!E)return{valid:!1,type:"electricity",error:"Component not found"};const _=K[te.type];if(!_.targets.includes(E.type)){const D=K[E.type];return D.targets.includes(te.type)?{valid:!0,type:D.type}:{valid:!1,type:"electricity",error:`Cannot connect ${bo[te.type].label} to ${bo[E.type].label}`}}return{valid:!0,type:_.type}},ie=(O,se)=>{if(se.stopPropagation(),d&&d!==O){const te=j(d,O);if(!te.valid){alert(te.error),f(null);return}const E={id:`conn-${Date.now()}`,from:d,to:O,type:te.type,capacity_kw:100};a(_=>[..._,E]),f(null)}else c(O)},I=O=>{f(O),c(null)},$=O=>{s(se=>se.filter(te=>te.id!==O)),a(se=>se.filter(te=>te.from!==O&&te.to!==O)),c(null)},ne=O=>{a(se=>se.filter(te=>te.id!==O))},ae=(O,se,te)=>{s(E=>E.map(_=>_.id===O?{..._,params:{..._.params,[se]:te}}:_))},he=(O,se,te)=>{s(E=>E.map(_=>_.id===O?{..._,x:se,y:te}:_))},Le=(O,se)=>{if(!w.current)return;const te=w.current.getBoundingClientRect(),E=se.clientX-te.left,_=se.clientY-te.top;E>0&&_>0&&he(O,E,_)},N=r.find(O=>O.id===l),q=O=>o.some(te=>te.from===O||te.to===O)?"valid":"isolated",Z=(()=>{let O=0,se=0,te=0,E=0,_=0,D=0,W=0,Q=0,J=0,me=0;r.forEach(st=>{st.type==="solar_pv"&&(_+=Number(st.params.capacity_kwp||0),O+=Number(st.params.capacity_kwp||0)),st.type==="wind_turbine"&&(D+=Number(st.params.capacity_kw||0),O+=Number(st.params.capacity_kw||0)),st.type==="chp_unit"&&(W+=Number(st.params.electrical_kw||0),O+=Number(st.params.electrical_kw||0)),st.type==="smart_building"&&(se+=Number(st.params.load_kw||0)),st.type==="load_center"&&(se+=Number(st.params.base_load_kw||0)),st.type==="ev_charger"&&(J+=Number(st.params.num_ports||0)*Number(st.params.power_per_port_kw||0)),st.type==="heat_pump"&&(Q+=Number(st.params.capacity_kw||0)),st.type==="battery_storage"&&(me+=Number(st.params.capacity_kwh||0),te+=Number(st.params.capacity_kwh||0)),st.type==="thermal_storage"&&(E+=Number(st.params.capacity_kwh||0))});const pe=.11,ve=.25,Ke=.6,ue=.35,xe=(_*pe+D*ve+W*Ke)*8.76,Ae=se*ue*8.76,Fe=se>0?me/se:0,be=.3,qe=Math.min(Fe*.1,.4),ze=Math.min(be+qe,.85),tt=Math.min(xe*ze,Ae),k=xe-tt,ge=Math.max(Ae-tt,0),ee=Ae>0?tt/Ae:0,ye=ge*1e3*.3-k*1e3*.08,Be=_*1200,yt=me*400,Ft=D*1500,et=Be+yt+Ft,on=.14,wn=ge*1e3*on,pa=Ae*1e3*on-wn,Zn=xe-Ae,eo=Ae>0?xe/Ae:0,to=Zn>=0,ma=to?0:(Ae-xe)/8.76/pe;return{genKw:O,loadKw:se,storageKwh:te,ratio:eo,isPed:to,annualGenMwh:xe,annualLoadMwh:Ae,netBalance:Zn,selfConsumptionRate:ze,selfSufficiencyRate:ee,gridImportMwh:ge,gridExportMwh:k,annualGridCost:ye,totalCapex:et,annualCO2:wn,co2Savings:pa,shortfallKw:ma}})(),fe=()=>{confirm("Clear all components?")&&(s([]),a([]),c(null),u(null))},we=async()=>{if(n){y(!0);try{const O={name:h,description:`Digital twin with ${r.length} components`,components:r.map(_=>({..._})),connections:o.map(_=>({..._}))},se=L(m?`/digital-twins/${m}`:"/digital-twins"),E=await fetch(se,{method:m?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(E.ok){const _=await E.json();u(_.id),alert("Saved successfully!")}else alert("Save failed: "+await E.text())}catch(O){alert("Save error: "+O.message)}finally{y(!1)}}},Ne=async()=>{if(!n){alert("API not configured");return}if(r.length===0){alert("Please add components to your digital twin first");return}P(!0);try{let O=m;if(!O){const te={name:h,description:`Digital twin with ${r.length} components`,components:r.map(D=>({...D})),connections:o.map(D=>({...D}))},E=await fetch(L("/digital-twins"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te)});if(!E.ok){alert("Failed to save: "+await E.text());return}O=(await E.json()).id,u(O)}const se=await fetch(L(`/digital-twins/${O}/run`),{method:"POST"});if(se.ok){const te=await se.json();i==null||i(te.id)}else alert("Run failed: "+await se.text())}catch(O){alert("Run error: "+((O==null?void 0:O.message)||String(O)))}finally{P(!1)}},He=async()=>{if(!n){alert("API not configured");return}const O=ke(),se={name:`Scenario: ${h}`,description:`Auto-generated from digital twin "${h}"`,details:`Components: ${r.map(E=>E.name).join(", ")}`,config_overrides:O},te=L("/scenarios");console.log("Creating scenario at:",te,se);try{const E=await fetch(te,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(se)});if(E.ok){const _=await E.json();T(_.id);const D=await fetch(L("/scenarios"));D.ok&&R(await D.json()),alert("Scenario created! You can now run it from the Scenarios tab.")}else{const _=await E.text();alert("Failed to create scenario: "+_)}}catch(E){console.error("Create scenario error:",E),alert("Error creating scenario: "+((E==null?void 0:E.message)||String(E)))}},ke=()=>{let O=0,se=0,te=0;return r.forEach(E=>{E.type==="solar_pv"&&(O+=Number(E.params.capacity_kwp||0)/1e3),E.type==="battery_storage"&&(se+=Number(E.params.capacity_kwh||0)/1e3),E.type==="wind_turbine"&&(te+=Number(E.params.capacity_kw||0)/1e3)}),{owned_solar_capacity_mw:O,owned_battery_capacity_mwh:se,owned_wind_capacity_mw:te,investment_freq:12}},pt=()=>{const O={id:`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:new Date().toISOString()},se=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),te=URL.createObjectURL(se),E=document.createElement("a");E.href=te,E.download=`${h.replace(/\s+/g,"_")}.json`,E.click(),URL.revokeObjectURL(te)},z=O=>{var E;const se=(E=O.target.files)==null?void 0:E[0];if(!se)return;const te=new FileReader;te.onload=_=>{var D;try{const W=JSON.parse((D=_.target)==null?void 0:D.result);s(W.components||[]),a(W.connections||[]),p(W.name||"Imported Config")}catch{alert("Invalid config file")}},te.readAsText(se)},Ut={scenario_1_baseline:{name:"Scenario 1: Baseline",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Existing Rooftop PV",x:300,y:60,params:{capacity_kwp:30,tilt_deg:15,azimuth_deg:180,efficiency:.18}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:100,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:30},{id:"c2",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c3",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_2_high_pv:{name:"Scenario 2: High PV",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Maximized Rooftop PV",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:171},{id:"c2",from:"pv-1",to:"grid-1",type:"electricity",capacity_kw:100},{id:"c3",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c4",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_3_pv_battery:{name:"Scenario 3: PV + Battery (4h)",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery 4h (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_4_large_battery:{name:"Scenario 4: PV + Large Battery",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Large Battery (640 kWh)",x:450,y:100,params:{capacity_kwh:640,power_kw:160,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:160},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:160},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_5_dsm:{name:"Scenario 5: DSM (Flexible)",components:[{id:"bld-1",type:"smart_building",name:"Smart Office (DSM)",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"load-1",type:"load_center",name:"Flexible Loads",x:150,y:100,params:{base_load_kw:100,peak_load_kw:150,dsm_enabled:!0}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"pv-1",to:"load-1",type:"electricity",capacity_kw:50},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"load-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c6",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c7",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},smart_district:{name:"Smart District PED",components:[{id:"bld-1",type:"smart_building",name:"Residential A",x:150,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"bld-2",type:"smart_building",name:"Residential B",x:350,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"pv-1",type:"solar_pv",name:"Community Solar",x:250,y:50,params:{capacity_kwp:300,tilt_deg:20,azimuth_deg:180,efficiency:.21}},{id:"bat-1",type:"battery_storage",name:"Community Battery",x:250,y:270,params:{capacity_kwh:600,power_kw:150,efficiency:.93,initial_soc:.5}},{id:"hp-1",type:"heat_pump",name:"Central Heat Pump",x:500,y:150,params:{capacity_kw:100,cop:3.8,type:"ground_source"}},{id:"grid-1",type:"smart_grid",name:"Grid PCC",x:50,y:270,params:{import_limit_kw:400,export_limit_kw:300,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bld-2",type:"electricity",capacity_kw:100},{id:"c3",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:150},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"bat-1",to:"bld-2",type:"electricity",capacity_kw:80},{id:"c6",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:300},{id:"c7",from:"hp-1",to:"bld-1",type:"heat",capacity_kw:50},{id:"c8",from:"hp-1",to:"bld-2",type:"heat",capacity_kw:50}]}},Ue=O=>{var E;const se=Ut[O];if(!se||r.length>0&&!confirm("This will replace your current design. Continue?"))return;s(se.components),a(se.connections),p(se.name),u(null);const te=(E=O.match(/scenario_(\d)/))==null?void 0:E[1];if(te&&A.length>0){const _=A.find(D=>D.name.toLowerCase().includes(`scenario ${te}`)||D.name.toLowerCase().includes(`s${te}`));_&&T(_.id)}};return S.jsxs("div",{style:{display:"flex",height:"100%",background:"#0f172a",color:"#e2e8f0"},children:[S.jsxs("div",{style:{width:220,borderRight:"1px solid #334155",padding:12,overflowY:"auto"},children:[S.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Components"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Bx.map(O=>S.jsxs("div",{draggable:!0,onDragStart:()=>V(O.type),style:{padding:"8px 10px",background:"#1e293b",borderRadius:6,cursor:"grab",display:"flex",alignItems:"center",gap:8,border:`2px solid ${O.color}33`,transition:"all 0.15s"},onMouseEnter:se=>se.currentTarget.style.borderColor=O.color,onMouseLeave:se=>se.currentTarget.style.borderColor=`${O.color}33`,title:O.description,children:[S.jsx("span",{style:{fontSize:20},children:O.icon}),S.jsx("span",{style:{fontSize:12},children:O.label})]},O.type))}),S.jsxs("div",{style:{marginTop:20,padding:10,background:"#1e293b",borderRadius:8,fontSize:10},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[S.jsx("h4",{style:{margin:0,fontSize:12,color:"#94a3b8"},children:"PED Status"}),S.jsx("span",{style:{padding:"2px 6px",borderRadius:4,fontSize:9,background:Z.isPed?"#166534":"#7f1d1d"},children:Z.isPed?"✓ PED":`${(Z.ratio*100).toFixed(0)}%`})]}),S.jsxs("div",{style:{marginBottom:8},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[S.jsx("span",{style:{color:"#64748b"},children:"Annual Balance"}),S.jsxs("span",{style:{color:Z.netBalance>=0?"#22c55e":"#ef4444"},children:[Z.netBalance>=0?"+":"",Z.netBalance.toFixed(1)," MWh"]})]}),S.jsx("div",{style:{height:6,background:"#334155",borderRadius:3,overflow:"hidden"},children:S.jsx("div",{style:{height:"100%",width:`${Math.min(Z.ratio*100,100)}%`,background:Z.isPed?"linear-gradient(90deg, #22c55e, #16a34a)":"linear-gradient(90deg, #ef4444, #dc2626)",borderRadius:3}})})]}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginBottom:8},children:[S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Generation"}),S.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[Z.annualGenMwh.toFixed(0)," MWh/y"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Consumption"}),S.jsxs("div",{style:{color:"#ef4444",fontWeight:600},children:[Z.annualLoadMwh.toFixed(0)," MWh/y"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Consumption"}),S.jsxs("div",{style:{color:"#eab308",fontWeight:600},children:[(Z.selfConsumptionRate*100).toFixed(0),"%"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Self-Sufficiency"}),S.jsxs("div",{style:{color:"#3b82f6",fontWeight:600},children:[(Z.selfSufficiencyRate*100).toFixed(0),"%"]})]})]}),S.jsxs("div",{style:{padding:6,background:"#0f172a",borderRadius:4,marginBottom:8},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[S.jsx("span",{style:{color:"#64748b"},children:"Grid Import:"}),S.jsxs("span",{style:{color:"#f97316"},children:[Z.gridImportMwh.toFixed(1)," MWh/y"]})]}),S.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[S.jsx("span",{style:{color:"#64748b"},children:"Grid Export:"}),S.jsxs("span",{style:{color:"#22c55e"},children:[Z.gridExportMwh.toFixed(1)," MWh/y"]})]})]}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. Grid Cost"}),S.jsxs("div",{style:{color:"#f97316",fontWeight:600},children:["€",(Z.annualGridCost/1e3).toFixed(1),"k/y"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"Est. CAPEX"}),S.jsxs("div",{style:{color:"#8b5cf6",fontWeight:600},children:["€",(Z.totalCapex/1e3).toFixed(0),"k"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Emissions"}),S.jsxs("div",{style:{color:"#94a3b8",fontWeight:600},children:[(Z.annualCO2/1e3).toFixed(1)," t/y"]})]}),S.jsxs("div",{style:{padding:4,background:"#0f172a",borderRadius:4},children:[S.jsx("div",{style:{color:"#64748b",fontSize:9},children:"CO₂ Savings"}),S.jsxs("div",{style:{color:"#22c55e",fontWeight:600},children:[(Z.co2Savings/1e3).toFixed(1)," t/y"]})]})]}),!Z.isPed&&Z.shortfallKw>0&&S.jsxs("div",{style:{marginTop:8,padding:6,background:"#1e3a5f",borderRadius:4,fontSize:9},children:["💡 Add ~",Z.shortfallKw.toFixed(0)," kWp solar to achieve PED"]})]}),S.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[n&&S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:we,disabled:v||r.length===0,style:{...Zt,background:"#16a34a"},children:v?"💾 Saving...":m?"💾 Update":"💾 Save"}),S.jsx("button",{onClick:Ne,disabled:x||r.length===0,style:{...Zt,background:"#2563eb"},children:x?"▶️ Starting...":"▶️ Run Simulation"}),S.jsx("button",{onClick:He,disabled:r.length===0,style:{...Zt,background:"#7c3aed"},children:"📋 Create Scenario"})]}),S.jsx("button",{onClick:pt,style:Zt,children:"📤 Export JSON"}),S.jsxs("label",{style:{...Zt,textAlign:"center",cursor:"pointer"},children:["📥 Import JSON",S.jsx("input",{type:"file",accept:".json",onChange:z,style:{display:"none"}})]}),S.jsx("button",{onClick:fe,style:{...Zt,background:"#7f1d1d"},children:"🗑️ Clear All"})]}),n&&C&&S.jsxs("div",{style:{marginTop:16,padding:8,background:"#1e3a5f",borderRadius:6,fontSize:11},children:[S.jsx("span",{style:{color:"#94a3b8"},children:"Linked: "}),S.jsx("span",{style:{color:"#60a5fa"},children:((Ve=A.find(O=>O.id===C))==null?void 0:Ve.name)||C}),S.jsx("button",{onClick:()=>T(null),style:{marginLeft:8,background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:10},children:"✕"})]}),S.jsxs("div",{style:{marginTop:20},children:[S.jsx("h4",{style:{margin:"0 0 8px",fontSize:12,color:"#94a3b8"},children:"Paper Scenarios"}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[S.jsx("button",{onClick:()=>Ue("scenario_1_baseline"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S1: Baseline"}),S.jsx("button",{onClick:()=>Ue("scenario_2_high_pv"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S2: High PV"}),S.jsx("button",{onClick:()=>Ue("scenario_3_pv_battery"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S3: PV + Battery"}),S.jsx("button",{onClick:()=>Ue("scenario_4_large_battery"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S4: Large Battery"}),S.jsx("button",{onClick:()=>Ue("scenario_5_dsm"),style:{...Zt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S5: DSM"})]}),S.jsx("h4",{style:{margin:"12px 0 8px",fontSize:12,color:"#94a3b8"},children:"Other Templates"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:S.jsx("button",{onClick:()=>Ue("smart_district"),style:{...Zt,background:"#065f46",fontSize:10,padding:"6px 8px"},children:"🏘️ Smart District"})})]})]}),S.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[S.jsxs("div",{style:{padding:"8px 12px",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",gap:12},children:[S.jsx("input",{value:h,onChange:O=>p(O.target.value),style:{background:"#1e293b",border:"1px solid #334155",borderRadius:4,padding:"4px 8px",color:"#e2e8f0",fontSize:14,width:200}}),S.jsxs("span",{style:{fontSize:12,color:"#64748b"},children:[r.length," components • ",o.length," connections"]}),d&&S.jsx("span",{style:{fontSize:12,color:"#eab308",marginLeft:"auto"},children:"🔗 Click another component to connect, or click canvas to cancel"})]}),S.jsxs("div",{ref:w,onDrop:F,onDragOver:O=>O.preventDefault(),onClick:G,style:{flex:1,position:"relative",background:"linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px), #1e293b",backgroundSize:"20px 20px",overflow:"hidden"},children:[S.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:[S.jsxs("defs",{children:[S.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:S.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})}),S.jsx("marker",{id:"arrowhead-heat",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:S.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ef4444"})})]}),o.map(O=>{const se=r.find(J=>J.id===O.from),te=r.find(J=>J.id===O.to);if(!se||!te)return null;const E=O.type==="heat"?"#ef4444":O.type==="both"?"#a855f7":"#3b82f6",_=se.x+30,D=se.y+30,W=te.x+30,Q=te.y+30;return S.jsxs("g",{onClick:()=>c(O.id),style:{cursor:"pointer",pointerEvents:"stroke"},children:[S.jsx("line",{x1:_,y1:D,x2:W,y2:Q,stroke:E,strokeWidth:3,strokeDasharray:O.type==="heat"?"8,4":"none",markerEnd:"url(#arrowhead)"}),S.jsx("circle",{r:"4",fill:E,children:S.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",path:`M${_},${D} L${W},${Q}`})}),S.jsx("circle",{r:"4",fill:E,children:S.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"0.66s",path:`M${_},${D} L${W},${Q}`})}),S.jsx("circle",{r:"4",fill:E,children:S.jsx("animateMotion",{dur:"2s",repeatCount:"indefinite",begin:"1.33s",path:`M${_},${D} L${W},${Q}`})})]},O.id)})]}),r.map(O=>{const se=bo[O.type],te=l===O.id,E=d===O.id,_=q(O.id);return S.jsxs("div",{draggable:!0,onDragEnd:D=>Le(O.id,D),onClick:D=>ie(O.id,D),style:{position:"absolute",left:O.x,top:O.y,width:60,height:60,background:`${se.color}22`,border:`2px solid ${te||E?"#fff":_==="isolated"?"#f97316":se.color}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"move",boxShadow:te?"0 0 12px rgba(255,255,255,0.3)":_==="isolated"?"0 0 8px rgba(249,115,22,0.5)":"none",transition:"box-shadow 0.15s"},children:[S.jsx("div",{style:{position:"absolute",top:-6,right:-6,width:14,height:14,borderRadius:"50%",background:_==="valid"?"#22c55e":"#f97316",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,border:"2px solid #0f172a"},children:_==="valid"?"✓":"!"}),S.jsx("span",{style:{fontSize:24},children:se.icon}),S.jsx("span",{style:{fontSize:9,color:"#94a3b8",marginTop:2,textAlign:"center",maxWidth:56,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.name})]},O.id)}),r.length===0&&S.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[S.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),S.jsx("div",{children:"Drag components here to build your digital twin"})]})]})]}),S.jsxs("div",{style:{width:260,borderLeft:"1px solid #334155",padding:12,overflowY:"auto"},children:[S.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Properties"}),N?S.jsxs("div",{children:[S.jsxs("div",{style:{marginBottom:12},children:[S.jsx("label",{style:{fontSize:11,color:"#64748b"},children:"Name"}),S.jsx("input",{value:N.name,onChange:O=>s(se=>se.map(te=>te.id===N.id?{...te,name:O.target.value}:te)),style:fo})]}),S.jsx("div",{style:{fontSize:11,color:"#64748b",marginBottom:8},children:"Parameters"}),Object.entries(N.params).map(([O,se])=>S.jsxs("div",{style:{marginBottom:8},children:[S.jsx("label",{style:{fontSize:10,color:"#94a3b8",display:"block",marginBottom:2},children:O.replace(/_/g," ")}),typeof se=="boolean"?S.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12},children:[S.jsx("input",{type:"checkbox",checked:se,onChange:te=>ae(N.id,O,te.target.checked)}),se?"Enabled":"Disabled"]}):typeof se=="number"?S.jsx("input",{type:"number",value:se,onChange:te=>ae(N.id,O,parseFloat(te.target.value)||0),style:fo}):S.jsx("input",{value:se,onChange:te=>ae(N.id,O,te.target.value),style:fo})]},O)),S.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[S.jsx("button",{onClick:()=>I(N.id),style:{...Zt,background:"#1d4ed8"},children:"🔗 Connect to..."}),S.jsx("button",{onClick:()=>$(N.id),style:{...Zt,background:"#7f1d1d"},children:"🗑️ Delete"})]})]}):o.find(O=>O.id===l)?S.jsx("div",{children:(()=>{const O=o.find(E=>E.id===l),se=r.find(E=>E.id===O.from),te=r.find(E=>E.id===O.to);return S.jsxs(S.Fragment,{children:[S.jsxs("div",{style:{fontSize:12,marginBottom:12},children:[S.jsx("b",{children:se==null?void 0:se.name})," → ",S.jsx("b",{children:te==null?void 0:te.name})]}),S.jsxs("div",{style:{marginBottom:8},children:[S.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Type"}),S.jsxs("select",{value:O.type,onChange:E=>a(_=>_.map(D=>D.id===O.id?{...D,type:E.target.value}:D)),style:fo,children:[S.jsx("option",{value:"electricity",children:"⚡ Electricity"}),S.jsx("option",{value:"heat",children:"🔥 Heat"}),S.jsx("option",{value:"both",children:"🔄 Both"})]})]}),S.jsxs("div",{style:{marginBottom:8},children:[S.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Capacity (kW)"}),S.jsx("input",{type:"number",value:O.capacity_kw||0,onChange:E=>a(_=>_.map(D=>D.id===O.id?{...D,capacity_kw:parseFloat(E.target.value)||0}:D)),style:fo})]}),S.jsx("button",{onClick:()=>ne(O.id),style:{...Zt,background:"#7f1d1d",marginTop:12},children:"🗑️ Delete Connection"})]})})()}):S.jsx("div",{style:{color:"#64748b",fontSize:12},children:"Select a component or connection to edit its properties"})]})]})}const Zt={padding:"8px 12px",background:"#334155",border:"none",borderRadius:4,color:"#e2e8f0",fontSize:12,cursor:"pointer"},fo={width:"100%",padding:"6px 8px",background:"#1e293b",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0",fontSize:12};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="170",Ls={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Vp=1,Gx=2,v0=1,Wx=2,pi=3,cr=0,pn=1,vi=2,rr=0,Ns=1,Cd=2,Gp=3,Wp=4,jx=5,wr=100,Xx=101,Yx=102,$x=103,qx=104,Kx=200,Zx=201,Jx=202,Qx=203,Rd=204,Pd=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,oS=212,aS=213,lS=214,Dd=0,Ld=1,Nd=2,Gs=3,Id=4,Ud=5,Fd=6,Od=7,y0=0,cS=1,uS=2,sr=0,dS=1,hS=2,fS=3,pS=4,mS=5,gS=6,_S=7,x0=300,Ws=301,js=302,kd=303,zd=304,Ec=306,Bd=1e3,Rr=1001,Hd=1002,qn=1003,vS=1004,Ua=1005,ri=1006,Qc=1007,Pr=1008,Pi=1009,S0=1010,M0=1011,ra=1012,mf=1013,kr=1014,Si=1015,ua=1016,gf=1017,_f=1018,Xs=1020,E0=35902,w0=1021,T0=1022,Xn=1023,b0=1024,A0=1025,Is=1026,Ys=1027,C0=1028,vf=1029,R0=1030,yf=1031,xf=1033,El=33776,wl=33777,Tl=33778,bl=33779,Vd=35840,Gd=35841,Wd=35842,jd=35843,Xd=36196,Yd=37492,$d=37496,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,oh=37819,ah=37820,lh=37821,Al=36492,ch=36494,uh=36495,P0=36283,dh=36284,hh=36285,fh=36286,yS=3200,xS=3201,D0=0,SS=1,Yi="",Cn="srgb",Js="srgb-linear",wc="linear",ot="srgb",$r=7680,jp=519,MS=512,ES=513,wS=514,L0=515,TS=516,bS=517,AS=518,CS=519,ph=35044,Xp="300 es",Mi=2e3,ec=2001;class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,mh=180/Math.PI;function or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ht(t,e,n){return Math.max(e,Math.min(n,t))}function RS(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const PS={DEG2RAD:Cl};class Ee{constructor(e=0,n=0){Ee.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],g=i[8],M=r[0],m=r[3],u=r[6],v=r[1],y=r[4],x=r[7],P=r[2],A=r[5],R=r[8];return s[0]=o*M+a*v+l*P,s[3]=o*m+a*y+l*A,s[6]=o*u+a*x+l*R,s[1]=c*M+d*v+f*P,s[4]=c*m+d*y+f*A,s[7]=c*u+d*x+f*R,s[2]=h*M+p*v+g*P,s[5]=h*m+p*y+g*A,s[8]=h*u+p*x+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(r*c-d*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new We;function N0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=tc("canvas");return t.style.display="block",t}const Yp={};function Ao(t){t in Yp||(Yp[t]=!0,console.warn(t))}function LS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function NS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Ti(t.r),t.g=Ti(t.g),t.b=Ti(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=Us(t.r),t.g=Us(t.g),t.b=Us(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Yi?wc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],qp=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Js]:{primaries:$p,whitePoint:Kp,transfer:wc,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:$p,whitePoint:Kp,transfer:ot,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let qr;class US{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=tc("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FS=0;class I0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class nn extends Wr{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Rr,r=Rr,s=ri,o=Pr,a=Xn,l=Pi,c=nn.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=or(),this.name="",this.source=new I0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=x0;nn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,P=(u+1)/2,A=(d+h)/4,R=(f+M)/4,C=(g+m)/4;return y>x&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=R/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-M)/v,this.z=(h-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new I0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends kS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=M;return}if(f!==M||l!==h||c!==p||d!==g){let m=1-a;const u=l*h+c*p+d*g+f*M,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const P=Math.sqrt(y),A=Math.atan2(P,u*v);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const x=a*v;if(l=l*m+h*x,c=c*m+p*x,d=d*m+g*x,f=f*m+M*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*f+l*p-c*h,e[n+1]=l*g+d*h+c*f-a*p,e[n+2]=c*g+d*p+a*h-l*f,e[n+3]=d*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"YZX":this._x=h*d*f+c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f-h*p*g;break;case"XZY":this._x=h*d*f-c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new U,Qp=new Br;class Hr{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Oa.subVectors(this.max,po),Kr.subVectors(e.a,po),Zr.subVectors(e.b,po),Jr.subVectors(e.c,po),Fi.subVectors(Zr,Kr),Oi.subVectors(Jr,Zr),mr.subVectors(Kr,Jr);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-mr.z,mr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,mr.z,0,-mr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-mr.y,mr.x,0];return!ru(n,Kr,Zr,Jr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,Kr,Zr,Jr,Oa))?!1:(ka.crossVectors(Fi,Oi),n=[ka.x,ka.y,ka.z],ru(n,Kr,Zr,Jr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Fa=new Hr,Kr=new U,Zr=new U,Jr=new U,Fi=new U,Oi=new U,mr=new U,po=new U,Oa=new U,ka=new U,gr=new U;function ru(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),d=i.dot(gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const BS=new Hr,mo=new U,su=new U;class da{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(su)),this.expandByPoint(mo.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new U,ou=new U,za=new U,ki=new U,au=new U,Ba=new U,lu=new U;class ha{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=ki.dot(this.direction),l=-ki.dot(za),c=ki.lengthSq(),d=Math.abs(1-o*o);let f,h,p,g;if(d>0)if(f=o*l-a,h=o*a-l,g=s*d,f>=0)if(h>=-g)if(h<=g){const M=1/d;f*=M,h*=M,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ou).addScaledVector(za,h),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Ba.subVectors(i,e),lu.crossVectors(au,Ba);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(ki,Ba));if(l<0)return null;const c=a*this.direction.dot(au.cross(ki));if(c<0||l+c>o)return null;const d=-a*ki.dot(lu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,g,M,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,M,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,M,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,g=a*d,M=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=c*d,M=c*f;n[0]=h+M*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=c*d,M=c*f;n[0]=h-M*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,g=a*d,M=a*f;n[0]=l*d,n[4]=g*c-p,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,M=a*c;n[0]=l*d,n[4]=M-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+g,n[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,M=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+M,n[5]=o*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HS,e,VS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),zi.crossVectors(i,gn),zi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),zi.crossVectors(i,gn)),zi.normalize(),Ha.crossVectors(gn,zi),r[0]=zi.x,r[4]=Ha.x,r[8]=gn.x,r[1]=zi.y,r[5]=Ha.y,r[9]=gn.y,r[2]=zi.z,r[6]=Ha.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],g=i[2],M=i[6],m=i[10],u=i[14],v=i[3],y=i[7],x=i[11],P=i[15],A=r[0],R=r[4],C=r[8],T=r[12],w=r[1],L=r[5],V=r[9],F=r[13],G=r[2],K=r[6],j=r[10],ie=r[14],I=r[3],$=r[7],ne=r[11],ae=r[15];return s[0]=o*A+a*w+l*G+c*I,s[4]=o*R+a*L+l*K+c*$,s[8]=o*C+a*V+l*j+c*ne,s[12]=o*T+a*F+l*ie+c*ae,s[1]=d*A+f*w+h*G+p*I,s[5]=d*R+f*L+h*K+p*$,s[9]=d*C+f*V+h*j+p*ne,s[13]=d*T+f*F+h*ie+p*ae,s[2]=g*A+M*w+m*G+u*I,s[6]=g*R+M*L+m*K+u*$,s[10]=g*C+M*V+m*j+u*ne,s[14]=g*T+M*F+m*ie+u*ae,s[3]=v*A+y*w+x*G+P*I,s[7]=v*R+y*L+x*K+P*$,s[11]=v*C+y*V+x*j+P*ne,s[15]=v*T+y*F+x*ie+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],M=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+M*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],M=e[13],m=e[14],u=e[15],v=f*m*c-M*h*c+M*l*p-a*m*p-f*l*u+a*h*u,y=g*h*c-d*m*c-g*l*p+o*m*p+d*l*u-o*h*u,x=d*M*c-g*f*c+g*a*p-o*M*p-d*a*u+o*f*u,P=g*f*l-d*M*l-g*a*h+o*M*h+d*a*m-o*f*m,A=n*v+i*y+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(M*h*s-f*m*s-M*r*p+i*m*p+f*r*u-i*h*u)*R,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=y*R,e[5]=(d*m*s-g*h*s+g*r*p-n*m*p-d*r*u+n*h*u)*R,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=x*R,e[9]=(g*f*s-d*M*s-g*i*p+n*M*p+d*i*u-n*f*u)*R,e[10]=(o*M*s-g*a*s+g*i*c-n*M*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=P*R,e[13]=(d*M*r-g*f*r+g*i*h-n*M*h-d*i*m+n*f*m)*R,e[14]=(g*a*r-o*M*r-g*i*l+n*M*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,g=s*f,M=o*d,m=o*f,u=a*f,v=l*c,y=l*d,x=l*f,P=i.x,A=i.y,R=i.z;return r[0]=(1-(M+u))*P,r[1]=(p+x)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+y)*R,r[9]=(m-v)*R,r[10]=(1-(h+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,d=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ec)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*d;let g,M;if(a===Mi)g=(o+s)*f,M=-2*f;else if(a===ec)g=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new U,Hn=new ct,HS=new U(0,0,0),VS=new U(1,1,1),zi=new U,Ha=new U,gn=new U,em=new ct,tm=new Br;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const nm=new U,es=new Br,di=new ct,Va=new U,go=new U,WS=new U,jS=new Br,im=new U(1,0,0),rm=new U(0,1,0),sm=new U(0,0,1),om={type:"added"},XS={type:"removed"},ts={type:"childadded",child:null},cu={type:"childremoved",child:null};class Lt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,n=new ai,i=new Br,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(go,Va,this.up):di.lookAt(Va,go,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),es.setFromRotationMatrix(di),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XS),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,WS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,hi=new U,uu=new U,fi=new U,ns=new U,is=new U,am=new U,du=new U,hu=new U,fu=new U,pu=new Tt,mu=new Tt,gu=new Tt;class Ln{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),hi.subVectors(i,n),uu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(hi),l=Vn.dot(uu),c=hi.dot(hi),d=hi.dot(uu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pu,s.x),o.addScaledVector(mu,s.y),o.addScaledVector(gu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),hi.subVectors(e,n),Vn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Vn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ns.subVectors(r,i),is.subVectors(s,i),du.subVectors(e,i);const l=ns.dot(du),c=is.dot(du);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const d=ns.dot(hu),f=is.dot(hu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ns,o);fu.subVectors(e,s);const p=ns.dot(fu),g=is.dot(fu);if(g>=0&&p<=g)return n.copy(s);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(is,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return am.subVectors(s,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(am,a);const u=1/(m+M+h);return o=M*u,a=h*u,n.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=RS(e,1),n=Ht(n,0,1),i=Ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(Ht($t.r*255,0,255))*65536+Math.round(Ht($t.g*255,0,255))*256+Math.round(Ht($t.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Cn){Ze.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Ga);const i=eu(Bi.h,Ga.h,n),r=eu(Bi.s,Ga.s,n),s=eu(Bi.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ye;Ye.NAMES=F0;let YS=0;class pr extends Wr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=or(),this.name="",this.blending=Ns,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O0 extends pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,Wa=new Ee;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class k0 extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z0 extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ft extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $S=0;const bn=new ct,vu=new Lt,rs=new U,_n=new Hr,_o=new Hr,Ot=new U;class Wt extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?z0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,_o.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,_o.max),_n.expandByPoint(Ot)):(_n.expandByPoint(_o.min),_n.expandByPoint(_o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Ot.add(rs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new U,l[C]=new U;const c=new U,d=new U,f=new U,h=new Ee,p=new Ee,g=new Ee,M=new U,m=new U;function u(C,T,w){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),d.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[C].add(M),a[T].add(M),a[w].add(M),l[C].add(m),l[T].add(m),l[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,T=v.length;C<T;++C){const w=v[C],L=w.start,V=w.count;for(let F=L,G=L+V;F<G;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new U,x=new U,P=new U,A=new U;function R(C){P.fromBufferAttribute(r,C),A.copy(P);const T=a[C];y.copy(T),y.sub(P.multiplyScalar(P.dot(T))).normalize(),x.crossVectors(A,T);const L=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,T=v.length;C<T;++C){const w=v[C],L=w.start,V=w.count;for(let F=L,G=L+V;F<G;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*d;for(let u=0;u<d;u++)h[g++]=c[p++]}return new Un(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new ct,_r=new ha,ja=new da,cm=new U,Xa=new U,Ya=new U,$a=new U,yu=new U,qa=new U,um=new U,Ka=new U;class Ie extends Lt{constructor(e=new Wt,n=new O0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(yu.fromBufferAttribute(f,e),o?qa.addScaledVector(yu,d):qa.addScaledVector(yu.sub(n),d))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(ja.containsPoint(_r.origin)===!1&&(_r.intersectSphere(ja,cm)===null||_r.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,P=y;x<P;x+=3){const A=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);r=Za(this,u,e,i,c,d,f,A,R,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Za(this,o,e,i,c,d,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,P=y;x<P;x+=3){const A=x,R=x+1,C=x+2;r=Za(this,u,e,i,c,d,f,A,R,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const v=m,y=m+1,x=m+2;r=Za(this,o,e,i,c,d,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qS(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xa),t.getVertexPosition(l,Ya),t.getVertexPosition(c,$a);const d=qS(t,e,n,i,Xa,Ya,$a,um);if(d){const f=new U;Ln.getBarycoord(um,Xa,Ya,$a,f),r&&(d.uv=Ln.getInterpolatedAttribute(r,a,l,c,f,new Ee)),s&&(d.uv1=Ln.getInterpolatedAttribute(s,a,l,c,f,new Ee)),o&&(d.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Ln.getNormal(Xa,Ya,$a,h.normal),d.face=h,d.barycoord=f}return d}class dt extends Wt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function g(M,m,u,v,y,x,P,A,R,C,T){const w=x/R,L=P/C,V=x/2,F=P/2,G=A/2,K=R+1,j=C+1;let ie=0,I=0;const $=new U;for(let ne=0;ne<j;ne++){const ae=ne*L-F;for(let he=0;he<K;he++){const Le=he*w-V;$[M]=Le*v,$[m]=ae*y,$[u]=G,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[u]=A>0?1:-1,d.push($.x,$.y,$.z),f.push(he/R),f.push(1-ne/C),ie+=1}}for(let ne=0;ne<C;ne++)for(let ae=0;ae<R;ae++){const he=h+ae+K*ne,Le=h+ae+K*(ne+1),N=h+(ae+1)+K*(ne+1),q=h+(ae+1)+K*ne;l.push(he,Le,q),l.push(Le,N,q),I+=6}a.addGroup(p,I,T),p+=I,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function KS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ZS={clone:$s,merge:Qt};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H0 extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new U,dm=new Ee,hm=new Ee;class Dn extends H0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class eM extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new Dn(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new Dn(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new Dn(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ss,os,e,n);l.layers=this.layers,this.add(l);const c=new Dn(ss,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class V0 extends nn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dt(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Ie(r,s),a=n.minFilter;return n.minFilter===Pr&&(n.minFilter=ri),new eM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new U,nM=new U,iM=new We;class _i{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(nM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iM.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new da,Ja=new U;class Mf{constructor(e=new _i,n=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],g=r[9],M=r[10],m=r[11],u=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-p,x-u).normalize(),i[1].setComponents(l+s,h+c,m+p,x+u).normalize(),i[2].setComponents(l+o,h+d,m+g,x+v).normalize(),i[3].setComponents(l-o,h-d,m-g,x-v).normalize(),i[4].setComponents(l-a,h-f,m-M,x-y).normalize(),n===Mi)i[5].setComponents(l+a,h+f,m+M,x+y).normalize();else if(n===ec)i[5].setComponents(a,f,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],M=f[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const M=f[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class fa extends Wt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],g=[],M=[],m=[];for(let u=0;u<d;u++){const v=u*h-o;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-v,0),M.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const y=v+c*u,x=v+c*(u+1),P=v+1+c*(u+1),A=v+1+c*u;p.push(y,x,A),p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(M,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var sM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,x1=`#define LAMBERT
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
}`,S1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,A1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,R1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,D1=`#define TOON
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
}`,L1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:sM,alphahash_pars_fragment:oM,alphamap_fragment:aM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:yM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:wM,color_pars_fragment:TM,color_pars_vertex:bM,color_vertex:AM,common:CM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:PM,displacementmap_pars_vertex:DM,displacementmap_vertex:LM,emissivemap_fragment:NM,emissivemap_pars_fragment:IM,colorspace_fragment:UM,colorspace_pars_fragment:FM,envmap_fragment:OM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:ZM,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:jM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:qM,lights_pars_begin:KM,lights_toon_fragment:JM,lights_toon_pars_fragment:QM,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:dE,map_pars_fragment:hE,map_particle_fragment:fE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:yE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:wE,normal_pars_vertex:TE,normal_vertex:bE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:DE,opaque_fragment:LE,packing:NE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:FE,dithering_pars_fragment:OE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:HE,shadowmap_vertex:VE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:jE,skinning_vertex:XE,skinnormal_vertex:YE,specularmap_fragment:$E,specularmap_pars_fragment:qE,tonemapping_fragment:KE,tonemapping_pars_fragment:ZE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:r1,background_frag:s1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:l1,cube_frag:c1,depth_vert:u1,depth_frag:d1,distanceRGBA_vert:h1,distanceRGBA_frag:f1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:_1,meshbasic_vert:v1,meshbasic_frag:y1,meshlambert_vert:x1,meshlambert_frag:S1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:w1,meshnormal_frag:T1,meshphong_vert:b1,meshphong_frag:A1,meshphysical_vert:C1,meshphysical_frag:R1,meshtoon_vert:P1,meshtoon_frag:D1,points_vert:L1,points_frag:N1,shadow_vert:I1,shadow_frag:U1,sprite_vert:F1,sprite_frag:O1},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ti={basic:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Qt([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Qt([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:Qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Qa={r:0,b:0,g:0},yr=new ai,k1=new ct;function z1(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function M(v){let y=!1;const x=g(v);x===null?u(a,l):x&&x.isColor&&(u(x,1),y=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Ec)?(d===void 0&&(d=new Ie(new dt(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:$s(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),yr.copy(y.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(yr)),d.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ot,(f!==x||h!==x.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ie(new fa(2,2),new ur({name:"BackgroundMaterial",uniforms:$s(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Qa,B0(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:M,addToRenderList:m}}function B1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(w,L,V,F,G){let K=!1;const j=f(F,V,L);s!==j&&(s=j,c(s.object)),K=p(w,F,V,G),K&&g(w,F,V,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(w,L,V,F),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function f(w,L,V){const F=V.wireframe===!0;let G=i[w.id];G===void 0&&(G={},i[w.id]=G);let K=G[L.id];K===void 0&&(K={},G[L.id]=K);let j=K[F];return j===void 0&&(j=h(l()),K[F]=j),j}function h(w){const L=[],V=[],F=[];for(let G=0;G<n;G++)L[G]=0,V[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,L,V,F){const G=s.attributes,K=L.attributes;let j=0;const ie=V.getAttributes();for(const I in ie)if(ie[I].location>=0){const ne=G[I];let ae=K[I];if(ae===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==F}function g(w,L,V,F){const G={},K=L.attributes;let j=0;const ie=V.getAttributes();for(const I in ie)if(ie[I].location>=0){let ne=K[I];ne===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),G[I]=ae,j++}s.attributes=G,s.attributesNum=j,s.index=F}function M(){const w=s.newAttributes;for(let L=0,V=w.length;L<V;L++)w[L]=0}function m(w){u(w,0)}function u(w,L){const V=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;V[w]=1,F[w]===0&&(t.enableVertexAttribArray(w),F[w]=1),G[w]!==L&&(t.vertexAttribDivisor(w,L),G[w]=L)}function v(){const w=s.newAttributes,L=s.enabledAttributes;for(let V=0,F=L.length;V<F;V++)L[V]!==w[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function y(w,L,V,F,G,K,j){j===!0?t.vertexAttribIPointer(w,L,V,G,K):t.vertexAttribPointer(w,L,V,F,G,K)}function x(w,L,V,F){M();const G=F.attributes,K=V.getAttributes(),j=L.defaultAttributeValues;for(const ie in K){const I=K[ie];if(I.location>=0){let $=G[ie];if($===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const ne=$.normalized,ae=$.itemSize,he=e.get($);if(he===void 0)continue;const Le=he.buffer,N=he.type,q=he.bytesPerElement,re=N===t.INT||N===t.UNSIGNED_INT||$.gpuType===mf;if($.isInterleavedBufferAttribute){const Z=$.data,fe=Z.stride,we=$.offset;if(Z.isInstancedInterleavedBuffer){for(let Ne=0;Ne<I.locationSize;Ne++)u(I.location+Ne,Z.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ne=0;Ne<I.locationSize;Ne++)m(I.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ne=0;Ne<I.locationSize;Ne++)y(I.location+Ne,ae/I.locationSize,N,ne,fe*q,(we+ae/I.locationSize*Ne)*q,re)}else{if($.isInstancedBufferAttribute){for(let Z=0;Z<I.locationSize;Z++)u(I.location+Z,$.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Z=0;Z<I.locationSize;Z++)m(I.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Z=0;Z<I.locationSize;Z++)y(I.location+Z,ae/I.locationSize,N,ne,ae*q,ae/I.locationSize*Z*q,re)}}else if(j!==void 0){const ne=j[ie];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(I.location,ne);break;case 3:t.vertexAttrib3fv(I.location,ne);break;case 4:t.vertexAttrib4fv(I.location,ne);break;default:t.vertexAttrib1fv(I.location,ne)}}}}v()}function P(){C();for(const w in i){const L=i[w];for(const V in L){const F=L[V];for(const G in F)d(F[G].object),delete F[G];delete L[V]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const V in L){const F=L[V];for(const G in F)d(F[G].object),delete F[G];delete L[V]}delete i[w.id]}function R(w){for(const L in i){const V=i[L];if(V[w.id]===void 0)continue;const F=V[w.id];for(const G in F)d(F[G].object),delete F[G];delete V[w.id]}}function C(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function H1(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let g=0;for(let M=0;M<f;M++)g+=d[M]*h[M];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Xn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!C)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function G1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _i,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,y=v*4;let x=u.clippingState||null;l.value=x,x=d(g,h,y,p);for(let P=0;P!==y;++P)x[P]=n[P];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,g){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const u=p+M*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,x=p;y!==M;++y,x+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function W1(t){let e=new WeakMap;function n(o,a){return a===kd?o.mapping=Ws:a===zd&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kd||a===zd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class W0 extends H0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,fm=[.125,.215,.35,.446,.526,.582],Tr=20,Su=new W0,pm=new Ye;let Mu=null,Eu=0,wu=0,Tu=!1;const Er=(1+Math.sqrt(5))/2,as=1/Er,mm=[new U(-Er,as,0),new U(Er,as,0),new U(-as,0,Er),new U(as,0,Er),new U(0,Er,-as),new U(0,Er,as),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,wu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ua,format:Xn,colorSpace:Js,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(s)),this._blurMaterial=X1(s,e,n)}return r}_compileMaterial(e){const n=new Ie(this._lodPlanes[0],e);this._renderer.compile(n,Su)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(pm),d.toneMapping=sr,d.autoClear=!1;const p=new O0({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ie(new dt,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(pm),M=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const y=this._cubeSize;el(r,v*y,u>2?y:0,y,y),d.setRenderTarget(r),M&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ie(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),M=s/g,m=isFinite(s)?1+Math.floor(d*M):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const u=[];let v=0;for(let R=0;R<Tr;++R){const C=R/M,T=Math.exp(-C*C/2);u.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const x=this._sizeLods[r],P=3*x*(r>y-Ts?r-y+Ts:0),A=4*(this._cubeSize-x);el(n,P,A,3*x,2*x),l.setRenderTarget(n),l.render(f,Su)}}function j1(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=fm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,M=3,m=2,u=1,v=new Float32Array(M*g*p),y=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,C=A>2?0:-1,T=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(T,M*g*A),y.set(h,m*g*A);const w=[A,A,A,A,A,A];x.set(w,u*g*A)}const P=new Wt;P.setAttribute("position",new Un(v,M)),P.setAttribute("uv",new Un(y,m)),P.setAttribute("faceIndex",new Un(x,u)),e.push(P),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new zr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function X1(t,e,n){const i=new Float32Array(Tr),r=new U(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function vm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function ym(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ef(){return`

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
	`}function Y1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kd||l===zd,d=l===Ws||l===js;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function q1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const M=h.morphAttributes[g];for(let m=0,u=M.length;m<u;m++)e.remove(M[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const M=p[g];for(let m=0,u=M.length;m<u;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let M=0;if(p!==null){const v=p.array;M=p.version;for(let y=0,x=v.length;y<x;y+=3){const P=v[y+0],A=v[y+1],R=v[y+2];h.push(P,A,A,R,R,P)}}else if(g!==void 0){const v=g.array;M=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const P=y+0,A=y+1,R=y+2;h.push(P,A,A,R,R,P)}}else return;const m=new(N0(h)?z0:k0)(h,1);m.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function K1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function f(h,p,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*M[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Z1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function J1(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),M===!0&&(y=3);let x=a.attributes.position.count*y,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*P*4*f),R=new U0(A,x,P,f);R.type=Si,R.needsUpdate=!0;const C=y*4;for(let w=0;w<f;w++){const L=m[w],V=u[w],F=v[w],G=x*P*4*w;for(let K=0;K<L.count;K++){const j=K*C;p===!0&&(r.fromBufferAttribute(L,K),A[G+j+0]=r.x,A[G+j+1]=r.y,A[G+j+2]=r.z,A[G+j+3]=0),g===!0&&(r.fromBufferAttribute(V,K),A[G+j+4]=r.x,A[G+j+5]=r.y,A[G+j+6]=r.z,A[G+j+7]=0),M===!0&&(r.fromBufferAttribute(F,K),A[G+j+8]=r.x,A[G+j+9]=r.y,A[G+j+10]=r.z,A[G+j+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Ee(x,P)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Q1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class j0 extends nn{constructor(e,n,i,r,s,o,a,l,c,d=Is){if(d!==Is&&d!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Is&&(i=kr),i===void 0&&d===Ys&&(i=Xs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const X0=new nn,xm=new j0(1,1),Y0=new U0,$0=new zS,q0=new V0,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),It(n,i)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),It(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),It(n,i)}}function aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xm.compareFunction=L0,s=xm):s=X0,n.setTexture2D(e||s,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$0,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q0,r)}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Y0,r)}function yw(t){switch(t){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return dw;case 36294:return hw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}function xw(t,e){t.uniform1fv(this.addr,e)}function Sw(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function Mw(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function Ew(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function ww(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tw(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bw(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Aw(t,e){t.uniform1iv(this.addr,e)}function Cw(t,e){t.uniform2iv(this.addr,e)}function Rw(t,e){t.uniform3iv(this.addr,e)}function Pw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Nw(t,e){t.uniform3uiv(this.addr,e)}function Iw(t,e){t.uniform4uiv(this.addr,e)}function Uw(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||X0,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$0,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||q0,s[o])}function kw(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Y0,s[o])}function zw(t){switch(t){case 5126:return xw;case 35664:return Sw;case 35665:return Mw;case 35666:return Ew;case 35674:return ww;case 35675:return Tw;case 35676:return bw;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Dw;case 36294:return Lw;case 36295:return Nw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return kw}}class Bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yw(n.type)}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zw(n.type)}}class Vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function bm(t,e){t.seq.push(e),t.map[e.id]=e}function Gw(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),o=bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bm(n,c===void 0?new Bw(a,t,e):new Hw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Vw(a),bm(n,f)),n=f}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Gw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ww=37297;let jw=0;function Xw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Cm=new We;function Yw(t){Ze._getMatrix(Cm,Ze.workingColorSpace,t);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case wc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Xw(t.getShaderSource(e),o)}else return r}function $w(t,e){const n=Yw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qw(t,e){let n;switch(e){case dS:n="Linear";break;case hS:n="Reinhard";break;case fS:n="Cineon";break;case pS:n="ACESFilmic";break;case gS:n="AgX";break;case _S:n="Neutral";break;case mS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tl=new U;function Kw(){Ze.getLuminanceCoefficients(tl);const t=tl.x.toFixed(4),e=tl.y.toFixed(4),n=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Qw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(t){return t.replace(eT,nT)}const tT=new Map;function nT(t,e){let n=Xe[e];if(n===void 0){const i=tT.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(n)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(iT,rT)}function rT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function sT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function oT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case cS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function cT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sT(n),c=oT(n),d=aT(n),f=lT(n),h=cT(n),p=Zw(n),g=Jw(s),M=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),u.length>0&&(u+=`
`)):(m=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),u=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==sr?qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$w("linearToOutputTexel",n.outputColorSpace),Kw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=gh(o),o=Pm(o,n),o=Dm(o,n),a=gh(a),a=Pm(a,n),a=Dm(a,n),o=Lm(o),a=Lm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=v+m+o,x=v+u+a,P=Am(r,r.VERTEX_SHADER,y),A=Am(r,r.FRAGMENT_SHADER,x);r.attachShader(M,P),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(M).trim(),F=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(A).trim();let K=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,P,A);else{const ie=Rm(r,P,"vertex"),I=Rm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ie+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||G==="")&&(j=!1);j&&(L.diagnostics={runnable:K,programLog:V,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:u}})}r.deleteShader(P),r.deleteShader(A),C=new Rl(r,M),T=Qw(r,M)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,Ww)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=A,this}let dT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function pT(t,e,n,i,r,s,o){const a=new Sf,l=new hT,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,w,L,V,F){const G=V.fog,K=F.geometry,j=T.isMeshStandardMaterial?V.environment:null,ie=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),I=ie&&ie.mapping===Ec?ie.image.height:null,$=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ne=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ae=ne!==void 0?ne.length:0;let he=0;K.morphAttributes.position!==void 0&&(he=1),K.morphAttributes.normal!==void 0&&(he=2),K.morphAttributes.color!==void 0&&(he=3);let Le,N,q,re;if($){const et=ti[$];Le=et.vertexShader,N=et.fragmentShader}else Le=T.vertexShader,N=T.fragmentShader,l.update(T),q=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);const Z=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,He=!!T.map,ke=!!T.matcap,pt=!!ie,z=!!T.aoMap,Ut=!!T.lightMap,Ue=!!T.bumpMap,Ve=!!T.normalMap,O=!!T.displacementMap,se=!!T.emissiveMap,te=!!T.metalnessMap,E=!!T.roughnessMap,_=T.anisotropy>0,D=T.clearcoat>0,W=T.dispersion>0,Q=T.iridescence>0,J=T.sheen>0,me=T.transmission>0,pe=_&&!!T.anisotropyMap,ve=D&&!!T.clearcoatMap,Ke=D&&!!T.clearcoatNormalMap,ue=D&&!!T.clearcoatRoughnessMap,xe=Q&&!!T.iridescenceMap,Ae=Q&&!!T.iridescenceThicknessMap,Fe=J&&!!T.sheenColorMap,be=J&&!!T.sheenRoughnessMap,qe=!!T.specularMap,ze=!!T.specularColorMap,tt=!!T.specularIntensityMap,k=me&&!!T.transmissionMap,ge=me&&!!T.thicknessMap,ee=!!T.gradientMap,oe=!!T.alphaMap,Se=T.alphaTest>0,ye=!!T.alphaHash,Be=!!T.extensions;let yt=sr;T.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Ft={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Le,fragmentShader:N,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Js,alphaToCoverage:!!T.alphaToCoverage,map:He,matcap:ke,envMap:pt,envMapMode:pt&&ie.mapping,envMapCubeUVHeight:I,aoMap:z,lightMap:Ut,bumpMap:Ue,normalMap:Ve,displacementMap:h&&O,emissiveMap:se,normalMapObjectSpace:Ve&&T.normalMapType===SS,normalMapTangentSpace:Ve&&T.normalMapType===D0,metalnessMap:te,roughnessMap:E,anisotropy:_,anisotropyMap:pe,clearcoat:D,clearcoatMap:ve,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ue,dispersion:W,iridescence:Q,iridescenceMap:xe,iridescenceThicknessMap:Ae,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:qe,specularColorMap:ze,specularIntensityMap:tt,transmission:me,transmissionMap:k,thicknessMap:ge,gradientMap:ee,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:ye,combine:T.combine,mapUv:He&&M(T.map.channel),aoMapUv:z&&M(T.aoMap.channel),lightMapUv:Ut&&M(T.lightMap.channel),bumpMapUv:Ue&&M(T.bumpMap.channel),normalMapUv:Ve&&M(T.normalMap.channel),displacementMapUv:O&&M(T.displacementMap.channel),emissiveMapUv:se&&M(T.emissiveMap.channel),metalnessMapUv:te&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:pe&&M(T.anisotropyMap.channel),clearcoatMapUv:ve&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:be&&M(T.sheenRoughnessMap.channel),specularMapUv:qe&&M(T.specularMap.channel),specularColorMapUv:ze&&M(T.specularColorMap.channel),specularIntensityMapUv:tt&&M(T.specularIntensityMap.channel),transmissionMapUv:k&&M(T.transmissionMap.channel),thicknessMapUv:ge&&M(T.thicknessMap.channel),alphaMapUv:oe&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ve||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(He||oe),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:He&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function u(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)w.push(L),w.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(w,T),y(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function v(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const w=g[T.type];let L;if(w){const V=ti[w];L=ZS.clone(V.uniforms)}else L=T.uniforms;return L}function P(T,w){let L;for(let V=0,F=d.length;V<F;V++){const G=d[V];if(G.cacheKey===w){L=G,++L.usedTimes;break}}return L===void 0&&(L=new uT(t,w,T,s),d.push(L)),L}function A(T){if(--T.usedTimes===0){const w=d.indexOf(T);d[w]=d[d.length-1],d.pop(),T.destroy()}}function R(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:C}}function mT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,M,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:M,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=M,u.group=m),e++,u}function a(f,h,p,g,M,m){const u=o(f,h,p,g,M,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,g,M,m){const u=o(f,h,p,g,M,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||gT),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function _T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Um,t.set(i,[o])):r>=s.length?(o=new Um,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ye};break;case"SpotLight":n={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function yT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function ST(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MT(t){const e=new vT,n=yT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ct,o=new ct;function a(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,M=0,m=0,u=0,v=0,y=0,x=0,P=0,A=0,R=0;c.sort(ST);for(let T=0,w=c.length;T<w;T++){const L=c[T],V=L.color,F=L.intensity,G=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*F,f+=V.g*F,h+=V.b*F;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],F);R++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,I=n.get(L);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(V).multiplyScalar(F),j.distance=G,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[M]=j;const ie=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ie.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[M]=ie.matrix,L.castShadow){const I=n.get(L);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,i.spotShadow[M]=I,i.spotShadowMap[M]=K,x++}M++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(V).multiplyScalar(F),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const ie=L.shadow,I=n.get(L);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,I.shadowCameraNear=ie.camera.near,I.shadowCameraFar=ie.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(F),j.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=R,i.version=xT++)}function l(c,d){let f=0,h=0,p=0,g=0,M=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const y=c[u];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new MT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ET(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fm(t),e.set(r,[a])):s>=o.length?(a=new Fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class wT extends pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TT extends pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AT=`uniform sampler2D shadow_pass;
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
}`;function CT(t,e,n){let i=new Mf;const r=new Ee,s=new Ee,o=new Tt,a=new wT({depthPacking:xS}),l=new TT,c={},d=n.maxTextureSize,f={[cr]:pn,[pn]:cr,[vi]:vi},h=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:bT,fragmentShader:AT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let u=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(rr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=u!==pi&&this.type===pi,G=u===pi&&this.type!==pi;for(let K=0,j=A.length;K<j;K++){const ie=A[K],I=ie.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||F===!0||G===!0){const ae=this.type!==pi?{minFilter:qn,magFilter:qn}:{};I.map!==null&&I.map.dispose(),I.map=new zr(r.x,r.y,ae),I.map.texture.name=ie.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const ne=I.getViewportCount();for(let ae=0;ae<ne;ae++){const he=I.getViewport(ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),V.viewport(o),I.updateMatrices(ie,ae),i=I.getFrustum(),x(R,C,I.camera,ie,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&v(I,C),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,L)};function v(A,R){const C=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,C,h,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,C,p,M,null)}function y(A,R,C,T){let w=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=C.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=w.uuid,F=R.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let K=G[F];K===void 0&&(K=w.clone(),G[F]=K,R.addEventListener("dispose",P)),w=K}if(w.visible=R.visible,w.wireframe=R.wireframe,T===pi?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:f[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=t.properties.get(w);V.light=C}return w}function x(A,R,C,T,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),G=A.material;if(Array.isArray(G)){const K=F.groups;for(let j=0,ie=K.length;j<ie;j++){const I=K[j],$=G[I.materialIndex];if($&&$.visible){const ne=y(A,$,T,w);A.onBeforeShadow(t,A,R,C,F,ne,I),t.renderBufferDirect(C,null,F,ne,A,I),A.onAfterShadow(t,A,R,C,F,ne,I)}}}else if(G.visible){const K=y(A,G,T,w);A.onBeforeShadow(t,A,R,C,F,K,null),t.renderBufferDirect(C,null,F,K,A,null),A.onAfterShadow(t,A,R,C,F,K,null)}}const V=A.children;for(let F=0,G=V.length;F<G;F++)x(V[F],R,C,T,w)}function P(A){A.target.removeEventListener("dispose",P);for(const C in c){const T=c[C],w=A.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const RT={[Dd]:Ld,[Nd]:Fd,[Id]:Od,[Gs]:Ud,[Ld]:Dd,[Fd]:Nd,[Od]:Id,[Ud]:Gs};function PT(t,e){function n(){let k=!1;const ge=new Tt;let ee=null;const oe=new Tt(0,0,0,0);return{setMask:function(Se){ee!==Se&&!k&&(t.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){k=Se},setClear:function(Se,ye,Be,yt,Ft){Ft===!0&&(Se*=yt,ye*=yt,Be*=yt),ge.set(Se,ye,Be,yt),oe.equals(ge)===!1&&(t.clearColor(Se,ye,Be,yt),oe.copy(ge))},reset:function(){k=!1,ee=null,oe.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,ee=null,oe=null,Se=null;return{setReversed:function(ye){if(ge!==ye){const Be=e.get("EXT_clip_control");ge?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=Se;Se=null,this.setClear(yt)}ge=ye},getReversed:function(){return ge},setTest:function(ye){ye?Z(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ye){ee!==ye&&!k&&(t.depthMask(ye),ee=ye)},setFunc:function(ye){if(ge&&(ye=RT[ye]),oe!==ye){switch(ye){case Dd:t.depthFunc(t.NEVER);break;case Ld:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Se!==ye&&(ge&&(ye=1-ye),t.clearDepth(ye),Se=ye)},reset:function(){k=!1,ee=null,oe=null,Se=null,ge=!1}}}function r(){let k=!1,ge=null,ee=null,oe=null,Se=null,ye=null,Be=null,yt=null,Ft=null;return{setTest:function(et){k||(et?Z(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(et){ge!==et&&!k&&(t.stencilMask(et),ge=et)},setFunc:function(et,on,wn){(ee!==et||oe!==on||Se!==wn)&&(t.stencilFunc(et,on,wn),ee=et,oe=on,Se=wn)},setOp:function(et,on,wn){(ye!==et||Be!==on||yt!==wn)&&(t.stencilOp(et,on,wn),ye=et,Be=on,yt=wn)},setLocked:function(et){k=et},setClear:function(et){Ft!==et&&(t.clearStencil(et),Ft=et)},reset:function(){k=!1,ge=null,ee=null,oe=null,Se=null,ye=null,Be=null,yt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],g=null,M=!1,m=null,u=null,v=null,y=null,x=null,P=null,A=null,R=new Ye(0,0,0),C=0,T=!1,w=null,L=null,V=null,F=null,G=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ie=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(I)[1]),j=ie>=1):I.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),j=ie>=2);let $=null,ne={};const ae=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),Le=new Tt().fromArray(ae),N=new Tt().fromArray(he);function q(k,ge,ee,oe){const Se=new Uint8Array(4),ye=t.createTexture();t.bindTexture(k,ye),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<ee;Be++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(ge+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ye}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(Gs),Ue(!1),Ve(Vp),Z(t.CULL_FACE),z(rr);function Z(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function fe(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function we(k,ge){return f[k]!==ge?(t.bindFramebuffer(k,ge),f[k]=ge,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(k,ge){let ee=p,oe=!1;if(k){ee=h.get(ge),ee===void 0&&(ee=[],h.set(ge,ee));const Se=k.textures;if(ee.length!==Se.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,Be=Se.length;ye<Be;ye++)ee[ye]=t.COLOR_ATTACHMENT0+ye;ee.length=Se.length,oe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,oe=!0);oe&&t.drawBuffers(ee)}function He(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const ke={[wr]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[Yx]:t.FUNC_REVERSE_SUBTRACT};ke[$x]=t.MIN,ke[qx]=t.MAX;const pt={[Kx]:t.ZERO,[Zx]:t.ONE,[Jx]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Qx]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[oS]:t.ONE_MINUS_CONSTANT_COLOR,[aS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function z(k,ge,ee,oe,Se,ye,Be,yt,Ft,et){if(k===rr){M===!0&&(fe(t.BLEND),M=!1);return}if(M===!1&&(Z(t.BLEND),M=!0),k!==jx){if(k!==m||et!==T){if((u!==wr||x!==wr)&&(t.blendEquation(t.FUNC_ADD),u=wr,x=wr),et)switch(k){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,P=null,A=null,R.set(0,0,0),C=0,m=k,T=et}return}Se=Se||ge,ye=ye||ee,Be=Be||oe,(ge!==u||Se!==x)&&(t.blendEquationSeparate(ke[ge],ke[Se]),u=ge,x=Se),(ee!==v||oe!==y||ye!==P||Be!==A)&&(t.blendFuncSeparate(pt[ee],pt[oe],pt[ye],pt[Be]),v=ee,y=oe,P=ye,A=Be),(yt.equals(R)===!1||Ft!==C)&&(t.blendColor(yt.r,yt.g,yt.b,Ft),R.copy(yt),C=Ft),m=k,T=!1}function Ut(k,ge){k.side===vi?fe(t.CULL_FACE):Z(t.CULL_FACE);let ee=k.side===pn;ge&&(ee=!ee),Ue(ee),k.blending===Ns&&k.transparent===!1?z(rr):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const oe=k.stencilWrite;a.setTest(oe),oe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),se(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(k){w!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),w=k)}function Ve(k){k!==Vx?(Z(t.CULL_FACE),k!==L&&(k===Vp?t.cullFace(t.BACK):k===Gx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),L=k}function O(k){k!==V&&(j&&t.lineWidth(k),V=k)}function se(k,ge,ee){k?(Z(t.POLYGON_OFFSET_FILL),(F!==ge||G!==ee)&&(t.polygonOffset(ge,ee),F=ge,G=ee)):fe(t.POLYGON_OFFSET_FILL)}function te(k){k?Z(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function E(k){k===void 0&&(k=t.TEXTURE0+K-1),$!==k&&(t.activeTexture(k),$=k)}function _(k,ge,ee){ee===void 0&&($===null?ee=t.TEXTURE0+K-1:ee=$);let oe=ne[ee];oe===void 0&&(oe={type:void 0,texture:void 0},ne[ee]=oe),(oe.type!==k||oe.texture!==ge)&&($!==ee&&(t.activeTexture(ee),$=ee),t.bindTexture(k,ge||re[k]),oe.type=k,oe.texture=ge)}function D(){const k=ne[$];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function W(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){Le.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Le.copy(k))}function be(k){N.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),N.copy(k))}function qe(k,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let oe=ee.get(k);oe===void 0&&(oe=t.getUniformBlockIndex(ge,k.name),ee.set(k,oe))}function ze(k,ge){const oe=c.get(ge).get(k);l.get(ge)!==oe&&(t.uniformBlockBinding(ge,oe,k.__bindingPointIndex),l.set(ge,oe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,ne={},f={},h=new WeakMap,p=[],g=null,M=!1,m=null,u=null,v=null,y=null,x=null,P=null,A=null,R=new Ye(0,0,0),C=0,T=!1,w=null,L=null,V=null,F=null,G=null,Le.set(0,0,t.canvas.width,t.canvas.height),N.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:we,drawBuffers:Ne,useProgram:He,setBlending:z,setMaterial:Ut,setFlipSided:Ue,setCullFace:Ve,setLineWidth:O,setPolygonOffset:se,setScissorTest:te,activeTexture:E,bindTexture:_,unbindTexture:D,compressedTexImage2D:W,compressedTexImage3D:Q,texImage2D:xe,texImage3D:Ae,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Ke,texStorage3D:ue,texSubImage2D:J,texSubImage3D:me,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:Fe,viewport:be,reset:tt}}function Om(t,e,n,i){const r=DT(i);switch(n){case w0:return t*e;case b0:return t*e;case A0:return t*e*2;case C0:return t*e/r.components*r.byteLength;case vf:return t*e/r.components*r.byteLength;case R0:return t*e*2/r.components*r.byteLength;case yf:return t*e*2/r.components*r.byteLength;case T0:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case xf:return t*e*4/r.components*r.byteLength;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Vd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case Xd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Al:case ch:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P0:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hh:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DT(t){switch(t){case Pi:case S0:return{byteLength:1,components:1};case ra:case M0:case ua:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case kr:case mf:case Si:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function LT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):tc("canvas")}function M(E,_,D){let W=1;const Q=te(E);if((Q.width>D||Q.height>D)&&(W=D/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){const J=Math.floor(W*Q.width),me=Math.floor(W*Q.height);f===void 0&&(f=g(J,me));const pe=_?g(J,me):f;return pe.width=J,pe.height=me,pe.getContext("2d").drawImage(E,0,0,J,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+me+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){t.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,_,D,W,Q=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=_;if(_===t.RED&&(D===t.FLOAT&&(J=t.R32F),D===t.HALF_FLOAT&&(J=t.R16F),D===t.UNSIGNED_BYTE&&(J=t.R8)),_===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.R8UI),D===t.UNSIGNED_SHORT&&(J=t.R16UI),D===t.UNSIGNED_INT&&(J=t.R32UI),D===t.BYTE&&(J=t.R8I),D===t.SHORT&&(J=t.R16I),D===t.INT&&(J=t.R32I)),_===t.RG&&(D===t.FLOAT&&(J=t.RG32F),D===t.HALF_FLOAT&&(J=t.RG16F),D===t.UNSIGNED_BYTE&&(J=t.RG8)),_===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RG8UI),D===t.UNSIGNED_SHORT&&(J=t.RG16UI),D===t.UNSIGNED_INT&&(J=t.RG32UI),D===t.BYTE&&(J=t.RG8I),D===t.SHORT&&(J=t.RG16I),D===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGB8UI),D===t.UNSIGNED_SHORT&&(J=t.RGB16UI),D===t.UNSIGNED_INT&&(J=t.RGB32UI),D===t.BYTE&&(J=t.RGB8I),D===t.SHORT&&(J=t.RGB16I),D===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),D===t.UNSIGNED_INT&&(J=t.RGBA32UI),D===t.BYTE&&(J=t.RGBA8I),D===t.SHORT&&(J=t.RGBA16I),D===t.INT&&(J=t.RGBA32I)),_===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),_===t.RGBA){const me=Q?wc:Ze.getTransfer(W);D===t.FLOAT&&(J=t.RGBA32F),D===t.HALF_FLOAT&&(J=t.RGBA16F),D===t.UNSIGNED_BYTE&&(J=me===ot?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(E,_){let D;return E?_===null||_===kr||_===Xs?D=t.DEPTH24_STENCIL8:_===Si?D=t.DEPTH32F_STENCIL8:_===ra&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===kr||_===Xs?D=t.DEPTH_COMPONENT24:_===Si?D=t.DEPTH_COMPONENT32F:_===ra&&(D=t.DEPTH_COMPONENT16),D}function P(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qn&&E.minFilter!==ri?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),C(_),_.isVideoTexture&&d.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),w(_)}function C(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,W=h.get(D);if(W){const Q=W[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(W).length===0&&h.delete(D)}i.remove(E)}function T(E){const _=i.get(E);t.deleteTexture(_.__webglTexture);const D=E.source,W=h.get(D);delete W[_.__cacheKey],o.memory.textures--}function w(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Q=0;Q<_.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)t.deleteFramebuffer(_.__webglFramebuffer[W]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let W=0,Q=D.length;W<Q;W++){const J=i.get(D[W]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(D[W])}i.remove(E)}let L=0;function V(){L=0}function F(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){const D=i.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(D,E,_);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function j(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){N(D,E,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function ie(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){N(D,E,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function I(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){q(D,E,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}const $={[Bd]:t.REPEAT,[Rr]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},ne={[qn]:t.NEAREST,[vS]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},ae={[MS]:t.NEVER,[CS]:t.ALWAYS,[ES]:t.LESS,[L0]:t.LEQUAL,[wS]:t.EQUAL,[AS]:t.GEQUAL,[TS]:t.GREATER,[bS]:t.NOTEQUAL};function he(E,_){if(_.type===Si&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ri||_.magFilter===Qc||_.magFilter===Ua||_.magFilter===Pr||_.minFilter===ri||_.minFilter===Qc||_.minFilter===Ua||_.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,$[_.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,$[_.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,$[_.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ne[_.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ne[_.minFilter]),_.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qn||_.minFilter!==Ua&&_.minFilter!==Pr||_.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Le(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const W=_.source;let Q=h.get(W);Q===void 0&&(Q={},h.set(W,Q));const J=G(_);if(J!==E.__cacheKey){Q[J]===void 0&&(Q[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[J].usedTimes++;const me=Q[E.__cacheKey];me!==void 0&&(Q[E.__cacheKey].usedTimes--,me.usedTimes===0&&T(_)),E.__cacheKey=J,E.__webglTexture=Q[J].texture}return D}function N(E,_,D){let W=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=t.TEXTURE_3D);const Q=Le(E,_),J=_.source;n.bindTexture(W,E.__webglTexture,t.TEXTURE0+D);const me=i.get(J);if(J.version!==me.__version||Q===!0){n.activeTexture(t.TEXTURE0+D);const pe=Ze.getPrimaries(Ze.workingColorSpace),ve=_.colorSpace===Yi?null:Ze.getPrimaries(_.colorSpace),Ke=_.colorSpace===Yi||pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ue=M(_.image,!1,r.maxTextureSize);ue=se(_,ue);const xe=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type);let Fe=y(_.internalFormat,xe,Ae,_.colorSpace,_.isVideoTexture);he(W,_);let be;const qe=_.mipmaps,ze=_.isVideoTexture!==!0,tt=me.__version===void 0||Q===!0,k=J.dataReady,ge=P(_,ue);if(_.isDepthTexture)Fe=x(_.format===Ys,_.type),tt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Fe,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Fe,ue.width,ue.height,0,xe,Ae,null));else if(_.isDataTexture)if(qe.length>0){ze&&tt&&n.texStorage2D(t.TEXTURE_2D,ge,Fe,qe[0].width,qe[0].height);for(let ee=0,oe=qe.length;ee<oe;ee++)be=qe[ee],ze?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,be.width,be.height,xe,Ae,be.data):n.texImage2D(t.TEXTURE_2D,ee,Fe,be.width,be.height,0,xe,Ae,be.data);_.generateMipmaps=!1}else ze?(tt&&n.texStorage2D(t.TEXTURE_2D,ge,Fe,ue.width,ue.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,xe,Ae,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,ue.width,ue.height,0,xe,Ae,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Fe,qe[0].width,qe[0].height,ue.depth);for(let ee=0,oe=qe.length;ee<oe;ee++)if(be=qe[ee],_.format!==Xn)if(xe!==null)if(ze){if(k)if(_.layerUpdates.size>0){const Se=Om(be.width,be.height,_.format,_.type);for(const ye of _.layerUpdates){const Be=be.data.subarray(ye*Se/be.data.BYTES_PER_ELEMENT,(ye+1)*Se/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ye,be.width,be.height,1,xe,Be)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ue.depth,xe,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Fe,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ue.depth,xe,Ae,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Fe,be.width,be.height,ue.depth,0,xe,Ae,be.data)}else{ze&&tt&&n.texStorage2D(t.TEXTURE_2D,ge,Fe,qe[0].width,qe[0].height);for(let ee=0,oe=qe.length;ee<oe;ee++)be=qe[ee],_.format!==Xn?xe!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,be.width,be.height,xe,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,be.width,be.height,xe,Ae,be.data):n.texImage2D(t.TEXTURE_2D,ee,Fe,be.width,be.height,0,xe,Ae,be.data)}else if(_.isDataArrayTexture)if(ze){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Fe,ue.width,ue.height,ue.depth),k)if(_.layerUpdates.size>0){const ee=Om(ue.width,ue.height,_.format,_.type);for(const oe of _.layerUpdates){const Se=ue.data.subarray(oe*ee/ue.data.BYTES_PER_ELEMENT,(oe+1)*ee/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,xe,Ae,Se)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,xe,Ae,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,ue.width,ue.height,ue.depth,0,xe,Ae,ue.data);else if(_.isData3DTexture)ze?(tt&&n.texStorage3D(t.TEXTURE_3D,ge,Fe,ue.width,ue.height,ue.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,xe,Ae,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,ue.width,ue.height,ue.depth,0,xe,Ae,ue.data);else if(_.isFramebufferTexture){if(tt)if(ze)n.texStorage2D(t.TEXTURE_2D,ge,Fe,ue.width,ue.height);else{let ee=ue.width,oe=ue.height;for(let Se=0;Se<ge;Se++)n.texImage2D(t.TEXTURE_2D,Se,Fe,ee,oe,0,xe,Ae,null),ee>>=1,oe>>=1}}else if(qe.length>0){if(ze&&tt){const ee=te(qe[0]);n.texStorage2D(t.TEXTURE_2D,ge,Fe,ee.width,ee.height)}for(let ee=0,oe=qe.length;ee<oe;ee++)be=qe[ee],ze?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,xe,Ae,be):n.texImage2D(t.TEXTURE_2D,ee,Fe,xe,Ae,be);_.generateMipmaps=!1}else if(ze){if(tt){const ee=te(ue);n.texStorage2D(t.TEXTURE_2D,ge,Fe,ee.width,ee.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ae,ue)}else n.texImage2D(t.TEXTURE_2D,0,Fe,xe,Ae,ue);m(_)&&u(W),me.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function q(E,_,D){if(_.image.length!==6)return;const W=Le(E,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+D);const J=i.get(Q);if(Q.version!==J.__version||W===!0){n.activeTexture(t.TEXTURE0+D);const me=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===Yi?null:Ze.getPrimaries(_.colorSpace),ve=_.colorSpace===Yi||me===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ke=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ke&&!ue?xe[oe]=M(_.image[oe],!0,r.maxCubemapSize):xe[oe]=ue?_.image[oe].image:_.image[oe],xe[oe]=se(_,xe[oe]);const Ae=xe[0],Fe=s.convert(_.format,_.colorSpace),be=s.convert(_.type),qe=y(_.internalFormat,Fe,be,_.colorSpace),ze=_.isVideoTexture!==!0,tt=J.__version===void 0||W===!0,k=Q.dataReady;let ge=P(_,Ae);he(t.TEXTURE_CUBE_MAP,_);let ee;if(Ke){ze&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,Ae.width,Ae.height);for(let oe=0;oe<6;oe++){ee=xe[oe].mipmaps;for(let Se=0;Se<ee.length;Se++){const ye=ee[Se];_.format!==Xn?Fe!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,ye.width,ye.height,Fe,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,qe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,ye.width,ye.height,Fe,be,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,qe,ye.width,ye.height,0,Fe,be,ye.data)}}}else{if(ee=_.mipmaps,ze&&tt){ee.length>0&&ge++;const oe=te(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Fe,be,xe[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,xe[oe].width,xe[oe].height,0,Fe,be,xe[oe].data);for(let Se=0;Se<ee.length;Se++){const Be=ee[Se].image[oe].image;ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Be.width,Be.height,Fe,be,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,qe,Be.width,Be.height,0,Fe,be,Be.data)}}else{ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,be,xe[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Fe,be,xe[oe]);for(let Se=0;Se<ee.length;Se++){const ye=ee[Se];ze?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Fe,be,ye.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,qe,Fe,be,ye.image[oe])}}}m(_)&&u(t.TEXTURE_CUBE_MAP),J.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function re(E,_,D,W,Q,J){const me=s.convert(D.format,D.colorSpace),pe=s.convert(D.type),ve=y(D.internalFormat,me,pe,D.colorSpace),Ke=i.get(_),ue=i.get(D);if(ue.__renderTarget=_,!Ke.__hasExternalTextures){const xe=Math.max(1,_.width>>J),Ae=Math.max(1,_.height>>J);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,J,ve,xe,Ae,_.depth,0,me,pe,null):n.texImage2D(Q,J,ve,xe,Ae,0,me,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,ue.__webglTexture,0,Ue(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,ue.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(E,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,E),_.depthBuffer){const W=_.depthTexture,Q=W&&W.isDepthTexture?W.type:null,J=x(_.stencilBuffer,Q),me=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Ue(_);Ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,J,_.width,_.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,E)}else{const W=_.textures;for(let Q=0;Q<W.length;Q++){const J=W[Q],me=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),ve=y(J.internalFormat,me,pe,J.colorSpace),Ke=Ue(_);D&&Ve(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ve,_.width,_.height):Ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ve,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ve,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const Q=W.__webglTexture,J=Ue(_);if(_.depthTexture.format===Is)Ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Ys)Ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=W}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");fe(_.__webglFramebuffer,E)}else if(D){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=t.createRenderbuffer(),Z(_.__webglDepthbuffer[W],E,!1);else{const Q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Z(_.__webglDepthbuffer,E,!1);else{const W=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(E,_,D){const W=i.get(E);_!==void 0&&re(W.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&we(E)}function He(E){const _=E.texture,D=i.get(E),W=i.get(_);E.addEventListener("dispose",R);const Q=E.textures,J=E.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=_.version,o.memory.textures++),J){D.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[pe]=[];for(let ve=0;ve<_.mipmaps.length;ve++)D.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else D.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)D.__webglFramebuffer[pe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(me)for(let pe=0,ve=Q.length;pe<ve;pe++){const Ke=i.get(Q[pe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&Ve(E)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const ve=Q[pe];D.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);const Ke=s.convert(ve.format,ve.colorSpace),ue=s.convert(ve.type),xe=y(ve.internalFormat,Ke,ue,ve.colorSpace,E.isXRRenderTarget===!0),Ae=Ue(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,xe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Z(D.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),he(t.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)re(D.__webglFramebuffer[pe][ve],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else re(D.__webglFramebuffer[pe],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(_)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let pe=0,ve=Q.length;pe<ve;pe++){const Ke=Q[pe],ue=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),he(t.TEXTURE_2D,Ke),re(D.__webglFramebuffer,E,Ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,W.__webglTexture),he(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)re(D.__webglFramebuffer[ve],E,_,t.COLOR_ATTACHMENT0,pe,ve);else re(D.__webglFramebuffer,E,_,t.COLOR_ATTACHMENT0,pe,0);m(_)&&u(pe),n.unbindTexture()}E.depthBuffer&&we(E)}function ke(E){const _=E.textures;for(let D=0,W=_.length;D<W;D++){const Q=_[D];if(m(Q)){const J=v(E),me=i.get(Q).__webglTexture;n.bindTexture(J,me),u(J),n.unbindTexture()}}}const pt=[],z=[];function Ut(E){if(E.samples>0){if(Ve(E)===!1){const _=E.textures,D=E.width,W=E.height;let Q=t.COLOR_BUFFER_BIT;const J=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(E),pe=_.length>1;if(pe)for(let ve=0;ve<_.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);const Ke=i.get(_[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,D,W,0,0,D,W,Q,t.NEAREST),l===!0&&(pt.length=0,z.length=0,pt.push(t.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(J),z.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<_.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);const Ke=i.get(_[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ue(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(E){const _=o.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function se(E,_){const D=E.colorSpace,W=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Js&&D!==Yi&&(Ze.getTransfer(D)===ot?(W!==Xn||Q!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function te(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=ie,this.setTextureCube=I,this.rebindTextures=Ne,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ve}function NT(t,e){function n(i,r=Yi){let s;const o=Ze.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===gf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S0)return t.BYTE;if(i===M0)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===mf)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===w0)return t.ALPHA;if(i===T0)return t.RGB;if(i===Xn)return t.RGBA;if(i===b0)return t.LUMINANCE;if(i===A0)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===C0)return t.RED;if(i===vf)return t.RED_INTEGER;if(i===R0)return t.RG;if(i===yf)return t.RG_INTEGER;if(i===xf)return t.RGBA_INTEGER;if(i===El||i===wl||i===Tl||i===bl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===Gd||i===Wd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xd||i===Yd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xd||i===Yd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===ch||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P0||i===dh||i===hh||i===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IT extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const FT=`
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

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:FT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ie(new fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends Wr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,g=null;const M=new kT,m=n.getContextAttributes();let u=null,v=null;const y=[],x=[],P=new Ee;let A=null;const R=new Dn;R.viewport=new Tt;const C=new Dn;C.viewport=new Tt;const T=[R,C],w=new IT;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=y[N];return q===void 0&&(q=new Au,y[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=y[N];return q===void 0&&(q=new Au,y[N]=q),q.getGripSpace()},this.getHand=function(N){let q=y[N];return q===void 0&&(q=new Au,y[N]=q),q.getHandSpace()};function F(N){const q=x.indexOf(N.inputSource);if(q===-1)return;const re=y[q];re!==void 0&&(re.update(N.inputSource,N.frame,c||o),re.dispatchEvent({type:N.type,data:N.inputSource}))}function G(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let N=0;N<y.length;N++){const q=x[N];q!==null&&(x[N]=null,y[N].disconnect(q))}L=null,V=null,M.reset(),e.setRenderTarget(u),p=null,h=null,f=null,r=null,v=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new zr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,re=null,Z=null;m.depth&&(Z=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?Ys:Is,re=m.stencil?Xs:kr);const fe={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new zr(h.textureWidth,h.textureHeight,{format:Xn,type:Pi,depthTexture:new j0(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(N){for(let q=0;q<N.removed.length;q++){const re=N.removed[q],Z=x.indexOf(re);Z>=0&&(x[Z]=null,y[Z].disconnect(re))}for(let q=0;q<N.added.length;q++){const re=N.added[q];let Z=x.indexOf(re);if(Z===-1){for(let we=0;we<y.length;we++)if(we>=x.length){x.push(re),Z=we;break}else if(x[we]===null){x[we]=re,Z=we;break}if(Z===-1)break}const fe=y[Z];fe&&fe.connect(re)}}const j=new U,ie=new U;function I(N,q,re){j.setFromMatrixPosition(q.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);const Z=j.distanceTo(ie),fe=q.projectionMatrix.elements,we=re.projectionMatrix.elements,Ne=fe[14]/(fe[10]-1),He=fe[14]/(fe[10]+1),ke=(fe[9]+1)/fe[5],pt=(fe[9]-1)/fe[5],z=(fe[8]-1)/fe[0],Ut=(we[8]+1)/we[0],Ue=Ne*z,Ve=Ne*Ut,O=Z/(-z+Ut),se=O*-z;if(q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(se),N.translateZ(O),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),fe[10]===-1)N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const te=Ne+O,E=He+O,_=Ue-se,D=Ve+(Z-se),W=ke*He/E*te,Q=pt*He/E*te;N.projectionMatrix.makePerspective(_,D,W,Q,te,E),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function $(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let q=N.near,re=N.far;M.texture!==null&&(M.depthNear>0&&(q=M.depthNear),M.depthFar>0&&(re=M.depthFar)),w.near=C.near=R.near=q,w.far=C.far=R.far=re,(L!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,V=w.far),R.layers.mask=N.layers.mask|2,C.layers.mask=N.layers.mask|4,w.layers.mask=R.layers.mask|C.layers.mask;const Z=N.parent,fe=w.cameras;$(w,Z);for(let we=0;we<fe.length;we++)$(fe[we],Z);fe.length===2?I(w,R,C):w.projectionMatrix.copy(R.projectionMatrix),ne(N,w,Z)};function ne(N,q,re){re===null?N.matrix.copy(q.matrixWorld):(N.matrix.copy(re.matrixWorld),N.matrix.invert(),N.matrix.multiply(q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=mh*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let ae=null;function he(N,q){if(d=q.getViewerPose(c||o),g=q,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Z=!1;re.length!==w.cameras.length&&(w.cameras.length=0,Z=!0);for(let we=0;we<re.length;we++){const Ne=re[we];let He=null;if(p!==null)He=p.getViewport(Ne);else{const pt=f.getViewSubImage(h,Ne);He=pt.viewport,we===0&&(e.setRenderTargetTextures(v,pt.colorTexture,h.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(v))}let ke=T[we];ke===void 0&&(ke=new Dn,ke.layers.enable(we),ke.viewport=new Tt,T[we]=ke),ke.matrix.fromArray(Ne.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ne.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(He.x,He.y,He.width,He.height),we===0&&(w.matrix.copy(ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Z===!0&&w.cameras.push(ke)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const we=f.getDepthInformation(re[0]);we&&we.isValid&&we.texture&&M.init(e,we,r.renderState)}}for(let re=0;re<y.length;re++){const Z=x[re],fe=y[re];Z!==null&&fe!==void 0&&fe.update(Z,q,c||o)}ae&&ae(N,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const Le=new G0;Le.setAnimationLoop(he),this.setAnimationLoop=function(N){ae=N},this.dispose=function(){}}}const xr=new ai,BT=new ct;function HT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,B0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),M(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,xr.copy(x),xr.x*=-1,xr.y*=-1,xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=d(v),r[v.id]=x,v.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function d(v){const y=f();v.__bindingPointIndex=y;const x=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],x=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,R=x.length;A<R;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,w=C.length;T<w;T++){const L=C[T];if(p(L,A,T,P)===!0){const V=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let K=0;K<F.length;K++){const j=F[K],ie=M(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+G,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,G),G+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,x,P){const A=v.value,R=y+"_"+x;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const C=P[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const P=16;for(let R=0,C=y.length;R<C;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,L=T.length;w<L;w++){const V=T[w],F=Array.isArray(V.value)?V.value:[V.value];for(let G=0,K=F.length;G<K;G++){const j=F[G],ie=M(j),I=x%P,$=I%ie.boundary,ne=I+$;x+=$,ne!==0&&P-ne<ie.storage&&(x+=P-ne),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ie.storage}}}const A=x%P;return A>0&&(x+=P-A),v.__size=x,v.__cache={},this}function M(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class GT{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let P=!1,A=0,R=0,C=null,T=-1,w=null;const L=new Tt,V=new Tt;let F=null;const G=new Ye(0);let K=0,j=n.width,ie=n.height,I=1,$=null,ne=null;const ae=new Tt(0,0,j,ie),he=new Tt(0,0,j,ie);let Le=!1;const N=new Mf;let q=!1,re=!1;const Z=new ct,fe=new ct,we=new U,Ne=new Tt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function pt(){return C===null?I:1}let z=i;function Ut(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",ye,!1),z===null){const B="webgl2";if(z=Ut(B,b),z===null)throw Ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Ve,O,se,te,E,_,D,W,Q,J,me,pe,ve,Ke,ue,xe,Ae,Fe,be,qe,ze,tt,k;function ge(){Ue=new $1(z),Ue.init(),ze=new NT(z,Ue),Ve=new V1(z,Ue,e,ze),O=new PT(z,Ue),Ve.reverseDepthBuffer&&h&&O.buffers.depth.setReversed(!0),se=new Z1(z),te=new mT,E=new LT(z,Ue,O,te,Ve,ze,se),_=new W1(x),D=new Y1(x),W=new rM(z),tt=new B1(z,W),Q=new q1(z,W,se,tt),J=new Q1(z,Q,W,se),Fe=new J1(z,Ve,E),ue=new G1(te),me=new pT(x,_,D,Ue,Ve,tt,ue),pe=new HT(x,te),ve=new _T,Ke=new ET(Ue),Ae=new z1(x,_,D,O,J,p,l),xe=new CT(x,J,Ve),k=new VT(z,se,Ve,O),be=new H1(z,Ue,se),qe=new K1(z,Ue,se),se.programs=me.programs,x.capabilities=Ve,x.extensions=Ue,x.properties=te,x.renderLists=ve,x.shadowMap=xe,x.state=O,x.info=se}ge();const ee=new zT(x,z);this.xr=ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(j,ie,!1))},this.getSize=function(b){return b.set(j,ie)},this.setSize=function(b,B,X=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ie=B,n.width=Math.floor(b*I),n.height=Math.floor(B*I),X===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(j*I,ie*I).floor()},this.setDrawingBufferSize=function(b,B,X){j=b,ie=B,I=X,n.width=Math.floor(b*X),n.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,B,X,Y){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,B,X,Y),O.viewport(L.copy(ae).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,B,X,Y){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,B,X,Y),O.scissor(V.copy(he).multiplyScalar(I).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){O.setScissorTest(Le=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(b=!0,B=!0,X=!0){let Y=0;if(b){let H=!1;if(C!==null){const de=C.texture.format;H=de===xf||de===yf||de===vf}if(H){const de=C.texture.type,Me=de===Pi||de===kr||de===ra||de===Xs||de===gf||de===_f,Ce=Ae.getClearColor(),Re=Ae.getClearAlpha(),Oe=Ce.r,Ge=Ce.g,Pe=Ce.b;Me?(g[0]=Oe,g[1]=Ge,g[2]=Pe,g[3]=Re,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=Oe,M[1]=Ge,M[2]=Pe,M[3]=Re,z.clearBufferiv(z.COLOR,0,M))}else Y|=z.COLOR_BUFFER_BIT}B&&(Y|=z.DEPTH_BUFFER_BIT),X&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ve.dispose(),Ke.dispose(),te.dispose(),_.dispose(),D.dispose(),J.dispose(),tt.dispose(),k.dispose(),me.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",bc),ee.removeEventListener("sessionend",pa),Zn.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=se.autoReset,B=xe.enabled,X=xe.autoUpdate,Y=xe.needsUpdate,H=xe.type;ge(),se.autoReset=b,xe.enabled=B,xe.autoUpdate=X,xe.needsUpdate=Y,xe.type=H}function ye(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Be(b){const B=b.target;B.removeEventListener("dispose",Be),yt(B)}function yt(b){Ft(b),te.remove(b)}function Ft(b){const B=te.get(b).programs;B!==void 0&&(B.forEach(function(X){me.releaseProgram(X)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,Y,H,de){B===null&&(B=He);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Ce=ov(b,B,X,Y,H);O.setMaterial(Y,Me);let Re=X.index,Oe=1;if(Y.wireframe===!0){if(Re=Q.getWireframeAttribute(X),Re===void 0)return;Oe=2}const Ge=X.drawRange,Pe=X.attributes.position;let Qe=Ge.start*Oe,ut=(Ge.start+Ge.count)*Oe;de!==null&&(Qe=Math.max(Qe,de.start*Oe),ut=Math.min(ut,(de.start+de.count)*Oe)),Re!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Re.count)):Pe!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Pe.count));const mt=ut-Qe;if(mt<0||mt===1/0)return;tt.setup(H,Y,Ce,X,Re);let an,nt=be;if(Re!==null&&(an=W.get(Re),nt=qe,nt.setIndex(an)),H.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*pt()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(H.isLine){let De=Y.linewidth;De===void 0&&(De=1),O.setLineWidth(De*pt()),H.isLineSegments?nt.setMode(z.LINES):H.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else H.isPoints?nt.setMode(z.POINTS):H.isSprite&&nt.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,li=H._multiDrawCounts,it=H._multiDrawCount,kn=Re?W.get(Re).bytesPerElement:1,jr=te.get(Y).currentProgram.getUniforms();for(let mn=0;mn<it;mn++)jr.setValue(z,"_gl_DrawID",mn),nt.render(De[mn]/kn,li[mn])}else if(H.isInstancedMesh)nt.renderInstances(Qe,mt,H.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,li=Math.min(X.instanceCount,De);nt.renderInstances(Qe,mt,li)}else nt.render(Qe,mt)};function et(b,B,X){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,ga(b,B,X),b.side=cr,b.needsUpdate=!0,ga(b,B,X),b.side=vi):ga(b,B,X)}this.compile=function(b,B,X=null){X===null&&(X=b),u=Ke.get(X),u.init(B),y.push(u),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),b!==X&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const Y=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ce=de[Me];et(Ce,X,H),Y.add(Ce)}else et(de,X,H),Y.add(de)}),y.pop(),u=null,Y},this.compileAsync=function(b,B,X=null){const Y=this.compile(b,B,X);return new Promise(H=>{function de(){if(Y.forEach(function(Me){te.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){H(b);return}setTimeout(de,10)}Ue.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let on=null;function wn(b){on&&on(b)}function bc(){Zn.stop()}function pa(){Zn.start()}const Zn=new G0;Zn.setAnimationLoop(wn),typeof self!="undefined"&&Zn.setContext(self),this.setAnimationLoop=function(b){on=b,ee.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},ee.addEventListener("sessionstart",bc),ee.addEventListener("sessionend",pa),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(B),B=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,C),u=Ke.get(b,y.length),u.init(B),y.push(u),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),N.setFromProjectionMatrix(fe),re=this.localClippingEnabled,q=ue.init(this.clippingPlanes,re),m=ve.get(b,v.length),m.init(),v.push(m),ee.enabled===!0&&ee.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&eo(de,B,-1/0,x.sortObjects)}eo(b,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,ne),ke=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ke&&Ae.addToRenderList(m,b),this.info.render.frame++,q===!0&&ue.beginShadows();const X=u.state.shadowsArray;xe.render(X,b,B),q===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(u.setupLights(),B.isArrayCamera){const de=B.cameras;if(H.length>0)for(let Me=0,Ce=de.length;Me<Ce;Me++){const Re=de[Me];ma(Y,H,b,Re)}ke&&Ae.render(b);for(let Me=0,Ce=de.length;Me<Ce;Me++){const Re=de[Me];to(m,b,Re,Re.viewport)}}else H.length>0&&ma(Y,H,b,B),ke&&Ae.render(b),to(m,b,B);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,B),tt.resetDefaultState(),T=-1,w=null,y.pop(),y.length>0?(u=y[y.length-1],q===!0&&ue.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function eo(b,B,X,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){Y&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const Me=J.update(b),Ce=b.material;Ce.visible&&m.push(b,Me,Ce,X,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const Me=J.update(b),Ce=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ne.copy(Me.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){const Re=Me.groups;for(let Oe=0,Ge=Re.length;Oe<Ge;Oe++){const Pe=Re[Oe],Qe=Ce[Pe.materialIndex];Qe&&Qe.visible&&m.push(b,Me,Qe,X,Ne.z,Pe)}}else Ce.visible&&m.push(b,Me,Ce,X,Ne.z,null)}}const de=b.children;for(let Me=0,Ce=de.length;Me<Ce;Me++)eo(de[Me],B,X,Y)}function to(b,B,X,Y){const H=b.opaque,de=b.transmissive,Me=b.transparent;u.setupLightsView(X),q===!0&&ue.setGlobalState(x.clippingPlanes,X),Y&&O.viewport(L.copy(Y)),H.length>0&&st(H,B,X),de.length>0&&st(de,B,X),Me.length>0&&st(Me,B,X),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ma(b,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new zr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?ua:Pi,minFilter:Pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const de=u.state.transmissionRenderTarget[Y.id],Me=Y.viewport||L;de.setSize(Me.z,Me.w);const Ce=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(G),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),ke&&Ae.render(X);const Re=x.toneMapping;x.toneMapping=sr;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),q===!0&&ue.setGlobalState(x.clippingPlanes,Y),st(b,X,Y),E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pe=0,Qe=B.length;Pe<Qe;Pe++){const ut=B[Pe],mt=ut.object,an=ut.geometry,nt=ut.material,De=ut.group;if(nt.side===vi&&mt.layers.test(Y.layers)){const li=nt.side;nt.side=pn,nt.needsUpdate=!0,Rf(mt,X,Y,an,nt,De),nt.side=li,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(de),E.updateRenderTargetMipmap(de))}x.setRenderTarget(Ce),x.setClearColor(G,K),Oe!==void 0&&(Y.viewport=Oe),x.toneMapping=Re}function st(b,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=b.length;H<de;H++){const Me=b[H],Ce=Me.object,Re=Me.geometry,Oe=Y===null?Me.material:Y,Ge=Me.group;Ce.layers.test(X.layers)&&Rf(Ce,B,X,Re,Oe,Ge)}}function Rf(b,B,X,Y,H,de){b.onBeforeRender(x,B,X,Y,H,de),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,B,X,Y,b,de),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,x.renderBufferDirect(X,B,Y,H,b,de),H.side=cr,H.needsUpdate=!0,x.renderBufferDirect(X,B,Y,H,b,de),H.side=vi):x.renderBufferDirect(X,B,Y,H,b,de),b.onAfterRender(x,B,X,Y,H,de)}function ga(b,B,X){B.isScene!==!0&&(B=He);const Y=te.get(b),H=u.state.lights,de=u.state.shadowsArray,Me=H.state.version,Ce=me.getParameters(b,H.state,de,B,X),Re=me.getProgramCacheKey(Ce);let Oe=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?D:_).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",Be),Oe=new Map,Y.programs=Oe);let Ge=Oe.get(Re);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Me)return Df(b,Ce),Ge}else Ce.uniforms=me.getUniforms(b),b.onBeforeCompile(Ce,x),Ge=me.acquireProgram(Ce,Re),Oe.set(Re,Ge),Y.uniforms=Ce.uniforms;const Pe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),Df(b,Ce),Y.needsLights=lv(b),Y.lightsStateVersion=Me,Y.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function Pf(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Rl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Df(b,B){const X=te.get(b);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ov(b,B,X,Y,H){B.isScene!==!0&&(B=He),E.resetTextureUnits();const de=B.fog,Me=Y.isMeshStandardMaterial?B.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Js,Re=(Y.isMeshStandardMaterial?D:_).get(Y.envMap||Me),Oe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let mt=sr;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=x.toneMapping);const an=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=an!==void 0?an.length:0,De=te.get(Y),li=u.state.lights;if(q===!0&&(re===!0||b!==w)){const Tn=b===w&&Y.id===T;ue.setState(Y,b,Tn)}let it=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==li.state.version||De.outputColorSpace!==Ce||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==Re||Y.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Ge||De.morphTargets!==Pe||De.morphNormals!==Qe||De.morphColors!==ut||De.toneMapping!==mt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=Y.version);let kn=De.currentProgram;it===!0&&(kn=ga(Y,B,H));let jr=!1,mn=!1,no=!1;const gt=kn.getUniforms(),Jn=De.uniforms;if(O.useProgram(kn.program)&&(jr=!0,mn=!0,no=!0),Y.id!==T&&(T=Y.id,mn=!0),jr||w!==b){O.buffers.depth.getReversed()?(Z.copy(b.projectionMatrix),NS(Z),IS(Z),gt.setValue(z,"projectionMatrix",Z)):gt.setValue(z,"projectionMatrix",b.projectionMatrix),gt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Ni=gt.map.cameraPosition;Ni!==void 0&&Ni.setValue(z,we.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&gt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,mn=!0,no=!0)}if(H.isSkinnedMesh){gt.setOptional(z,H,"bindMatrix"),gt.setOptional(z,H,"bindMatrixInverse");const Tn=H.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),gt.setValue(z,"boneTexture",Tn.boneTexture,E))}H.isBatchedMesh&&(gt.setOptional(z,H,"batchingTexture"),gt.setValue(z,"batchingTexture",H._matricesTexture,E),gt.setOptional(z,H,"batchingIdTexture"),gt.setValue(z,"batchingIdTexture",H._indirectTexture,E),gt.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&gt.setValue(z,"batchingColorTexture",H._colorsTexture,E));const io=X.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Fe.update(H,X,kn),(mn||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,gt.setValue(z,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jn.envMap.value=Re,Jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Jn.envMapIntensity.value=B.environmentIntensity),mn&&(gt.setValue(z,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&av(Jn,no),de&&Y.fog===!0&&pe.refreshFogUniforms(Jn,de),pe.refreshMaterialUniforms(Jn,Y,I,ie,u.state.transmissionRenderTarget[b.id]),Rl.upload(z,Pf(De),Jn,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rl.upload(z,Pf(De),Jn,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(z,"center",H.center),gt.setValue(z,"modelViewMatrix",H.modelViewMatrix),gt.setValue(z,"normalMatrix",H.normalMatrix),gt.setValue(z,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Tn=Y.uniformsGroups;for(let Ni=0,Ii=Tn.length;Ni<Ii;Ni++){const Lf=Tn[Ni];k.update(Lf,kn),k.bind(Lf,kn)}}return kn}function av(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function lv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,X){te.get(b.texture).__webglTexture=B,te.get(b.depthTexture).__webglTexture=X;const Y=te.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const X=te.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,X=0){C=b,A=B,R=X;let Y=!0,H=null,de=!1,Me=!1;if(b){const Re=te.get(b);if(Re.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Re.__hasExternalTextures)E.rebindTextures(b,te.get(b.texture).__webglTexture,te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pe=b.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&te.has(Pe)&&(b.width!==Pe.image.width||b.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Ge=te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?H=Ge[B][X]:H=Ge[B],de=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?H=te.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[X]:H=Ge,L.copy(b.viewport),V.copy(b.scissor),F=b.scissorTest}else L.copy(ae).multiplyScalar(I).floor(),V.copy(he).multiplyScalar(I).floor(),F=Le;if(O.bindFramebuffer(z.FRAMEBUFFER,H)&&Y&&O.drawBuffers(b,H),O.viewport(L),O.scissor(V),O.setScissorTest(F),de){const Re=te.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,X)}else if(Me){const Re=te.get(b.texture),Oe=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,Oe)}T=-1},this.readRenderTargetPixels=function(b,B,X,Y,H,de,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){O.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Re=b.texture,Oe=Re.format,Ge=Re.type;if(!Ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&X>=0&&X<=b.height-H&&z.readPixels(B,X,Y,H,ze.convert(Oe),ze.convert(Ge),de)}finally{const Re=C!==null?te.get(C).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,B,X,Y,H,de,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){const Re=b.texture,Oe=Re.format,Ge=Re.type;if(!Ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-Y&&X>=0&&X<=b.height-H){O.bindFramebuffer(z.FRAMEBUFFER,Ce);const Pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.bufferData(z.PIXEL_PACK_BUFFER,de.byteLength,z.STREAM_READ),z.readPixels(B,X,Y,H,ze.convert(Oe),ze.convert(Ge),0);const Qe=C!==null?te.get(C).__webglFramebuffer:null;O.bindFramebuffer(z.FRAMEBUFFER,Qe);const ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await LS(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,de),z.deleteBuffer(Pe),z.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,X=0){b.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-X),H=Math.floor(b.image.width*Y),de=Math.floor(b.image.height*Y),Me=B!==null?B.x:0,Ce=B!==null?B.y:0;E.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,Me,Ce,H,de),O.unbindTexture()},this.copyTextureToTexture=function(b,B,X=null,Y=null,H=0){b.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],B=arguments[2],H=arguments[3]||0,X=null);let de,Me,Ce,Re,Oe,Ge,Pe,Qe,ut;const mt=b.isCompressedTexture?b.mipmaps[H]:b.image;X!==null?(de=X.max.x-X.min.x,Me=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Oe=X.min.y,Ge=X.isBox3?X.min.z:0):(de=mt.width,Me=mt.height,Ce=mt.depth||1,Re=0,Oe=0,Ge=0),Y!==null?(Pe=Y.x,Qe=Y.y,ut=Y.z):(Pe=0,Qe=0,ut=0);const an=ze.convert(B.format),nt=ze.convert(B.type);let De;B.isData3DTexture?(E.setTexture3D(B,0),De=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),De=z.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),De=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const li=z.getParameter(z.UNPACK_ROW_LENGTH),it=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),jr=z.getParameter(z.UNPACK_SKIP_ROWS),mn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),z.pixelStorei(z.UNPACK_SKIP_ROWS,Oe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);const no=b.isDataArrayTexture||b.isData3DTexture,gt=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Jn=te.get(b),io=te.get(B),Tn=te.get(Jn.__renderTarget),Ni=te.get(io.__renderTarget);O.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ii=0;Ii<Ce;Ii++)no&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.get(b).__webglTexture,H,Ge+Ii),b.isDepthTexture?(gt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.get(B).__webglTexture,H,ut+Ii),z.blitFramebuffer(Re,Oe,de,Me,Pe,Qe,de,Me,z.DEPTH_BUFFER_BIT,z.NEAREST)):gt?z.copyTexSubImage3D(De,H,Pe,Qe,ut+Ii,Re,Oe,de,Me):z.copyTexSubImage2D(De,H,Pe,Qe,ut+Ii,Re,Oe,de,Me);O.bindFramebuffer(z.READ_FRAMEBUFFER,null),O.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(De,H,Pe,Qe,ut,de,Me,Ce,an,nt,mt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(De,H,Pe,Qe,ut,de,Me,Ce,an,mt.data):z.texSubImage3D(De,H,Pe,Qe,ut,de,Me,Ce,an,nt,mt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,Pe,Qe,de,Me,an,nt,mt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,Pe,Qe,mt.width,mt.height,an,mt.data):z.texSubImage2D(z.TEXTURE_2D,H,Pe,Qe,de,Me,an,nt,mt);z.pixelStorei(z.UNPACK_ROW_LENGTH,li),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,jr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mn),H===0&&B.generateMipmaps&&z.generateMipmap(De),O.unbindTexture()},this.copyTextureToTexture3D=function(b,B,X=null,Y=null,H=0){return b.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,X,Y,H)},this.initRenderTarget=function(b){te.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,O.reset(),tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class WT extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new U;class nc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Un(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class K0 extends pr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const vo=new U,cs=new U,us=new U,ds=new Ee,yo=new Ee,Z0=new ct,nl=new U,xo=new U,il=new U,km=new Ee,Cu=new Ee,zm=new Ee;class XT extends Lt{constructor(e=new K0){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Wt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jT(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new nc(i,3,0,!1)),ls.setAttribute("uv",new nc(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new Ee(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Z0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;rl(nl.set(-.5,-.5,0),us,o,cs,r,s),rl(xo.set(.5,-.5,0),us,o,cs,r,s),rl(il.set(.5,.5,0),us,o,cs,r,s),km.set(0,0),Cu.set(1,0),zm.set(1,1);let a=e.ray.intersectTriangle(nl,xo,il,!1,vo);if(a===null&&(rl(xo.set(-.5,.5,0),us,o,cs,r,s),Cu.set(0,1),a=e.ray.intersectTriangle(nl,il,xo,!1,vo),a===null))return;const l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||n.push({distance:l,point:vo.clone(),uv:Ln.getInterpolation(vo,nl,xo,il,km,Cu,zm,new Ee),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rl(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(yo.x=s*ds.x-r*ds.y,yo.y=r*ds.x+s*ds.y):yo.copy(ds),t.copy(e),t.x+=yo.x,t.y+=yo.y,t.applyMatrix4(Z0)}class J0 extends pr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new U,rc=new U,Bm=new ct,So=new ha,sl=new da,Ru=new U,Hm=new U;class YT extends Lt{constructor(e=new Wt,n=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ic.fromBufferAttribute(n,r-1),rc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Bm.copy(r).invert(),So.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=p,m=g-1;M<m;M+=c){const u=d.getX(M),v=d.getX(M+1),y=ol(this,e,So,l,u,v);y&&n.push(y)}if(this.isLineLoop){const M=d.getX(g-1),m=d.getX(p),u=ol(this,e,So,l,M,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=p,m=g-1;M<m;M+=c){const u=ol(this,e,So,l,M,M+1);u&&n.push(u)}if(this.isLineLoop){const M=ol(this,e,So,l,g-1,p);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ol(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),n.distanceSqToSegment(ic,rc,Ru,Hm)>i)return;Ru.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ru);if(!(l<e.near||l>e.far))return{distance:l,point:Hm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Vm=new U,Gm=new U;class $T extends YT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Vm.fromBufferAttribute(n,r),Gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vm.distanceTo(Gm);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends pr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new ct,_h=new ha,al=new da,ll=new U;class qT extends Lt{constructor(e=new Wt,n=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;Wm.copy(r).invert(),_h.copy(e.ray).applyMatrix4(Wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,M=p;g<M;g++){const m=c.getX(g);ll.fromBufferAttribute(f,m),jm(ll,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,M=p;g<M;g++)ll.fromBufferAttribute(f,g),jm(ll,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(t,e,n,i,r,s,o){const a=_h.distanceSqToPoint(t);if(a<n){const l=new U;_h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class KT extends nn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ee:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new ct;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ev extends Li{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZT extends ev{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const cl=new U,Pu=new wf,Du=new wf,Lu=new wf;class JT extends Li{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(cl.subVectors(r[0],r[1]).add(r[0]),c=cl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(cl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Pu.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,g,M,m),Du.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,g,M,m),Lu.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,g,M,m)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Du.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Lu.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Pu.calc(l),Du.calc(l),Lu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function QT(t,e){const n=1-t;return n*n*e}function eb(t,e){return 2*(1-t)*t*e}function tb(t,e){return t*t*e}function ko(t,e,n,i){return QT(t,e)+eb(t,n)+tb(t,i)}function nb(t,e){const n=1-t;return n*n*n*e}function ib(t,e){const n=1-t;return 3*n*n*t*e}function rb(t,e){return 3*(1-t)*t*t*e}function sb(t,e){return t*t*t*e}function zo(t,e,n,i,r){return nb(t,e)+ib(t,n)+rb(t,i)+sb(t,r)}class ob extends Li{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ab extends Li{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lb extends Li{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends Li{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cb extends Li{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends Li{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ub extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Xm(a,l.x,c.x,d.x,f.x),Xm(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var db=Object.freeze({__proto__:null,ArcCurve:ZT,CatmullRomCurve3:JT,CubicBezierCurve:ob,CubicBezierCurve3:ab,EllipseCurve:ev,LineCurve:lb,LineCurve3:tv,QuadraticBezierCurve:cb,QuadraticBezierCurve3:nv,SplineCurve:ub});class sc extends Wt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new U,d=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class An extends Wt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let g=0;const M=[],m=i/2;let u=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function v(){const x=new U,P=new U;let A=0;const R=(n-e)/i;for(let C=0;C<=s;C++){const T=[],w=C/s,L=w*(n-e)+e;for(let V=0;V<=r;V++){const F=V/r,G=F*l+a,K=Math.sin(G),j=Math.cos(G);P.x=L*K,P.y=-w*i+m,P.z=L*j,f.push(P.x,P.y,P.z),x.set(K,R,j).normalize(),h.push(x.x,x.y,x.z),p.push(F,1-w),T.push(g++)}M.push(T)}for(let C=0;C<r;C++)for(let T=0;T<s;T++){const w=M[T][C],L=M[T+1][C],V=M[T+1][C+1],F=M[T][C+1];(e>0||T!==0)&&(d.push(w,L,F),A+=3),(n>0||T!==s-1)&&(d.push(L,V,F),A+=3)}c.addGroup(u,A,0),u+=A}function y(x){const P=g,A=new Ee,R=new U;let C=0;const T=x===!0?e:n,w=x===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const G=V/r*l+a,K=Math.cos(G),j=Math.sin(G);R.x=T*j,R.y=m*w,R.z=T*K,f.push(R.x,R.y,R.z),h.push(0,w,0),A.x=K*.5+.5,A.y=j*.5*w+.5,p.push(A.x,A.y),g++}for(let V=0;V<r;V++){const F=P+V,G=L+V;x===!0?d.push(G,G+1,F):d.push(G+1,G,F),C+=3}c.addGroup(u,C,x===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends An{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tf extends Wt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new U,h=new U,p=[],g=[],M=[],m=[];for(let u=0;u<=i;u++){const v=[],y=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const A=P/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(A+x,1-y),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const y=d[u][v+1],x=d[u][v],P=d[u+1][v],A=d[u+1][v+1];(u!==0||o>0)&&p.push(y,x,A),(u!==i-1||l<Math.PI)&&p.push(x,P,A)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(M,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends Wt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new U,f=new U,h=new U;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const M=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(M),f.y=(e+n*Math.cos(m))*Math.sin(M),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const M=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(M,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bf extends Wt{constructor(e=new nv(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new Ee;let d=new U;const f=[],h=[],p=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function M(){for(let y=0;y<n;y++)m(y);m(s===!1?n:0),v(),u()}function m(y){d=e.getPointAt(y/n,d);const x=o.normals[y],P=o.binormals[y];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,C=Math.sin(R),T=-Math.cos(R);l.x=T*x.x+C*P.x,l.y=T*x.y+C*P.y,l.z=T*x.z+C*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){const P=(r+1)*(y-1)+(x-1),A=(r+1)*y+(x-1),R=(r+1)*y+x,C=(r+1)*(y-1)+x;g.push(P,A,C),g.push(A,R,C)}}function v(){for(let y=0;y<=n;y++)for(let x=0;x<=r;x++)c.x=y/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bf(new db[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class je extends pr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iv extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Nu=new ct,Ym=new U,$m=new U;class hb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fb extends hb{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends iv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pb extends iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Km=new ct;class mb{constructor(e,n,i=0,r=1/0){this.ray=new ha(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,n=!0,i=[]){return vh(e,this,i,n),i.sort(Zm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vh(e[r],this,i,n);return i.sort(Zm),i}}function Zm(t,e){return t.distance-e.distance}function vh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vh(s[o],e,n,!0)}}class Jm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gb extends $T{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const M=h===s?i:r;M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3,M.toArray(c,p),p+=3}const d=new Wt;d.setAttribute("position",new ft(l,3)),d.setAttribute("color",new ft(c,3));const f=new J0({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _b extends Wr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);const Qm={type:"change"},Af={type:"start"},rv={type:"end"},ul=new ha,eg=new _i,vb=Math.cos(70*PS.DEG2RAD),Rt=new U,ln=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6;class yb extends _b{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Br,this._lastTargetPosition=new U,this._quat=new Br().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jm,this._sphericalDelta=new Jm,this._scale=1,this._panOffset=new U,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new U,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sb.bind(this),this._onPointerDown=xb.bind(this),this._onPointerUp=Mb.bind(this),this._onContextMenu=Rb.bind(this),this._onMouseWheel=Tb.bind(this),this._onKeyDown=bb.bind(this),this._onTouchStart=Ab.bind(this),this._onTouchMove=Cb.bind(this),this._onMouseDown=Eb.bind(this),this._onMouseMove=wb.bind(this),this._interceptControlDown=Pb.bind(this),this._interceptControlUp=Db.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qm),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Rt.copy(n).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<vb?this.object.lookAt(this.target):(eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(eg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(Qm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rt.setFromMatrixColumn(n,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,n){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(n,1):(Rt.setFromMatrixColumn(n,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ee,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Sb(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Mb(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Eb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Ls.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Ls.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Af)}function wb(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Tb(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(Af),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(rv))}function bb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function Ab(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Af)}function Cb(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function Rb(t){this.enabled!==!1&&t.preventDefault()}function Pb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Db(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lb(t,e){const n=new Ei;switch(t){case"solar_pv":{for(let r=0;r<3;r++){const s=new Ie(new dt(1.2,.05,.8),new je({color:1981023,metalness:.8,roughness:.2})),o=new Ie(new dt(1.18,.06,.78),new je({color:4886745,metalness:.5}));s.add(o),s.position.set(r*1.4-1.4,.8,0),s.rotation.x=-Math.PI*.2,n.add(s);const a=new Ie(new An(.03,.03,.7,8),new je({color:8947848}));a.position.set(r*1.4-1.4,.35,.2),n.add(a)}break}case"smart_building":{const i=e.floors||5,r=i*.6,s=new Ie(new dt(2,r,1.5),new je({color:4871528}));s.position.y=r/2,n.add(s);for(let a=0;a<i;a++)for(let l=0;l<3;l++){const c=new Ie(new dt(.4,.3,.02),new je({color:8900331,emissive:2245802,emissiveIntensity:.3}));c.position.set(l*.6-.6,a*.6+.4,.76),n.add(c)}const o=new Ie(new dt(2.1,.1,1.6),new je({color:2963272}));o.position.y=r+.05,n.add(o);break}case"battery_storage":{const i=new Ie(new dt(1.2,1.5,.8),new je({color:2278750}));i.position.y=.75,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new dt(.3,.2,.02),new je({color:1467700,emissive:65280,emissiveIntensity:.2}));o.position.set(0,.5+s*.35,.41),n.add(o)}const r=new Ie(new oc(.15,.4,4),new je({color:16498468}));r.position.set(0,1.3,.41),r.rotation.z=Math.PI,n.add(r);break}case"wind_turbine":{const i=new Ie(new An(.15,.25,4,8),new je({color:16119285}));i.position.y=2,n.add(i);const r=new Ie(new dt(.6,.4,.4),new je({color:15066597}));r.position.set(0,4.1,0),n.add(r);const s=new Ie(new oc(.15,.3,16),new je({color:13421772}));s.position.set(0,4.1,.35),s.rotation.x=Math.PI/2,n.add(s);const o=new Ei;for(let a=0;a<3;a++){const l=new Ie(new dt(.15,1.8,.05),new je({color:16777215}));l.position.y=.9;const c=new Ei;c.add(l),c.rotation.z=a*Math.PI*2/3,o.add(c)}o.position.set(0,4.1,.5),o.userData.isRotating=!0,n.add(o);break}case"district_heating":{const i=new Ie(new dt(1.5,1,1),new je({color:14427686}));i.position.y=.5,n.add(i);const r=new Ie(new An(.1,.1,1.2,16),new je({color:15680580}));r.rotation.z=Math.PI/2,r.position.set(0,.8,.6),n.add(r);const s=new Ie(new An(.08,.08,1.2,16),new je({color:3900150}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.6),n.add(s);const o=new Ie(new Bo(.2,.03,8,16,Math.PI),new je({color:16739179,emissive:16711680,emissiveIntensity:.5}));o.position.set(0,1.2,0),o.rotation.x=Math.PI/2,n.add(o);break}case"smart_grid":{const i=new Ie(new dt(1,.3,.8),new je({color:3621201}));i.position.y=.15,n.add(i);const r=new Ie(new dt(.6,.8,.5),new je({color:7041664}));r.position.y=.7,n.add(r);for(let s=0;s<3;s++){const o=new Ie(new An(.05,.08,.4,8),new je({color:9133302}));o.position.set(s*.25-.25,1.3,0),n.add(o)}for(let s=0;s<3;s++){const o=new Ie(new An(.01,.01,.8,8),new je({color:1118481}));o.rotation.z=Math.PI/2,o.position.set(.4,1.5,s*.15-.15),n.add(o)}break}case"ev_charger":{const i=new Ie(new dt(.3,1.4,.2),new je({color:1982639}));i.position.y=.7,n.add(i);const r=new Ie(new dt(.25,.2,.02),new je({color:0,emissive:65280,emissiveIntensity:.3}));r.position.set(0,1.1,.11),n.add(r);const s=new Ie(new Bo(.15,.02,8,16,Math.PI),new je({color:1118481}));s.position.set(.2,.5,.15),s.rotation.y=Math.PI/2,n.add(s);const o=new Ie(new dt(.8,.3,.4),new je({color:3900150,transparent:!0,opacity:.6}));o.position.set(.8,.15,0),n.add(o);break}case"heat_pump":{const i=new Ie(new dt(1.2,.9,.5),new je({color:16119285}));i.position.y=.45,n.add(i);const r=new Ie(new sc(.3,32),new je({color:3355443}));r.position.set(0,.5,.26),n.add(r);const s=new Ei;for(let a=0;a<4;a++){const l=new Ie(new dt(.25,.05,.02),new je({color:6710886}));l.rotation.z=a*Math.PI/2,s.add(l)}s.position.set(0,.5,.27),s.userData.isRotating=!0,n.add(s);const o=new Ie(new An(.04,.04,.5,8),new je({color:15680580}));o.position.set(-.4,.7,-.3),n.add(o);break}case"chp_unit":{const i=new Ie(new dt(1.5,1.2,1),new je({color:16347926}));i.position.y=.6,n.add(i);const r=new Ie(new An(.1,.12,.8,16),new je({color:6710886}));r.position.set(.5,1.6,0),n.add(r);const s=new Ie(new dt(.4,.3,.05),new je({color:2042167,emissive:2278750,emissiveIntensity:.2}));s.position.set(-.4,.8,.53),n.add(s);break}case"thermal_storage":{const i=new Ie(new An(.6,.6,1.8,24),new je({color:15485081}));i.position.y=.9,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new Bo(.62,.03,8,32),new je({color:12458077}));o.position.y=.4+s*.5,o.rotation.x=Math.PI/2,n.add(o)}const r=new Ie(new sc(.1,16),new je({color:16777215,emissive:16729156,emissiveIntensity:.5}));r.position.set(0,1.2,.61),n.add(r);break}case"load_center":{const i=new Ie(new dt(.8,1.2,.2),new je({color:4937059}));i.position.y=.6,n.add(i);for(let s=0;s<3;s++)for(let o=0;o<2;o++){const a=new Ie(new dt(.15,.2,.05),new je({color:1118481}));a.position.set(o*.25-.12,.3+s*.3,.12),n.add(a)}const r=new Ie(new Tf(.05,16,16),new je({color:2278750,emissive:65280,emissiveIntensity:.8}));r.position.set(.25,1,.12),n.add(r);break}}return n}function Nb(t,e,n){const i=document.createElement("canvas"),r=i.getContext("2d");i.width=256,i.height=64,r.fillStyle="rgba(15, 23, 42, 0.85)",r.beginPath(),r.roundRect(4,4,i.width-8,i.height-8,8),r.fill(),r.font="bold 22px Arial",r.fillStyle="#e2e8f0",r.textAlign="center",r.textBaseline="middle",r.fillText(t.substring(0,20),i.width/2,i.height/2);const s=new KT(i),o=new K0({map:s,transparent:!0}),a=new XT(o);return a.position.copy(e),a.position.y=n+1.5,a.scale.set(2.5,.6,1),a}class Ib{constructor(e,n,i,r=20){this.startPos=e.clone(),this.endPos=n.clone(),this.count=r,this.speed=.015,this.positions=new Float32Array(r*3),this.progress=new Float32Array(r);for(let a=0;a<r;a++)this.progress[a]=a/r,this.updateParticlePosition(a);const s=new Wt;s.setAttribute("position",new Un(this.positions,3));const o=new Q0({color:i,size:.2,transparent:!0,opacity:.9,blending:Cd});this.particles=new qT(s,o)}updateParticlePosition(e){const n=this.progress[e];this.positions[e*3]=this.startPos.x+(this.endPos.x-this.startPos.x)*n,this.positions[e*3+1]=this.startPos.y+(this.endPos.y-this.startPos.y)*n+Math.sin(n*Math.PI)*.4,this.positions[e*3+2]=this.startPos.z+(this.endPos.z-this.startPos.z)*n}update(){for(let e=0;e<this.count;e++)this.progress[e]+=this.speed,this.progress[e]>1&&(this.progress[e]=0),this.updateParticlePosition(e);this.particles.geometry.attributes.position.needsUpdate=!0}}function tg({config:t,animate:e=!0,onComponentMove:n}){const i=le.useRef(null),r=le.useRef(null),s=le.useRef(null),o=le.useRef(null),a=le.useRef(null),l=le.useRef(new Map),c=le.useRef(null),d=le.useRef(new Map),f=le.useRef([]),h=le.useRef([]),p=le.useRef(0),g=le.useRef(new mb),M=le.useRef(new Ee),m=le.useRef(null),u=le.useRef(new _i(new U(0,1,0),0)),v=le.useRef(e);return le.useEffect(()=>{v.current=e},[e]),le.useEffect(()=>{if(!i.current)return;const y=i.current,x=new WT;x.background=new Ye(661032),r.current=x;const P=y.clientWidth||600,A=y.clientHeight||400,R=new Dn(50,P/A,.1,500);R.position.set(12,10,12),o.current=R;const C=new GT({antialias:!0});C.setSize(P,A),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.shadowMap.enabled=!0,y.appendChild(C.domElement),s.current=C;const T=new yb(R,C.domElement);T.enableDamping=!0,T.dampingFactor=.08,a.current=T,x.add(new pb(16777215,.5));const w=new qm(16777215,1);w.position.set(10,20,10),w.castShadow=!0,x.add(w);const L=new qm(4491519,.3);L.position.set(-10,5,-10),x.add(L);const V=new Ie(new fa(60,60),new je({color:1712946,roughness:.9}));V.rotation.x=-Math.PI/2,V.receiveShadow=!0,x.add(V);const F=new gb(60,30,2767434,1714746);F.position.y=.01,x.add(F);const G=new Ei;x.add(G),c.current=G;const K=()=>{p.current=requestAnimationFrame(K),T.update(),v.current&&(f.current.forEach(ae=>ae.update()),h.current.forEach(ae=>{ae.rotation.z+=.02})),C.render(x,R)};K();const j=()=>{const ae=y.clientWidth,he=y.clientHeight;R.aspect=ae/he,R.updateProjectionMatrix(),C.setSize(ae,he)};window.addEventListener("resize",j);const ie=ae=>{const he=C.domElement.getBoundingClientRect();M.current.x=(ae.clientX-he.left)/he.width*2-1,M.current.y=-((ae.clientY-he.top)/he.height)*2+1},I=ae=>{if(!n)return;ie(ae),g.current.setFromCamera(M.current,R);const he=Array.from(l.current.entries());for(const[Le,N]of he)if(g.current.intersectObject(N,!0).length>0){T.enabled=!1;const re=new U;g.current.ray.intersectPlane(u.current,re),m.current={id:Le,model:N,offset:N.position.clone().sub(re)},C.domElement.style.cursor="grabbing";break}},$=ae=>{if(!m.current){if(n){ie(ae),g.current.setFromCamera(M.current,R);let q=!1;for(const re of l.current.values())if(g.current.intersectObject(re,!0).length>0){q=!0;break}C.domElement.style.cursor=q?"grab":"default"}return}ie(ae),g.current.setFromCamera(M.current,R);const he=new U;g.current.ray.intersectPlane(u.current,he);const Le=he.add(m.current.offset);m.current.model.position.x=Le.x,m.current.model.position.z=Le.z;const N=d.current.get(m.current.id);N&&(N.position.x=Le.x,N.position.z=Le.z)},ne=()=>{if(m.current&&n){const{id:ae,model:he}=m.current,Le=.035,N=-300*Le,q=-200*Le,re=(he.position.x-N)/Le,Z=(he.position.z-q)/Le;n(ae,re,Z)}m.current=null,T.enabled=!0,C.domElement.style.cursor="default"};return C.domElement.addEventListener("pointerdown",I),C.domElement.addEventListener("pointermove",$),C.domElement.addEventListener("pointerup",ne),C.domElement.addEventListener("pointerleave",ne),()=>{window.removeEventListener("resize",j),C.domElement.removeEventListener("pointerdown",I),C.domElement.removeEventListener("pointermove",$),C.domElement.removeEventListener("pointerup",ne),C.domElement.removeEventListener("pointerleave",ne),cancelAnimationFrame(p.current),C.dispose(),y.removeChild(C.domElement)}},[n]),le.useEffect(()=>{var w,L,V;const y=r.current,x=c.current;if(!y||!x)return;for(l.current.forEach(F=>y.remove(F)),l.current.clear();x.children.length;)x.remove(x.children[0]);if(f.current.forEach(F=>y.remove(F.particles)),f.current=[],h.current=[],!t)return;const P=.035,A=-300*P,R=-200*P;t.components.forEach(F=>{const G=Lb(F.type,F.params),K=F.x*P+A,j=F.y*P+R;G.position.set(K,0,j),y.add(G),l.current.set(F.id,G),G.traverse(ne=>{ne.userData.isRotating&&h.current.push(ne)});const I=new Hr().setFromObject(G).max.y,$=Nb(F.name,new U(K,0,j),I);x.add($)});const C=new Set(["solar_pv","wind_turbine","chp_unit"]),T=new Set(["smart_building","ev_charger","load_center","heat_pump"]);if(t.connections.forEach(F=>{const G=t.components.find(fe=>fe.id===F.from),K=t.components.find(fe=>fe.id===F.to),j=l.current.get(F.from),ie=l.current.get(F.to);if(!j||!ie||!G||!K)return;let I=j.position.clone(),$=ie.position.clone();const ne=C.has(G.type),ae=C.has(K.type),he=T.has(G.type),Le=T.has(K.type);(he&&!Le||ae&&!ne)&&([I,$]=[$,I]),I.y=.5,$.y=.5;const N=F.type==="heat"?15680580:F.type==="both"?11032055:3900150,q=new tv(j.position.clone().setY(.5),ie.position.clone().setY(.5)),re=new Ie(new bf(q,8,.04,8,!1),new je({color:N,transparent:!0,opacity:.4}));y.add(re);const Z=new Ib(I,$,N,18);y.add(Z.particles),f.current.push(Z)}),t.components.length>0){const F=new Hr;l.current.forEach(ie=>F.expandByObject(ie));const G=new U,K=new U;F.getCenter(G),F.getSize(K),(w=a.current)==null||w.target.copy(G);const j=Math.max(K.x,K.z)*2;(L=o.current)==null||L.position.set(G.x+j,j*.7,G.z+j),(V=a.current)==null||V.update()}},[t]),S.jsx("div",{ref:i,style:{width:"100%",height:"100%",minHeight:300}})}function sv(t){return t.endsWith("/")?t:t+"/"}const Vi=(t,e)=>{const n=t.replace(/^\/+/,"");return new URL(n,sv(e)).toString()},Ub=(t,e)=>{const n=t.replace(/^\/+/,""),i=new URL(n,sv(e));return i.protocol=i.protocol.startsWith("https")?"wss:":"ws:",i.toString()};function ng(t){return t==null?"—":new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:2}).format(t)}function Fb(t){return t==null?"—":t.toLocaleString(void 0,{maximumFractionDigits:2})}function Ob(){var O,se,te;const t=le.useMemo(()=>window.location.origin,[]),[e,n]=le.useState([]),[i,r]=le.useState(!1),[s,o]=le.useState(null),[a,l]=le.useState(null),[c,d]=le.useState(null),[f,h]=le.useState(null),[p,g]=le.useState([]),[M,m]=le.useState("idle"),[u,v]=le.useState("runs"),[y,x]=le.useState("3d"),[P,A]=le.useState("2d"),[R,C]=le.useState(null),[T,w]=le.useState(!1),[L,V]=le.useState(12),[F,G]=le.useState(800),[K,j]=le.useState(.5),[ie,I]=le.useState(!1);le.useState(null)[0];const[$,ne]=le.useState(.58),[ae,he]=le.useState(!1),[Le,N]=le.useState(320),[q,re]=le.useState(!1),[Z,fe]=le.useState(!1),[we,Ne]=le.useState(!1),He=le.useCallback(E=>{g(_=>[..._,`${new Date().toLocaleTimeString()} ${E}`].slice(-50))},[]),ke=le.useCallback(async()=>{r(!0);try{const E=await fetch(Vi("/runs",t));if(!E.ok)throw new Error(`Failed to load runs (${E.status})`);const _=await E.json();if(n(_),_.length===0){o(D=>D!==null?null:D);return}o(D=>!(D?_.some(Q=>Q.id===D):!1)&&_.length>0?_[0].id:D)}catch(E){console.error(E),He(`Error loading runs: ${E.message}`)}finally{r(!1)}},[t,He]);le.useEffect(()=>{ke();const E=setInterval(ke,15e3);return()=>clearInterval(E)},[ke]),le.useEffect(()=>{if(!s){h(null),l(null),d(null);return}const E=new AbortController;return(async()=>{try{const D=await fetch(Vi(`/runs/${s}/state`,t),{signal:E.signal});if(!D.ok)throw new Error(`Failed to load state (${D.status})`);const W=await D.json();h(W)}catch(D){D.name!=="AbortError"&&He(`Error fetching state: ${D.message}`)}})(),()=>E.abort()},[t,He,s]);const pt=E=>{const _=E.config_overrides||{},D=[],W=[];let Q=1;return D.push({id:"bld-1",type:"smart_building",name:"Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150}}),_.owned_solar_capacity_mw>0&&(D.push({id:"pv-1",type:"solar_pv",name:`Solar (${(_.owned_solar_capacity_mw*1e3).toFixed(0)} kWp)`,x:300,y:60,params:{capacity_kwp:_.owned_solar_capacity_mw*1e3}}),W.push({id:`c${Q++}`,from:"pv-1",to:"bld-1",type:"electricity"})),_.owned_battery_capacity_mwh>0&&(D.push({id:"bat-1",type:"battery_storage",name:`Battery (${(_.owned_battery_capacity_mwh*1e3).toFixed(0)} kWh)`,x:450,y:120,params:{capacity_kwh:_.owned_battery_capacity_mwh*1e3}}),W.push({id:`c${Q++}`,from:"bat-1",to:"bld-1",type:"electricity"}),_.owned_solar_capacity_mw>0&&W.push({id:`c${Q++}`,from:"pv-1",to:"bat-1",type:"electricity"})),_.owned_wind_capacity_mw>0&&(D.push({id:"wind-1",type:"wind_turbine",name:`Wind (${(_.owned_wind_capacity_mw*1e3).toFixed(0)} kW)`,x:150,y:60,params:{capacity_kw:_.owned_wind_capacity_mw*1e3}}),W.push({id:`c${Q++}`,from:"wind-1",to:"bld-1",type:"electricity"})),D.push({id:"grid-1",type:"smart_grid",name:"Grid",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:200}}),W.push({id:`c${Q++}`,from:"grid-1",to:"bld-1",type:"electricity"}),D.push({id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{capacity_kw:200}}),W.push({id:`c${Q++}`,from:"dh-1",to:"bld-1",type:"heat"}),{id:`gen-${E.id}`,name:E.name,components:D,connections:W,created_at:E.created_at}};le.useEffect(()=>{const E=new AbortController;return(async()=>{if(s)try{const D=await fetch(Vi(`/runs/${s}`,t),{signal:E.signal});if(!D.ok)return;const W=await D.json();l(W);let Q=!1;if(W.digital_twin_id){const J=await fetch(Vi(`/digital-twins/${W.digital_twin_id}`,t),{signal:E.signal});if(J.ok){const me=await J.json();C({id:me.id,name:me.name,components:me.components||[],connections:me.connections||[],created_at:me.created_at}),Q=!0}}if(W.scenario_id){const J=await fetch(Vi(`/scenarios/${W.scenario_id}`,t),{signal:E.signal});if(J.ok){const me=await J.json();if(d(me),!Q&&me.digital_twin_id){const pe=await fetch(Vi(`/digital-twins/${me.digital_twin_id}`,t),{signal:E.signal});if(pe.ok){const ve=await pe.json();C({id:ve.id,name:ve.name,components:ve.components||[],connections:ve.connections||[],created_at:ve.created_at}),Q=!0}}Q||C(pt(me))}else d(null)}else d(null)}catch{}})(),()=>E.abort()},[t,s]),le.useEffect(()=>{if(!s)return;const E=Ub(`/runs/${s}/ws`,t);m("connecting"),He(`Connecting to ${E}`);const _=new WebSocket(E);return _.onopen=()=>{m("open"),He("WebSocket connected"),_.send(JSON.stringify({command:"state"}))},_.onclose=D=>{m("closed"),He(`WebSocket closed (code ${D.code})`)},_.onerror=D=>{console.error("WebSocket error",D),He("WebSocket error encountered")},_.onmessage=D=>{try{const W=JSON.parse(D.data);W.type==="state"?h(W.payload):W.type==="error"&&He(`Backend error: ${W.message}`)}catch(W){console.error("Malformed message",W)}},()=>{_.close()}},[He,s,t]);const z=E=>{o(E)},Ut=async E=>{if(s)try{const _=await fetch(Vi(`/runs/${s}/step`,t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({steps:E})});if(!_.ok)throw new Error(`Step failed (${_.status})`);const D=await _.json();h(D),He(`Advanced simulation by ${E} step(s)`)}catch(_){He(`Error stepping simulation: ${_.message}`)}},Ue=(f==null?void 0:f.terminations)&&Object.values(f.terminations).some(E=>E===!0);le.useEffect(()=>{if(!T||!s||u!=="runs"||(a==null?void 0:a.status)!=="running")return;if(Ue){w(!1),He("✓ Simulation completed!");return}let E=!1,_;const D=async()=>{E||(await Ut(L),_=window.setTimeout(D,Math.max(100,F)))};return _=window.setTimeout(D,0),()=>{E=!0,_&&window.clearTimeout(_)}},[T,L,F,s,u,a==null?void 0:a.status,Ue]);const Ve=(O=f==null?void 0:f.metrics)!=null?O:{};return le.useEffect(()=>{const E=D=>{if(!ie)return;const W=document.querySelector(".split-container");if(!W)return;const Q=W.getBoundingClientRect(),J=D.clientX-Q.left,me=Math.max(.2,Math.min(.8,J/Q.width));j(me)},_=()=>I(!1);return window.addEventListener("mousemove",E),window.addEventListener("mouseup",_),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",_)}},[ie]),le.useEffect(()=>{const E=D=>{if(!ae)return;const W=document.querySelector(".vsplit-container");if(!W)return;const Q=W.getBoundingClientRect(),J=D.clientY-Q.top,me=Math.max(.25,Math.min(.85,J/Q.height));ne(me)},_=()=>he(!1);return window.addEventListener("mousemove",E),window.addEventListener("mouseup",_),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",_)}},[ae]),le.useEffect(()=>{const E=D=>{if(!q)return;const W=document.querySelector(".app-shell");if(!W)return;const Q=W.getBoundingClientRect(),J=D.clientX-Q.left,me=220,pe=Math.max(360,Q.width*.5);N(Math.max(me,Math.min(pe,J)))},_=()=>re(!1);return window.addEventListener("mousemove",E),window.addEventListener("mouseup",_),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",_)}},[q]),S.jsxs("div",{className:"app-shell",style:{"--sidebar-width":`${Le}px`},children:[u==="runs"?S.jsxs(S.Fragment,{children:[S.jsx(Fx,{runs:e,selectedId:s,onSelect:z,onRefresh:ke,onDelete:async E=>{var _;try{const D=Vi(`/runs/${E}`,t),W=await fetch(D,{method:"DELETE"});if(!W.ok)throw new Error(`Delete failed (${W.status})`);s===E&&o(null),await ke()}catch(D){He(`Delete run error: ${(_=D==null?void 0:D.message)!=null?_:String(D)}`)}},isLoading:i}),S.jsx("div",{className:"sidebar-divider",onMouseDown:()=>re(!0),title:"Resize sidebar"}),S.jsxs("main",{className:"main-content",children:[S.jsxs("div",{className:"header",children:[S.jsxs("div",{children:[S.jsx("h1",{children:"Digital Twin Console"}),S.jsxs("p",{style:{color:"#64748b"},children:["WebSocket status: ",M]})]}),S.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[S.jsx("button",{className:"button",onClick:()=>v("builder"),children:"🏗️ Digital Twin"}),S.jsx("button",{className:"button button-secondary",onClick:()=>v("scenarios"),children:"Scenarios"}),S.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),S.jsx("button",{className:"button",onClick:()=>x("3d"),style:{background:y==="3d"?"#2563eb":"#475569"},children:"3D"}),S.jsx("button",{className:"button",onClick:()=>x("charts"),style:{background:y==="charts"?"#2563eb":"#475569"},children:"Charts"}),S.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),Ue&&S.jsx("span",{style:{padding:"4px 10px",background:"#166534",borderRadius:4,fontSize:12,fontWeight:600},children:"✓ Completed"}),S.jsx("button",{className:"button",onClick:()=>Ut(1),disabled:!s||(a==null?void 0:a.status)!=="running"||Ue,children:"Step"}),S.jsx("button",{className:"button",onClick:()=>Ut(12),disabled:!s||(a==null?void 0:a.status)!=="running"||Ue,children:"×12"}),S.jsx("button",{className:"button",onClick:()=>w(E=>!E),disabled:!s||(a==null?void 0:a.status)!=="running"||Ue,style:{background:T?"#dc2626":"#2563eb"},children:T?"⏸ Pause":"▶ Auto"}),S.jsx("input",{type:"number",value:L,min:1,max:288,onChange:E=>V(Math.max(1,Math.min(288,Number(E.target.value)))),style:{width:50},title:"Steps per interval"}),S.jsx("input",{type:"number",value:F,min:100,step:100,onChange:E=>G(Math.max(100,Number(E.target.value))),style:{width:60},title:"Interval (ms)"}),S.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:"0.8rem",color:"#94a3b8"},children:[S.jsx("input",{type:"checkbox",checked:we,onChange:E=>Ne(E.target.checked)})," Reduce motion"]}),S.jsx("button",{className:"button button-secondary",onClick:()=>fe(E=>!E),style:{padding:"0.35rem 0.5rem"},children:Z?"▼":"▲"})]})]}),S.jsxs("section",{className:"metrics-grid",children:[S.jsxs("article",{className:"metric-card",children:[S.jsx("div",{className:"metric-label",children:"Timestep"}),S.jsx("div",{className:"metric-value",children:(se=Ve.timestep)!=null?se:"—"})]}),S.jsxs("article",{className:"metric-card",children:[S.jsx("div",{className:"metric-label",children:"Fund NAV (DKK)"}),S.jsx("div",{className:"metric-value",children:ng(Ve.fund_nav)})]}),S.jsxs("article",{className:"metric-card",children:[S.jsx("div",{className:"metric-label",children:"Trading Budget (DKK)"}),S.jsx("div",{className:"metric-value",children:ng(Ve.budget)})]}),S.jsxs("article",{className:"metric-card",children:[S.jsx("div",{className:"metric-label",children:"Last Revenue"}),S.jsx("div",{className:"metric-value",children:Fb(Ve.last_revenue)})]})]}),S.jsxs("section",{className:"vsplit-container",style:{height:"100%"},children:[S.jsx("div",{className:"vsplit-pane",style:{flexBasis:Z?"100%":`${Math.round($*100)}%`,flexGrow:1,minHeight:0,padding:y==="3d"?0:"1rem",display:"flex",flexDirection:"column"},children:y==="3d"?S.jsxs("div",{className:"viewer-panel",style:{minHeight:320,height:"100%",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",top:8,right:8,zIndex:20,display:"flex",gap:8,alignItems:"center",background:"rgba(15,23,42,0.65)",padding:"6px 8px",borderRadius:6,border:"1px solid rgba(148,163,184,0.2)"},children:S.jsx("button",{className:"button",onClick:()=>v("builder"),style:{fontSize:11,padding:"4px 8px"},children:"🏗️ Edit Digital Twin"})}),S.jsx(tg,{config:R,animate:!we}),!R&&S.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[S.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),S.jsx("div",{children:"No digital twin configured"}),S.jsx("button",{className:"button",onClick:()=>v("builder"),style:{marginTop:12},children:"Create Digital Twin"})]})]}):S.jsx("div",{className:"metrics-grid",style:{height:"100%",overflow:"auto"},children:S.jsx(Ox,{apiBase:t,runId:s})})}),!Z&&S.jsx("div",{className:"vsplit-divider",onMouseDown:()=>he(!0),onDoubleClick:()=>ne(.58)}),!Z&&S.jsxs("div",{className:"split-container",style:{flexBasis:`${Math.round((1-$)*100)}%`,minHeight:180},children:[S.jsxs("div",{className:"split-pane",style:{flexBasis:`${Math.round(K*100)}%`,padding:"1rem",minHeight:220,display:"flex",flexDirection:"column",overflow:"auto"},children:[S.jsx("div",{className:"metric-label",children:"Scenario"}),c?S.jsxs("div",{children:[S.jsx("h3",{style:{margin:"0.25rem 0 0.5rem 0"},children:c.name}),S.jsx("p",{style:{color:"#94a3b8"},children:(te=c.description)!=null?te:"—"}),S.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.95rem",whiteSpace:"pre-wrap"},children:c.details&&S.jsx("p",{style:{marginTop:0},children:c.details})}),S.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.9rem"},children:[S.jsx("div",{style:{color:"#94a3b8",marginBottom:4},children:"Overrides"}),S.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:Object.entries(c.config_overrides||{}).map(([E,_])=>S.jsxs("li",{children:[S.jsx("code",{children:E}),": ",S.jsx("span",{children:String(_)})]},E))})]})]}):S.jsx("div",{children:"—"})]}),S.jsx("div",{className:"split-divider",onMouseDown:()=>I(!0),onDoubleClick:()=>j(.5)}),S.jsx("div",{className:"split-pane",style:{flexBasis:`${Math.round((1-K)*100)}%`,padding:0,minHeight:220,display:"flex",flexDirection:"column"},children:S.jsx("div",{className:"log-panel",style:{height:"100%",maxHeight:"100%",flex:1},children:p.map((E,_)=>S.jsx("div",{children:E},_))})})]})]})]})]}):S.jsxs("main",{style:{gridColumn:"1 / -1",padding:"1.5rem"},children:[S.jsxs("div",{className:"header",style:{marginBottom:"1rem"},children:[S.jsx("h1",{children:"Scenarios"}),S.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:S.jsx("button",{className:"button",onClick:()=>v("runs"),children:"Back to Runs"})})]}),S.jsx(zx,{apiBase:t,onRun:E=>{v("runs"),o(E),ke()}})]}),u==="builder"&&S.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[S.jsxs("div",{className:"header",style:{flexShrink:0},children:[S.jsxs("div",{children:[S.jsx("h1",{children:"🏗️ Digital Twin Builder"}),S.jsx("p",{style:{color:"#64748b",margin:0},children:"Drag and drop components to design your PED system"})]}),S.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[S.jsx("button",{className:"button",onClick:()=>A("2d"),disabled:P==="2d",children:"2D Editor"}),S.jsx("button",{className:"button",onClick:()=>A("3d"),disabled:P==="3d",children:"3D Preview"}),S.jsx("button",{className:"button",onClick:()=>v("scenarios"),children:"Scenarios"}),S.jsx("button",{className:"button",onClick:()=>v("runs"),children:"Back to Runs"})]})]}),S.jsx("div",{style:{flex:1,minHeight:0,overflow:"hidden"},children:P==="2d"?S.jsx(Hx,{onConfigChange:C,initialConfig:R,apiBase:t,onRunSimulation:E=>{o(E),v("runs"),ke()}}):S.jsx(tg,{config:R,animate:!we})})]})]})}class kb extends mg.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){var n;return{hasError:!0,message:(n=e==null?void 0:e.message)!=null?n:String(e)}}componentDidCatch(e,n){console.error("[UI ErrorBoundary]",e,n)}render(){return this.state.hasError?S.jsxs("div",{style:{padding:"1rem",color:"#fca5a5"},children:[S.jsx("h2",{children:"Something went wrong rendering the UI."}),S.jsx("pre",{style:{whiteSpace:"pre-wrap"},children:this.state.message})]}):this.props.children}}function Cf(t,e){try{const n="__boot_error_overlay__";let i=document.getElementById(n);i||(i=document.createElement("div"),i.id=n,i.setAttribute("role","alert"),i.style.position="fixed",i.style.inset="0",i.style.zIndex="9999",i.style.background="rgba(15,23,42,0.96)",i.style.color="#fca5a5",i.style.fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial",i.style.padding="24px",document.body.appendChild(i));const r=typeof e=="string"?e:e instanceof Error?e.stack||e.message:JSON.stringify(e);i.innerHTML=`<h2 style="margin:0 0 8px 0; color:#fecaca">${t}</h2><pre style="white-space:pre-wrap; font-size:14px; color:#fca5a5">${r!=null?r:""}</pre>`}catch{}}window.addEventListener("error",t=>{Cf("Runtime error",(t==null?void 0:t.error)||(t==null?void 0:t.message))});window.addEventListener("unhandledrejection",t=>{Cf("Unhandled promise rejection",t==null?void 0:t.reason)});var ig,rg;try{let t=document.getElementById("root");t||(t=document.createElement("div"),t.id="root",document.body.appendChild(t)),console.log("[UI] Mounting app. API base =",(rg=(ig=import.meta)==null?void 0:ig.env)==null?void 0:rg.VITE_API_BASE),Uu.createRoot(t).render(S.jsx(mg.StrictMode,{children:S.jsx(kb,{children:S.jsx(Ob,{})})}))}catch(t){console.error("[UI] Failed to mount app",t),Cf("Failed to mount app",t)}
//# sourceMappingURL=index-DfXNkBKU.js.map
