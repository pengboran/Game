$().ready(function(){
	setTimeout('showdialog()',3000);
	$(".show").click(function(){
		
		$(".page1").hide();
		$(".page2").show();
	});
	
	$("#silder").draggable({
		axis:'x',
		containment:"parent",
		drag:function(event,ui){
			if (ui.position.left > 224) {
					$(".page2").hide();
		    $(".page3").show();
			} else {
			   console.log(ui.position.left);
			}
		},
		stop:function(){
			 	if (ui.position.left < 225) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
	document.getElementById('silder').addEventListener('touchmove',function(event){
		event.preventDefault();
		var el = event.target;
	    var touch = event.touches[0];
	    var  curX = touch.pageX - this.offsetLeft - 73;
	   
	    if(curX <= 0) return;
	    if(curX > 224){
	    	$(".page2").hide();
		    $(".page3").show();
		    setTimeout('p2show()',2000);
	    }
	   	el.style.webkitTransform = 'translateX(' + curX + 'px)'; 
	},false);
	
	document.getElementById('silder').addEventListener('touchend', function(event) {	
	    this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
	    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
	    this.style.webkitTransform = 'translateX(0px)';
	}, false);
//	
//	console.log(x)
//	let x="0"
	
let x = do {
  let t = f();
  t * t + 1;
};
console.log(x)
	
});


function showdialog(){
	$(".show").show();
	
}
function p3show(){
	$('.page3').fadeOut(600);
	$('.page4').fadeIn(600);
}
function p2show(){
	//关机加载
	$(".p3_bg").fadeOut(600);
	$(".p3_bg1").show();
	setTimeout(function(){$(".p3s1").fadeIn(1000)},3000)
	setTimeout(function(){$(".p3s2").fadeIn(1000)},5000)
	setTimeout('p3show()',7000);
}
