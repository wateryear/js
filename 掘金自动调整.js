// ==UserScript==
// @name         调整页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://juejin.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';



  window.helloworld = function() {
 var y="放大展示(Alt + t)";
       y =y.replace(/(^\s*)|(\s*$)/g, "");
 var j="继续答题";
 

var x = document.getElementsByClassName("button default")[0].innerHTML;
    x =x.replace(/(^\s*)|(\s*$)/g, "");
 
if(x ==y)
{
document.getElementsByClassName("button default")[0].click();
}
      if(x ==j)
{
   // window.setTimeout("document.getElementsByClassName('button defaul')[0].click()", 500);
document.getElementsByClassName("button default")[0].click();
}
  var q = document.getElementsByClassName("ui-confirm-footer-item")[1].innerHTML;
      q =q.replace(/(^\s*)|(\s*$)/g, "");
 var z="确认";
if(q ==z)
{
document.getElementsByClassName("ui-confirm-footer-item")[1].click();
}
}
window.setInterval("helloworld()", 1000);
})();
