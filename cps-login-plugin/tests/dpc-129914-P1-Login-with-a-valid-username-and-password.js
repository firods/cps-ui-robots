/*jshint -W117 */

describe("dpc-129914:Login:P1-Login-with-a-valid-username-and-password", function() {
    var frameworkUtils, loginUtils,dashBoardUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../utils/login_utils.js");
    var dashBoard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashBoardUtils = new dashBoard_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-129914", function() {

        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});