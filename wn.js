// ==UserScript==
// @name         无脑
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.baidu.com/*
// @grant        none
// ==/UserScript==
window.helloworld = function() {

str1="广饶,1,董存瑞,3,林小宅,0"; 

var keywords= new Array(); //定义一数组 

keywords=str1.split(","); //字符分割 



var d = document.getElementById("com_mark_reference_1");
var nodeList = d.getElementsByTagName("strong");
var title = nodeList[0].innerHTML;
var re = new RegExp(keywords.join('|'), 'gi');
 if (re.test(title)){
 var i=keywords.indexOf(title);
var k=keywords[i+1];
window.onbeforeunload='javascript:return true;';
var multi = document.getElementsByClassName("com-mark-pq-multi-content js-com-mark-pq-multi-content");
var single = document.getElementsByClassName("com-mark-pq-single-content js-com-mark-pq-single-content")
var name = document.body.innerText;
if(multi.length > 2)
multi[k].click();
else 
single[k].click();
 

 
         }
else {
    window.onbeforeunload='javascript:return true;';
document.getElementById("js_return_btn").click()
}

	}
//循环执行
window.setInterval("helloworld()", 1500);
