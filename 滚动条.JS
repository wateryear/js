// ==UserScript==
// @name         滚动条
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.baidu.com/*
// @grant        none
// ==/UserScript==
window.helloworld = function() {

window.scrollTo(0,125);

}
window.setTimeout("helloworld()", 3000);
