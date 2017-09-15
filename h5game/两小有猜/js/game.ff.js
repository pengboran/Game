var imagesPath, childrenGame = {},
	game, audio, ringBgm, gameWidth, gameHeight, scaling = {},
	musicControl, sharePage, loadPage, loadWords;
imagesPath = "img/", gameWidth = window.innerWidth, gameHeight = window.innerHeight, loadPage = document.getElementById("loading"), loadWords = document.querySelector(".loading-progress"), sharePage = document.getElementById("sharePage"), sharePage.addEventListener("click", function() {
	sharePage.setAttribute("style", "display:none;")
}), scaling = {
	little: gameWidth / 1e3,
	small: gameWidth / 800,
	normal: gameWidth / 700,
	large: gameWidth / 600,
	wheel: gameWidth / 300
}, childrenGame.StartPage = function() {}, childrenGame.StartPage.prototype = {
	preload: function() {
		this.load.onFileComplete.add(this.loadprogress), this.load.image("bg", imagesPath + "bg.jpg"), this.load.image("xh-head", imagesPath + "xh-head.png"), this.load.image("xm-head", imagesPath + "xm-head.png"), this.load.image("logo", imagesPath + "logo.png"), this.load.spritesheet("title", imagesPath + "title.png", 90, 90, 4), game.load.audio("bgmring", imagesPath + "bgmring.mp3")
	},
	create: function() {
		ringBgm = game.add.audio("bgmring");
		var a, b, c, d, e, f, g, h, i, j;
		b = {
			font: "bold 30px Arial",
			fill: "#fff"
		}, game.load.image("schoolBg", imagesPath + "school-bg.jpg"), game.load.image("black-words", imagesPath + "black_words.png"), game.load.image("school-btn", imagesPath + "school-btn.png"), game.load.start(), loadPage.setAttribute("style", "display:none"), ringBgm.autoplay = !0, ringBgm.play(), ringBgm.volume = 2, ringBgm.loopFull(), this.stage.backgroundColor = "#2e4632", a = this.add.image(0, 0, "bg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameHeight / a.texture.frame.height, d = this.add.sprite(.48 * gameWidth, .4 * gameHeight, "xh-head"), d.anchor.set(1, .5), d.scale.setTo(scaling.normal), this.add.tween(d.scale).to({
			x: .5,
			y: .5
		}, 500, Phaser.Easing.Linear.None, !0, 0, -1, !0), e = this.add.sprite(.52 * gameWidth, .4 * gameHeight, "xm-head"), e.anchor.set(0, .5), e.scale.setTo(scaling.normal), this.add.tween(e.scale).to({
			x: .5,
			y: .5
		}, 500, Phaser.Easing.Linear.None, !0, 500, -1, !0), f = this.add.sprite(.32 * gameWidth, .5 * gameHeight, "title", 0), f.anchor.set(.5, .5), f.scale.setTo(scaling.small), this.add.tween(f.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 0), g = this.add.sprite(.44 * gameWidth, .5 * gameHeight, "title", 1), g.anchor.set(.5, .5), g.scale.setTo(scaling.small), this.add.tween(g.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 200), h = this.add.sprite(.56 * gameWidth, .5 * gameHeight, "title", 2), h.anchor.set(.5, .5), h.scale.setTo(scaling.small), this.add.tween(h.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 400), i = this.add.sprite(.68 * gameWidth, .5 * gameHeight, "title", 3), i.anchor.set(.5, .5), i.scale.setTo(scaling.small), this.add.tween(i.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 600), j = this.add.sprite(this.world.centerX, .95 * gameHeight, "logo"), j.anchor.set(.5, 1), j.scale.setTo(scaling.normal), c = this.add.text(this.world.centerX, .75 * gameHeight, "点击屏幕开始", {
			font: "bold 20px Arial",
			fill: "#fff"
		}), c.anchor.set(.5, .5), this.input.onDown.addOnce(this.startGame, this)
	},
	loadprogress: function() {
		loadWords.innerHTML = game.load.progress + "%"
	},
	update: function() {},
	render: function() {},
	startGame: function() {
		game.state.start("SchoolPage"), ringBgm.play()
	}
}, childrenGame.SchoolPage = function() {}, childrenGame.SchoolPage.prototype = {
	preload: function() {
		this.load.image("schoolBg", imagesPath + "school-bg.jpg"), this.load.image("black-words", imagesPath + "black_words.png"), this.load.image("school-btn", imagesPath + "school-btn.png"), game.PhaserBones = game.plugins.add(Rift.PhaserBones), game.PhaserBones.Cache = game.cache, game.PhaserBones.AddResourceByName("school", "http://mat1.gtimg.com/zj/maxbao/cd_day/tex/"), game.PhaserBones.LoadResources()
	},
	create: function() {
		var a, b, c;
		game.load.image("schoolRing", imagesPath + "school-ring.png"), game.load.image("coffeeRing", imagesPath + "xh-ring1.png"), game.load.image("xmRing", imagesPath + "xm-ring1.png"), game.load.image("bookRing", imagesPath + "book-ring.png"), game.load.image("schoolWords", imagesPath + "school-words.png"), game.load.start(), this.stage.backgroundColor = "#fff", a = this.add.image(0, 0, "schoolBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, b = this.add.image(.98 * gameWidth, .5 * gameWidth, "black-words"), b.anchor.set(1, 0), b.scale.setTo(scaling.normal);
		var d = this.game.PhaserBones.GetArmature("school");
		d.x = game.world.width / 2, d.y = game.world.height, d.scale.setTo(scaling.normal);
		var e = game.add.group();
		e.add(d), d.animate("caiquan"), c = this.add.image(this.world.centerX, this.world.centerY, "school-btn"), c.anchor.set(.5, .5), c.scale.setTo(scaling.normal), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Bounce.easeOut", !0, 3200), c.inputEnabled = !0, c.events.onInputDown.add(this.startNext, this)
	},
	startNext: function() {
		game.state.start("SchoolRing")
	},
	update: function() {},
	render: function() {}
}, childrenGame.SchoolRing = function() {}, childrenGame.SchoolRing.prototype = {
	preload: function() {
		this.load.image("schoolRing", imagesPath + "school-ring.png"), this.load.image("coffeeRing", imagesPath + "xh-ring1.png"), this.load.image("xmRing", imagesPath + "xm-ring1.png"), this.load.image("bookRing", imagesPath + "book-ring.png"), this.load.image("schoolWords", imagesPath + "school-words.png")
	},
	create: function() {
		var a, b, c, d, e;
		game.load.image("workBg", imagesPath + "work-bg.jpg"), game.load.image("workXh", imagesPath + "work-xh.png"), game.load.image("workBook", imagesPath + "work-book.png"), game.load.image("workXhHead", imagesPath + "work-xh-head.png"), game.load.image("workXhRightHand", imagesPath + "work-xh-righthand.png"), game.load.image("workXhHurt", imagesPath + "work-xh-hurt.png"), game.load.image("workNo", imagesPath + "work-no.png"), game.load.image("workXmBody", imagesPath + "work-xm-body.png"), game.load.image("workXmHead", imagesPath + "work-xm-head.png"), game.load.image("workPlease", imagesPath + "work-please.png"), game.load.image("workXmHh", imagesPath + "work-xm-hehe.png"), game.load.image("workFood", imagesPath + "work-food.png"), game.load.image("workBtn", imagesPath + "work-btn.png"), game.load.start(), this.stage.backgroundColor = "#e0cea0", a = this.add.image(this.world.centerX, this.world.centerY, "schoolRing"), a.anchor.set(.5, .5), a.scale.setTo(0), this.add.tween(a).to({
			angle: -360
		}, 5e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(a.scale).to({
			x: scaling.small,
			y: scaling.small
		}, 800, Phaser.Easing.Circular.In, !0), b = this.add.image(this.world.centerX, this.world.centerY, "coffeeRing"), b.anchor.set(.5, .5), b.scale.setTo(scaling.wheel), this.add.tween(b).to({
			angle: 360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(b.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), c = this.add.image(this.world.centerX, this.world.centerY, "bookRing"), c.anchor.set(.5, .5), c.scale.setTo(gameWidth / 440), this.add.tween(c).to({
			angle: -360
		}, 4e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), d = this.add.image(this.world.centerX, this.world.centerY, "xmRing"), d.anchor.set(.5, .5), d.scale.setTo(scaling.wheel), this.add.tween(d).to({
			angle: -360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(d.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 1800), e = this.add.image(this.world.centerX, this.world.centerY, "schoolWords"), e.anchor.set(.5, .5), e.scale.setTo(gameWidth / 900), this.add.tween(e.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 2200), this.input.onDown.addOnce(this.goNext, this)
	},
	goNext: function() {
		game.state.start("WorkPage")
	},
	update: function() {},
	render: function() {}
}, childrenGame.WorkPage = function() {}, childrenGame.WorkPage.prototype = {
	preload: function() {
		this.load.image("workBg", imagesPath + "work-bg.jpg"), this.load.image("workXh", imagesPath + "work-xh.png"), this.load.image("workBook", imagesPath + "work-book.png"), this.load.image("workXhHead", imagesPath + "work-xh-head.png"), this.load.image("workXhRightHand", imagesPath + "work-xh-righthand.png"), this.load.image("workXhHurt", imagesPath + "work-xh-hurt.png"), this.load.image("workNo", imagesPath + "work-no.png"), this.load.image("workXmBody", imagesPath + "work-xm-body.png"), this.load.image("workXmHead", imagesPath + "work-xm-head.png"), this.load.image("workPlease", imagesPath + "work-please.png"), this.load.image("workXmHh", imagesPath + "work-xm-hehe.png"), this.load.image("workFood", imagesPath + "work-food.png"), this.load.image("workBtn", imagesPath + "work-btn.png")
	},
	create: function() {
		var a, b, c, d, e, f, g, h, i, j, k, l, m;
		game.load.image("schoolRing", imagesPath + "school-ring.png"), game.load.image("xhRing2", imagesPath + "xh-ring2.png"), game.load.image("xmRing2", imagesPath + "xm-ring2.png"), game.load.image("sugarRing", imagesPath + "sugar-ring.png"), game.load.image("ringBook", imagesPath + "work-book.png"), game.load.start(), this.stage.backgroundColor = "#fff", a = this.add.image(0, 0, "workBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, b = this.add.image(.1 * -gameWidth, gameHeight, "workXh"), b.anchor.set(0, 1), b.scale.setTo(gameWidth / 420), c = b.addChild(this.add.image(150, -240, "workBook")), c.anchor.set(.5, .5), c.scale.setTo(c.texture.frame.width / 260), this.add.tween(c).to({
			x: 180,
			y: -180
		}, 1e3, Phaser.Easing.Circular.Out, !0, 2800), d = b.addChild(this.add.image(120, -400, "workXhHead")), d.anchor.set(.5, .5), d.scale.setTo(d.texture.frame.width / 260), this.add.tween(d).to({
			visible: !1
		}, 1, "Linear", !0, 2200), f = b.addChild(this.add.image(100, -400, "workXhHurt")), f.anchor.set(.5, .5), f.scale.setTo(f.texture.frame.width / 260), f.visible = !1, this.add.tween(f).to({
			visible: !0
		}, 1, "Linear", !0, 2200), e = b.addChild(this.add.image(120, -265, "workXhRightHand")), e.anchor.set(.5, .5), e.scale.setTo(e.texture.frame.width / 420), g = b.addChild(this.add.image(160, -520, "workNo")), g.anchor.set(.5, .5), g.scale.setTo(g.texture.frame.width / 180), g.visible = !1, this.add.tween(g).to({
			visible: !0
		}, 1, "Linear", !0, 1e3), this.add.tween(g).to({
			visible: !1
		}, 1, "Linear", !0, 2e3), l = this.add.image(gameWidth, .4 * gameHeight, "workFood"), l.anchor.set(.2, .5), l.scale.setTo(gameWidth / 1900), this.add.tween(l).to({
			x: .2 * gameWidth,
			angle: -720
		}, 400, "Back.easeOut", !0, 2e3), this.add.tween(l.scale).to({
			x: gameWidth / 420,
			y: gameWidth / 420
		}, 1e3, Phaser.Easing.Circular.Out, !0, 2200), h = this.add.image(gameWidth, gameHeight, "workXmBody"), h.anchor.set(1, 1), h.scale.setTo(gameWidth / 460), i = h.addChild(this.add.image(-120, -350, "workXmHead")), i.anchor.set(.5, .5), i.scale.setTo(i.texture.frame.width / 200), this.add.tween(i).to({
			visible: !1
		}, 1, "Linear", !0, 3400), k = h.addChild(this.add.image(-120, -350, "workXmHh")), k.anchor.set(.5, .5), k.scale.setTo(k.texture.frame.width / 240), k.visible = !1, this.add.tween(k).to({
			visible: !0
		}, 1, "Linear", !0, 3400), j = h.addChild(this.add.image(-160, -520, "workPlease")), j.anchor.set(.5, .5), j.scale.setTo(j.texture.frame.width / 180), j.visible = !1, this.add.tween(j).to({
			visible: !0
		}, 1, "Linear", !0, 400), this.add.tween(j).to({
			visible: !1
		}, 1, "Linear", !0, 2e3), m = this.add.image(.9 * gameWidth, .3 * gameHeight, "workBtn"), m.anchor.set(1, .5), m.scale.setTo(scaling.normal), this.add.tween(m.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Bounce.easeOut", !0, 3200), m.inputEnabled = !0, m.events.onInputDown.add(this.startNext, this)
	},
	startNext: function() {
		game.state.start("WorkRing")
	},
	update: function() {},
	render: function() {}
}, childrenGame.WorkRing = function() {}, childrenGame.WorkRing.prototype = {
	preload: function() {
		this.load.image("schoolRing", imagesPath + "school-ring.png"), this.load.image("xhRing2", imagesPath + "xh-ring2.png"), this.load.image("xmRing2", imagesPath + "xm-ring2.png"), this.load.image("sugarRing", imagesPath + "sugar-ring.png"), this.load.image("ringBook", imagesPath + "work-book.png")
	},
	create: function() {
		var a, b, c, d, e;
		game.load.image("snBg", imagesPath + "sn-bg.jpg"), game.load.image("grass", imagesPath + "grass.png"), game.load.image("trees", imagesPath + "trees.png"), game.load.image("snXhBody", imagesPath + "sn-xh-body.png"), game.load.image("snXhHead", imagesPath + "work-xh-head.png"), game.load.image("snXhScHead", imagesPath + "sn-xh-schead.png"), game.load.image("snXhScWords", imagesPath + "sn-sc-words.png"), game.load.image("littleXm", imagesPath + "sn-little-xm.png"), game.load.image("backXm", imagesPath + "sn-back-xm.png"), game.load.image("snXmWords", imagesPath + "sn-xm-words.png"), game.load.image("snake", imagesPath + "snake.png"), game.load.image("snXmHh", imagesPath + "sn-xm-hehe.png"), game.load.image("snBtn", imagesPath + "sn-btn.png"), game.load.start(), this.stage.backgroundColor = "#78c1e9", a = this.add.image(this.world.centerX, this.world.centerY, "schoolRing"), a.anchor.set(.5, .5), a.scale.setTo(0), this.add.tween(a).to({
			angle: -360
		}, 5e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(a.scale).to({
			x: scaling.small,
			y: scaling.small
		}, 800, Phaser.Easing.Circular.In, !0), b = this.add.image(this.world.centerX, this.world.centerY, "xhRing2"), b.anchor.set(.5, .5), b.scale.setTo(scaling.wheel), this.add.tween(b).to({
			angle: 360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(b.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), c = this.add.image(this.world.centerX, this.world.centerY, "sugarRing"), c.anchor.set(.5, .5), c.scale.setTo(gameWidth / 440), this.add.tween(c).to({
			angle: -360
		}, 4e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), d = this.add.image(this.world.centerX, this.world.centerY, "xmRing2"), d.anchor.set(.5, .5), d.scale.setTo(scaling.wheel), this.add.tween(d).to({
			angle: -360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(d.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 1800), e = this.add.image(this.world.centerX, this.world.centerY, "ringBook"), e.anchor.set(.5, .5), e.scale.setTo(gameWidth / 900), this.add.tween(e.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 2200), this.input.onDown.addOnce(this.goNext, this)
	},
	goNext: function() {
		game.state.start("SnakePage")
	},
	update: function() {},
	render: function() {}
}, childrenGame.SnakePage = function() {}, childrenGame.SnakePage.prototype = {
	preload: function() {
		this.load.image("snBg", imagesPath + "sn-bg.jpg"), this.load.image("grass", imagesPath + "grass.png"), this.load.image("trees", imagesPath + "trees.png"), this.load.image("snXhBody", imagesPath + "sn-xh-body.png"), this.load.image("snXhHead", imagesPath + "work-xh-head.png"), this.load.image("snXhScHead", imagesPath + "sn-xh-schead.png"), this.load.image("snXhScWords", imagesPath + "sn-sc-words.png"), this.load.image("littleXm", imagesPath + "sn-little-xm.png"), this.load.image("backXm", imagesPath + "sn-back-xm.png"), this.load.image("snXmWords", imagesPath + "sn-xm-words.png"), this.load.image("snake", imagesPath + "snake.png"), this.load.image("snXmHh", imagesPath + "sn-xm-hehe.png"), this.load.image("snBtn", imagesPath + "sn-btn.png")
	},
	create: function() {
		var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
		game.load.image("schoolRing", imagesPath + "school-ring.png"), game.load.image("xhRing3", imagesPath + "xh-ring3.png"), game.load.image("xmRing3", imagesPath + "xm-ring3.png"), game.load.image("treeRing", imagesPath + "tree-ring.png"), game.load.image("snTree", imagesPath + "sn-tree.png"), game.load.start(), this.stage.backgroundColor = "#fff", a = this.add.image(0, 0, "snBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, b = this.add.image(0, 1.28 * gameWidth, "trees"), b.anchor.set(0, 1), b.scale.x = gameWidth / b.texture.frame.width, b.scale.y = gameWidth / b.texture.frame.width, p = this.add.tween(b).to({
			y: 1.01 * gameHeight
		}, 6e4, "Linear", !0, 1), f = this.add.image(.65 * gameWidth, 1.6 * gameWidth, "littleXm"), f.anchor.set(0, 1), f.scale.setTo(scaling.normal), this.add.tween(f).to({
			y: .75 * gameHeight
		}, 800, "Back.easeOut", !0, 1e3, 0, !0), c = this.add.image(0, gameHeight, "grass"), c.anchor.set(0, 1), c.scale.x = gameWidth / c.texture.frame.width, c.scale.y = gameWidth / c.texture.frame.width, g = this.add.image(.2 * -gameWidth, 1.3 * gameWidth, "littleXm"), g.anchor.set(.5, .5), g.scale.setTo(gameWidth / 400), g.angle = 30, this.add.tween(g).to({
			x: 0
		}, 800, "Back.easeOut", !0, 2200, 0, !0), h = this.add.image(.6 * gameWidth, gameHeight, "backXm"), h.anchor.set(.2, 1), h.scale.setTo(gameWidth / 400), h.alpha = 0, i = h.addChild(this.add.image(0, -340, "snXmWords")), i.anchor.set(.5, .5), i.scale.setTo(i.texture.frame.width / 160), this.add.tween(h).to({
			alpha: 1
		}, 800, "Back.easeOut", !0, 3400), this.add.tween(h).to({
			alpha: 0
		}, 1, "Back.easeOut", !0, 4400), j = this.add.image(.6 * gameWidth, gameHeight, "snXmHh"), j.anchor.set(.2, 1), j.scale.setTo(gameWidth / 580), j.alpha = 0, this.add.tween(j).to({
			alpha: 1
		}, 1, "Back.easeOut", !0, 4400), d = this.add.image(this.world.centerX, gameHeight, "snXhBody"), d.anchor.set(.5, 1), d.scale.setTo(scaling.small), o = this.add.tween(d).to({
			y: 1.01 * gameHeight
		}, 800, "Linear", !0, 0, -1, !0), e = d.addChild(this.add.image(-10, -510, "snXhHead")), e.anchor.set(.5, .5), e.scale.setTo(e.texture.frame.width / 130), k = d.addChild(this.add.image(-40, -520, "snXhScHead")), k.anchor.set(.5, .5), k.scale.setTo(k.texture.frame.width / 130), k.alpha = 0, this.add.tween(e).to({
			alpha: 0
		}, 200, "Linear", !0, 4400), this.add.tween(k).to({
			alpha: 1
		}, 200, "Linear", !0, 4400), m = d.addChild(this.add.image(180, -720, "snXhScWords")), m.anchor.set(.5, .5), m.scale.setTo(k.texture.frame.width / 130), m.alpha = 0, this.add.tween(m).to({
			alpha: 1
		}, 200, "Linear", !0, 4400), l = d.addChild(this.add.image(150, -225, "snake")), l.anchor.set(.5, .5), l.scale.setTo(l.texture.frame.width / 110), l.visible = !1, this.add.tween(l).to({
			visible: !0
		}, 1, "Linear", !0, 4400), n = this.add.image(.2 * gameWidth, .4 * gameHeight, "snBtn"), n.anchor.set(.5, .5), n.scale.setTo(scaling.normal), this.add.tween(n.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Bounce.easeOut", !0, 4400), n.inputEnabled = !0, n.events.onInputDown.add(this.startNext, this), setTimeout(function() {
			o.stop(), p.stop()
		}, 4e3)
	},
	startNext: function() {
		game.state.start("SnakeRing")
	},
	update: function() {},
	render: function() {}
}, childrenGame.SnakeRing = function() {}, childrenGame.SnakeRing.prototype = {
	preload: function() {
		this.load.image("schoolRing", imagesPath + "school-ring.png"), this.load.image("xhRing3", imagesPath + "xh-ring3.png"), this.load.image("xmRing3", imagesPath + "xm-ring3.png"), this.load.image("treeRing", imagesPath + "tree-ring.png"), this.load.image("snTree", imagesPath + "sn-tree.png")
	},
	create: function() {
		var a, b, c, d, e;
		game.load.image("wcBg", imagesPath + "wc-bg.jpg"), game.load.image("wcXh", imagesPath + "wc-xh.png"), game.load.image("wcXmWords", imagesPath + "wc-xm-words.png"), game.load.image("wcXhWords", imagesPath + "wc-xh-words.png"), game.load.start(), this.stage.backgroundColor = "#f8e350", a = this.add.image(this.world.centerX, this.world.centerY, "schoolRing"), a.anchor.set(.5, .5), a.scale.setTo(0), this.add.tween(a).to({
			angle: -360
		}, 5e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(a.scale).to({
			x: scaling.small,
			y: scaling.small
		}, 800, Phaser.Easing.Circular.In, !0), c = this.add.image(this.world.centerX, this.world.centerY, "treeRing"), c.anchor.set(.5, .5), c.scale.setTo(gameWidth / 490), this.add.tween(c).to({
			angle: -360
		}, 4e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), b = this.add.image(this.world.centerX, this.world.centerY, "xhRing3"), b.anchor.set(.5, .5), b.scale.setTo(scaling.wheel), this.add.tween(b).to({
			angle: 360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(b.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), d = this.add.image(this.world.centerX, this.world.centerY, "xmRing3"), d.anchor.set(.5, .5), d.scale.setTo(scaling.wheel), this.add.tween(d).to({
			angle: -360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(d.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 1800), e = this.add.image(this.world.centerX, this.world.centerY, "snTree"), e.anchor.set(.5, .5), e.scale.setTo(gameWidth / 900), this.add.tween(e.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 2200), this.input.onDown.addOnce(this.goNext, this)
	},
	goNext: function() {
		game.state.start("WCPage")
	},
	update: function() {},
	render: function() {}
}, childrenGame.WCPage = function() {}, childrenGame.WCPage.prototype = {
	preload: function() {
		this.load.image("wcBg", imagesPath + "wc-bg.jpg"), this.load.image("wcXh", imagesPath + "wc-xh.png"), this.load.image("wcXmWords", imagesPath + "wc-xm-words.png"), this.load.image("wcXhWords", imagesPath + "wc-xh-words.png"), this.load.spritesheet("wcXm", imagesPath + "wc-xm.png", 200, 360)
	},
	create: function() {
		var a, b, c, d, e;
		game.load.image("wcInBg", imagesPath + "wc-in-bg.jpg"), game.load.image("wcInXh", imagesPath + "wc-xh.png"), game.load.image("sweat", imagesPath + "sweat.png"), game.load.image("wcLight", imagesPath + "wc-light.png"), game.load.image("wcShadow", imagesPath + "wc-shadow.png"), game.load.image("wcXmHh", imagesPath + "wc-xm-hehe.png"), game.load.image("wcWind", imagesPath + "wc-wind.png"), game.load.image("wcBtn", imagesPath + "wc-btn.png"), game.load.start(), this.stage.backgroundColor = "#fff", a = this.add.image(.2 * -gameWidth, 0, "wcBg"), a.scale.x = gameWidth / a.texture.frame.width * 1.4, a.scale.y = gameWidth / a.texture.frame.width * 1.4, this.add.tween(a).to({
			x: 0
		}, 200, "Linear", !0, 2800), b = this.add.image(.3 * gameWidth, .6 * gameHeight, "wcXh"), b.anchor.set(.5, .5), b.scale.setTo(gameWidth / 620), e = b.addChild(this.add.image(0, -300, "wcXhWords")), e.anchor.set(.5, .5), e.scale.setTo(e.texture.frame.width / 180), e.alpha = 0, this.add.tween(e).to({
			alpha: 1
		}, 1, "Linear", !0, 1e3), this.add.tween(e).to({
			alpha: 0
		}, 1, "Linear", !0, 2e3), this.add.tween(b).to({
			x: .4 * -gameWidth
		}, 200, "Linear", !0, 2800), this.add.tween(b).to({
			angle: -45
		}, 200, "Linear", !0, 2800), c = this.add.sprite(.55 * gameWidth, .62 * gameHeight, "wcXm"), c.anchor.set(.5, .5), c.scale.setTo(gameWidth / 400), c.animations.add("push"), this.add.tween(c).to({
			x: .85 * gameWidth
		}, 200, "Linear", !0, 2800), d = c.addChild(this.add.image(40, -240, "wcXmWords")), d.anchor.set(.5, .5), d.scale.setTo(d.texture.frame.width / 230), d.alpha = 0, this.add.tween(d).to({
			alpha: 1
		}, 1, "Linear", !0, 500), this.add.tween(d).to({
			alpha: 0
		}, 1, "Linear", !0, 2e3), setTimeout(function() {
			c.animations.play("push", 1, !1)
		}, 1800), setTimeout(this.startNext, 3800)
	},
	startNext: function() {
		game.state.start("WCIn")
	},
	update: function() {},
	render: function() {}
}, childrenGame.WCIn = function() {}, childrenGame.WCIn.prototype = {
	preload: function() {
		this.load.image("wcInBg", imagesPath + "wc-in-bg.jpg"), this.load.image("wcInXh", imagesPath + "wc-xh.png"), this.load.image("sweat", imagesPath + "sweat.png"), this.load.image("wcLight", imagesPath + "wc-light.png"), this.load.image("wcShadow", imagesPath + "wc-shadow.png"), this.load.image("wcXmHh", imagesPath + "wc-xm-hehe.png"), this.load.image("wcWind", imagesPath + "wc-wind.png"), this.load.image("wcBtn", imagesPath + "wc-btn.png")
	},
	create: function() {
		var a, b, c, d, e, f, g, h;
		game.load.image("schoolRing", imagesPath + "school-ring.png"), game.load.image("xhRing4", imagesPath + "xh-ring4.png"), game.load.image("xmRing4", imagesPath + "xm-ring4.png"), game.load.image("wcMate", imagesPath + "wc-mate.png"), game.load.start(), this.stage.backgroundColor = "#000", a = this.add.image(0, 0, "wcInBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, c = this.add.image(.12 * gameWidth, .42 * gameWidth, "sweat"), c.anchor.set(0, 0), c.scale.setTo(gameWidth / 700), this.add.tween(c).from({
			y: .39 * gameWidth,
			alpha: 0
		}, 800, "Linear", !0, 500), f = this.add.image(gameWidth, .5 * gameHeight, "wcXmHh"), f.anchor.set(1, .5), f.scale.setTo(gameWidth / 400), this.add.tween(f).from({
			x: 1.5 * gameWidth
		}, 500, "Linear", !0, 500), e = this.add.image(this.world.centerX, .94 * gameHeight, "wcShadow"), e.anchor.set(.525, .93), e.scale.setTo(gameWidth / 290), e.alpha = 0, this.add.tween(e).to({
			alpha: 1
		}, 1, "Linear", !0, 1800), b = this.add.image(this.world.centerX, .65 * gameHeight, "wcInXh"), b.anchor.set(.5, .5), b.scale.setTo(gameWidth / 520), d = this.add.image(this.world.centerX, gameHeight, "wcLight"), d.anchor.set(.5, 1), d.scale.x = gameWidth / d.texture.frame.width, d.scale.y = gameWidth / d.texture.frame.width, d.alpha = 0, this.add.tween(d).to({
			alpha: 1
		}, 1, "Linear", !0, 1800), g = this.add.image(this.world.centerX, .65 * gameHeight, "wcWind"), g.anchor.set(.5, .5), g.scale.setTo(gameWidth / 520), this.add.tween(g).from({
			x: .54 * gameWidth,
			y: .62 * gameHeight,
			alpha: 0
		}, 1e3, "Linear", !0, 1800), h = this.add.image(.75 * gameWidth, .3 * gameHeight, "wcBtn"), h.anchor.set(.5, .5), h.scale.setTo(scaling.normal), this.add.tween(h.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Bounce.easeOut", !0, 2400), h.inputEnabled = !0, h.events.onInputDown.add(this.startNext, this)
	},
	startNext: function() {
		game.state.start("WCRing")
	},
	update: function() {},
	render: function() {}
}, childrenGame.WCRing = function() {}, childrenGame.WCRing.prototype = {
	preload: function() {
		this.load.image("schoolRing", imagesPath + "school-ring.png"), this.load.image("xhRing4", imagesPath + "xh-ring4.png"), this.load.image("xmRing4", imagesPath + "xm-ring4.png"), this.load.image("wcMate", imagesPath + "wc-mate.png")
	},
	create: function() {
		var a, b, c, d;
		game.load.image("letterBg", imagesPath + "letter-bg.png"), game.load.image("wall", imagesPath + "wall.jpg"), game.load.image("ltXm1", imagesPath + "lt-xm1.png"), game.load.image("letterXm", imagesPath + "letter-xm.png"), game.load.image("letterXhBack", imagesPath + "wc-xh.png"), game.load.image("letterXmWords", imagesPath + "lt-xm-words.png"), game.load.image("readNow", imagesPath + "read-now.jpg"), game.load.image("letterBtn", imagesPath + "letter-btn.png"), game.load.start(), this.stage.backgroundColor = "#3b799b", a = this.add.image(this.world.centerX, this.world.centerY, "schoolRing"), a.anchor.set(.5, .5), a.scale.setTo(0), this.add.tween(a).to({
			angle: -360
		}, 5e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(a.scale).to({
			x: scaling.small,
			y: scaling.small
		}, 800, Phaser.Easing.Circular.In, !0), b = this.add.image(this.world.centerX, this.world.centerY, "xhRing4"), b.anchor.set(.5, .5), b.scale.setTo(scaling.wheel), this.add.tween(b).to({
			angle: -360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(b.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), c = this.add.image(this.world.centerX, this.world.centerY, "xmRing4"), c.anchor.set(.5, .5), c.scale.setTo(gameWidth / 300), this.add.tween(c).to({
			angle: 360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 1800), d = this.add.image(this.world.centerX, this.world.centerY, "wcMate"), d.anchor.set(.5, .8), d.scale.setTo(gameWidth / 700), this.add.tween(d.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 2200), this.input.onDown.addOnce(this.goNext, this)
	},
	goNext: function() {
		game.state.start("LetterPage")
	},
	update: function() {},
	render: function() {}
}, childrenGame.LetterPage = function() {}, childrenGame.LetterPage.prototype = {
	preload: function() {
		this.load.image("letterBg", imagesPath + "letter-bg.png"), this.load.image("wall", imagesPath + "wall.jpg"), this.load.image("ltXm1", imagesPath + "lt-xm1.png"), this.load.image("letterXm", imagesPath + "letter-xm.png"), this.load.image("letterXhBack", imagesPath + "wc-xh.png"), this.load.image("letterXmWords", imagesPath + "lt-xm-words.png"), this.load.image("readNow", imagesPath + "read-now.jpg"), this.load.image("letterBtn", imagesPath + "letter-btn.png")
	},
	create: function() {
		var a, b, c, d, e, f, g, h, i;
		game.load.image("schoolRing", imagesPath + "school-ring.png"), game.load.image("xhRing5", imagesPath + "xh-ring5.png"), game.load.image("xmRing5", imagesPath + "xm-ring5.png"), game.load.image("letterWords", imagesPath + "letter-words.png"), game.load.start(), this.stage.backgroundColor = "#fff", b = this.add.image(.12 * gameWidth, .36 * gameWidth, "wall"), b.anchor.set(0, 0), b.scale.setTo(gameWidth / 720), h = this.add.image(0, .9 * gameWidth, "ltXm1"), h.anchor.set(.5, .5), h.scale.setTo(gameWidth / 440), this.add.tween(h).to({
			x: .14 * gameWidth
		}, 800, "Back.easeOut", !0, 1e3, 0, !0), this.add.tween(h).to({
			x: gameWidth
		}, 200, "Linear", !0, 2e3), i = this.add.image(gameWidth, .9 * gameWidth, "letterXm"), i.anchor.set(.5, .5), i.scale.setTo(gameWidth / 950), i.angle = -30, this.add.tween(i).to({
			x: .6 * gameWidth
		}, 800, "Back.easeOut", !0, 2200, 0, !0), a = this.add.image(0, 0, "letterBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, c = this.add.image(.2 * gameWidth, .9 * gameHeight, "letterXm"), c.anchor.set(.5, 1), c.scale.setTo(gameWidth / 540), this.add.tween(c).from({
			x: .6 * gameWidth,
			y: gameWidth,
			alpha: 0
		}, 200, "Linear", !0, 3e3), this.add.tween(c.scale).from({
			x: gameWidth / 950,
			y: gameWidth / 950
		}, 200, "Linear", !0, 3e3), e = this.add.image(.5 * gameWidth, .5 * gameHeight, "letterXmWords"), e.anchor.set(.5, 1), e.scale.setTo(gameWidth / 340), this.add.tween(e).from({
			alpha: 0
		}, 1, "Linear", !0, 3400), d = this.add.image(.6 * gameWidth, gameHeight, "letterXhBack"), d.anchor.set(.5, .5), d.scale.setTo(gameWidth / 340), f = this.add.image(this.world.centerX, this.world.centerY, "readNow"), f.anchor.set(.5, .5), f.scale.x = gameWidth / f.texture.frame.width, f.scale.y = gameWidth / f.texture.frame.width, this.add.tween(f).from({
			alpha: 0
		}, 1, "Linear", !0, 4200), g = this.add.image(.8 * gameWidth, .3 * gameHeight, "letterBtn"), g.anchor.set(.5, .5), g.scale.setTo(scaling.normal), this.add.tween(g.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Bounce.easeOut", !0, 4200), g.inputEnabled = !0, g.events.onInputDown.add(this.startNext, this)
	},
	startNext: function() {
		game.state.start("LetterRing")
	},
	update: function() {},
	render: function() {}
}, childrenGame.LetterRing = function() {}, childrenGame.LetterRing.prototype = {
	preload: function() {
		this.load.image("schoolRing", imagesPath + "school-ring.png"), this.load.image("xhRing5", imagesPath + "xh-ring5.png"), this.load.image("xmRing5", imagesPath + "xm-ring5.png"), this.load.image("letterWords", imagesPath + "letter-words.png")
	},
	create: function() {
		var a, b, c, d;
		game.load.image("schoolBg", imagesPath + "school-bg.jpg"), game.load.image("endWords", imagesPath + "end-words.png"), game.load.image("school-btn", imagesPath + "school-btn.png"), game.load.image("xhHeadDance", imagesPath + "work-xh-head.png"), game.load.image("xmHeadDance", imagesPath + "xm-dance-head.png"), game.load.image("endDesk", imagesPath + "end-desk.png"), game.load.image("againBtn", imagesPath + "again-btn.png"), game.load.image("shareBtn", imagesPath + "share-btn.png"), game.load.spritesheet("xhDance", imagesPath + "xh-dance.png", 200, 113), game.load.spritesheet("xmDance", imagesPath + "xm-dance.png", 200, 120), game.load.start(), this.stage.backgroundColor = "#f29c1e", a = this.add.image(this.world.centerX, this.world.centerY, "schoolRing"), a.anchor.set(.5, .5), a.scale.setTo(0), this.add.tween(a).to({
			angle: -360
		}, 5e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(a.scale).to({
			x: scaling.small,
			y: scaling.small
		}, 800, Phaser.Easing.Circular.In, !0), b = this.add.image(this.world.centerX, this.world.centerY, "xhRing5"), b.anchor.set(.5, .5), b.scale.setTo(scaling.wheel), this.add.tween(b).to({
			angle: 360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(b.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 800), c = this.add.image(this.world.centerX, this.world.centerY, "xmRing5"), c.anchor.set(.5, .5), c.scale.setTo(scaling.wheel), this.add.tween(c).to({
			angle: -360
		}, 3e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.add.tween(c.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 1800), d = this.add.image(this.world.centerX, this.world.centerY, "letterWords"), d.anchor.set(.5, .6), d.scale.setTo(gameWidth / 600), this.add.tween(d.scale).from({
			x: 0,
			y: 0
		}, 1e3, "Back.easeOut", !0, 2200), this.input.onDown.addOnce(this.goNext, this)
	},
	goNext: function() {
		game.state.start("FinalPage")
	},
	update: function() {},
	render: function() {}
}, childrenGame.FinalPage = function() {
	this.xhDance = null, this.xmDance = null, this.xhDancing = null, this.xmDancing = null, this.hahaha = null
}, childrenGame.FinalPage.prototype = {
	preload: function() {
		this.load.image("schoolBg", imagesPath + "school-bg.jpg"), this.load.image("endWords", imagesPath + "end-words.png"), this.load.image("school-btn", imagesPath + "school-btn.png"), this.load.image("xhHeadDance", imagesPath + "work-xh-head.png"), this.load.image("xmHeadDance", imagesPath + "xm-dance-head.png"), this.load.image("endDesk", imagesPath + "end-desk.png"), this.load.image("againBtn", imagesPath + "again-btn.png"), this.load.image("shareBtn", imagesPath + "share-btn.png"), this.load.spritesheet("xhDance", imagesPath + "xh-dance.png", 200, 113), this.load.spritesheet("xmDance", imagesPath + "xm-dance.png", 200, 120), game.load.audio("hahaha", imagesPath + "hahaha.mp3")
	},
	create: function() {
		var a, b, c, d, e, f;
		this.hahaha = game.add.audio("hahaha"), this.stage.backgroundColor = "#fff", a = this.add.image(0, 0, "schoolBg"), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, f = this.add.image(.98 * gameWidth, .45 * gameWidth, "endWords"), f.anchor.set(1, 0), f.scale.setTo(scaling.normal), f.alpha = 0, this.add.tween(f).to({
				alpha: 1
			}, 500, "Linear", !0, 1e3), f.inputEnabled = !0, f.events.onInputDown.add(this.danceOk, this), this.xhDance = this.add.image(.3 * gameWidth, .86 * gameHeight, "xhDance"), this.xhDance.anchor.set(.5, 1), this.xhDance.scale.setTo(gameWidth / 400), this.xhDance.animations.add("push"), b = this.xhDance.addChild(this.add.image(-40, -170, "xhHeadDance")), b.anchor.set(.5, .5), b.scale.setTo(b.texture.frame.width / 260), this.xhDancing = this.add.tween(b).to({
				x: -30
			}, 1e3, "Bounce.easeIn", !1, 0, -1, !0), this.xmDance = this.add.image(.8 * gameWidth, .86 * gameHeight, "xmDance"), this.xmDance.anchor.set(.5, 1), this.xmDance.scale.setTo(gameWidth / 400), this.xmDance.animations.add("push"), c = this.xmDance.addChild(this.add.image(-30, -165, "xmHeadDance")), c.anchor.set(.5, .5), c.scale.setTo(b.texture.frame.width / 280),
			this.xmDancing = this.add.tween(c).to({
				x: -20
			}, 1e3, "Bounce.easeIn", !1, 0, -1, !0), a = this.add.image(0, gameHeight, "endDesk"), a.anchor.set(0, 1), a.scale.x = gameWidth / a.texture.frame.width, a.scale.y = gameWidth / a.texture.frame.width, d = this.add.image(.3 * gameWidth, .95 * gameHeight, "againBtn"), d.anchor.set(.5, 1), d.scale.setTo(scaling.normal), d.inputEnabled = !0, d.events.onInputDown.add(this.startAgain, this), e = this.add.image(.75 * gameWidth, .95 * gameHeight, "shareBtn"), e.anchor.set(.5, 1), e.scale.setTo(scaling.normal), e.inputEnabled = !0, e.events.onInputDown.add(this.shareNow, this)
	},
	danceOk: function() {
		ringBgm.volume = .5, this.hahaha.play(), this.xhDance.animations.play("push", 1, !0), this.xmDance.animations.play("push", 1, !0), this.xhDancing.start(), this.xmDancing.start()
	},
	startAgain: function() {
		window.location.reload()
	},
	shareNow: function() {
		sharePage.setAttribute("style", "display:block;")
	},
	update: function() {},
	render: function() {}
}, game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, "game"), game.state.add("StartPage", childrenGame.StartPage), game.state.add("SchoolPage", childrenGame.SchoolPage), game.state.add("SchoolRing", childrenGame.SchoolRing), game.state.add("WorkPage", childrenGame.WorkPage), game.state.add("WorkRing", childrenGame.WorkRing), game.state.add("SnakePage", childrenGame.SnakePage), game.state.add("SnakeRing", childrenGame.SnakeRing), game.state.add("WCPage", childrenGame.WCPage), game.state.add("WCIn", childrenGame.WCIn), game.state.add("WCRing", childrenGame.WCRing), game.state.add("LetterPage", childrenGame.LetterPage), game.state.add("LetterRing", childrenGame.LetterRing), game.state.add("FinalPage", childrenGame.FinalPage), game.state.start("StartPage"); /*  |xGv00|aa3d45ed6156a901600ab75b88b76cb7 */