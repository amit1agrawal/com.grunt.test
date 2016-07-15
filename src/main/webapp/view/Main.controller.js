

sap.ui.core.mvc.Controller.extend("com.grunt.test.view.Main", {
    _oResourceBundle : null,
    _oComponent : null,

    onInit : function() {
	    this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView()));
	    this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
    }
});
