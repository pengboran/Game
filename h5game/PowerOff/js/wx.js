
$().ready(function() {
	var score1 = localStorage.getItem("score");
	var right = localStorage.getItem("right");
	
   // wxtitile = wxtitile + ret[r][0].name;
	//lg_image = lg_image + "img/" + ret[r][0].img_src;
	
	wxshares();
});

function wxshares() {
	var posturl = "http://wx.wushang.com/PowerOff/";
	var posturl1 = "http://wx.wushang.com/Dywx/";
	var wsurl = posturl1 + "servlet/jsticket";
	var shares = posturl + 'index.html';
	var wsdata = {
		"URL": window.location.href
	};
	$.post(wsurl, wsdata, function(ret) {
		if (ret) {
			var result = ret.all;
			var all = result.split(",");
			wx.config({
				debug: false,
				appId: 'wxbea28fbc0c95c9c8',
				timestamp: all[2],
				nonceStr: all[1],
				signature: all[0],
				jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "showMenuItems", "chooseImage", "previewImage", "uploadImage", "addCard", "chooseCard", "openCard"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
		} else {
			alert("error");
		}
	}, "json");

	wx.ready(function() {
		 //分享给朋友
		wx.onMenuShareAppMessage({
			title: wxtitile, 
			desc: wxdesc, 
			link: shares, 
			imgUrl: posturl + lg_image, // 分享图标
			type: 'link', 
			dataUrl: '', 
			success: function() {
				alert('成功');
			},
			cancel: function() {
			
			}
		});
         //分享到QQ
		wx.onMenuShareQQ({
			title: wxtitile, // 分享标题
			link: shares, // 分享链接
			desc: wxdesc, // 分享描述
			imgUrl: posturl + lg_image, // 分享图标
			success: function() {
				// 用户确认分享后执行的回调函数
				alert('成功');
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			}
		});
         //分享到朋友圈
		wx.onMenuShareTimeline({
			title: wxtitile, // 分享标题
			link: shares, // 分享链接
			imgUrl: posturl + lg_image, // 分享图标
			success: function() {
				// 用户确认分享后执行的回调函数
				alert('成功');
			},
			cancel: function() {
				// 用户取消分享后执行的回调函数
			}
		});
	});

	wx.error(function(res) {

	});

}