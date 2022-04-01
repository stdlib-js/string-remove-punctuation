// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=s.isPrimitive,e=t,n=r,d=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;var m=function(s){if(!i(s))throw new TypeError(n("invalid argument. Must provide a string. Value: `%s`.",s));return e(s,d,"")};export{m as default};
//# sourceMappingURL=index.mjs.map
