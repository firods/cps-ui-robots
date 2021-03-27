/*jshint -W117 */

describe("dpc-129894:Login:P2-Statics-elements-on-the-page", function() {
    var frameworkUtils, loginUtils,dashboardUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-129894", function() {

         loginUtils.verifyStaticelements();
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});