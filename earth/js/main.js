var debug=false;
if(debug){
	$(".alert").show();
}
//调试
window.onerror=function(sMsg,sUrl,sLine){
	$(".alert").text(sMsg+" at "+sLine);
}

isPhone4inches = (window.screen.height==480);
isPhone5inches = (window.screen.height==568);
isPhone6inches = (window.screen.height==667);
isPhone6plusinches = (window.screen.height==736);
if(isPhone4inches){
	$('#scene_index').addClass("iphone4");
	$('#scene_shop').addClass("iphone4");
	$(".alert").text("iphone4");
}
if(isPhone5inches){
	$('#scene_index').addClass("iphone5");
	$('#scene_shop').addClass("iphone5");
	$(".alert").text("iphone5");
}
if(isPhone6inches){
	$('#scene_index').addClass("iphone6");
	$('#scene_shop').addClass("iphone6");
	$(".alert").text("iphone6");
}
if(isPhone6plusinches){
	$('#scene_index').addClass("iphone6plus");
	$('#scene_shop').addClass("iphone6plus");
	$(".alert").text("iphone6plus");
}


//显示开头banner动画
showBannerGif=function(){
	$(".index-page #index_gif1").show();
	$(".index-page #index_gif1").attr("src","images/index_gif1.gif");
}
//隐藏开头banner动画
hideBannerGif=function(){
	$(".index-page #index_gif1").hide();
	$(".index-page .index-next-btn").show();
	$(".index-page .index-next-btn").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "离开首页进入答题", "", ""]);
		exitIndexPage();
	})
	$(".index-page #index_mark").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "弹出", "查看首页帮助", "", ""]);
		showHelpInfo();
	})
}

//开始第一页
loadIndexPage=function(){
	$(".page").hide();
	$(".page.index-page").show();
	$(".index-page #quiz_paper").show();
	$(".index-page #quiz_paper").attr("src","images/quiz_paper.gif");
	var tl=new TimelineMax({
		delay:1,
	});
	var earth=$("#index_earth");
	tl.fromTo(earth,1,{top:"100%", opacity:0},{top:"38%", opacity:1})
		.fromTo($(".index-page #index_text1")[0],0.5,{left:"45%", opacity:0},{left:"50%",opacity:1})
		.fromTo($(".index-page #index_you")[0],2,{right:"12%",top:"14%", height:"86px",width:"74px", opacity:0,ease:Elastic.easeOut},{right:"4%",top:"7%",height:"173px",width:"148px",opacity:1,ease:Elastic.easeOut},"-=0.5")
		.fromTo($(".index-page #index_text2")[0],0.5,{left:"55%",opacity:0},{left:"50%",opacity:1},"-=1.5")
		.fromTo($(".index-page #index_text3")[0],1.5,{top:"4%",opacity:0},{top:"2%",opacity:1},"-=1")
		.fromTo($(".index-page #index_arrow")[0],1.5,{opacity:0},{opacity:1},"-=1.5")
		.call(showBannerGif, ["param1"], this, "-=1.2")	
		.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:0},{opacity:1},"-=0.3")
		.call(hideBannerGif, ["param1"], this, "-=0")
		.fromTo($(".index-page #index_shadow")[0],0.1,{opacity:0},{opacity:0.3},"-=0")
		.fromTo($(".index-page #index_help")[0],2,{top:"42%",left:"14%",opacity:0,ease:Elastic.easeOut},{top:"32%",left:"4%",opacity:1,ease:Elastic.easeOut},"+=0.1")
		.fromTo($(".index-page #index_firefly")[0],1,{top:"42%",right:"14%",opacity:0},{top:"38%",right:"6%",opacity:1},"-=2")
		.fromTo($("#index_mark")[0],1,{"bottom":"0px",opacity:0},{"bottom":"101px",opacity:1},"-=2")
		.fromTo($("#index_wechat")[0],1,{"bottom":"0px",opacity:0},{"bottom":"82px",opacity:1},"-=2")
		.fromTo($(".index-page #index_logo")[0],1,{top:"-100px",opacity:0},{top:"0px",opacity:1},"-=2");
		
};

function showHelpInfo(){
	//console.info("showHelpInfo");
	$(".index-page #index_know").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "关闭", "关闭首页帮助", "", ""]);
		hideHelpInfo();
	})
	var tl=new TimelineMax({
		delay:0.5,
	});
	$(".index-page #scene_help").show();
	tl.fromTo($(".index-page #scene_help")[0],0.5,{opacity:0},{opacity:1})
	.fromTo($(".index-page #index_info")[0],1.5,{"margin-top":"-800px",ease:Elastic.easeInOut},{"margin-top":"0px",ease:Elastic.easeInOut},"-=1")
}

function hideHelpInfo(){
	//console.info("showHelpInfo");
	var tl=new TimelineMax({
		delay:0.5,
	});
	
	tl.fromTo($(".index-page #scene_help")[0],0.5,{opacity:1},{opacity:0})
	.fromTo($(".index-page #index_info")[0],1.5,{"margin-top":"0px",ease:Elastic.easeInOut},{"margin-top":"-800px",ease:Elastic.easeInOut},"-=1")
	.call(function(){$(".index-page #scene_help").hide();}, ["param1"], this, "-=0")
}

