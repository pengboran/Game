window.__justep.__ResourceEngine.loadCss([{url: '/$v13be8ebc76ce4d5187c7c84e19e95e5e$lzh_CN$sdesktop$d/UI2/system/components/comp.min.css', include: '$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/form/css/form,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/accordion/css/accordion,$model/UI2/system/components/justep/common/css/scrollable,$model/UI2/system/components/bootstrap/pager/css/pager,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/bootstrap/navs/css/navs,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/bootstrap/navbar/css/navbar,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/bootstrap/dialog/css/dialog,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/bootstrap/tabs/css/tabs,$model/UI2/system/components/bootstrap/pagination/css/pagination'},{url: '/$v00b1582be387422ab892d48737cdd39a$lzh_CN$sdesktop$d/UI2/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/$v69132aee9e6748fb921f6ae6e7412457$lzh_CN$sdesktop$d/UI2/system/components/comp2.min.js','/$v7bc627534ba24bd099aae6f4a52072b0$lzh_CN$sdesktop$d/UI2/system/components/comp.min.js','/$vbafd9cc7534a4c54a3e5560fb33fb0a4$lzh_CN$sdesktop$d/UI2/system/common.min.js','/$v79ede2f7de544d67bfde33344d36ae4d$lzh_CN$sdesktop$d/UI2/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/WeX5Demo/mainActivity'); 
require('css!$model/UI2/WeX5Demo/mainActivity').load();
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='b61b743d323e9389215eb13ad007c04f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImg1":{"define":"fImg1","label":"图片地址1","name":"fImg1","relation":"fImg1","type":"String"},"fImg2":{"define":"fImg2","label":"图片地址2","name":"fImg2","relation":"fImg2","type":"String"},"fImg3":{"define":"fImg3","label":"图片地址3","name":"fImg3","relation":"fImg3","type":"String"},"fImg4":{"define":"fImg4","label":"图片地址4","name":"fImg4","relation":"fImg4","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"dataCustomRefresh"},"idColumn":"fImg1","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImgUrl":{"define":"fImgUrl","label":"图片","name":"fImgUrl","relation":"fImgUrl","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"imgDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"imgData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fImg":{"define":"fImg","name":"fImg","relation":"fImg","type":"String"},"fTitle":{"define":"fTitle","name":"fTitle","relation":"fTitle","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"menuDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"menuData"});
}}); 
return __result;});
