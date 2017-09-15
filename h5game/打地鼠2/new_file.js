$(function(){
	function GetRandomNum(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   //生成0到1之间的随意数
		return(Min + Math.round(Rand * Range));   
	};   


	function show(){
		
			var index = GetRandomNum(0,9);
		     $('.box').eq(index).find('img').animate({marginTop:0},200)
		setTimeout(hide,2000);
		function hide(){
			$('.box').eq(index).find('img').animate({marginTop:'80px'},400)
		};
	};
	$('.box img').click(function(){
		$("#bullet")[0].play();
		var n = Number($('#valScore').val());
		$(this).animate({marginTop:'80px'},200);
      var x=$(this).parent().parent().index();
      console.log(x)
          if(x==1 || x==2 || x==3 ||x==5){
          	  n++
          }
		$('#valScore').val(n)
		$('.score').html(n);
	});
	
	//开始游戏
	$('.start').click(function(){
		$('.win').hide();
		$('.text').hide();
		var diff =1.5
		var t = 20
		var start = setInterval(time,1000);
		var num = setInterval(show,diff*1000);
		var n2 = t/diff/3*2;
		$('.time').html(t);
		$('#valScore').val('0');
		$('.score').html('0');
		var a=Number($('.time').html());
		function time(){
			a--;
			if(a < 0){
				clearInterval(start);  
				clearInterval(num);
				var grade = '';
				var n = Number($('#valScore').val());
				var n3 = t/diff;
				var n2 = t/diff/3*2;
				var n1 = t/diff/3;
				if(n == 0){
					grade = '要加油哟！'
				} 
				if(n>0 && n<n1){
					grade = '有点笨！'
				} 
				if(n>=n1 && n<n2){
					grade = '不错！'
				} 
				if(n>=n2 && n<n3){
					grade = '很棒！'
				}  
				if(n == n3){
					grade = '完美！'
				}
				$('.win').show();
				$('.win_score').show(); 
         		$(".win_bg").css("background-color", "rgba(0, 0, 0, 0.7)")
				$('.cj').html('游戏结束，您一共得了'+n+'分，'+grade);
			}else{
				$('.time').html(a);
			}
		};
		 
	});
	
	$('.again').click(function(){
		$('.start').click();
		$('.win_score').hide();
	});
	$('.close').click(function(){
		window.location="http://www.baidu.com"
	});
	var jinzhi=0;
            document.addEventListener("touchmove",function(e){
                if(jinzhi==0){
                    e.preventDefault();
                    e.stopPropagation();
                }
            },false);
});