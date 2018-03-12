/** Preload预加载模块,main.js中一开始就调用 **/

var manifest = [
	{src:"./images/loading_bg.jpg", id:"bg_music"},
	{src:"./audio/wwf.mp3", id:"bg_music"},
	{src:"./images/index_text1.png", id:"index_text1"},
	{src:"./images/index_text2.png", id:"index_text2"},
	{src:"./images/index_text3.png", id:"index_text3"},
	{src:"./images/index_help.png", id:"index_help"},
	{src:"./images/index_you.png", id:"index_you"},
	{src:"./images/index_firefly.png", id:"index_firefly"},
	{src:"./images/index_!.png", id:"index_mark"},
	{src:"./images/index_logo.png", id:"index_logo"},
	{src:"./images/index_gif1.gif", id:"index_gif1"},
	{src:"./images/index_gif2.gif", id:"index_gif2"},
	{src:"./images/index_shadow.png", id:"index_shadow"},
    {src:"./images/index_arrow.png", id:"index_arrow"},
    {src:"./images/index_earth.png", id:"index_earth"},
    {src:"./images/index_info.png", id:"index_info"},
    {src:"./images/quiz_title.png", id:"quiz_title"},
    {src:"./images/quiz_paper.gif", id:"quiz_paper"},
    {src:"./images/quiz_upcloud.png", id:"quiz_upcloud"},
    {src:"./images/quiz_back.png", id:"quiz_back"},
    {src:"./images/quiz_next.png", id:"quiz_next"},
    {src:"./images/quiz_text1.png", id:"quiz_text1"},
    {src:"./images/quiz_text2.png", id:"quiz_text2"},
    {src:"./images/quiz_text3.png", id:"quiz_text3"},
    {src:"./images/quiz_text4.png", id:"quiz_text4"},
    {src:"./images/quiz_text5.png", id:"quiz_text5"},
    {src:"./images/quiz_submit.png", id:"quiz_submit"},
    {src:"./images/quiz_miss.png", id:"quiz_miss"},
    {src:"./images/quiz_retry.png", id:"quiz_retry"},
    {src:"./images/score_info1.png", id:"score_info1"},
    {src:"./images/score_info2.png", id:"score_info2"},
    {src:"./images/score_info3.png", id:"score_info3"},
    {src:"./images/score_info4.png", id:"score_info4"},
    {src:"./images/score_info5.png", id:"score_info5"},
    {src:"./images/score_ghost.png", id:"score_ghost"},
    {src:"./images/score_ghost2.png", id:"score_ghost2"},
    {src:"./images/score_ghost3.png", id:"score_ghost3"},
    {src:"./images/score_earth.png", id:"score_earth"},
    {src:"./images/score_earth1.png", id:"score_earth1"},
    {src:"./images/score_earth2.png", id:"score_earth2"},
    {src:"./images/score_earth3.png", id:"score_earth3"},
    {src:"./images/score_cloud.png", id:"score_cloud"},
    {src:"./images/score_panda.png", id:"score_panda"},
    {src:"./images/score_good.png", id:"score_good"},
    {src:"./images/score_poor.png", id:"score_poor"},
    {src:"./images/score_retry1.png", id:"score_retry1"},
    {src:"./images/score_retry2.png", id:"score_retry2"},
    {src:"./images/score_share.png", id:"score_share"},
    {src:"./images/score_cheer.png", id:"score_cheer"},
    {src:"./images/score_i.png", id:"score_i"},
    {src:"./images/score_shop.png", id:"score_shop"},
    {src:"./images/shop_ikea.png", id:"shop_ikea"},
    {src:"./images/shop_s_AA.png", id:"shop_AA"},
    {src:"./images/shop_s_BB.png", id:"shop_BB"},
    {src:"./images/shop_s_CC.png", id:"shop_CC"},
    {src:"./images/shop_s_EE.png", id:"shop_EE"},
    {src:"./images/shop_text1.png", id:"shop_text1"},
    {src:"./images/shop_block.png", id:"shop_block"},
    {src:"./images/shop_arrow.png", id:"shop_arrow"},
    {src:"./images/shop_blue.png", id:"shop_blue"},
    {src:"./images/shop_title2.png", id:"shop_title2"},
    {src:"./images/shop_select.png", id:"shop_select"},
    {src:"./images/shop_back.png", id:"shop_back"},
    {src:"./images/shop_paper.png", id:"shop_paper"},
    {src:"./images/share_text.png", id:"share_text"},
];

preloading=function() {
  var preload = new createjs.LoadQueue();  
  _hmt.push(['_trackEvent', "初始化", "loading开始", "", ""]);
  preload.addEventListener("progress", handleProgress);
  preload.addEventListener("complete", handleComplete);
  preload.loadManifest(manifest);
}

handleProgress=function(event){
  $(".loading").text(Math.round(event.progress*100)+"%");
}

handleComplete=function(event){
	console.info("Preload complete!");
    _hmt.push(['_trackEvent', "初始化", "loading完毕", "", ""]);
	loadSound();
	loadIndexPage();  
	$('#scene_index').parallax();
}

preloading();