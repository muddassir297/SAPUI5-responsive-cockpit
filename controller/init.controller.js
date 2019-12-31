sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  'sap/m/Popover',
  'sap/m/Button',
  'sap/m/library'
], function (jQuery, Controller, Popover, JSONModel, ResponsivePopover, Button, mobileLibrary) {
  "use strict";

  var ButtonType = sap.m.ButtonType,
		PlacementType = sap.m.PlacementType;

  var Controller = Controller.extend("UI5FioriForTools.controller.init", {
  
    onInit: function () { },
    onUserNamePress: function (event) {
			var popover = new sap.m.Popover({
				showHeader: false,
				placement: PlacementType.Bottom,
				content:[
					new sap.m.Button({
						text: 'Feedback',
						type: ButtonType.Transparent
					}),
					new sap.m.Button({
						text: 'Help',
						type: ButtonType.Transparent
					}),
					new sap.m.Button({
						text: 'Logout',
						type: ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		}
  });
  return Controller;
});
