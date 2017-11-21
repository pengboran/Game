//1. 规定引入属性
define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Message = require("$UI/system/components/justep/common/common");
	
	//加载css
	require("css!$UI/App/index/css").load();
	//加载js
	require("$UI/App/index/js");
	
	var Model = function() {
		this.callParent();
	};
		

Model.prototype.modelLoad = function(event) {	
	
	// 2 add bottom style fonts color  and [img at function ]
	//点击时间 增加Class
	$('a').bind('click', function(){
	    $('a').removeClass('btn-on');
	    $(this).addClass('btn-on');
	});
	// 点击第一个标签
	//setTimeout($("#chatOncl").click(),1000);//延时3秒 
	
};


	
	

/* 3.1、Open the window to open the window to find the page 2, also can use the contents to switch four modules*/

	
	
	//1. Chats
	Model.prototype.chats = function(event){
		this.comp("Contacts").set({"icon":"img:$UI/App/img/con1.png"});
		this.comp("Discover").set({"icon":"img:$UI/App/img/tel1.png"});
		this.comp("Me").set({"icon":"img:$UI/App/img/me1.png"});
		this.comp("chats").set({"icon":"img:$UI/App/img/1.png"});
		//滑动到指定div
		this.comp('pages').to('Chats_View');
		
		var arrObj = eval("document.all.tops"); 
		//更改Title
		arrObj.innerHTML="Chats";
		
		$("#right").empty();//清空数据 top
		$("#left").empty();//清空数据 left
		var tops = '<a href="javascript:void(0)" onMouseOver="addChat()" onMouseOut ="cddChat()" ><img src="http://s163.cc/img/a9m.png" style="width: 27px; height: 27px" /></a>';
		var $dataright = $(tops);
		$("#right").append($dataright);
		
		
		//解决跨域问题
		$.support.cors = true;
		// 一个简单的ajax调用
		$.ajax({
			"type" : "post",
			"url" : "http://192.168.0.107:8087/ChatHi/chat/dm/get",
			"dataType" : "json",
			"data" : {},
			"success" : function(data) {
				//alert("data:"+data.length);
				//加载信息
				loadChatUser(data);
			},
			"error" : function(xhr, txt) {
				
				Message.message("aler", "网络连接失败！");
			}
		});
	};
	
	
	// 2 .Contacts
	Model.prototype.Contacts = function(event){
		this.comp("Me").set({"icon":"img:$UI/App/img/me1.png"});
		this.comp("chats").set({"icon":"img:$UI/App/img/2.png"});
		this.comp("Discover").set({"icon":"img:$UI/App/img/tel1.png"});
		this.comp("Contacts").set({"icon":"img:$UI/App/img/con2.png"});
		var arrObj = eval("document.all.tops"); 
		arrObj.innerHTML="Contacts";
		
		this.comp('pages').to('Contacts_View');
		//清空数据 top
		$("#right").empty();
		$("#left").empty();
		
		$("#listLiView").empty();//清空数据 ul
		
	};
	
	
	// 3 .Discover
	Model.prototype.Discover = function(event){
		this.comp("Me").set({"icon":"img:$UI/App/img/me1.png"});
		this.comp("chats").set({"icon":"img:$UI/App/img/2.png"});
		this.comp("Contacts").set({"icon":"img:$UI/App/img/con1.png"});
		this.comp("Discover").set({"icon":"img:$UI/App/img/tel2.png"});
		
		this.comp('pages').to('Discover_View');
		
		
		var arrObj = eval("document.all.tops"); 
		arrObj.innerHTML="Discover";
		//清空数据 top
		$("#right").empty();
		$("#left").empty();
		var tops = '<a href="javascript:void(0)" onMouseOver="addFriend()" onMouseOut ="cddFriend()" ><img src="http://s163.cc/img/aj_.png" style="width: 27px; height: 27px" /></a>';
		//append 数据完结
		var $dataright = $(tops);
		$("#right").append($dataright);
		$("#listLiView").empty();//清空数据 ul
		
		
	};
	
	//4 .ME
	Model.prototype.Me = function(event){
	//alert(event);
		this.comp("chats").set({"icon":"img:$UI/App/img/2.png"});
		this.comp("Contacts").set({"icon":"img:$UI/App/img/con1.png"});
		this.comp("Discover").set({"icon":"img:$UI/App/img/tel1.png"});
		this.comp("Me").set({"icon":"img:$UI/App/img/me2.png"});
		
		this.comp('pages').to('Me_View');
		
		var arrObj = eval("document.all.tops"); 
		arrObj.innerHTML="Me";
		
		$("#right").empty();//清空数据 top - button
		$("#left").empty();
		
		
		$("#listLiView").empty();//清空数据 ul
		
			
	};

	return Model;
});




// load Chat user number 
function loadChatUser(data){
	var listTab = "";
	$("#listLiView").empty();//清空数据 ul
	
	for(var i =0;i<data.length;i++){
		listTab += '<li onClick="index(this.id)" id="'+data[i].name+'">';	
		listTab += '<img src="'+data[i].img+'"  style="width: 70px; height: 70px" />';
		listTab += '<h3><a href="#page2">'+data[i].name+'</a></h3>';
		listTab += '<p>Msg</p>';
		listTab += '<p class="ui-li-aside">'+data[i].date+'</p>';
		listTab += '<span class="ui-li-count">'+data[i].mnumber+'</span></li>';
		

	}
	
	var $node = $(listTab);
	
	$("#listLiView").append($node);
	//刷新加载样式
	$("#listLiView").listview("refresh");
	
	
}

//自定义方法--Ver1.0

function randomString(len) {
	　　len = len || 32;
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZABCDEFHIJKMNPRSTWXYZ0123456789';    
	　　var maxPos = $chars.length;
	　　var str = '';
	　　for (i = 0; i < len; i++) {
	　　　　str += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return str;
	}



// local Chat msgDetall
function index(id){
	
	// 存入参数  
	localStorage.setItem('hisName',id);
	
	//this.comp('pages').to('Msg_chat_View');
	window.location.href="./msg.w";
	
	//window.location.search="id="+id;
}


// addFriend open
function addFriend(){
	// 清空元素 创建新的元素
	  $("#panel").empty();
	  $("#panel").append('<a href="#" >1.添加好友</a><br/>');
	  $("#panel").append('<a href="#" >2.扫码添加</a><br/>');
	  $("#panel").append('<a href="#" >3.附近的人</a><br/>');
	 // $("#panel").fadeToggle("slow");
	  $("#panel").slideDown("slow");
	//alert("添加好友！");
}


//addFriend clear
function cddFriend(){
	  $("#panel").slideUp("slow");
}

// chat s open.
function addChat(){
	// 清空元素 创建新的元素
	  $("#panel").empty();
	  $("#panel").append('<a href="#" >1.创建聊天</a>');
	  $("#panel").slideDown("slow");	  
	//alert("创建聊天");
}
//chat s clear
function cddChat(){
	  $("#panel").slideUp("slow");	  
}


