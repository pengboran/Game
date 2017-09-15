var ENV = (function(){
		var ua = navigator.userAgent;
		return {
			xview : typeof XView != 'undefined', //是否是在xview中
			app : /jdapp/i.test(ua), //是否在京东app中
			wx : /MicroMessenger/i.test(ua), //是否在微信中
			qq : /MQQBrowser/i.test(ua) //是否在QQ中
		}
	})(); //当前环境
var CONF = {
	custom : { //自定义配置参数
		trackLength: 2000,      //跑道长度,含屏幕初始跑道长度
		userMaxSpeed: 300,      //用户角色最大速度
		userAcceleration: 35,   //用户角色加速度
		userDeceleration: 60,   //用户角色加速度
		npcMaxSpeed: 280,       //电脑角色最大速度
		npcAcceleration: 40,    //电脑角色最大速度
		resultShowTime: 5000    //结束动画到弹窗出现的停留时间（单位：ms）
	},
	popup : { //弹框的配置参数
		common : {
			prefix : 'padt', //活动前缀标识
			end : {
				year : 2017,
				month : 12,
				day : 31,
				hour : 24,
				minute : 0,
				second : 0
			}, //活动结束时间
			preloads : [
				
			]
		},
		default : {
			orders : [
				'title',
				'btns'
			],
			linkTxt : '',
			linkType : 'share',
			shareBtnTxt : '分享',
			couponBtnTxt : '立即兑奖',
			loginBtnTxt : '立即抽奖',
			homeBtnTxt : '“回首页”按钮文案',
			goBtnTxt : '去主会场',
			jump0BtnTxt : '去主会场',
			replayBtnTxt : '再玩一次',
			retryBtnTxt : '重新连接',
			prizes : [
				'//m.360buyimg.com/babel/jfs/t5926/222/7880272335/9860/b7e31df0/5981e325Nc4ecb609.png',
				'//m.360buyimg.com/babel/jfs/t7078/147/571223555/8595/f489046a/5981e325Nc1ce0878.png',
				'//m.360buyimg.com/babel/jfs/t5962/186/7896684118/11696/3cfc83c9/5981e325Nd4538464.png',
				'//m.360buyimg.com/babel/jfs/t7024/44/1487315802/11370/aebb9e35/5981e325N4745b80b.png'
			]
		},
		//优惠券
		coupon : {
			orders : [
				'title',
				'subtitle',
				'pack',
				'btns',
				'prizes',
				'link'
			],
			title : '恭喜你获得1张神券',
			subtitle : '超过了冻方不败，掳获任迎迎芳心',
			btns : ['replay','go'],
			pack : [{
				type : 'val',
				val : '{val}<span>元优惠券</span>'
			},{
				type : 'cond',
				val : '{cate} 满{cond}元可用'
			},{
				type : 'tips',
				val : '{tips}'
			}],
			linkTxt : ENV.wx ? null : '分享</br>好友'
		},
		//已入库实物券
		entity : {
			orders : [
				'title',
				'subtitle',
				'pack',
				'btns',
				'tips',
				'icon',
				'link'
			],
			title : '奥克斯送你空调兑换券一张',
			subtitle : '超过了冻方不败，掳获任迎迎芳心',
			btns : ['coupon','go'],
			pack : [{
				type : 'val',
				val : '<span>兑换券</span>'
			},{
				type : 'cond',
				val : '<p class="jp_1">2匹二级能效定速空调柜机</p><p class="jp_2">大1匹一级能效变频空调挂机</p>'
			},{
				type : 'tips',
				val : '{tips}'
			}],
			class: 'jp_{cls}',
			linkTxt : ENV.wx ? null : '分享</br>好友'
		},
		//未入库实物券
		unstore : {
			orders : [
				'title',
				'subtitle',
				'pack',
				'btns',
				'link'
			],
			title : '中未入库实物券标题',
			subtitle : '中未入库实物券副标题',
			btns : ['share','replay'],
			pack : [{
				type : 'val',
				val : '{val}元'
			},{
				type : 'tips',
				val : '{tips}'
			}]
		},
		//未中奖
		fail : {
			orders : [
				'title',
				'subtitle',
				'btns',
				'link'
			],
			title : '厉害了！超音速令壶冲',
			subtitle : '{title}',
			btns : ['replay','go'],
			linkTxt : ENV.wx ? null : '分享</br>好友'
		},
		//未登录
//		login : {
//			title : '距离奖品只差一个登录的距离',
//			btns : ['login']
//		},
		//重试
		retry : {
			title : '网络出了点问题，请重新再试试',
			btns : ['retry']
		},
		//自定义弹框0
		 custom0 : {
			 orders : [
				 'title',
				 'btns',
				 'link'
			 ],
		 	 title : '大侠，请再接再厉！</br>跑赢冻方不败，有机会得空调！',
			 btns : ['replay','go'],
			 linkTxt : ENV.wx ? null : '分享</br>好友'
		 },
	},

	functionId : 'babelActivityLuckDraw', //可选值：babelActivityLuckDraw、leGaoDrawCoupon

	//接口超时
	timeout: 5000,

	//主会场地址，如果按钮是回首页，可以置空
	mallURL: 'http://www.wushang.com/mobileApp/home.jsx#home',

	//指定跳转地址
	jumpUrls: {
		0: 'http://www.wushang.com/mobileApp/home.jsx#home',
		1: 'http://www.wushang.com/mobileApp/home.jsx#home'
	},

	//抽奖接口中的页面信息配置及默认抽奖moduleId配置
	lotteryConf: {
		activityId: '2XWKseXyA7w7iLDceShBYt2fv4ZC',
		pageId: '94541',
		moduleId: [
			'4GRCu1h1vjeCSjo7TuahxPG38JhQ',		//单张券
			''		//两张券
		]
	},

	//每场游戏配置
	/**
	 *	每一个id，对应一组moduleId, slogan图片，当前场次红包雨结束时间
	 */
	gameConf: {
		id1: {
			//时间配置说明
			//对于零点情况，配置成如：'2016/12/27 00:00:00'这种形式；而不是'2016/12/26 24:00:00'这种形式
			//
			time: '2016/10/27 10:32:00',	//当前场次红包雨结束时间，不可遗漏，否则会出错
			moduleId: [
				'a16Wgeyach2mPgAhicSoD14wP2Q78',		//单张券
				'a26Wgeyach2mPgAhicSoD14wP2Q7t',		//两张券
				'a36Wgeyach2mPgAhicSoD14wP2Q7t'		//三张券
			],
		},

		id2: {
			time: '',				//当前场次红包雨结束时间
			moduleId: [
				'c16Wgeyach2mPgAhicSoD14wP2Q7t',		//单张券
				'c26Wgeyach2mPgAhicSoD14wP2Q7t',		//两张券
				'c36Wgeyach2mPgAhicSoD14wP2Q7t'		//三张券
			],
		}
	},

	//客户端版本
	clientVersion: 540,
	
	//分享配置
	shareConf: {
		//缩略图图片地址
		img: 'https://h5.m.jd.com/dev/2XWKseXyA7w7iLDceShBYt2fv4ZC/pages/94541/img/share.jpg',

		//长图分享图片地址
		longImg: '',

		//分享地址
		url: 'https://h5.m.jd.com/dev/2XWKseXyA7w7iLDceShBYt2fv4ZC/index.html',

		//分享随机文案
		random: {
			//app
			app: {
				key1: [
					{
						url: 'https://m.jd.com?id=1-1',
						title: 'key1分享标题1',
						content: 'key1分享描述1{score}',
						timeline_title: 'key1朋友圈分享标题1。。。。'
					},
					{
						url: 'https://m.jd.com?id=1-2',
						title: 'key1分享标题2',
						content: 'key1分享描述2{score}',
						timeline_title: 'key1朋友圈分享标题2。。。。'
					},
					{
						url: 'https://m.jd.com?id=1-3',
						title: 'key1分享标题3',
						content: 'key1分享描述3{score}',
						timeline_title: 'key1朋友圈分享标题3。。。。'
					}
				],
				key2: [
					{
						url: 'https://m.jd.com?id=2-1',
						title: 'key2分享标题1',
						content: 'key2分享描述1{score}',
						timeline_title: 'key2朋友圈分享标题1。。。。'
					},
					{
						url: 'https://m.jd.com?id=2-2',
						title: 'key2分享标题2',
						content: 'key2分享描述2{score}',
						timeline_title: 'key2朋友圈分享标题2。。。。'
					},
					{
						url: 'https://m.jd.com?id=2-3',
						title: 'key2分享标题3',
						content: 'key2分享描述3{score}',
						timeline_title: 'key2朋友圈分享标题3。。。。'
					}
				],
				key3: [
					{
						url: 'https://m.jd.com?id=3-1',
						title: 'key3分享标题1',
						content: 'key3分享描述1{score}',
						timeline_title: 'key3朋友圈分享标题1。。。。'
					},
					{
						url: 'https://m.jd.com?id=3-2',
						title: 'key3分享标题2',
						content: 'key3分享描述2{score}',
						timeline_title: 'key3朋友圈分享标题2。。。。'
					},
					{
						url: 'https://m.jd.com?id=3-3',
						title: 'key3分享标题3',
						content: 'key3分享描述3{score}',
						timeline_title: 'key3朋友圈分享标题3。。。。'
					}
				]
			},

			//微信，微信侧分享文案，不要配置{score}这种坑
			wx: [
				{
					title: '手够快，就来战！顺便赢台空调回家去避暑',
					content: '令壶冲再战冻方不败，谁是赢家你来定。',
					timeline_title: '笑奥江湖等你来战，赢取空调大奖！'
				},
				{
					title: '手够快，就来战！顺便赢台空调回家去避暑',
					content: '笑奥江湖等你来战，赢取空调大奖！',
					timeline_title: '手够快，就来战！顺便赢台空调回家去避暑'
				},
				{
					title: '天下武功唯快不破，手够快，就来赢取空调大奖！',
					content: '令壶冲再战冻方不败，谁是赢家你来定。',
					timeline_title: '笑奥江湖等你来战，赢取空调大奖！'
				}
			]
		}
	},

	//埋点前缀配置
	trackPrefix: 'Babel_dev_adv_',

	//埋点参数
	trackParam: {
		activityId: '00043567',
		groupId: '00577180',
		advertIds: {
			LotteryInterface : '05695043',
			InterfaceSucceed : ''
		}
	},

	//状态码文案
	subTitleConf: {
		default: 'code默认文案..',	//默认文案，用于code!=0情况
		content: [

	//code
                '去会场逛逛吧~',           //1
                '去会场逛逛吧',           //-1
                '去逛逛会场吧',       //-701

                //subcode
                '快去会场逛逛吧',           //1
                '快去会场逛逛吧~',           //-1
                '快去会场逛逛吧！',       //1-1;1-2;1-3;1-4
                '快去逛逛会场吧',               //3-1;3-2
                '快去逛逛会场吧！',                   //2-1
                '快去逛逛会场吧~',                   //4-2
                '快去逛会场吧',                   //4-5
                '快去逛会场吧~',       //5-1;5-2;5-3;5-4
                '快去逛会场吧！',           //6-2;6-3;6-4
                '快去会场看看吧',           //6-1
                '快去会场看看吧~'    //else
		]
	}
};