$("#index_wechat").unbind("click").on("click",function(){
	_hmt.push(['_trackEvent', "弹出", "打开二维码", "", ""]);
	showQrcode();
})

function showQrcode(){
	//console.info("showQrcode");
	$(".qrcode .back").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "关闭", "关闭二维码", "", ""]);
		hideQrcode();
	})
	$(".qrcode").fadeIn();
	
}

function hideQrcode(){
	//console.info("showHelpInfo");
	var tl=new TimelineMax({
		delay:0.5,
	});	
	$(".qrcode").fadeOut();
}

function exitIndexPage(){
	//console.info("exitIndexPage");
	var tl=new TimelineMax({
		delay:0,
	});
	$(".index-page .index-next-btn").unbind("click");
	$(".index-page .index-next-btn").hide();
	tl.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:1},{opacity:0})
		.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:1},{opacity:0})
		.fromTo($(".index-page #index_gif2")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #index_gif2")[0],1,{opacity:1},{opacity:0})
		.fromTo($(".index-page #index_shadow")[0],1,{opacity:0.3},{opacity:0},"-=1")
		.fromTo($(".index-page #index_firefly")[0],0.5,{top:"38%",right:"6%",opacity:1},{top:"28%",right:"-6%",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_mark")[0],0.5,{bottom:"101px",opacity:1},{bottom:"-4%",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_wechat")[0],0.5,{bottom:"82px",opacity:1},{bottom:"-4%",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_logo")[0],0.5,{bottom:"0px",opacity:1},{bottom:"-100px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_help")[0],0.5,{top:"32%",left:"4%",opacity:1},{top:"18%",left:"-32%",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_logo")[0],0.5,{bottom:"0px",opacity:1},{bottom:"-100px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_text1")[0],0.5,{top:"9%",opacity:1},{top:"-100px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_text2")[0],0.5,{top:"20%",opacity:1},{top:"-100px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_text3")[0],0.5,{top:"2%",opacity:1},{top:"-100px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_you")[0],0.5,{top:"7%",opacity:1},{top:"-150px",opacity:0},"-=0.5")
		.fromTo($(".index-page #index_arrow")[0],0.5,{top:"26%",opacity:1},{top:"-100px",opacity:0},"-=0.5")
		.call(function(){$(".index-page #index_bg").css("opacity","0")}, ["param1"], this, "-=0")
		.fromTo($(".index-page #index_earth")[0],1,{top:"38%",scale:1,opacity:1},{top:"25%",scale:2.5,opacity:0.6},"-=0.4")
		.call(loadQuizPage, ["param1"], this, "-=0")
}

var quizPageNumber;
function loadQuizPage(){
	$("#scene_quiz").show();
	$('#scene_quiz').parallax({});
	$(".index-page #quiz_next").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "下一页问题", "目标页码", quizPageNumber+1]);
		nextQuizPaper();
	});
	$(".index-page #quiz_back").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "上一页问题", "目标页码", quizPageNumber-1]);
		prevQuizPaper();
	});
	$(".index-page #quiz_submit").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "提交问题", "", ""]);
		checkQuizAnswer();
	});
	$(".index-page .quiz .answer").unbind("click").on("click",function(){
		var value=$(this).parent().attr("id")+"-"+$(this).attr("id");
		_hmt.push(['_trackEvent', "页面点击", "点击答案", "问题，答案", value]);
		$(this).parent().find(".answer img").hide();
		$(this).addClass("active");
		$(this).find("img").show();
	});
	quizPageNumber=1;
	var tl=new TimelineMax({
		delay:1,
	});
	tl.fromTo($(".index-page #quiz_title")[0],0.5,{top:"-5%",opacity:0},{top:"3%",opacity:1})
		.fromTo($(".index-page #quiz_upcloud")[0],0.5,{right:"-5%",opacity:0},{right:"5%",opacity:1},"-=0.5")
		.fromTo($(".index-page #quiz_back")[0],0.5,{bottom:"-5%",opacity:0},{bottom:"5%",opacity:1},"-=0.5")
		.fromTo($(".index-page #quiz_next")[0],0.5,{bottom:"-5%",opacity:0},{bottom:"5%",opacity:1},"-=0.5")
		.call(function(){$(".quiz.page"+quizPageNumber).fadeIn(500)}, ["param1"], this, "-=0")
}

