// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;function i(i){if(!s(i))throw new TypeError(t("0hR3N",i));return r(i,e,"")}export{i as default};
//# sourceMappingURL=index.mjs.map
