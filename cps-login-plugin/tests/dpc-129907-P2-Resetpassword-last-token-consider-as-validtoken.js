/*jshint -W117 */

describe("dpc-129907:Login:P2-Resetpassword-last-token-consider-as-validtoken", function() {
    var frameworkUtils, loginUtils,dashBoardUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../utils/login_utils.js");
    var dashBoard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashBoardUtils = new dashBoard_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-129907", function() {

        loginUtils.verifyLastvalidtoken();
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});