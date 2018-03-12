/** soundjs声音模块 **/

function loadSound() {
	createjs.Sound.on("fileload", playSound, this);
	$(".music-div #play").show();   
    $(".music-div #stop").hide();
	createjs.Sound.registerSound("./audio/wwf.mp3", "background_music");
	$(".music-div #play").unbind("click").on("click",function(){
		stopSound();
	})
	$(".music-div #stop").unbind("click").on("click",function(){
		resumeSound();
	})
}

function playSound () {
	instance = createjs.Sound.play("background_music",{loop:-1});  // play using id.  Could also use full sourcepath or event.src.
    instance.volume=1;
    $(".music-div").fadeIn();   
    $(".music-div #play").show();   
    $(".music-div #stop").hide();    
    //instance.on("loop", handleLoop);    
}

function resumeSound () {
	instance.paused=false;
	$(".music-div #play").show();   
    $(".music-div #stop").hide();    
    //instance.on("loop", handleLoop);    
}

function stopSound(){
	instance.paused=true;
	$(".music-div #play").hide(); 
	$(".music-div #stop").show();   
}



