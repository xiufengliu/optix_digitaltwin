(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sg={exports:{}},nc={},og={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),Nf=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=Nf&&t[Nf]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,cg={};function $s(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ug(){}ug.prototype=$s.prototype;function mh(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||ag}var gh=mh.prototype=new ug;gh.constructor=mh;lg(gh,$s.prototype);gh.isPureReactComponent=!0;var If=Array.isArray,dg=Object.prototype.hasOwnProperty,_h={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:_h.current}}function Sv(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uf=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mc(o,0):i,If(r)?(n="",t!=null&&(n=t.replace(Uf,"$&/")+"/"),ol(r,e,n,"",function(c){return c})):r!=null&&(vh(r)&&(r=Sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",If(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mc(s,a);o+=ol(s,e,n,l,r)}else if(l=xv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mc(s,a++),o+=ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},al={transition:null},wv={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:al,ReactCurrentOwner:_h};function pg(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=$s;qe.Fragment=dv;qe.Profiler=fv;qe.PureComponent=mh;qe.StrictMode=hv;qe.Suspense=_v;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;qe.act=pg;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dg.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};qe.createElement=fg;qe.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:gv,render:t}};qe.isValidElement=vh;qe.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Ev}};qe.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};qe.unstable_act=pg;qe.useCallback=function(t,e){return nn.current.useCallback(t,e)};qe.useContext=function(t){return nn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return nn.current.useEffect(t,e)};qe.useId=function(){return nn.current.useId()};qe.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return nn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};qe.useRef=function(t){return nn.current.useRef(t)};qe.useState=function(t){return nn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return nn.current.useTransition()};qe.version="18.3.1";og.exports=qe;var ue=og.exports;const mg=cv(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=ue,Av=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:Rv.current}}nc.Fragment=bv;nc.jsx=gg;nc.jsxs=gg;sg.exports=nc;var E=sg.exports,Pu={},_g={exports:{}},xn={},vg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var I=D.length;D.push($);e:for(;0<I;){var Q=I-1>>>1,ce=D[Q];if(0<r(ce,$))D[Q]=$,D[I]=ce,I=Q;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],I=D.pop();if(I!==$){D[0]=I;e:for(var Q=0,ce=D.length,be=ce>>>1;Q<be;){var W=2*(Q+1)-1,ne=D[W],me=W+1,he=D[me];if(0>r(ne,I))me<ce&&0>r(he,ne)?(D[Q]=he,D[me]=I,Q=me):(D[Q]=ne,D[W]=I,Q=W);else if(me<ce&&0>r(he,I))D[Q]=he,D[me]=I,Q=me;else break e}}return $}function r(D,$){var I=D.sortIndex-$.sortIndex;return I!==0?I:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=D)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function y(D){if(x=!1,v(D),!g)if(n(l)!==null)g=!0,G(P);else{var $=n(c);$!==null&&J(y,$.startTime-D)}}function P(D,$){g=!1,x&&(x=!1,u(R),R=-1),p=!0;var I=h;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||D&&!L());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var ce=Q(f.expirationTime<=$);$=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&i(l),v($)}else i(l);f=n(l)}if(f!==null)var be=!0;else{var W=n(c);W!==null&&J(y,W.startTime-$),be=!1}return be}finally{f=null,h=I,p=!1}}var C=!1,b=null,R=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function k(){if(b!==null){var D=t.unstable_now();S=D;var $=!0;try{$=b(!0,D)}finally{$?U():(C=!1,b=null)}}else C=!1}var U;if(typeof _=="function")U=function(){_(k)};else if(typeof MessageChannel!="undefined"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=k,U=function(){K.postMessage(null)}}else U=function(){m(k,0)};function G(D){b=D,C||(C=!0,U())}function J(D,$){R=m(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,G(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var I=h;h=$;try{return D()}finally{h=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=h;h=D;try{return $()}finally{h=I}},t.unstable_scheduleCallback=function(D,$,I){var Q=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=I+ce,D={id:d++,callback:$,priorityLevel:D,startTime:I,expirationTime:ce,sortIndex:-1},I>Q?(D.sortIndex=I,e(c,D),n(l)===null&&D===n(c)&&(x?(u(R),R=-1):x=!0,J(y,I-Q))):(D.sortIndex=ce,e(l,D),g||p||(g=!0,G(P))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var $=h;return function(){var I=h;h=$;try{return D.apply(this,arguments)}finally{h=I}}}})(yg);vg.exports=yg;var Lv=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=ue,yn=Lv;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,Oo={};function Br(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Oo[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var wi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Lu=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Of={};function Iv(t){return Lu.call(Of,t)?!0:Lu.call(Ff,t)?!1:Nv.test(t)?Of[t]=!0:(Ff[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e=="undefined"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yh=/[\-:]([a-z])/g;function xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yh,xh);Ht[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yh,xh);Ht[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yh,xh);Ht[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ds=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),kf=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Ec;function yo(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Ov(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case ds:return"Portal";case Du:return"Profiler";case Mh:return"StrictMode";case Nu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Sg:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=zv(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function Ou(t,e){Ag(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(xo(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function bg(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,Rg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,As=null,bs=null;function Gf(t){if(t=ra(t)){if(typeof Wu!="function")throw Error(de(280));var e=t.stateNode;e&&(e=ac(e),Wu(t.stateNode,t.type,e))}}function Dg(t){As?bs?bs.push(t):bs=[t]:As=t}function Ng(){if(As){var t=As,e=bs;if(bs=As=null,Gf(t),e)for(t=0;t<e.length;t++)Gf(e[t])}}function Ig(t,e){return t(e)}function Ug(){}var Ac=!1;function Fg(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return Ig(t,e,n)}finally{Ac=!1,(As!==null||bs!==null)&&(Ug(),Ng())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var ju=!1;if(wi)try{var no={};Object.defineProperty(no,"passive",{get:function(){ju=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{ju=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ao=!1,Al=null,bl=!1,Xu=null,Gv={onError:function(t){Ao=!0,Al=t}};function Wv(t,e,n,i,r,s,o,a,l){Ao=!1,Al=null,Vv.apply(Gv,arguments)}function jv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),Ao){if(Ao){var c=Al;Ao=!1,Al=null}else throw Error(de(198));bl||(bl=!0,Xu=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(Hr(t)!==t)throw Error(de(188))}function Xv(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wf(r),t;if(s===i)return Wf(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function kg(t){return t=Xv(t),t!==null?zg(t):null}function zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=yn.unstable_scheduleCallback,jf=yn.unstable_cancelCallback,Yv=yn.unstable_shouldYield,$v=yn.unstable_requestPaint,At=yn.unstable_now,qv=yn.unstable_getCurrentPriorityLevel,Ah=yn.unstable_ImmediatePriority,Hg=yn.unstable_UserBlockingPriority,Cl=yn.unstable_NormalPriority,Kv=yn.unstable_LowPriority,Vg=yn.unstable_IdlePriority,ic=null,ni=null;function Zv(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:ey,Jv=Math.log,Qv=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(Jv(t)/Qv|0)|0}var ga=64,_a=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=So(a):(s&=o,s!==0&&(i=So(s)))}else o=n&~r,o!==0?i=So(o):s!==0&&(i=So(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ty(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,Ch,Xg,Yg,$g,$u=!1,va=[],Yi=null,$i=null,qi=null,Bo=new Map,Ho=new Map,Vi=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return Yi=io(Yi,t,e,n,i,r),!0;case"dragenter":return $i=io($i,t,e,n,i,r),!0;case"mouseover":return qi=io(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Bo.set(s,io(Bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ho.set(s,io(Ho.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=wr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,$g(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=ra(n),e!==null&&Ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){ll(t)&&n.delete(e)}function oy(){$u=!1,Yi!==null&&ll(Yi)&&(Yi=null),$i!==null&&ll($i)&&($i=null),qi!==null&&ll(qi)&&(qi=null),Bo.forEach(Yf),Ho.forEach(Yf)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,oy)))}function Vo(t){function e(r){return ro(r,t)}if(0<va.length){ro(va[0],t);for(var n=1;n<va.length;n++){var i=va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&ro(Yi,t),$i!==null&&ro($i,t),qi!==null&&ro(qi,t),Bo.forEach(e),Ho.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&Vi.shift()}var Cs=Ri.ReactCurrentBatchConfig,Pl=!0;function ay(t,e,n,i){var r=st,s=Cs.transition;Cs.transition=null;try{st=1,Rh(t,e,n,i)}finally{st=r,Cs.transition=s}}function ly(t,e,n,i){var r=st,s=Cs.transition;Cs.transition=null;try{st=4,Rh(t,e,n,i)}finally{st=r,Cs.transition=s}}function Rh(t,e,n,i){if(Pl){var r=qu(t,e,n,i);if(r===null)Oc(t,e,i,Ll,n),Xf(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Xf(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&jg(s),s=qu(t,e,n,i),s===null&&Oc(t,e,i,Ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var Ll=null;function qu(t,e,n,i){if(Ll=null,t=Th(i),t=wr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function Kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Ah:return 1;case Hg:return 4;case Cl:case Kv:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var ji=null,Ph=null,cl=null;function Zg(){if(cl)return cl;var t,e=Ph,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function $f(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:$f,this.isPropagationStopped=$f,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=Sn(qs),ia=Mt({},qs,{view:0,detail:0}),cy=Sn(ia),Cc,Rc,so,rc=Mt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Cc=t.screenX-so.screenX,Rc=t.screenY-so.screenY):Rc=Cc=0,so=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),qf=Sn(rc),uy=Mt({},rc,{dataTransfer:0}),dy=Sn(uy),hy=Mt({},ia,{relatedTarget:0}),Pc=Sn(hy),fy=Mt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Sn(fy),my=Mt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=Sn(my),_y=Mt({},qs,{data:0}),Kf=Sn(_y),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xy[t])?!!e[t]:!1}function Dh(){return Sy}var My=Mt({},ia,{key:function(t){if(t.key){var e=vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ey=Sn(My),wy=Mt({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Sn(wy),Ty=Mt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),Ay=Sn(Ty),by=Mt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Sn(by),Ry=Mt({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Sn(Ry),Ly=[9,13,27,32],Nh=wi&&"CompositionEvent"in window,bo=null;wi&&"documentMode"in document&&(bo=document.documentMode);var Dy=wi&&"TextEvent"in window&&!bo,Jg=wi&&(!Nh||bo&&8<bo&&11>=bo),Jf=" ",Qf=!1;function Qg(t,e){switch(t){case"keyup":return Ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Ny(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(Qf=!0,Jf);case"textInput":return t=e.data,t===Jf&&Qf?null:t;default:return null}}function Iy(t,e){if(fs)return t==="compositionend"||!Nh&&Qg(t,e)?(t=Zg(),cl=Ph=ji=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uy[t.type]:e==="textarea"}function t_(t,e,n,i){Dg(i),e=Dl(e,"onChange"),0<e.length&&(n=new Lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Co=null,Go=null;function Fy(t){h_(t,0)}function sc(t){var e=gs(t);if(Tg(e))return t}function Oy(t,e){if(t==="change")return e}var n_=!1;if(wi){var Lc;if(wi){var Dc="oninput"in document;if(!Dc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Dc=typeof tp.oninput=="function"}Lc=Dc}else Lc=!1;n_=Lc&&(!document.documentMode||9<document.documentMode)}function np(){Co&&(Co.detachEvent("onpropertychange",i_),Go=Co=null)}function i_(t){if(t.propertyName==="value"&&sc(Go)){var e=[];t_(e,Go,t,Th(t)),Fg(Fy,e)}}function ky(t,e,n){t==="focusin"?(np(),Co=e,Go=n,Co.attachEvent("onpropertychange",i_)):t==="focusout"&&np()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Go)}function By(t,e){if(t==="click")return sc(e)}function Hy(t,e){if(t==="input"||t==="change")return sc(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Vy;function Wo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=s_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(i!==null&&Ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wy=wi&&"documentMode"in document&&11>=document.documentMode,ps=null,Ku=null,Ro=null,Zu=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||ps==null||ps!==Tl(i)||(i=ps,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ro&&Wo(Ro,i)||(Ro=i,i=Dl(Ku,"onSelect"),0<i.length&&(e=new Lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Nc={},o_={};wi&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function oc(t){if(Nc[t])return Nc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return Nc[t]=e[n];return t}var a_=oc("animationend"),l_=oc("animationiteration"),c_=oc("animationstart"),u_=oc("transitionend"),d_=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){d_.set(t,e),Br(e,[t])}for(var Ic=0;Ic<op.length;Ic++){var Uc=op[Ic],jy=Uc.toLowerCase(),Xy=Uc[0].toUpperCase()+Uc.slice(1);lr(jy,"on"+Xy)}lr(a_,"onAnimationEnd");lr(l_,"onAnimationIteration");lr(c_,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(u_,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}}}if(bl)throw t=Xu,bl=!1,Xu=null,t}function _t(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Sa]){t[Sa]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,Fc("selectionchange",!1,e))}}function f_(t,e,n,i){switch(Kg(e)){case 1:var r=ay;break;case 4:r=ly;break;default:r=Rh}n=r.bind(null,e,n,t),r=void 0,!ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fg(function(){var c=s,d=Th(n),f=[];e:{var h=d_.get(t);if(h!==void 0){var p=Lh,g=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":p=Ey;break;case"focusin":g="focus",p=Pc;break;case"focusout":g="blur",p=Pc;break;case"beforeblur":case"afterblur":p=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ay;break;case a_:case l_:case c_:p=py;break;case u_:p=Cy;break;case"scroll":p=cy;break;case"wheel":p=Py;break;case"copy":case"cut":case"paste":p=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zf}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=zo(_,u),y!=null&&x.push(Xo(_,y,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Gu&&(g=n.relatedTarget||n.fromElement)&&(wr(g)||g[Ti]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?wr(g):null,g!==null&&(m=Hr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=qf,y="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Zf,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?h:gs(p),v=g==null?h:gs(g),h=new x(y,_+"leave",p,n,d),h.target=m,h.relatedTarget=v,y=null,wr(d)===c&&(x=new x(u,_+"enter",g,n,d),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,u=g,_=0,v=x;v;v=Wr(v))_++;for(v=0,y=u;y;y=Wr(y))v++;for(;0<_-v;)x=Wr(x),_--;for(;0<v-_;)u=Wr(u),v--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Wr(x),u=Wr(u)}x=null}else x=null;p!==null&&lp(f,h,p,x,!1),g!==null&&m!==null&&lp(f,m,g,x,!0)}}e:{if(h=c?gs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=Oy;else if(ep(h))if(n_)P=Hy;else{P=zy;var C=ky}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=By);if(P&&(P=P(t,c))){t_(f,P,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ku(h,"number",h.value)}switch(C=c?gs(c):window,t){case"focusin":(ep(C)||C.contentEditable==="true")&&(ps=C,Ku=c,Ro=null);break;case"focusout":Ro=Ku=ps=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,sp(f,n,d);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":sp(f,n,d)}var b;if(Nh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fs?Qg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Jg&&n.locale!=="ko"&&(fs||R!=="onCompositionStart"?R==="onCompositionEnd"&&fs&&(b=Zg()):(ji=d,Ph="value"in ji?ji.value:ji.textContent,fs=!0)),C=Dl(c,R),0<C.length&&(R=new Kf(R,t,null,n,d),f.push({event:R,listeners:C}),b?R.data=b:(b=e_(n),b!==null&&(R.data=b)))),(b=Dy?Ny(t,n):Iy(t,n))&&(c=Dl(c,"onBeforeInput"),0<c.length&&(d=new Kf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}h_(f,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zo(t,n),s!=null&&i.unshift(Xo(t,s,r)),s=zo(t,e),s!=null&&i.push(Xo(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=zo(n,s),l!=null&&o.unshift(Xo(n,l,a))):r||(l=zo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $y=/\r\n?/g,qy=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace($y,`
`).replace(qy,"")}function Ma(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(de(425))}function Nl(){}var Ju=null,Qu=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof up!="undefined"?function(t){return up.resolve(null).then(t).catch(Jy)}:td;function Jy(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ks,Yo="__reactProps$"+Ks,Ti="__reactContainer$"+Ks,nd="__reactEvents$"+Ks,Qy="__reactListeners$"+Ks,ex="__reactHandles$"+Ks;function wr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[Qn])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[Qn]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function ac(t){return t[Yo]||null}var id=[],_s=-1;function cr(t){return{current:t}}function vt(t){0>_s||(t.current=id[_s],id[_s]=null,_s--)}function ft(t,e){_s++,id[_s]=t.current,t.current=e}var sr={},qt=cr(sr),cn=cr(!1),Lr=sr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Il(){vt(cn),vt(qt)}function hp(t,e,n){if(qt.current!==sr)throw Error(de(168));ft(qt,e),ft(cn,n)}function p_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,kv(t)||"Unknown",r));return Mt({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Lr=qt.current,ft(qt,t),ft(cn,cn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=p_(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,vt(cn),vt(qt),ft(qt,t)):vt(cn),ft(cn,n)}var pi=null,lc=!1,zc=!1;function m_(t){pi===null?pi=[t]:pi.push(t)}function tx(t){lc=!0,m_(t)}function ur(){if(!zc&&pi!==null){zc=!0;var t=0,e=st;try{var n=pi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,lc=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Bg(Ah,ur),r}finally{st=e,zc=!1}}return null}var vs=[],ys=0,Fl=null,Ol=0,An=[],bn=0,Dr=null,_i=1,vi="";function yr(t,e){vs[ys++]=Ol,vs[ys++]=Fl,Fl=t,Ol=e}function g_(t,e,n){An[bn++]=_i,An[bn++]=vi,An[bn++]=Dr,Dr=t;var i=_i;t=vi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-jn(e)+r|n<<r|i,vi=s+t}else _i=1<<s|n<<r|i,vi=t}function Uh(t){t.return!==null&&(yr(t,1),g_(t,1,0))}function Fh(t){for(;t===Fl;)Fl=vs[--ys],vs[ys]=null,Ol=vs[--ys],vs[ys]=null;for(;t===Dr;)Dr=An[--bn],An[bn]=null,vi=An[--bn],An[bn]=null,_i=An[--bn],An[bn]=null}var vn=null,_n=null,yt=!1,Gn=null;function __(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,_n=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,_n=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(yt){var e=_n;if(e){var n=e;if(!pp(t,e)){if(rd(t))throw Error(de(418));e=Ki(n.nextSibling);var i=vn;e&&pp(t,e)?__(i,n):(t.flags=t.flags&-4097|2,yt=!1,vn=t)}}else{if(rd(t))throw Error(de(418));t.flags=t.flags&-4097|2,yt=!1,vn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ea(t){if(t!==vn)return!1;if(!yt)return mp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=_n)){if(rd(t))throw v_(),Error(de(418));for(;e;)__(t,e),e=Ki(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=vn?Ki(t.stateNode.nextSibling):null;return!0}function v_(){for(var t=_n;t;)t=Ki(t.nextSibling)}function Os(){_n=vn=null,yt=!1}function Oh(t){Gn===null?Gn=[t]:Gn.push(t)}var nx=Ri.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function wa(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function y_(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=er(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,y){return _===null||_.tag!==6?(_=Xc(v,u.mode,y),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,y){var P=v.type;return P===hs?d(u,_,v.props.children,y,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&gp(P)===_.type)?(y=r(_,v.props),y.ref=oo(u,_,v),y.return=u,y):(y=_l(v.type,v.key,v.props,null,u.mode,y),y.ref=oo(u,_,v),y.return=u,y)}function c(u,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Yc(v,u.mode,y),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function d(u,_,v,y,P){return _===null||_.tag!==7?(_=Pr(v,u.mode,y,P),_.return=u,_):(_=r(_,v),_.return=u,_)}function f(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xc(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fa:return v=_l(_.type,_.key,_.props,null,u.mode,v),v.ref=oo(u,null,_),v.return=u,v;case ds:return _=Yc(_,u.mode,v),_.return=u,_;case Bi:var y=_._init;return f(u,y(_._payload),v)}if(xo(_)||to(_))return _=Pr(_,u.mode,v,null),_.return=u,_;wa(u,_)}return null}function h(u,_,v,y){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return v.key===P?l(u,_,v,y):null;case ds:return v.key===P?c(u,_,v,y):null;case Bi:return P=v._init,h(u,_,P(v._payload),y)}if(xo(v)||to(v))return P!==null?null:d(u,_,v,y,null);wa(u,v)}return null}function p(u,_,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(_,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fa:return u=u.get(y.key===null?v:y.key)||null,l(_,u,y,P);case ds:return u=u.get(y.key===null?v:y.key)||null,c(_,u,y,P);case Bi:var C=y._init;return p(u,_,v,C(y._payload),P)}if(xo(y)||to(y))return u=u.get(v)||null,d(_,u,y,P,null);wa(_,y)}return null}function g(u,_,v,y){for(var P=null,C=null,b=_,R=_=0,w=null;b!==null&&R<v.length;R++){b.index>R?(w=b,b=null):w=b.sibling;var S=h(u,b,v[R],y);if(S===null){b===null&&(b=w);break}t&&b&&S.alternate===null&&e(u,b),_=s(S,_,R),C===null?P=S:C.sibling=S,C=S,b=w}if(R===v.length)return n(u,b),yt&&yr(u,R),P;if(b===null){for(;R<v.length;R++)b=f(u,v[R],y),b!==null&&(_=s(b,_,R),C===null?P=b:C.sibling=b,C=b);return yt&&yr(u,R),P}for(b=i(u,b);R<v.length;R++)w=p(b,u,R,v[R],y),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?R:w.key),_=s(w,_,R),C===null?P=w:C.sibling=w,C=w);return t&&b.forEach(function(L){return e(u,L)}),yt&&yr(u,R),P}function x(u,_,v,y){var P=to(v);if(typeof P!="function")throw Error(de(150));if(v=P.call(v),v==null)throw Error(de(151));for(var C=P=null,b=_,R=_=0,w=null,S=v.next();b!==null&&!S.done;R++,S=v.next()){b.index>R?(w=b,b=null):w=b.sibling;var L=h(u,b,S.value,y);if(L===null){b===null&&(b=w);break}t&&b&&L.alternate===null&&e(u,b),_=s(L,_,R),C===null?P=L:C.sibling=L,C=L,b=w}if(S.done)return n(u,b),yt&&yr(u,R),P;if(b===null){for(;!S.done;R++,S=v.next())S=f(u,S.value,y),S!==null&&(_=s(S,_,R),C===null?P=S:C.sibling=S,C=S);return yt&&yr(u,R),P}for(b=i(u,b);!S.done;R++,S=v.next())S=p(b,u,R,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?R:S.key),_=s(S,_,R),C===null?P=S:C.sibling=S,C=S);return t&&b.forEach(function(k){return e(u,k)}),yt&&yr(u,R),P}function m(u,_,v,y){if(typeof v=="object"&&v!==null&&v.type===hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:e:{for(var P=v.key,C=_;C!==null;){if(C.key===P){if(P=v.type,P===hs){if(C.tag===7){n(u,C.sibling),_=r(C,v.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&gp(P)===C.type){n(u,C.sibling),_=r(C,v.props),_.ref=oo(u,C,v),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===hs?(_=Pr(v.props.children,u.mode,y,v.key),_.return=u,u=_):(y=_l(v.type,v.key,v.props,null,u.mode,y),y.ref=oo(u,_,v),y.return=u,u=y)}return o(u);case ds:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Yc(v,u.mode,y),_.return=u,u=_}return o(u);case Bi:return C=v._init,m(u,_,C(v._payload),y)}if(xo(v))return g(u,_,v,y);if(to(v))return x(u,_,v,y);wa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=Xc(v,u.mode,y),_.return=u,u=_),o(u)):n(u,_)}return m}var ks=y_(!0),x_=y_(!1),kl=cr(null),zl=null,xs=null,kh=null;function zh(){kh=xs=zl=null}function Bh(t){var e=kl.current;vt(kl),t._currentValue=e}function od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){zl=t,kh=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(kh!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(zl===null)throw Error(de(308));xs=t,zl.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Tr=null;function Hh(t){Tr===null?Tr=[t]:Tr.push(t)}function S_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Mt({},f,h);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=f}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var sa={},ii=cr(sa),$o=cr(sa),qo=cr(sa);function Ar(t){if(t===sa)throw Error(de(174));return t}function Gh(t,e){switch(ft(qo,e),ft($o,t),ft(ii,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}vt(ii),ft(ii,e)}function zs(){vt(ii),vt($o),vt(qo)}function E_(t){Ar(qo.current);var e=Ar(ii.current),n=Bu(e,t.type);e!==n&&(ft($o,t),ft(ii,n))}function Wh(t){$o.current===t&&(vt(ii),vt($o))}var xt=cr(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function jh(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var hl=Ri.ReactCurrentDispatcher,Hc=Ri.ReactCurrentBatchConfig,Nr=0,St=null,Pt=null,Ft=null,Vl=!1,Po=!1,Ko=0,ix=0;function Wt(){throw Error(de(321))}function Xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Yh(t,e,n,i,r,s){if(Nr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?ax:lx,t=n(i,r),Po){s=0;do{if(Po=!1,Ko=0,25<=s)throw Error(de(301));s+=1,Ft=Pt=null,e.updateQueue=null,hl.current=cx,t=n(i,r)}while(Po)}if(hl.current=Gl,e=Pt!==null&&Pt.next!==null,Nr=0,Ft=Pt=St=null,Vl=!1,e)throw Error(de(300));return t}function $h(){var t=Ko!==0;return Ko=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function In(){if(Pt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(de(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Zo(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=In(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=In(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w_(){}function T_(t,e){var n=St,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,qh(C_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Jo(9,b_.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(de(349));Nr&30||A_(n,e,r)}return r}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&P_(t)}function C_(t,e,n){return n(function(){R_(e)&&P_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function P_(t){var e=Ai(t,1);e!==null&&Xn(e,t,1,-1)}function yp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,St,t),[e.memoizedState,t]}function Jo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function L_(){return In().memoizedState}function fl(t,e,n,i){var r=Zn();St.flags|=t,r.memoizedState=Jo(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Xh(i,o.deps)){r.memoizedState=Jo(e,n,s,i);return}}St.flags|=t,r.memoizedState=Jo(1|e,n,s,i)}function xp(t,e){return fl(8390656,8,t,e)}function qh(t,e){return cc(2048,8,t,e)}function D_(t,e){return cc(4,2,t,e)}function N_(t,e){return cc(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,I_.bind(null,e,t),n)}function Kh(){}function F_(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return Nr&21?($n(n,e)||(n=Gg(),St.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function rx(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{st=n,Hc.transition=i}}function z_(){return In().memoizedState}function sx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))H_(e,n);else if(n=S_(t,e,n,i),n!==null){var r=en();Xn(n,t,i,r),V_(n,e,i)}}function ox(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))H_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Hh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S_(t,e,r,i),n!==null&&(r=en(),Xn(n,t,i,r),V_(n,e,i))}}function B_(t){var e=t.alternate;return t===St||e!==null&&e===St}function H_(t,e){Po=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var Gl={readContext:Nn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},ax={readContext:Nn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sx.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:Kh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=rx.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=Zn();if(yt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Ot===null)throw Error(de(349));Nr&30||A_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xp(C_.bind(null,i,s,t),[t]),i.flags|=2048,Jo(9,b_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ot.identifierPrefix;if(yt){var n=vi,i=_i;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Nn,useCallback:F_,useContext:Nn,useEffect:qh,useImperativeHandle:U_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:Vc,useRef:L_,useState:function(){return Vc(Zo)},useDebugValue:Kh,useDeferredValue:function(t){var e=In();return k_(e,Pt.memoizedState,t)},useTransition:function(){var t=Vc(Zo)[0],e=In().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1},cx={readContext:Nn,useCallback:F_,useContext:Nn,useEffect:qh,useImperativeHandle:U_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:O_,useReducer:Gc,useRef:L_,useState:function(){return Gc(Zo)},useDebugValue:Kh,useDeferredValue:function(t){var e=In();return Pt===null?e.memoizedState=t:k_(e,Pt.memoizedState,t)},useTransition:function(){var t=Gc(Zo)[0],e=In().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:T_,useId:z_,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Qi(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Xn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Qi(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Xn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Qi(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Xn(e,t,i,n),dl(e,t,i))}};function Sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,i)||!Wo(r,s):!0}function G_(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=un(e)?Lr:qt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=un(e)?Lr:qt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,yd=i),cd(t,e)},n}function j_(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var dx=Ri.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?x_(e,null,n,i):ks(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=Yh(t,e,n,i,s,r),n=$h(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(yt&&n&&Uh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X_(t,e,s,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function X_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,bi(t,e,r)}return ud(t,e,n,i,r)}function Y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ms,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ms,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ms,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ms,gn),gn|=i;return Qt(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var s=un(n)?Lr:qt.current;return s=Fs(e,s),Rs(e,r),n=Yh(t,e,n,i,s,r),i=$h(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(yt&&i&&Uh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(un(n)){var s=!0;Ul(e)}else s=!1;if(Rs(e,r),e.stateNode===null)pl(t,e),G_(e,n,i),ld(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=un(n)?Lr:qt.current,c=Fs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),Hi=!1;var h=e.memoizedState;o.state=h,Bl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||Hi?(typeof d=="function"&&(ad(e,n,d,i),l=e.memoizedState),(a=Hi||Sp(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,M_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(n)?Lr:qt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mp(e,o,i,l),Hi=!1,h=e.memoizedState,o.state=h,Bl(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||cn.current||Hi?(typeof p=="function"&&(ad(e,n,p,i),g=e.memoizedState),(c=Hi||Sp(e,n,c,i,h,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return dd(t,e,n,i,s,r)}function dd(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fp(e,n,!1),bi(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Gh(t,e.containerInfo)}function Rp(t,e,n,i,r){return Os(),Oh(r),e.flags|=256,Qt(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(xt,r&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fc(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=hd,t):Zh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zh(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,i){return i!==null&&Oh(i),ks(e,t.child,null,n),t=Zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(de(422))),Ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=fd(o),e.memoizedState=hd,s);if(!(e.mode&1))return Ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Wc(s,i,void 0),Ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Xn(i,t,r,-1))}return rf(),i=Wc(Error(de(421))),Ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Ki(r.nextSibling),vn=e,yt=!0,Gn=null,t!==null&&(An[bn++]=_i,An[bn++]=vi,An[bn++]=Dr,_i=t.id,vi=t.overflow,Dr=e),e=Zh(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),od(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:q_(e),Os();break;case 5:E_(e);break;case 1:un(e.type)&&Ul(e);break;case 4:Gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(ft(xt,xt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);ft(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return bi(t,e,n)}var J_,pd,Q_,e0;J_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};Q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ii.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=zu(t,r),i=zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}Hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};e0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ao(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function px(t,e,n){var i=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return un(e.type)&&Il(),jt(e),null;case 3:return i=e.stateNode,zs(),vt(cn),vt(qt),jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Md(Gn),Gn=null))),pd(t,e),jt(e),null;case 5:Wh(e);var r=Ar(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return jt(e),null}if(t=Ar(ii.current),Ea(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)_t(Mo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":zf(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Hf(i,s),_t("invalid",i)}Hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":pa(i),Bf(i,s,!0);break;case"textarea":pa(i),Vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Yo]=i,J_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)_t(Mo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":zf(t,i),r=Fu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Hf(t,i),r=zu(t,i),_t("invalid",t);break;default:r=i}Hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(t,l):typeof l=="number"&&ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Sh(t,s,l,o))}switch(n){case"input":pa(t),Bf(t,i,!1);break;case"textarea":pa(t),Vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Ar(qo.current),Ar(ii.current),Ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return jt(e),null;case 13:if(vt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&_n!==null&&e.mode&1&&!(e.flags&128))v_(),Os(),e.flags|=98560,s=!1;else if(s=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Qn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Gn!==null&&(Md(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):rf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return zs(),pd(t,e),t===null&&jo(e.stateNode.containerInfo),jt(e),null;case 10:return Bh(e.type._context),jt(e),null;case 17:return un(e.type)&&Il(),jt(e),null;case 19:if(vt(xt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ao(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Hs&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return jt(e),null}else 2*At()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,ft(xt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function mx(t,e){switch(Fh(e),e.tag){case 1:return un(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),vt(cn),vt(qt),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wh(e),null;case 13:if(vt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(xt),null;case 4:return zs(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Aa=!1,$t=!1,gx=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function md(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Lp=!1;function _x(t,e){if(Ju=Pl,t=s_(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},Pl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Lp,Lp=!1,g}function Lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&md(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Yo],delete e[nd],delete e[Qy],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:$t||Ss(n,e);case 6:var i=kt,r=Vn;kt=null,Ni(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),Vo(t)):kc(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Ni(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!$t&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ni(t,e,n),$t=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(i){var r=Ax.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(de(160));i0(s,o,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Kn(t),i&4){try{Lo(3,t,t.return),dc(3,t)}catch(x){wt(t,t.return,x)}try{Lo(5,t,t.return)}catch(x){wt(t,t.return,x)}}break;case 1:On(e,t),Kn(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(On(e,t),Kn(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{ko(r,"")}catch(x){wt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ag(r,s),Vu(a,o);var c=Vu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Lg(r,f):d==="dangerouslySetInnerHTML"?Rg(r,f):d==="children"?ko(r,f):Sh(r,d,f,c)}switch(a){case"input":Ou(r,s);break;case"textarea":bg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Yo]=s}catch(x){wt(t,t.return,x)}}break;case 6:if(On(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){wt(t,t.return,x)}}break;case 3:if(On(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(x){wt(t,t.return,x)}break;case 4:On(e,t),Kn(t);break;case 13:On(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ef=At())),i&4&&Np(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,On(e,t),$t=c):On(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ee=t,d=t.child;d!==null;){for(f=Ee=d;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Lo(4,h,h.return);break;case 1:Ss(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){wt(i,n,x)}}break;case 5:Ss(h,h.return);break;case 22:if(h.memoizedState!==null){Up(f);continue}}p!==null?(p.return=h,Ee=p):Up(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(x){wt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){wt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Kn(t),i&4&&Np(t);break;case 21:break;default:On(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ko(r,""),i.flags&=-33);var s=Dp(t);vd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);_d(t,a,o);break;default:throw Error(de(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){Ee=t,s0(t)}function s0(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Aa;var c=$t;if(Aa=o,($t=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,Ee=l):Fp(r);for(;s!==null;)Ee=s,s0(s),s=s.sibling;Ee=r,Aa=a,$t=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Ip(t)}}function Ip(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}$t||e.flags&512&&gd(e)}catch(h){wt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Up(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Fp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{gd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{gd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var yx=Math.ceil,Wl=Ri.ReactCurrentDispatcher,Jh=Ri.ReactCurrentOwner,Ln=Ri.ReactCurrentBatchConfig,Qe=0,Ot=null,Ct=null,Bt=0,gn=0,Ms=cr(0),Lt=0,Qo=null,Ir=0,hc=0,Qh=0,Do=null,an=null,ef=0,Hs=1/0,fi=null,jl=!1,yd=null,Ji=null,ba=!1,Xi=null,Xl=0,No=0,xd=null,ml=-1,gl=0;function en(){return Qe&6?At():ml!==-1?ml:ml=At()}function Qi(t){return t.mode&1?Qe&2&&Bt!==0?Bt&-Bt:nx.transition!==null?(gl===0&&(gl=Gg()),gl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Kg(t.type)),t):1}function Xn(t,e,n,i){if(50<No)throw No=0,xd=null,Error(de(185));na(t,n,i),(!(Qe&2)||t!==Ot)&&(t===Ot&&(!(Qe&2)&&(hc|=n),Lt===4&&Gi(t,Bt)),dn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Hs=At()+500,lc&&ur()))}function dn(t,e){var n=t.callbackNode;ny(t,e);var i=Rl(t,t===Ot?Bt:0);if(i===0)n!==null&&jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jf(n),e===1)t.tag===0?tx(Op.bind(null,t)):m_(Op.bind(null,t)),Zy(function(){!(Qe&6)&&ur()}),n=null;else{switch(Wg(i)){case 1:n=Ah;break;case 4:n=Hg;break;case 16:n=Cl;break;case 536870912:n=Vg;break;default:n=Cl}n=f0(n,o0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o0(t,e){if(ml=-1,gl=0,Qe&6)throw Error(de(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Rl(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=Qe;Qe|=2;var s=l0();(Ot!==t||Bt!==e)&&(fi=null,Hs=At()+500,Rr(t,e));do try{Mx();break}catch(a){a0(t,a)}while(!0);zh(),Wl.current=s,Qe=r,Ct!==null?e=0:(Ot=null,Bt=0,e=Lt)}if(e!==0){if(e===2&&(r=Yu(t),r!==0&&(i=r,e=Sd(t,r))),e===1)throw n=Qo,Rr(t,0),Gi(t,i),dn(t,At()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!xx(r)&&(e=Yl(t,i),e===2&&(s=Yu(t),s!==0&&(i=s,e=Sd(t,s))),e===1))throw n=Qo,Rr(t,0),Gi(t,i),dn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:xr(t,an,fi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=ef+500-At(),10<e)){if(Rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=td(xr.bind(null,t,an,fi),e);break}xr(t,an,fi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=td(xr.bind(null,t,an,fi),i);break}xr(t,an,fi);break;case 5:xr(t,an,fi);break;default:throw Error(de(329))}}}return dn(t,At()),t.callbackNode===n?o0.bind(null,t):null}function Sd(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=an,an=n,e!==null&&Md(e)),t}function Md(t){an===null?an=t:an.push.apply(an,t)}function xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~Qh,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(Qe&6)throw Error(de(327));Ps();var e=Rl(t,0);if(!(e&1))return dn(t,At()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=Yu(t);i!==0&&(e=i,n=Sd(t,i))}if(n===1)throw n=Qo,Rr(t,0),Gi(t,e),dn(t,At()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,an,fi),dn(t,At()),null}function tf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Hs=At()+500,lc&&ur())}}function Ur(t){Xi!==null&&Xi.tag===0&&!(Qe&6)&&Ps();var e=Qe;Qe|=1;var n=Ln.transition,i=st;try{if(Ln.transition=null,st=1,t)return t()}finally{st=i,Ln.transition=n,Qe=e,!(Qe&6)&&ur()}}function nf(){gn=Ms.current,vt(Ms)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Fh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Il();break;case 3:zs(),vt(cn),vt(qt),jh();break;case 5:Wh(i);break;case 4:zs();break;case 13:vt(xt);break;case 19:vt(xt);break;case 10:Bh(i.type._context);break;case 22:case 23:nf()}n=n.return}if(Ot=t,Ct=t=er(t.current,null),Bt=gn=e,Lt=0,Qo=null,Qh=hc=Ir=0,an=Do=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function a0(t,e){do{var n=Ct;try{if(zh(),hl.current=Gl,Vl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Nr=0,Ft=Pt=St=null,Po=!1,Ko=0,Jh.current=null,n===null||n.return===null){Lt=1,Qo=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wp(o);if(p!==null){p.flags&=-257,Tp(p,o,a,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Ep(s,c,e),rf();break e}l=Error(de(426))}}else if(yt&&a.mode&1){var m=wp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,o,a,s,e),Oh(Bs(l,a));break e}}s=l=Bs(l,a),Lt!==4&&(Lt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=W_(s,l,e);_p(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ji===null||!Ji.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=j_(s,a,e);_p(s,y);break e}}s=s.return}while(s!==null)}u0(n)}catch(P){e=P,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function l0(){var t=Wl.current;return Wl.current=Gl,t===null?Gl:t}function rf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(Ir&268435455)&&!(hc&268435455)||Gi(Ot,Bt)}function Yl(t,e){var n=Qe;Qe|=2;var i=l0();(Ot!==t||Bt!==e)&&(fi=null,Rr(t,e));do try{Sx();break}catch(r){a0(t,r)}while(!0);if(zh(),Qe=n,Wl.current=i,Ct!==null)throw Error(de(261));return Ot=null,Bt=0,Lt}function Sx(){for(;Ct!==null;)c0(Ct)}function Mx(){for(;Ct!==null&&!Yv();)c0(Ct)}function c0(t){var e=h0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?u0(t):Ct=e,Jh.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Ct=null;return}}else if(n=px(n,e,gn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Lt===0&&(Lt=5)}function xr(t,e,n){var i=st,r=Ln.transition;try{Ln.transition=null,st=1,Ex(t,e,n,i)}finally{Ln.transition=r,st=i}return null}function Ex(t,e,n,i){do Ps();while(Xi!==null);if(Qe&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===Ot&&(Ct=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,f0(Cl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=st;st=1;var a=Qe;Qe|=4,Jh.current=null,_x(t,n),r0(n,t),Gy(Qu),Pl=!!Ju,Qu=Ju=null,t.current=n,vx(n),$v(),Qe=a,st=o,Ln.transition=s}else t.current=n;if(ba&&(ba=!1,Xi=t,Xl=r),s=t.pendingLanes,s===0&&(Ji=null),Zv(n.stateNode),dn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=yd,yd=null,t;return Xl&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===xd?No++:(No=0,xd=t):No=0,ur(),null}function Ps(){if(Xi!==null){var t=Wg(Xl),e=Ln.transition,n=st;try{if(Ln.transition=null,st=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,Xl=0,Qe&6)throw Error(de(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var d=Ee;switch(d.tag){case 0:case 11:case 15:Lo(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ee=f;else for(;Ee!==null;){d=Ee;var h=d.sibling,p=d.return;if(t0(d),d===c){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var _=t.current;for(Ee=_;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=_;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(P){wt(a,a.return,P)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Qe=r,ur(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{st=n,Ln.transition=e}}return!1}function kp(t,e,n){e=Bs(n,e),e=W_(t,e,1),t=Zi(t,e,1),e=en(),t!==null&&(na(t,1,e),dn(t,e))}function wt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=Bs(n,t),t=j_(e,t,1),e=Zi(e,t,1),t=en(),e!==null&&(na(e,1,t),dn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(Lt===4||Lt===3&&(Bt&130023424)===Bt&&500>At()-ef?Rr(t,0):Qh|=n),dn(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=en();t=Ai(t,e),t!==null&&(na(t,e,n),dn(t,n))}function Tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),d0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,fx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,yt&&e.flags&1048576&&g_(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pl(t,e),t=e.pendingProps;var r=Fs(e,qt.current);Rs(e,n),r=Yh(null,e,i,t,r,n);var s=$h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vh(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,ld(e,i,t,n),e=dd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Uh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cx(i),t=Hn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=bp(null,e,i,Hn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Cp(t,e,i,r,n);case 3:e:{if(q_(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,M_(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(de(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(de(424)),e),e=Rp(t,e,i,n,r);break e}else for(_n=Ki(e.stateNode.containerInfo.firstChild),vn=e,yt=!0,Gn=null,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=bi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return E_(e),t===null&&sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ed(i,r)?o=null:s!==null&&ed(i,s)&&(e.flags|=32),$_(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return K_(t,e,n);case 4:return Gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ap(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(kl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!cn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Nn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),bp(t,e,i,r,n);case 15:return X_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),pl(t,e),e.tag=1,un(i)?(t=!0,Ul(e)):t=!1,Rs(e,n),G_(e,i,r),ld(e,i,r,n),dd(null,e,i,!0,t,n);case 19:return Z_(t,e,n);case 22:return Y_(t,e,n)}throw Error(de(156,e.tag))};function f0(t,e){return Bg(t,e)}function bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new bx(t,e,n,i)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===wh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Pr(n.children,r,s,e);case Mh:o=8,r|=8;break;case Du:return t=Pn(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Nu:return t=Pn(13,n,e,r),t.elementType=Nu,t.lanes=s,t;case Iu:return t=Pn(19,n,e,r),t.elementType=Iu,t.lanes=s,t;case Eg:return fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sg:o=10;break e;case Mg:o=9;break e;case Eh:o=11;break e;case wh:o=14;break e;case Bi:o=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function fc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function of(t,e,n,i,r,s,o,a,l){return t=new Rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(s),t}function Px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return sr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(un(n))return p_(t,n,e)}return e}function m0(t,e,n,i,r,s,o,a,l){return t=of(n,i,!0,t,r,s,o,a,l),t.context=p0(null),n=t.current,i=en(),r=Qi(n),s=Mi(i,r),s.callback=e!=null?e:null,Zi(n,s,r),t.current.lanes=r,na(t,r,i),dn(t,i),t}function pc(t,e,n,i){var r=e.current,s=en(),o=Qi(r);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(Xn(t,r,o,s),dl(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Lx(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}mc.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));pc(t,e,null,null)};mc.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){pc(null,t,null,null)}),e[Ti]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&qg(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Dx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$l(o);s.call(c)}}var o=m0(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[Ti]=o.current,jo(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$l(l);a.call(c)}}var l=of(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Ti]=l.current,jo(t.nodeType===8?t.parentNode:t),Ur(function(){pc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}pc(e,o,t,r)}else o=Dx(n,e,t,r,i);return $l(o)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(bh(e,n|1),dn(e,At()),!(Qe&6)&&(Hs=At()+500,ur()))}break;case 13:Ur(function(){var i=Ai(t,1);if(i!==null){var r=en();Xn(i,t,1,r)}}),af(t,1)}};Ch=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=en();Xn(e,t,134217728,n)}af(t,134217728)}};Xg=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=en();Xn(n,t,e,i)}af(t,e)}};Yg=function(){return st};$g=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(de(90));Tg(i),Ou(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Ig=tf;Ug=Ur;var Nx={usingClientEntryPoint:!1,Events:[ra,gs,ac,Dg,Ng,tf]},lo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ic=Ca.inject(Ix),ni=Ca}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(de(200));return Px(t,e,null,n)};xn.createRoot=function(t,e){if(!cf(t))throw Error(de(299));var n=!1,i="",r=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=of(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,jo(t.nodeType===8?t.parentNode:t),new lf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Ur(t)};xn.hydrate=function(t,e,n){if(!gc(e))throw Error(de(200));return _c(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=g0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ti]=e.current,jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};xn.render=function(t,e,n){if(!gc(e))throw Error(de(200));return _c(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!gc(t))throw Error(de(40));return t._reactRootContainer?(Ur(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};xn.unstable_batchedUpdates=tf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return _c(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),_g.exports=xn;var Ux=_g.exports,Hp=Ux;Pu.createRoot=Hp.createRoot,Pu.hydrateRoot=Hp.hydrateRoot;function Fx({runs:t,selectedId:e,onSelect:n,onRefresh:i,onDelete:r,isLoading:s}){return E.jsxs("aside",{className:"sidebar",children:[E.jsxs("div",{className:"header",children:[E.jsx("h2",{children:"Simulation Runs"}),E.jsx("button",{className:"button",onClick:i,disabled:s,children:"Refresh"})]}),E.jsxs("div",{style:{marginTop:"1rem"},children:[t.length===0&&E.jsx("p",{children:"No runs yet. Create one from the backend."}),t.map(o=>{var a;return E.jsxs("div",{className:`run-item ${e===o.id?"active":""} run-item--with-icon`,onClick:()=>n(o.id),children:[E.jsxs("div",{className:"run-item__content",children:[E.jsx("strong",{children:(a=o.name)!=null?a:"Untitled Run"}),E.jsxs("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:["Status: ",o.status]}),E.jsxs("div",{style:{fontSize:"0.75rem",marginTop:"0.4rem",color:"#64748b"},children:["Updated: ",new Date(o.updated_at).toLocaleString()]})]}),r&&E.jsx("button",{className:"icon-btn",title:"Delete run","aria-label":"Delete run",onClick:l=>{l.stopPropagation(),confirm("Delete this run? This cannot be undone.")&&r(o.id)},children:"🗑"})]},o.id)})]})]})}function Ox({apiBase:t,runId:e}){const[n,i]=ue.useState(null),[r,s]=ue.useState(null),[o,a]=ue.useState(null),[l,c]=ue.useState(!1),[d,f]=ue.useState(null),[h,p]=ue.useState(!0),[g,x]=ue.useState(!0),[m,u]=ue.useState(500);ue.useState(null)[0];const[_,v]=ue.useState(null);return ue.useEffect(()=>{if(!e){i(null),s(null);return}const y=new AbortController,P=R=>{const w=t.endsWith("/")?t:t+"/",S=R.replace(/^\/+/,"");return new URL(S,w).toString()},C=async()=>{var R;try{const w=P(`/runs/${e}/ped`),S=P(`/runs/${e}/energy_series?limit=${encodeURIComponent(m)}`),[L,k]=await Promise.all([fetch(w,{signal:y.signal}),fetch(S,{signal:y.signal})]);if(!L.ok){const K=await L.text();a(`PED fetch failed (${L.status}): ${K}`),i(null),s(null);return}if(!k.ok){const K=await k.text();a(`Series fetch failed (${k.status}): ${K}`),i(null),s(null);return}const U=await L.json(),V=await k.json();if(typeof U!="object"||U===null||typeof U.total_gen_mwh!="number"){a("PED payload invalid"),i(null),s(null);return}if(a(null),i(U),s(V),l){const K=P(`/runs/${e}/optimize`),G=await fetch(K,{signal:y.signal});G.ok?f(await G.json()):f(null)}else f(null)}catch(w){a((R=w==null?void 0:w.message)!=null?R:String(w)),i(null),s(null)}};C();const b=setInterval(C,3e3);return()=>{clearInterval(b),y.abort()}},[t,e,l,m]),E.jsxs("div",{className:"metric-card",style:{gridColumn:"1 / -1"},children:[E.jsx("div",{className:"metric-label",children:"PED (Positive Energy District)"}),E.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:8,alignItems:"center",flexWrap:"wrap"},children:[E.jsx("button",{className:"button",onClick:()=>c(y=>!y),"aria-pressed":l,"aria-label":"Toggle dispatch overlays",children:l?"Hide Dispatch":"Show Dispatch"}),E.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[E.jsx("input",{type:"checkbox",checked:h,onChange:y=>p(y.target.checked),"aria-label":"Toggle generation series"})," Gen"]}),E.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[E.jsx("input",{type:"checkbox",checked:g,onChange:y=>x(y.target.checked),"aria-label":"Toggle load series"})," Load"]}),E.jsxs("label",{title:"Timeframe",style:{display:"inline-flex",alignItems:"center",gap:6},children:["Range",E.jsxs("select",{value:m,onChange:y=>u(Number(y.target.value)),children:[E.jsx("option",{value:100,children:"100"}),E.jsx("option",{value:500,children:"500"}),E.jsx("option",{value:2e3,children:"2000"}),E.jsx("option",{value:1e4,children:"10000"})]})]}),E.jsx("button",{className:"button",onClick:()=>kx(r,d,n),"aria-label":"Export CSV",children:"Export CSV"})]}),o&&E.jsx("div",{style:{color:"#fca5a5",marginBottom:"0.5rem"},children:o}),n?E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"metric-label",children:"Total Gen (MWh)"}),E.jsx("div",{className:"metric-value",children:Number(n.total_gen_mwh).toFixed(1)})]}),E.jsxs("div",{children:[E.jsx("div",{className:"metric-label",children:"Total Demand (MWh)"}),E.jsx("div",{className:"metric-value",children:Number(n.total_demand_mwh).toFixed(1)})]}),E.jsxs("div",{children:[E.jsx("div",{className:"metric-label",children:"Balance (MWh)"}),E.jsx("div",{className:"metric-value",children:Number(n.ped_absolute_mwh).toFixed(1)})]}),E.jsxs("div",{children:[E.jsx("div",{className:"metric-label",children:"PED Ratio"}),E.jsx("div",{className:"metric-value",children:Number(n.ped_ratio).toFixed(3)})]})]}):E.jsx("div",{children:"—"}),r&&E.jsxs("div",{style:{position:"relative",marginTop:"0.75rem"},children:[E.jsxs("div",{style:{position:"absolute",top:0,right:0,background:"rgba(15,23,42,0.85)",border:"1px solid rgba(148,163,184,0.3)",borderRadius:8,padding:"6px 8px",display:"flex",gap:"0.6rem",alignItems:"center",flexWrap:"wrap",zIndex:2},children:[E.jsx(jr,{color:"#22c55e",label:"Generation"}),E.jsx(jr,{color:"#ef4444",label:"Load"}),l&&E.jsxs(E.Fragment,{children:[E.jsx(jr,{color:"#84cc16",label:"PV→Load"}),E.jsx(jr,{color:"#22d3ee",label:"PV→Export"}),E.jsx(jr,{color:"#f59e0b",label:"Battery→Load"}),E.jsx(jr,{color:"#a78bfa",label:"Grid Import"})]})]}),E.jsx("svg",{ref:y=>{},width:"100%",height:"180",viewBox:"0 0 640 180",preserveAspectRatio:"none",onMouseMove:y=>{var P,C;try{const R=y.currentTarget.getBoundingClientRect(),w=y.clientX-R.left-40,S=r.gen_mw,L=r.load_mw,k=Math.max(S.length,L.length),U=560/Math.max(1,k-1),V=Math.max(0,Math.min(k-1,Math.round(w/(R.width-80)*(560/560)))),K=(P=S[V])!=null?P:0,G=(C=L[V])!=null?C:0;let J=[`Gen: ${K.toFixed(2)} MW`,`Load: ${G.toFixed(2)} MW`];if(d&&d.series_mw){const D=d.series_mw,$=I=>D[I]&&D[I][V]!==void 0?D[I][V]:0;J.push(`PV→Load: ${$("pv_to_load_mw").toFixed(2)} MW`),J.push(`PV→Export: ${$("pv_export_mw").toFixed(2)} MW`),J.push(`Batt→Load: ${$("batt_to_load_mw").toFixed(2)} MW`),J.push(`Grid Import: ${$("grid_import_mw").toFixed(2)} MW`)}v({visible:!0,x:y.clientX-R.left+10,y:y.clientY-R.top-10,idx:V,text:J.join(`
`)})}catch{}},onMouseLeave:()=>v(null),children:(()=>{const y=r.gen_mw,P=r.load_mw,C=Math.max(y.length,P.length);if(C===0)return null;const b=Math.max(1,...h?y:[0],...g?P:[0]),R=560/Math.max(1,C-1),w=L=>150-L/b*120,S=L=>L.map((k,U)=>`${U===0?"M":"L"} ${40+U*R} ${w(k)}`).join(" ");return E.jsxs(E.Fragment,{children:[E.jsx("line",{x1:40,y1:30,x2:40,y2:150,stroke:"#334155"}),E.jsx("line",{x1:40,y1:150,x2:600,y2:150,stroke:"#334155"}),E.jsx("text",{x:8,y:32,fill:"#94a3b8",fontSize:"10",children:"MW"}),E.jsx("text",{x:580,y:170,fill:"#94a3b8",fontSize:"10",children:"steps"}),h&&E.jsx("path",{d:S(y),stroke:"#22c55e",fill:"none",strokeWidth:"2"}),g&&E.jsx("path",{d:S(P),stroke:"#ef4444",fill:"none",strokeWidth:"2"}),d&&d.series_mw&&(()=>{const L=d.series_mw,k=["pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"],U={pv_to_load_mw:"#84cc16",pv_export_mw:"#22d3ee",batt_to_load_mw:"#f59e0b",grid_import_mw:"#a78bfa"},V=Math.max(b,...k.flatMap(J=>L[J]||[0])),K=J=>150-J/V*120,G=J=>J.map((D,$)=>`${$===0?"M":"L"} ${40+$*R} ${K(D)}`).join(" ");return E.jsx(E.Fragment,{children:k.map(J=>L[J]&&E.jsx("path",{d:G(L[J]),stroke:U[J],fill:"none",strokeWidth:"1.5"},J))})})()]})})()}),_&&_.visible&&E.jsx("div",{style:{position:"absolute",left:_.x,top:_.y,pointerEvents:"none",background:"rgba(15,23,42,0.9)",color:"#e5e7eb",border:"1px solid rgba(148,163,184,0.3)",padding:"6px 8px",borderRadius:6,whiteSpace:"pre"},children:_.text})]})]})}function jr({color:t,label:e}){return E.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[E.jsx("span",{style:{width:12,height:12,background:t,borderRadius:3,display:"inline-block"}}),E.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.85rem"},children:e})]})}function kx(t,e,n){var i,r,s,o,a,l,c,d,f,h;try{const p=[],g=["step","gen_mw","load_mw","pv_to_load_mw","pv_export_mw","batt_to_load_mw","grid_import_mw"];p.push(g.join(","));const x=Math.max(((i=t==null?void 0:t.gen_mw)==null?void 0:i.length)||0,((r=t==null?void 0:t.load_mw)==null?void 0:r.length)||0),m=y=>{var P;return((P=e==null?void 0:e.series_mw)==null?void 0:P[y])||[]};for(let y=0;y<x;y++){const P=[String(((t==null?void 0:t.start)||0)+y),String((o=(s=t==null?void 0:t.gen_mw)==null?void 0:s[y])!=null?o:""),String((l=(a=t==null?void 0:t.load_mw)==null?void 0:a[y])!=null?l:""),String((c=m("pv_to_load_mw")[y])!=null?c:""),String((d=m("pv_export_mw")[y])!=null?d:""),String((f=m("batt_to_load_mw")[y])!=null?f:""),String((h=m("grid_import_mw")[y])!=null?h:"")];p.push(P.join(","))}n&&(p.push(""),Object.entries(n).forEach(([y,P])=>p.push(`# ${y},${String(P)}`)));const u=new Blob([p.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(u),v=document.createElement("a");v.href=_,v.download="digital_twin_series.csv",v.click(),URL.revokeObjectURL(_)}catch{}}const Ra={owned_wind_capacity_mw:270,owned_solar_capacity_mw:100,owned_hydro_capacity_mw:40,owned_battery_capacity_mwh:10,physical_allocation:.88,financial_allocation:.12,investment_freq:12};function zx({apiBase:t,onRun:e}){var K,G,J,D,$;const[n,i]=ue.useState([]),[r,s]=ue.useState(!1),[o,a]=ue.useState("My Scenario"),[l,c]=ue.useState(""),[d,f]=ue.useState(""),[h,p]=ue.useState(Ra),[g,x]=ue.useState(null),[m,u]=ue.useState(!0),[_,v]=ue.useState(null),[y,P]=ue.useState(null),[C,b]=ue.useState([]),R=I=>{const Q=t.endsWith("/")?t:t+"/",ce=I.replace(/^\/+/,"");return new URL(ce,Q).toString()},w=async()=>{s(!0);try{const Q=await(await fetch(R("/scenarios"))).json();i(Q)}catch{}s(!1)};ue.useEffect(()=>{w()},[]);const S=async()=>{const I={name:o,description:l,details:d,config_overrides:h};(await fetch(R("/scenarios"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)})).ok&&await w()},L=async I=>{var ce,be,W;P(null),v(I);const Q=n.find(ne=>ne.id===I);Q&&(x(Q.id),a(Q.name),c((ce=Q.description)!=null?ce:""),f((be=Q.details)!=null?be:""),p({...Ra,...Q.config_overrides||{}}));try{const ne=await fetch(R(`/scenarios/${I}/run`),{method:"POST"});if(ne.ok){const me=await ne.json();e(me.id)}else{const me=await ne.text();P(`Run failed (${ne.status}): ${me}`)}}catch(ne){P((W=ne==null?void 0:ne.message)!=null?W:String(ne))}finally{v(null)}},k=async I=>{if(!confirm("Delete this scenario? This cannot be undone."))return;(await fetch(R(`/scenarios/${I}`),{method:"DELETE"})).ok&&await w()},U=(I,Q)=>p({...h,[I]:Q}),V=async()=>{try{const I=await fetch(R("/runs"));if(!I.ok)return;const ce=(await I.json()).slice(0,8),be=[];for(const W of ce)try{const ne=await fetch(R(`/runs/${W.id}/ped`));if(!ne.ok){be.push({name:W.name,status:W.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"});continue}const me=await ne.json();be.push({name:W.name,status:W.status,ped_ratio:Number(me.ped_ratio).toFixed(3),total_gen_mwh:Number(me.total_gen_mwh).toFixed(1),total_demand_mwh:Number(me.total_demand_mwh).toFixed(1)})}catch{be.push({name:W.name,status:W.status,ped_ratio:"-",total_gen_mwh:"-",total_demand_mwh:"-"})}b(be)}catch{}};return ue.useEffect(()=>{V()},[]),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"360px 1fr",gap:"1rem",height:"100%"},children:[E.jsxs("div",{className:"sidebar",style:{height:"100%",overflowY:"auto"},children:[E.jsxs("div",{className:"header",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[E.jsx("h2",{style:{flex:1},children:"Scenarios"}),E.jsx("button",{className:"button",onClick:()=>{x(null),a("My Scenario"),c(""),f(""),p({...Ra}),u(!0)},children:"New"}),E.jsx("button",{className:"button",onClick:w,disabled:r,children:"Refresh"})]}),E.jsx("div",{style:{marginTop:"1rem"},children:n.map(I=>{var Q;return E.jsxs("div",{className:`run-item run-item--with-icon ${g===I.id?"active":""}`,style:{display:"flex",alignItems:"center",justifyContent:"space-between"},onClick:()=>{var ce,be;x(I.id),a(I.name),c((ce=I.description)!=null?ce:""),f((be=I.details)!=null?be:""),p({...Ra,...I.config_overrides||{}})},children:[E.jsxs("div",{style:{flex:1},children:[E.jsx("strong",{children:I.name}),E.jsx("div",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:(Q=I.description)!=null?Q:""}),I.details&&E.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b",marginTop:4},children:[String(I.details).slice(0,120),String(I.details).length>120?"…":""]})]}),E.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:E.jsx("button",{className:"button",onClick:()=>L(I.id),"aria-busy":_===I.id,"aria-label":`Run ${I.name}`,children:_===I.id?"Running…":"Run"})}),E.jsx("button",{className:"icon-btn",title:"Delete scenario","aria-label":"Delete scenario",onClick:ce=>{ce.stopPropagation(),k(I.id)},children:"🗑"})]},I.id)})})]}),E.jsxs("div",{className:"main-content",children:[E.jsx("div",{className:"header",children:E.jsx("h2",{children:"Create / Edit Scenario"})}),y&&E.jsx("div",{className:"metric-card",style:{color:"#fecaca"},children:y}),E.jsxs("div",{className:"metric-card",children:[E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[E.jsxs("label",{children:["Name",E.jsx("input",{style:{width:"100%"},value:o,onChange:I=>a(I.target.value)})]}),E.jsxs("label",{children:["Description",E.jsx("input",{style:{width:"100%"},value:l,onChange:I=>c(I.target.value)})]}),E.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Details",E.jsx("textarea",{style:{width:"100%",minHeight:90},value:d,onChange:I=>f(I.target.value)})]}),E.jsxs("label",{children:["Wind (MW)",E.jsx("input",{type:"number",value:h.owned_wind_capacity_mw,onChange:I=>U("owned_wind_capacity_mw",Number(I.target.value))})]}),E.jsxs("label",{children:["Solar (MW)",E.jsx("input",{type:"number",value:h.owned_solar_capacity_mw,onChange:I=>U("owned_solar_capacity_mw",Number(I.target.value))})]}),E.jsxs("label",{children:["Hydro (MW)",E.jsx("input",{type:"number",value:h.owned_hydro_capacity_mw,onChange:I=>U("owned_hydro_capacity_mw",Number(I.target.value))})]}),E.jsxs("label",{children:["Battery (MWh)",E.jsx("input",{type:"number",value:h.owned_battery_capacity_mwh,onChange:I=>U("owned_battery_capacity_mwh",Number(I.target.value))})]}),E.jsxs("label",{children:["Physical Allocation",E.jsx("input",{type:"number",step:"0.01",value:h.physical_allocation,onChange:I=>U("physical_allocation",Number(I.target.value))})]}),E.jsxs("label",{children:["Financial Allocation",E.jsx("input",{type:"number",step:"0.01",value:h.financial_allocation,onChange:I=>U("financial_allocation",Number(I.target.value))})]}),E.jsxs("label",{children:["Investment Freq (steps)",E.jsx("input",{type:"number",value:h.investment_freq,onChange:I=>U("investment_freq",Number(I.target.value))})]})]}),E.jsxs("div",{style:{marginTop:"0.75rem",display:"flex",gap:"0.5rem"},children:[E.jsx("button",{className:"button",onClick:S,children:"Save Scenario"}),E.jsx("button",{className:"button",onClick:async()=>{if(!g)return;const I=R(`/scenarios/${g}`);(await fetch(I,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,description:l,details:d,config_overrides:h})})).ok&&await w()},disabled:!g,children:"Save Changes"})]})]}),E.jsxs("div",{className:"metric-card",style:{whiteSpace:"pre-wrap"},children:[E.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[E.jsx("h3",{style:{margin:0},children:"Guideline: Designing a Scenario for PED"}),E.jsx("button",{className:"button",onClick:()=>u(I=>!I),children:m?"Hide":"Show"})]}),m&&E.jsxs("div",{children:[E.jsx("p",{children:"PED (Positive Energy District) targets annual on‑site renewable generation ≥ annual demand. Tune parameters below; then check Runs → Charts → PED to monitor total generation, total demand, balance and ratio (≥ 1.0 for PED)."}),E.jsxs("ul",{children:[E.jsxs("li",{children:[E.jsx("b",{children:"Solar (MW)"}),": rooftop PV nameplate. Increasing this primarily raises mid‑day generation. Current: ",String((K=h.owned_solar_capacity_mw)!=null?K:"—")," MW."]}),E.jsxs("li",{children:[E.jsx("b",{children:"Battery (MWh)"}),": storage energy. Shifts PV from mid‑day to evenings; reduces imports and exports; increases self‑consumption. Current: ",String((G=h.owned_battery_capacity_mwh)!=null?G:"—")," MWh."]}),E.jsxs("li",{children:[E.jsx("b",{children:"Investment Freq (steps)"}),": decision cadence (lower = more responsive). Use 6 for DSM‑like responsiveness; 12 for baseline. Current: ",String((J=h.investment_freq)!=null?J:"—"),"."]}),E.jsxs("li",{children:[E.jsx("b",{children:"Physical / Financial Allocation"}),": budget split that influences physical assets vs trading. Keep sensible totals (≈1.0). Current: ",String((D=h.physical_allocation)!=null?D:"—")," / ",String(($=h.financial_allocation)!=null?$:"—"),"."]})]}),E.jsxs("p",{children:[E.jsx("b",{children:"Suggested recipes"}),":",E.jsx("br",{}),"– Baseline: modest PV, no battery; observe import/export baseline.",E.jsx("br",{}),"– High PV: maximize PV; expect high mid‑day export.",E.jsx("br",{}),"– PV + Battery (4 h): add 0.32–0.64 MWh storage to boost self‑consumption.",E.jsx("br",{}),"– DSM‑like: keep PV+Battery and set investment_freq=6 to react faster."]}),E.jsx("p",{children:"Iterate: create → run → check PED ratio → adjust PV/battery/decisions until balance ≥ 0 and ratio ≥ 1.0. Use multiple saved scenarios to compare results."})]})]}),E.jsxs("div",{className:"metric-card",children:[E.jsxs("div",{className:"header",style:{justifyContent:"space-between"},children:[E.jsx("h3",{style:{margin:0},children:"Compare Runs (latest)"}),E.jsx("button",{className:"button",onClick:V,children:"Refresh"})]}),E.jsx("div",{style:{overflowX:"auto"},children:E.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Name"}),E.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Status"}),E.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"PED Ratio"}),E.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Gen (MWh)"}),E.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Demand (MWh)"})]})}),E.jsx("tbody",{children:C.map((I,Q)=>E.jsxs("tr",{children:[E.jsx("td",{style:{padding:"6px 8px"},children:I.name}),E.jsx("td",{style:{padding:"6px 8px",color:"#94a3b8"},children:I.status}),E.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:I.ped_ratio}),E.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:I.total_gen_mwh}),E.jsx("td",{style:{padding:"6px 8px",textAlign:"right"},children:I.total_demand_mwh})]},Q))})]})})]})]})]})}const Ed={smart_building:{label:"Smart Building",icon:"🏢",color:"#6366f1",defaultParams:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30},description:"Intelligent building with controllable loads"},solar_pv:{label:"Solar PV",icon:"☀️",color:"#eab308",defaultParams:{capacity_kwp:100,tilt_deg:15,azimuth_deg:180,efficiency:.2},description:"Rooftop or ground-mounted photovoltaic panels"},battery_storage:{label:"Battery Storage",icon:"🔋",color:"#22c55e",defaultParams:{capacity_kwh:200,power_kw:50,efficiency:.92,initial_soc:.5},description:"Lithium-ion battery energy storage system"},wind_turbine:{label:"Wind Turbine",icon:"🌬️",color:"#06b6d4",defaultParams:{capacity_kw:500,hub_height_m:80,rotor_diameter_m:50},description:"Small-scale wind power generation"},district_heating:{label:"District Heating",icon:"🔥",color:"#ef4444",defaultParams:{supply_temp_c:70,return_temp_c:40,capacity_kw:500},description:"Connection to district heating network"},smart_grid:{label:"Smart Grid",icon:"⚡",color:"#8b5cf6",defaultParams:{import_limit_kw:1e3,export_limit_kw:500,tariff_type:"dynamic"},description:"Grid connection point with smart metering"},ev_charger:{label:"EV Charger",icon:"🚗",color:"#3b82f6",defaultParams:{num_ports:4,power_per_port_kw:22,v2g_enabled:!0},description:"Electric vehicle charging station with V2G"},heat_pump:{label:"Heat Pump",icon:"❄️",color:"#14b8a6",defaultParams:{capacity_kw:50,cop:3.5,type:"air_source"},description:"Air or ground source heat pump"},chp_unit:{label:"CHP Unit",icon:"⚙️",color:"#f97316",defaultParams:{electrical_kw:100,thermal_kw:150,fuel:"biogas"},description:"Combined heat and power generation"},thermal_storage:{label:"Thermal Storage",icon:"🌡️",color:"#ec4899",defaultParams:{capacity_kwh:500,max_temp_c:95,loss_pct_day:2},description:"Hot water thermal energy storage"},load_center:{label:"Load Center",icon:"📊",color:"#64748b",defaultParams:{base_load_kw:100,peak_load_kw:300,dsm_enabled:!0},description:"Aggregated electrical load point"}},Bx=Object.entries(Ed).map(([t,e])=>({type:t,...e}));function Hx({onConfigChange:t,initialConfig:e,apiBase:n,onRunSimulation:i}){var O;const[r,s]=ue.useState((e==null?void 0:e.components)||[]),[o,a]=ue.useState((e==null?void 0:e.connections)||[]),[l,c]=ue.useState(null),[d,f]=ue.useState(null),[h,p]=ue.useState((e==null?void 0:e.name)||"My Digital Twin"),[g,x]=ue.useState(null),[m,u]=ue.useState(()=>{const j=e==null?void 0:e.id;return j&&/^\d+$/.test(j)?j:null}),[_,v]=ue.useState(!1),[y,P]=ue.useState(!1),[C,b]=ue.useState([]),[R,w]=ue.useState(null),S=ue.useRef(null),L=j=>{if(!n)return j;try{const ie=n.endsWith("/")?n:n+"/";return new URL(j.replace(/^\/+/,""),ie).toString()}catch{return n.replace(/\/+$/,"")+"/"+j.replace(/^\/+/,"")}};ue.useEffect(()=>{n&&fetch(L("/scenarios")).then(j=>j.json()).then(j=>b(j||[])).catch(()=>{})},[n]),ue.useEffect(()=>{if(!e)try{const j=localStorage.getItem("dt_builder_config");if(j){const ie=JSON.parse(j);s(ie.components||[]),a(ie.connections||[]),p(ie.name||"My Digital Twin")}}catch{}},[e]),ue.useEffect(()=>{const j={id:(e==null?void 0:e.id)||`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:(e==null?void 0:e.created_at)||new Date().toISOString()};try{localStorage.setItem("dt_builder_config",JSON.stringify(j))}catch{}t==null||t(j)},[r,o,h,t,e]);const k=j=>{x(j)},U=ue.useCallback(j=>{if(j.preventDefault(),!g||!S.current)return;const ie=S.current.getBoundingClientRect(),le=j.clientX-ie.left,ee=j.clientY-ie.top,X=Ed[g],te={id:`${g}-${Date.now()}`,type:g,name:X.label,x:le,y:ee,params:{...X.defaultParams}};s(A=>[...A,te]),x(null)},[g]),V=j=>{j.target===S.current&&(c(null),f(null))},K=(j,ie)=>{if(ie.stopPropagation(),d&&d!==j){const le={id:`conn-${Date.now()}`,from:d,to:j,type:"electricity",capacity_kw:100};a(ee=>[...ee,le]),f(null)}else c(j)},G=j=>{f(j),c(null)},J=j=>{s(ie=>ie.filter(le=>le.id!==j)),a(ie=>ie.filter(le=>le.from!==j&&le.to!==j)),c(null)},D=j=>{a(ie=>ie.filter(le=>le.id!==j))},$=(j,ie,le)=>{s(ee=>ee.map(X=>X.id===j?{...X,params:{...X.params,[ie]:le}}:X))},I=(j,ie,le)=>{s(ee=>ee.map(X=>X.id===j?{...X,x:ie,y:le}:X))},Q=(j,ie)=>{if(!S.current)return;const le=S.current.getBoundingClientRect(),ee=ie.clientX-le.left,X=ie.clientY-le.top;ee>0&&X>0&&I(j,ee,X)},ce=r.find(j=>j.id===l),W=(()=>{let j=0,ie=0,le=0;r.forEach(X=>{X.type==="solar_pv"&&(j+=Number(X.params.capacity_kwp||0)),X.type==="wind_turbine"&&(j+=Number(X.params.capacity_kw||0)),X.type==="chp_unit"&&(j+=Number(X.params.electrical_kw||0)),X.type==="smart_building"&&(ie+=Number(X.params.load_kw||0)),X.type==="load_center"&&(ie+=Number(X.params.base_load_kw||0)),X.type==="battery_storage"&&(le+=Number(X.params.capacity_kwh||0)),X.type==="thermal_storage"&&(le+=Number(X.params.capacity_kwh||0))});const ee=ie>0?j/ie:0;return{genKw:j,loadKw:ie,storageKwh:le,ratio:ee,isPed:ee>=1}})(),ne=()=>{confirm("Clear all components?")&&(s([]),a([]),c(null),u(null))},me=async()=>{if(n){v(!0);try{const j={name:h,description:`Digital twin with ${r.length} components`,components:r.map(X=>({...X})),connections:o.map(X=>({...X}))},ie=L(m?`/digital-twins/${m}`:"/digital-twins"),ee=await fetch(ie,{method:m?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});if(ee.ok){const X=await ee.json();u(X.id),alert("Saved successfully!")}else alert("Save failed: "+await ee.text())}catch(j){alert("Save error: "+j.message)}finally{v(!1)}}},he=async()=>{if(!n){alert("API not configured");return}if(r.length===0){alert("Please add components to your digital twin first");return}P(!0);try{let j=m;if(!j){const le={name:h,description:`Digital twin with ${r.length} components`,components:r.map(te=>({...te})),connections:o.map(te=>({...te}))},ee=await fetch(L("/digital-twins"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(le)});if(!ee.ok){alert("Failed to save: "+await ee.text());return}j=(await ee.json()).id,u(j)}const ie=await fetch(L(`/digital-twins/${j}/run`),{method:"POST"});if(ie.ok){const le=await ie.json();i==null||i(le.id)}else alert("Run failed: "+await ie.text())}catch(j){alert("Run error: "+((j==null?void 0:j.message)||String(j)))}finally{P(!1)}},Ne=async()=>{if(!n){alert("API not configured");return}const j=Ue(),ie={name:`Scenario: ${h}`,description:`Auto-generated from digital twin "${h}"`,details:`Components: ${r.map(ee=>ee.name).join(", ")}`,config_overrides:j},le=L("/scenarios");console.log("Creating scenario at:",le,ie);try{const ee=await fetch(le,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie)});if(ee.ok){const X=await ee.json();w(X.id);const te=await fetch(L("/scenarios"));te.ok&&b(await te.json()),alert("Scenario created! You can now run it from the Scenarios tab.")}else{const X=await ee.text();alert("Failed to create scenario: "+X)}}catch(ee){console.error("Create scenario error:",ee),alert("Error creating scenario: "+((ee==null?void 0:ee.message)||String(ee)))}},Ue=()=>{let j=0,ie=0,le=0;return r.forEach(ee=>{ee.type==="solar_pv"&&(j+=Number(ee.params.capacity_kwp||0)/1e3),ee.type==="battery_storage"&&(ie+=Number(ee.params.capacity_kwh||0)/1e3),ee.type==="wind_turbine"&&(le+=Number(ee.params.capacity_kw||0)/1e3)}),{owned_solar_capacity_mw:j,owned_battery_capacity_mwh:ie,owned_wind_capacity_mw:le,investment_freq:12}},Be=()=>{const j={id:`dt-${Date.now()}`,name:h,components:r,connections:o,created_at:new Date().toISOString()},ie=new Blob([JSON.stringify(j,null,2)],{type:"application/json"}),le=URL.createObjectURL(ie),ee=document.createElement("a");ee.href=le,ee.download=`${h.replace(/\s+/g,"_")}.json`,ee.click(),URL.revokeObjectURL(le)},Ye=j=>{var ee;const ie=(ee=j.target.files)==null?void 0:ee[0];if(!ie)return;const le=new FileReader;le.onload=X=>{var te;try{const A=JSON.parse((te=X.target)==null?void 0:te.result);s(A.components||[]),a(A.connections||[]),p(A.name||"Imported Config")}catch{alert("Invalid config file")}},le.readAsText(ie)},ze={scenario_1_baseline:{name:"Scenario 1: Baseline",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Existing Rooftop PV",x:300,y:60,params:{capacity_kwp:30,tilt_deg:15,azimuth_deg:180,efficiency:.18}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:100,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:30},{id:"c2",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c3",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_2_high_pv:{name:"Scenario 2: High PV",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Maximized Rooftop PV",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:180,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:171},{id:"c2",from:"pv-1",to:"grid-1",type:"electricity",capacity_kw:100},{id:"c3",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c4",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_3_pv_battery:{name:"Scenario 3: PV + Battery (4h)",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery 4h (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_4_large_battery:{name:"Scenario 4: PV + Large Battery",components:[{id:"bld-1",type:"smart_building",name:"Office Building",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:0}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Large Battery (640 kWh)",x:450,y:100,params:{capacity_kwh:640,power_kw:160,efficiency:.92,initial_soc:.5}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:180,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:150},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:160},{id:"c3",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:160},{id:"c4",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c5",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},scenario_5_dsm:{name:"Scenario 5: DSM (Flexible)",components:[{id:"bld-1",type:"smart_building",name:"Smart Office (DSM)",x:300,y:180,params:{floors:5,area_m2:2e3,load_kw:150,flexible_load_pct:30}},{id:"pv-1",type:"solar_pv",name:"Rooftop PV (171 kWp)",x:300,y:60,params:{capacity_kwp:171,tilt_deg:15,azimuth_deg:180,efficiency:.2}},{id:"bat-1",type:"battery_storage",name:"Battery (320 kWh)",x:450,y:100,params:{capacity_kwh:320,power_kw:80,efficiency:.92,initial_soc:.5}},{id:"load-1",type:"load_center",name:"Flexible Loads",x:150,y:100,params:{base_load_kw:100,peak_load_kw:150,dsm_enabled:!0}},{id:"dh-1",type:"district_heating",name:"District Heating",x:150,y:260,params:{supply_temp_c:70,return_temp_c:40,capacity_kw:200}},{id:"grid-1",type:"smart_grid",name:"Grid (DK2)",x:450,y:260,params:{import_limit_kw:500,export_limit_kw:171,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:80},{id:"c3",from:"pv-1",to:"load-1",type:"electricity",capacity_kw:50},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"load-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c6",from:"grid-1",to:"bld-1",type:"electricity",capacity_kw:500},{id:"c7",from:"dh-1",to:"bld-1",type:"heat",capacity_kw:200}]},smart_district:{name:"Smart District PED",components:[{id:"bld-1",type:"smart_building",name:"Residential A",x:150,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"bld-2",type:"smart_building",name:"Residential B",x:350,y:150,params:{floors:4,area_m2:1200,load_kw:80,flexible_load_pct:40}},{id:"pv-1",type:"solar_pv",name:"Community Solar",x:250,y:50,params:{capacity_kwp:300,tilt_deg:20,azimuth_deg:180,efficiency:.21}},{id:"bat-1",type:"battery_storage",name:"Community Battery",x:250,y:270,params:{capacity_kwh:600,power_kw:150,efficiency:.93,initial_soc:.5}},{id:"hp-1",type:"heat_pump",name:"Central Heat Pump",x:500,y:150,params:{capacity_kw:100,cop:3.8,type:"ground_source"}},{id:"grid-1",type:"smart_grid",name:"Grid PCC",x:50,y:270,params:{import_limit_kw:400,export_limit_kw:300,tariff_type:"dynamic"}}],connections:[{id:"c1",from:"pv-1",to:"bld-1",type:"electricity",capacity_kw:100},{id:"c2",from:"pv-1",to:"bld-2",type:"electricity",capacity_kw:100},{id:"c3",from:"pv-1",to:"bat-1",type:"electricity",capacity_kw:150},{id:"c4",from:"bat-1",to:"bld-1",type:"electricity",capacity_kw:80},{id:"c5",from:"bat-1",to:"bld-2",type:"electricity",capacity_kw:80},{id:"c6",from:"grid-1",to:"bat-1",type:"electricity",capacity_kw:300},{id:"c7",from:"hp-1",to:"bld-1",type:"heat",capacity_kw:50},{id:"c8",from:"hp-1",to:"bld-2",type:"heat",capacity_kw:50}]}},tt=j=>{var ee;const ie=ze[j];if(!ie||r.length>0&&!confirm("This will replace your current design. Continue?"))return;s(ie.components),a(ie.connections),p(ie.name),u(null);const le=(ee=j.match(/scenario_(\d)/))==null?void 0:ee[1];if(le&&C.length>0){const X=C.find(te=>te.name.toLowerCase().includes(`scenario ${le}`)||te.name.toLowerCase().includes(`s${le}`));X&&w(X.id)}};return E.jsxs("div",{style:{display:"flex",height:"100%",background:"#0f172a",color:"#e2e8f0"},children:[E.jsxs("div",{style:{width:220,borderRight:"1px solid #334155",padding:12,overflowY:"auto"},children:[E.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Components"}),E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Bx.map(j=>E.jsxs("div",{draggable:!0,onDragStart:()=>k(j.type),style:{padding:"8px 10px",background:"#1e293b",borderRadius:6,cursor:"grab",display:"flex",alignItems:"center",gap:8,border:`2px solid ${j.color}33`,transition:"all 0.15s"},onMouseEnter:ie=>ie.currentTarget.style.borderColor=j.color,onMouseLeave:ie=>ie.currentTarget.style.borderColor=`${j.color}33`,title:j.description,children:[E.jsx("span",{style:{fontSize:20},children:j.icon}),E.jsx("span",{style:{fontSize:12},children:j.label})]},j.type))}),E.jsxs("div",{style:{marginTop:20,padding:12,background:"#1e293b",borderRadius:8},children:[E.jsx("h4",{style:{margin:"0 0 8px",fontSize:12,color:"#94a3b8"},children:"PED Potential"}),E.jsxs("div",{style:{fontSize:11,lineHeight:1.6},children:[E.jsxs("div",{children:["Generation: ",E.jsxs("b",{style:{color:"#22c55e"},children:[W.genKw.toFixed(0)," kW"]})]}),E.jsxs("div",{children:["Load: ",E.jsxs("b",{style:{color:"#ef4444"},children:[W.loadKw.toFixed(0)," kW"]})]}),E.jsxs("div",{children:["Storage: ",E.jsxs("b",{style:{color:"#3b82f6"},children:[W.storageKwh.toFixed(0)," kWh"]})]}),E.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,background:W.isPed?"#166534":"#7f1d1d",textAlign:"center"},children:W.isPed?"✓ PED Achievable":`Ratio: ${(W.ratio*100).toFixed(0)}%`})]})]}),E.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[n&&E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:me,disabled:_||r.length===0,style:{...Kt,background:"#16a34a"},children:_?"💾 Saving...":m?"💾 Update":"💾 Save"}),E.jsx("button",{onClick:he,disabled:y||r.length===0,style:{...Kt,background:"#2563eb"},children:y?"▶️ Starting...":"▶️ Run Simulation"}),E.jsx("button",{onClick:Ne,disabled:r.length===0,style:{...Kt,background:"#7c3aed"},children:"📋 Create Scenario"})]}),E.jsx("button",{onClick:Be,style:Kt,children:"📤 Export JSON"}),E.jsxs("label",{style:{...Kt,textAlign:"center",cursor:"pointer"},children:["📥 Import JSON",E.jsx("input",{type:"file",accept:".json",onChange:Ye,style:{display:"none"}})]}),E.jsx("button",{onClick:ne,style:{...Kt,background:"#7f1d1d"},children:"🗑️ Clear All"})]}),n&&R&&E.jsxs("div",{style:{marginTop:16,padding:8,background:"#1e3a5f",borderRadius:6,fontSize:11},children:[E.jsx("span",{style:{color:"#94a3b8"},children:"Linked: "}),E.jsx("span",{style:{color:"#60a5fa"},children:((O=C.find(j=>j.id===R))==null?void 0:O.name)||R}),E.jsx("button",{onClick:()=>w(null),style:{marginLeft:8,background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:10},children:"✕"})]}),E.jsxs("div",{style:{marginTop:20},children:[E.jsx("h4",{style:{margin:"0 0 8px",fontSize:12,color:"#94a3b8"},children:"Paper Scenarios"}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[E.jsx("button",{onClick:()=>tt("scenario_1_baseline"),style:{...Kt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S1: Baseline"}),E.jsx("button",{onClick:()=>tt("scenario_2_high_pv"),style:{...Kt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S2: High PV"}),E.jsx("button",{onClick:()=>tt("scenario_3_pv_battery"),style:{...Kt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S3: PV + Battery"}),E.jsx("button",{onClick:()=>tt("scenario_4_large_battery"),style:{...Kt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S4: Large Battery"}),E.jsx("button",{onClick:()=>tt("scenario_5_dsm"),style:{...Kt,background:"#1e40af",fontSize:10,padding:"6px 8px"},children:"S5: DSM"})]}),E.jsx("h4",{style:{margin:"12px 0 8px",fontSize:12,color:"#94a3b8"},children:"Other Templates"}),E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:E.jsx("button",{onClick:()=>tt("smart_district"),style:{...Kt,background:"#065f46",fontSize:10,padding:"6px 8px"},children:"🏘️ Smart District"})})]})]}),E.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{style:{padding:"8px 12px",borderBottom:"1px solid #334155",display:"flex",alignItems:"center",gap:12},children:[E.jsx("input",{value:h,onChange:j=>p(j.target.value),style:{background:"#1e293b",border:"1px solid #334155",borderRadius:4,padding:"4px 8px",color:"#e2e8f0",fontSize:14,width:200}}),E.jsxs("span",{style:{fontSize:12,color:"#64748b"},children:[r.length," components • ",o.length," connections"]}),d&&E.jsx("span",{style:{fontSize:12,color:"#eab308",marginLeft:"auto"},children:"🔗 Click another component to connect, or click canvas to cancel"})]}),E.jsxs("div",{ref:S,onDrop:U,onDragOver:j=>j.preventDefault(),onClick:V,style:{flex:1,position:"relative",background:"linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px), #1e293b",backgroundSize:"20px 20px",overflow:"hidden"},children:[E.jsxs("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:[E.jsx("defs",{children:E.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:E.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),o.map(j=>{const ie=r.find(X=>X.id===j.from),le=r.find(X=>X.id===j.to);if(!ie||!le)return null;const ee=j.type==="heat"?"#ef4444":j.type==="both"?"#a855f7":"#3b82f6";return E.jsx("g",{onClick:()=>c(j.id),style:{cursor:"pointer",pointerEvents:"stroke"},children:E.jsx("line",{x1:ie.x+30,y1:ie.y+30,x2:le.x+30,y2:le.y+30,stroke:ee,strokeWidth:3,strokeDasharray:j.type==="heat"?"8,4":"none",markerEnd:"url(#arrowhead)"})},j.id)})]}),r.map(j=>{const ie=Ed[j.type],le=l===j.id,ee=d===j.id;return E.jsxs("div",{draggable:!0,onDragEnd:X=>Q(j.id,X),onClick:X=>K(j.id,X),style:{position:"absolute",left:j.x,top:j.y,width:60,height:60,background:`${ie.color}22`,border:`2px solid ${le||ee?"#fff":ie.color}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"move",boxShadow:le?"0 0 12px rgba(255,255,255,0.3)":"none",transition:"box-shadow 0.15s"},children:[E.jsx("span",{style:{fontSize:24},children:ie.icon}),E.jsx("span",{style:{fontSize:9,color:"#94a3b8",marginTop:2,textAlign:"center",maxWidth:56,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:j.name})]},j.id)}),r.length===0&&E.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[E.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),E.jsx("div",{children:"Drag components here to build your digital twin"})]})]})]}),E.jsxs("div",{style:{width:260,borderLeft:"1px solid #334155",padding:12,overflowY:"auto"},children:[E.jsx("h3",{style:{margin:"0 0 12px",fontSize:14,color:"#94a3b8"},children:"Properties"}),ce?E.jsxs("div",{children:[E.jsxs("div",{style:{marginBottom:12},children:[E.jsx("label",{style:{fontSize:11,color:"#64748b"},children:"Name"}),E.jsx("input",{value:ce.name,onChange:j=>s(ie=>ie.map(le=>le.id===ce.id?{...le,name:j.target.value}:le)),style:co})]}),E.jsx("div",{style:{fontSize:11,color:"#64748b",marginBottom:8},children:"Parameters"}),Object.entries(ce.params).map(([j,ie])=>E.jsxs("div",{style:{marginBottom:8},children:[E.jsx("label",{style:{fontSize:10,color:"#94a3b8",display:"block",marginBottom:2},children:j.replace(/_/g," ")}),typeof ie=="boolean"?E.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12},children:[E.jsx("input",{type:"checkbox",checked:ie,onChange:le=>$(ce.id,j,le.target.checked)}),ie?"Enabled":"Disabled"]}):typeof ie=="number"?E.jsx("input",{type:"number",value:ie,onChange:le=>$(ce.id,j,parseFloat(le.target.value)||0),style:co}):E.jsx("input",{value:ie,onChange:le=>$(ce.id,j,le.target.value),style:co})]},j)),E.jsxs("div",{style:{marginTop:16,display:"flex",flexDirection:"column",gap:6},children:[E.jsx("button",{onClick:()=>G(ce.id),style:{...Kt,background:"#1d4ed8"},children:"🔗 Connect to..."}),E.jsx("button",{onClick:()=>J(ce.id),style:{...Kt,background:"#7f1d1d"},children:"🗑️ Delete"})]})]}):o.find(j=>j.id===l)?E.jsx("div",{children:(()=>{const j=o.find(ee=>ee.id===l),ie=r.find(ee=>ee.id===j.from),le=r.find(ee=>ee.id===j.to);return E.jsxs(E.Fragment,{children:[E.jsxs("div",{style:{fontSize:12,marginBottom:12},children:[E.jsx("b",{children:ie==null?void 0:ie.name})," → ",E.jsx("b",{children:le==null?void 0:le.name})]}),E.jsxs("div",{style:{marginBottom:8},children:[E.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Type"}),E.jsxs("select",{value:j.type,onChange:ee=>a(X=>X.map(te=>te.id===j.id?{...te,type:ee.target.value}:te)),style:co,children:[E.jsx("option",{value:"electricity",children:"⚡ Electricity"}),E.jsx("option",{value:"heat",children:"🔥 Heat"}),E.jsx("option",{value:"both",children:"🔄 Both"})]})]}),E.jsxs("div",{style:{marginBottom:8},children:[E.jsx("label",{style:{fontSize:10,color:"#94a3b8"},children:"Capacity (kW)"}),E.jsx("input",{type:"number",value:j.capacity_kw||0,onChange:ee=>a(X=>X.map(te=>te.id===j.id?{...te,capacity_kw:parseFloat(ee.target.value)||0}:te)),style:co})]}),E.jsx("button",{onClick:()=>D(j.id),style:{...Kt,background:"#7f1d1d",marginTop:12},children:"🗑️ Delete Connection"})]})})()}):E.jsx("div",{style:{color:"#64748b",fontSize:12},children:"Select a component or connection to edit its properties"})]})]})}const Kt={padding:"8px 12px",background:"#334155",border:"none",borderRadius:4,color:"#e2e8f0",fontSize:12,cursor:"pointer"},co={width:"100%",padding:"6px 8px",background:"#1e293b",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0",fontSize:12};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="170",Ls={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Vp=1,Gx=2,v0=1,Wx=2,hi=3,or=0,hn=1,gi=2,tr=0,Ds=1,wd=2,Gp=3,Wp=4,jx=5,Mr=100,Xx=101,Yx=102,$x=103,qx=104,Kx=200,Zx=201,Jx=202,Qx=203,Td=204,Ad=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,oS=212,aS=213,lS=214,bd=0,Cd=1,Rd=2,Vs=3,Pd=4,Ld=5,Dd=6,Nd=7,y0=0,cS=1,uS=2,nr=0,dS=1,hS=2,fS=3,pS=4,mS=5,gS=6,_S=7,x0=300,Gs=301,Ws=302,Id=303,Ud=304,vc=306,Fd=1e3,br=1001,Od=1002,Yn=1003,vS=1004,Pa=1005,ti=1006,$c=1007,Cr=1008,Ci=1009,S0=1010,M0=1011,ea=1012,df=1013,Fr=1014,yi=1015,oa=1016,hf=1017,ff=1018,js=1020,E0=35902,w0=1021,T0=1022,Wn=1023,A0=1024,b0=1025,Ns=1026,Xs=1027,C0=1028,pf=1029,R0=1030,mf=1031,gf=1033,vl=33776,yl=33777,xl=33778,Sl=33779,kd=35840,zd=35841,Bd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,jd=37808,Xd=37809,Yd=37810,$d=37811,qd=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,Ml=36492,sh=36494,oh=36495,P0=36283,ah=36284,lh=36285,ch=36286,yS=3200,xS=3201,L0=0,SS=1,Wi="",Tn="srgb",Zs="srgb-linear",yc="linear",ot="srgb",Xr=7680,jp=519,MS=512,ES=513,wS=514,D0=515,TS=516,AS=517,bS=518,CS=519,uh=35044,Xp="300 es",xi=2e3,ql=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,dh=180/Math.PI;function ir(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function RS(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const PS={DEG2RAD:El};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],u=r[6],_=r[1],v=r[4],y=r[7],P=r[2],C=r[5],b=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*m+a*v+l*C,s[6]=o*u+a*y+l*b,s[1]=c*x+d*_+f*P,s[4]=c*m+d*v+f*C,s[7]=c*u+d*y+f*b,s[2]=h*x+p*_+g*P,s[5]=h*m+p*v+g*C,s[8]=h*u+p*y+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Ge;function N0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LS(){const t=Kl("canvas");return t.style.display="block",t}const Yp={};function Eo(t){t in Yp||(Yp[t]=!0,console.warn(t))}function DS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function NS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=Ei(t.r),t.g=Ei(t.g),t.b=Ei(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=Is(t.r),t.g=Is(t.g),t.b=Is(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Wi?yc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Is(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],qp=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Zs]:{primaries:$p,whitePoint:Kp,transfer:yc,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:$p,whitePoint:Kp,transfer:ot,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:qp,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let Yr;class US{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=Kl("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ei(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FS=0;class I0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class tn extends Vr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=br,r=br,s=ti,o=Cr,a=Wn,l=Ci,c=tn.DEFAULT_ANISOTROPY,d=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ir(),this.name="",this.source=new I0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=x0;tn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,P=(u+1)/2,C=(d+h)/4,b=(f+x)/4,R=(g+m)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-d)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new I0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends kS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class U0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||c!==p||d!==g){let m=1-a;const u=l*h+c*p+d*g+f*x,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,d=d*m+g*y,f=f*m+x*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*f+l*p-c*h,e[n+1]=l*g+d*h+c*f-a*p,e[n+2]=c*g+d*p+a*h-l*f,e[n+3]=d*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"YZX":this._x=h*d*f+c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f-h*p*g;break;case"XZY":this._x=h*d*f-c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new N,Qp=new kr;class zr{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Da.subVectors(this.max,uo),$r.subVectors(e.a,uo),qr.subVectors(e.b,uo),Kr.subVectors(e.c,uo),Ii.subVectors(qr,$r),Ui.subVectors(Kr,qr),fr.subVectors($r,Kr);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-fr.z,fr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,fr.z,0,-fr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-fr.y,fr.x,0];return!Qc(n,$r,qr,Kr,Da)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,$r,qr,Kr,Da))?!1:(Na.crossVectors(Ii,Ui),n=[Na.x,Na.y,Na.z],Qc(n,$r,qr,Kr,Da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,La=new zr,$r=new N,qr=new N,Kr=new N,Ii=new N,Ui=new N,fr=new N,uo=new N,Da=new N,Na=new N,pr=new N;function Qc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),d=i.dot(pr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const BS=new zr,ho=new N,eu=new N;class aa{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(eu)),this.expandByPoint(ho.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new N,tu=new N,Ia=new N,Fi=new N,nu=new N,Ua=new N,iu=new N;class la{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Ia.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ia),a=Fi.dot(this.direction),l=-Fi.dot(Ia),c=Fi.lengthSq(),d=Math.abs(1-o*o);let f,h,p,g;if(d>0)if(f=o*l-a,h=o*a-l,g=s*d,f>=0)if(h>=-g)if(h<=g){const x=1/d;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tu).addScaledVector(Ia,h),p}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),Ua.subVectors(i,e),iu.crossVectors(nu,Ua);let o=this.direction.dot(iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Ua.crossVectors(Fi,Ua));if(l<0)return null;const c=a*this.direction.dot(nu.cross(Fi));if(c<0||l+c>o)return null;const d=-a*Fi.dot(iu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,g,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,g=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=c*d,x=c*f;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=c*d,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,g=a*d,x=a*f;n[0]=l*d,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=x-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=o*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HS,e,VS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Oi.crossVectors(i,pn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Oi.crossVectors(i,pn)),Oi.normalize(),Fa.crossVectors(pn,Oi),r[0]=Oi.x,r[4]=Fa.x,r[8]=pn.x,r[1]=Oi.y,r[5]=Fa.y,r[9]=pn.y,r[2]=Oi.z,r[6]=Fa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],v=i[7],y=i[11],P=i[15],C=r[0],b=r[4],R=r[8],w=r[12],S=r[1],L=r[5],k=r[9],U=r[13],V=r[2],K=r[6],G=r[10],J=r[14],D=r[3],$=r[7],I=r[11],Q=r[15];return s[0]=o*C+a*S+l*V+c*D,s[4]=o*b+a*L+l*K+c*$,s[8]=o*R+a*k+l*G+c*I,s[12]=o*w+a*U+l*J+c*Q,s[1]=d*C+f*S+h*V+p*D,s[5]=d*b+f*L+h*K+p*$,s[9]=d*R+f*k+h*G+p*I,s[13]=d*w+f*U+h*J+p*Q,s[2]=g*C+x*S+m*V+u*D,s[6]=g*b+x*L+m*K+u*$,s[10]=g*R+x*k+m*G+u*I,s[14]=g*w+x*U+m*J+u*Q,s[3]=_*C+v*S+y*V+P*D,s[7]=_*b+v*L+y*K+P*$,s[11]=_*R+v*k+y*G+P*I,s[15]=_*w+v*U+y*J+P*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=f*m*c-x*h*c+x*l*p-a*m*p-f*l*u+a*h*u,v=g*h*c-d*m*c-g*l*p+o*m*p+d*l*u-o*h*u,y=d*x*c-g*f*c+g*a*p-o*x*p-d*a*u+o*f*u,P=g*f*l-d*x*l-g*a*h+o*x*h+d*a*m-o*f*m,C=n*_+i*v+r*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=_*b,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*u-i*h*u)*b,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*b,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=v*b,e[5]=(d*m*s-g*h*s+g*r*p-n*m*p-d*r*u+n*h*u)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(g*f*s-d*x*s-g*i*p+n*x*p+d*i*u-n*f*u)*b,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=P*b,e[13]=(d*x*r-g*f*r+g*i*h-n*x*h-d*i*m+n*f*m)*b,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,g=s*f,x=o*d,m=o*f,u=a*f,_=l*c,v=l*d,y=l*f,P=i.x,C=i.y,b=i.z;return r[0]=(1-(x+u))*P,r[1]=(p+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+v)*b,r[9]=(m-_)*b,r[10]=(1-(h+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,d=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===xi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ql)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*d;let g,x;if(a===xi)g=(o+s)*f,x=-2*f;else if(a===ql)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new N,zn=new ct,HS=new N(0,0,0),VS=new N(1,1,1),Oi=new N,Fa=new N,pn=new N,em=new ct,tm=new kr;class ri{constructor(e=0,n=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const nm=new N,Jr=new kr,ci=new ct,Oa=new N,fo=new N,WS=new N,jS=new kr,im=new N(1,0,0),rm=new N(0,1,0),sm=new N(0,0,1),om={type:"added"},XS={type:"removed"},Qr={type:"childadded",child:null},ru={type:"childremoved",child:null};class Dt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,n=new ri,i=new kr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oa.copy(e):Oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(fo,Oa,this.up):ci.lookAt(Oa,fo,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(ci),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XS),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,WS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new N,ui=new N,su=new N,di=new N,es=new N,ts=new N,am=new N,ou=new N,au=new N,lu=new N,cu=new Tt,uu=new Tt,du=new Tt;class Rn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),ui.subVectors(i,n),su.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(ui),l=Bn.dot(su),c=ui.dot(ui),d=ui.dot(su),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return cu.setScalar(0),uu.setScalar(0),du.setScalar(0),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cu,s.x),o.addScaledVector(uu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),ui.subVectors(e,n),Bn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Bn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),ou.subVectors(e,i);const l=es.dot(ou),c=ts.dot(ou);if(l<=0&&c<=0)return n.copy(i);au.subVectors(e,r);const d=es.dot(au),f=ts.dot(au);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(es,o);lu.subVectors(e,s);const p=es.dot(lu),g=ts.dot(lu);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ts,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return am.subVectors(s,r),a=(f-d)/(f-d+(p-g)),n.copy(r).addScaledVector(am,a);const u=1/(m+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ka={h:0,s:0,l:0};function hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=RS(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hu(o,s,e+1/3),this.g=hu(o,s,e),this.b=hu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(zt(Yt.r*255,0,255))*65536+Math.round(zt(Yt.g*255,0,255))*256+Math.round(zt(Yt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tn){Je.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(ka);const i=qc(ki.h,ka.h,n),r=qc(ki.s,ka.s,n),s=qc(ki.l,ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new $e;$e.NAMES=F0;let YS=0;class dr extends Vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=ir(),this.name="",this.blending=Ds,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O0 extends dr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,za=new Me;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)za.fromBufferAttribute(this,n),za.applyMatrix3(e),this.setXY(n,za.x,za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class k0 extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z0 extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pt extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $S=0;const En=new ct,fu=new Dt,ns=new N,mn=new zr,po=new zr,Ut=new N;class Vt extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?z0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(mn.min,po.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,po.max),mn.expandByPoint(Ut)):(mn.expandByPoint(po.min),mn.expandByPoint(po.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ut.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Ut.add(ns)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,d=new N,f=new N,h=new Me,p=new Me,g=new Me,x=new N,m=new N;function u(R,w,S){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),d.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[R].add(x),a[w].add(x),a[S].add(x),l[R].add(m),l[w].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,w=_.length;R<w;++R){const S=_[R],L=S.start,k=S.count;for(let U=L,V=L+k;U<V;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new N,y=new N,P=new N,C=new N;function b(R){P.fromBufferAttribute(r,R),C.copy(P);const w=a[R];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(C,w);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,w=_.length;R<w;++R){const S=_[R],L=S.start,k=S.count;for(let U=L,V=L+k;U<V;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let u=0;u<d;u++)h[g++]=c[p++]}return new Dn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new ct,mr=new la,Ba=new aa,cm=new N,Ha=new N,Va=new N,Ga=new N,pu=new N,Wa=new N,um=new N,ja=new N;class Ie extends Dt{constructor(e=new Vt,n=new O0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(pu.fromBufferAttribute(f,e),o?Wa.addScaledVector(pu,d):Wa.addScaledVector(pu.sub(n),d))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Ba.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ba,cm)===null||mr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const C=a.getX(y),b=a.getX(y+1),R=a.getX(y+2);r=Xa(this,u,e,i,c,d,f,C,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Xa(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const C=y,b=y+1,R=y+2;r=Xa(this,u,e,i,c,d,f,C,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const _=m,v=m+1,y=m+2;r=Xa(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qS(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function Xa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ha),t.getVertexPosition(l,Va),t.getVertexPosition(c,Ga);const d=qS(t,e,n,i,Ha,Va,Ga,um);if(d){const f=new N;Rn.getBarycoord(um,Ha,Va,Ga,f),r&&(d.uv=Rn.getInterpolatedAttribute(r,a,l,c,f,new Me)),s&&(d.uv1=Rn.getInterpolatedAttribute(s,a,l,c,f,new Me)),o&&(d.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Rn.getNormal(Ha,Va,Ga,h.normal),d.face=h,d.barycoord=f}return d}class ht extends Vt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function g(x,m,u,_,v,y,P,C,b,R,w){const S=y/b,L=P/R,k=y/2,U=P/2,V=C/2,K=b+1,G=R+1;let J=0,D=0;const $=new N;for(let I=0;I<G;I++){const Q=I*L-U;for(let ce=0;ce<K;ce++){const be=ce*S-k;$[x]=be*_,$[m]=Q*v,$[u]=V,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[u]=C>0?1:-1,d.push($.x,$.y,$.z),f.push(ce/b),f.push(1-I/R),J+=1}}for(let I=0;I<R;I++)for(let Q=0;Q<b;Q++){const ce=h+Q+K*I,be=h+Q+K*(I+1),W=h+(Q+1)+K*(I+1),ne=h+(Q+1)+K*I;l.push(ce,be,ne),l.push(be,W,ne),D+=6}a.addGroup(p,D,w),p+=D,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function KS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const ZS={clone:Ys,merge:Jt};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends dr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H0 extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,dm=new Me,hm=new Me;class Cn extends H0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(El*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class eM extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new Cn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new Cn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new Cn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new Cn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new Cn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class V0 extends tn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ht(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:tr});s.uniforms.tEquirect.value=n;const o=new Ie(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=ti),new eM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mu=new N,nM=new N,iM=new Ge;class mi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(nM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iM.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new aa,Ya=new N;class vf{constructor(e=new mi,n=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],u=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-u).normalize(),i[1].setComponents(l+s,h+c,m+p,y+u).normalize(),i[2].setComponents(l+o,h+d,m+g,y+_).normalize(),i[3].setComponents(l-o,h-d,m-g,y-_).normalize(),i[4].setComponents(l-a,h-f,m-x,y-v).normalize(),n===xi)i[5].setComponents(l+a,h+f,m+x,y+v).normalize();else if(n===ql)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ya.x=r.normal.x>0?e.max.x:e.min.x,Ya.y=r.normal.y>0?e.max.y:e.min.y,Ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ca extends Vt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<d;u++){const _=u*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,y=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;p.push(v,y,C),p.push(y,P,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var sM=`#ifdef USE_ALPHAHASH
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
}`,Xe={alphahash_fragment:sM,alphahash_pars_fragment:oM,alphamap_fragment:aM,alphamap_pars_fragment:lM,alphatest_fragment:cM,alphatest_pars_fragment:uM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:yM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:wM,color_pars_fragment:TM,color_pars_vertex:AM,color_vertex:bM,common:CM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:PM,displacementmap_pars_vertex:LM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:IM,colorspace_fragment:UM,colorspace_pars_fragment:FM,envmap_fragment:OM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:ZM,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:jM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:qM,lights_pars_begin:KM,lights_toon_fragment:JM,lights_toon_pars_fragment:QM,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:dE,map_pars_fragment:hE,map_particle_fragment:fE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:yE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:wE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:LE,opaque_fragment:DE,packing:NE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:FE,dithering_pars_fragment:OE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:HE,shadowmap_vertex:VE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:jE,skinning_vertex:XE,skinnormal_vertex:YE,specularmap_fragment:$E,specularmap_pars_fragment:qE,tonemapping_fragment:KE,tonemapping_pars_fragment:ZE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:ew,uv_pars_vertex:tw,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:ow,backgroundCube_frag:aw,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:dw,distanceRGBA_vert:hw,distanceRGBA_frag:fw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:gw,linedashed_frag:_w,meshbasic_vert:vw,meshbasic_frag:yw,meshlambert_vert:xw,meshlambert_frag:Sw,meshmatcap_vert:Mw,meshmatcap_frag:Ew,meshnormal_vert:ww,meshnormal_frag:Tw,meshphong_vert:Aw,meshphong_frag:bw,meshphysical_vert:Cw,meshphysical_frag:Rw,meshtoon_vert:Pw,meshtoon_frag:Lw,points_vert:Dw,points_frag:Nw,shadow_vert:Iw,shadow_frag:Uw,sprite_vert:Fw,sprite_frag:Ow},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Jn={basic:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Jt([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Jt([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Jt([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Jt([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Jt([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Jn.physical={uniforms:Jt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const $a={r:0,b:0,g:0},_r=new ri,kw=new ct;function zw(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?u(a,l):y&&y.isColor&&(u(y,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===vc)?(d===void 0&&(d=new Ie(new ht(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Ys(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_r.copy(v.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(_r)),d.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,(f!==y||h!==y.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ie(new ca(2,2),new ar({name:"BackgroundMaterial",uniforms:Ys(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB($a,B0(t)),i.buffers.color.setClear($a.r,$a.g,$a.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:m}}function Bw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,k,U,V){let K=!1;const G=f(U,k,L);s!==G&&(s=G,c(s.object)),K=p(S,U,k,V),K&&g(S,U,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,L,k,U),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,L,k){const U=k.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let K=V[L.id];K===void 0&&(K={},V[L.id]=K);let G=K[U];return G===void 0&&(G=h(l()),K[U]=G),G}function h(S){const L=[],k=[],U=[];for(let V=0;V<n;V++)L[V]=0,k[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,L,k,U){const V=s.attributes,K=L.attributes;let G=0;const J=k.getAttributes();for(const D in J)if(J[D].location>=0){const I=V[D];let Q=K[D];if(Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(S,L,k,U){const V={},K=L.attributes;let G=0;const J=k.getAttributes();for(const D in J)if(J[D].location>=0){let I=K[D];I===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),V[D]=Q,G++}s.attributes=V,s.attributesNum=G,s.index=U}function x(){const S=s.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){u(S,0)}function u(S,L){const k=s.newAttributes,U=s.enabledAttributes,V=s.attributeDivisors;k[S]=1,U[S]===0&&(t.enableVertexAttribArray(S),U[S]=1),V[S]!==L&&(t.vertexAttribDivisor(S,L),V[S]=L)}function _(){const S=s.newAttributes,L=s.enabledAttributes;for(let k=0,U=L.length;k<U;k++)L[k]!==S[k]&&(t.disableVertexAttribArray(k),L[k]=0)}function v(S,L,k,U,V,K,G){G===!0?t.vertexAttribIPointer(S,L,k,V,K):t.vertexAttribPointer(S,L,k,U,V,K)}function y(S,L,k,U){x();const V=U.attributes,K=k.getAttributes(),G=L.defaultAttributeValues;for(const J in K){const D=K[J];if(D.location>=0){let $=V[J];if($===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const I=$.normalized,Q=$.itemSize,ce=e.get($);if(ce===void 0)continue;const be=ce.buffer,W=ce.type,ne=ce.bytesPerElement,me=W===t.INT||W===t.UNSIGNED_INT||$.gpuType===df;if($.isInterleavedBufferAttribute){const he=$.data,Ne=he.stride,Ue=$.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<D.locationSize;Be++)u(D.location+Be,he.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<D.locationSize;Be++)m(D.location+Be);t.bindBuffer(t.ARRAY_BUFFER,be);for(let Be=0;Be<D.locationSize;Be++)v(D.location+Be,Q/D.locationSize,W,I,Ne*ne,(Ue+Q/D.locationSize*Be)*ne,me)}else{if($.isInstancedBufferAttribute){for(let he=0;he<D.locationSize;he++)u(D.location+he,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let he=0;he<D.locationSize;he++)m(D.location+he);t.bindBuffer(t.ARRAY_BUFFER,be);for(let he=0;he<D.locationSize;he++)v(D.location+he,Q/D.locationSize,W,I,Q*ne,Q/D.locationSize*he*ne,me)}}else if(G!==void 0){const I=G[J];if(I!==void 0)switch(I.length){case 2:t.vertexAttrib2fv(D.location,I);break;case 3:t.vertexAttrib3fv(D.location,I);break;case 4:t.vertexAttrib4fv(D.location,I);break;default:t.vertexAttrib1fv(D.location,I)}}}}_()}function P(){R();for(const S in i){const L=i[S];for(const k in L){const U=L[k];for(const V in U)d(U[V].object),delete U[V];delete L[k]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const k in L){const U=L[k];for(const V in U)d(U[V].object),delete U[V];delete L[k]}delete i[S.id]}function b(S){for(const L in i){const k=i[L];if(k[S.id]===void 0)continue;const U=k[S.id];for(const V in U)d(U[V].object),delete U[V];delete k[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Hw(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Wn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ci&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==yi&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:C}}function Gw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new mi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,v=_*4;let y=u.clippingState||null;l.value=y,y=d(g,h,v,p);for(let P=0;P!==v;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ww(t){let e=new WeakMap;function n(o,a){return a===Id?o.mapping=Gs:a===Ud&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Id||a===Ud)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class W0 extends H0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,fm=[.125,.215,.35,.446,.526,.582],Er=20,gu=new W0,pm=new $e;let _u=null,vu=0,yu=0,xu=!1;const Sr=(1+Math.sqrt(5))/2,ss=1/Sr,mm=[new N(-Sr,ss,0),new N(Sr,ss,0),new N(-ss,0,Sr),new N(ss,0,Sr),new N(0,Sr,-ss),new N(0,Sr,ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,vu,yu),this._renderer.xr.enabled=xu,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:oa,format:Wn,colorSpace:Zs,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jw(s)),this._blurMaterial=Xw(s,e,n)}return r}_compileMaterial(e){const n=new Ie(this._lodPlanes[0],e);this._renderer.compile(n,gu)}_sceneToCubeUV(e,n,i,r){const a=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(pm),d.toneMapping=nr,d.autoClear=!1;const p=new O0({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Ie(new ht,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(pm),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;qa(r,_*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ie(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const u=[];let _=0;for(let b=0;b<Er;++b){const R=b/x,w=Math.exp(-R*R/2);u.push(w),b===0?_+=w:b<m&&(_+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-ws?r-v+ws:0),C=4*(this._cubeSize-y);qa(n,P,C,3*y,2*y),l.setRenderTarget(n),l.render(f,gu)}}function jw(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=fm[o-t+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,R=C>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(w,x*g*C),v.set(h,m*g*C);const S=[C,C,C,C,C,C];y.set(S,u*g*C)}const P=new Vt;P.setAttribute("position",new Dn(_,x)),P.setAttribute("uv",new Dn(v,m)),P.setAttribute("faceIndex",new Dn(y,u)),e.push(P),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Xw(t,e,n){const i=new Float32Array(Er),r=new N(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function vm(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function ym(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function Yw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Id||l===Ud,d=l===Gs||l===Ws;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new gm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $w(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const P=_[v+0],C=_[v+1],b=_[v+2];h.push(P,C,C,b,b,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const P=v+0,C=v+1,b=v+2;h.push(P,C,C,b,b,P)}}else return;const m=new(N0(h)?z0:k0)(h,1);m.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Kw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*x[_];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Zw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jw(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let w=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*P*4*f),b=new U0(C,y,P,f);b.type=yi,b.needsUpdate=!0;const R=v*4;for(let S=0;S<f;S++){const L=m[S],k=u[S],U=_[S],V=y*P*4*S;for(let K=0;K<L.count;K++){const G=K*R;p===!0&&(r.fromBufferAttribute(L,K),C[V+G+0]=r.x,C[V+G+1]=r.y,C[V+G+2]=r.z,C[V+G+3]=0),g===!0&&(r.fromBufferAttribute(k,K),C[V+G+4]=r.x,C[V+G+5]=r.y,C[V+G+6]=r.z,C[V+G+7]=0),x===!0&&(r.fromBufferAttribute(U,K),C[V+G+8]=r.x,C[V+G+9]=r.y,C[V+G+10]=r.z,C[V+G+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Me(y,P)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Qw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class j0 extends tn{constructor(e,n,i,r,s,o,a,l,c,d=Ns){if(d!==Ns&&d!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ns&&(i=Fr),i===void 0&&d===Xs&&(i=js),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const X0=new tn,xm=new j0(1,1),Y0=new U0,$0=new zS,q0=new V0,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function e1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function r1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),It(n,i)}}function s1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),It(n,i)}}function o1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),It(n,i)}}function a1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function d1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function m1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xm.compareFunction=D0,s=xm):s=X0,n.setTexture2D(e||s,r)}function g1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$0,r)}function _1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q0,r)}function v1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Y0,r)}function y1(t){switch(t){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return h1;case 36295:return f1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function x1(t,e){t.uniform1fv(this.addr,e)}function S1(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function M1(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function E1(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function w1(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function T1(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function A1(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function b1(t,e){t.uniform1iv(this.addr,e)}function C1(t,e){t.uniform2iv(this.addr,e)}function R1(t,e){t.uniform3iv(this.addr,e)}function P1(t,e){t.uniform4iv(this.addr,e)}function L1(t,e){t.uniform1uiv(this.addr,e)}function D1(t,e){t.uniform2uiv(this.addr,e)}function N1(t,e){t.uniform3uiv(this.addr,e)}function I1(t,e){t.uniform4uiv(this.addr,e)}function U1(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||X0,s[o])}function F1(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$0,s[o])}function O1(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||q0,s[o])}function k1(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Y0,s[o])}function z1(t){switch(t){case 5126:return x1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return w1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return b1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}class B1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=y1(n.type)}}class H1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=z1(n.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function G1(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(n,c===void 0?new B1(a,t,e):new H1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new V1(a),Am(n,f)),n=f}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);G1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const W1=37297;let j1=0;function X1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Cm=new Ge;function Y1(t){Je._getMatrix(Cm,Je.workingColorSpace,t);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case yc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+X1(t.getShaderSource(e),o)}else return r}function $1(t,e){const n=Y1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function q1(t,e){let n;switch(e){case dS:n="Linear";break;case hS:n="Reinhard";break;case fS:n="Cineon";break;case pS:n="ACESFilmic";break;case gS:n="AgX";break;case _S:n="Neutral";break;case mS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ka=new N;function K1(){Je.getLuminanceCoefficients(Ka);const t=Ka.x.toFixed(4),e=Ka.y.toFixed(4),n=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function J1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function wo(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(t){return t.replace(eT,nT)}const tT=new Map;function nT(t,e){let n=Xe[e];if(n===void 0){const i=tT.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(n)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(iT,rT)}function rT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function sT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function oT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case cS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function cT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sT(n),c=oT(n),d=aT(n),f=lT(n),h=cT(n),p=Z1(n),g=J1(s),x=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(wo).join(`
`),u.length>0&&(u+=`
`)):(m=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),u=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==nr?q1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wo).join(`
`)),o=hh(o),o=Pm(o,n),o=Lm(o,n),a=hh(a),a=Pm(a,n),a=Lm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+o,y=_+u+a,P=bm(r,r.VERTEX_SHADER,v),C=bm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(L){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(C).trim();let K=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,C);else{const J=Rm(r,P,"vertex"),D=Rm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+J+`
`+D)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||V==="")&&(G=!1);G&&(L.diagnostics={runnable:K,programLog:k,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:u}})}r.deleteShader(P),r.deleteShader(C),R=new wl(r,x),w=Q1(r,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,W1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let dT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function pT(t,e,n,i,r,s,o){const a=new _f,l=new hT,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,k,U){const V=k.fog,K=U.geometry,G=w.isMeshStandardMaterial?k.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||G),D=J&&J.mapping===vc?J.image.height:null,$=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const I=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Q=I!==void 0?I.length:0;let ce=0;K.morphAttributes.position!==void 0&&(ce=1),K.morphAttributes.normal!==void 0&&(ce=2),K.morphAttributes.color!==void 0&&(ce=3);let be,W,ne,me;if($){const rt=Jn[$];be=rt.vertexShader,W=rt.fragmentShader}else be=w.vertexShader,W=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),me=l.getFragmentShaderID(w);const he=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,Ye=!!w.map,ze=!!w.matcap,tt=!!J,O=!!w.aoMap,j=!!w.lightMap,ie=!!w.bumpMap,le=!!w.normalMap,ee=!!w.displacementMap,X=!!w.emissiveMap,te=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,se=w.dispersion>0,ae=w.iridescence>0,re=w.sheen>0,Le=w.transmission>0,ve=M&&!!w.anisotropyMap,we=H&&!!w.clearcoatMap,Ze=H&&!!w.clearcoatNormalMap,fe=H&&!!w.clearcoatRoughnessMap,Te=ae&&!!w.iridescenceMap,Fe=ae&&!!w.iridescenceThicknessMap,Oe=re&&!!w.sheenColorMap,Ae=re&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,We=!!w.specularColorMap,ut=!!w.specularIntensityMap,F=Le&&!!w.transmissionMap,_e=Le&&!!w.thicknessMap,Z=!!w.gradientMap,oe=!!w.alphaMap,Se=w.alphaTest>0,ye=!!w.alphaHash,He=!!w.extensions;let Et=nr;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Gt={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:W,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Zs,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:ze,envMap:tt,envMapMode:tt&&J.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:j,bumpMap:ie,normalMap:le,displacementMap:h&&ee,emissiveMap:X,normalMapObjectSpace:le&&w.normalMapType===SS,normalMapTangentSpace:le&&w.normalMapType===L0,metalnessMap:te,roughnessMap:A,anisotropy:M,anisotropyMap:ve,clearcoat:H,clearcoatMap:we,clearcoatNormalMap:Ze,clearcoatRoughnessMap:fe,dispersion:se,iridescence:ae,iridescenceMap:Te,iridescenceThicknessMap:Fe,sheen:re,sheenColorMap:Oe,sheenRoughnessMap:Ae,specularMap:Ke,specularColorMap:We,specularIntensityMap:ut,transmission:Le,transmissionMap:F,thicknessMap:_e,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Ds&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:ye,combine:w.combine,mapUv:Ye&&x(w.map.channel),aoMapUv:O&&x(w.aoMap.channel),lightMapUv:j&&x(w.lightMap.channel),bumpMapUv:ie&&x(w.bumpMap.channel),normalMapUv:le&&x(w.normalMap.channel),displacementMapUv:ee&&x(w.displacementMap.channel),emissiveMapUv:X&&x(w.emissiveMap.channel),metalnessMapUv:te&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:ve&&x(w.anisotropyMap.channel),clearcoatMapUv:we&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(w.sheenRoughnessMap.channel),specularMapUv:Ke&&x(w.specularMap.channel),specularColorMapUv:We&&x(w.specularColorMap.channel),specularIntensityMapUv:ut&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:_e&&x(w.thicknessMap.channel),alphaMapUv:oe&&x(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(le||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!K.attributes.uv&&(Ye||oe),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:U.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:X&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(_(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=g[w.type];let L;if(S){const k=Jn[S];L=ZS.clone(k.uniforms)}else L=w.uniforms;return L}function P(w,S){let L;for(let k=0,U=d.length;k<U;k++){const V=d[k];if(V.cacheKey===S){L=V,++L.usedTimes;break}}return L===void 0&&(L=new uT(t,S,w,s),d.push(L)),L}function C(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:b,programs:d,dispose:R}}function mT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,h,p,g,x,m){const u=o(f,h,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,g,x,m){const u=o(f,h,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||gT),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function _T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Um,t.set(i,[o])):r>=s.length?(o=new Um,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new $e};break;case"SpotLight":n={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function yT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function ST(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MT(t){const e=new vT,n=yT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ct,o=new ct;function a(c){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,_=0,v=0,y=0,P=0,C=0,b=0;c.sort(ST);for(let w=0,S=c.length;w<S;w++){const L=c[w],k=L.color,U=L.intensity,V=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*U,f+=k.g*U,h+=k.b*U;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],U);b++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(U),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[x]=G;const J=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,J.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=J.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=K,y++}x++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(k).multiplyScalar(U),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const J=L.shadow,D=n.get(L);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(U),G.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[u]=G,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==P||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=P,R.numLightProbes=b,i.version=xT++)}function l(c,d){let f=0,h=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new MT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ET(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fm(t),e.set(r,[a])):s>=o.length?(a=new Fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class wT extends dr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TT extends dr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AT=`void main() {
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
}`;function CT(t,e,n){let i=new vf;const r=new Me,s=new Me,o=new Tt,a=new wT({depthPacking:xS}),l=new TT,c={},d=n.maxTextureSize,f={[or]:hn,[hn]:or,[gi]:gi},h=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:AT,fragmentShader:bT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let u=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),k=t.state;k.setBlending(tr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=u!==hi&&this.type===hi,V=u===hi&&this.type!==hi;for(let K=0,G=C.length;K<G;K++){const J=C[K],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,D.mapSize.y=s.y)),D.map===null||U===!0||V===!0){const Q=this.type!==hi?{minFilter:Yn,magFilter:Yn}:{};D.map!==null&&D.map.dispose(),D.map=new Or(r.x,r.y,Q),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const I=D.getViewportCount();for(let Q=0;Q<I;Q++){const ce=D.getViewport(Q);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),k.viewport(o),D.updateMatrices(J,Q),i=D.getFrustum(),y(b,R,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===hi&&_(D,R),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,L)};function _(C,b){const R=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,R,p,x,null)}function v(C,b,R,w){let S=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=S.uuid,U=b.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let K=V[U];K===void 0&&(K=S.clone(),V[U]=K,b.addEventListener("dispose",P)),S=K}if(S.visible=b.visible,S.wireframe=b.wireframe,w===hi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=R}return S}function y(C,b,R,w,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const U=e.update(C),V=C.material;if(Array.isArray(V)){const K=U.groups;for(let G=0,J=K.length;G<J;G++){const D=K[G],$=V[D.materialIndex];if($&&$.visible){const I=v(C,$,w,S);C.onBeforeShadow(t,C,b,R,U,I,D),t.renderBufferDirect(R,null,U,I,C,D),C.onAfterShadow(t,C,b,R,U,I,D)}}}else if(V.visible){const K=v(C,V,w,S);C.onBeforeShadow(t,C,b,R,U,K,null),t.renderBufferDirect(R,null,U,K,C,null),C.onAfterShadow(t,C,b,R,U,K,null)}}const k=C.children;for(let U=0,V=k.length;U<V;U++)y(k[U],b,R,w,S)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const w=c[R],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const RT={[bd]:Cd,[Rd]:Dd,[Pd]:Nd,[Vs]:Ld,[Cd]:bd,[Dd]:Rd,[Nd]:Pd,[Ld]:Vs};function PT(t,e){function n(){let F=!1;const _e=new Tt;let Z=null;const oe=new Tt(0,0,0,0);return{setMask:function(Se){Z!==Se&&!F&&(t.colorMask(Se,Se,Se,Se),Z=Se)},setLocked:function(Se){F=Se},setClear:function(Se,ye,He,Et,Gt){Gt===!0&&(Se*=Et,ye*=Et,He*=Et),_e.set(Se,ye,He,Et),oe.equals(_e)===!1&&(t.clearColor(Se,ye,He,Et),oe.copy(_e))},reset:function(){F=!1,Z=null,oe.set(-1,0,0,0)}}}function i(){let F=!1,_e=!1,Z=null,oe=null,Se=null;return{setReversed:function(ye){if(_e!==ye){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Et=Se;Se=null,this.setClear(Et)}_e=ye},getReversed:function(){return _e},setTest:function(ye){ye?he(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!F&&(t.depthMask(ye),Z=ye)},setFunc:function(ye){if(_e&&(ye=RT[ye]),oe!==ye){switch(ye){case bd:t.depthFunc(t.NEVER);break;case Cd:t.depthFunc(t.ALWAYS);break;case Rd:t.depthFunc(t.LESS);break;case Vs:t.depthFunc(t.LEQUAL);break;case Pd:t.depthFunc(t.EQUAL);break;case Ld:t.depthFunc(t.GEQUAL);break;case Dd:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=ye}},setLocked:function(ye){F=ye},setClear:function(ye){Se!==ye&&(_e&&(ye=1-ye),t.clearDepth(ye),Se=ye)},reset:function(){F=!1,Z=null,oe=null,Se=null,_e=!1}}}function r(){let F=!1,_e=null,Z=null,oe=null,Se=null,ye=null,He=null,Et=null,Gt=null;return{setTest:function(rt){F||(rt?he(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(rt){_e!==rt&&!F&&(t.stencilMask(rt),_e=rt)},setFunc:function(rt,Un,si){(Z!==rt||oe!==Un||Se!==si)&&(t.stencilFunc(rt,Un,si),Z=rt,oe=Un,Se=si)},setOp:function(rt,Un,si){(ye!==rt||He!==Un||Et!==si)&&(t.stencilOp(rt,Un,si),ye=rt,He=Un,Et=si)},setLocked:function(rt){F=rt},setClear:function(rt){Gt!==rt&&(t.clearStencil(rt),Gt=rt)},reset:function(){F=!1,_e=null,Z=null,oe=null,Se=null,ye=null,He=null,Et=null,Gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,P=null,C=null,b=new $e(0,0,0),R=0,w=!1,S=null,L=null,k=null,U=null,V=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(D)[1]),G=J>=1):D.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),G=J>=2);let $=null,I={};const Q=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),be=new Tt().fromArray(Q),W=new Tt().fromArray(ce);function ne(F,_e,Z,oe){const Se=new Uint8Array(4),ye=t.createTexture();t.bindTexture(F,ye),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<Z;He++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(_e+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ye}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(t.DEPTH_TEST),o.setFunc(Vs),ie(!1),le(Vp),he(t.CULL_FACE),O(tr);function he(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function Ne(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ue(F,_e){return f[F]!==_e?(t.bindFramebuffer(F,_e),f[F]=_e,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=_e),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Be(F,_e){let Z=p,oe=!1;if(F){Z=h.get(_e),Z===void 0&&(Z=[],h.set(_e,Z));const Se=F.textures;if(Z.length!==Se.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,He=Se.length;ye<He;ye++)Z[ye]=t.COLOR_ATTACHMENT0+ye;Z.length=Se.length,oe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,oe=!0);oe&&t.drawBuffers(Z)}function Ye(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const ze={[Mr]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[Yx]:t.FUNC_REVERSE_SUBTRACT};ze[$x]=t.MIN,ze[qx]=t.MAX;const tt={[Kx]:t.ZERO,[Zx]:t.ONE,[Jx]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[rS]:t.SRC_ALPHA_SATURATE,[nS]:t.DST_COLOR,[eS]:t.DST_ALPHA,[Qx]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[iS]:t.ONE_MINUS_DST_COLOR,[tS]:t.ONE_MINUS_DST_ALPHA,[sS]:t.CONSTANT_COLOR,[oS]:t.ONE_MINUS_CONSTANT_COLOR,[aS]:t.CONSTANT_ALPHA,[lS]:t.ONE_MINUS_CONSTANT_ALPHA};function O(F,_e,Z,oe,Se,ye,He,Et,Gt,rt){if(F===tr){x===!0&&(Ne(t.BLEND),x=!1);return}if(x===!1&&(he(t.BLEND),x=!0),F!==jx){if(F!==m||rt!==w){if((u!==Mr||y!==Mr)&&(t.blendEquation(t.FUNC_ADD),u=Mr,y=Mr),rt)switch(F){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,v=null,P=null,C=null,b.set(0,0,0),R=0,m=F,w=rt}return}Se=Se||_e,ye=ye||Z,He=He||oe,(_e!==u||Se!==y)&&(t.blendEquationSeparate(ze[_e],ze[Se]),u=_e,y=Se),(Z!==_||oe!==v||ye!==P||He!==C)&&(t.blendFuncSeparate(tt[Z],tt[oe],tt[ye],tt[He]),_=Z,v=oe,P=ye,C=He),(Et.equals(b)===!1||Gt!==R)&&(t.blendColor(Et.r,Et.g,Et.b,Gt),b.copy(Et),R=Gt),m=F,w=!1}function j(F,_e){F.side===gi?Ne(t.CULL_FACE):he(t.CULL_FACE);let Z=F.side===hn;_e&&(Z=!Z),ie(Z),F.blending===Ds&&F.transparent===!1?O(tr):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),X(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function le(F){F!==Vx?(he(t.CULL_FACE),F!==L&&(F===Vp?t.cullFace(t.BACK):F===Gx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),L=F}function ee(F){F!==k&&(G&&t.lineWidth(F),k=F)}function X(F,_e,Z){F?(he(t.POLYGON_OFFSET_FILL),(U!==_e||V!==Z)&&(t.polygonOffset(_e,Z),U=_e,V=Z)):Ne(t.POLYGON_OFFSET_FILL)}function te(F){F?he(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function A(F){F===void 0&&(F=t.TEXTURE0+K-1),$!==F&&(t.activeTexture(F),$=F)}function M(F,_e,Z){Z===void 0&&($===null?Z=t.TEXTURE0+K-1:Z=$);let oe=I[Z];oe===void 0&&(oe={type:void 0,texture:void 0},I[Z]=oe),(oe.type!==F||oe.texture!==_e)&&($!==Z&&(t.activeTexture(Z),$=Z),t.bindTexture(F,_e||me[F]),oe.type=F,oe.texture=_e)}function H(){const F=I[$];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){be.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),be.copy(F))}function Ae(F){W.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),W.copy(F))}function Ke(F,_e){let Z=c.get(_e);Z===void 0&&(Z=new WeakMap,c.set(_e,Z));let oe=Z.get(F);oe===void 0&&(oe=t.getUniformBlockIndex(_e,F.name),Z.set(F,oe))}function We(F,_e){const oe=c.get(_e).get(F);l.get(_e)!==oe&&(t.uniformBlockBinding(_e,oe,F.__bindingPointIndex),l.set(_e,oe))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,I={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,P=null,C=null,b=new $e(0,0,0),R=0,w=!1,S=null,L=null,k=null,U=null,V=null,be.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:Ue,drawBuffers:Be,useProgram:Ye,setBlending:O,setMaterial:j,setFlipSided:ie,setCullFace:le,setLineWidth:ee,setPolygonOffset:X,setScissorTest:te,activeTexture:A,bindTexture:M,unbindTexture:H,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:Te,texImage3D:Fe,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:fe,texSubImage2D:re,texSubImage3D:Le,compressedTexSubImage2D:ve,compressedTexSubImage3D:we,scissor:Oe,viewport:Ae,reset:ut}}function Om(t,e,n,i){const r=LT(i);switch(n){case w0:return t*e;case A0:return t*e;case b0:return t*e*2;case C0:return t*e/r.components*r.byteLength;case pf:return t*e/r.components*r.byteLength;case R0:return t*e*2/r.components*r.byteLength;case mf:return t*e*2/r.components*r.byteLength;case T0:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case gf:return t*e*4/r.components*r.byteLength;case vl:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case Bd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ml:case sh:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P0:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LT(t){switch(t){case Ci:case S0:return{byteLength:1,components:1};case ea:case M0:case oa:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case Fr:case df:case yi:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function DT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Kl("canvas")}function x(A,M,H){let se=1;const ae=te(A);if((ae.width>H||ae.height>H)&&(se=H/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const re=Math.floor(se*ae.width),Le=Math.floor(se*ae.height);f===void 0&&(f=g(re,Le));const ve=M?g(re,Le):f;return ve.width=re,ve.height=Le,ve.getContext("2d").drawImage(A,0,0,re,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Le+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,M,H,se,ae=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=M;if(M===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),M===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.RG8UI),H===t.UNSIGNED_SHORT&&(re=t.RG16UI),H===t.UNSIGNED_INT&&(re=t.RG32UI),H===t.BYTE&&(re=t.RG8I),H===t.SHORT&&(re=t.RG16I),H===t.INT&&(re=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.RGB8UI),H===t.UNSIGNED_SHORT&&(re=t.RGB16UI),H===t.UNSIGNED_INT&&(re=t.RGB32UI),H===t.BYTE&&(re=t.RGB8I),H===t.SHORT&&(re=t.RGB16I),H===t.INT&&(re=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),H===t.UNSIGNED_INT&&(re=t.RGBA32UI),H===t.BYTE&&(re=t.RGBA8I),H===t.SHORT&&(re=t.RGBA16I),H===t.INT&&(re=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),M===t.RGBA){const Le=ae?yc:Je.getTransfer(se);H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=Le===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(A,M){let H;return A?M===null||M===Fr||M===js?H=t.DEPTH24_STENCIL8:M===yi?H=t.DEPTH32F_STENCIL8:M===ea&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fr||M===js?H=t.DEPTH_COMPONENT24:M===yi?H=t.DEPTH_COMPONENT32F:M===ea&&(H=t.DEPTH_COMPONENT16),H}function P(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yn&&A.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&d.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),S(M)}function R(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,se=h.get(H);if(se){const ae=se[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(A),Object.keys(se).length===0&&h.delete(H)}i.remove(A)}function w(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const H=A.source,se=h.get(H);delete se[M.__cacheKey],o.memory.textures--}function S(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ae=0;ae<M.__webglFramebuffer[se].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[se][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)t.deleteFramebuffer(M.__webglFramebuffer[se]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=A.textures;for(let se=0,ae=H.length;se<ae;se++){const re=i.get(H[se]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(H[se])}i.remove(A)}let L=0;function k(){L=0}function U(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function V(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const H=i.get(A);if(A.isVideoTexture&&ee(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,A,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function G(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){W(H,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function J(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){W(H,A,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function D(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ne(H,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const $={[Fd]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[Od]:t.MIRRORED_REPEAT},I={[Yn]:t.NEAREST,[vS]:t.NEAREST_MIPMAP_NEAREST,[Pa]:t.NEAREST_MIPMAP_LINEAR,[ti]:t.LINEAR,[$c]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},Q={[MS]:t.NEVER,[CS]:t.ALWAYS,[ES]:t.LESS,[D0]:t.LEQUAL,[wS]:t.EQUAL,[bS]:t.GEQUAL,[TS]:t.GREATER,[AS]:t.NOTEQUAL};function ce(A,M){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===$c||M.magFilter===Pa||M.magFilter===Cr||M.minFilter===ti||M.minFilter===$c||M.minFilter===Pa||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,$[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,$[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,$[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,I[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,I[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yn||M.minFilter!==Pa&&M.minFilter!==Cr||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const se=M.source;let ae=h.get(se);ae===void 0&&(ae={},h.set(se,ae));const re=V(M);if(re!==A.__cacheKey){ae[re]===void 0&&(ae[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[re].usedTimes++;const Le=ae[A.__cacheKey];Le!==void 0&&(ae[A.__cacheKey].usedTimes--,Le.usedTimes===0&&w(M)),A.__cacheKey=re,A.__webglTexture=ae[re].texture}return H}function W(A,M,H){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ae=be(A,M),re=M.source;n.bindTexture(se,A.__webglTexture,t.TEXTURE0+H);const Le=i.get(re);if(re.version!==Le.__version||ae===!0){n.activeTexture(t.TEXTURE0+H);const ve=Je.getPrimaries(Je.workingColorSpace),we=M.colorSpace===Wi?null:Je.getPrimaries(M.colorSpace),Ze=M.colorSpace===Wi||ve===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let fe=x(M.image,!1,r.maxTextureSize);fe=X(M,fe);const Te=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type);let Oe=v(M.internalFormat,Te,Fe,M.colorSpace,M.isVideoTexture);ce(se,M);let Ae;const Ke=M.mipmaps,We=M.isVideoTexture!==!0,ut=Le.__version===void 0||ae===!0,F=re.dataReady,_e=P(M,fe);if(M.isDepthTexture)Oe=y(M.format===Xs,M.type),ut&&(We?n.texStorage2D(t.TEXTURE_2D,1,Oe,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Te,Fe,null));else if(M.isDataTexture)if(Ke.length>0){We&&ut&&n.texStorage2D(t.TEXTURE_2D,_e,Oe,Ke[0].width,Ke[0].height);for(let Z=0,oe=Ke.length;Z<oe;Z++)Ae=Ke[Z],We?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):n.texImage2D(t.TEXTURE_2D,Z,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data);M.generateMipmaps=!1}else We?(ut&&n.texStorage2D(t.TEXTURE_2D,_e,Oe,fe.width,fe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Fe,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Te,Fe,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Oe,Ke[0].width,Ke[0].height,fe.depth);for(let Z=0,oe=Ke.length;Z<oe;Z++)if(Ae=Ke[Z],M.format!==Wn)if(Te!==null)if(We){if(F)if(M.layerUpdates.size>0){const Se=Om(Ae.width,Ae.height,M.format,M.type);for(const ye of M.layerUpdates){const He=Ae.data.subarray(ye*Se/Ae.data.BYTES_PER_ELEMENT,(ye+1)*Se/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ye,Ae.width,Ae.height,1,Te,He)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ae.width,Ae.height,fe.depth,Te,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Oe,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ae.width,Ae.height,fe.depth,Te,Fe,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Oe,Ae.width,Ae.height,fe.depth,0,Te,Fe,Ae.data)}else{We&&ut&&n.texStorage2D(t.TEXTURE_2D,_e,Oe,Ke[0].width,Ke[0].height);for(let Z=0,oe=Ke.length;Z<oe;Z++)Ae=Ke[Z],M.format!==Wn?Te!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):n.texImage2D(t.TEXTURE_2D,Z,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data)}else if(M.isDataArrayTexture)if(We){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Oe,fe.width,fe.height,fe.depth),F)if(M.layerUpdates.size>0){const Z=Om(fe.width,fe.height,M.format,M.type);for(const oe of M.layerUpdates){const Se=fe.data.subarray(oe*Z/fe.data.BYTES_PER_ELEMENT,(oe+1)*Z/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,fe.width,fe.height,1,Te,Fe,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Fe,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,Te,Fe,fe.data);else if(M.isData3DTexture)We?(ut&&n.texStorage3D(t.TEXTURE_3D,_e,Oe,fe.width,fe.height,fe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Fe,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,Te,Fe,fe.data);else if(M.isFramebufferTexture){if(ut)if(We)n.texStorage2D(t.TEXTURE_2D,_e,Oe,fe.width,fe.height);else{let Z=fe.width,oe=fe.height;for(let Se=0;Se<_e;Se++)n.texImage2D(t.TEXTURE_2D,Se,Oe,Z,oe,0,Te,Fe,null),Z>>=1,oe>>=1}}else if(Ke.length>0){if(We&&ut){const Z=te(Ke[0]);n.texStorage2D(t.TEXTURE_2D,_e,Oe,Z.width,Z.height)}for(let Z=0,oe=Ke.length;Z<oe;Z++)Ae=Ke[Z],We?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Te,Fe,Ae):n.texImage2D(t.TEXTURE_2D,Z,Oe,Te,Fe,Ae);M.generateMipmaps=!1}else if(We){if(ut){const Z=te(fe);n.texStorage2D(t.TEXTURE_2D,_e,Oe,Z.width,Z.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Fe,fe)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Te,Fe,fe);m(M)&&u(se),Le.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,H){if(M.image.length!==6)return;const se=be(A,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const re=i.get(ae);if(ae.version!==re.__version||se===!0){n.activeTexture(t.TEXTURE0+H);const Le=Je.getPrimaries(Je.workingColorSpace),ve=M.colorSpace===Wi?null:Je.getPrimaries(M.colorSpace),we=M.colorSpace===Wi||Le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Ze&&!fe?Te[oe]=x(M.image[oe],!0,r.maxCubemapSize):Te[oe]=fe?M.image[oe].image:M.image[oe],Te[oe]=X(M,Te[oe]);const Fe=Te[0],Oe=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),Ke=v(M.internalFormat,Oe,Ae,M.colorSpace),We=M.isVideoTexture!==!0,ut=re.__version===void 0||se===!0,F=ae.dataReady;let _e=P(M,Fe);ce(t.TEXTURE_CUBE_MAP,M);let Z;if(Ze){We&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,Fe.width,Fe.height);for(let oe=0;oe<6;oe++){Z=Te[oe].mipmaps;for(let Se=0;Se<Z.length;Se++){const ye=Z[Se];M.format!==Wn?Oe!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,ye.width,ye.height,Oe,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,ye.width,ye.height,Oe,Ae,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,Ke,ye.width,ye.height,0,Oe,Ae,ye.data)}}}else{if(Z=M.mipmaps,We&&ut){Z.length>0&&_e++;const oe=te(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(fe){We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Oe,Ae,Te[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,Te[oe].width,Te[oe].height,0,Oe,Ae,Te[oe].data);for(let Se=0;Se<Z.length;Se++){const He=Z[Se].image[oe].image;We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,He.width,He.height,Oe,Ae,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Ke,He.width,He.height,0,Oe,Ae,He.data)}}else{We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Oe,Ae,Te[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,Oe,Ae,Te[oe]);for(let Se=0;Se<Z.length;Se++){const ye=Z[Se];We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Oe,Ae,ye.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,Ke,Oe,Ae,ye.image[oe])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),re.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,H,se,ae,re){const Le=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),we=v(H.internalFormat,Le,ve,H.colorSpace),Ze=i.get(M),fe=i.get(H);if(fe.__renderTarget=M,!Ze.__hasExternalTextures){const Te=Math.max(1,M.width>>re),Fe=Math.max(1,M.height>>re);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,re,we,Te,Fe,M.depth,0,Le,ve,null):n.texImage2D(ae,re,we,Te,Fe,0,Le,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ae,fe.__webglTexture,0,ie(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ae,fe.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const se=M.depthTexture,ae=se&&se.isDepthTexture?se.type:null,re=y(M.stencilBuffer,ae),Le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ie(M);le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,re,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,A)}else{const se=M.textures;for(let ae=0;ae<se.length;ae++){const re=se[ae],Le=s.convert(re.format,re.colorSpace),ve=s.convert(re.type),we=v(re.internalFormat,Le,ve,re.colorSpace),Ze=ie(M);H&&le(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,we,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(M.depthTexture);se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const ae=se.__webglTexture,re=ie(M);if(M.depthTexture.format===Ns)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Xs)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=se}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=t.createRenderbuffer(),he(M.__webglDepthbuffer[se],A,!1);else{const ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(A,M,H){const se=i.get(A);M!==void 0&&me(se.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ue(A)}function Ye(A){const M=A.texture,H=i.get(A),se=i.get(M);A.addEventListener("dispose",b);const ae=A.textures,re=A.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++),re){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let we=0;we<M.mipmaps.length;we++)H.__webglFramebuffer[ve][we]=t.createFramebuffer()}else H.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)H.__webglFramebuffer[ve]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ve=0,we=ae.length;ve<we;ve++){const Ze=i.get(ae[ve]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&le(A)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const we=ae[ve];H.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const Ze=s.convert(we.format,we.colorSpace),fe=s.convert(we.type),Te=v(we.internalFormat,Ze,fe,we.colorSpace,A.isXRRenderTarget===!0),Fe=ie(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),he(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ce(t.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)me(H.__webglFramebuffer[ve][we],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else me(H.__webglFramebuffer[ve],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ve=0,we=ae.length;ve<we;ve++){const Ze=ae[ve],fe=i.get(Ze);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),ce(t.TEXTURE_2D,Ze),me(H.__webglFramebuffer,A,Ze,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),m(Ze)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,se.__webglTexture),ce(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)me(H.__webglFramebuffer[we],A,M,t.COLOR_ATTACHMENT0,ve,we);else me(H.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ve,0);m(M)&&u(ve),n.unbindTexture()}A.depthBuffer&&Ue(A)}function ze(A){const M=A.textures;for(let H=0,se=M.length;H<se;H++){const ae=M[H];if(m(ae)){const re=_(A),Le=i.get(ae).__webglTexture;n.bindTexture(re,Le),u(re),n.unbindTexture()}}}const tt=[],O=[];function j(A){if(A.samples>0){if(le(A)===!1){const M=A.textures,H=A.width,se=A.height;let ae=t.COLOR_BUFFER_BIT;const re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(A),ve=M.length>1;if(ve)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<M.length;we++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ze=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,H,se,0,0,H,se,ae,t.NEAREST),l===!0&&(tt.length=0,O.length=0,tt.push(t.COLOR_ATTACHMENT0+we),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(re),O.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ze=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ie(A){return Math.min(r.maxSamples,A.samples)}function le(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ee(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function X(A,M){const H=A.colorSpace,se=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Zs&&H!==Wi&&(Je.getTransfer(H)===ot?(se!==Wn||ae!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function te(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=D,this.rebindTextures=Be,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=le}function NT(t,e){function n(i,r=Wi){let s;const o=Je.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S0)return t.BYTE;if(i===M0)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===df)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===oa)return t.HALF_FLOAT;if(i===w0)return t.ALPHA;if(i===T0)return t.RGB;if(i===Wn)return t.RGBA;if(i===A0)return t.LUMINANCE;if(i===b0)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Xs)return t.DEPTH_STENCIL;if(i===C0)return t.RED;if(i===pf)return t.RED_INTEGER;if(i===R0)return t.RG;if(i===mf)return t.RG_INTEGER;if(i===gf)return t.RGBA_INTEGER;if(i===vl||i===yl||i===xl||i===Sl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===zd||i===Bd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===Wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Gd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===sh||i===oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ml)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P0||i===ah||i===lh||i===ch)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ml)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ch)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IT extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UT={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const FT=`
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

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ar({vertexShader:FT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ie(new ca(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,g=null;const x=new kT,m=n.getContextAttributes();let u=null,_=null;const v=[],y=[],P=new Me;let C=null;const b=new Cn;b.viewport=new Tt;const R=new Cn;R.viewport=new Tt;const w=[b,R],S=new IT;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=v[W];return ne===void 0&&(ne=new Mu,v[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=v[W];return ne===void 0&&(ne=new Mu,v[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=v[W];return ne===void 0&&(ne=new Mu,v[W]=ne),ne.getHandSpace()};function U(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const me=v[ne];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let W=0;W<v.length;W++){const ne=y[W];ne!==null&&(y[W]=null,v[W].disconnect(ne))}L=null,k=null,x.reset(),e.setRenderTarget(u),p=null,h=null,f=null,r=null,_=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Or(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,me=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Xs:Ns,me=m.stencil?js:Fr);const Ne={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Or(h.textureWidth,h.textureHeight,{format:Wn,type:Ci,depthTexture:new j0(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(W){for(let ne=0;ne<W.removed.length;ne++){const me=W.removed[ne],he=y.indexOf(me);he>=0&&(y[he]=null,v[he].disconnect(me))}for(let ne=0;ne<W.added.length;ne++){const me=W.added[ne];let he=y.indexOf(me);if(he===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=y.length){y.push(me),he=Ue;break}else if(y[Ue]===null){y[Ue]=me,he=Ue;break}if(he===-1)break}const Ne=v[he];Ne&&Ne.connect(me)}}const G=new N,J=new N;function D(W,ne,me){G.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const he=G.distanceTo(J),Ne=ne.projectionMatrix.elements,Ue=me.projectionMatrix.elements,Be=Ne[14]/(Ne[10]-1),Ye=Ne[14]/(Ne[10]+1),ze=(Ne[9]+1)/Ne[5],tt=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],j=(Ue[8]+1)/Ue[0],ie=Be*O,le=Be*j,ee=he/(-O+j),X=ee*-O;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(X),W.translateZ(ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ne[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const te=Be+ee,A=Ye+ee,M=ie-X,H=le+(he-X),se=ze*Ye/A*te,ae=tt*Ye/A*te;W.projectionMatrix.makePerspective(M,H,se,ae,te,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,me=W.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(me=x.depthFar)),S.near=R.near=b.near=ne,S.far=R.far=b.far=me,(L!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),b.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,S.layers.mask=b.layers.mask|R.layers.mask;const he=W.parent,Ne=S.cameras;$(S,he);for(let Ue=0;Ue<Ne.length;Ue++)$(Ne[Ue],he);Ne.length===2?D(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),I(W,S,he)};function I(W,ne,me){me===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Q=null;function ce(W,ne){if(d=ne.getViewerPose(c||o),g=ne,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;me.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Ue=0;Ue<me.length;Ue++){const Be=me[Ue];let Ye=null;if(p!==null)Ye=p.getViewport(Be);else{const tt=f.getViewSubImage(h,Be);Ye=tt.viewport,Ue===0&&(e.setRenderTargetTextures(_,tt.colorTexture,h.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(_))}let ze=w[Ue];ze===void 0&&(ze=new Cn,ze.layers.enable(Ue),ze.viewport=new Tt,w[Ue]=ze),ze.matrix.fromArray(Be.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Be.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(ze)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ue=f.getDepthInformation(me[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let me=0;me<v.length;me++){const he=y[me],Ne=v[me];he!==null&&Ne!==void 0&&Ne.update(he,ne,c||o)}Q&&Q(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const be=new G0;be.setAnimationLoop(ce),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}const vr=new ri,BT=new ct;function HT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,B0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,vr.copy(y),vr.x*=-1,vr.y*=-1,vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(vr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function d(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=y.length;C<b;C++){const R=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,S=R.length;w<S;w++){const L=R[w];if(p(L,C,w,P)===!0){const k=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let K=0;K<U.length;K++){const G=U[K],J=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,k+V,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,P){const C=_.value,b=v+"_"+y;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const R=P[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(_){const v=_.uniforms;let y=0;const P=16;for(let b=0,R=v.length;b<R;b++){const w=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,L=w.length;S<L;S++){const k=w[S],U=Array.isArray(k.value)?k.value:[k.value];for(let V=0,K=U.length;V<K;V++){const G=U[V],J=x(G),D=y%P,$=D%J.boundary,I=D+$;y+=$,I!==0&&P-I<J.storage&&(y+=P-I),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=J.storage}}}const C=y%P;return C>0&&(y+=P-C),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class GT{constructor(e={}){const{canvas:n=LS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const _=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=nr,this.toneMappingExposure=1;const y=this;let P=!1,C=0,b=0,R=null,w=-1,S=null;const L=new Tt,k=new Tt;let U=null;const V=new $e(0);let K=0,G=n.width,J=n.height,D=1,$=null,I=null;const Q=new Tt(0,0,G,J),ce=new Tt(0,0,G,J);let be=!1;const W=new vf;let ne=!1,me=!1;const he=new ct,Ne=new ct,Ue=new N,Be=new Tt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function tt(){return R===null?D:1}let O=i;function j(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",ye,!1),O===null){const z="webgl2";if(O=j(z,T),O===null)throw j(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,le,ee,X,te,A,M,H,se,ae,re,Le,ve,we,Ze,fe,Te,Fe,Oe,Ae,Ke,We,ut,F;function _e(){ie=new $w(O),ie.init(),We=new NT(O,ie),le=new Vw(O,ie,e,We),ee=new PT(O,ie),le.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),X=new Zw(O),te=new mT,A=new DT(O,ie,ee,te,le,We,X),M=new Ww(y),H=new Yw(y),se=new rM(O),ut=new Bw(O,se),ae=new qw(O,se,X,ut),re=new Qw(O,ae,se,X),Oe=new Jw(O,le,A),fe=new Gw(te),Le=new pT(y,M,H,ie,le,ut,fe),ve=new HT(y,te),we=new _T,Ze=new ET(ie),Fe=new zw(y,M,H,ee,re,p,l),Te=new CT(y,re,le),F=new VT(O,X,le,ee),Ae=new Hw(O,ie,X),Ke=new Kw(O,ie,X),X.programs=Le.programs,y.capabilities=le,y.extensions=ie,y.properties=te,y.renderLists=we,y.shadowMap=Te,y.state=ee,y.info=X}_e();const Z=new zT(y,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(G,J,!1))},this.getSize=function(T){return T.set(G,J)},this.setSize=function(T,z,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,J=z,n.width=Math.floor(T*D),n.height=Math.floor(z*D),Y===!0&&(n.style.width=T+"px",n.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(G*D,J*D).floor()},this.setDrawingBufferSize=function(T,z,Y){G=T,J=z,D=Y,n.width=Math.floor(T*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,z,Y,q){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,z,Y,q),ee.viewport(L.copy(Q).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,z,Y,q){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,z,Y,q),ee.scissor(k.copy(ce).multiplyScalar(D).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){ee.setScissorTest(be=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,z=!0,Y=!0){let q=0;if(T){let B=!1;if(R!==null){const pe=R.texture.format;B=pe===gf||pe===mf||pe===pf}if(B){const pe=R.texture.type,xe=pe===Ci||pe===Fr||pe===ea||pe===js||pe===hf||pe===ff,Ce=Fe.getClearColor(),Re=Fe.getClearAlpha(),ke=Ce.r,Ve=Ce.g,Pe=Ce.b;xe?(g[0]=ke,g[1]=Ve,g[2]=Pe,g[3]=Re,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=ke,x[1]=Ve,x[2]=Pe,x[3]=Re,O.clearBufferiv(O.COLOR,0,x))}else q|=O.COLOR_BUFFER_BIT}z&&(q|=O.DEPTH_BUFFER_BIT),Y&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),we.dispose(),Ze.dispose(),te.dispose(),M.dispose(),H.dispose(),re.dispose(),ut.dispose(),F.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Tf),Z.removeEventListener("sessionend",Af),hr.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=X.autoReset,z=Te.enabled,Y=Te.autoUpdate,q=Te.needsUpdate,B=Te.type;_e(),X.autoReset=T,Te.enabled=z,Te.autoUpdate=Y,Te.needsUpdate=q,Te.type=B}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const z=T.target;z.removeEventListener("dispose",He),Et(z)}function Et(T){Gt(T),te.remove(T)}function Gt(T){const z=te.get(T).programs;z!==void 0&&(z.forEach(function(Y){Le.releaseProgram(Y)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,q,B,pe){z===null&&(z=Ye);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Ce=ov(T,z,Y,q,B);ee.setMaterial(q,xe);let Re=Y.index,ke=1;if(q.wireframe===!0){if(Re=ae.getWireframeAttribute(Y),Re===void 0)return;ke=2}const Ve=Y.drawRange,Pe=Y.attributes.position;let et=Ve.start*ke,dt=(Ve.start+Ve.count)*ke;pe!==null&&(et=Math.max(et,pe.start*ke),dt=Math.min(dt,(pe.start+pe.count)*ke)),Re!==null?(et=Math.max(et,0),dt=Math.min(dt,Re.count)):Pe!=null&&(et=Math.max(et,0),dt=Math.min(dt,Pe.count));const mt=dt-et;if(mt<0||mt===1/0)return;ut.setup(B,q,Ce,Y,Re);let sn,nt=Ae;if(Re!==null&&(sn=se.get(Re),nt=Ke,nt.setIndex(sn)),B.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*tt()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(B.isLine){let De=q.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*tt()),B.isLineSegments?nt.setMode(O.LINES):B.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else B.isPoints?nt.setMode(O.POINTS):B.isSprite&&nt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,oi=B._multiDrawCounts,it=B._multiDrawCount,Fn=Re?se.get(Re).bytesPerElement:1,Gr=te.get(q).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)Gr.setValue(O,"_gl_DrawID",fn),nt.render(De[fn]/Fn,oi[fn])}else if(B.isInstancedMesh)nt.renderInstances(et,mt,B.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,oi=Math.min(Y.instanceCount,De);nt.renderInstances(et,mt,oi)}else nt.render(et,mt)};function rt(T,z,Y){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,da(T,z,Y),T.side=or,T.needsUpdate=!0,da(T,z,Y),T.side=gi):da(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),u=Ze.get(Y),u.init(z),v.push(u),Y.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const Ce=pe[xe];rt(Ce,Y,B),q.add(Ce)}else rt(pe,Y,B),q.add(pe)}),v.pop(),u=null,q},this.compileAsync=function(T,z,Y=null){const q=this.compile(T,z,Y);return new Promise(B=>{function pe(){if(q.forEach(function(xe){te.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){B(T);return}setTimeout(pe,10)}ie.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Un=null;function si(T){Un&&Un(T)}function Tf(){hr.stop()}function Af(){hr.start()}const hr=new G0;hr.setAnimationLoop(si),typeof self!="undefined"&&hr.setContext(self),this.setAnimationLoop=function(T){Un=T,Z.setAnimationLoop(T),T===null?hr.stop():hr.start()},Z.addEventListener("sessionstart",Tf),Z.addEventListener("sessionend",Af),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,R),u=Ze.get(T,v.length),u.init(z),v.push(u),Ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(Ne),me=this.localClippingEnabled,ne=fe.init(this.clippingPlanes,me),m=we.get(T,_.length),m.init(),_.push(m),Z.enabled===!0&&Z.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Sc(pe,z,-1/0,y.sortObjects)}Sc(T,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,I),ze=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ze&&Fe.addToRenderList(m,T),this.info.render.frame++,ne===!0&&fe.beginShadows();const Y=u.state.shadowsArray;Te.render(Y,T,z),ne===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(u.setupLights(),z.isArrayCamera){const pe=z.cameras;if(B.length>0)for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Re=pe[xe];Cf(q,B,T,Re)}ze&&Fe.render(T);for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Re=pe[xe];bf(m,T,Re,Re.viewport)}}else B.length>0&&Cf(q,B,T,z),ze&&Fe.render(T),bf(m,T,z);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,z),ut.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&fe.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Sc(T,z,Y,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){q&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);const xe=re.update(T),Ce=T.material;Ce.visible&&m.push(T,xe,Ce,Y,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const xe=re.update(T),Ce=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ce)){const Re=xe.groups;for(let ke=0,Ve=Re.length;ke<Ve;ke++){const Pe=Re[ke],et=Ce[Pe.materialIndex];et&&et.visible&&m.push(T,xe,et,Y,Be.z,Pe)}}else Ce.visible&&m.push(T,xe,Ce,Y,Be.z,null)}}const pe=T.children;for(let xe=0,Ce=pe.length;xe<Ce;xe++)Sc(pe[xe],z,Y,q)}function bf(T,z,Y,q){const B=T.opaque,pe=T.transmissive,xe=T.transparent;u.setupLightsView(Y),ne===!0&&fe.setGlobalState(y.clippingPlanes,Y),q&&ee.viewport(L.copy(q)),B.length>0&&ua(B,z,Y),pe.length>0&&ua(pe,z,Y),xe.length>0&&ua(xe,z,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Cf(T,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Or(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?oa:Ci,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=u.state.transmissionRenderTarget[q.id],xe=q.viewport||L;pe.setSize(xe.z,xe.w);const Ce=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(V),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Fe.render(Y);const Re=y.toneMapping;y.toneMapping=nr;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),ne===!0&&fe.setGlobalState(y.clippingPlanes,q),ua(T,Y,q),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Pe=0,et=z.length;Pe<et;Pe++){const dt=z[Pe],mt=dt.object,sn=dt.geometry,nt=dt.material,De=dt.group;if(nt.side===gi&&mt.layers.test(q.layers)){const oi=nt.side;nt.side=hn,nt.needsUpdate=!0,Rf(mt,Y,q,sn,nt,De),nt.side=oi,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ce),y.setClearColor(V,K),ke!==void 0&&(q.viewport=ke),y.toneMapping=Re}function ua(T,z,Y){const q=z.isScene===!0?z.overrideMaterial:null;for(let B=0,pe=T.length;B<pe;B++){const xe=T[B],Ce=xe.object,Re=xe.geometry,ke=q===null?xe.material:q,Ve=xe.group;Ce.layers.test(Y.layers)&&Rf(Ce,z,Y,Re,ke,Ve)}}function Rf(T,z,Y,q,B,pe){T.onBeforeRender(y,z,Y,q,B,pe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,z,Y,q,T,pe),B.transparent===!0&&B.side===gi&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,y.renderBufferDirect(Y,z,q,B,T,pe),B.side=or,B.needsUpdate=!0,y.renderBufferDirect(Y,z,q,B,T,pe),B.side=gi):y.renderBufferDirect(Y,z,q,B,T,pe),T.onAfterRender(y,z,Y,q,B,pe)}function da(T,z,Y){z.isScene!==!0&&(z=Ye);const q=te.get(T),B=u.state.lights,pe=u.state.shadowsArray,xe=B.state.version,Ce=Le.getParameters(T,B.state,pe,z,Y),Re=Le.getProgramCacheKey(Ce);let ke=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?H:M).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",He),ke=new Map,q.programs=ke);let Ve=ke.get(Re);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===xe)return Lf(T,Ce),Ve}else Ce.uniforms=Le.getUniforms(T),T.onBeforeCompile(Ce,y),Ve=Le.acquireProgram(Ce,Re),ke.set(Re,Ve),q.uniforms=Ce.uniforms;const Pe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=fe.uniform),Lf(T,Ce),q.needsLights=lv(T),q.lightsStateVersion=xe,q.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function Pf(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=wl.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Lf(T,z){const Y=te.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function ov(T,z,Y,q,B){z.isScene!==!0&&(z=Ye),A.resetTextureUnits();const pe=z.fog,xe=q.isMeshStandardMaterial?z.environment:null,Ce=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zs,Re=(q.isMeshStandardMaterial?H:M).get(q.envMap||xe),ke=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,dt=!!Y.morphAttributes.color;let mt=nr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=y.toneMapping);const sn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=sn!==void 0?sn.length:0,De=te.get(q),oi=u.state.lights;if(ne===!0&&(me===!0||T!==S)){const Mn=T===S&&q.id===w;fe.setState(q,T,Mn)}let it=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==oi.state.version||De.outputColorSpace!==Ce||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Re||q.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==fe.numPlanes||De.numIntersection!==fe.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==Ve||De.morphTargets!==Pe||De.morphNormals!==et||De.morphColors!==dt||De.toneMapping!==mt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=q.version);let Fn=De.currentProgram;it===!0&&(Fn=da(q,z,B));let Gr=!1,fn=!1,Qs=!1;const gt=Fn.getUniforms(),qn=De.uniforms;if(ee.useProgram(Fn.program)&&(Gr=!0,fn=!0,Qs=!0),q.id!==w&&(w=q.id,fn=!0),Gr||S!==T){ee.buffers.depth.getReversed()?(he.copy(T.projectionMatrix),NS(he),IS(he),gt.setValue(O,"projectionMatrix",he)):gt.setValue(O,"projectionMatrix",T.projectionMatrix),gt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Li=gt.map.cameraPosition;Li!==void 0&&Li.setValue(O,Ue.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,fn=!0,Qs=!0)}if(B.isSkinnedMesh){gt.setOptional(O,B,"bindMatrix"),gt.setOptional(O,B,"bindMatrixInverse");const Mn=B.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),gt.setValue(O,"boneTexture",Mn.boneTexture,A))}B.isBatchedMesh&&(gt.setOptional(O,B,"batchingTexture"),gt.setValue(O,"batchingTexture",B._matricesTexture,A),gt.setOptional(O,B,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",B._indirectTexture,A),gt.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",B._colorsTexture,A));const eo=Y.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&Oe.update(B,Y,Fn),(fn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,gt.setValue(O,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=Re,qn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(qn.envMapIntensity.value=z.environmentIntensity),fn&&(gt.setValue(O,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&av(qn,Qs),pe&&q.fog===!0&&ve.refreshFogUniforms(qn,pe),ve.refreshMaterialUniforms(qn,q,D,J,u.state.transmissionRenderTarget[T.id]),wl.upload(O,Pf(De),qn,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wl.upload(O,Pf(De),qn,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(O,"center",B.center),gt.setValue(O,"modelViewMatrix",B.modelViewMatrix),gt.setValue(O,"normalMatrix",B.normalMatrix),gt.setValue(O,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let Li=0,Di=Mn.length;Li<Di;Li++){const Df=Mn[Li];F.update(Df,Fn),F.bind(Df,Fn)}}return Fn}function av(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function lv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,Y){te.get(T.texture).__webglTexture=z,te.get(T.depthTexture).__webglTexture=Y;const q=te.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const Y=te.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){R=T,C=z,b=Y;let q=!0,B=null,pe=!1,xe=!1;if(T){const Re=te.get(T);if(Re.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Re.__hasExternalTextures)A.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&te.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Ve=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?B=Ve[z][Y]:B=Ve[z],pe=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?B=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[Y]:B=Ve,L.copy(T.viewport),k.copy(T.scissor),U=T.scissorTest}else L.copy(Q).multiplyScalar(D).floor(),k.copy(ce).multiplyScalar(D).floor(),U=be;if(ee.bindFramebuffer(O.FRAMEBUFFER,B)&&q&&ee.drawBuffers(T,B),ee.viewport(L),ee.scissor(k),ee.setScissorTest(U),pe){const Re=te.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Y)}else if(xe){const Re=te.get(T.texture),ke=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,ke)}w=-1},this.readRenderTargetPixels=function(T,z,Y,q,B,pe,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){ee.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Re=T.texture,ke=Re.format,Ve=Re.type;if(!le.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-B&&O.readPixels(z,Y,q,B,We.convert(ke),We.convert(Ve),pe)}finally{const Re=R!==null?te.get(R).__webglFramebuffer:null;ee.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,q,B,pe,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Re=T.texture,ke=Re.format,Ve=Re.type;if(!le.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-B){ee.bindFramebuffer(O.FRAMEBUFFER,Ce);const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(z,Y,q,B,We.convert(ke),We.convert(Ve),0);const et=R!==null?te.get(R).__webglFramebuffer:null;ee.bindFramebuffer(O.FRAMEBUFFER,et);const dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await DS(O,dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.deleteBuffer(Pe),O.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,Y=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-Y),B=Math.floor(T.image.width*q),pe=Math.floor(T.image.height*q),xe=z!==null?z.x:0,Ce=z!==null?z.y:0;A.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xe,Ce,B,pe),ee.unbindTexture()},this.copyTextureToTexture=function(T,z,Y=null,q=null,B=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],z=arguments[2],B=arguments[3]||0,Y=null);let pe,xe,Ce,Re,ke,Ve,Pe,et,dt;const mt=T.isCompressedTexture?T.mipmaps[B]:T.image;Y!==null?(pe=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,ke=Y.min.y,Ve=Y.isBox3?Y.min.z:0):(pe=mt.width,xe=mt.height,Ce=mt.depth||1,Re=0,ke=0,Ve=0),q!==null?(Pe=q.x,et=q.y,dt=q.z):(Pe=0,et=0,dt=0);const sn=We.convert(z.format),nt=We.convert(z.type);let De;z.isData3DTexture?(A.setTexture3D(z,0),De=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),De=O.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),De=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const oi=O.getParameter(O.UNPACK_ROW_LENGTH),it=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Gr=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const Qs=T.isDataArrayTexture||T.isData3DTexture,gt=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const qn=te.get(T),eo=te.get(z),Mn=te.get(qn.__renderTarget),Li=te.get(eo.__renderTarget);ee.bindFramebuffer(O.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Di=0;Di<Ce;Di++)Qs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.get(T).__webglTexture,B,Ve+Di),T.isDepthTexture?(gt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.get(z).__webglTexture,B,dt+Di),O.blitFramebuffer(Re,ke,pe,xe,Pe,et,pe,xe,O.DEPTH_BUFFER_BIT,O.NEAREST)):gt?O.copyTexSubImage3D(De,B,Pe,et,dt+Di,Re,ke,pe,xe):O.copyTexSubImage2D(De,B,Pe,et,dt+Di,Re,ke,pe,xe);ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(De,B,Pe,et,dt,pe,xe,Ce,sn,nt,mt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(De,B,Pe,et,dt,pe,xe,Ce,sn,mt.data):O.texSubImage3D(De,B,Pe,et,dt,pe,xe,Ce,sn,nt,mt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Pe,et,pe,xe,sn,nt,mt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Pe,et,mt.width,mt.height,sn,mt.data):O.texSubImage2D(O.TEXTURE_2D,B,Pe,et,pe,xe,sn,nt,mt);O.pixelStorei(O.UNPACK_ROW_LENGTH,oi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),B===0&&z.generateMipmaps&&O.generateMipmap(De),ee.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y=null,q=null,B=0){return T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,T=arguments[2],z=arguments[3],B=arguments[4]||0),Eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,Y,q,B)},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,ee.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}class WT extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new N;class Zl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class K0 extends dr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const mo=new N,as=new N,ls=new N,cs=new Me,go=new Me,Z0=new ct,Za=new N,_o=new N,Ja=new N,km=new Me,Eu=new Me,zm=new Me;class XT extends Dt{constructor(e=new K0){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Vt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jT(n,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Zl(i,3,0,!1)),os.setAttribute("uv",new Zl(i,2,3,!1))}this.geometry=os,this.material=e,this.center=new Me(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Z0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Qa(Za.set(-.5,-.5,0),ls,o,as,r,s),Qa(_o.set(.5,-.5,0),ls,o,as,r,s),Qa(Ja.set(.5,.5,0),ls,o,as,r,s),km.set(0,0),Eu.set(1,0),zm.set(1,1);let a=e.ray.intersectTriangle(Za,_o,Ja,!1,mo);if(a===null&&(Qa(_o.set(-.5,.5,0),ls,o,as,r,s),Eu.set(0,1),a=e.ray.intersectTriangle(Za,Ja,_o,!1,mo),a===null))return;const l=e.ray.origin.distanceTo(mo);l<e.near||l>e.far||n.push({distance:l,point:mo.clone(),uv:Rn.getInterpolation(mo,Za,_o,Ja,km,Eu,zm,new Me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qa(t,e,n,i,r,s){cs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(go.x=s*cs.x-r*cs.y,go.y=r*cs.x+s*cs.y):go.copy(cs),t.copy(e),t.x+=go.x,t.y+=go.y,t.applyMatrix4(Z0)}class J0 extends dr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new N,Ql=new N,Bm=new ct,vo=new la,el=new aa,wu=new N,Hm=new N;class YT extends Dt{constructor(e=new Vt,n=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Jl.fromBufferAttribute(n,r-1),Ql.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Jl.distanceTo(Ql);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Bm.copy(r).invert(),vo.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=d.getX(x),_=d.getX(x+1),v=tl(this,e,vo,l,u,_);v&&n.push(v)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(p),u=tl(this,e,vo,l,x,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=tl(this,e,vo,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=tl(this,e,vo,l,g-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Jl.fromBufferAttribute(o,r),Ql.fromBufferAttribute(o,s),n.distanceSqToSegment(Jl,Ql,wu,Hm)>i)return;wu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(wu);if(!(l<e.near||l>e.far))return{distance:l,point:Hm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Vm=new N,Gm=new N;class $T extends YT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Vm.fromBufferAttribute(n,r),Gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vm.distanceTo(Gm);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends dr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wm=new ct,fh=new la,nl=new aa,il=new N;class qT extends Dt{constructor(e=new Vt,n=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;Wm.copy(r).invert(),fh.copy(e.ray).applyMatrix4(Wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);il.fromBufferAttribute(f,m),jm(il,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)il.fromBufferAttribute(f,g),jm(il,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(t,e,n,i,r,s,o){const a=fh.distanceSqToPoint(t);if(a<n){const l=new N;fh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class KT extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new ct;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ev extends Pi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZT extends ev{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const rl=new N,Tu=new xf,Au=new xf,bu=new xf;class JT extends Pi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(rl.subVectors(r[0],r[1]).add(r[0]),c=rl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(rl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Tu.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,g,x,m),Au.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,g,x,m),bu.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,g,x,m)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Au.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),bu.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Tu.calc(l),Au.calc(l),bu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function QT(t,e){const n=1-t;return n*n*e}function eA(t,e){return 2*(1-t)*t*e}function tA(t,e){return t*t*e}function Io(t,e,n,i){return QT(t,e)+eA(t,n)+tA(t,i)}function nA(t,e){const n=1-t;return n*n*n*e}function iA(t,e){const n=1-t;return 3*n*n*t*e}function rA(t,e){return 3*(1-t)*t*t*e}function sA(t,e){return t*t*t*e}function Uo(t,e,n,i,r){return nA(t,e)+iA(t,n)+rA(t,i)+sA(t,r)}class oA extends Pi{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Uo(e,r.x,s.x,o.x,a.x),Uo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aA extends Pi{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Uo(e,r.x,s.x,o.x,a.x),Uo(e,r.y,s.y,o.y,a.y),Uo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lA extends Pi{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends Pi{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cA extends Pi{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Io(e,r.x,s.x,o.x),Io(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends Pi{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Io(e,r.x,s.x,o.x),Io(e,r.y,s.y,o.y),Io(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uA extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Xm(a,l.x,c.x,d.x,f.x),Xm(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var dA=Object.freeze({__proto__:null,ArcCurve:ZT,CatmullRomCurve3:JT,CubicBezierCurve:oA,CubicBezierCurve3:aA,EllipseCurve:ev,LineCurve:lA,LineCurve3:tv,QuadraticBezierCurve:cA,QuadraticBezierCurve3:nv,SplineCurve:uA});class ec extends Vt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,d=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wn extends Vt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let g=0;const x=[],m=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function _(){const y=new N,P=new N;let C=0;const b=(n-e)/i;for(let R=0;R<=s;R++){const w=[],S=R/s,L=S*(n-e)+e;for(let k=0;k<=r;k++){const U=k/r,V=U*l+a,K=Math.sin(V),G=Math.cos(V);P.x=L*K,P.y=-S*i+m,P.z=L*G,f.push(P.x,P.y,P.z),y.set(K,b,G).normalize(),h.push(y.x,y.y,y.z),p.push(U,1-S),w.push(g++)}x.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){const S=x[w][R],L=x[w+1][R],k=x[w+1][R+1],U=x[w][R+1];(e>0||w!==0)&&(d.push(S,L,U),C+=3),(n>0||w!==s-1)&&(d.push(L,k,U),C+=3)}c.addGroup(u,C,0),u+=C}function v(y){const P=g,C=new Me,b=new N;let R=0;const w=y===!0?e:n,S=y===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let k=0;k<=r;k++){const V=k/r*l+a,K=Math.cos(V),G=Math.sin(V);b.x=w*G,b.y=m*S,b.z=w*K,f.push(b.x,b.y,b.z),h.push(0,S,0),C.x=K*.5+.5,C.y=G*.5*S+.5,p.push(C.x,C.y),g++}for(let k=0;k<r;k++){const U=P+k,V=L+k;y===!0?d.push(V,V+1,U):d.push(V+1,V,U),R+=3}c.addGroup(u,R,y===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tc extends wn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new tc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sf extends Vt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new N,h=new N,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let P=0;P<=n;P++){const C=P/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+y,1-v),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=d[u][_+1],y=d[u][_],P=d[u+1][_],C=d[u+1][_+1];(u!==0||o>0)&&p.push(v,y,C),(u!==i-1||l<Math.PI)&&p.push(y,P,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends Vt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,f=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(x),f.y=(e+n*Math.cos(m))*Math.sin(x),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(x,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mf extends Vt{constructor(e=new nv(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new Me;let d=new N;const f=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function x(){for(let v=0;v<n;v++)m(v);m(s===!1?n:0),_(),u()}function m(v){d=e.getPointAt(v/n,d);const y=o.normals[v],P=o.binormals[v];for(let C=0;C<=r;C++){const b=C/r*Math.PI*2,R=Math.sin(b),w=-Math.cos(b);l.x=w*y.x+R*P.x,l.y=w*y.y+R*P.y,l.z=w*y.z+R*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const P=(r+1)*(v-1)+(y-1),C=(r+1)*v+(y-1),b=(r+1)*v+y,R=(r+1)*(v-1)+y;g.push(P,C,R),g.push(C,b,R)}}function _(){for(let v=0;v<=n;v++)for(let y=0;y<=r;y++)c.x=v/n,c.y=y/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Mf(new dA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class je extends dr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iv extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Cu=new ct,Ym=new N,$m=new N;class hA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fA extends hA{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends iv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new fA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pA extends iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Km=new ct;class mA{constructor(e,n,i=0,r=1/0){this.ray=new la(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,n=!0,i=[]){return ph(e,this,i,n),i.sort(Zm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ph(e[r],this,i,n);return i.sort(Zm),i}}function Zm(t,e){return t.distance-e.distance}function ph(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ph(s[o],e,n,!0)}}class Jm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gA extends $T{constructor(e=10,n=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=h===s?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const d=new Vt;d.setAttribute("position",new pt(l,3)),d.setAttribute("color",new pt(c,3));const f=new J0({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _A extends Vr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);const Qm={type:"change"},Ef={type:"start"},rv={type:"end"},sl=new la,eg=new mi,vA=Math.cos(70*PS.DEG2RAD),Rt=new N,on=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ru=1e-6;class yA extends _A{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new kr,this._lastTargetPosition=new N,this._quat=new kr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jm,this._sphericalDelta=new Jm,this._scale=1,this._panOffset=new N,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new N,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=MA.bind(this),this._onContextMenu=RA.bind(this),this._onMouseWheel=TA.bind(this),this._onKeyDown=AA.bind(this),this._onTouchStart=bA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=EA.bind(this),this._onMouseMove=wA.bind(this),this._interceptControlDown=PA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qm),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Rt.copy(n).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(sl.origin.copy(this.object.position),sl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sl.direction))<vA?this.object.lookAt(this.target):(eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),sl.intersectPlane(eg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ru||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ru||this._lastTargetPosition.distanceToSquared(this.target)>Ru?(this.dispatchEvent(Qm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rt.setFromMatrixColumn(n,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,n){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(n,1):(Rt.setFromMatrixColumn(n,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(on*this._rotateDelta.x/n.clientHeight),this._rotateUp(on*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Me,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function SA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function MA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function EA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Ls.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Ls.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ef)}function wA(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function TA(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(Ef),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(rv))}function AA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function bA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Ef)}function CA(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function RA(t){this.enabled!==!1&&t.preventDefault()}function PA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DA(t,e){const n=new Si;switch(t){case"solar_pv":{for(let r=0;r<3;r++){const s=new Ie(new ht(1.2,.05,.8),new je({color:1981023,metalness:.8,roughness:.2})),o=new Ie(new ht(1.18,.06,.78),new je({color:4886745,metalness:.5}));s.add(o),s.position.set(r*1.4-1.4,.8,0),s.rotation.x=-Math.PI*.2,n.add(s);const a=new Ie(new wn(.03,.03,.7,8),new je({color:8947848}));a.position.set(r*1.4-1.4,.35,.2),n.add(a)}break}case"smart_building":{const i=e.floors||5,r=i*.6,s=new Ie(new ht(2,r,1.5),new je({color:4871528}));s.position.y=r/2,n.add(s);for(let a=0;a<i;a++)for(let l=0;l<3;l++){const c=new Ie(new ht(.4,.3,.02),new je({color:8900331,emissive:2245802,emissiveIntensity:.3}));c.position.set(l*.6-.6,a*.6+.4,.76),n.add(c)}const o=new Ie(new ht(2.1,.1,1.6),new je({color:2963272}));o.position.y=r+.05,n.add(o);break}case"battery_storage":{const i=new Ie(new ht(1.2,1.5,.8),new je({color:2278750}));i.position.y=.75,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new ht(.3,.2,.02),new je({color:1467700,emissive:65280,emissiveIntensity:.2}));o.position.set(0,.5+s*.35,.41),n.add(o)}const r=new Ie(new tc(.15,.4,4),new je({color:16498468}));r.position.set(0,1.3,.41),r.rotation.z=Math.PI,n.add(r);break}case"wind_turbine":{const i=new Ie(new wn(.15,.25,4,8),new je({color:16119285}));i.position.y=2,n.add(i);const r=new Ie(new ht(.6,.4,.4),new je({color:15066597}));r.position.set(0,4.1,0),n.add(r);const s=new Ie(new tc(.15,.3,16),new je({color:13421772}));s.position.set(0,4.1,.35),s.rotation.x=Math.PI/2,n.add(s);const o=new Si;for(let a=0;a<3;a++){const l=new Ie(new ht(.15,1.8,.05),new je({color:16777215}));l.position.y=.9;const c=new Si;c.add(l),c.rotation.z=a*Math.PI*2/3,o.add(c)}o.position.set(0,4.1,.5),o.userData.isRotating=!0,n.add(o);break}case"district_heating":{const i=new Ie(new ht(1.5,1,1),new je({color:14427686}));i.position.y=.5,n.add(i);const r=new Ie(new wn(.1,.1,1.2,16),new je({color:15680580}));r.rotation.z=Math.PI/2,r.position.set(0,.8,.6),n.add(r);const s=new Ie(new wn(.08,.08,1.2,16),new je({color:3900150}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.6),n.add(s);const o=new Ie(new Fo(.2,.03,8,16,Math.PI),new je({color:16739179,emissive:16711680,emissiveIntensity:.5}));o.position.set(0,1.2,0),o.rotation.x=Math.PI/2,n.add(o);break}case"smart_grid":{const i=new Ie(new ht(1,.3,.8),new je({color:3621201}));i.position.y=.15,n.add(i);const r=new Ie(new ht(.6,.8,.5),new je({color:7041664}));r.position.y=.7,n.add(r);for(let s=0;s<3;s++){const o=new Ie(new wn(.05,.08,.4,8),new je({color:9133302}));o.position.set(s*.25-.25,1.3,0),n.add(o)}for(let s=0;s<3;s++){const o=new Ie(new wn(.01,.01,.8,8),new je({color:1118481}));o.rotation.z=Math.PI/2,o.position.set(.4,1.5,s*.15-.15),n.add(o)}break}case"ev_charger":{const i=new Ie(new ht(.3,1.4,.2),new je({color:1982639}));i.position.y=.7,n.add(i);const r=new Ie(new ht(.25,.2,.02),new je({color:0,emissive:65280,emissiveIntensity:.3}));r.position.set(0,1.1,.11),n.add(r);const s=new Ie(new Fo(.15,.02,8,16,Math.PI),new je({color:1118481}));s.position.set(.2,.5,.15),s.rotation.y=Math.PI/2,n.add(s);const o=new Ie(new ht(.8,.3,.4),new je({color:3900150,transparent:!0,opacity:.6}));o.position.set(.8,.15,0),n.add(o);break}case"heat_pump":{const i=new Ie(new ht(1.2,.9,.5),new je({color:16119285}));i.position.y=.45,n.add(i);const r=new Ie(new ec(.3,32),new je({color:3355443}));r.position.set(0,.5,.26),n.add(r);const s=new Si;for(let a=0;a<4;a++){const l=new Ie(new ht(.25,.05,.02),new je({color:6710886}));l.rotation.z=a*Math.PI/2,s.add(l)}s.position.set(0,.5,.27),s.userData.isRotating=!0,n.add(s);const o=new Ie(new wn(.04,.04,.5,8),new je({color:15680580}));o.position.set(-.4,.7,-.3),n.add(o);break}case"chp_unit":{const i=new Ie(new ht(1.5,1.2,1),new je({color:16347926}));i.position.y=.6,n.add(i);const r=new Ie(new wn(.1,.12,.8,16),new je({color:6710886}));r.position.set(.5,1.6,0),n.add(r);const s=new Ie(new ht(.4,.3,.05),new je({color:2042167,emissive:2278750,emissiveIntensity:.2}));s.position.set(-.4,.8,.53),n.add(s);break}case"thermal_storage":{const i=new Ie(new wn(.6,.6,1.8,24),new je({color:15485081}));i.position.y=.9,n.add(i);for(let s=0;s<3;s++){const o=new Ie(new Fo(.62,.03,8,32),new je({color:12458077}));o.position.y=.4+s*.5,o.rotation.x=Math.PI/2,n.add(o)}const r=new Ie(new ec(.1,16),new je({color:16777215,emissive:16729156,emissiveIntensity:.5}));r.position.set(0,1.2,.61),n.add(r);break}case"load_center":{const i=new Ie(new ht(.8,1.2,.2),new je({color:4937059}));i.position.y=.6,n.add(i);for(let s=0;s<3;s++)for(let o=0;o<2;o++){const a=new Ie(new ht(.15,.2,.05),new je({color:1118481}));a.position.set(o*.25-.12,.3+s*.3,.12),n.add(a)}const r=new Ie(new Sf(.05,16,16),new je({color:2278750,emissive:65280,emissiveIntensity:.8}));r.position.set(.25,1,.12),n.add(r);break}}return n}function NA(t,e,n){const i=document.createElement("canvas"),r=i.getContext("2d");i.width=256,i.height=64,r.fillStyle="rgba(15, 23, 42, 0.85)",r.beginPath(),r.roundRect(4,4,i.width-8,i.height-8,8),r.fill(),r.font="bold 22px Arial",r.fillStyle="#e2e8f0",r.textAlign="center",r.textBaseline="middle",r.fillText(t.substring(0,20),i.width/2,i.height/2);const s=new KT(i),o=new K0({map:s,transparent:!0}),a=new XT(o);return a.position.copy(e),a.position.y=n+1.5,a.scale.set(2.5,.6,1),a}class IA{constructor(e,n,i,r=20){this.startPos=e.clone(),this.endPos=n.clone(),this.count=r,this.speed=.015,this.positions=new Float32Array(r*3),this.progress=new Float32Array(r);for(let a=0;a<r;a++)this.progress[a]=a/r,this.updateParticlePosition(a);const s=new Vt;s.setAttribute("position",new Dn(this.positions,3));const o=new Q0({color:i,size:.2,transparent:!0,opacity:.9,blending:wd});this.particles=new qT(s,o)}updateParticlePosition(e){const n=this.progress[e];this.positions[e*3]=this.startPos.x+(this.endPos.x-this.startPos.x)*n,this.positions[e*3+1]=this.startPos.y+(this.endPos.y-this.startPos.y)*n+Math.sin(n*Math.PI)*.4,this.positions[e*3+2]=this.startPos.z+(this.endPos.z-this.startPos.z)*n}update(){for(let e=0;e<this.count;e++)this.progress[e]+=this.speed,this.progress[e]>1&&(this.progress[e]=0),this.updateParticlePosition(e);this.particles.geometry.attributes.position.needsUpdate=!0}}function tg({config:t,animate:e=!0,onComponentMove:n}){const i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef(null),o=ue.useRef(null),a=ue.useRef(null),l=ue.useRef(new Map),c=ue.useRef(null),d=ue.useRef(new Map),f=ue.useRef([]),h=ue.useRef([]),p=ue.useRef(0),g=ue.useRef(new mA),x=ue.useRef(new Me),m=ue.useRef(null),u=ue.useRef(new mi(new N(0,1,0),0));return ue.useEffect(()=>{if(!i.current)return;const _=i.current,v=new WT;v.background=new $e(661032),r.current=v;const y=_.clientWidth||600,P=_.clientHeight||400,C=new Cn(50,y/P,.1,500);C.position.set(12,10,12),o.current=C;const b=new GT({antialias:!0});b.setSize(y,P),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.shadowMap.enabled=!0,_.appendChild(b.domElement),s.current=b;const R=new yA(C,b.domElement);R.enableDamping=!0,R.dampingFactor=.08,a.current=R,v.add(new pA(16777215,.5));const w=new qm(16777215,1);w.position.set(10,20,10),w.castShadow=!0,v.add(w);const S=new qm(4491519,.3);S.position.set(-10,5,-10),v.add(S);const L=new Ie(new ca(60,60),new je({color:1712946,roughness:.9}));L.rotation.x=-Math.PI/2,L.receiveShadow=!0,v.add(L);const k=new gA(60,30,2767434,1714746);k.position.y=.01,v.add(k);const U=new Si;v.add(U),c.current=U;const V=()=>{p.current=requestAnimationFrame(V),R.update(),e&&(f.current.forEach(I=>I.update()),h.current.forEach(I=>{I.rotation.z+=.02})),b.render(v,C)};V();const K=()=>{const I=_.clientWidth,Q=_.clientHeight;C.aspect=I/Q,C.updateProjectionMatrix(),b.setSize(I,Q)};window.addEventListener("resize",K);const G=I=>{const Q=b.domElement.getBoundingClientRect();x.current.x=(I.clientX-Q.left)/Q.width*2-1,x.current.y=-((I.clientY-Q.top)/Q.height)*2+1},J=I=>{if(!n)return;G(I),g.current.setFromCamera(x.current,C);const Q=Array.from(l.current.entries());for(const[ce,be]of Q)if(g.current.intersectObject(be,!0).length>0){R.enabled=!1;const ne=new N;g.current.ray.intersectPlane(u.current,ne),m.current={id:ce,model:be,offset:be.position.clone().sub(ne)},b.domElement.style.cursor="grabbing";break}},D=I=>{if(!m.current){if(n){G(I),g.current.setFromCamera(x.current,C);let W=!1;for(const ne of l.current.values())if(g.current.intersectObject(ne,!0).length>0){W=!0;break}b.domElement.style.cursor=W?"grab":"default"}return}G(I),g.current.setFromCamera(x.current,C);const Q=new N;g.current.ray.intersectPlane(u.current,Q);const ce=Q.add(m.current.offset);m.current.model.position.x=ce.x,m.current.model.position.z=ce.z;const be=d.current.get(m.current.id);be&&(be.position.x=ce.x,be.position.z=ce.z)},$=()=>{if(m.current&&n){const{id:I,model:Q}=m.current,ce=.035,be=-300*ce,W=-200*ce,ne=(Q.position.x-be)/ce,me=(Q.position.z-W)/ce;n(I,ne,me)}m.current=null,R.enabled=!0,b.domElement.style.cursor="default"};return b.domElement.addEventListener("pointerdown",J),b.domElement.addEventListener("pointermove",D),b.domElement.addEventListener("pointerup",$),b.domElement.addEventListener("pointerleave",$),()=>{window.removeEventListener("resize",K),b.domElement.removeEventListener("pointerdown",J),b.domElement.removeEventListener("pointermove",D),b.domElement.removeEventListener("pointerup",$),b.domElement.removeEventListener("pointerleave",$),cancelAnimationFrame(p.current),b.dispose(),_.removeChild(b.domElement)}},[e,n]),ue.useEffect(()=>{var w,S,L;const _=r.current,v=c.current;if(!_||!v)return;for(l.current.forEach(k=>_.remove(k)),l.current.clear();v.children.length;)v.remove(v.children[0]);if(f.current.forEach(k=>_.remove(k.particles)),f.current=[],h.current=[],!t)return;const y=.035,P=-300*y,C=-200*y;t.components.forEach(k=>{const U=DA(k.type,k.params),V=k.x*y+P,K=k.y*y+C;U.position.set(V,0,K),_.add(U),l.current.set(k.id,U),U.traverse($=>{$.userData.isRotating&&h.current.push($)});const J=new zr().setFromObject(U).max.y,D=NA(k.name,new N(V,0,K),J);v.add(D)});const b=new Set(["solar_pv","wind_turbine","chp_unit"]),R=new Set(["smart_building","ev_charger","load_center","heat_pump"]);if(t.connections.forEach(k=>{const U=t.components.find(he=>he.id===k.from),V=t.components.find(he=>he.id===k.to),K=l.current.get(k.from),G=l.current.get(k.to);if(!K||!G||!U||!V)return;let J=K.position.clone(),D=G.position.clone();const $=b.has(U.type),I=b.has(V.type),Q=R.has(U.type),ce=R.has(V.type);(Q&&!ce||I&&!$)&&([J,D]=[D,J]),J.y=.5,D.y=.5;const be=k.type==="heat"?15680580:k.type==="both"?11032055:3900150,W=new tv(K.position.clone().setY(.5),G.position.clone().setY(.5)),ne=new Ie(new Mf(W,8,.04,8,!1),new je({color:be,transparent:!0,opacity:.4}));_.add(ne);const me=new IA(J,D,be,18);_.add(me.particles),f.current.push(me)}),t.components.length>0){const k=new zr;l.current.forEach(G=>k.expandByObject(G));const U=new N,V=new N;k.getCenter(U),k.getSize(V),(w=a.current)==null||w.target.copy(U);const K=Math.max(V.x,V.z)*2;(S=o.current)==null||S.position.set(U.x+K,K*.7,U.z+K),(L=a.current)==null||L.update()}},[t]),E.jsx("div",{ref:i,style:{width:"100%",height:"100%",minHeight:300}})}function sv(t){return t.endsWith("/")?t:t+"/"}const us=(t,e)=>{const n=t.replace(/^\/+/,"");return new URL(n,sv(e)).toString()},UA=(t,e)=>{const n=t.replace(/^\/+/,""),i=new URL(n,sv(e));return i.protocol=i.protocol.startsWith("https")?"wss:":"ws:",i.toString()};function ng(t){return t==null?"—":new Intl.NumberFormat(void 0,{notation:"compact",maximumFractionDigits:2}).format(t)}function FA(t){return t==null?"—":t.toLocaleString(void 0,{maximumFractionDigits:2})}function OA(){var ie,le,ee;const t=ue.useMemo(()=>window.location.origin,[]),[e,n]=ue.useState([]),[i,r]=ue.useState(!1),[s,o]=ue.useState(null),[a,l]=ue.useState(null),[c,d]=ue.useState(null),[f,h]=ue.useState(null),[p,g]=ue.useState([]),[x,m]=ue.useState("idle"),[u,_]=ue.useState("runs"),[v,y]=ue.useState("3d"),[P,C]=ue.useState("2d"),[b,R]=ue.useState(null),[w,S]=ue.useState(!1),[L,k]=ue.useState(12),[U,V]=ue.useState(800),[K,G]=ue.useState(.5),[J,D]=ue.useState(!1);ue.useState(null)[0];const[$,I]=ue.useState(.58),[Q,ce]=ue.useState(!1),[be,W]=ue.useState(320),[ne,me]=ue.useState(!1),[he,Ne]=ue.useState(!1),[Ue,Be]=ue.useState(!1),Ye=ue.useCallback(X=>{g(te=>[...te,`${new Date().toLocaleTimeString()} ${X}`].slice(-50))},[]),ze=ue.useCallback(async()=>{r(!0);try{const X=await fetch(us("/runs",t));if(!X.ok)throw new Error(`Failed to load runs (${X.status})`);const te=await X.json();if(n(te),te.length===0){o(A=>A!==null?null:A);return}o(A=>!(A?te.some(H=>H.id===A):!1)&&te.length>0?te[0].id:A)}catch(X){console.error(X),Ye(`Error loading runs: ${X.message}`)}finally{r(!1)}},[t,Ye]);ue.useEffect(()=>{ze();const X=setInterval(ze,15e3);return()=>clearInterval(X)},[ze]),ue.useEffect(()=>{if(!s){h(null),l(null),d(null);return}const X=new AbortController;return(async()=>{try{const A=await fetch(us(`/runs/${s}/state`,t),{signal:X.signal});if(!A.ok)throw new Error(`Failed to load state (${A.status})`);const M=await A.json();h(M)}catch(A){A.name!=="AbortError"&&Ye(`Error fetching state: ${A.message}`)}})(),()=>X.abort()},[t,Ye,s]),ue.useEffect(()=>{const X=new AbortController;return(async()=>{if(s)try{const A=await fetch(us(`/runs/${s}`,t),{signal:X.signal});if(!A.ok)return;const M=await A.json();if(l(M),M.scenario_id){const H=await fetch(us(`/scenarios/${M.scenario_id}`,t),{signal:X.signal});H.ok?d(await H.json()):d(null)}else d(null)}catch{}})(),()=>X.abort()},[t,s]),ue.useEffect(()=>{if(!s)return;const X=UA(`/runs/${s}/ws`,t);m("connecting"),Ye(`Connecting to ${X}`);const te=new WebSocket(X);return te.onopen=()=>{m("open"),Ye("WebSocket connected"),te.send(JSON.stringify({command:"state"}))},te.onclose=A=>{m("closed"),Ye(`WebSocket closed (code ${A.code})`)},te.onerror=A=>{console.error("WebSocket error",A),Ye("WebSocket error encountered")},te.onmessage=A=>{try{const M=JSON.parse(A.data);M.type==="state"?h(M.payload):M.type==="error"&&Ye(`Backend error: ${M.message}`)}catch(M){console.error("Malformed message",M)}},()=>{te.close()}},[Ye,s,t]);const tt=X=>{o(X)},O=async X=>{if(s)try{const te=await fetch(us(`/runs/${s}/step`,t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({steps:X})});if(!te.ok)throw new Error(`Step failed (${te.status})`);const A=await te.json();h(A),Ye(`Advanced simulation by ${X} step(s)`)}catch(te){Ye(`Error stepping simulation: ${te.message}`)}};ue.useEffect(()=>{if(!w||!s||u!=="runs"||(a==null?void 0:a.status)!=="running")return;let X=!1,te;const A=async()=>{X||(await O(L),te=window.setTimeout(A,Math.max(100,U)))};return te=window.setTimeout(A,0),()=>{X=!0,te&&window.clearTimeout(te)}},[w,L,U,s,u,a==null?void 0:a.status]);const j=(ie=f==null?void 0:f.metrics)!=null?ie:{};return ue.useEffect(()=>{const X=A=>{if(!J)return;const M=document.querySelector(".split-container");if(!M)return;const H=M.getBoundingClientRect(),se=A.clientX-H.left,ae=Math.max(.2,Math.min(.8,se/H.width));G(ae)},te=()=>D(!1);return window.addEventListener("mousemove",X),window.addEventListener("mouseup",te),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",te)}},[J]),ue.useEffect(()=>{const X=A=>{if(!Q)return;const M=document.querySelector(".vsplit-container");if(!M)return;const H=M.getBoundingClientRect(),se=A.clientY-H.top,ae=Math.max(.25,Math.min(.85,se/H.height));I(ae)},te=()=>ce(!1);return window.addEventListener("mousemove",X),window.addEventListener("mouseup",te),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",te)}},[Q]),ue.useEffect(()=>{const X=A=>{if(!ne)return;const M=document.querySelector(".app-shell");if(!M)return;const H=M.getBoundingClientRect(),se=A.clientX-H.left,ae=220,re=Math.max(360,H.width*.5);W(Math.max(ae,Math.min(re,se)))},te=()=>me(!1);return window.addEventListener("mousemove",X),window.addEventListener("mouseup",te),()=>{window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",te)}},[ne]),E.jsxs("div",{className:"app-shell",style:{"--sidebar-width":`${be}px`},children:[u==="runs"?E.jsxs(E.Fragment,{children:[E.jsx(Fx,{runs:e,selectedId:s,onSelect:tt,onRefresh:ze,onDelete:async X=>{var te;try{const A=us(`/runs/${X}`,t),M=await fetch(A,{method:"DELETE"});if(!M.ok)throw new Error(`Delete failed (${M.status})`);s===X&&o(null),await ze()}catch(A){Ye(`Delete run error: ${(te=A==null?void 0:A.message)!=null?te:String(A)}`)}},isLoading:i}),E.jsx("div",{className:"sidebar-divider",onMouseDown:()=>me(!0),title:"Resize sidebar"}),E.jsxs("main",{className:"main-content",children:[E.jsxs("div",{className:"header",children:[E.jsxs("div",{children:[E.jsx("h1",{children:"Digital Twin Console"}),E.jsxs("p",{style:{color:"#64748b"},children:["WebSocket status: ",x]})]}),E.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",flexWrap:"wrap"},children:[E.jsx("button",{className:"button",onClick:()=>_("builder"),children:"🏗️ Digital Twin"}),E.jsx("button",{className:"button button-secondary",onClick:()=>_("scenarios"),children:"Scenarios"}),E.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),E.jsx("button",{className:"button",onClick:()=>y("3d"),style:{background:v==="3d"?"#2563eb":"#475569"},children:"3D"}),E.jsx("button",{className:"button",onClick:()=>y("charts"),style:{background:v==="charts"?"#2563eb":"#475569"},children:"Charts"}),E.jsx("span",{style:{width:1,height:24,background:"#475569",margin:"0 0.25rem"}}),E.jsx("button",{className:"button",onClick:()=>O(1),disabled:!s||(a==null?void 0:a.status)!=="running",children:"Step"}),E.jsx("button",{className:"button",onClick:()=>O(12),disabled:!s||(a==null?void 0:a.status)!=="running",children:"×12"}),E.jsx("button",{className:"button",onClick:()=>S(X=>!X),disabled:!s||(a==null?void 0:a.status)!=="running",style:{background:w?"#dc2626":"#2563eb"},children:w?"⏸ Pause":"▶ Auto"}),E.jsx("input",{type:"number",value:L,min:1,max:288,onChange:X=>k(Math.max(1,Math.min(288,Number(X.target.value)))),style:{width:50},title:"Steps per interval"}),E.jsx("input",{type:"number",value:U,min:100,step:100,onChange:X=>V(Math.max(100,Number(X.target.value))),style:{width:60},title:"Interval (ms)"}),E.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:"0.8rem",color:"#94a3b8"},children:[E.jsx("input",{type:"checkbox",checked:Ue,onChange:X=>Be(X.target.checked)})," Reduce motion"]}),E.jsx("button",{className:"button button-secondary",onClick:()=>Ne(X=>!X),style:{padding:"0.35rem 0.5rem"},children:he?"▼":"▲"})]})]}),E.jsxs("section",{className:"metrics-grid",children:[E.jsxs("article",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Timestep"}),E.jsx("div",{className:"metric-value",children:(le=j.timestep)!=null?le:"—"})]}),E.jsxs("article",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Fund NAV (DKK)"}),E.jsx("div",{className:"metric-value",children:ng(j.fund_nav)})]}),E.jsxs("article",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Trading Budget (DKK)"}),E.jsx("div",{className:"metric-value",children:ng(j.budget)})]}),E.jsxs("article",{className:"metric-card",children:[E.jsx("div",{className:"metric-label",children:"Last Revenue"}),E.jsx("div",{className:"metric-value",children:FA(j.last_revenue)})]})]}),E.jsxs("section",{className:"vsplit-container",style:{height:"100%"},children:[E.jsx("div",{className:"vsplit-pane",style:{flexBasis:he?"100%":`${Math.round($*100)}%`,flexGrow:1,minHeight:0,padding:v==="3d"?0:"1rem",display:"flex",flexDirection:"column"},children:v==="3d"?E.jsxs("div",{className:"viewer-panel",style:{minHeight:320,height:"100%",position:"relative"},children:[E.jsx("div",{style:{position:"absolute",top:8,right:8,zIndex:20,display:"flex",gap:8,alignItems:"center",background:"rgba(15,23,42,0.65)",padding:"6px 8px",borderRadius:6,border:"1px solid rgba(148,163,184,0.2)"},children:E.jsx("button",{className:"button",onClick:()=>_("builder"),style:{fontSize:11,padding:"4px 8px"},children:"🏗️ Edit Digital Twin"})}),E.jsx(tg,{config:b,animate:!Ue}),!b&&E.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#64748b"},children:[E.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🏗️"}),E.jsx("div",{children:"No digital twin configured"}),E.jsx("button",{className:"button",onClick:()=>_("builder"),style:{marginTop:12},children:"Create Digital Twin"})]})]}):E.jsx("div",{className:"metrics-grid",style:{height:"100%",overflow:"auto"},children:E.jsx(Ox,{apiBase:t,runId:s})})}),!he&&E.jsx("div",{className:"vsplit-divider",onMouseDown:()=>ce(!0),onDoubleClick:()=>I(.58)}),!he&&E.jsxs("div",{className:"split-container",style:{flexBasis:`${Math.round((1-$)*100)}%`,minHeight:180},children:[E.jsxs("div",{className:"split-pane",style:{flexBasis:`${Math.round(K*100)}%`,padding:"1rem",minHeight:220,display:"flex",flexDirection:"column",overflow:"auto"},children:[E.jsx("div",{className:"metric-label",children:"Scenario"}),c?E.jsxs("div",{children:[E.jsx("h3",{style:{margin:"0.25rem 0 0.5rem 0"},children:c.name}),E.jsx("p",{style:{color:"#94a3b8"},children:(ee=c.description)!=null?ee:"—"}),E.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.95rem",whiteSpace:"pre-wrap"},children:c.details&&E.jsx("p",{style:{marginTop:0},children:c.details})}),E.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.9rem"},children:[E.jsx("div",{style:{color:"#94a3b8",marginBottom:4},children:"Overrides"}),E.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:Object.entries(c.config_overrides||{}).map(([X,te])=>E.jsxs("li",{children:[E.jsx("code",{children:X}),": ",E.jsx("span",{children:String(te)})]},X))})]})]}):E.jsx("div",{children:"—"})]}),E.jsx("div",{className:"split-divider",onMouseDown:()=>D(!0),onDoubleClick:()=>G(.5)}),E.jsx("div",{className:"split-pane",style:{flexBasis:`${Math.round((1-K)*100)}%`,padding:0,minHeight:220,display:"flex",flexDirection:"column"},children:E.jsx("div",{className:"log-panel",style:{height:"100%",maxHeight:"100%",flex:1},children:p.map((X,te)=>E.jsx("div",{children:X},te))})})]})]})]})]}):E.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1"},children:[E.jsxs("div",{className:"header",children:[E.jsx("h1",{children:"Scenarios"}),E.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:E.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})})]}),E.jsx(zx,{apiBase:t,onRun:X=>{_("runs"),o(X),ze()}})]}),u==="builder"&&E.jsxs("main",{className:"main-content",style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[E.jsxs("div",{className:"header",style:{flexShrink:0},children:[E.jsxs("div",{children:[E.jsx("h1",{children:"🏗️ Digital Twin Builder"}),E.jsx("p",{style:{color:"#64748b",margin:0},children:"Drag and drop components to design your PED system"})]}),E.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[E.jsx("button",{className:"button",onClick:()=>C("2d"),disabled:P==="2d",children:"2D Editor"}),E.jsx("button",{className:"button",onClick:()=>C("3d"),disabled:P==="3d",children:"3D Preview"}),E.jsx("button",{className:"button",onClick:()=>_("scenarios"),children:"Scenarios"}),E.jsx("button",{className:"button",onClick:()=>_("runs"),children:"Back to Runs"})]})]}),E.jsx("div",{style:{flex:1,minHeight:0,overflow:"hidden"},children:P==="2d"?E.jsx(Hx,{onConfigChange:R,initialConfig:b,apiBase:t,onRunSimulation:X=>{o(X),_("runs"),ze()}}):E.jsx(tg,{config:b,animate:!Ue})})]})]})}class kA extends mg.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){var n;return{hasError:!0,message:(n=e==null?void 0:e.message)!=null?n:String(e)}}componentDidCatch(e,n){console.error("[UI ErrorBoundary]",e,n)}render(){return this.state.hasError?E.jsxs("div",{style:{padding:"1rem",color:"#fca5a5"},children:[E.jsx("h2",{children:"Something went wrong rendering the UI."}),E.jsx("pre",{style:{whiteSpace:"pre-wrap"},children:this.state.message})]}):this.props.children}}function wf(t,e){try{const n="__boot_error_overlay__";let i=document.getElementById(n);i||(i=document.createElement("div"),i.id=n,i.setAttribute("role","alert"),i.style.position="fixed",i.style.inset="0",i.style.zIndex="9999",i.style.background="rgba(15,23,42,0.96)",i.style.color="#fca5a5",i.style.fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial",i.style.padding="24px",document.body.appendChild(i));const r=typeof e=="string"?e:e instanceof Error?e.stack||e.message:JSON.stringify(e);i.innerHTML=`<h2 style="margin:0 0 8px 0; color:#fecaca">${t}</h2><pre style="white-space:pre-wrap; font-size:14px; color:#fca5a5">${r!=null?r:""}</pre>`}catch{}}window.addEventListener("error",t=>{wf("Runtime error",(t==null?void 0:t.error)||(t==null?void 0:t.message))});window.addEventListener("unhandledrejection",t=>{wf("Unhandled promise rejection",t==null?void 0:t.reason)});var ig,rg;try{let t=document.getElementById("root");t||(t=document.createElement("div"),t.id="root",document.body.appendChild(t)),console.log("[UI] Mounting app. API base =",(rg=(ig=import.meta)==null?void 0:ig.env)==null?void 0:rg.VITE_API_BASE),Pu.createRoot(t).render(E.jsx(mg.StrictMode,{children:E.jsx(kA,{children:E.jsx(OA,{})})}))}catch(t){console.error("[UI] Failed to mount app",t),wf("Failed to mount app",t)}
//# sourceMappingURL=index-BfblgijA.js.map
