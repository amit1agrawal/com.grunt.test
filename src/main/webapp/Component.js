jQuery.sap.declare("com.grunt.test.Component");
jQuery.sap.require("sap.ui.core.UIComponent");

sap.ui.core.UIComponent.extend("com.grunt.test.Component", {
    metadata : {
    	"manifest": "json"
    },

    init : function() {
	    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

	    this._setDeviceModel();
	    this.getRouter().initialize();
    },

    _setDeviceModel : function() {
	    var oDeviceModel = new sap.ui.model.json.JSONModel({
	        isTouch : sap.ui.Device.support.touch,
	        isNoTouch : !sap.ui.Device.support.touch,
	        isPhone : sap.ui.Device.system.phone,
	        isNoPhone : !sap.ui.Device.system.phone,
	        listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
	        listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
	    });
	    oDeviceModel.setDefaultBindingMode("OneWay");
	    this.setModel(oDeviceModel, "device");
    }
});
