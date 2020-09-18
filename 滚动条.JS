// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';



  window.helloworld = function() {
  window.scrollTo(0,230);
   if(document.getElementsByClassName("continue-btn"))
{
window.setTimeout("document.getElementsByClassName('continue-btn')[0].click()", 10);

}



}
window.setInterval("helloworld()", 300);
})();
