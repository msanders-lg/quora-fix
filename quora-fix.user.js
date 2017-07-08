// ==UserScript==
// @name         Quora Fix
// @namespace    https://github.com/msanders-lg
// @author       msanders-lg
// @version      0.15
// @description  Removes login wall + scroll lock
// @contactURL   https://github.com/msanders-lg
// @supportURL   https://github.com/msanders-lg
// @downloadURL  https://raw.githubusercontent.com/msanders-lg/quora-fix/master/quora-fix.user.js
// @updateURL    https://raw.githubusercontent.com/msanders-lg/quora-fix/master/quora-fix.user.js
// @license      MIT; https://raw.githubusercontent.com/msanders-lg/quora-fix/master/license
// @include      http*://*.quora.com/*
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js#md5=5f48fc77cac90c4778fa24ec9c57f37d,sha256=9365920887b11b33a3dc4ba28a0f93951f200341263e3b9cefd384798e4be398
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("div[id$='_signup_wall_wrapper']").remove();
    $("div[id$='_signup_container']").remove();
    $("body").removeClass ("signup_wall_prevent_scroll");
})();