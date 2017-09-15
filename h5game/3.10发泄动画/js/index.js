$(function(){
	document.addEventListener('touchmove',function(e) {
    	e.preventDefault();
	}, false);
	  
	     //自适应屏幕
	        wHeight=$(window).height();
	        if(wHeight<832){
	            wHeight=832;
	            }
	        $('.page').height(wHeight).css('background-position','center '+(wHeight-1136)/2+'px');
	        $('.h832').css('padding-top',(wHeight-832)/2+'px');
	        // 图片预加载
	    var speed=0;
	    function preloadimages(arr){
	    var newimages=[], loadedimages=0
	    var arr=(typeof arr!="object")? [arr] : arr
	    function imageloadpost(){
	        loadedimages++;
	        speed=parseInt(loadedimages/arr.length*100);
	        $('.loading p').text(speed+'% loading...');
	        $('.line_c .line').css('left',-(100-speed)+'%');
	        if (loadedimages==arr.length){
	            $('.loading').hide();
	            // $('.swiper-wrapper1').show();
	            
	        }
	    }
	    for (var i=0; i<arr.length; i++){
	        newimages[i]=new Image()
	        newimages[i].src=arr[i]
	        newimages[i].onload=function(){
	            imageloadpost();
	        }
	        newimages[i].onerror=function(){
	        imageloadpost()
	        }
	      }
	    }
	    var imagesarray=['http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/big_fire.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/fa_btn.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/fire1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/fire2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/home_bg.jpg','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/home_tit1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/home_tit2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/home_tit3.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/j1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/j2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/j3.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/j4.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/j5.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/p2_tit1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/p2_tit2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/p2_tit3.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/reason_bg.jpg','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/rule_bg.jpg','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene_tit1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene_tit2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene_tit3.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene1_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene1_2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene2_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene2_2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene3_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene3_2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene4_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/scene4_2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu2.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu3.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu4.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu1_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu2_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu3_1.png','http://custom.hengdikeji.com/yajie_0308/Public/template/home/img/tu4_1.png'];
	    preloadimages(imagesarray);
	// 机关枪
	var fireTime = null;
	var fireNum = true;

	fireTime = setInterval(function(){
		if (fireNum) {
			$('.fire img').eq(0).show();
			$('.fire img').eq(1).hide();
			$('.man_c img').eq(0).show();
			$('.man_c img').eq(1).hide();
			fireNum = false;
		}else{
			$('.fire img').eq(1).show();
			$('.fire img').eq(0).hide();
			$('.man_c img').eq(1).show();
			$('.man_c img').eq(0).hide();
			fireNum = true;
		}
	},100);

	var homeTime = null;
	var homeNum = 0;
	homeTime = setInterval(function(){
		homeNum ++;
		if (homeNum > 2) {
			homeNum = 0;
		}
		$('.home_tits img').hide();
		$('.home_tits img').eq(homeNum).show();
		$('.explain_soll1 img').hide();
		$('.explain_soll1 img').eq(homeNum).show();
		$('.explain_soll2 img').hide();
		$('.explain_soll2 img').eq(homeNum).show();
		$('.explain_soll3 img').hide();
		$('.explain_soll3 img').eq(homeNum).show();
		$('.explain_soll4 img').hide();
		$('.explain_soll4 img').eq(homeNum).show();
		$('.reason_tit img').hide();
		$('.reason_tit img').eq(homeNum).show();
		$('.scene_soll img').hide();
		$('.scene_soll img').eq(homeNum).show();
	},200);

	// 规则页关闭
	
	$('.rule_colse').tap(function(){
		$('.rule').fadeOut();
	})

	$('.colse').tap(function(){
		$('.myprize').css('left','-100%');
	})

	$('.active_btn').tap(function(){
		$('.rule').fadeIn();
	})

	$('.prize_btn').tap(function(){
            $.ajax({
                url : cuponUrl,
                dataType : 'json',
                type : 'post',
                success : function(res){
                	var html2string = '';
                    // console.log(res);
                    if (res.length>0) {
                    	// $('#swiper-wrapper').empty();
                    	$('.swiper-wrapper1').html('');
                    	for(var i in res){
                    		html2string += '<div class="swiper-slide">';
		            		html2string += '<img src="'+resourceUrl+'img/j'+res[i].type+'.png" alt="">';
		            		html2string += '</div>';
                    	}
                    	// $('#swiper-wrapper').append(html2string);
                    	$('.swiper-wrapper1').html(html2string);

                    	var swiper = new Swiper('.swiper-container', {
					        pagination: '.swiper-pagination',
					        paginationtapable: '.swiper-pagination',
					        nextButton: '.next1',
					        prevButton: '.prev1',
					        spaceBetween: 30
					    });
                    }else{
                    	alert('您还没有抽奖哦~');
                    }
                }
            });
		$('.myprize').css('left','0');
	})

	$('.muprize_btn').tap(function(){
		$('.myprize').css('left','0');
	})

	// 开始
	$('.home_btn').on('touchstart',function(){
		$(this).css('-webkit-transform','scale3d(1.05,1.05,1.05)');
	})

	// 场景闪动
	var reasonTime = null;
	var reasonTime2 = null;
	var reasonNun = -1;
	var reasonNun2 = 0;
	var bubble = true;

	$('.home_btn').on('tap',function(){
		$(this).css('-webkit-transform','scale3d(1,1,1)');
		$('.reason').show();
		reasonTime = setInterval(function(){
			reasonNun++;
			$('.content1_1 img').css('opacity','0');
			if (reasonNun == 0) {
				$('.content1_1 img').eq(0).css('opacity','1');
			}else if (reasonNun == 1) {
				$('.content1_1 img').eq(1).css('opacity','1');
			}else if (reasonNun == 2) {
				$('.content1_1 img').eq(3).css('opacity','1');
			}else if (reasonNun == 3) {
				$('.content1_1 img').eq(2).css('opacity','1');
				reasonNun = -1;
			}
		},150);
	})

	
	$('.content1_1 img').tap(function(){

		if (bubble) {
			clearInterval(reasonTime);
			$('.content1_1 img').css('opacity','0');
			reasonNun = -1;
			var _this = $(this);
			var _thisValue = $(this).attr('value');
			$('.explain_soll'+_thisValue).show();
			
			// alert($(this).attr('value'));

			reasonTime2 = setInterval(function(){
				reasonNun2 ++;
				if (reasonNun2%2 == 0) {
					_this.css('opacity','1');
					
				}else{
					_this.css('opacity','0');
				}
				if (reasonNun2 >= 7) {
					reasonNun2 = 0;
					clearInterval(reasonTime2);
					$('.explain').show();
					$('.explain').addClass('pageBig');
				}
			},100);

			bubble = false;
		}else{
			return false;
		}
	})
	// 发泄
	var sceneTime = null;
	var sceneTime2 = null;
	var sceneNun = -1;
	var sceneNun2 = 0;
	var bubble2 = true;

	$('.fa_btn').tap(function(){
		$('.scene').show();
		sceneTime = setInterval(function(){
			sceneNun++;
			$('.content2_1 img').css('opacity','0');
			if (sceneNun == 0) {
				$('.content2_1 img').eq(0).css('opacity','1');
			}else if (sceneNun == 1) {
				$('.content2_1 img').eq(1).css('opacity','1');
			}else if (sceneNun == 2) {
				$('.content2_1 img').eq(3).css('opacity','1');
			}else if (sceneNun == 3) {
				$('.content2_1 img').eq(2).css('opacity','1');
				sceneNun = -1;
			}
		},150);
	})

	$('.content2_1 img').tap(function(){
		if (bubble2) {
			$('.mus')[0].src=resourceUrl+'img/yue2.png';
            $("#bgmusic")[0].pause();
            $('.sliderWrap').addClass();
            $('.mus').removeClass('rotate');
            open=1;
            clearInterval(sceneTime);
			$('.content2_1 img').css('opacity','0');
			sceneNun = -1;
			var _this = $(this);
			var _thisValue = $(this).attr('value');

			sceneTime2 = setInterval(function(){
				sceneNun2 ++;
				if (sceneNun2%2 == 0) {
					_this.css('opacity','1');
					
				}else{
					_this.css('opacity','0');
				}
				if (sceneNun2 >= 7) {
					sceneNun2 = 0;
					clearInterval(sceneTime2);
					// 这里进入场景
					$('.scene'+_thisValue).show();
					$('.scene'+_thisValue).addClass('pageBig');
					drawTime = setInterval(function(){
						drawNam --;
						if (drawNam <= 0) {
							clearInterval(drawTime);
							drawNam = 0;
							$('.tit_end').attr('src',resourceUrl+'img/scene'+_thisValue+'_tit.png');
							$('.result').fadeIn();
							$('.result').addClass('pageBig');

							$('.mus')[0].src=resourceUrl+'img/yue.png';
				            $("#bgmusic")[0].play();
				            $('.mus').addClass('rotate');
				            open=0;
						}
						$('.time span').text(drawNam);
					},1000);
				}
			},100);

			bubble2 = false;
		}else{
			return false;
		}
	})


	var drawTime = null;
	var drawNam = 10;
	var goNum = 0;

	// 拼命点击按钮
	function fntap(objBtn,objImg){
		$(objBtn).on('touchstart',function(e){
			$("#bullet")[0].play();
			e.preventDefault();
			goNum++;
			$('.addone').show();
			$(this).css('-webkit-transform','scale3d(0.9,0.9,0.9)');
			$(this).removeClass('tada');
			$('.total span').text(goNum);
			$('.result_c span').text(goNum);
			$(objImg).hide();
			if (goNum%2 == 0) {
				$(objImg).eq(0).show();
			}else{
				$(objImg).eq(1).show();
			}
		})
		$(objBtn).on('touchend',function(e){
			e.preventDefault();
			$('.addone').hide();
			$(this).css('-webkit-transform','scale3d(1,1,1)');
		})
	}

	fntap('.scene1 .go','.scene1 .main img');
	fntap('.scene2 .go','.scene2 .main img');
	fntap('.scene3 .go','.scene3 .main img');
	fntap('.scene4 .go','.scene4 .main img');

	// 解气了
	$('.jie_btn').on('tap',function(){
		$(this).css('-webkit-transform','scale3d(1,1,1)');
		window.location="http://www.baidu.com"
//		$('.tian').show();
	});

	// 再来一次
	$('.again_btn').on('touchstart',function(){
		$(this).css('-webkit-transform','scale3d(0.9,0.9,0.9)');
	});

	$('.again_btn').on('touchend',function(){
		$(this).css('-webkit-transform','scale3d(1,1,1)');

		$('.result').hide();
		$('.scene1,.scene2,.scene3,.scene4').hide();
		$('.scene').hide();
		$('.explain').hide();
		bubble = true;
		bubble2 = true;
		drawNam = 10;
		goNum = 0;
		$('.total span').text(0);
		$('.result_c span').text(0);

		reasonTime = setInterval(function(){
			reasonNun++;
			$('.content1_1 img').css('opacity','0');
			if (reasonNun == 0) {
				$('.content1_1 img').eq(0).css('opacity','1');
			}else if (reasonNun == 1) {
				$('.content1_1 img').eq(1).css('opacity','1');
			}else if (reasonNun == 2) {
				$('.content1_1 img').eq(3).css('opacity','1');
			}else if (reasonNun == 3) {
				$('.content1_1 img').eq(2).css('opacity','1');
				reasonNun = -1;
			}
		},150);

	});
//	// 填写信息
//	$('.tian_btn').on('touchstart',function(){
//		$(this).css('-webkit-transform','scale3d(0.9,0.9,0.9)');
//	})
//
//	$('.tian_btn').on('tap',function(){
//		$(this).css('-webkit-transform','scale3d(1,1,1)');
//	 //$('.message').show();
//		$('.ti_btn').tap();
//		$('.tian').hide();
//	})
//
//	// 提交表单
//	$('.ti_btn').on('touchstart',function(){
//		$(this).css('-webkit-transform','scale3d(0.9,0.9,0.9)');
//	})
//
//	$('.ti_btn').on('tap',function(){
//		$(this).css('-webkit-transform','scale3d(1,1,1)');
//              $.ajax({
//                  url : saveUrl,
//                  type : 'post',
//                  dataType : 'json',
//                  // data : {
//                  //     name : $('#name').val(),
//                  //     phone : $('#phone').val(),
//                  // },
//                  success : function(res){
//                      if(res.status == 1){
//                          $('.jiang_img').attr('src',resourceUrl+'img/j'+res.type+'.png');
//                          $('.jiang').show();
//                          $('.message').hide();
//
//                      }else{
//                          alert(res.errmsg);
//                      }
//                  }
//              });
//		
//	})
//
//	// 分享
//	$('.share_btn').on('touchstart',function(){
//		$(this).css('-webkit-transform','scale3d(0.9,0.9,0.9)');
//	})
//
//	$('.share_btn').on('tap',function(){
//		$(this).css('-webkit-transform','scale3d(1,1,1)');
//		$('.share_bg').show();
//		$('.jiang').hide();
//	})
//
//	$('.share_bg').tap(function(){
//		$(this).fadeOut();
//	})



})