function nextQuizPaper(){	
	//console.info("nextQuizPaper");
	//loadScorePage();
	$(".index-page #quiz_next").unbind("click")
	$(".index-page #quiz_back").unbind("click")
	$(".index-page #quiz_submit").unbind("click")
	var tl=new TimelineMax({
		delay:0,
	});
	$(".quiz.page"+quizPageNumber).hide();
	quizPageNumber++;
	if(quizPageNumber==5){
		$(".index-page #quiz_next").fadeOut();
	}
	if(quizPageNumber==2){
		$(".index-page #quiz_back").fadeIn();
	}
	// tl.fromTo($(".index-page #quiz_paper")[0],0.8,{"margin-left":"-48%",ease:Back.easeInOut},{"margin-left":"-150%",ease:Back.easeInOut})
	// .fromTo($(".index-page #quiz_paper")[0],0.8,{"margin-left":"48%",ease:Back.easeInOut},{"margin-left":"-48%",ease:Back.easeInOut},"-=0.2")
	// tl.fromTo($(".index-page #quiz_paper")[0],0.4,{opacity:1},{opacity:0})
	// .fromTo($(".index-page #quiz_paper")[0],0.4,{opacity:0},{opacity:1})
	tl.call(function(){
		$(".quiz.page"+quizPageNumber).fadeIn(500);
		if(quizPageNumber==5){
			$(".index-page #quiz_submit").css("opacity",1).fadeIn();
		}
	},["param1"], this)
	.call(function(){
		$(".index-page #quiz_next").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "下一页问题", "目标页码", quizPageNumber+1]);
			nextQuizPaper();
		});
		$(".index-page #quiz_back").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "上一页问题", "目标页码", quizPageNumber-1]);
			//console.info("prevQuizPaper");
			prevQuizPaper();
		});
		$(".index-page #quiz_submit").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "提交问题", "", ""]);
			checkQuizAnswer();
		});
	},["param1"], this,"+=0.5")
}

function prevQuizPaper(){	
	$(".index-page #quiz_next").unbind("click")
	$(".index-page #quiz_back").unbind("click")
	$(".index-page #quiz_submit").unbind("click")	
	var tl=new TimelineMax({
		delay:0,
	});
	$(".quiz.page"+quizPageNumber).hide();
	quizPageNumber--;
	if(quizPageNumber==4){
		$(".index-page #quiz_next").fadeIn();
		$(".index-page #quiz_submit").hide();
	}
	if(quizPageNumber==1){
		$(".index-page #quiz_back").fadeOut();
	}
	// tl.fromTo($(".index-page #quiz_paper")[0],0.8,{"margin-left":"-48%",ease:Back.easeInOut},{"margin-left":"48%",ease:Back.easeInOut})
	// .fromTo($(".index-page #quiz_paper")[0],0.8,{"margin-left":"-148%",ease:Back.easeInOut},{"margin-left":"-48%",ease:Back.easeInOut},"-=0.2")
	// tl.fromTo($(".index-page #quiz_paper")[0],0.4,{opacity:1},{opacity:0})
	// .fromTo($(".index-page #quiz_paper")[0],0.4,{opacity:0},{opacity:1})
	tl.call(function(){
		$(".quiz.page"+quizPageNumber).fadeIn(500)
	}, ["param1"], this, "-=0.3")
	.call(function(){
		$(".index-page #quiz_next").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "下一页问题", "目标页码", quizPageNumber+1]);
			nextQuizPaper();
		});
		$(".index-page #quiz_back").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "上一页问题", "目标页码", quizPageNumber-1]);
			//console.info("prevQuizPaper");
			prevQuizPaper();
		});
		$(".index-page #quiz_submit").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "翻页", "提交问题", "", ""]);
			checkQuizAnswer();
		});
	},["param1"], this,"+=0.5")
}

score=0;

function checkQuizAnswer(){
	var allChecked=true;//是否全部答题
	$(".index-page #scene_quiz .quiz").each(function(index,item){
		if($(this).find(".active").length>0){
			quiz[$(this).attr("id")].answer=$(this).find(".active").attr("id");
		}else{
			allChecked=false;
		}		
	})
	if(allChecked){
		score=0.4;
		score+=quiz["q1"][quiz["q1"].answer].value;
		score+=quiz["q2"][quiz["q2"].answer].value;
		score+=quiz["q3"][quiz["q3"].answer].value;

		score+=quiz["q6"][quiz["q6"].answer].value;
		score+=quiz["q5"][quiz["q5"].answer].value;

		score+=quiz["q12"][quiz["q12"].answer].value;
		score+=quiz["q10"][quiz["q10"].answer].value;
		
		score+=quiz["q8"][quiz["q8"].answer].value*quiz["q7"][quiz["q7"].answer].value*50;
		score+=quiz["q9"][quiz["q9"].answer].value*quiz["q7"][quiz["q7"].answer].value;
		score+=quiz["q4"][quiz["q4"].answer].value*quiz["q11"][quiz["q11"].answer].value;
		score=Math.round(score*10)/10;
		if(score<=1.5){
			_shareTitle = "棒棒哒，养活70亿个我，只需要"+score+"个地球，求超越！";
		}else{
			_shareTitle = "天啦撸，养活70亿个我，竟然需要"+score+"个地球，快围观！";
		}		
		initWXShareContent();
		loadScorePage();
	}else{
		if(debug){
			loadScorePage();
		}else{
			score=2;
			showQuizAlert();
		}
	}
	console.info("drawScoreEarth: "+score);
}

