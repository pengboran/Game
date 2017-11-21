define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	require("$UI/App/index/easyui/jquery.easyui.min");
	//占时用不到的js
	
//	require("$UI/App/index/easyui/jquery.easyui.extend");
//	require("css!$UI/App/index/easyui/themes/icon");
//	require("css!$UI/App/index/easyui/themes/default/easyui");
//	require("$UI/App/index/easyui/locale/easyui-lang-zh_CN");
//	require("css!$UI/App/index/easyui/houfei-icon");
//	require("$UI/App/index/easyui/easyuiFormValidate");
	
	var Model = function(){
		this.callParent();
	};

	return Model;
});


function backout (){
	 window.location.href="./index.w"; 
	
}



function adds (){
	alert("查看它人信息！");
}

// 发送msg
function SetMsg(){
	
	var msg = $("#addmsg").val();
	//alert("SetMsg..."+msg);
	
	$.support.cors = true;
	// 一个简单的ajax调用
	$.ajax({
		"type" : "post",
		"url" : "http://192.168.0.107:8087/ChatHi/chat/ISocket/setMsg",
		"dataType" : "json",
		//提交到 Controller msg ,自己的name ,发送给 其他 name
		"data" : {msg:msg,id:localStorage.getItem('username'),pid:localStorage.getItem('hisName')},
		"success" : function(data) {
		//发送完消息 自动刷新
			modelLoad();
			$("#addmsg").val("");
			
		},
		"error" : function(xhr, txt) {
			alert("网络连接失败！:"+txt);
		}
	});

	
	
}


function addActive(){
	
	alert("其他功能在开发...");
}

function modelLoad(){
	
	var arrObj = eval("document.all.tops"); 
	//更改Title 为另一个用户的 id or name
	arrObj.innerHTML=localStorage.getItem('hisName');
	
	// 查找聊天记录
	$.support.cors = true;
	// 一个简单的ajax调用
	$.ajax({
		"type" : "post",
		"url" : "http://192.168.0.107:8087/ChatHi/chat/ISocket/getMsg",
		"dataType" : "json",
		"data" : {},
		"success" : function(data) {
			//alert("data:"+data.length);
			//加载信息
			//alert(data);
			loadMsg(data);
		},
		"error" : function(xhr, txt) {
			alert("网络连接失败！:"+txt);
		}
	});
	
}

function loadMsg(data){
	$("#addmsg").val("");
	$("#msgTableView").empty();
	var View = "";
	for(var i = 0; i<data.length;i++){
	View+='<tr>';
	View+='<td><img  id = "imgchats" src = "'+data[i].img+'"  xid="image9">'+data[i].name+'</img></td>';
	View+='<td><div center="left"  class="tip-bubble tip-bubble-left" style="width: auto;">'+data[i].msg+'</div></td>';
	View+='</tr>';
	
}
	
$("#msgTableView").append(View);
	


	//loadTable();
	
}


