define(function(require){
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/button/button');
var __parent0=require('$model/UI2/system/lib/base/modelBase'); 
var __result = __parent0.extend({
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