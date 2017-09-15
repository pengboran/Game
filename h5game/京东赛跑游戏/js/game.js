! function(t) {
	function e(i) {
		if(n[i]) return n[i].exports;
		var a = n[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports
	}
	var n = {};
	e.m = t, e.c = n, e.i = function(t) {
		return t
	}, e.d = function(t, n, i) {
		e.o(t, n) || Object.defineProperty(t, n, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 10)
}([function(module, exports) {
	var common = {},
		get = function() {
			var t = {};
			return function(e) {
				if(t[e]) return t[e];
				var n;
				switch(e) {
					case "win":
						n = window;
						break;
					case "body":
						n = document.body
				}
				return t[e] = $(n)
			}
		}(),
		get$win = function() {
			var t;
			return function() {
				return t = t || $(window)
			}
		}(),
		get$body = function() {
			var t;
			return function() {
				return t = t || $(document.body)
			}
		}();
	! function() {
		var t = Math.floor(1e3 / 60),
			e = function() {
				var e = window.webkitRequestAnimationFrame || window.requestAnimationFrame || function(e) {
					return setTimeout(e, t)
				};
				return function(t, n) {
					var i = new Date;
					return e.call(window, function() {
						var e = new Date,
							a = e - i;
						t.call(n || window, a, i, e)
					})
				}
			}(),
			n = function() {
				var t = window.webkitCancelAnimationFrame || window.cancelAnimationFrame || function(t) {
					clearTimeout(t)
				};
				return function(e) {
					return t.call(window, e)
				}
			}();
		common.RAF_RATE = 60, common.RAF_INTERVAL = t, common.raf = e, common.caf = n
	}(),
	function() {
		var t = "transform",
			e = "transform",
			n = "animation",
			i = "animation",
			a = "animationstart",
			o = "animationiteration",
			s = "animationend",
			r = "transition",
			p = "transition",
			c = "transitionend";
		! function() {
			var d = document.documentElement.style;
			"webkitTransform" in d && (t = "webkitTransform", e = "-webkit-transform"), "webkitAnimation" in d && (n = "webkitAnimation", i = "-webkit-animation", a = "webkitAnimationStart", o = "webkitAnimationIteration", s = "webkitAnimationEnd"), "webkitTransition" in d && (r = "webkitTransition", p = "-webkit-transition", c = "webkitTransitionEnd")
		}(), common.transformCc = t, common.transformDash = e, common.animCc = n, common.animDash = i, common.animStart = a, common.animIteration = o, common.animEnd = s, common.transCc = r, common.transDash = p, common.transEnd = c
	}(),
	function() {
		var t = function() {
				for(var t = arguments, e = [], n = 0, i = t.length; n < i; n++) e.push('<p class="padt_preload" style="background-image:url(' + t[n] + ');"></p>');
				get("body").append(e.join(""))
			},
			e = function() {
				for(var t = arguments, e = [], n = 0, i = t.length; n < i; n++) e.push('<p class="padt_preload ' + t[n] + '"></p>');
				get("body").append(e.join(""))
			};
		common.preload = t, common.preloadClass = e
	}(),
	function() {
		var start = null,
			minExtend, maxExtend, gammas = [],
			BUFFER_LEN = 3,
			handlers = [],
			oriHandler = function(e) {
				if("number" != typeof e.gamma) handlers.forEach(function(t) {
					t(null)
				}), get("win").off("deviceorientation", oriHandler), handlers = [];
				else {
					null == start && (start = e.gamma, minExtend = start - 90, maxExtend = start + 90);
					var gamma = function(t) {
							return start > 0 ? t < minExtend && (t += 180) : t > maxExtend && (t -= 180), Math.max(Math.min(t - start, common.ORI_ROTATION), -common.ORI_ROTATION)
						}(e.gamma),
						gammasLen = gammas.length;
					gammasLen > BUFFER_LEN && (gammas.shift(), gammasLen--), gammas.push(gamma), gammasLen++, gamma = eval(gammas.join("+")) / gammasLen, handlers.forEach(function(t) {
						t(gamma)
					})
				}
			},
			onOri = function(t) {
				return handlers.length || get("win").on("deviceorientation", oriHandler), handlers.push(t), t
			},
			offOri = function(t) {
				for(var e = 0, n = handlers.length; e < n; e++)
					if(t == handlers[e]) {
						handlers.splice(e, 1);
						break
					}
				return handlers.length || get("win").off("deviceorientation", oriHandler), t
			};
		common.onOri = onOri, common.offOri = offOri, common.ORI_ROTATION = 30
	}(),
	function() {
		var t = function(t, e, n) {
			try {
				var i = new MPing.inputs.Click(t || "");
				null != e && (e || (e += ""), i.event_param = e), null != n && (n || (n += ""), i.event_level = n), i.updateEventSeries(), (new MPing).send(i)
			} catch(t) {}
		};
		common.report = t
	}(),
	function() {
		var t = /iphone|ipad/i.test(navigator.userAgent),
			e = function() {
				return t
			},
			n = function() {},
			i = function() {},
			a = function() {},
			o = function() {},
			s = function() {},
			r = function() {
				return !0
			};
		if(t) {
			var p = document.body,
				c = !1,
				d = [],
				u = [],
				l = "hidden",
				h = "visibilitychange",
				f = !1,
				m = function() {
					d.forEach(function(t) {
						t.audio.removeEventListener("play", t.handler, !1)
					}), p.removeEventListener("touchstart", w, !1)
				},
				v = function(t) {
					var e = u.indexOf(t); - 1 != e && u.splice(e, 1)
				},
				g = function() {
					f || u.forEach(function(t) {
						t.play()
					})
				},
				_ = function() {
					for(var t, e = 0, n = u.length; e < n; e++) t = u[e], t.paused ? (u.splice(e, 1), e--, n--) : (t.pause(), t.loop || (u.splice(e, 1), e--, n--))
				},
				w = function() {
					m(), d.forEach(function(t) {
						t.audio.play()
					}), d = [], c = !0
				},
				k = function(t) {
					document[l] ? _() : g()
				};
			p.addEventListener("touchstart", w, !1), void 0 !== document.webkitHidden && (l = "webkitHidden", h = "webkitvisibilitychange"), document.addEventListener(h, k, !1), n = function(t, e) {
				if(!f) {
					if(!c) {
						var n = function() {
							m(), c = !0
						};
						t.addEventListener("play", n, !1), d.push({
							audio: t,
							handler: n
						})
					}
					if(void 0 === e || e) try {
						t.currentTime = 0
					} catch(t) {}
					t.play()
				}
				u.push(t);
				var i = function() {
					v(this), this.removeEventListener("ended", i, !1)
				};
				t.addEventListener("ended", i, !1)
			}, i = function(t) {
				t.pause(), v(t)
			}, a = function() {
				f = !0, _()
			}, o = function() {
				f = !1, g()
			}, s = function() {
				f ? o() : a()
			}, r = function() {
				return f
			}
		}
		common.isAudioEnabled = e, common.play = n, common.pause = i, common.mute = a, common.unmute = o, common.toggleMute = s, common.isMuted = r
	}(), module.exports = common
}, function(module, exports) {
	var DEFAULT_COOKIE_EXPIRE = 864e5,
		ua = navigator.userAgent,
		isJd = /jdapp/i.test(ua),
		isWx = /MicroMessenger/i.test(ua),
		isQq = /MQQBrowser/i.test(ua),
		handlers, showns = [],
		onShowHandler = null,
		onHideHandler = null,
		onTapHideBtnHandler = null,
		cookieExpire, $con, $copyShareCon, $shareTips, common, TPLS = {
			popup: ['<div class="padt_p">', '<p class="padt_p_overlay"></p>', '<div class="padt_p_content" padt-role="content"></div>', '<a class="padt_p_hide_btn" padt-handler="hide"></a>', "</div>"].join(""),
			icon: '<p class="padt_p_icon"></p>',
			title: '<p class="padt_p_title" padt-role="title"></p>',
			subtitle: '<p class="padt_p_subtitle" padt-role="subtitle"></p>',
			packWrap: ['<div class="padt_p_pack_wrap">', '<ul class="padt_p_pack" padt-npd padt-role="pack"></ul>', "</div>"].join(""),
			btns: '<p class="padt_p_btns"></p>',
			prizesWrap: ['<div class="padt_p_prizes_wrap">', '<p class="padt_p_prizes" padt-npd padt-role="prizes"></p>', "</div>"].join(""),
			tipsWrap: ['<div class="padt_p_tips_wrap">', '<p class="padt_p_tips" padt-role="tips"></p>', "</div>"].join(""),
			linkWrap: ['<p class="padt_p_link_wrap">',"</p>"].join(""),
			packItem: '<li class="padt_p_pack_item" padt-role="item"></li>',
			packItemVal: '<p class="padt_p_pack_item_val" padt-role="val"></p>',
			packItemCond: '<p class="padt_p_pack_item_cond" padt-role="cond"></p>',
			packItemCate: '<p class="padt_p_pack_item_cate" padt-role="cate"></p>',
			packItemTips: '<p class="padt_p_pack_item_tips" padt-role="tips"></p>',
			btn: ['<a class="padt_p_btn">', '<span class="padt_p_btn_txt" padt-role="txt"></span>', "</a>"].join(""),
			prize: '<img class="padt_p_prize" padt-role="prize"/>',
			copyShare: ['<div class="padt_cs">', '<p class="padt_cs_overlay"></p>', '<div class="padt_cs_content">', '<div class="padt_cs_top">', '<p class="padt_cs_txt">请复制以下内容，将其分享给微信好友：</p>', '<div class="padt_cs_textarea_wrap">', '<textarea class="padt_cs_textarea" padt-role="textarea"></textarea>', "</div>", '<p class="padt_cs_txt">复制完成后，打开微信：</p>', "</div>", '<p class="padt_cs_btn_wrap">', '<a class="padt_cs_open_btn" padt-role="open_btn">打开微信</a>', "</p>", '<a class="padt_cs_hide_btn" padt-role="hide_btn"></a>', "</div>", "</div>"].join("")
		},
		extend = function(t) {
			for(var e = arguments.length, n = function(t, e) {
					for(var i in e) $.isPlainObject(e[i]) ? ($.isPlainObject(t[i]) || (t[i] = {}), n(t[i], e[i])) : t[i] = e[i]
				}, i = 1; i < e; i++) n(t, arguments[i]);
			return t
		},
		capitalize = function(t) {
			return t.replace(/^./, function(t) {
				return t.toUpperCase()
			})
		},
		findFromSelf = function(t, e) {
			var n = t.find(e);
			return t.is(e) ? n = t.add(n) : n
		},
		destroy = function(t) {
			t.$dom.off(), t.$pack && t.$pack.off(), t.$prizes && t.$prizes.off()
		},
		popup = {
			setTpl: function(t, e) {
				return TPLS[t] = e, popup
			},
			parse: function(str, info) {
				return str ? str.replace(/{([^}]+)}/g, function(match, name) {
					var ret;
					try {
						name = name.replace(/^[a-zA-Z_$\d]+$/, "info.$&"), ret = eval(name)
					} catch(t) {}
					return "number" == typeof ret && (ret += ""), ret || ""
				}) : ""
			},
			parseLine: function(t) {
				return t.replace(/\n/g, "<br/>")
			},
			preinit: function(t) {
				popup.handlers = handlers = t.handlers;
				var e = popup.handlers.replay;
				popup.handlers.replay = function() {
					window.isPopupReplay = !0, e.apply(popup.handlers, arguments), window.isPopupReplay = !1
				};
				var n = t.cookieObj;
				return popup.handlers.cookie = {
					get: n.get,
					set: function(t, e, i, a, o) {
						switch(typeof i) {
							case "undefined":
								i = cookieExpire;
								break;
							case "number":
								i = i;
								break;
							default:
								i -= new Date
						}
						a = a || "/", o = o || location.hostname, n.add(t, e, Math.ceil(i / 864e5), a, o)
					},
					del: function(t, e, i) {
						e = e || "/", i = i || location.hostname, n.del(t, e, i)
					}
				}, popup
			},
			init: function(t) {
				var e = {
						common: {
							prefix: ""
						},
						default: {
							orders: ["icon", "title", "subtitle", "pack", "btns", "prizes", "tips", "link"],
							linkTxt: null,
							linkType: "go",
							shareBtnTxt: "",
							couponBtnTxt: "",
							loginBtnTxt: "",
							homeBtnTxt: "",
							goBtnTxt: "",
							replayBtnTxt: "",
							retryBtnTxt: ""
						},
						coupon: {
							icon: "coupon",
							title: "恭喜您获得{val}元优惠券",
							btns: ["go", "share"],
							tips: "优惠券到账可能有延迟"
						},
						fail: {
							icon: "fail",
							title: "和奖品擦肩而过",
							btns: ["go", "replay"]
						},
						login: {
							icon: "login",
							title: "登录后离中奖更进一步",
							btns: ["login"]
						},
						entity: {
							icon: "entity",
							title: "恭喜您获得{val}元优惠券",
							btns: ["go", "coupon"],
							tips: "优惠券到账可能有延迟"
						},
						miss: {
							icon: "miss",
							title: "游戏失败",
							btns: ["go", "replay"]
						},
						retry: {
							icon: "retry",
							title: "网络开小差了，重试一下！",
							btns: ["retry"]
						}
					},
					n = {};
				common = extend({}, e.common, t.common), cookieExpire = function() {
					var t, e = common.end,
						n = DEFAULT_COOKIE_EXPIRE;
					return e && (t = new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second) - new Date) > 0 && (n = t), n
				}(), $con = $copyShareCon = $(document.body), $shareTips = $("#share_tips");
				for(var i in e) n[i] = null;
				for(var i in t) n[i] = null;
				for(var i in n) ! function(n) {
					"common" != n && "default" != n && (popup[n] = function(i, a) {
						var o = extend({}, e.default, e[n], t.default, t[n]);
						if("retry" == n) {
							var s = i;
							i = a, a = arguments[2]
						}
						if(a) {
							var r = handlers.cookie.get(common.prefix + capitalize(n) + "PopupInfo");
							if(r) try {
								i = JSON.parse(r)
							} catch(t) {}
						} else if(i) {
							var p = ["val", "cond", "cate", "tips", "cls", "img", "name"];
							if(i.pack && i.pack.length || !p.some(function(t) {
									return i[t]
								}) || (i.pack = [function() {
									var t = {};
									return p.forEach(function(e) {
										t[e] = i[e]
									}), t
								}()]), i.pack && i.pack.length && !p.some(function(t) {
									return i[t]
								})) {
								var c = i.pack[0];
								p.forEach(function(t) {
									i[t] = c[t]
								})
							}
						}
						i = i || {}, i.gameRet = popup.getGameRet(), o.dyn && (o = extend(o, o.dyn[(o.dyn.keys || []).reduce(function(t, e) {
							var n = i && void 0 !== i[e] ? i[e] : "";
							return(t ? t + "," : "") + n
						}, "") || "default"] || o.dyn.default));
						var d, u, l = $(TPLS.popup),
							h = l[0],
							f = findFromSelf(l, '[padt-role="content"]');
						if(l.addClass("padt_p_type_" + n), o.orders.forEach(function(t) {
								switch(t) {
									case "icon":
										o.icon && $(TPLS.icon).addClass("padt_p_icon_" + popup.parse(o.icon, i)).appendTo(f);
										break;
									case "title":
										null != o.title && findFromSelf($(TPLS.title).appendTo(f), '[padt-role="title"]').html(popup.parseLine(popup.parse(o.title, i)));
										break;
									case "subtitle":
										null != o.subtitle && findFromSelf($(TPLS.subtitle).appendTo(f), '[padt-role="subtitle"]').html(popup.parseLine(popup.parse(o.subtitle, i)));
										break;
									case "pack":
										o.pack && o.pack.length && i && i.pack && i.pack.length && (d = findFromSelf($(TPLS.packWrap).appendTo(f), '[padt-role="pack"]'), i.pack.forEach(function(t) {
											t.gameRet = i.gameRet;
											var e = findFromSelf($(TPLS.packItem).appendTo(d), '[padt-role="item"]');
											o.packItemClass && e.addClass(popup.parse(o.packItemClass, t)), o.pack.forEach(function(n) {
												findFromSelf($(TPLS["packItem" + capitalize(n.type)]).appendTo(e), '[padt-role="' + n.type + '"]').html(popup.parseLine(popup.parse(n.val, t)))
											})
										}), d.on("touchstart", function(t) {
											this.scrollHeight <= this.offsetHeight && t.preventDefault()
										}));
										break;
									case "btns":
										if(o.btns && o.btns.length && (!isJd && isWx && (o.btns = o.btns.filter(function(t) {
												return "share" != t
											})), o.btns && o.btns.length)) {
											var e = $(TPLS.btns).appendTo(f);
											o.btns.forEach(function(t) {
												var n = $(TPLS.btn),
													a = o[t + "BtnTxt"];
											a && findFromSelf(n, '[padt-role="txt"]').html(popup.parseLine(popup.parse(a), i)), n.addClass("padt_p_btn_" + t).attr("padt-handler", t).appendTo(e)
											})
										}
										break;
									case "prizes":
										if(o.prizes && o.prizes.length) {
											l.addClass("padt_p_with_prizes"), u = findFromSelf($(TPLS.prizesWrap).appendTo(f), '[padt-role="prizes"]'), o.prizes.forEach(function(t) {
												findFromSelf($(TPLS.prize).appendTo(u), '[padt-role="prize"]').attr("src", t)
											}), u.on("touchstart", function(t) {
												this.scrollWidth <= this.offsetWidth && t.preventDefault()
											});
											var a = !1;
											u.on({
												touchmove: function() {
													a = !0
												},
												touchend: function(t) {
													a && !t.touches.length && (handlers.onSlicePrize && handlers.onSlicePrize.call(this, {
														type: n,
														info: i,
														common: common,
														conf: o,
														e: t
													}), a = !1)
												}
											})
										}
										break;
									case "tips":
										null != o.tips && findFromSelf($(TPLS.tipsWrap).appendTo(f), '[padt-role="tips"]').html(popup.parseLine(popup.parse(o.tips, i)));
										break;
									case "link":
										null != o.linkTxt && findFromSelf($(TPLS.linkWrap).appendTo(f), '[padt-role="link"]').html(popup.parseLine(popup.parse(o.linkTxt, i))).attr("padt-handler", o.linkType)
								}
							}), o.class && l.addClass(popup.parse(o.class, i)), a ? l.addClass("padt_p_no_anim") : l.removeClass("padt_p_no_anim"), l.on("touchend", "[padt-handler]", function(t) {
								var e = $(this),
									a = e.attr("padt-handler");
								if(a) {
									var s = {
											type: n,
											info: i,
											common: common,
											conf: o,
											e: t
										},
										r = a.match(/^jump(\d+)/);
									r && (a = "jump", s.urlIdx = r[1]), handlers[a] && handlers[a].call(this, s)
								}
							}), l.on("touchend", '[padt-handler="hide"]', function(t) {
								showns.some(function(e, i) {
									if(h == e.$dom[0]) return showns.splice(i, 1), destroy(e), l.remove(), handlers.cookie.del(common.prefix + capitalize(n) + "PopupInfo"), onTapHideBtnHandler && onTapHideBtnHandler(n, l, t), onHideHandler && onHideHandler(n, l, !0), !0
								})
							}), l.on("touchend", '[padt-handler="retry"]', function(t) {
								s && s.call(this, {
									type: n,
									info: i,
									common: common,
									conf: o,
									e: t
								}), showns.some(function(t, e) {
									if(h == t.$dom[0]) return showns.splice(e, 1), destroy(t), l.remove(), handlers.cookie.del(common.prefix + capitalize(n) + "PopupInfo"), onHideHandler && onHideHandler(n, l, !1), !0
								})
							}), l.on("touchstart", function(t) {
								$(t.target).closest("[padt-npd]").length || t.preventDefault()
							}), showns.some(function(t, e) {
								if(h == t.$dom[0]) return showns.splice(e, 1), !0
							}), showns.push({
								type: n,
								$dom: l,
								$pack: d,
								$prizes: u
							}), !a) {
							var m = extend({}, i);
							delete m.info, m && !$.isEmptyObject(m) && handlers.cookie.set(common.prefix + capitalize(n) + "PopupInfo", JSON.stringify(m), 0)
						}
						return l.appendTo($con), onShowHandler && onShowHandler(n, i, a, l), popup
					}, popup["hide" + capitalize(n)] = function() {
						return showns.some(function(t, e) {
							if(n == t.type) return showns.splice(e, 1), destroy(t), t.$dom.remove(), handlers.cookie.del(common.prefix + capitalize(t.type) + "PopupInfo"), onHideHandler && onHideHandler(t.type, t.$dom, !1), !0
						}), popup
					})
				}(i);
				! function() {
					var t = !1;
					popup.shareTips = function() {
						return $shareTips && $shareTips.length && (t || (t = !0, $shareTips.on("touchend", function() {
							popup.hideShareTips()
						}).on("touchstart", function(t) {
							t.preventDefault()
						}).addClass("share_tips")), $shareTips.show()), popup
					}, popup.hideShareTips = function() {
						return t && $shareTips.hide(), popup
					}, popup.destroyShareTips = function() {
						return t && ($shareTips.off(), t = !1), $shareTips = null, popup
					}
				}(),
				function() {
					var t = null,
						e = null,
						n = null,
						i = null,
						a = null,
						o = null,
						s = null,
						r = null;
					popup.copyShare = function(p, c, d) {
						t = p, e = c, n = d, i = $(TPLS.copyShare), a = findFromSelf(i, '[padt-role="textarea"]'), o = a[0], s = findFromSelf(i, '[padt-role="open_btn"]'), r = findFromSelf(i, '[padt-role="hide_btn"]');
						var u = popup.parse(p + c, d);
						return s.on("touchend", function(t) {
							handlers.copyShareOpen && handlers.copyShareOpen.call(this, {
								txt: p,
								url: c,
								info: d,
								common: common,
								e: t
							})
						}), r.on("touchend", function(t) {
							popup.hideCopyShare(t)
						}), i.on("touchstart", function(t) {
							t.target != o && t.preventDefault()
						}), a.on("click", function() {
							this.setSelectionRange(0, u.length), this.focus()
						}).on("input", function() {
							u != a.val() && a.val(u)
						}), a.val(u), i.appendTo($copyShareCon), popup
					}, popup.hideCopyShare = function(p) {
						return handlers.onHideCopyShare && handlers.onHideCopyShare.call(this, {
							txt: t,
							url: e,
							info: n,
							common: common,
							e: p || null
						}), s && s.off(), r && r.off(), a && a.off(), i && i.off().remove(), t = null, e = null, n = null, s = null, r = null, a = null, o = null, i = null, popup
					}
				}(),
				function() {
					popup.preload = function() {
						var t = common.preloads;
						if(t && t.length) {
							var e = [];
							t.forEach(function(t) {
								e.push('<p class="padt_p_preload" style="background-image:url(' + t + ');"></p>')
							}), $con.append(e.join(""))
						}
						return popup
					}
				}(),
				function() {
					popup.getGameRet = function() {
						var t = handlers.cookie.get(common.prefix + "GameRet");
						if(t) try {
							return JSON.parse(t)
						} catch(t) {}
						return {}
					}, popup.setGameRet = function(t) {
						return handlers.cookie.set(common.prefix + "GameRet", JSON.stringify(t)), popup
					}, popup.setGameRetProp = function(t, e) {
						var n = popup.getGameRet();
						if("string" == typeof t) n[t] = e;
						else
							for(var i in t) n[i] = t[i];
						return popup.setGameRet(n)
					}
				}(),
				function() {
					popup.getModuleIdx = function() {
						return popup.getGameRet().moduleIdx
					}, popup.setModuleIdx = function(t) {
						return popup.setGameRetProp("moduleIdx", t)
					}
				}(),
				function() {
					popup.getShareKey = function() {
						return popup.getGameRet().shareKey
					}, popup.setShareKey = function(t) {
						return popup.setGameRetProp("shareKey", t)
					}
				}();
				for(var i in handlers) ! function(t) {
					var e = t.replace(/^./, function(t) {
						return t.toUpperCase()
					});
					switch(t) {
						case "share":
							popup.callShare = function(t, e) {
								return null != e && popup.setShareKey(e), handlers.share({
									type: t || ""
								}), popup
							};
							break;
						case "jump":
							popup.callJump = function(t, e) {
								return handlers.jump({
									type: t || "",
									urlIdx: e
								}), popup
							};
							break;
						case "updateTRCShare":
							popup.callUpdateTRCShare = handlers.updateTRCShare;
							break;
						default:
							popup["call" + e] = function(e) {
								return handlers[t]({
									type: e || ""
								}), popup
							}
					}
				}(i);
				return popup
			},
			hide: function(t) {
				return showns.some(function(e) {
					return destroy(e), e.$dom.remove(), handlers.cookie.del(common.prefix + capitalize(e.type) + "PopupInfo"), onHideHandler && onHideHandler(e.type, e.$dom, !1), !t
				}), showns = [], popup
			},
			onShow: function(t) {
				return onShowHandler = t, popup
			},
			onHide: function(t) {
				return onHideHandler = t, popup
			},
			onTapHideBtn: function(t) {
				return onTapHideBtnHandler = t, popup
			},
			set$con: function(t) {
				return $con = t, popup
			},
			set$copyShareCon: function(t) {
				return $copyShareCon = t, popup
			},
			set$shareTips: function(t) {
				return $shareTips = t, popup
			}
		};
	module.exports = popup
}, function(t, e) {
	var n = {},
		i = document.documentElement.style,
		a = function(t) {
			return t.replace(/^./, function(t) {
				return t.toUpperCase()
			})
		};
	[{
		ab: "ani",
		prop: "animation",
		relates: ["Start", "Iteration", "End"]
	}, {
		ab: "per",
		prop: "perspective"
	}, {
		ab: "tsf",
		prop: "transform"
	}, {
		ab: "tsi",
		prop: "transition",
		relates: ["End"]
	}].forEach(function(t) {
		var e = t.ab,
			o = t.prop,
			s = t.relates,
			r = a(o);
		o in i ? (n[e] = n[e + "2"] = o, s && s.forEach(function(t) {
			n[e + t] = o + t.toLowerCase()
		})) : (n[e] = "webkit" + r, n[e + "2"] = "-webkit-" + o, s && s.forEach(function(t) {
			n[e + t] = "webkit" + r + t
		}))
	}), t.exports = n
}, function(t, e, n) {
	n(8), n(4), n(6), n(7), n(5);
	var i, a, o, s, r, p, c, d, u = n(0),
		l = n(1),
		h = n(12),
		f = function() {
			a.on(u.animEnd, function(t) {
				t.target == this && ($(this).hide(), s.show())
			}), s.on("touchend", function(t) {
				u.report("Babel_dev_adv_StartGame", "00043567_05695042_00577180_1"), t.target == this && ($(this).hide(), i.handleNpc(), i.userStart())
			}), a.on("touchend", function(t) {
				t.target == this && (clearTimeout(o), $(this).hide(), s.show())
			}), a.on("touchstart", function(t) {
				t.preventDefault()
			}), s.on("touchstart", function(t) {
				t.preventDefault()
			}), c.on("touchstart", function(t) {
				t.preventDefault()
			}), r.on("touchend", function(t) {
				t.target == this && (u.report("Babel_dev_adv_Rule"), c.show(), d.show())
			}), p.on("touchend", function(t) {
				t.target == this && (u.report("Babel_dev_adv_CloseRule"), d.hide(), c.hide())
			})
		};
	t.exports = {
		init: function(t) {},
		initStart: function(t) {
			t.isFirst && (l.onShow(function(t, e, n, i) {
				"coupon" == t && i.addClass("popup_val_len_" + e.pack[0].val.toString().length)
			}), u.preloadClass("img0"), u.preloadClass("img1"), u.preloadClass("img2"), u.preloadClass("img3"), u.preloadClass("img4"), u.preloadClass("img5"), u.preloadClass("img6"), u.preloadClass("img7"), u.preloadClass("img8"), u.preloadClass("img9"), u.preloadClass("img10"), t.container = $("#gameBox"), t.track = $('<div class="img1 track_unit"></div>'), t.user = $('<div class="user_player"><div class="img5 user_char" id="userChar"></div><div class="user_power" id="userPower"><div class="power_value" id="powerValue"></div><div class="img2 power_frame"></div></div></div>'), t.npc = $('<div class="npc_player"><div class="img6 npc_char" id="npcChar"></div></div>'), t.finish = $('<div class="img7 finish_line"></div>'), t.decorations = [$('<div class="img3 decoration_right" id="decorationRight"></div>'), $('<div class="img4 decoration_left" id="decorationLeft"></div>')], t.process = $("#gameMask"), t.stillLife = $('<div class="middle_line"></div>'), t.trackLength = CONF.custom.trackLength, t.$userWin = $("#userWin"), t.$npcWin = $("#npcWin"), t.npcMaxSpeed = CONF.custom.npcMaxSpeed, a = $("#frontPage"), s = $("#tutorial"), r = $("#ruleBtn"), d = $("#ruleContent"), p = $("#ruleClose"), c = $("#ruleOverlay"), i = new h(t), i.init(t), f())
		},
		start: function(t) {
			a.show(), i.start(t), o = setTimeout(function() {
				a.addClass("fade_out"), u.report("Babel_dev_adv_Flash")
			}, 4e3)
		},
		restart: function(t) {
			l.onShow(function(t, e, n, i) {
				"coupon" == t && i.addClass("popup_val_len_" + e.pack[0].val.toString().length)
			}), $("#gameBox").empty(), u.preloadClass("img0"), u.preloadClass("img1"), u.preloadClass("img2"), u.preloadClass("img3"), u.preloadClass("img4"), u.preloadClass("img5"), u.preloadClass("img6"), u.preloadClass("img7"), u.preloadClass("img8"), u.preloadClass("img9"), u.preloadClass("img10"), t.container = $("#gameBox"), t.track = $('<div class="img1 track_unit"></div>'), t.user = $('<div class="user_player"><div class="img5 user_char" id="userChar"></div><div class="user_power" id="userPower"><div class="power_value" id="powerValue"></div><div class="img2 power_frame"></div></div></div>'), t.npc = $('<div class="npc_player"><div class="img6 npc_char" id="npcChar"></div></div>'), t.finish = $('<div class="img7 finish_line"></div>'), t.decorations = [$('<div class="img3 decoration_right" id="decorationRight"></div>'), $('<div class="img4 decoration_left" id="decorationLeft"></div>')], t.process = $("#gameMask"), t.stillLife = $('<div class="middle_line"></div>'), t.trackLength = CONF.custom.trackLength, t.$userWin = $("#userWin"), t.$npcWin = $("#npcWin"), t.npcMaxSpeed = 1.01 * CONF.custom.npcMaxSpeed, a = $("#frontPage"), s = $("#tutorial"), r = $("#ruleBtn"), d = $("#ruleContent"), p = $("#ruleClose"), c = $("#ruleOverlay"), s.show(), i = new h(t), i.init(t), f(), i.start(t)
		}
	}
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , function(t, e, n) {
	var i, a, o = (n(0), n(1)),
		s = n(3) || {},
		r = {
			init: function(t) {
				t = t || {}, a = function(e) {
					e = e || {}, r.moduleIdx = r.moduleIdx || 1, o.setGameRet(e), t.onDraw(e)
				};
				var e = CONF.cookiePrefix || "",
					n = o.handlers.cookie.get;
				i = "true" == n(e + "gomall") ? "back" : function(t) {
					var e = location.search.match(new RegExp("[\\?&]open=([^&#]+)"));
					return e && decodeURIComponent(e[1]) || ""
				}() && "false" != n(e + "Gamec") ? "login" : "normal", s.init && s.init({
					type: i,
					draw: a,
					custom: t.custom || {}
				})
			},
			start: function() {
				var t = !1;
				return function() {
					var e = !t;
					t || (t = !0, s.initStart && s.initStart({
						type: i,
						isFirst: e,
						draw: a,
						custom: {}
					})), window.isPopupReplay ? s.restart && s.restart({
						type: i,
						isFirst: e,
						draw: a,
						custom: {}
					}) : s.start && s.start({
						type: i,
						isFirst: e,
						draw: a,
						custom: {}
					})
				}
			}(),
			popup: o,
			env: function() {
				var t = navigator.userAgent;
				return {
					xview: "undefined" != typeof XView,
					app: /jdapp/i.test(t),
					wx: /MicroMessenger/i.test(t),
					qq: /MQQBrowser/i.test(t)
				}
			}()
		};
	window.game = r
}, function(t, e, n) {
	var i = n(2),
		a = function(t) {
			this.race = t.race, this.race.npc = this, this.con = t.con, this.$ = t.$, this.hafScrH = .5 * this.race.h, this.h = 0, this.speed = 0, this.y = -50, this.acceleration = CONF.custom.npcAcceleration, this.wholeCourse = 0, this.maxSpeed = t.npcMaxSpeed
		};
	a.prototype = {
		init: function() {
			this.$.css({
				left: "33%",
				bottom: "0"
			}), this.$.css(i.tsf2, "translate3d(-50%,0,0)"), this.con.append(this.$), this.h = this.$.height(), this.wholeCourse = this.race.trackLength - .5 * (this.hafScrH - this.h)
		},
		update: function(t) {
			return this.y -= this.speed * t / 1e3, this
		},
		render: function(t) {
			var e = this.y - t;
			return this.$.css(i.tsf2, "translate3d(-50%," + e + "px,0)"), this
		},
		speedUp: function() {
			return this.speed += this.acceleration, this.speed >= this.maxSpeed ? this.speed = this.maxSpeed : this.speed > .5 * this.maxSpeed && this.speed < this.maxSpeed ? this.$.find("#npcChar").removeClass("slow").addClass("fast") : this.speed > 0 && this.speed < .7 * this.maxSpeed && this.$.find("#npcChar").addClass("slow"), this
		},
		check: function() {
			Math.abs(this.y) >= this.wholeCourse && this.race.npcWin()
		}
	}, t.exports = a
}, function(t, e, n) {
	var i, a, o, s, r = n(15),
		p = n(0),
		c = n(1),
		d = n(13),
		u = n(14),
		l = n(11),
		h = function(t) {
			t = t || {}, this.$ = t.container, this.$process = t.process, this.trackLength = t.trackLength, this.trackAllUnit = h.track_total_unit, t.trackPerLength = this.trackLength / this.trackAllUnit, this.tracks = [], this.user = null, this.npc = null, this.tracksLen = 0, this.h = this.$.height(), this.finish = t.finish, this.playerInitPos = h.player_init_position, this.decorations = t.decorations, this.stillLife = t.stillLife, this.$userWin = t.$userWin, this.$npcWin = t.$npcWin, this.resultShowTime = CONF.custom.resultShowTime, this.screenTotalNumbers = 0, this.npcMaxSpeed = t.npcMaxSpeed
		};
	h.prototype = {
		init: function(t) {
			t = t || {}, i = t.draw, this.addTrack(t), this.addUser(t), this.addNpc(t), this.addDecorations()
		},
		addTrack: function(t) {
			this.screenTotalNumbers = Math.ceil(this.h / t.trackPerLength) + 1;
			for(var e = 0; e < this.screenTotalNumbers; e++) {
				var n = t.trackPerLength * e;
				a = new d({
					race: this,
					con: this.$,
					$: t.track,
					trackPerLength: t.trackPerLength
				}), a.init(n), 0 == e && a.addPlayerName()
			}
		},
		addUser: function(t) {
			o = new u({
				race: this,
				con: this.$,
				$: t.user,
				tracks: this.tracks,
				finish: this.finish,
				initPos: this.playerInitPos
			}), o.init(t)
		},
		addNpc: function(t) {
			s = new l({
				race: this,
				con: this.$,
				$: t.npc,
				initPos: this.playerInitPos,
				npcMaxSpeed: this.npcMaxSpeed
			}), s.init(t)
		},
		addDecorations: function() {
			for(var t = this.decorations.length, e = 0; e < t; e++) this.decorations[e].appendTo(this.$);
			this.$process.css({
				background: "-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(3, 187, 217, 0)), to(rgba(255, 66, 22, 0.5)))"
			}), this.stillLife.appendTo(this.$)
		},
		start: function() {
			this.binding(), this.handlingRaf()
		},
		handlingRaf: function() {
			var t = this;
			this.t = r.loop(function(e, n, i) {
				e = Math.min(e, 100), t.update(e)
			})
		},
		update: function(t) {
			var e = o.update(t).render(t).check(t),
				n = e.trackY;
			s.update(t).render(n).check()
		},
		userWin: function() {
			var t = this;
			r.stop(this.t), this.npc.$.find("#npcChar").removeClass("slow fast"), this.user.$.addClass("win"), this.user.$.on(p.animEnd, function(e) {
				"winAnimate" == e.animationName && t.$userWin.show()
			}), setTimeout(function() {
				t.$userWin.hide(), i({
					moduleIdx: 1
				})
			}, t.resultShowTime)
		},
		npcWin: function() {
			p.report("Babel_dev_adv_Defeat");
			var t = this;
			r.stop(this.t), this.user.$.find("#userChar").removeClass("slow fast"), this.npc.$.addClass("win"), this.npc.$.on(p.animEnd, function(e) {
				"winAnimate" == e.animationName && t.$npcWin.show(), setTimeout(function() {
					t.$npcWin.hide(), c.custom0()
				}, t.resultShowTime)
			})
		},
		binding: function() {
			var t = this;
			this.$.on("touchend", function() {
				t.user.speedUp()
			}), this.$.on("touchstart", function(t) {
				t.preventDefault()
			}), this.$userWin.on("touchstart", function(t) {
				t.preventDefault()
			}), this.$npcWin.on("touchstart", function(t) {
				t.preventDefault()
			}), this.$process.on("touchstart", function(t) {
				t.preventDefault()
			})
		},
		handleNpc: function() {
			var t = this,
				e = function() {
					var n = t.npc.speedUp(),
						i = setTimeout(e, 500);
					n.speed == CONF.custom.npcMaxSpeed && clearTimeout(i)
				};
			e()
		},
		userStart: function() {
			this.user.speedUp()
		}
	}, h.track_total_unit = 10, h.player_init_position = 10, t.exports = h
}, function(t, e, n) {
	var i = n(2),
		a = function(t) {
			this.race = t.race, this.con = t.con, this.$ = t.$, this.perLength = t.trackPerLength, this.y = 0, this.speed = 0, this.copy = this.$.clone(), this.race.tracks.push(this), this.race.tracksLen++, this.index = this.race.tracksLen - 1
		};
	a.prototype = {
		init: function(t) {
			var e = this;
			this.y = -1 * t, this.speed = 0, this.copy.css(i.tsf2, "translate3d(0," + this.y + "px,0)"), this.copy.css({
				width: "100%",
				position: "absolute",
				height: e.perLength,
				bottom: 0
			}), this.con.append(this.copy)
		},
		update: function(t, e) {
			return this.speed = e, this.speed <= 0 && (this.speed = 0), this.y += this.speed * t / 1e3, this
		},
		render: function() {
			return this.copy.css(i.tsf2, "translate3d(0," + this.y + "px,0)"), this
		},
		check: function() {
			return this.y >= this.perLength && (0 == this.index ? this.y = this.race.tracks[this.index + this.race.tracksLen - 1].y - this.perLength + 5 : this.y = this.race.tracks[this.index - 1].y - this.perLength, this.copy.empty()), this
		},
		addPlayerName: function() {
			this.copy.html('<div class="img2 user_name"></div><div class="img2 npc_name"></div>')
		}
	}, t.exports = a
}, function(t, e, n) {
	var i = n(2),
		a = function(t) {
			this.race = t.race, this.con = t.con, this.$ = t.$, this.$gameMask = t.$gameMask, this.finish = t.finish, this.tracks = t.tracks, this.y = -50, this.speed = 0, this.race.user = this, this.acceleration = CONF.custom.userAcceleration, this.deceleration = CONF.custom.userDeceleration, this.hafScrH = .5 * this.race.h, this.h = 0, this.distance = 0, this.trackY = 0, this.wholeCourse = 0, this.finishDiff = -1 * this.hafScrH, this.middlePoint = 0, this.currentDiff = 0, this.processRatio = 0, this.speedRatio = 0
		};
	a.prototype = {
		init: function(t) {
			t = t || {}, this.$.css({
				left: "66%",
				bottom: "0"
			}), this.$.css(i.tsf2, "translate3d(-50%,0,0)"), this.con.append(this.$), this.h = this.$.height(), this.wholeCourse = this.race.trackLength - .5 * (this.hafScrH - this.h), this.middlePoint = this.hafScrH - .5 * this.h
		},
		update: function(t) {
			return this.speed -= this.deceleration * t / 1e3, this.speed < CONF.custom.userMaxSpeed && this.speed > .5 * CONF.custom.userMaxSpeed ? this.$.find("#userChar").removeClass("slow").addClass("fast") : this.speed > 0 && this.speed < .7 * CONF.custom.userMaxSpeed ? this.$.find("#userChar").removeClass("fast").addClass("slow") : (this.speed = 0, this.$.find("#userChar").removeClass("fast slow")), this.y -= this.speed * t / 1e3, this.speedRatio = this.speed / CONF.custom.userMaxSpeed * 90, this.$.find("#powerValue").css({
				width: this.speedRatio + "%"
			}), this
		},
		render: function(t) {
			if(this.distance = Math.abs(this.y), this.distance >= this.middlePoint) {
				for(var e = this.tracks.length, n = 0; n < e; n++) this.tracks[n].update(t, this.speed).render().check();
				for(var a = this.race.decorations.length, o = 0; o < a; o++) this.race.decorations[o].css({
					"background-position": "0 " + (-1 * this.y - this.middlePoint) + "px"
				});
				this.trackY -= this.speed * t / 1e3
			} else this.$.css(i.tsf2, "translate3d(-50%," + this.y + "px,0)");
			return this
		},
		speedUp: function() {
			this.speed += this.acceleration, this.speed >= CONF.custom.userMaxSpeed && (this.speed = CONF.custom.userMaxSpeed)
		},
		check: function(t) {
			return this.currentDiff = Math.abs(this.y), this.processRatio = this.currentDiff / this.wholeCourse, this.processRatio >= 1 && (this.processRatio = 1), this.currentDiff >= this.wholeCourse ? this.race.userWin() : this.currentDiff >= this.wholeCourse - this.hafScrH && (this.finishDiff += this.speed * t / 1e3, this.con.append(this.finish), this.finish.css(i.tsf2, "translate3d(0," + this.finishDiff + "px,0)")), this.race.$process.css({
				background: "-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(3, 187, 217, " + .5 * this.processRatio + ")), to(rgba(255, 66, 22, " + .5 * (1 - this.processRatio) + ")))"
			}), this
		}
	}, t.exports = a
}, function(t, e) {
	var n = Math.floor(1e3 / 60),
		i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
			return setTimeout(t, n)
		},
		a = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
			clearTimeout(t)
		},
		o = function(t, e) {
			var n = new Date;
			return i.call(window, function() {
				var i = new Date;
				t.call(e || window, i - n, n, i)
			})
		},
		s = function(t) {
			return a.call(window, t)
		},
		r = {},
		p = 1,
		c = function(t, e) {
			var n = p++,
				a = new Date,
				o = function() {
					r[n] = i.call(window, function() {
						var i = new Date;
						!1 === t.call(e, i - a, a, i) ? delete r[n] : r[n] && (a = i, o())
					})
				};
			return o(), n
		},
		d = function(t) {
			s(r[t]), delete r[t]
		};
	o.caf = s, o.loop = c, o.stop = d, t.exports = o
}]);