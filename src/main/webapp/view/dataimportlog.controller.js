jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.m.MessageBox");


sap.ui.core.mvc.Controller.extend("com.grunt.test.view.dataimportlog", {
	_oResourceBundle: null,
	_oComponent: null,
	_oSortDialog: null,
	_oTable: null,
	_oUrl: null,
	model: null,

	onInit: function() {
		this._oComponent = this.getOwnerComponent();
		this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
		this.oModel = this._oComponent.getModel();
	},

	onNavBack: function() {
		window.history.go(-1);
	},

	onBtnRefresh: function() {
		var oTable = this._oTable;
		oTable.getModel().refresh(false);
	},

	onBtnSort: function() {

	},

	onSearchLiveChange: function(oEvent) {

	},



	_sortBinding: function(oBinding, sPath, bDescending) {
		oBinding.sort(new sap.ui.model.Sorter(sPath, bDescending));
	},

	rowSelected: function() {

	},

	handleDeletePress: function() {

	}

	getTimeStampFilter: function() {

	}

});
