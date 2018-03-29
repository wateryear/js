// ==UserScript==
// @name         自动质检
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.baidu.com/mark/task/doCheck/*
// @grant        none
// ==/UserScript==
window.helloworld = function() {
  var d = document.getElementById("quality_que_count");

  var text = d.innerText;
    if(text<343){
          $("#js_submit_btn")[0].click();
}
  //alert(text);


   



}
window.setInterval("helloworld()", 20000);


