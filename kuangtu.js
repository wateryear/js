// ==UserScript==
// @ShortcutManager
// @name 鼠标放入手机框
// @namespace 1sgJo2viAGi2
// @key Down
// @include http://juejin.baidu.com/juejin/*
// ==/UserScript==
$("input[id='mobile-phone-0']:first").focus();



// ==UserScript==
// @ShortcutManager
// @name Select the right tab
// @namespace 1sgJo2viAGi2
// @key d
// @include http://juejin.baidu.com/juejin/*
// @execute SelectRightTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 无有效信息
// @namespace 1sgJo2viAGi2
// @key Ctrl+Num7
// @include http://juejin.baidu.com/juejin/*
// ==/UserScript==
var  ss = document.getElementById('feedback');

 
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




// ==UserScript==
// @ShortcutManager
// @name 反馈看不清模糊
// @namespace 1sgJo2viAGi2
// @key Ctrl+Num8
// @include http://juejin.baidu.com/juejin/*
// ==/UserScript==
var  ss = document.getElementById('feedback');
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
// @name 反馈不一致
// @namespace 1sgJo2viAGi2
// @key Ctrl+Num9
// @include http://juejin.baidu.com/juejin/*
// ==/UserScript==
var  ss = document.getElementById('feedback');
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
// @name 领取新任务
// @namespace 1sgJo2viAGi2
// @key w
// @include http://juejin.baidu.com/juejin/*
// ==/UserScript==
document.getElementsByClassName('continue-btn')[0].click();



// ==UserScript==
// @ShortcutManager
// @name 标注专用1
// @namespace wtTlRLuMpEX1
// @key a
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[value='1']").click();

// ==UserScript==
// @ShortcutManager
// @name 标注专用2
// @namespace wtTlRLuMpEX1
// @key s
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[value='2']").click();

// ==UserScript==
// @ShortcutManager
// @name 标注专用3
// @namespace wtTlRLuMpEX1
// @key d
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[value='3']").click();

// ==UserScript==
// @ShortcutManager
// @name 标注专用4
// @namespace wtTlRLuMpEX1
// @key f
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[value='4']").click();

// ==UserScript==
// @ShortcutManager
// @name 标注专用PASS
// @namespace ITPT1Gd5IgOr
// @key w
// @include http://test.baidu.com/*
// ==/UserScript==
$("input[value='6']").click();

// ==UserScript==
// @ShortcutManager
// @name 提交
// @namespace 8qGntqH6Ki5n
// @key Space
// @include http://test.baidu.com/*
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
// @namespace 8qGntqH6Ki5n
// @key Space
// @include http://test.baidu.com/*
// @execute SelectLeftTab([])
// ==/UserScript==

// ==UserScript==
// @ShortcutManager
// @name 红绿灯
// @namespace 8qGntqH6Ki5n
// @key g
// @include *
// ==/UserScript==
$("input[value='9']").click();

// ==UserScript==
// @ShortcutManager
// @name 电子烟
// @namespace 8qGntqH6Ki5n
// @key e
// @include *
// ==/UserScript==
$("input[value='7']").click();

// ==UserScript==
// @ShortcutManager
// @name 其他
// @namespace 8qGntqH6Ki5n
// @key r
// @include *
// ==/UserScript==
$("input[value='8']").click();

// ==UserScript==
// @ShortcutManager
// @name 5
// @namespace 8qGntqH6Ki5n
// @key q
// @include *
// ==/UserScript==
$("input[value='5']").click();
