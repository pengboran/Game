define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	var SHAKE_THRESHOLD = 800;
	var last_update = 0;
	var x = 0;
	var y = 0;
	var z = 0;
	var last_x = 0;
	var last_y = 0;
	var last_z = 0;

	Model.prototype.modelLoad = function(event) {
		// 获取url上的code参数 - 微信授权code，用于获取微信用户信息
		var weixinCode = this.getContext().getRequestParameter("code");

		var self = this;
		if (!weixinCode) {
			this.weixinID = "123456789";
			this.weixinName = "我是测试";
		} else {
			// 获取微信用户信息
			justep.Baas.sendRequest({
				"url" : "/weixin/weixin",
				"action" : "userinfo",
				"async" : false,
				"params" : {
					code : weixinCode
				},
				"success" : function(weixinUser) {
					self.weixinID = weixinUser.openid;
					self.weixinName = weixinUser.nickname;
				}
			});
		}

		// 摇一摇事件
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', deviceMotionHandler, false);
		} else {
			alert('本设备不支持摇一摇');
		}
		function deviceMotionHandler(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			var curTime = new Date().getTime();
			if ((curTime - last_update) > 100) {
				var diffTime = curTime - last_update;
				last_update = curTime;
				x = acceleration.x;
				y = acceleration.y;
				z = acceleration.z;
				var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

				if (speed > SHAKE_THRESHOLD) {
					self.imgRockClick();
				}
				last_x = x;
				last_y = y;
				last_z = z;
			}
		}
	};

	Model.prototype.imgRockClick = function(event) {
		var popOver = this.comp("popOver");
		if (popOver.$domNode.is(":visible")) {
			return;
		}

		// 提示信息组件
		var $info = $(this.getElementByXid("info"));
		var $prize = $(this.getElementByXid("prize"));
		// 再摇一次组件
		var $divAgain = $(this.getElementByXid("divAgain"));

		// 声音组件
		var kachaMedia = this.getElementByXid("kachaMedia");
		var huojiangMedia = this.getElementByXid("huojiangMedia");
		
		// 咔嚓声
		kachaMedia.play();

		$divAgain.hide();
		var batch = this.getContext().getRequestParameter("batch");
		var index = this.getContext().getRequestParameter("index");
		// 提交摇奖请求
		justep.Baas.sendRequest({
			"url" : "/justep/prize",
			"action" : "drawPrize",
			"async" : false,
			"params" : {
				"batch" : batch,
				"index" : index,
				"weixinID" : this.weixinID
			},
			"success" : success
		});
		// 按摇奖返回结果提示用户：-3 奖池已空；-2 未答题；-1 已中奖；0 未中奖；1 中奖
		var success = function(resultData) {
			if (resultData.code == -3) {
				$info.css({
					"color" : "gray"
				});
				$prize.css({
					"color" : "gray"
				});
				$info.text("你手太慢啦");
				$prize.text("奖池已经被抽空了");
			} else if (resultData.code == -2) {
				$info.css({
					"color" : "gray"
				});
				$prize.css({
					"color" : "gray"
				});
				$info.text("还没答题就想抽奖");
				$prize.text("想啥呢 :)");
			} else if (resultData.code == -1) {
				$info.css({
					"color" : "red"
				});
				$prize.css({
					"color" : "red"
				});
				$info.text("你已经中奖了");
				$prize.text("奖品是“" + resultData.prize + "”");
				this.hasPrize = true;
			} else if (resultData.code === 0) {
				$info.css({
					"color" : "gray"
				});
				$prize.css({
					"color" : "gray"
				});
				$info.text("请再用力一点");
				$prize.text("奖品在等你哟");
				$divAgain.show();
			} else if (resultData.code == 1) {
				$info.css({
					"color" : "red"
				});
				$prize.css({
					"color" : "red"
				});
				$info.text("恭喜你中奖啦");
				$prize.text("奖品是“" + resultData.prize + "”");

				// 获奖声
				huojiangMedia.play();
			}
			popOver.show();
		};
		
	};

	Model.prototype.btnAgainClick = function(event) {
		var popOver = this.comp("popOver");
		popOver.hide();
	};

	return Model;
});