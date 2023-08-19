// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).removePunctuation=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,c=n.__lookupGetter__,u=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var s,l,f,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(e,r)||u.call(e,r)?(s=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=s):e[r]=t.value),f="get"in t,p="set"in t,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var s=r;function l(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(e){return"string"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var y="function"==typeof Symbol?Symbol.toStringTag:"";var b=g()?function(e){var r,t,n,i,o;if(null==e)return d.call(e);t=e[y],o=y,r=null!=(i=e)&&h.call(i,o);try{e[y]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[y]=t:delete e[y],n}:function(e){return d.call(e)},v=String.prototype.valueOf;var w=g();function m(e){return"object"==typeof e&&(e instanceof String||(w?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function E(e){return f(e)||m(e)}function j(e){return"number"==typeof e}function _(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function x(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+_(i):_(i)+e,n&&(e="-"+e)),e}l(E,"isPrimitive",f),l(E,"isObject",m);var S=String.prototype.toLowerCase,T=String.prototype.toUpperCase;function k(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!j(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=x(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=x(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===T.call(e.specifier)?T.call(t):S.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function V(e){return"string"==typeof e}var A=Math.abs,O=String.prototype.toLowerCase,$=String.prototype.toUpperCase,R=String.prototype.replace,F=/e\+(\d)$/,I=/e-(\d)$/,P=/^(\d+)$/,C=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,G=/(\..*[^0])0*e/;function Z(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!j(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":A(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=R.call(t,G,"$1e"),t=R.call(t,L,"e"),t=R.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=R.call(t,F,"e+0$1"),t=R.call(t,I,"e-0$1"),e.alternate&&(t=R.call(t,P,"$1."),t=R.call(t,C,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===$.call(e.specifier)?$.call(t):O.call(t)}function M(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function U(e,r,t){var n=r-e.length;return n<0?e:e=t?e+M(n):M(n)+e}var W=String.fromCharCode,N=isNaN,X=Array.isArray;function z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function q(e){var r,t,n,i,o,a,c,u,s;if(!X(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(V(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,N(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=k(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):W(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Z(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=x(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=U(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function J(e){var r,t,n,i;for(t=[],i=0,n=D.exec(e);n;)(r=e.slice(i,D.lastIndex-n[0].length)).length&&t.push(r),t.push(H(n)),i=D.lastIndex,n=D.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function K(e){return"string"==typeof e}function Q(e){var r,t,n;if(!K(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=J(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return q.apply(null,t)}var Y=/[-\/\\^$*+?.()|[\]{}]/g;var ee=/./;function re(e){return"boolean"==typeof e}var te=Boolean.prototype.toString;var ne=g();function ie(e){return"object"==typeof e&&(e instanceof Boolean||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function oe(e){return re(e)||ie(e)}function ae(){return new Function("return this;")()}l(oe,"isPrimitive",re),l(oe,"isObject",ie);var ce="object"==typeof self?self:null,ue="object"==typeof window?window:null,se="object"==typeof global?global:null;var le=function(e){if(arguments.length){if(!re(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return ae()}if(ce)return ce;if(ue)return ue;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=le.document&&le.document.childNodes,pe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;l(ge,"REGEXP",de);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function ye(e){return null!==e&&"object"==typeof e}function be(e){var r,t,n,i;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}l(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye));var ve="function"==typeof ee||"object"==typeof pe||"function"==typeof fe?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};var we=RegExp.prototype.exec;var me=g();function Ee(e){return"object"==typeof e&&(e instanceof RegExp||(me?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===b(e)))}function je(e,r,t){if(!f(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));if(f(r))r=function(e){var r,t;if(!f(e))throw new TypeError(Q("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(t=e.length-1;t>=0&&"/"!==e[t];t--);return void 0===t||t<=0?e.replace(Y,"\\$&"):(r=(r=e.substring(1,t)).replace(Y,"\\$&"),e=e[0]+r+e.substring(t))}(r),r=new RegExp(r,"g");else if(!Ee(r))throw new TypeError(Q("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!f(t)&&"function"!==ve(t))throw new TypeError(Q("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return e.replace(r,t)}var _e=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;return function(e){if(!f(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1PB3B,IL",e));return je(e,_e,"")}}));
//# sourceMappingURL=index.js.map
