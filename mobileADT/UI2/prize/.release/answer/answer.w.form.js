define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/select/checkboxGroup');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/prize/answer'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEFbmUb';
	this._flag_='5102c64f001b0159121724bac5d18f06';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"isSuccess":{"define":"isSuccess","name":"isSuccess","relation":"isSuccess","type":"Boolean"}},"directDelete":false,"events":{},"idColumn":"isSuccess","limit":20,"xid":"dTemp"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAnswer":{"define":"EXPRESS","name":"fAnswer","relation":"EXPRESS","type":"String"},"fBatch":{"define":"fBatch","label":"fBatch","name":"fBatch","relation":"fBatch","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fType":{"define":"fType","label":"fType","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryQuestion","saveAction":"saveQuestion","tableName":"question","url":"/justep/prize","xid":"dQuestion"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fQuestionID":{"define":"fQuestionID","label":"fQuestionID","name":"fQuestionID","relation":"fQuestionID","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"master":{"relation":"fQuestionID","xid":"dQuestion"},"queryAction":"queryOptions","saveAction":"saveOptions","tableName":"options","url":"/justep/prize","xid":"dOption"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAwardFlag":{"define":"fAwardFlag","label":"fAwardFlag","name":"fAwardFlag","relation":"fAwardFlag","type":"String"},"fBatch":{"define":"fBatch","label":"fBatch","name":"fBatch","relation":"fBatch","type":"String"},"fCompany":{"define":"fCompany","label":"fCompany","name":"fCompany","relation":"fCompany","type":"String"},"fEmail":{"define":"fEmail","label":"fEmail","name":"fEmail","relation":"fEmail","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fPhone":{"define":"fPhone","label":"fPhone","name":"fPhone","relation":"fPhone","type":"String"},"fPrize1":{"define":"fPrize1","label":"fPrize1","name":"fPrize1","relation":"fPrize1","type":"String"},"fPrize2":{"define":"fPrize2","label":"fPrize2","name":"fPrize2","relation":"fPrize2","type":"String"},"fPrize3":{"define":"fPrize3","label":"fPrize3","name":"fPrize3","relation":"fPrize3","type":"String"},"fWeixinID":{"define":"fWeixinID","label":"fWeixinID","name":"fWeixinID","relation":"fWeixinID","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryUser","saveAction":"saveUser","tableName":"user","url":"/justep/prize","xid":"dUser"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fOptionID":{"define":"fOptionID","label":"fOptionID","name":"fOptionID","relation":"fOptionID","type":"String"},"fQuestionID":{"define":"fQuestionID","label":"fQuestionID","name":"fQuestionID","relation":"fQuestionID","type":"String"},"fUserID":{"define":"fUserID","label":"fUserID","name":"fUserID","relation":"fUserID","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"master":{"relation":"fUserID","xid":"dUser"},"queryAction":"queryAnswer","saveAction":"saveAnswer","tableName":"answer","url":"/justep/prize","xid":"dAnswer"});
}}); 
return __result;});