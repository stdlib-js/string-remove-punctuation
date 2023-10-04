// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var e=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;function i(i){if(!s(i))throw new TypeError(t("1PB3B,IL",i));return r(i,e,"")}export{i as default};
//# sourceMappingURL=index.mjs.map
