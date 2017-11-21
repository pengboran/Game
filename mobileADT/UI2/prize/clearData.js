define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.btnClearClick = function(event){
		var batch = this.comp("inputBatch").val();
		justep.Baas.sendRequest({
			"url" : "/justep/prize",
			"action" : "clearData",
			"async" : false,
			"params" : {
				"batch" : batch
			},
			"success" : function(resultData) {
				justep.Util.hint("OK");
			}
		});
	};

	return Model;
});