function showQuizAlert(){
	//console.info("showQuizAlert");
	$(".index-page #quiz_retry").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "弹出", "关闭提示答题不全", "", ""]);
		hideQuizAlert();
	})
	var tl=new TimelineMax({
		delay:0.5,
	});
	$(".index-page #scene_miss").show();
	tl.fromTo($(".index-page #scene_miss")[0],0.5,{opacity:0},{opacity:1})
	.fromTo($(".index-page #quiz_miss")[0],1.5,{"margin-top":"-800px",ease:Elastic.easeInOut},{"margin-top":"0px",ease:Elastic.easeInOut},"-=1")
}

function hideQuizAlert(){
	//console.info("hideQuizAlert");
	var tl=new TimelineMax({
		delay:0.5,
	});	
	tl.fromTo($(".index-page #scene_miss")[0],0.5,{opacity:1},{opacity:0})
	.fromTo($(".index-page #quiz_miss")[0],1.5,{"margin-top":"0px",ease:Elastic.easeInOut},{"margin-top":"-800px",ease:Elastic.easeInOut},"-=1")
	.call(function(){$(".index-page #scene_miss").hide();}, ["param1"], this, "-=0")
}
$('#scene_score').parallax({});
$('#scene_info').parallax({});

function loadScorePage(){
	var tl=new TimelineMax({
		delay:0,
	});
	tl.fromTo($(".index-page #quiz_submit")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #quiz_submit")[0],0.1,{opacity:1},{opacity:0})
		.fromTo($(".index-page #quiz_submit")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #quiz_submit")[0],0.1,{opacity:1},{opacity:0})
		.fromTo($(".index-page #quiz_submit")[0],0.1,{opacity:0},{opacity:1})
		.fromTo($(".index-page #quiz_submit")[0],0.5,{opacity:1},{opacity:0})
		.fromTo($(".index-page #scene_quiz")[0],3,{"margin-top":"0%"},{"margin-top":"2400px"})
		.fromTo($(".index-page #index_earth")[0],3,{top:"25%"},{top:"150%"},"-=3")
		.fromTo($(".index-page #index_bg")[0],3,{opacity:0,top:"-30%"},{opacity:1,top:"0"},"-=3")		
		.call(function(){			
			drawScoreResult();
			$(".quiz.page"+quizPageNumber).hide();
		}, ["param1"], this, "-=0.5")
}

function loadPage(pageClass){

}

// 渲染分数地球
function drawScoreResult(){
	//console.info(".score-result.score"+Math.ceil(score));
	$("#scene_score").show();
	$(".score-result").hide();
	if(score>1.5){
		$("#scene_score #score_good").hide();
		$("#scene_score #score_good_num").hide();
		$("#scene_score #score_poor").show();
		$("#scene_score #score_poor_num").text(score);
		$("#scene_score #score_poor_num").show();
		$("#scene_score #score_retry1").hide();
		$("#scene_score #score_retry2").show();
	}else{
		$("#scene_score #score_good_num").text(score);
		$("#scene_score #score_good").show();
		$("#scene_score #score_good_num").show();
		$("#scene_score #score_poor").hide();
		$("#scene_score #score_poor_num").hide();
		$("#scene_score #score_retry1").show();
		$("#scene_score #score_retry2").hide();
	}
	if(score%1>0){
		$(".score-result.score"+Math.ceil(score).toString()+" #score_earth:last").attr("src","images/score_earth"+ Math.ceil(Math.round(score%1*10)/3).toString()+".png");
	}else{
		$(".score-result.score"+Math.ceil(score).toString()+" #score_earth:last").attr("src","images/score_earth.png");
	}

	$(".index-page #score_retry1").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "重新答题", "", ""]);
		reTest();
	})
	$(".index-page #score_retry2").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "重新答题", "", ""]);
		reTest();
	})
	$(".index-page #score_share").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "弹出", "显示分享", "", ""]);
		showSharePage();
	})
	$(".index-page #score_shop").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "弹出", "显示城市列表", "", ""]);
		showShopPage();
	})
	var info_i=1;
	if(Math.ceil(score)>5){
		info_i=5;
	}else{
		info_i=Math.ceil(score);
	}
	$("#scene_info #info_info").attr("src","images/score_info"+info_i+".png");
	if(Math.ceil(score)==1){
		$("#scene_score #score_i").css("margin-top","320px");
		$("#scene_score #score_i").css("right","10%");
	}else if(Math.ceil(score)==2){
		$("#scene_score #score_i").css("margin-top","320px");
		$("#scene_score #score_i").css("right","44%");
		if(score>1.5){
			$(".score-result.score2 #score_ghost").show();
			$(".score-result.score2 #score_cheer").hide();
		}else{
			$(".score-result.score2 #score_ghost").hide();
			$(".score-result.score2 #score_cheer").show();
		}
	}else if(Math.ceil(score)==3){
		$("#scene_score #score_i").css("margin-top","-50px");
		$("#scene_score #score_i").css("right","15%");
	}else if(Math.ceil(score)==4){
		$("#scene_score #score_i").css("margin-top","130px");
		$("#scene_score #score_i").css("right","44%");
	}else if(Math.ceil(score)==5){
		$("#scene_score #score_i").css("margin-top","-50px");
		$("#scene_score #score_i").css("right","44%");
	}else if(Math.ceil(score)==6){
		$("#scene_score #score_i").css("margin-top","115px");
		$("#scene_score #score_i").css("right","28%");
	}

	var tl=new TimelineMax({
		delay:0,
	});
	tl.fromTo($(".index-page #score_good")[0],0.5,{opacity:0,top:"-10%"},{opacity:1,top:"5%"},"-=0.5")
		.fromTo($(".index-page #score_good_num")[0],0.5,{opacity:0,top:"-10%"},{opacity:1,top:"5%"},"-=0.5")
		.fromTo($(".index-page #score_poor")[0],0.5,{opacity:0,top:"-10%"},{opacity:1,top:"5%"},"-=0.5")
		.fromTo($(".index-page #score_poor_num")[0],0.5,{opacity:0,top:"-10%"},{opacity:1,top:"5%"},"-=0.5")
		.call(function(){$(".score-result.score"+Math.ceil(score).toString()).fadeIn();}, ["param1"], this,"+=0")
		.fromTo($(".index-page #score_i")[0],0.5,{opacity:0},{opacity:1},"+=0")
		.fromTo($(".index-page #score_retry1")[0],0.5,{opacity:0,bottom:"10%"},{opacity:1,bottom:"20%"},"+=0.5")
		.fromTo($(".index-page #score_retry2")[0],0.5,{opacity:0,bottom:"10%"},{opacity:1,bottom:"20%"},"-=0.5")
		.fromTo($(".index-page #score_share")[0],0.5,{opacity:0,bottom:"-6%"},{opacity:1,bottom:"4%"},"-=0.5")
		.fromTo($(".index-page #score_shop")[0],0.5,{opacity:0,bottom:"-6%"},{opacity:1,bottom:"4%"},"-=0.5")
		.fromTo($(".index-page #score_arrow")[0],0.5,{height:"0","margin-bottom":"366px"},{height:"229px","margin-bottom":"137px"},"+=0.5")
		.fromTo($(".index-page #score_arrow")[0],1,{opacity:1},{opacity:0},"+=1.5")
	}
	$(".index-page #score_i").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "弹出", "显示成绩说明", "", ""]);
		showScoreInfo();
	})

