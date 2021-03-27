describe("dpc-129898:Login:P2-Invalid-login-data", function() {
    var frameworkUtils, loginUtils,dashboardUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var login_json = require("../testdata/dpc-129898.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-129898", function () {

        for (var i = 0; i< login_json.InvalidData.length; i++) {

            loginUtils.verifyIncorrectcpsLogin(login_json.InvalidData[i].Username,login_json.InvalidData[i].Password,login_json.InvalidData[i].Message);
        }
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});