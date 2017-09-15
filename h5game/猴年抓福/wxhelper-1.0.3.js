/**
 * Copyright 2015 51h5.com All rights reserved.
 */
~ function(n) {
	function e(n, e, o) {
		"function" == typeof k.onShare && k.onShare(n, e, o)
	}

	function o() {
		return h ? p ? void v.split(",").forEach(function(o) {
			n.wx["onMenuShare" + o]({
				title: "Timeline" === o ? b.desc : b.title,
				desc: "Timeline" === o ? b.title : b.desc,
				imgUrl: b.img,
				link: b.link,
				trigger: function(n) {
					e(o.toLowerCase(), "trigger", n)
				},
				fail: function(n) {
					e(o.toLowerCase(), "fail", n)
				},
				success: function(n) {
					e(o.toLowerCase(), "success", n)
				},
				cancel: function(n) {
					e(o.toLowerCase(), "cancel", n)
				}
			})
		}) : r() : void 0
	}

	function t(n) {
		n = n || {};
		var e;
		for(var o in b) b.hasOwnProperty(o) && n[o] && (b[o] = n[o], e = !0);
		return e
	}

	function i() {
		n.wx && n.wx.config || (u("will load jssdk"), l(m, null, function(n) {
			n ? u("fail load jssdk") : (u("did load jssdk"), g = !0, r())
		}))
	}

	function r() {
		if(h && !k.data) {
			if(!g) return i();
			n.wx.error(k.onError);
			var e = "scb" + Date.now();
			n[e] = function(t) {
				return n[e] = null, delete n[e], !t || t.code ? void u("fail sign#" + e, t) : (t.debug = f, t.jsApiList = v.split(",").map(function(n) {
					return "onMenuShare" + n
				}), n.wx.config(t), n.wx.ready(o), k.data = t, p = !0, void u("did sign#" + e, t))
			}, u("will sign#" + e), l(y + x, {
				id: e,
				data: {
					cb: e
				}
			})
		}
	}

	function a(n, e) {
		Object.keys(n).forEach(function(o) {
			e(o, n[o])
		})
	}

	function c(n) {
		var e = [];
		return a(n || {}, function(n, o) {
			Array.isArray(o) || (o = [o]), o.forEach(function(o) {
				e.push(n + "=" + encodeURIComponent(o))
			})
		}), e.join("&")
	}

	function l(n, e, o) {
		n = n.trim(), e = e || {};
		var t = c(e.data);
		if(n += t ? (n.indexOf("?") < 0 ? "?" : "&") + t : "", d[n]) return void(o && o());
		var i = document.createElement("script");
		i.charset = e.charset || "utf-8", i.defer = "defer", i.async = "async", e.id && (i.id = e.id), i.src = n, i.onreadystatechange = i.onload = function() {
			i && (i.readyState ? /complete|loaded|interactive/i.test(i.readyState) : !0) && (i = s(i), d[n] = !0, o && o())
		}, i.onerror = i.onabort = function() {
			i = s(i), o && o(!0)
		}, document.head.appendChild(i)
	}

	function s(n) {
		return n.onreadystatechange = n.onload = n.onerror = n.onabort = null, document.head.removeChild(n), n = null, null
	}

	function u() {
		f && n.console && console.info.apply(console, ["[" + j + "]"].concat(Array.prototype.slice.call(arguments)))
	}
	var d = {},
		f = !1,
		g = !(!n.wx || !n.wx.config),
		p = !1,
		h = /MicroMessenger\/(?:[\d.]+)/i.test(navigator.userAgent),
		w = location.protocol + "//" + location.host + location.pathname.replace(/\/([^\/]+\.\w+)$/, "/").replace(/(\w+)$/, "$1/"),
		m = "//res.wx.qq.com/open/js/jweixin-1.0.0.js",
		y = "//api.wx.51h5.com/web/share/sign/id/",
		v = "Timeline,AppMessage,QQ,Weibo,QZone",
		x = "ihuowu",
		b = {
			title: document.title,
			desc: "",
			img: "http://static.wanh5.com/images/home/logo200.png",
			link: w,
			type: "",
			dataUrl: ""
		},
		j = "wxHelper",
		k = {};
	k.init = function(n) {
		n = n || {}, n.account && (x = n.account, delete n.account), n.debug && (f = !0, delete n.debug), t(n), r()
	}, k.update = function(n) {
		t(n) && o()
	}, k.onShare = function(n, e, o) {}, k.onError = function(n) {
		u("sign error: " + n.errMsg)
	}, n[j] = k
}(this);