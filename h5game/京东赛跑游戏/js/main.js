!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    }
    ,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 9)
}({
    9: function(e, t) {
        !function(e) {
            function t(i) {
                if (n[i])
                    return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(o.exports, o, o.exports, t),
                o.loaded = !0,
                o.exports
            }
            var n = {};
            t.m = e,
            t.c = n,
            t.p = "",
            t(0)
        }([function(e, t, n) {
            (function(e) {
                var t = n(2)
                  , i = n(3)
                  , o = n(4)
                  , r = n(5)
                  , a = n(6)
                  , c = {
                    J_loading: e("#loading") || e(".loading") || null,
                    J_loadingPg: e("#loadingPage") || e(".loadingpage") || null,
                    trackPrefix: window.CONF.trackPrefix,
                    subTitleArray: window.CONF.subTitleConf.content,
                    cookiePrefix: window.CONF.cookiePrefix || ""
                };
                c.init = function() {
                    c.checkEnv(),
                    c.getModuleID(),
                    c.initPopup(),
                    c.initGame(),
                    c.loadingGame(),
                    c.initShare()
                }
                ,
                c.loadingGame = function() {
                    var n = t.queryString("open")
                      , i = "undefined" != typeof XView
                      , o = r.get(this.cookiePrefix + "gomall")
                      , a = t.queryString("xview");
                    "true" == o ? (c.showPopupBackFromMall(),
                    r.add(this.cookiePrefix + "gomall", "false", 0, void 0, "m.jd.com")) : n && "false" != r.get(this.cookiePrefix + "Gamec") ? (c.lottery(c.getModuleIdxAndInfoAfterLogin().moduleIdx),
                    r.add(this.cookiePrefix + "Gamec", "false", 0, void 0, "m.jd.com")) : i ? a ? c.startGameCheck() : window.XViewShowCallback = c.startGameCheck : e(window).on("load", c.startGameCheck)
                }
                ,
                c.initPopup = function() {
                    game.popup.preinit({
                        handlers: {
                            share: function(e) {
                                c.callShare(e)
                            },
                            coupon: function(e) {
                                c.toCoupon(e)
                            },
                            login: function(e) {
                                c.toLogin(e)
                            },
                            home: function(e) {
                                c.toHome(e)
                            },
                            go: function(e) {
                                c.toMall(e)
                            },
                            jump: function(e) {
                                c.jump(e)
                            },
                            replay: function(e) {
                                c.replayGame(e)
                            },
                            copyShareOpen: function(e) {
                                c.openWXHandle()
                            },
                            onHideCopyShare: function(e) {
                                c.firstCharToUpperCaseAndReportData("", "CloseSharePage")
                            },
                            onSlicePrize: function(e) {
                                c.reported || (c.firstCharToUpperCaseAndReportData("", "SlideProduct"),
                                c.reported = !0)
                            }
                        },
                        cookieObj: {
                            get: r.get,
                            add: r.add,
                            del: r.del
                        },
                        shareMethods: {
                            callShare: i && i.callSharePane,
                            initShare: c.initShare
                        }
                    }).init(window.CONF.popup)
                }
                ,
                c.initGame = function() {
                    game.init({
                        onTapStartBtn: function() {
                            c.firstCharToUpperCaseAndReportData("StartGame", "")
                        },
                        onPrepareEnd: function() {
                            c.firstCharToUpperCaseAndReportData("StartGameAuto", "")
                        },
                        onDraw: function(e) {
                            c.gameResultInfo = e;
                            var t = e.moduleIdx || 0;
                            c.lottery(t)
                        },
                        onHit: function(e) {}
                    })
                }
                ,
                c.getModuleID = function() {
                    var e, n, i = t.queryString("id") || "", o = window.CONF.gameConf && window.CONF.gameConf[i];
                    c.id = i,
                    o ? (n = o.moduleId && "[object Array]" === Object.prototype.toString.call(o.moduleId) && o.moduleId.length > 0 ? o.moduleId : window.CONF.lotteryConf.moduleId || [],
                    e = o.time && +new Date(o.time) ? +new Date(o.time) : void 0,
                    c.gameConf = {
                        time: e,
                        moduleId: n,
                        len: n.length
                    }) : (n = window.CONF.lotteryConf.moduleId || [],
                    c.gameConf = {
                        moduleId: n,
                        len: n.length
                    })
                }
                ,
                c.startGameCheck = function() {
                    t.reportPV(),
                    c.showLoading(!0, !0),
                    c.startGame()
                }
                ,
                c.startGame = function() {
                    c.showLoading(!1, !0),
                    game.start()
                }
                ,
                c.showLoading = function(e, t) {
                    try {
                        t ? c.J_loadingPg && (e ? this.J_loadingPg.show() : this.J_loadingPg.hide()) : c.J_loading && (e ? this.J_loading.show() : this.J_loading.hide())
                    } catch (e) {}
                }
                ,
                c.ajax = function(t, n) {
                    n && c.showLoading(!0),
                    e.ajax({
                        url: t.url,
                        dataType: "jsonp",
                        type: "GET",
                        timeout: window.CONF.timeout || 5e3,
                        data: t.data,
                        success: function(e) {
                            c.firstCharToUpperCaseAndReportData("", "InterfaceSucceed", [e.code || "", e.subCode || "", e.couponValue || ""].join("_")),
                            c.showLoading(!1);
                            var n;
                            n = null === e.code || void 0 === e.code || "" === e.code ? 1 : "string" == typeof e.code ? +e.code : e.code,
                            0 == n ? t.success && "function" == typeof t.success && t.success(e) : 3 == n ? c.hackLoginStatus() : t.subCodeError && "function" == typeof t.subCodeError && t.subCodeError(e)
                        },
                        error: function(e, n, i) {
                            c.showLoading(!1),
                            t.subCodeError && "function" == typeof t.subCodeError && t.subCodeError()
                        }
                    })
                }
                ,
                c.hackLoginStatus = function(e) {
                    if (c.showLoading(!1, !0),
                    c.firstCharToUpperCaseAndReportData("", "NotLogin"),
                    e)
                        c.showLogin();
                    else
                        try {
                            var t = r.get("pwdt_id");
                            t && "******" != t ? c.toLogin() : c.showLogin()
                        } catch (e) {
                            c.showLogin()
                        }
                }
                ,
                c.getModuleIdxAndInfoAfterLogin = function() {
                    return {
                        moduleIdx: game.popup.getModuleIdx(),
                        resultInfo: game.popup.getGameRet()
                    }
                }
                ,
                c.lottery = function(e, t) {
                    c.firstCharToUpperCaseAndReportData("", "LotteryInterface");
                    var n, i = window.CONF.lotteryConf;
                    t ? n = c.retryModuleId : (!e || e <= 0 ? e = 1 : e > c.gameConf.len && (e = c.gameConf.len),
                    n = c.gameConf.moduleId[e - 1] || "",
                    c.retryModuleId = n || ""),
                    c.ajax({
                        url: "//api.m.jd.com/client.action",
                        data: {
                            functionId: window.CONF.functionId || "babelActivityLuckDraw",
                            client: "wh5",
                            clientVersion: "1.0.0",
                            body: JSON.stringify({
                                activityId: i.activityId,
                                pageId: i.pageId,
                                moduleId: n
                            })
                        },
                        success: function(e) {
                            var t, n;
                            t = null === e.subCode || void 0 === e.subCode || "" === e.subCode ? 1 : e.subCode,
                            0 == t ? (n = c.processCoupon(e),
                            n ? 0 == n.name || 1 == n.name ? c.showCoupon(n) : 3 == n.name ? c.showEntity(n) : 2 == n.name && c.showUnstore(n) : c.showFail("", !0)) : c.showFail(t, !0)
                        },
                        subCodeError: function(e) {
                            e ? c.showFail(e.code, !1) : c.retry()
                        }
                    }, !0)
                }
                ,
                c.processCoupon = function(t) {
                    var n = []
                      , i = t.couponName || ""
                      , o = i.split("_")
                      , r = o[0]
                      , a = o[1] || ""
                      , c = t.lotteryContent + ""
                      , s = t.couponContent || ""
                      , l = t.couponValue || ""
                      , u = []
                      , f = 0
                      , p = 0
                      , h = "#";
                    if (void 0 === r || "" === r || null === r)
                        return !1;
                    if (0 == r) {
                        if (!c)
                            return !1;
                        if (e.each(s.split(h), function(e, t) {
                            u.push(t || "")
                        }),
                        -1 == c.indexOf(h))
                            return !1;
                        c[0] == h && (c = c.substring(1));
                        var d = c.split(h);
                        if (d > 3 && (d = d.slice(0, 3)),
                        e.each(d, function(e, t) {
                            var i = t + "";
                            if (-1 != i.indexOf("_")) {
                                var o = i.split("_");
                                if (3 == o.length) {
                                    var r = o
                                      , c = r[0]
                                      , s = r[1];
                                    n.push({
                                        val: c,
                                        cond: s,
                                        cate: u[e] || "",
                                        tips: r[2],
                                        cls: a
                                    }),
                                    +c != +c ? c = 0 : "string" == typeof c && (c = +c),
                                    p += c
                                } else
                                    f++
                            } else
                                f++
                        }),
                        f == d.length)
                            return !1
                    } else if (1 == r) {
                        if (!c)
                            return !1;
                        if (-1 == c.indexOf("_"))
                            return !1;
                        var m = c.split("_");
                        if (3 != m.length)
                            return !1;
                        var g = m
                          , y = g[0]
                          , v = g[1];
                        n.push({
                            val: y,
                            cond: v,
                            cate: s || "",
                            tips: g[2],
                            cls: a
                        }),
                        +y != +y ? y = 0 : "string" == typeof y && (y = +y),
                        p += y
                    } else if (2 == r)
                        ;
                    else if (3 != r)
                        return !1;
                    return 0 == r || 1 == r ? {
                        name: r,
                        pack: n,
                        total: p
                    } : 2 == r ? {
                        name: r,
                        val: l,
                        tips: c,
                        cate: s,
                        cls: a
                    } : 3 == r && {
                        name: r,
                        val: l,
                        tips: c,
                        cate: s,
                        cls: a
                    }
                }
                ,
                c.checkEnv = function() {
                    var e = window.navigator.userAgent.toLowerCase()
                      , t = /MicroMessenger/i.test(e)
                      , n = -1 != e.indexOf("jdapp")
                      , i = -1 != e.indexOf("iphone")
                      , o = (e.indexOf("android"),
                    -1 != e.indexOf("MQQBrowser"))
                      , r = e.split(";");
                    this.env = n ? "jdApp" : t ? "wxApp" : "browser",
                    this.OS = i ? "iphone" : "android",
                    this.inQQ = o;
                    var a = function() {
                        return n && r[2] ? r[2].replace(/\./g, "") : ""
                    }();
                    this.jdApp520 = function() {
                        return n && a >= 520
                    }(),
                    this.jdApp560 = function() {
                        return n && a >= 560
                    }(),
                    this.jdAppClientVersion = function() {
                        return n && a >= (window.CONF.clientVersion || 560)
                    }()
                }
                ,
                c.getShareConf = function(t, n) {
                    function i(e) {
                        var t;
                        return e.replace(/{\w*}/i, function(e) {
                            t = e.substring(1, e.length - 1)
                        }),
                        e.replace(/{\w*}/gi, c.gameResultInfo && c.gameResultInfo[t] || c.getModuleIdxAndInfoAfterLogin().resultInfo || "")
                    }
                    var o = window.CONF.shareConf;
                    if ("jdApp" == c.env && c.gameResultInfo) {
                        var r = Object.prototype.toString;
                        "[object Object]" == r.call(o.random.app) ? n && "[object Array]" == r.call(o.random.app[n]) ? randomArr = o.random.app[n] : randomArr = o.random.wx : "[object Array]" == r.call(o.random.app) ? randomArr = o.random.app : randomArr = o.random.wx
                    } else
                        randomArr = o.random.wx;
                    var a = Math.floor(Math.random() * randomArr.length)
                      , s = (o.url || window.location.href).split("?")[0] + (c.id ? "?id=" + c.id : "")
                      , l = i(randomArr[a].title || "")
                      , u = i(randomArr[a].content || "")
                      , f = i(randomArr[a].timeline_title || "")
                      , p = o.longImg && c.jdAppClientVersion ? "Wxfriends,Wxmoments,QQfriends,QQzone,QRCode" : "Wxfriends,Wxmoments,QQfriends,QQzone"
                      , h = {
                        title: l,
                        img: o.img || "",
                        url: o.url || s,
                        channel: p,
                        content: u,
                        desc: u,
                        timeline_title: f
                    };
                    return o.longImg && c.jdAppClientVersion && (h.qrparam = {
                        qr_direct: o.longImg || ""
                    }),
                    t && e.extend(h, {
                        channel: "QRCode"
                    }),
                    h
                }
                ,
                c.getSubTitle = function(e, t) {
                    function n(e) {
                        var t;
                        return e.replace(/{\w*}/i, function(e) {
                            t = e.substring(1, e.length - 1)
                        }),
                        e.replace(/{\w*}/gi, c.gameResultInfo && c.gameResultInfo[t] || "")
                    }
                    if (void 0 == e || !this.subTitleArray.length)
                        return window.CONF.subTitleConf.default || "";
                    var i = e + ""
                      , o = "";
                    return t ? (o = "1" == i ? this.subTitleArray[3] : "-1" == i ? this.subTitleArray[4] : -1 != i.indexOf("1-") ? this.subTitleArray[5] : -1 != i.indexOf("3-") ? this.subTitleArray[6] : "2-1" == i ? this.subTitleArray[7] : "4-2" == i ? this.subTitleArray[8] : "4-5" == i ? this.subTitleArray[9] : -1 != i.indexOf("5-") ? this.subTitleArray[10] : -1 != i.indexOf("6-") && "6-1" != i ? this.subTitleArray[11] : "6-1" == i ? this.subTitleArray[12] : this.subTitleArray[13],
                    n(o || window.CONF.subTitleConf.default || "")) : (o = "1" == i ? this.subTitleArray[0] : "-1" == i ? this.subTitleArray[1] : "-701" == i ? this.subTitleArray[2] : window.CONF.subTitleConf.default || "",
                    n(o || window.CONF.subTitleConf.default || ""))
                }
                ,
                c.firstCharToUpperCaseAndReportData = function(e, n, i) {
                    var e = e ? e.replace(e.charAt(0), e.charAt(0).toUpperCase()) : ""
                      , o = window.CONF.trackParam
                      , r = o.activityId
                      , a = o.groupId
                      , s = o.advertIds
                      , l = s[e + n]
                      , u = [];
                    l && u.push(r, l, a, 1),
                    i && u.push(i),
                    t.reportData(c.trackPrefix + e + n, u.join("_"))
                }
                ,
                c.initShare = function() {
                    var e = {}
                      , t = c.getShareConf();
                    "jdApp" != this.env ? "wxApp" == this.env ? o.init(t) : (e.url = t.url,
                    e.img = t.img,
                    e.title = t.title,
                    e.content = t.content,
                    e.channel = "weixin",
                    this.shareObj || (this.shareObj = new a(e,c.showCopyShare))) : "undefined" == typeof XView && setTimeout(function() {
                        i && i.setShareInfo(t)
                    }, 0)
                }
                ,
                c.closeGame = function() {
                    var e = window.navigator.userAgent.toLowerCase()
                      , n = "";
                    -1 != e.indexOf("iphone") ? n = "iphone" : -1 != e.indexOf("android") && (n = "android"),
                    "android" == n ? this.jdApp520 || t.closeXView(n) : t.closeXView(n)
                }
                ,
                c.callShare = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "Share");
                    var t = window.CONF.shareConf
                      , n = game.popup.getShareKey();
                    if ("jdApp" == this.env)
                        try {
                            t.longImg && c.jdAppClientVersion ? i && i.sendDirectShare(c.getShareConf(!0)) : i && i.callSharePane(c.getShareConf(!1, n))
                        } catch (e) {}
                    else
                        "wxApp" == this.env ? c.showShareTips() : c.shareObj.callShare()
                }
                ,
                c.openWXHandle = function() {
                    try {
                        c.firstCharToUpperCaseAndReportData("", "OpenWX"),
                        window.location.href = "weixin://";
                        var e = "//weixin.qq.com/";
                        setTimeout(function() {
                            window.location.href = e
                        }, 1e3)
                    } catch (t) {
                        window.location.href = e
                    }
                }
                ,
                c.replayGame = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "RePlay"),
                    c.closePopup(),
                    c.startGame()
                }
                ,
                c.toHome = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "ReturnHome");
                    var n = "";
                    n = "iphone" == this.OS ? 'openApp.jdMobile://virtual?params={"category":"jump","des":"HomePage"}' : "openApp.jdMobile://360buy?type=1",
                    "jdApp" == this.env ? "undefined" != typeof XView ? this.closeGame() : (window.open("", "_self").close(),
                    t.delay(function() {
                        location.href = n
                    })) : t.openJdApp(n, "http://m.jd.com")
                }
                ,
                c.toLogin = function(e) {
                    c.firstCharToUpperCaseAndReportData("", "Login"),
                    r.add(this.cookiePrefix + "Gamec", "true", 0, void 0, "m.jd.com");
                    var n = window.location.href;
                    t.queryString("open") || (n = t.addParamToUrl(n, "open", !0)),
                    "undefined" != typeof XView && (n = t.addParamToUrl(n, "xview", "true")),
                    t.delay(function() {
                        t.goLogin(n)
                    })
                }
                ,
                c.toCoupon = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "MyCoupon");
                    var n = 'openApp.jdMobile://virtual?params={"category":"jump","des":"mycoupon","sourceValue":"sourceValue_test","sourceType":"sourceType_test"}';
                    e.type,
                    "jdApp" == this.env ? (void 0 !== window.XView && c.closeGame(),
                    t.delay(function() {
                        location.href = n
                    })) : (c.savePopupInfo(e),
                    t.openJdApp(n, "http://home.m.jd.com/wallet/coupons.action"))
                }
                ,
                c.toMall = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "GoUrl");
                    var n = encodeURIComponent(window.CONF.mallURL ? window.CONF.mallURL : "")
                      , i = 'openApp.jdMobile://virtual?params={"category":"jump","des":"getCoupon","action":"to","url":"' + n + '","landPageId":"mtun"}';
                    if ("jdApp" == this.env) {
                        try {
                            "undefined" != typeof XView && this.closeGame()
                        } catch (e) {}
                        t.delay(function() {
                            location.href = i
                        })
                    } else
                        c.savePopupInfo(e),
                        t.openJdApp(i, window.CONF.mallURL)
                }
                ,
                c.jump = function(e) {
                    c.firstCharToUpperCaseAndReportData(e.type, "GoUrl" + e.urlIdx);
                    var n = window.CONF.jumpUrls[e.urlIdx] || ""
                      , i = encodeURIComponent(n)
                      , o = 'openApp.jdMobile://virtual?params={"category":"jump","des":"getCoupon","action":"to","url":"' + i + '","landPageId":"mtun"}';
                    if ("jdApp" == this.env) {
                        try {
                            "undefined" != typeof XView && this.closeGame()
                        } catch (e) {}
                        t.delay(function() {
                            location.href = o
                        })
                    } else
                        c.savePopupInfo(e),
                        t.openJdApp(o, n)
                }
                ,
                c.savePopupInfo = function(e) {
                    var t = e.type
                      , n = "";
                    n = "coupon" == t ? "&type=coupon&cond=" + JSON.stringify(e.info) : "fail" == t ? "&type=fail&title=" + encodeURIComponent(e.info && e.info.title) : "entity" == t ? "&type=entity&val=" + (e.info && e.info.val) : "miss" == t ? "&type=miss&title=" + encodeURIComponent(e.conf && e.conf.subtitle) : "unstore" == t ? "&type=unstore&val=" + (e.info && e.info.val) : "&type=" + t,
                    n = "id=" + c.id + n,
                    setTimeout(function() {
                        window.history.replaceState && window.history.replaceState(null, "", "?" + n)
                    }, 0),
                    r.add(this.cookiePrefix + "gomall", "true", 0, void 0, "m.jd.com")
                }
                ,
                c.showPopupBackFromMall = function() {
                    var e = t.queryString("type");
                    if (e)
                        if ("coupon" == e)
                            c.showCoupon(JSON.parse(t.queryString("cond") || "{}"), !0);
                        else if ("fail" == e)
                            c.showFailMall(decodeURIComponent(t.queryString("title")));
                        else if ("entity" == e)
                            c.showEntity(t.queryString("val"), !0);
                        else if ("unstore" == e)
                            c.showUnstore(t.queryString("val"), !0);
                        else {
                            var n = e.replace(/^./, function(e) {
                                return e.toUpperCase()
                            });
                            c["show" + n] ? c["show" + n](!0) : game.popup[e](null, !0)
                        }
                }
                ,
                c.closePopup = function() {
                    game.popup.hide(!0)
                }
                ,
                c.showCoupon = function(e, t) {
                    void 0 == t ? game.popup.coupon({
                        pack: e.pack,
                        total: e.total,
                        info: c.gameResultInfo
                    }) : game.popup.coupon({
                        pack: e.pack,
                        total: e.total,
                        info: c.gameResultInfo
                    }, !0)
                }
                ,
                c.showNoCoupon = function(e) {
                    void 0 == e ? game.popup.noCoupon() : game.popup.noCoupon(!0)
                }
                ,
                c.showFail = function(e, t) {
                    game.popup.fail({
                        title: c.getSubTitle(e, t),
                        info: c.gameResultInfo
                    })
                }
                ,
                c.showFailMall = function(e) {
                    game.popup.fail({
                        title: e,
                        info: c.gameResultInfo
                    }, !0)
                }
                ,
                c.showLogin = function() {
                    game.popup.login()
                }
                ,
                c.showEntity = function(t, n) {
                    e.extend(t, {
                        info: c.gameResultInfo
                    }),
                    void 0 == n ? game.popup.entity(t) : game.popup.entity(t, !0)
                }
                ,
                c.showUnstore = function(t, n) {
                    e.extend(t, {
                        info: c.gameResultInfo
                    }),
                    void 0 == n ? game.popup.unstore(t) : game.popup.unstore(t, !0)
                }
                ,
                c.showShareTips = function() {
                    game.popup.shareTips()
                }
                ,
                c.showCopyShare = function() {
                    game.popup.copyShare("{project}" + c.getShareConf().title + "：", "{project}" + c.getShareConf().url, {
                        project: ""
                    })
                }
                ,
                c.showMiss = function(e) {
                    game.popup.miss({}, e)
                }
                ,
                c.showAlready = function(e) {
                    void 0 == e ? game.popup.already() : game.popup.already(!0)
                }
                ,
                c.retry = function() {
                    c.firstCharToUpperCaseAndReportData("", "NetworkAnomaly"),
                    game.popup.retry(function() {
                        c.firstCharToUpperCaseAndReportData("", "Reconnect"),
                        c.lottery(void 0, !0)
                    })
                }
                ,
                e(function() {
                    c.init()
                })
            }
            ).call(t, n(1))
        }
        , function(e, t) {
            var n = function() {
                function e(e) {
                    return null == e ? String(e) : Q[G.call(e)] || "object"
                }
                function t(t) {
                    return "function" == e(t)
                }
                function n(e) {
                    return null != e && e == e.window
                }
                function i(e) {
                    return null != e && e.nodeType == e.DOCUMENT_NODE
                }
                function o(t) {
                    return "object" == e(t)
                }
                function r(e) {
                    return o(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
                }
                function a(e) {
                    return "number" == typeof e.length
                }
                function c(e) {
                    return I.call(e, function(e) {
                        return null != e
                    })
                }
                function s(e) {
                    return e.length > 0 ? S.fn.concat.apply([], e) : e
                }
                function l(e) {
                    return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }
                function u(e) {
                    return e in P ? P[e] : P[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
                }
                function f(e, t) {
                    return "number" != typeof t || N[l(e)] ? t : t + "px"
                }
                function p(e) {
                    var t, n;
                    return E[e] || (t = O.createElement(e),
                    O.body.appendChild(t),
                    n = getComputedStyle(t, "").getPropertyValue("display"),
                    t.parentNode.removeChild(t),
                    "none" == n && (n = "block"),
                    E[e] = n),
                    E[e]
                }
                function h(e) {
                    return "children"in e ? _.call(e.children) : S.map(e.childNodes, function(e) {
                        if (1 == e.nodeType)
                            return e
                    })
                }
                function d(e, t, n) {
                    for (x in t)
                        n && (r(t[x]) || Z(t[x])) ? (r(t[x]) && !r(e[x]) && (e[x] = {}),
                        Z(t[x]) && !Z(e[x]) && (e[x] = []),
                        d(e[x], t[x], n)) : t[x] !== C && (e[x] = t[x])
                }
                function m(e, t) {
                    return null == t ? S(e) : S(e).filter(t)
                }
                function g(e, n, i, o) {
                    return t(n) ? n.call(e, i, o) : n
                }
                function y(e, t, n) {
                    null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
                }
                function v(e, t) {
                    var n = e.className || ""
                      , i = n && n.baseVal !== C;
                    return t === C ? i ? n.baseVal : n : void (i ? n.baseVal = t : e.className = t)
                }
                function w(e) {
                    try {
                        return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? S.parseJSON(e) : e) : e
                    } catch (t) {
                        return e
                    }
                }
                function b(e, t) {
                    t(e);
                    for (var n = 0, i = e.childNodes.length; n < i; n++)
                        b(e.childNodes[n], t)
                }
                var C, x, S, A, T, k, j = [], _ = j.slice, I = j.filter, O = window.document, E = {}, P = {}, N = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, R = /^\s*<(\w+|!)[^>]*>/, q = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, U = /^(?:body|html)$/i, M = /([A-Z])/g, D = ["val", "css", "html", "text", "data", "width", "height", "offset"], F = ["after", "prepend", "before", "append"], H = O.createElement("table"), W = O.createElement("tr"), B = {
                    tr: O.createElement("tbody"),
                    tbody: H,
                    thead: H,
                    tfoot: H,
                    td: W,
                    th: W,
                    "*": O.createElement("div")
                }, J = /complete|loaded|interactive/, V = /^[\w-]*$/, Q = {}, G = Q.toString, X = {}, $ = O.createElement("div"), z = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, Z = Array.isArray || function(e) {
                    return e instanceof Array
                }
                ;
                return X.matches = function(e, t) {
                    if (!t || !e || 1 !== e.nodeType)
                        return !1;
                    var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                    if (n)
                        return n.call(e, t);
                    var i, o = e.parentNode, r = !o;
                    return r && (o = $).appendChild(e),
                    i = ~X.qsa(o, t).indexOf(e),
                    r && $.removeChild(e),
                    i
                }
                ,
                T = function(e) {
                    return e.replace(/-+(.)?/g, function(e, t) {
                        return t ? t.toUpperCase() : ""
                    })
                }
                ,
                k = function(e) {
                    return I.call(e, function(t, n) {
                        return e.indexOf(t) == n
                    })
                }
                ,
                X.fragment = function(e, t, n) {
                    var i, o, a;
                    return q.test(e) && (i = S(O.createElement(RegExp.$1))),
                    i || (e.replace && (e = e.replace(L, "<$1></$2>")),
                    t === C && (t = R.test(e) && RegExp.$1),
                    t in B || (t = "*"),
                    a = B[t],
                    a.innerHTML = "" + e,
                    i = S.each(_.call(a.childNodes), function() {
                        a.removeChild(this)
                    })),
                    r(n) && (o = S(i),
                    S.each(n, function(e, t) {
                        D.indexOf(e) > -1 ? o[e](t) : o.attr(e, t)
                    })),
                    i
                }
                ,
                X.Z = function(e, t) {
                    return e = e || [],
                    e.__proto__ = S.fn,
                    e.selector = t || "",
                    e
                }
                ,
                X.isZ = function(e) {
                    return e instanceof X.Z
                }
                ,
                X.init = function(e, n) {
                    var i;
                    if (!e)
                        return X.Z();
                    if ("string" == typeof e)
                        if (e = e.trim(),
                        "<" == e[0] && R.test(e))
                            i = X.fragment(e, RegExp.$1, n),
                            e = null;
                        else {
                            if (n !== C)
                                return S(n).find(e);
                            i = X.qsa(O, e)
                        }
                    else {
                        if (t(e))
                            return S(O).ready(e);
                        if (X.isZ(e))
                            return e;
                        if (Z(e))
                            i = c(e);
                        else if (o(e))
                            i = [e],
                            e = null;
                        else if (R.test(e))
                            i = X.fragment(e.trim(), RegExp.$1, n),
                            e = null;
                        else {
                            if (n !== C)
                                return S(n).find(e);
                            i = X.qsa(O, e)
                        }
                    }
                    return X.Z(i, e)
                }
                ,
                S = function(e, t) {
                    return X.init(e, t)
                }
                ,
                S.extend = function(e) {
                    var t, n = _.call(arguments, 1);
                    return "boolean" == typeof e && (t = e,
                    e = n.shift()),
                    n.forEach(function(n) {
                        d(e, n, t)
                    }),
                    e
                }
                ,
                X.qsa = function(e, t) {
                    var n, o = "#" == t[0], r = !o && "." == t[0], a = o || r ? t.slice(1) : t, c = V.test(a);
                    return i(e) && c && o ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : _.call(c && !o ? r ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t))
                }
                ,
                S.contains = O.documentElement.contains ? function(e, t) {
                    return e !== t && e.contains(t)
                }
                : function(e, t) {
                    for (; t && (t = t.parentNode); )
                        if (t === e)
                            return !0;
                    return !1
                }
                ,
                S.type = e,
                S.isFunction = t,
                S.isWindow = n,
                S.isArray = Z,
                S.isPlainObject = r,
                S.isEmptyObject = function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                }
                ,
                S.inArray = function(e, t, n) {
                    return j.indexOf.call(t, e, n)
                }
                ,
                S.camelCase = T,
                S.trim = function(e) {
                    return null == e ? "" : String.prototype.trim.call(e)
                }
                ,
                S.uuid = 0,
                S.support = {},
                S.expr = {},
                S.map = function(e, t) {
                    var n, i, o, r = [];
                    if (a(e))
                        for (i = 0; i < e.length; i++)
                            null != (n = t(e[i], i)) && r.push(n);
                    else
                        for (o in e)
                            null != (n = t(e[o], o)) && r.push(n);
                    return s(r)
                }
                ,
                S.each = function(e, t) {
                    var n, i;
                    if (a(e)) {
                        for (n = 0; n < e.length; n++)
                            if (!1 === t.call(e[n], n, e[n]))
                                return e
                    } else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i]))
                                return e;
                    return e
                }
                ,
                S.grep = function(e, t) {
                    return I.call(e, t)
                }
                ,
                window.JSON && (S.parseJSON = JSON.parse),
                S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                    Q["[object " + t + "]"] = t.toLowerCase()
                }),
                S.fn = {
                    forEach: j.forEach,
                    reduce: j.reduce,
                    push: j.push,
                    sort: j.sort,
                    indexOf: j.indexOf,
                    concat: j.concat,
                    map: function(e) {
                        return S(S.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return S(_.apply(this, arguments))
                    },
                    ready: function(e) {
                        return J.test(O.readyState) && O.body ? e(S) : O.addEventListener("DOMContentLoaded", function() {
                            e(S)
                        }, !1),
                        this
                    },
                    get: function(e) {
                        return e === C ? _.call(this) : this[e >= 0 ? e : e + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function(e) {
                        return j.every.call(this, function(t, n) {
                            return !1 !== e.call(t, n, t)
                        }),
                        this
                    },
                    filter: function(e) {
                        return t(e) ? this.not(this.not(e)) : S(I.call(this, function(t) {
                            return X.matches(t, e)
                        }))
                    },
                    add: function(e, t) {
                        return S(k(this.concat(S(e, t))))
                    },
                    is: function(e) {
                        return this.length > 0 && X.matches(this[0], e)
                    },
                    not: function(e) {
                        var n = [];
                        if (t(e) && e.call !== C)
                            this.each(function(t) {
                                e.call(this, t) || n.push(this)
                            });
                        else {
                            var i = "string" == typeof e ? this.filter(e) : a(e) && t(e.item) ? _.call(e) : S(e);
                            this.forEach(function(e) {
                                i.indexOf(e) < 0 && n.push(e)
                            })
                        }
                        return S(n)
                    },
                    has: function(e) {
                        return this.filter(function() {
                            return o(e) ? S.contains(this, e) : S(this).find(e).size()
                        })
                    },
                    eq: function(e) {
                        return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                    },
                    first: function() {
                        var e = this[0];
                        return e && !o(e) ? e : S(e)
                    },
                    last: function() {
                        var e = this[this.length - 1];
                        return e && !o(e) ? e : S(e)
                    },
                    find: function(e) {
                        var t = this;
                        return e ? "object" == typeof e ? S(e).filter(function() {
                            var e = this;
                            return j.some.call(t, function(t) {
                                return S.contains(t, e)
                            })
                        }) : 1 == this.length ? S(X.qsa(this[0], e)) : this.map(function() {
                            return X.qsa(this, e)
                        }) : S()
                    },
                    closest: function(e, t) {
                        var n = this[0]
                          , o = !1;
                        for ("object" == typeof e && (o = S(e)); n && !(o ? o.indexOf(n) >= 0 : X.matches(n, e)); )
                            n = n !== t && !i(n) && n.parentNode;
                        return S(n)
                    },
                    parents: function(e) {
                        for (var t = [], n = this; n.length > 0; )
                            n = S.map(n, function(e) {
                                if ((e = e.parentNode) && !i(e) && t.indexOf(e) < 0)
                                    return t.push(e),
                                    e
                            });
                        return m(t, e)
                    },
                    parent: function(e) {
                        return m(k(this.pluck("parentNode")), e)
                    },
                    children: function(e) {
                        return m(this.map(function() {
                            return h(this)
                        }), e)
                    },
                    contents: function() {
                        return this.map(function() {
                            return _.call(this.childNodes)
                        })
                    },
                    siblings: function(e) {
                        return m(this.map(function(e, t) {
                            return I.call(h(t.parentNode), function(e) {
                                return e !== t
                            })
                        }), e)
                    },
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(e) {
                        return S.map(this, function(t) {
                            return t[e]
                        })
                    },
                    show: function() {
                        return this.each(function() {
                            "none" == this.style.display && (this.style.display = ""),
                            "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
                        })
                    },
                    replaceWith: function(e) {
                        return this.before(e).remove()
                    },
                    wrap: function(e) {
                        var n = t(e);
                        if (this[0] && !n)
                            var i = S(e).get(0)
                              , o = i.parentNode || this.length > 1;
                        return this.each(function(t) {
                            S(this).wrapAll(n ? e.call(this, t) : o ? i.cloneNode(!0) : i)
                        })
                    },
                    wrapAll: function(e) {
                        if (this[0]) {
                            S(this[0]).before(e = S(e));
                            for (var t; (t = e.children()).length; )
                                e = t.first();
                            S(e).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        var n = t(e);
                        return this.each(function(t) {
                            var i = S(this)
                              , o = i.contents()
                              , r = n ? e.call(this, t) : e;
                            o.length ? o.wrapAll(r) : i.append(r)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            S(this).replaceWith(S(this).children())
                        }),
                        this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(e) {
                        return this.each(function() {
                            var t = S(this);
                            (e === C ? "none" == t.css("display") : e) ? t.show() : t.hide()
                        })
                    },
                    prev: function(e) {
                        return S(this.pluck("previousElementSibling")).filter(e || "*")
                    },
                    next: function(e) {
                        return S(this.pluck("nextElementSibling")).filter(e || "*")
                    },
                    html: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var n = this.innerHTML;
                            S(this).empty().append(g(this, e, t, n))
                        }) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var n = g(this, e, t, this.textContent);
                            this.textContent = null == n ? "" : "" + n
                        }) : 0 in this ? this[0].textContent : null
                    },
                    attr: function(e, t) {
                        var n;
                        return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                            if (1 === this.nodeType)
                                if (o(e))
                                    for (x in e)
                                        y(this, x, e[x]);
                                else
                                    y(this, e, g(this, t, n, this.getAttribute(e)))
                        }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : C
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            1 === this.nodeType && e.split(" ").forEach(function(e) {
                                y(this, e)
                            }, this)
                        })
                    },
                    prop: function(e, t) {
                        return e = z[e] || e,
                        1 in arguments ? this.each(function(n) {
                            this[e] = g(this, t, n, this[e])
                        }) : this[0] && this[0][e]
                    },
                    data: function(e, t) {
                        var n = "data-" + e.replace(M, "-$1").toLowerCase()
                          , i = 1 in arguments ? this.attr(n, t) : this.attr(n);
                        return null !== i ? w(i) : C
                    },
                    val: function(e) {
                        return 0 in arguments ? this.each(function(t) {
                            this.value = g(this, e, t, this.value)
                        }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function() {
                            return this.selected
                        }).pluck("value") : this[0].value)
                    },
                    offset: function(e) {
                        if (e)
                            return this.each(function(t) {
                                var n = S(this)
                                  , i = g(this, e, t, n.offset())
                                  , o = n.offsetParent().offset()
                                  , r = {
                                    top: i.top - o.top,
                                    left: i.left - o.left
                                };
                                "static" == n.css("position") && (r.position = "relative"),
                                n.css(r)
                            });
                        if (!this.length)
                            return null;
                        var t = this[0].getBoundingClientRect();
                        return {
                            left: t.left + window.pageXOffset,
                            top: t.top + window.pageYOffset,
                            width: Math.round(t.width),
                            height: Math.round(t.height)
                        }
                    },
                    css: function(t, n) {
                        if (arguments.length < 2) {
                            var i, o = this[0];
                            if (!o)
                                return;
                            if (i = getComputedStyle(o, ""),
                            "string" == typeof t)
                                return o.style[T(t)] || i.getPropertyValue(t);
                            if (Z(t)) {
                                var r = {};
                                return S.each(t, function(e, t) {
                                    r[t] = o.style[T(t)] || i.getPropertyValue(t)
                                }),
                                r
                            }
                        }
                        var a = "";
                        if ("string" == e(t))
                            n || 0 === n ? a = l(t) + ":" + f(t, n) : this.each(function() {
                                this.style.removeProperty(l(t))
                            });
                        else
                            for (x in t)
                                t[x] || 0 === t[x] ? a += l(x) + ":" + f(x, t[x]) + ";" : this.each(function() {
                                    this.style.removeProperty(l(x))
                                });
                        return this.each(function() {
                            this.style.cssText += ";" + a
                        })
                    },
                    index: function(e) {
                        return e ? this.indexOf(S(e)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(e) {
                        return !!e && j.some.call(this, function(e) {
                            return this.test(v(e))
                        }, u(e))
                    },
                    addClass: function(e) {
                        return e ? this.each(function(t) {
                            if ("className"in this) {
                                A = [];
                                var n = v(this);
                                g(this, e, t, n).split(/\s+/g).forEach(function(e) {
                                    S(this).hasClass(e) || A.push(e)
                                }, this),
                                A.length && v(this, n + (n ? " " : "") + A.join(" "))
                            }
                        }) : this
                    },
                    removeClass: function(e) {
                        return this.each(function(t) {
                            if ("className"in this) {
                                if (e === C)
                                    return v(this, "");
                                A = v(this),
                                g(this, e, t, A).split(/\s+/g).forEach(function(e) {
                                    A = A.replace(u(e), " ")
                                }),
                                v(this, A.trim())
                            }
                        })
                    },
                    toggleClass: function(e, t) {
                        return e ? this.each(function(n) {
                            var i = S(this);
                            g(this, e, n, v(this)).split(/\s+/g).forEach(function(e) {
                                (t === C ? !i.hasClass(e) : t) ? i.addClass(e) : i.removeClass(e)
                            })
                        }) : this
                    },
                    scrollTop: function(e) {
                        if (this.length) {
                            var t = "scrollTop"in this[0];
                            return e === C ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                                this.scrollTop = e
                            }
                            : function() {
                                this.scrollTo(this.scrollX, e)
                            }
                            )
                        }
                    },
                    scrollLeft: function(e) {
                        if (this.length) {
                            var t = "scrollLeft"in this[0];
                            return e === C ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                                this.scrollLeft = e
                            }
                            : function() {
                                this.scrollTo(e, this.scrollY)
                            }
                            )
                        }
                    },
                    position: function() {
                        if (this.length) {
                            var e = this[0]
                              , t = this.offsetParent()
                              , n = this.offset()
                              , i = U.test(t[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : t.offset();
                            return n.top -= parseFloat(S(e).css("margin-top")) || 0,
                            n.left -= parseFloat(S(e).css("margin-left")) || 0,
                            i.top += parseFloat(S(t[0]).css("border-top-width")) || 0,
                            i.left += parseFloat(S(t[0]).css("border-left-width")) || 0,
                            {
                                top: n.top - i.top,
                                left: n.left - i.left
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent || O.body; e && !U.test(e.nodeName) && "static" == S(e).css("position"); )
                                e = e.offsetParent;
                            return e
                        })
                    }
                },
                S.fn.detach = S.fn.remove,
                ["width", "height"].forEach(function(e) {
                    var t = e.replace(/./, function(e) {
                        return e[0].toUpperCase()
                    });
                    S.fn[e] = function(o) {
                        var r, a = this[0];
                        return o === C ? n(a) ? a["inner" + t] : i(a) ? a.documentElement["scroll" + t] : (r = this.offset()) && r[e] : this.each(function(t) {
                            a = S(this),
                            a.css(e, g(this, o, t, a[e]()))
                        })
                    }
                }),
                F.forEach(function(t, n) {
                    var i = n % 2;
                    S.fn[t] = function() {
                        var t, o, r = S.map(arguments, function(n) {
                            return t = e(n),
                            "object" == t || "array" == t || null == n ? n : X.fragment(n)
                        }), a = this.length > 1;
                        return r.length < 1 ? this : this.each(function(e, t) {
                            o = i ? t : t.parentNode,
                            t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                            var c = S.contains(O.documentElement, o);
                            r.forEach(function(e) {
                                if (a)
                                    e = e.cloneNode(!0);
                                else if (!o)
                                    return S(e).remove();
                                o.insertBefore(e, t),
                                c && b(e, function(e) {
                                    null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                                })
                            })
                        })
                    }
                    ,
                    S.fn[i ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                        return S(e)[t](this),
                        this
                    }
                }),
                X.Z.prototype = S.fn,
                X.uniq = k,
                X.deserializeValue = w,
                S.zepto = X,
                S
            }();
            window.Zepto = n,
            void 0 === window.$ && (window.$ = n),
            function(e) {
                function t(e) {
                    return e._zid || (e._zid = p++)
                }
                function n(e, n, r, a) {
                    if (n = i(n),
                    n.ns)
                        var c = o(n.ns);
                    return (g[t(e)] || []).filter(function(e) {
                        return e && (!n.e || e.e == n.e) && (!n.ns || c.test(e.ns)) && (!r || t(e.fn) === t(r)) && (!a || e.sel == a)
                    })
                }
                function i(e) {
                    var t = ("" + e).split(".");
                    return {
                        e: t[0],
                        ns: t.slice(1).sort().join(" ")
                    }
                }
                function o(e) {
                    return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
                }
                function r(e, t) {
                    return e.del && !v && e.e in w || !!t
                }
                function a(e) {
                    return b[e] || v && w[e] || e
                }
                function c(n, o, c, s, u, p, h) {
                    var d = t(n)
                      , m = g[d] || (g[d] = []);
                    o.split(/\s/).forEach(function(t) {
                        if ("ready" == t)
                            return e(document).ready(c);
                        var o = i(t);
                        o.fn = c,
                        o.sel = u,
                        o.e in b && (c = function(t) {
                            var n = t.relatedTarget;
                            if (!n || n !== this && !e.contains(this, n))
                                return o.fn.apply(this, arguments)
                        }
                        ),
                        o.del = p;
                        var d = p || c;
                        o.proxy = function(e) {
                            if (e = l(e),
                            !e.isImmediatePropagationStopped()) {
                                e.data = s;
                                var t = d.apply(n, e._args == f ? [e] : [e].concat(e._args));
                                return !1 === t && (e.preventDefault(),
                                e.stopPropagation()),
                                t
                            }
                        }
                        ,
                        o.i = m.length,
                        m.push(o),
                        "addEventListener"in n && n.addEventListener(a(o.e), o.proxy, r(o, h))
                    })
                }
                function s(e, i, o, c, s) {
                    var l = t(e);
                    (i || "").split(/\s/).forEach(function(t) {
                        n(e, t, o, c).forEach(function(t) {
                            delete g[l][t.i],
                            "removeEventListener"in e && e.removeEventListener(a(t.e), t.proxy, r(t, s))
                        })
                    })
                }
                function l(t, n) {
                    return !n && t.isDefaultPrevented || (n || (n = t),
                    e.each(A, function(e, i) {
                        var o = n[e];
                        t[e] = function() {
                            return this[i] = C,
                            o && o.apply(n, arguments)
                        }
                        ,
                        t[i] = x
                    }),
                    (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue"in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = C)),
                    t
                }
                function u(e) {
                    var t, n = {
                        originalEvent: e
                    };
                    for (t in e)
                        S.test(t) || e[t] === f || (n[t] = e[t]);
                    return l(n, e)
                }
                var f, p = 1, h = Array.prototype.slice, d = e.isFunction, m = function(e) {
                    return "string" == typeof e
                }, g = {}, y = {}, v = "onfocusin"in window, w = {
                    focus: "focusin",
                    blur: "focusout"
                }, b = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
                y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents",
                e.event = {
                    add: c,
                    remove: s
                },
                e.proxy = function(n, i) {
                    var o = 2 in arguments && h.call(arguments, 2);
                    if (d(n)) {
                        var r = function() {
                            return n.apply(i, o ? o.concat(h.call(arguments)) : arguments)
                        };
                        return r._zid = t(n),
                        r
                    }
                    if (m(i))
                        return o ? (o.unshift(n[i], n),
                        e.proxy.apply(null, o)) : e.proxy(n[i], n);
                    throw new TypeError("expected function")
                }
                ,
                e.fn.bind = function(e, t, n) {
                    return this.on(e, t, n)
                }
                ,
                e.fn.unbind = function(e, t) {
                    return this.off(e, t)
                }
                ,
                e.fn.one = function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                }
                ;
                var C = function() {
                    return !0
                }
                  , x = function() {
                    return !1
                }
                  , S = /^([A-Z]|returnValue$|layer[XY]$)/
                  , A = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
                e.fn.delegate = function(e, t, n) {
                    return this.on(t, e, n)
                }
                ,
                e.fn.undelegate = function(e, t, n) {
                    return this.off(t, e, n)
                }
                ,
                e.fn.live = function(t, n) {
                    return e(document.body).delegate(this.selector, t, n),
                    this
                }
                ,
                e.fn.die = function(t, n) {
                    return e(document.body).undelegate(this.selector, t, n),
                    this
                }
                ,
                e.fn.on = function(t, n, i, o, r) {
                    var a, l, p = this;
                    return t && !m(t) ? (e.each(t, function(e, t) {
                        p.on(e, n, i, t, r)
                    }),
                    p) : (m(n) || d(o) || !1 === o || (o = i,
                    i = n,
                    n = f),
                    (d(i) || !1 === i) && (o = i,
                    i = f),
                    !1 === o && (o = x),
                    p.each(function(f, p) {
                        r && (a = function(e) {
                            return s(p, e.type, o),
                            o.apply(this, arguments)
                        }
                        ),
                        n && (l = function(t) {
                            var i, r = e(t.target).closest(n, p).get(0);
                            if (r && r !== p)
                                return i = e.extend(u(t), {
                                    currentTarget: r,
                                    liveFired: p
                                }),
                                (a || o).apply(r, [i].concat(h.call(arguments, 1)))
                        }
                        ),
                        c(p, t, o, i, n, l || a)
                    }))
                }
                ,
                e.fn.off = function(t, n, i) {
                    var o = this;
                    return t && !m(t) ? (e.each(t, function(e, t) {
                        o.off(e, n, t)
                    }),
                    o) : (m(n) || d(i) || !1 === i || (i = n,
                    n = f),
                    !1 === i && (i = x),
                    o.each(function() {
                        s(this, t, i, n)
                    }))
                }
                ,
                e.fn.trigger = function(t, n) {
                    return t = m(t) || e.isPlainObject(t) ? e.Event(t) : l(t),
                    t._args = n,
                    this.each(function() {
                        t.type in w && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent"in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                    })
                }
                ,
                e.fn.triggerHandler = function(t, i) {
                    var o, r;
                    return this.each(function(a, c) {
                        o = u(m(t) ? e.Event(t) : t),
                        o._args = i,
                        o.target = c,
                        e.each(n(c, t.type || t), function(e, t) {
                            if (r = t.proxy(o),
                            o.isImmediatePropagationStopped())
                                return !1
                        })
                    }),
                    r
                }
                ,
                "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                    e.fn[t] = function(e) {
                        return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                    }
                }),
                e.Event = function(e, t) {
                    m(e) || (t = e,
                    e = t.type);
                    var n = document.createEvent(y[e] || "Events")
                      , i = !0;
                    if (t)
                        for (var o in t)
                            "bubbles" == o ? i = !!t[o] : n[o] = t[o];
                    return n.initEvent(e, i, !0),
                    l(n)
                }
            }(n),
            function(e) {
                function t(t, n, i) {
                    var o = e.Event(n);
                    return e(t).trigger(o, i),
                    !o.isDefaultPrevented()
                }
                function n(e, n, i, o) {
                    if (e.global)
                        return t(n || v, i, o)
                }
                function i(t) {
                    t.global && 0 == e.active++ && n(t, null, "ajaxStart")
                }
                function o(t) {
                    t.global && !--e.active && n(t, null, "ajaxStop")
                }
                function r(e, t) {
                    var i = t.context;
                    return !1 !== t.beforeSend.call(i, e, t) && !1 !== n(t, i, "ajaxBeforeSend", [e, t]) && void n(t, i, "ajaxSend", [e, t])
                }
                function a(e, t, i, o) {
                    var r = i.context
                      , a = "success";
                    i.success.call(r, e, a, t),
                    o && o.resolveWith(r, [e, a, t]),
                    n(i, r, "ajaxSuccess", [t, i, e]),
                    s(a, t, i)
                }
                function c(e, t, i, o, r) {
                    var a = o.context;
                    o.error.call(a, i, t, e),
                    r && r.rejectWith(a, [i, t, e]),
                    n(o, a, "ajaxError", [i, o, e || t]),
                    s(t, i, o)
                }
                function s(e, t, i) {
                    var r = i.context;
                    i.complete.call(r, t, e),
                    n(i, r, "ajaxComplete", [t, i]),
                    o(i)
                }
                function l() {}
                function u(e) {
                    return e && (e = e.split(";", 2)[0]),
                    e && (e == S ? "html" : e == x ? "json" : b.test(e) ? "script" : C.test(e) && "xml") || "text"
                }
                function f(e, t) {
                    return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
                }
                function p(t) {
                    t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)),
                    !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = f(t.url, t.data),
                    t.data = void 0)
                }
                function h(t, n, i, o) {
                    return e.isFunction(n) && (o = i,
                    i = n,
                    n = void 0),
                    e.isFunction(i) || (o = i,
                    i = void 0),
                    {
                        url: t,
                        data: n,
                        success: i,
                        dataType: o
                    }
                }
                function d(t, n, i, o) {
                    var r, a = e.isArray(n), c = e.isPlainObject(n);
                    e.each(n, function(n, s) {
                        r = e.type(s),
                        o && (n = i ? o : o + "[" + (c || "object" == r || "array" == r ? n : "") + "]"),
                        !o && a ? t.add(s.name, s.value) : "array" == r || !i && "object" == r ? d(t, s, i, n) : t.add(n, s)
                    })
                }
                var m, g, y = 0, v = window.document, w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, b = /^(?:text|application)\/javascript/i, C = /^(?:text|application)\/xml/i, x = "application/json", S = "text/html", A = /^\s*$/, T = v.createElement("a");
                T.href = window.location.href,
                e.active = 0,
                e.ajaxJSONP = function(t, n) {
                    if (!("type"in t))
                        return e.ajax(t);
                    var i, o, s = t.jsonpCallback, l = (e.isFunction(s) ? s() : s) || "jsonp" + ++y, u = v.createElement("script"), f = window[l], p = function(t) {
                        e(u).triggerHandler("error", t || "abort")
                    }, h = {
                        abort: p
                    };
                    return n && n.promise(h),
                    e(u).on("load error", function(r, s) {
                        clearTimeout(o),
                        e(u).off().remove(),
                        "error" != r.type && i ? a(i[0], h, t, n) : c(null, s || "error", h, t, n),
                        window[l] = f,
                        i && e.isFunction(f) && f(i[0]),
                        f = i = void 0
                    }),
                    !1 === r(h, t) ? (p("abort"),
                    h) : (window[l] = function() {
                        i = arguments
                    }
                    ,
                    u.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l),
                    v.head.appendChild(u),
                    t.timeout > 0 && (o = setTimeout(function() {
                        p("timeout")
                    }, t.timeout)),
                    h)
                }
                ,
                e.ajaxSettings = {
                    type: "GET",
                    beforeSend: l,
                    success: l,
                    error: l,
                    complete: l,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new window.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: x,
                        xml: "application/xml, text/xml",
                        html: S,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0
                },
                e.ajax = function(t) {
                    var n, o = e.extend({}, t || {}), s = e.Deferred && e.Deferred();
                    for (m in e.ajaxSettings)
                        void 0 === o[m] && (o[m] = e.ajaxSettings[m]);
                    i(o),
                    o.crossDomain || (n = v.createElement("a"),
                    n.href = o.url,
                    n.href = n.href,
                    o.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host),
                    o.url || (o.url = window.location.toString()),
                    p(o);
                    var h = o.dataType
                      , d = /\?.+=\?/.test(o.url);
                    if (d && (h = "jsonp"),
                    !1 !== o.cache && (t && !0 === t.cache || "script" != h && "jsonp" != h) || (o.url = f(o.url, "_=" + Date.now())),
                    "jsonp" == h)
                        return d || (o.url = f(o.url, o.jsonp ? o.jsonp + "=?" : !1 === o.jsonp ? "" : "callback=?")),
                        e.ajaxJSONP(o, s);
                    var y, w = o.accepts[h], b = {}, C = function(e, t) {
                        b[e.toLowerCase()] = [e, t]
                    }, x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol, S = o.xhr(), k = S.setRequestHeader;
                    if (s && s.promise(S),
                    o.crossDomain || C("X-Requested-With", "XMLHttpRequest"),
                    C("Accept", w || "*/*"),
                    (w = o.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]),
                    S.overrideMimeType && S.overrideMimeType(w)),
                    (o.contentType || !1 !== o.contentType && o.data && "GET" != o.type.toUpperCase()) && C("Content-Type", o.contentType || "application/x-www-form-urlencoded"),
                    o.headers)
                        for (g in o.headers)
                            C(g, o.headers[g]);
                    if (S.setRequestHeader = C,
                    S.onreadystatechange = function() {
                        if (4 == S.readyState) {
                            S.onreadystatechange = l,
                            clearTimeout(y);
                            var t, n = !1;
                            if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
                                h = h || u(o.mimeType || S.getResponseHeader("content-type")),
                                t = S.responseText;
                                try {
                                    "script" == h ? (0,
                                    eval)(t) : "xml" == h ? t = S.responseXML : "json" == h && (t = A.test(t) ? null : e.parseJSON(t))
                                } catch (e) {
                                    n = e
                                }
                                n ? c(n, "parsererror", S, o, s) : a(t, S, o, s)
                            } else
                                c(S.statusText || null, S.status ? "error" : "abort", S, o, s)
                        }
                    }
                    ,
                    !1 === r(S, o))
                        return S.abort(),
                        c(null, "abort", S, o, s),
                        S;
                    if (o.xhrFields)
                        for (g in o.xhrFields)
                            S[g] = o.xhrFields[g];
                    var j = !("async"in o) || o.async;
                    S.open(o.type, o.url, j, o.username, o.password);
                    for (g in b)
                        k.apply(S, b[g]);
                    return o.timeout > 0 && (y = setTimeout(function() {
                        S.onreadystatechange = l,
                        S.abort(),
                        c(null, "timeout", S, o, s)
                    }, o.timeout)),
                    S.send(o.data ? o.data : null),
                    S
                }
                ,
                e.get = function() {
                    return e.ajax(h.apply(null, arguments))
                }
                ,
                e.post = function() {
                    var t = h.apply(null, arguments);
                    return t.type = "POST",
                    e.ajax(t)
                }
                ,
                e.getJSON = function() {
                    var t = h.apply(null, arguments);
                    return t.dataType = "json",
                    e.ajax(t)
                }
                ,
                e.fn.load = function(t, n, i) {
                    if (!this.length)
                        return this;
                    var o, r = this, a = t.split(/\s/), c = h(t, n, i), s = c.success;
                    return a.length > 1 && (c.url = a[0],
                    o = a[1]),
                    c.success = function(t) {
                        r.html(o ? e("<div>").html(t.replace(w, "")).find(o) : t),
                        s && s.apply(r, arguments)
                    }
                    ,
                    e.ajax(c),
                    this
                }
                ;
                var k = encodeURIComponent;
                e.param = function(t, n) {
                    var i = [];
                    return i.add = function(t, n) {
                        e.isFunction(n) && (n = n()),
                        null == n && (n = ""),
                        this.push(k(t) + "=" + k(n))
                    }
                    ,
                    d(i, t, n),
                    i.join("&").replace(/%20/g, "+")
                }
            }(n),
            function(e) {
                e.fn.serializeArray = function() {
                    var t, n, i = [], o = function(e) {
                        return e.forEach ? e.forEach(o) : void i.push({
                            name: t,
                            value: e
                        })
                    };
                    return this[0] && e.each(this[0].elements, function(i, r) {
                        n = r.type,
                        (t = r.name) && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || r.checked) && o(e(r).val())
                    }),
                    i
                }
                ,
                e.fn.serialize = function() {
                    var e = [];
                    return this.serializeArray().forEach(function(t) {
                        e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
                    }),
                    e.join("&")
                }
                ,
                e.fn.submit = function(t) {
                    if (0 in arguments)
                        this.bind("submit", t);
                    else if (this.length) {
                        var n = e.Event("submit");
                        this.eq(0).trigger(n),
                        n.isDefaultPrevented() || this.get(0).submit()
                    }
                    return this
                }
            }(n),
            function(e) {
                "__proto__"in {} || e.extend(e.zepto, {
                    Z: function(t, n) {
                        return t = t || [],
                        e.extend(t, e.fn),
                        t.selector = n || "",
                        t.__Z = !0,
                        t
                    },
                    isZ: function(t) {
                        return "array" === e.type(t) && "__Z"in t
                    }
                });
                try {
                    getComputedStyle(void 0)
                } catch (e) {
                    var t = getComputedStyle;
                    window.getComputedStyle = function(e) {
                        try {
                            return t(e)
                        } catch (e) {
                            return null
                        }
                    }
                }
            }(n),
            e.exports = n
        }
        , function(e, t) {
            e.exports = {
                goLogin: function(e) {
                    window.location.href = "http://www.wushang.com/mobileApp/jump.jsx?htmlName=h5game/information&pageId=1101qd"
                    //抽奖
                },
                delay: function(e, t) {
                    return setTimeout(function() {
                        e()
                    }, "number" == typeof t && t || 80)
                },
                reportData: function(e, t, n) {
                    try {
                        var i = e || ""
                          , o = new MPing.inputs.Click(i);
                        t && (o.event_param = t),
                        n && (o.event_level = n),
                        o.updateEventSeries(),
                        (new MPing).send(o)
                    } catch (e) {}
                },
                addParamToUrl: function(e, t, n) {
                    var i = e.split("#")[0];
                    return /\?/g.test(i) ? /name=[-\w]{4,25}/g.test(i) ? i = i.replace(/name=[-\w]{4,25}/g, t + "=" + n) : i += "&" + t + "=" + n : i += "?" + t + "=" + n,
                    window.location.href.split("#")[1] ? i + "#" + window.location.href.split("#")[1] : i
                },
                queryString: function(e) {
                    var t = new RegExp("[\\?&]" + e + "=([^&#]*)","i").exec(window.location.href);
                    return t && decodeURIComponent(t[1]) || ""
                },
                closeXView: function(e) {
                    if ("android" == e)
                        setTimeout(function() {
                            window.XView && window.XView.close()
                        }, 200);
                    else {
                        if ("iphone" != e)
                            return;
                        setTimeout(function() {
                            location.href = 'openapp.jdmobile://communication?params={"action":"sh_xview_close"}'
                        }, 200)
                    }
                },
                openJdApp: function(e, t) {
                    var n = e
                      , i = t;
                    if (-1 != navigator.userAgent.toLowerCase().indexOf("jdapp"))
                        location.href = e;
                    else {
                        var o = document.createElement("div");
                        o.style.visibility = "hidden",
                        o.innerHTML = "<iframe src=" + n + ' scrolling="no" width="1" height="1"></iframe>',
                        document.body.appendChild(o),
                        setTimeout(function() {
                            location = i
                        }, 1200)
                    }
                },
                reportPV: function() {
                    try {
                        (new MPing).send(new MPing.inputs.PV)
                    } catch (e) {}
                }
            }
        }
        , function(e, t, n) {
            var i;
            !function(o, r) {
                void 0 !== (i = function() {
                    return r(o)
                }
                .call(t, n, t, e)) && (e.exports = i)
            }("undefined" != typeof window ? window : this, function(e) {
                "use strict";
                function t(e) {
                    return 'openapp.jdmobile://communication?params={"des":"share","type":"111","title":"' + e.title + '","content":"' + e.content + '","shareUrl":"' + e.url + '","iconUrl":"' + e.img + '","shareActionType":"' + e.shareActionType + '","channel":"' + e.channel + '","timeline_title":"' + e.timeline_title + '","qrparam":"' + e.qrparam + '","callback":"' + e.callbackSwitcher + '","clickcallback":"' + e.clickcallbackSwitcher + '"}'
                }
                function n(e) {
                    shareHelper.initShare(JSON.stringify({
                        title: e.title,
                        content: e.content,
                        shareUrl: decodeURIComponent(e.url),
                        iconUrl: decodeURIComponent(e.img),
                        shareActionType: e.shareActionType,
                        channel: e.channel,
                        timeline_title: e.timeline_title,
                        qrparam: e.qrparam,
                        callback: e.callbackSwitcher,
                        clickcallback: e.clickcallbackSwitcher,
                        eventId: ""
                    }))
                }
                function i(e, t) {
                    shareHelper[e](t.title, t.content, decodeURIComponent(t.url), decodeURIComponent(t.img), t.callbackSwitcher)
                }
                function o(e, t) {
                    shareHelper[e](t.title, t.content, decodeURIComponent(t.url), decodeURIComponent(t.img))
                }
                function r(e, t) {
                    return 'openapp.jdmobile://communication?params={"action":"' + t + '","title":"' + e.title + '","content":"' + e.content + '","shareUrl":"' + e.url + '","iconUrl":"' + e.img + '","isCallBack":"' + e.callbackSwitcher + '"}'
                }
                function a(e) {
                    var t = {
                        category: "jump",
                        des: "share",
                        type: "111",
                        title: e.title,
                        content: e.content,
                        shareUrl: e.url,
                        imageUrl: e.img,
                        iconUrl: e.img,
                        timeline_title: e.timeline_title,
                        qrparam: e.qrparam,
                        channel: e.channel,
                        isCallBack: e.callbackSwitcher,
                        clickcallback: e.clickcallbackSwitcher,
                        shareActionType: e.shareActionType
                    };
                    return j + "virtual?params=" + JSON.stringify(t)
                }
                function c(e) {
                    if (!(this instanceof c))
                        return new c(e)
                }
                function s(e) {
                    this.message = e,
                    this.name = "JdShareException",
                    this.toString = function() {
                        return this.name + ": " + this.message
                    }
                }
                function l(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && void 0 !== t[n] && (e[n] = t[n])
                }
                function u(e, t) {
                    return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
                }
                function f(t) {
                    e.jdappShareRes = function(e) {
                        e.hasOwnProperty("shareResult") ? t.callback && t.callback(e) : t.clickcallback && t.clickcallback(e)
                    }
                }
                function p(e) {
                    var t = {
                        Wxfriends: "WeChat_Friend",
                        Wxmoments: "WeChat_FriendTimeline",
                        Sinaweibo: "Weibo",
                        QQfriends: "QQFriend_SHARE_CLIENT",
                        QQzone: "QQZone_SHARE_CLIENT",
                        Moreshare: ""
                    }
                      , n = "";
                    if (e) {
                        if (C) {
                            if (T) {
                                if (n = t[e])
                                    return n;
                                throw new s("输入的channel参数在iphone版本中不存在")
                            }
                            return e
                        }
                        return e
                    }
                    return e
                }
                function h(e) {
                    return void 0 !== e.title && void 0 !== e.content && void 0 !== e.url && void 0 !== e.img
                }
                function d(e) {
                    if (h(e)) {
                        try {
                            var t, n, i, o, r = {
                                timeline_title: "",
                                channel: "",
                                qrparam: null,
                                callback: null,
                                clickcallback: null
                            };
                            "[object Object]" === Object.prototype.toString.call(e) && l(r, e),
                            t = "function" == typeof r.callback,
                            i = "function" == typeof r.clickcallback,
                            n = t ? _.WITH_CALLBACK : _.WITHOUT_CALLBACK,
                            o = i ? _.WITH_CALLBACK : _.WITHOUT_CALLBACK,
                            t && i ? f({
                                callback: r.callback,
                                clickcallback: r.clickcallback
                            }) : t ? f({
                                callback: r.callback
                            }) : i && f({
                                clickcallback: r.clickcallback
                            }),
                            "[object Object]" === Object.prototype.toString.call(r.qrparam) && (r.qrparam.top_pic = r.qrparam.top_pic ? encodeURIComponent(decodeURIComponent(r.qrparam.top_pic)) : "",
                            r.qrparam.mid_pic = r.qrparam.mid_pic ? encodeURIComponent(decodeURIComponent(r.qrparam.mid_pic)) : "",
                            r.qrparam.qr_direct = r.qrparam.qr_direct ? encodeURIComponent(decodeURIComponent(r.qrparam.qr_direct)) : ""),
                            r.callbackSwitcher = n,
                            r.clickcallbackSwitcher = o,
                            r.url = u(r.url, "_ts=" + (new Date).getTime()),
                            r.channel = p(r.channel),
                            r.url = encodeURIComponent(r.url),
                            r.img = encodeURIComponent(r.img)
                        } catch (e) {
                            throw e
                        }
                        return r
                    }
                    throw new s("调用方法时传入配置对象格式错误，请查看文档")
                }
                var m, g = navigator.userAgent.toLowerCase(), y = g.split(";"), v = -1 != g.indexOf("jdapp"), w = function() {
                    if (v && y[2])
                        try {
                            return parseInt(y[2].replace(/\./g, ""))
                        } catch (e) {}
                }(), b = "android" === y[1], C = "iphone" === y[1], x = b || C, S = -1 != g.indexOf("ipad"), A = (/MicroMessenger/i.test(g),
                x && v && w >= 500), T = x && v && w >= 440 && w < 500, k = S && v && w >= 360, j = function() {
                    return x ? "openapp.jdmobile://" : S ? "openapp.jdipad://" : void 0
                }(), _ = {
                    WITH_CALLBACK: "Y",
                    WITHOUT_CALLBACK: "N",
                    SHARE_ACTION_SET: "S",
                    SHARE_ACTION_PANE: "P",
                    SHARE_ACTION_OPEN: "O"
                };
                return s.prototype = Object.create(Error.prototype),
                s.prototype.constructor = s,
                c.prototype.setShareInfo = function(c) {
                    try {
                        var s = null;
                        if (v)
                            if (s = d(c),
                            s.shareActionType = _.SHARE_ACTION_SET,
                            b)
                                if (e.shareHelper)
                                    if ("function" == typeof shareHelper.initShare)
                                        n(s);
                                    else if ("function" == typeof shareHelper.setShareInfoCallback)
                                        if (s.callbackSwitcher === _.WITH_CALLBACK)
                                            try {
                                                i("setShareInfoCallback", s)
                                            } catch (e) {
                                                o("setShareInfoCallback", s)
                                            }
                                        else
                                            try {
                                                i("setShareInfoCallback", s)
                                            } catch (e) {
                                                "function" == typeof shareHelper.setShareInfo && o("setShareInfo", s)
                                            }
                                    else
                                        "function" == typeof shareHelper.setShareInfo && o("setShareInfo", s);
                                else
                                    e.location.href = t(s);
                            else
                                (C || S) && (A || k ? location.href = a(s) : C && (location.href = r(s, "syncShareData")))
                    } catch (e) {
                        throw e
                    }
                }
                ,
                c.prototype.callSharePane = function(o) {
                    try {
                        var c = null;
                        c = d(o),
                        c.shareActionType = _.SHARE_ACTION_PANE,
                        b ? v && e.shareHelper ? "function" == typeof shareHelper.initShare ? n(c) : "function" == typeof shareHelper.callShare ? i("callShare", c) : e.location.href = t(c) : e.location.href = t(c) : (C || S) && (A || k ? location.href = a(c) : C && (location.href = r(c, "share")))
                    } catch (e) {
                        throw e
                    }
                }
                ,
                c.prototype.sendDirectShare = function(i) {
                    try {
                        var o, r = null;
                        if (r = d(i),
                        r.shareActionType = _.SHARE_ACTION_OPEN,
                        b)
                            v && e.shareHelper ? "function" == typeof shareHelper.initShare ? n(r) : "function" == typeof shareHelper.sendShare ? shareHelper.sendShare(r.title, r.content, decodeURIComponent(r.url), decodeURIComponent(r.img), r.channel, r.callbackSwitcher) : location.href = t(r) : e.location.href = t(r);
                        else if (C || S) {
                            if (!r.channel)
                                throw new s("分享渠道未设置");
                            A || k ? location.href = a(r) : C && (o = 'openapp.jdmobile://virtual?params={"category":"jump","des":"share","type":"111","title":"' + r.title + '","content":"' + r.content + '","shareUrl":"' + r.url + '","imageUrl":"' + r.img + '","channel":"' + r.channel + '","isCallBack":"' + r.callbackSwitcher + '"}',
                            location.href = o)
                        }
                    } catch (e) {
                        throw e
                    }
                }
                ,
                m || (m = c()),
                m
            })
        }
        , function(e, t, n) {
            var i, o;
            !function(r, a) {
                if ("object" == typeof t && t)
                    a(t);
                else {
                    var c = {};
                    a(c),
                    i = c,
                    void 0 !== (o = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = o)
                }
            }(0, function(e) {
                function t(e) {
                    return "function" == typeof e
                }
                function n() {
                    try {
                        WeixinJSBridge.on("menu:share:timeline", function() {
                            WeixinJSBridge.invoke("shareTimeline", {
                                img_url: i.img,
                                img_width: 55,
                                img_height: 55,
                                link: t(i.url) ? i.url(1) : i.url,
                                desc: i.desc,
                                title: i.timeline_title ? i.timeline_title : i.title
                            }, function() {
                                try {
                                    t(i.callback) && i.callback()
                                } catch (e) {}
                            })
                        }),
                        /android/i.test(navigator.userAgent) ? WeixinJSBridge.on("menu:share:weibo", function() {
                            WeixinJSBridge.invoke("shareWeibo", {
                                url: t(i.url) ? i.url(2) : i.url,
                                content: i.title + ":" + i.desc
                            }, function() {
                                try {
                                    t(i.callback) && i.callback()
                                } catch (e) {}
                            })
                        }) : WeixinJSBridge.on("menu:share:weibo", function() {
                            WeixinJSBridge.invoke("shareWeibo", {
                                img_url: i.img,
                                img_width: 55,
                                img_height: 55,
                                link: t(i.url) ? i.url(2) : i.url,
                                desc: i.desc,
                                title: i.title
                            }, function() {
                                try {
                                    t(i.callback) && i.callback()
                                } catch (e) {}
                            })
                        }),
                        WeixinJSBridge.on("menu:share:appmessage", function() {
                            WeixinJSBridge.invoke("sendAppMessage", {
                                img_url: i.img,
                                img_width: 55,
                                img_height: 55,
                                link: t(i.url) ? i.url(3) : i.url,
                                desc: i.desc,
                                title: i.title
                            }, function() {
                                try {
                                    t(i.callback) && i.callback()
                                } catch (e) {}
                            })
                        }),
                        t(i.readycallback) && i.readycallback()
                    } catch (e) {}
                }
                var i = {
                    img: "",
                    url: location.href,
                    desc: "",
                    title: ""
                }
                  , o = function(e) {
                    if ("object" == typeof e)
                        for (var o in e)
                            e.hasOwnProperty(o) && (i[o] = e[o]);
                    "object" == typeof window.WeixinJSBridge && t(window.WeixinJSBridge.invoke) ? n() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", n, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", n),
                    document.attachEvent("onWeixinJSBridgeReady", n))
                };
                e.init = o
            })
        }
        , function(e, t) {
            e.exports = {
                get: function(e) {
                    var t = new RegExp("(^|;|\\s+)" + e + "=([^;]*)(;|$)")
                      , n = document.cookie.match(t);
                    return n ? unescape(n[2]) : null
                },
                add: function(e, t, n, i, o) {
                    var r = e + "=" + escape(t) + "; path=" + (i || "/") + (o ? "; domain=" + o : "");
                    if (n > 0) {
                        var a = new Date;
                        a.setDate(a.getDate() + n),
                        r += ";expires=" + a.toGMTString()
                    }
                    document.cookie = r
                },
                del: function(e, t, n) {
                    2 == arguments.length && (n = t,
                    t = "/"),
                    document.cookie = e + "=;path=" + t + ";" + (n ? "domain=" + n + ";" : "") + "expires=Thu, 01-Jan-70 00:00:01 GMT"
                }
            }
        }
        , function(e, t) {
            var n = function(e, t) {
                if (e = e || {},
                this.elementNode = e.elementNode || "",
                this.url = e.url || document.location.href || "",
                this.title = e.title || document.title || "",
                this.desc = e.content || document.title || "",
                this.img = e.img || document.getElementsByTagName("img").length > 0 && document.getElementsByTagName("img")[0].src || "",
                this.img_title = e.img_title || document.title || "",
                this.from = e.from || window.location.host || "",
                this.channel = e.channel || "weixin",
                this.sid = e.sid || "",
                "" != this.elementNode && !document.getElementById(this.elementNode))
                    return !1;
                var n = {
                    lower: "//3gimg.qq.com/html5/js/qb.js",
                    higher: "//jsapi.qq.com/get?api=app.share"
                }
                  , i = {
                    qq: {
                        forbid: 0,
                        lower: 1,
                        higher: 2
                    },
                    uc: {
                        forbid: 0,
                        allow: 1
                    }
                }
                  , o = navigator.appVersion
                  , r = o.split("MQQBrowser/").length > 1 ? i.qq.higher : i.qq.forbid
                  , a = o.split("UCBrowser/").length > 1 ? i.uc.allow : i.uc.forbid
                  , c = {
                    uc: "",
                    qq: ""
                }
                  , s = !1;
                return this.ucAppList = {
                    sinaWeibo: ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"],
                    weixin: ["kWeixin", "WechatFriends", 1, "微信好友"],
                    weixinFriend: ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"],
                    QQ: ["kQQ", "QQ", "4", "QQ好友"],
                    QZone: ["kQZone", "QZone", "3", "QQ空间"]
                },
                this.share = function(e) {
                    var n = this.title
                      , o = this.url
                      , c = this.desc
                      , l = this.img
                      , u = this.img_title
                      , f = this.from;
                    if ("undefined" != platform_os && "" != platform_os || (platform_os = this.getPlatform()),
                    a)
                        "QZone" == e && (B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url=" + l + "&title=" + n + "&description=" + c + "&url=" + o + "&app_name=" + f,
                        k = document.createElement("div"),
                        k.style.visibility = "hidden",
                        k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>',
                        document.body.appendChild(k),
                        setTimeout(function() {
                            k && k.parentNode && k.parentNode.removeChild(k)
                        }, 5e3)),
                        "iPhone" == platform_os && "undefined" != typeof ucbrowser ? (e = this.ucAppList[e][0],
                        ucbrowser.web_share(n, c, o, e, "", "", "")) : "undefined" != typeof ucweb ? (e = this.ucAppList[e][1],
                        ucweb.startRequest("shell.page_share", [n, c, o, e, "", "", ""])) : t && t();
                    else if (r && !s) {
                        e = "" == e ? "" : this.ucAppList[e][2];
                        var p = {
                            url: o,
                            title: n,
                            description: c,
                            img_url: l,
                            img_title: u,
                            to_app: e,
                            cus_txt: "请输入此时此刻想要分享的内容"
                        };
                        if (p = "" == e ? "" : p,
                        "undefined" != typeof browser) {
                            if (void 0 !== browser.app && r == i.qq.higher)
                                return browser.app.share(p),
                                void (t && t())
                        } else
                            void 0 !== window.qb && r == i.qq.lower ? window.qb.share(p) : t && t()
                    } else
                        t && t()
                }
                ,
                this.isloadqqApi = function() {
                    if (r) {
                        var e = c.qq < 5.4 ? n.lower : n.higher
                          , t = document.createElement("script")
                          , i = document.getElementsByTagName("body")[0];
                        t.setAttribute("src", e),
                        i.appendChild(t)
                    }
                }
                ,
                this.getPlatform = function() {
                    return ua = navigator.userAgent.toLowerCase(),
                    ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ios") > -1 ? "iPhone" : ua.indexOf("android") > -1 || ua.indexOf("linux") > -1 ? "Android" : "Unknown"
                }
                ,
                this.is_weixin = function() {
                    return "micromessenger" == o.toLowerCase().match(/MicroMessenger/i)
                }
                ,
                this.getVersion = function(e) {
                    var t = e.split(".");
                    return parseFloat(t[0] + "." + t[1])
                }
                ,
                this.init = function() {
                    platform_os = this.getPlatform(),
                    c.qq = r ? this.getVersion(o.split("MQQBrowser/")[1]) : 0,
                    c.uc = a ? this.getVersion(o.split("UCBrowser/")[1]) : 0,
                    s = this.is_weixin(),
                    r && c.qq < 5.4 && "iPhone" == platform_os || r && c.qq < 5.3 && "Android" == platform_os ? r = i.qq.forbid : r && c.qq < 5.4 && "Android" == platform_os ? r = i.qq.lower : a && (c.uc < 10.2 && "iPhone" == platform_os || c.uc < 9.7 && "Android" == platform_os) && (a = i.uc.forbid),
                    this.isloadqqApi()
                }
                ,
                this.init(),
                this.callShare = function() {
                    if (platform_os = this.getPlatform(),
                    r) {
                        var e = this;
                        setTimeout(function() {
                            e.share(e.channel)
                        }, 500)
                    } else
                        a ? this.share(this.channel) : t && t()
                }
                ,
                this
            };
            e.exports = n
        }
        ])
    }
});
