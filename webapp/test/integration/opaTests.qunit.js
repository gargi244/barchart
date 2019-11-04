/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"barchartpr/barchartpr/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});