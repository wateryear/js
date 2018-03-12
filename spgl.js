// ==UserScript==
// @name         商品落地高亮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://test.baidu.com/*
// @grant        none
// ==/UserScript==
window.helloworld = function() {

  function dropRepeat(str){
 var result=[];
 var hash={};
 for(var i=0, elem; i<str.length;i++){
  elem=str[i];
  if(!hash[elem]){
   hash[elem]=true;
   result=result+elem;
  }
 }
 return result;
}
//获取q标签文字内容
var d = document.getElementById("com_mark_reference_2");
var nodeList = d.getElementsByTagName("strong");
var keywordval = nodeList[0].innerHTML;
//将q拆分放入数组
var  str1 = keywordval.replace(/\s|\xA0/g,"");
    str1=str1.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
    str1=str1.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,"");
    str1=str1.replace(/[F|F|O|0|N|n|T|t|C|c|L|l|R|r|E|e|d|D]/g,"");
    str1=dropRepeat(str1);
 

 var keywords= new Array(); //定义一数组
 keywords=str1.split(""); //字符分割
//获取商品内容
 var d = document.getElementById("com_mark_reference_3");
 var nodeList = d.getElementsByTagName("strong");
 var text = nodeList[0].innerHTML;
 var  str = text.replace(/\s|\xA0/g,"");
     str=str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");

     str=str.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,"");
     str=str.replace(/[F|F|O|0|N|n|T|t|C|c|L|l|R|r|E|e|d|D]/g,"");
     str=dropRepeat(str);

  var keywords2= new Array(); //定义一数组

  keywords2=str.split(""); //字符分割

//alert(keywordval);

for (var i=0;i<keywords2.length;i++)
{
var searchVal2 = keywords2[i];
//alert(searchVal2);
var reg1 = new RegExp("("+searchVal2 +")","ig");
 keywordval = keywordval.replace(reg1,"<font color=red>$1</font>");
}
//alert(keywordval);

for (var i=0;i<keywords.length;i++)
{
var searchVal = keywords[i];
//alert(searchVal);
var reg = new RegExp("("+searchVal +")","ig");
 text = text.replace(reg,"<font color=red>$1</font>");
}

//alert(text);

 //初始化正则表达式,加上括号(),形成可捕获元组.ig表示全局匹配和不区分大小写

 //高亮要查找的字符串
 com_mark_reference_2.innerHTML =  keywordval;
 com_mark_reference_3.innerHTML = text;
    com_mark_reference_4.innerHTML=""
//循环执行
}
window.setInterval("helloworld()", 100);
