JSON数据

1、data.json，最下方的图片链接
fImg1      图片1     String
fImg2      图片2     String
fImg3      图片3     String
fImg4      图片4     String

2、imgData.json，滚动图片
id         id        String
fImgUrl    图片                 String

3、menuData.json，快捷操作
id         id        String
fTitle     标题                 String
fImg       图片                 String


以上json中加入fURL字段，可打开url页面，代码如下：
justep.Portal.openWindow(require.toUrl(url), {title: "标题"});