$(function() {
	function a(){var g=[];$(".j_PreLoad").each(function(){g.push($(this).data("bg"))
});$("img").each(function() {
	g.push($(this).attr("src"))
});

var h=0;for(var j=0;j<g.length;j++) {
	var k=new Image();k.src=g[j];k.onload=function(){h++;if(h==g.length){$(".frontpage").children().removeClass("hide");d.init();setTimeout(function(){window.scrollTo(0,0)
},500)
}}}}

function c(k) {
var l;var g=k.slice(0);var h;for(var j=k.length;j>0;j--){h=Math.floor(Math.random()*j);l=g[h];g[h]=g[j-1];g[j-1]=l
}

return g
}

function b() {
$("#j_reload").on("click tap",function(){document.location.reload()
});

if(f()) {
$("#j_weixin").removeClass("hide");e()
}$("#j_weibo").on("click tap",function() {
document.location.href="http://service.weibo.com/share/share.php?appkey=&title="+document.title+"&pic="+weixinShareConfig.logo+"&url="+encodeURIComponent(weixinShareConfig.homeLink)
})}

function f() {
var g=navigator.userAgent.toLowerCase();if(g.match(/MicroMessenger/i)=="micromessenger"){return true
}

else {
return false
}}

function e() {
$(".j_share_bg").click(function(){$(this).hide()
});$("#j_weixin").on("click tap",function() {
$(".j_share_bg").show()
})}

var d= {
config: examConfig,frontPage:$(".frontpage").eq(0),enter:$(".j_enter").eq(0),_endPage:$(".endpage").eq(0),sumDesc:$("#j_desc"),questionList:c(examConfig.questionList),len:examConfig.questionList.length,section:$(".frontpage").eq(0),pages:null,answers:null,sum:0,level:1,comments:examConfig.comments,names:examConfig.names,timer:null,pageRender:function(g){var h=d.questionList[g],j="";
j+='<section class="page" data-turn="'+(g+1)+'"><h3>第<span style="color:red; font-size:14;">'+(g+1)+"</span>题</h3>";j+='<div class="title"><div class="image"><img src="'+h.image+'"></div><p>'+h.question+"</p></div>";j+='<ul class="choices narrow">';if(h.answer=="A"){j+='<li><span class="j_answer" data-answer="1">'+h.answerA+"</span></li>"
}

else {
j+='<li><span class="j_answer">'+h.answerA+"</span></li>"
}

if(h.answer=="B") {
j+='<li><span class="j_answer" data-answer="1">'+h.answerB+"</span></li>"
}

else {
j+='<li><span class="j_answer">'+h.answerB+"</span></li>"
}

if(h.answer=="C") {
j+='<li><span class="j_answer" data-answer="1">'+h.answerC+"</span></li>"
}

else {
j+='<li><span class="j_answer">'+h.answerC+"</span></li>"
}

if(h.answer=="D") {
j+='<li><span class="j_answer" data-answer="1">'+h.answerD+"</span></li>"
}

else {
j+='<li><span class="j_answer">'+h.answerD+"</span></li>"
}

j+="</ul></section>";$(j).insertBefore(d.section);d.section=$(".page").first();d.pages=$(".page");d.answers=$(".j_answer");d.choiceInit()
},choiceInit:function() {
d.answers.on("click tap",function(){var k=$(this),i=k.parent(),l=k.parents(".page").eq(0),h=l.prev().prev()||null,g=parseInt(l.data("turn"));if(l.data("clicked")=="yes"){return
}

else {
l.data("clicked","yes");i.addClass("down");if(k.data("answer")&&k.data("answer")==1){i.addClass("correct");d.sum++
}

else {
i.addClass("wrong")
}

if(g==d.questionList.length) {
setTimeout(function(){l.addClass("fly");d.resultPage()
},200)
}

else {
setTimeout(function(){l.addClass("fly");if(g<d.len-1){d.pageRender(g+1)
}},200)
}}

if(h&&h.find("img").length>0) {
var j=h.find("img").eq(0);j.attr("src",j.data("src"))
}})},resultPage:function() {
d.level=Math.floor((d.sum-1)/5);d.sumDesc.html("你一共答对了"+d.sum+"题。"+d.comments[d.level]);switch(d.level){case 0: document.title="你获得“学渣”称号，你的语文是体育老师教的吗？";
break;case 1: document.title="你获得“普通学生”称号，对得起爹妈交的学费吗！";
break;case 2: document.title="你获得“学霸”称号，不过离三道杠的水平有点远~";
break;case 3: document.title="你获得“学神”称号，小时候一定吃了很多辣条吧！";
break
}

b()
},enterInit:function() {
d.enter.on("click tap",function(){var g=$(this);g.closest("section").addClass("fly")
})},init:function() {
for(var g=0;g<2;g++){d.pageRender(g)
}

d.enterInit();d.choiceInit()
}};

a()
});