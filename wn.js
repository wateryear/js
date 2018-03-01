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

str1="李宗仁,2,柳宗元,1,肖邦,4,工业机器人,1,林徽因,3,狗头金,1,绿宝石,7,杜仲,1,绿色建筑,0,谢水平,1,麦当娜,1,秦语,1,满汉全席,4,捷安特,1,徐志摩,1,劳动公园,3,内贾德,1,龙舌兰,0,花蕾,7,刘流,2,秦腔,1,普通话,1,年夜饭,1,跑马灯,1,龙女郎,1,留守儿童,0,订婚戒指,0,青钱柳,1,火山石,1,公益,0,曹雪芹,4,麦城,2,聂帅,1,南华大学,2,西域,1,奥克斯,14,库尔德,3,蜜汁炖鱿鱼,0,嫩江,1,历史学家,0,换了人间,0,举起手来,0,剁椒鱼头,0,瀑布,2,计算机科学,0,思科,0,反光镜,1,居家养老,0,临夏,2,孤独感,1,甲壳虫,3,昏君,1,刘家辉,3,梁小冰,0,护林员,0,国际物流,2,林心平,0,魔盒,1,旧金山,5,圣诞节,1,灵异事件,0,孟极,0,葛淑珍,1,李小锋,1,李满林,1,李维斯,2,马拉加,0";

var keywords= new Array(); //定义一数组

keywords=str1.split(","); //字符分割

//alert(keywords[2]);

var d = document.getElementById("com_mark_reference_1");
var nodeList = d.getElementsByTagName("strong");
var title = nodeList[0].innerHTML;



var i=$.inArray(title, keywords);
 if (i>-1){
 //var i=keywords.indexOf(title);
var k=keywords[i+1];
window.onbeforeunload='javascript:return true;';
var multi = document.getElementsByClassName("com-mark-pq-multi-content js-com-mark-pq-multi-content");
var single = document.getElementsByClassName("com-mark-pq-single-content js-com-mark-pq-single-content")
var name = document.body.innerText;
if(multi.length > 2)
multi[k].click();
else
single[k].click();
document.getElementById("js_submit_btn").click();


         }
else {
   // alert(keywords[2])
  //window.onbeforeunload='javascript:return true;';
  //document.getElementById("js_return_btn").click()
}
//刷新页面
//location.reload();
	}
//循环执行
window.setInterval("helloworld()", 1500);
