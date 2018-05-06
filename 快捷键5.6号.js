// ==UserScript==
// @ShortcutManager
// @name 提交
// @namespace 1sgJo2viAGi2
// @key Space
// @include http://test.baidu.com/mark/*
// ==/UserScript==
try{
   var url=document.location.href;
       var xiangmu='abc';
       var tihao= localStorage.getItem(xiangmu);
       var tihao=parseInt(tihao);  
       if (tihao<100){
         tihao=tihao+1;
        localStorage.setItem(xiangmu, tihao);
           
        }
        
     
 else if(tihao>99){
         alert('恭喜你打了100题了');
         tihao=tihao-100;
     localStorage.setItem(xiangmu, tihao);
   }
      
       $("#js_submit_btn")[0].click();
   window.setTimeout("window.scrollTo(0,135)", 3000);
     
}
catch(e){}

// ==UserScript==
// @ShortcutManager
// @name Select the left tab
// @namespace 1sgJo2viAGi2
// @key Space
// @include http://test.baidu.com/mark/*
// @execute SelectLeftTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 自行车
// @namespace 1sgJo2viAGi2
// @key a
// @include http://test.baidu.com/mark/task/*
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[0].click();

// ==UserScript==
// @ShortcutManager
// @name 文字
// @namespace 1sgJo2viAGi2
// @key s
// @include http://test.baidu.com/mark/*
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[1].click();

// ==UserScript==
// @ShortcutManager
// @name 第二项
// @namespace 1sgJo2viAGi2
// @key d
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[2].click();

// ==UserScript==
// @ShortcutManager
// @name 33
// @namespace 1sgJo2viAGi2
// @key f
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[3].click();

// ==UserScript==
// @ShortcutManager
// @name 44
// @namespace 1sgJo2viAGi2
// @key g
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[8].click();

// ==UserScript==
// @ShortcutManager
// @name 444
// @namespace 1sgJo2viAGi2
// @key w
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[5].click();

// ==UserScript==
// @ShortcutManager
// @name 777
// @namespace 1sgJo2viAGi2
// @key e
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[6].click();

// ==UserScript==
// @ShortcutManager
// @name 888
// @namespace 1sgJo2viAGi2
// @key r
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[7].click();

// ==UserScript==
// @ShortcutManager
// @name 红绿灯
// @namespace 1sgJo2viAGi2
// @key q
// @include *
// ==/UserScript==
$("input[name='mark-rect-attr-choice-rect-type']")[4].click();

// ==UserScript==
// @ShortcutManager
// @name 电话
// @namespace 1sgJo2viAGi2
// @key Up
// @include http://juejin.baidu.com/*
// ==/UserScript==
$("input[id='tele-phone-0']:first").focus();

// ==UserScript==
// @ShortcutManager
// @name 手机
// @namespace 1sgJo2viAGi2
// @key Down
// @include http://juejin.baidu.com/*
// ==/UserScript==
$("input[id='mobile-phone-0']:first").focus();

// ==UserScript==
// @ShortcutManager
// @name 无有效信息
// @namespace 1sgJo2viAGi2
// @key F1
// @include http://juejin.baidu.com/*
// ==/UserScript==
var ss = document.getElementById('feedback');

document.getElementsByClassName('btn2')[0].click();

ss[1].selected = true;
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

if(document.getElementsByClassName("continue-btn")>0) {
document.getElementsByClassName('continue-btn')[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name 看不清
// @namespace 1sgJo2viAGi2
// @key F2
// @include http://juejin.baidu.com/*
// ==/UserScript==
var ss = document.getElementById('feedback');
document.getElementsByClassName('btn2')[0].click();

ss[2].selected = true;
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name 不一致
// @namespace 1sgJo2viAGi2
// @key F3
// @include http://juejin.baidu.com/*
// ==/UserScript==
var ss = document.getElementById('feedback');
document.getElementsByClassName('btn2')[0].click();

ss[3].selected = true;
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name Reload
// @namespace 1sgJo2viAGi2
// @key v
// @include *
// @execute Reload([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 名称与图片一致
// @namespace 1sgJo2viAGi2
// @key a
// @include http://juejin.baidu.com/*
// ==/UserScript==
$("input[value='名称与图片一致']").click();
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name 一致
// @namespace 1sgJo2viAGi2
// @key s
// @include http://juejin.baidu.com/*
// ==/UserScript==
$("input[value='名称与图片不一致']").click();
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name 非正常
// @namespace 1sgJo2viAGi2
// @key d
// @include http://juejin.baidu.com/*
// ==/UserScript==
$("input[value='图片所拍为非正常地点']").click();
if(document.getElementById("save-next"))
{
$("#save-next")[0].click();
}
if(document.getElementById("save-submit"))
{
$("#save-submit")[0].click();
}

// ==UserScript==
// @ShortcutManager
// @name 选1
// @namespace 1sgJo2viAGi2
// @key Num1
// @include http://test.baidu.com/*
// ==/UserScript==
try{
var url=document.location.href;
if (url.indexOf("eva")!=-1) {
$("#eva_form label")[0].click();
$("#next_eva")[0].click();
}
if (url.indexOf("task")!=-1) {
$("div[data-id='101']").click();
$("#js_submit_btn")[0].click();
}
}
catch(e){}

// ==UserScript==
// @ShortcutManager
// @name Select the left tab
// @namespace 1sgJo2viAGi2
// @key Num1
// @include http://test.baidu.com/*
// @execute SelectLeftTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 选项2
// @namespace 1sgJo2viAGi2
// @key Num3
// @include *
// ==/UserScript==
try{
var url=document.location.href;
if (url.indexOf("eva")!=-1) {
$("#eva_form label")[0].click();
$("#next_eva")[1].click();
}
if (url.indexOf("task")!=-1) {
$("div[data-id='102']").click();
$("#js_submit_btn")[0].click();
}
}
catch(e){}

// ==UserScript==
// @ShortcutManager
// @name Select the left tab
// @namespace 1sgJo2viAGi2
// @key Num3
// @include *
// @execute SelectLeftTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 归还题目
// @namespace 1sgJo2viAGi2
// @key Num5
// @include http://test.baidu.com/*
// ==/UserScript==
window.onbeforeunload='javascript:return true;';
document.getElementById("js_return_btn").click()

// ==UserScript==
// @ShortcutManager
// @name Select the left tab
// @namespace 1sgJo2viAGi2
// @key Num5
// @include *
// @execute SelectLeftTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 领题
// @namespace 1sgJo2viAGi2
// @key w
// @include http://juejin.baidu.com/*
// ==/UserScript==
document.getElementsByClassName('continue-btn')[0].click();
