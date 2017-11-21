// Created by XQ @Justep
define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var base = require("$UI/system/api/native/base");
	var share = require("$UI/system/api/native/share");
	var image = require('$UI/system/api/native/image');
	var menu = require('$UI/system/api/native/wxMenu');

	require("$UI/article_demo/contacts/jquery.qrcode.min");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.creatQrcode = function(event) {

		var person = {};
		person.name = this.people.val('name');
		person.mobile = this.people.val("mobile");

		if (!person.name || !person.mobile) {
			alert('姓名和手机号都是必填项哦~');
			return false;
		}

		person.org = this.people.val("org");
		person.web = this.people.val("web");
		person.adr = this.people.val("adr");
		person.email = this.people.val("email");
		person.tel = this.people.val("tel");
		person.title = this.people.val("title");

		newCard(person);

	};

	Model.prototype.modelLoad = function(event) {
		var self = this;
		base.ready(function() {
			var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + base.config.wxAppId + '&redirect_uri=' + encodeURIComponent(location.href)
					+ '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
			console.info('===  url  ===', url);
			setShare(url);
		});

		// 获取URL中的参数
		var qs = location.hash.slice(2), items, len, args = {}, item = null, name = null, value = null, i = 0;
		if (!qs) {
			$('.show-page').hide();
			$('.input-page').show();
			return;
		}
		$('.show-page').show();
		$('.input-page').hide();
		items = qs.length ? qs.split('&') : [];
		len = items.length;
		for (i = 0; i < len; i++) {
			item = items[i].split('=');
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if (name.length) {
				args[name] = value;
			}
		}
		console.log('========  params   ========');
		console.info('params', args);
		newCard(args);

	};

	Model.prototype.reply = function(event) {
		$('.show-page').hide();
		$('.input-page').show();
	};

	return Model;

	function setShare(shareUrl) {
		var myurl = location.href.split('#')[0], imgUrl = myurl.slice(0, myurl.length - 10) + 'img/000.png';

		// 分享给微信好友
		share.onMenuShareAppMessage({
			title : '我的二维码名片',
			desc : '长按二维码识别，一键将我的名片存到手机通讯录，还可以在线制作名片分享给朋友们',
			link : shareUrl,
			imgUrl : imgUrl,
			success : function(res) {
				// 用户确认分享后执行的回调函数
				console.log('分享给朋友成功！');
			},
			cancel : function(res) {
				// 用户取消分享后执行的回调函数
				console.log('取消分享！');
			}
		});

		// 分享到朋友圈
		share.onMenuShareTimeline({
			title : '我的二维码名片',
			desc : '长按二维码识别，一键将我的名片存到手机通讯录，还可以在线制作名片分享给朋友们',
			link : shareUrl,
			imgUrl : imgUrl,
			success : function(res) {
				console.log('分享到朋友圈成功！');
			},
			cancel : function(res) {
				// 用户取消分享后执行的回调函数
				console.log('取消分享！');
			}
		});

		// 分享到QQ
		share.onMenuShareQQ({
			title : '我的二维码名片',
			desc : '长按二维码识别，一键将我的名片存到手机通讯录，还可以在线制作名片分享给朋友们',
			link : shareUrl,
			imgUrl : imgUrl,
			success : function(res) {
				console.log('分享到朋友圈成功！');
			},
			cancel : function(res) {
				// 用户取消分享后执行的回调函数
				console.log('取消分享！');
			},
			fail : function(res) {
				console.warn(JSON.stringify(res));
			}
		});

		// 分享到微博
		share.onMenuShareWeibo({
			title : '我的二维码名片',
			desc : '长按二维码识别，一键将我的名片存到手机通讯录，还可以在线制作名片分享给朋友们',
			link : shareUrl,
			imgUrl : imgUrl,
			success : function(res) {
				console.log('分享到朋友圈成功！');
			},
			cancel : function(res) {
				// 用户取消分享后执行的回调函数
				console.log('取消分享！');
			},
			fail : function(res) {
				console.warn(JSON.stringify(res));
			}
		});

		// 分享到QQ空间
		share.onMenuShareQZone({
			title : '我的二维码名片',
			desc : '长按二维码识别，一键将我的名片存到手机通讯录，还可以在线制作名片分享给朋友们',
			link : shareUrl,
			imgUrl : imgUrl,
			success : function(res) {
				console.log('分享到朋友圈成功！');
			},
			cancel : function(res) {
				// 用户取消分享后执行的回调函数
				console.log('取消分享！');
			},
			fail : function(res) {
				console.warn(JSON.stringify(res));
			}
		});
	}

	function newCard(person) {
		var txt = toVcf(person);
		console.info('txt : ', txt);

		$('canvas').remove();
		$('.qrcode-wrp').qrcode({
			text : txt
		});

		var imgSrc = $('canvas')[0].toDataURL("image/png");
		$('.cd-img').attr('src', imgSrc);
		$('.input-page').hide();
		$('.show-page').show();

		location.href = location.href.split('#')[0] + '#!' + toQueryURL(person);
		var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + base.config.wxAppId + '&redirect_uri=' + encodeURIComponent(location.href)
				+ '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

		setShare(url);
		console.info("shareURL : ", url);
	}

	function toVcf(opts) {
		var name, mobile, org, web, adr, email, tel, title;
		name = opts.name && 'N:' + toUtf8(opts.name) + '\r\n';
		mobile = opts.mobile && 'TEL;CELL;VOICE:' + toUtf8(opts.mobile) + '\r\n';
		org = opts.org && 'ORG:' + toUtf8(opts.org) + '\r\n';
		web = opts.web && 'URL;WORK:' + toUtf8(opts.web) + '\r\n';
		adr = opts.adr && 'ADR;WORK:' + toUtf8(opts.adr) + ';\r\n';
		email = opts.email && 'EMAIL;PREF;INTERNET:' + toUtf8(opts.email) + '\r\n';
		tel = opts.tel && 'TEL;WORK;VOICE:' + toUtf8(opts.tel) + '\r\n';
		title = opts.title && 'TITLE:' + toUtf8(opts.title) + '\r\n';
		return 'BEGIN:VCARD\r\n' + name + mobile + org + web + adr + email + tel + title + 'END:VCARD';
	}

function toUtf8(str) {
	if (!str) {
		return false;
	}
	var out, i, len, c;
	out = "";
	len = str.length;
	for (i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if ((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if (c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		}
	}
	return out;
}

	function toQueryURL(opts) {
		var uri = '';
		for ( var key in opts) {
			if (opts[key]) {
				uri += encodeURIComponent(key) + '=' + encodeURIComponent(opts[key]) + '&';
			}
		}
		return uri.substring(0, uri.length - 1);
	}

});