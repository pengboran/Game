define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
		// 获取url上的code参数 - 微信授权code，用于获取微信用户信息
		var weixinCode = this.getContext().getRequestParameter("code");

		var self = this;
		if (!weixinCode) {
			this.weixinID = "123456789";
			this.weixinName = "我是测试";
			this.initData();
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
					this.initData();
				}
			});
		}
	};

	// 按活动批次号初始化试题数据，按批次号和微信ID初始化用户数据
	Model.prototype.initData = function() {
		// 获取url上的batch参数 - 活动的批次号
		var batch = this.getContext().getRequestParameter("batch");
	
		// 初始化试题数据
		var dQuestion = this.comp("dQuestion");
		dQuestion.setFilter("batchFilter", "fBatch = '" + batch + "'");
		dQuestion.refreshData();

		// 初始化用户数据
		var dUser = this.comp("dUser");
		dUser.setFilter("batchFilter", "fBatch = '" + batch + "'");
		dUser.setFilter("weixinFilter", "fWeixinID = '" + this.weixinID + "'");
		dUser.refreshData();
		if (dUser.getCount() === 0) {
			dUser.newData({
				"defaultValues" : [ {
					"fID" : justep.UUID.createUUID(),
					"fBatch" : batch,
					"fWeixinID" : this.weixinID,
					"fName" : this.weixinName
				} ]
			});
		}
	};

	// 在选择下一题时判断是否已经选择了问题选项
	Model.prototype.btnNextClick = function(event) {
		var dQuestion = this.comp("dQuestion");
		if (!dQuestion.getValue("fAnswer")) {
			justep.Util.hint("请选择选项", {
				"type" : "danger",
				"position" : "middle"
			});
		} else {
			dQuestion.next();
		}
	};

	// 提交
	Model.prototype.btnSaveClick = function(event) {
		var dQuestion = this.comp("dQuestion");
		var dAnswer = this.comp("dAnswer");
		var dUser = this.comp("dUser");
		var dTemp = this.comp("dTemp");
		// 判断数据有效性
		if (!dQuestion.getValue("fAnswer")) {
			justep.Util.hint("请选择选项", {
				"type" : "danger",
				"position" : "middle"
			});
		} else if (!dUser.getValue("fName")) {
			justep.Util.hint("请输入姓名", {
				"type" : "danger",
				"position" : "middle"
			});
		} else if (!dUser.getValue("fPhone")) {
			justep.Util.hint("请输入电话号", {
				"type" : "danger",
				"position" : "middle"
			});
		} else {
			// 清除上一次答案
			dAnswer.deleteAllData();
			dAnswer.saveData();
			
			// 构建本次答案
			dQuestion.each(function(data) {
				var answers = data.row.val("fAnswer").split(" ");
				for (var i = 0; i < answers.length; i++) {
					dAnswer.newData({
						"defaultValues" : [ {
							"fID" : justep.UUID.createUUID(),
							"fQuestionID" : data.row.val("fID"),
							"fOptionID" : answers[i]
						} ]
					});
				}
			});
			// 保存数据
			dUser.saveData({
				"onSuccess" : function(resultData) {
					// 设置提交成功标记，界面相关部分会自动只读
					dTemp.setValue("isSuccess", true);
					justep.Util.hint("提交成功，你可以参加后续的抽奖活动了！", {
						"type" : "success",
						"position" : "middle"
					});
				}
			});
		}
	};

	return Model;
});