// function showScoreTip(){
// 	//console.info("showScoreTip");
// 	$("#scene_share").unbind("click").on("click",function(){
// 		_hmt.push(['_trackEvent', "弹出", "显示城市列表", "", "");
// 		hideScoreTip();
// 	})
// 	var tl=new TimelineMax({
// 		delay:0,
// 	});
// 	$("#scene_share").fadeIn();
// 	tl.fromTo($("#scene_share #share_arrow")[0],1,{opacity:0,right:"-400px",ease:Elastic.easeInOut},{opacity:1,right:"30px",ease:Elastic.easeInOut})
// 		.fromTo($("#scene_share #share_earth")[0],1,{opacity:0,"margin-left":"-400px",ease:Elastic.easeInOut},{opacity:1,"margin-left":"0px",ease:Elastic.easeInOut},"-=1")
// 		.fromTo($("#scene_share #share_text")[0],1,{opacity:0,bottom:"-10%",ease:Elastic.easeInOut},{opacity:1,bottom:"10%",ease:Elastic.easeInOut},"-=1")
// }

// function hideScoreTip(){
// 	//console.info("hideScoreTip");
// 	var tl=new TimelineMax({
// 		delay:0,
// 	});	
// 	tl.fromTo($("#scene_share #share_arrow")[0],0.5,{opacity:1,right:"30px"},{opacity:0,right:"-400px"})
// 		.fromTo($("#scene_share #share_earth")[0],0.5,{opacity:1,"margin-left":"0px"},{opacity:0,"margin-left":"-400px"},"-=0.5")
// 		.fromTo($("#scene_share #share_text")[0],0.5,{opacity:1,bottom:"10%"},{opacity:0,bottom:"-10%"},"-=0.5")
// 		.call(function(){$("#scene_share").fadeOut();}, ["param1"], this, "-=0.5")
// }

