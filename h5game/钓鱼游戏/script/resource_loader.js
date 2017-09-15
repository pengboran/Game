var publicResourceLoader = null;
!function () {
    function a(a) {
        this.css = a.css,
            this.scripts = a.scripts,
            this.head = document.getElementsByTagName("head")[0],
            this.loadCSS(),
            this.loadScript()
    }

    var b, c, d, e = ["http://h5.static.myappgame.com/common/jquery.js", "http://h5.static.myappgame.com/common/WeixinApi-1.0.0.js", "http://h5.static.myappgame.com/common/common-1.0.0.min.js"],
        f = document.domain.indexOf("h5.static.myappgame"), g = document.domain.indexOf("h5.appgame.com");
        
    if(f == -1 && g == -1) {
      window.location.href = 'http://h5.appgame.com';  
    }    
        
    if (f != -1 || g != -1) {
        e.push("http://h5.static.myappgame.com/common/ad/ad.js");
        e.push("http://h5.static.myappgame.com/common/md5.js");
        e.push("http://h5.static.myappgame.com/common/h5gameMore.min.js")
    }
    a.prototype = {
        construct: a,
        loadCSS: function () {
            this.css.forEach(function (a) {
                document.write(' <link href="' + a + '" rel="stylesheet" />')
            })
        },
        loadScript: function () {
            this.scripts.forEach(function (a) {
                document.write('<script type="text/javascript" src="' + a + '"><\/script>')
            })
        }
    },
        b = window.h5IsDebugger,
        c = "?v=150726",
        d = function () {
            return void 0 === b || null === b || b ? c : ""
        },
        publicResourceLoader = new a({
            css: [],
            scripts: e
        })
}();