jQuery.sap.declare("com.grunt.test.util.formatter");

com.grunt.test.util.formatter = {

	statusImportMode: function(value) {
		var map = {
			0: this.getModel("i18n").getResourceBundle().getText("$Offline"),
			1: this.getModel("i18n").getResourceBundle().getText("$Online")
		};

		return (value !== undefined && map[value]) ? map[value] : this.getModel("i18n").getResourceBundle().getText("$None");
	},

	statusSeverity: function(value) {
		var map = {
			1: this.getModel("i18n").getResourceBundle().getText("$Information"),
			2: this.getModel("i18n").getResourceBundle().getText("$Warning"),
			3: this.getModel("i18n").getResourceBundle().getText("$Error")
		};

		return (value !== undefined && map[value]) ? map[value] : this.getModel("i18n").getResourceBundle().getText("$None");
	},

	stateSeverity: function(value) {
		var map = {
			1: this.getModel("i18n").getResourceBundle().getText("None"),
			2: this.getModel("i18n").getResourceBundle().getText("$Warning"),
			3: this.getModel("i18n").getResourceBundle().getText("$Error")
		};
		return (value !== undefined && map[value]) ? map[value] : this.getModel("i18n").getResourceBundle().getText("$None");
	},

	reverseStatusImportMode: function(value, oResourceBundle) {
		switch (value.toLowerCase()) {
			case oResourceBundle.getText("$Offline").toLowerCase():
				return 0;
			case oResourceBundle.getText("$Online").toLowerCase():
				return 1;
			default:
				return value;
		}
	},

	reverseStatusSeverity: function(value, oResourceBundle) {
		switch (value.toLowerCase()) {
			case oResourceBundle.getText("$Information").toLowerCase():
				return 1;
			case oResourceBundle.getText("$Warning").toLowerCase():
				return 2;
			case oResourceBundle.getText("$Error").toLowerCase():
				return 3;
			default:
				return value;
		}
	}
};