//重新测试
function reTest(){	
	quizPageNumber=1;
	var tl=new TimelineMax({
		delay:1,
	});
	$(".index-page #scene_quiz .quiz").each(function(index,item){
		quiz[$(this).attr("id")].answer="none";	
	})
	$(".index-page .quiz .answer").removeClass("active");
	$(".index-page .quiz .answer img").hide();
	$("#scene_score").fadeOut();	
	$("#scene_quiz").hide();
	$("#scene_quiz").css("margin-top","－2400px").show();
	$(".index-page #quiz_back").hide();
	$(".index-page #quiz_next").show();
	tl.fromTo($(".index-page #index_bg")[0],2,{opacity:1,top:"0%"},{opacity:0,top:"-30％"},"-=2")
		.fromTo($(".index-page #index_earth")[0],2,{top:"150%"},{top:"25%"},"-=2")
		.fromTo($(".index-page #scene_quiz")[0],2,{"margin-top":"－2400px"},{"margin-top":"0px"},"-=2")
		.fromTo($(".index-page #quiz_title")[0],0.5,{top:"-5%",opacity:0},{top:"3%",opacity:1})
		.fromTo($(".index-page #quiz_upcloud")[0],0.5,{right:"-5%",opacity:0},{right:"5%",opacity:1},"-=0.5")
		.fromTo($(".index-page #quiz_back")[0],0.5,{bottom:"-5%",opacity:0},{bottom:"5%",opacity:1},"-=0.5")
		.fromTo($(".index-page #quiz_next")[0],0.5,{bottom:"-5%",opacity:0},{bottom:"5%",opacity:1},"-=0.5")
		.call(function(){
			$(".quiz.page"+quizPageNumber).fadeIn(500);
		}, ["param1"], this, "-=0")
}

function showScoreInfo(){
	//console.info("showScoreInfo");
	$("#scene_info #info_back").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "关闭", "关闭成绩说明", "", ""]);
		hideScoreInfo();
	})
	var tl=new TimelineMax({
		delay:0,
	});
	$("#scene_info").fadeIn();
	tl.fromTo($("#scene_info #info_info")[0],1,{opacity:0,top:"0%",ease:Elastic.easeInOut},{opacity:1,top:"30%",ease:Elastic.easeInOut})
		.fromTo($("#scene_info #info_back")[0],1,{opacity:0,"margin-left":"200px"},{opacity:1,"margin-left":"135px"},"-=0.5")
}

function hideScoreInfo(){
	//console.info("hideScoreInfo");
	var tl=new TimelineMax({
		delay:0,
	});	
	tl.fromTo($("#scene_info #info_back")[0],0.5,{opacity:1,"margin-left":"135px"},{opacity:0,"margin-left":"200px"})
	.fromTo($("#scene_info #info_info")[0],0.5,{opacity:1,top:"30%"},{opacity:0,top:"0%"},"-=0.3")		
		.call(function(){$("#scene_info").fadeOut();}, ["param1"], this, "-=0")
}

function showSharePage(){
	//console.info("showSharePage");
	$("#scene_share").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "关闭", "关闭分享页", "", ""]);
		hideSharePage();
	})
	var tl=new TimelineMax({
		delay:0,
	});
	$("#scene_share").fadeIn();
	tl.fromTo($("#scene_share #share_arrow")[0],1,{opacity:0,right:"-400px",ease:Elastic.easeInOut},{opacity:1,right:"30px",ease:Elastic.easeInOut})
		.fromTo($("#scene_share #share_earth")[0],1,{opacity:0,"margin-left":"-400px",ease:Elastic.easeInOut},{opacity:1,"margin-left":"0px",ease:Elastic.easeInOut},"-=1")
		.fromTo($("#scene_share #share_text")[0],1,{opacity:0,bottom:"-10%",ease:Elastic.easeInOut},{opacity:1,bottom:"10%",ease:Elastic.easeInOut},"-=1")
		.fromTo($(".music-div")[0],1,{opacity:1,top:"10px",ease:Elastic.easeInOut},{opacity:0,top:"-100px",ease:Elastic.easeInOut},"-=1")
}

function hideSharePage(){
	//console.info("hideSharePage");
	var tl=new TimelineMax({
		delay:0,
	});	
	tl.fromTo($("#scene_share #share_arrow")[0],0.5,{opacity:1,right:"30px"},{opacity:0,right:"-400px"})
		.fromTo($("#scene_share #share_earth")[0],0.5,{opacity:1,"margin-left":"0px"},{opacity:0,"margin-left":"-400px"},"-=0.5")
		.fromTo($("#scene_share #share_text")[0],0.5,{opacity:1,bottom:"10%"},{opacity:0,bottom:"-10%"},"-=0.5")
		.fromTo($(".music-div")[0],1,{opacity:0,top:"-100px"},{opacity:1,top:"10px"},"-=0.5")
		.call(function(){$("#scene_share").fadeOut();}, ["param1"], this, "-=0.5")
}

function showShopPage(){
	//console.info("showShopPage");
	getLocation();
	drawCityList();
	$("#scene_shop").fadeIn();
	$("#scene_detail").hide();
	$("#scene_shop #shop_back").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "关闭", "关闭城市列表", "", ""]);
		hideShopPage();
	})
}

function hideShopPage(){
	//console.info("hideShopPage");
	var tl=new TimelineMax({
		delay:0,
	});	
	$("#scene_shop").fadeOut();
}

$('#scene_shop').parallax({});
$("#scene_shop #shop_detail").hide();



