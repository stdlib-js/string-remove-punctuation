// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,c=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var s,l,f,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||u.call(r,e)?(s=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=s):r[e]=t.value),f="get"in t,p="set"in t,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,t.get),p&&a&&a.call(r,e,t.set),r};var s=e;function l(r,e,t){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r){return"string"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=g()?function(r){var e,t,n,i,o;if(null==r)return d.call(r);t=r[h],o=h,e=null!=(i=r)&&y.call(i,o);try{r[h]=void 0}catch(e){return d.call(r)}return n=d.call(r),e?r[h]=t:delete r[h],n}:function(r){return d.call(r)},v=String.prototype.valueOf;var w=g();function m(r){return"object"==typeof r&&(r instanceof String||(w?function(r){try{return v.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function E(r){return f(r)||m(r)}function j(r){return"number"==typeof r}function _(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function x(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+_(i):_(i)+r,n&&(r="-"+r)),r}l(E,"isPrimitive",f),l(E,"isObject",m);var S=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!j(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=x(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=x(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):S.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function V(r){return"string"==typeof r}var A=Math.abs,O=String.prototype.toLowerCase,R=String.prototype.toUpperCase,$=String.prototype.replace,F=/e\+(\d)$/,C=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,G=/(\..*[^0])0*e/;function Z(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!j(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$.call(t,G,"$1e"),t=$.call(t,L,"e"),t=$.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$.call(t,F,"e+0$1"),t=$.call(t,C,"e-0$1"),r.alternate&&(t=$.call(t,I,"$1."),t=$.call(t,P,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===R.call(r.specifier)?R.call(t):O.call(t)}function M(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function N(r,e,t){var n=e-r.length;return n<0?r:r=t?r+M(n):M(n)+r}var U=String.fromCharCode,W=isNaN,X=Array.isArray;function z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function q(r){var e,t,n,i,o,a,c,u,s;if(!X(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(V(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):U(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Z(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=x(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function J(r){var e,t,n,i;for(t=[],i=0,n=D.exec(r);n;)(e=r.slice(i,D.lastIndex-n[0].length)).length&&t.push(e),t.push(H(n)),i=D.lastIndex,n=D.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function K(r){return"string"==typeof r}function Q(r){var e,t,n;if(!K(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=J(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return q.apply(null,t)}var Y=/[-\/\\^$*+?.()|[\]{}]/g;var rr=/./;function er(r){return"boolean"==typeof r}var tr=Boolean.prototype.toString;var nr=g();function ir(r){return"object"==typeof r&&(r instanceof Boolean||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function or(r){return er(r)||ir(r)}function ar(){return new Function("return this;")()}l(or,"isPrimitive",er),l(or,"isObject",ir);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lr="object"==typeof sr?sr:null;var fr=function(r){if(arguments.length){if(!er(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ar()}if(cr)return cr;if(ur)return ur;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=fr.document&&fr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;l(dr,"REGEXP",yr);var hr=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function br(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,i;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}l(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var wr="function"==typeof rr||"object"==typeof gr||"function"==typeof pr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};var mr=RegExp.prototype.exec;var Er=g();function jr(r){return"object"==typeof r&&(r instanceof RegExp||(Er?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===b(r)))}function _r(r,e,t){if(!f(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));if(f(e))e=function(r){var e,t;if(!f(r))throw new TypeError(Q("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Y,"\\$&"):(e=(e=r.substring(1,t)).replace(Y,"\\$&"),r=r[0]+e+r.substring(t))}(e),e=new RegExp(e,"g");else if(!jr(e))throw new TypeError(Q("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!f(t)&&"function"!==wr(t))throw new TypeError(Q("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}var xr=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;function Sr(r){if(!f(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("0hR3N",r));return _r(r,xr,"")}export{Sr as default};
//# sourceMappingURL=mod.js.map
