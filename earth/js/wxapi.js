_shareTitle =  "养活70亿个你，需要几个地球呢？";
var _shareLink = "http://www.wwfchina.org/a/week/index.html";
var _shareImage = "http://www.wwfchina.org/a/week/wechat/images/shareimg2.jpg"; //test share img
var _share_desc = "你一定不知道地球养你有多难，赶快测测看！";

    
$(document).ready(function() {
    initWX();
});

wx.ready(function() {    
    checkWXapi_support(); 
});

function initWX()
{
  
    var This_url=encodeURIComponent(location.href.split('#')[0]);
    
    $.ajax({
    	//url: "http://qxu1098440245.my3w.com/wechat/get_js_token.php?url=http://uv.proya.com/wx/test2.html",
        url: "http://www.wwfchina.org/a/week/wechat/get_js_token.php?url="+This_url,
        //url: "get_js_token.php?url=http://qxu1098440245.my3w.com/wechat/test2.html",
        type: "GET",
        cache: true,
        data: {u: location.href},
        dataType: "jsonp",
        success: function(back) {
        	//alert("success APPID:"+back.data.signature);
            wx.config({
                debug: false,
                appId: back.data.appId,
                timestamp: back.data.timestamp,
                nonceStr: back.data.nonceStr,
                signature: back.data.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage'
                ]
            });
        },
        error: function() {
            alert("error");
        }
    });
}

function checkWXapi_support(){	
wx.checkJsApi({
    jsApiList: ['onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
    	  initWXShareContent();
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
});  	
}

function initWXShareContent()
{ 
    wx.onMenuShareTimeline({
        title: _shareTitle, // 分享标题
        link: _shareLink, // 分享链接
        imgUrl: _shareImage, // 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
            _hmt.push(['_trackEvent', "分享", "完成分享", "", ""]);
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
            _hmt.push(['_trackEvent', "分享", "取消分享", "", ""]);
        }         
    });

    wx.onMenuShareAppMessage({
        title: _shareTitle, // 分享标题
        desc: _share_desc, // 分享描述
        link: _shareLink, // 分享链接
        imgUrl: _shareImage, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
        	//alert('sharedone');
            // 用户确认分享后执行的回调函数
        },
        cancel: function() {
        //	alert('sharecancel');
            // 用户取消分享后执行的回调函数
        }
    });
     
}