var getLocation = function(){
    if (window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(showPosition,function(){
        	console.info("位置信息获取失败，请前往地图设置！");
        },{timeout:2000});
   		//获取不稳定，可以设置超时时间
    }else{
        alert("Geolocation is not supported by this browser.");
    }
}
var showPosition = function(position){
	countList(position.coords.longitude,position.coords.latitude);

	//百度地图坐标转换
	// $.ajax({
	// 	url: "map.php?gps="+position.coords.longitude+","+position.coords.latitude,
	// 	//url: "map.php?gps=121.478,31.200",
	// 	type: "GET",
	// 	success:function(result){	
	// 		var data=$.parseJSON(result).data.result[0];	
	// 		countList(data.x,data.y);	        
	// 	},
	// 	error: function(XMLHttpRequest, textStatus, errorThrown) {
 //            alert(XMLHttpRequest.status);
 //            alert(XMLHttpRequest.readyState);
 //            alert(textStatus);
 //        },
	// });
}

var countRange=function(x1,y1,x2,y2){
	return Math.sqrt(Math.abs((x1-x2)*(x1-x2))+Math.abs((y1-y2)*(y1-y2))); 
}

var countList=function(longitude,latitude){
	$.each(city_list,function(index,item){
		item.longitude=item.location.split(",")[0];
		item.latitude=item.location.split(",")[1];
		item.range=countRange(longitude,latitude,item.longitude,item.latitude);
	})
	city_list.sort(function(a,b){return a.range>b.range?1:-1});
	console.dir(city_list);

	if(city_list[0].area){
		$.each(city_list[0].area,function(index,item){
			item.longitude=item.location.split(",")[0];
			item.latitude=item.location.split(",")[1];
			item.range=countRange(longitude,latitude,item.longitude,item.latitude);
		})
		city_list[0].area.sort(function(a,b){return a.range>b.range?1:-1});
		console.dir(city_list[0].area);
		$("#scene_shop #user_city").text(city_list[0].name+"-"+city_list[0].area[0].name);
		drawBrandList(city_list[0].name,city_list[0].area[0].name);

	}else{
		$("#scene_shop #user_city").text(city_list[0].name);
		drawBrandList(city_list[0].name,"");
	}	

}

var searchBrand=function(city,area){
	var brandList=[];
	$.each(shop_list,function(index,item){
		if(item.split("_")[2]+item.split("_")[3]==city+area){
			var has=false;
			$.each(brandList,function(index2,item2){
				if(item2.split("_")[1]==item.split("_")[1]){
					has=true;
				}
			})
			if(1==1){
				brandList.push(item);
			}			
		}
	})
	return brandList;
}

function drawCityList(){
	$("#scene_shop .city-list").empty();
	
	$.each(city_list,function(index,item){
		if(item.area){
			$("#scene_shop .city-list").append('<a class="city extend">'+item.name+'</a>');
		}else{
			$("#scene_shop .city-list").append('<a class="city">'+item.name+'</a>');
		}		
		if(index==11){
			$("#scene_shop .city-list").append('<a class="arrow up">^</a>');
			$("#scene_shop .city-list").append('<a class="arrow down">v</a>');
		}
	})
	$("#scene_shop .city-list").addClass("page1");
	console.info($("#scene_shop .city-list .city:eq(0)").height());


	$("#scene_shop .city-list .arrow.up").unbind("click").on("click",function(){
		$("#scene_shop .city-list").removeClass("page2").addClass("page1");
		$('#scene_shop .city-list').animate({scrollTop: 0}, 300); 
	
	})
	$("#scene_shop .city-list .arrow.down").unbind("click").on("click",function(){
		$("#scene_shop .city-list").removeClass("page1").addClass("page2");
		$("#scene_shop .city-list .city").removeClass("active");
		$("#scene_shop .area-list").fadeOut(200);
		$('#scene_shop .city-list').animate({scrollTop: 600}, 300); 
	})

	$("#scene_shop .city-list .city").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "选择城市", "", ""]);
		//console.info($(this).text());
		drawBrandList($(this).text(),"");
		$("#scene_shop .city-list").fadeOut(200);
		$("#scene_shop .area-list").fadeOut(200);
	})
	$("#scene_shop .city-list .city.extend").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "选择城市", "", ""]);
		drawAreaList($(this).text());
		$("#scene_shop .city-list .city").removeClass("active");
		$(this).addClass("active");		
	})
	$("#scene_shop #shop_select").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "打开选择城市列表", "", ""]);
		$("#scene_shop .city-list").fadeIn(200);
	})
	$("#scene_shop #user_city").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "打开选择城市列表", "", ""]);
		$("#scene_shop .city-list").fadeIn(200);
	})
}


function drawAreaList(city){
	$("#scene_shop .area-list").empty().fadeIn(200);
	var areaList=[];
	$.each(city_list,function(index,item){
		if(item.name==city){
			areaList=item.area;
		}
	})
	$.each(areaList,function(index,item){
		$("#scene_shop .area-list").append('<a class="area">'+item.name+'</a>');
	})
	$("#scene_shop .area-list .area").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "选择城市", "", ""]);
		drawBrandList(city,$(this).text());
		$("#scene_shop .city-list").fadeOut(200);
		$("#scene_shop .area-list").fadeOut(200);
	})
}

