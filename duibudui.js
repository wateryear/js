// ==UserScript==
// @name         对不对
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.baidu.com/*
// @grant        none
// ==/UserScript==
window.helloworld = function() {



//获取q标签文字内容
var d =document.getElementsByClassName("com-mark-pq-content");

var keywordval = d[0].innerText;

//alert(keywordval);


var nodeList = d[0].getElementsByTagName("strong");
var keywordval0 = nodeList[0].innerText;
var keywordval2 = nodeList[2].innerText;
    var keywordval3 = nodeList[3].innerText;
     var str_before = keywordval3.split("(")[0];
 // alert(str_before);


//获取原文内容
var y =document.getElementById("com_mark_reference_1");
var yw = y.innerText;
//alert(yw);



var searchVal2 =  keywordval0;
var searchVal3 =  keywordval2;
var searchVal4 =  str_before;
var reg1 = new RegExp("("+searchVal2 +")","ig");
yw = yw.replace(reg1,"<font color=red>$1</font>");
    var reg2 = new RegExp("("+searchVal3 +")","ig");
yw = yw.replace(reg2,"<font color=blue>$1</font>");
    var reg3 = new RegExp("("+searchVal4 +")","ig");
yw = yw.replace(reg3,"<font color=red>$1</font>");



//alert(yw);


 //初始化正则表达式,加上括号(),形成可捕获元组.ig表示全局匹配和不区分大小写

 //高亮要查找的字符串
 com_mark_reference_1.innerHTML =yw;

com_mark_reference_2.innerHTML="";





}
window.setInterval("helloworld()", 150);
