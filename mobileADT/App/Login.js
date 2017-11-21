define(function(require){
        var $ = require("jquery");
        var justep = require("$UI/system/lib/justep");
        require("$UI/system/lib/cordova/cordova");
//        require("$UI/blshopApp/JS/Chart.js");
        require("cordova!org.apache.cordova.device");
        var Baas = require("$UI/demo/baas/baas");
    	var Message = require("$UI/system/components/justep/common/common");
        
        var Model = function(){
                this.callParent();
                this.isVisible = Message.flag;
        };

        
        Model.prototype.btnCheckUserLogin = function(event){
                var userData = this.comp("userData");
                //用户名和密码为空提示
                if ( $.trim(userData.val("username")) === "" || $.trim(userData.val("userpass")) === "") {
                        this.comp("messageDialog").show({
                                "title" : "温馨提示",
                                "message" : "请输入用户名或密码"
                        });
                }else{
                	
                        var self = this;
                        //ajax校验用户名和密码
//    ----------------------start-------------------  

                		//解决跨域问题
                		$.support.cors = true;
                		// 一个简单的ajax调用
                		// 域名 http://s163.cc/
                		$.ajax({
                			"type" : "post",
                			"url" : "http://192.168.0.107:8087/ChatHi/chat/dm/loginAction",
                			"dataType" : "json",
                			"data" : {
                				  "username":userData.val("username"), //POSt提交用户名字段
                                  "password":userData.val("userpass")  //POSt提交密码字段
                			},
                			"success" : function(data) {	
                				// wex5 定义 flog == true  不能  flog = true 
                						if(data==true){
                							//登录成功
                							 localStorage.setItem('username',userData.val("username"));
                							 window.location.href="./index.w";   //登录成功，跳转到APP首页
                							 
                						}else{
                							//登录失败
                							Message.message("aler", "账号密码不符合,请检验您输入的账号密码!！");
                						}
                			},
                			"error" : function(xhr, txt) {
                				Message.message("aler", "请检查您的网络连接！");
                			}
                		});
//    ----------------------end-------------------
                }
               

        };

        return Model;
});