function drawBrandList(city,area){
	var brandList=[];
	$.each(shop_list,function(index,item){
		if(item.split("_")[2]+item.split("_")[3]==city+area){
			var has=false;
			$.each(brandList,function(index2,item2){
				if(item2.split("_")[1]==item.split("_")[1]){
					has=true;
				}
			})
			if(!has){
				brandList.push(item);
			}			
		}
	})	
	$("#scene_shop .brand-list").empty();
	$.each(brandList,function(index,item){
		$("#scene_shop .brand-list").append('<a class="brand" data-name="'+item.split("_")[1]+'"><img src="images/brand/brand_'+item.split("_")[6]+'.png"/></a>');
	})
	if(area){
		$("#scene_shop #user_city").text(city+"-"+area).hide().fadeIn(500);
	}else{
		$("#scene_shop #user_city").text(city).hide().fadeIn(500);
	}

	$("#scene_shop .brand-list .brand").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "点击", "选择品牌", "", ""]);
		loadBrandDetail(city,area,$(this).data("name"));
	})
	$("#scene_shop #shop_detail").hide();
	$("#scene_shop .brand-list").hide().fadeIn(500);
}

var slideInt;
function loadBrandDetail(city,area,brand){	
	var shopList=[];
	var bannerList=[];
	$.each(shop_list,function(index,item){
		if(item.split("_")[2]+item.split("_")[3]+item.split("_")[1]==city+area+brand){
			var has=false;
			$.each(shopList,function(index2,item2){
				if(item2.split("_")[4]==item.split("_")[4]){
					has=true;
				}
			})
			if(!has){
				shopList.push(item);
			}	

			var has2=false;
			$.each(bannerList,function(index2,item2){
				if(item2.split("_")[0]==item.split("_")[0]){
					has2=true;
				}
			})
			if(!has2){
				bannerList.push(item.split("_")[0]);
			}	
		}
	})
	//console.info(bannerList);

	$(".swiper-container .swiper-slide").remove();
	$.each(bannerList,function(index,item){
		$(".swiper-container").append('<div class="swiper-slide"><img id="shop_banner" src="images/shop_s_'+item+'.png"></div>');
	});
	$(".swiper-container .swiper-slide").hide();
	$(".swiper-container .swiper-slide:eq(0)").show();

	clearInterval(slideInt);
	var i=0;
	if($(".swiper-container .swiper-slide").size()>1){
		slideInt=setInterval(function(){		
			var tl=new TimelineMax({
				delay:0,
			});
			tl.call(function(){$(".swiper-container .swiper-slide").fadeOut(500);}, ["param1"], this, "")
			.call(function(){$(".swiper-container .swiper-slide:eq("+i+")").fadeIn(500);}, ["param1"], this, "+=0.5");
			i++;
			if(i>=$(".swiper-container .swiper-slide").size()){
				i=0;
			}
		},3000)
	}

	$("#shop_detail .shop-list").empty();
	$.each(shopList,function(index,item){
		$("#shop_detail .shop-list").append('<div class="shop">'
				+'<p>店名：'+item.split("_")[4]+'</p>'
				+'<p>地址：'+item.split("_")[5]+'</p>'
			+'</div>');
	})
	if(shopList[0].split("_")[0]=="DD"){//判断是否宜家
		$("#shop_detail #shop_ikea").show();
		$("#shop_detail .shop-list").css("margin-top","610px");
		$("#shop_detail .shop-list").css("height","210px");
	}else{
		$("#shop_detail #shop_ikea").hide();
		//$("#shop_detail #shop_banner").show().attr("src","images/shop_s_"+shopList[0].split("_")[0]+".png");
		$("#shop_detail #shop_block").show().attr("src","images/brand/logo_"+shopList[0].split("_")[6]+".png");
		$("#shop_detail #shop_name").show().text(shopList[0].split("_")[1]);
		$("#shop_detail .shop-list").css("margin-top","510px");
		$("#shop_detail .shop-list").css("height","310px");
	}
	//$("#shop_detail #shop_banner").attr("src","images/shop_s_"+shopList[0].split("_")[0]+".png");
	$("#shop_detail #shop_block").attr("src","images/brand/logo_"+shopList[0].split("_")[6]+".png");
	$("#shop_detail #shop_name").text(shopList[0].split("_")[1]);



	var tl=new TimelineMax({
		delay:0,
	});	
	tl.call(function(){$("#shop_brand").fadeOut(500);}, ["param1"], this, "")
		.call(function(){$("#shop_detail").fadeIn(500);}, ["param1"], this, "+=0.5")
		
		
	$("#scene_shop #shop_back").unbind("click").on("click",function(){
		_hmt.push(['_trackEvent', "翻页", "回到城市列表", "", ""]);
		tl.call(function(){$("#shop_detail").fadeOut(500);}, ["param1"], this, "")
		.call(function(){$("#shop_brand").fadeIn(500);}, ["param1"], this, "+=0.5");
		$("#scene_shop #shop_back").unbind("click").on("click",function(){
			_hmt.push(['_trackEvent', "关闭", "关闭城市列表", "", ""]);
			hideShopPage();
		})
	})
}

//countList(121.482782,31.201129);



