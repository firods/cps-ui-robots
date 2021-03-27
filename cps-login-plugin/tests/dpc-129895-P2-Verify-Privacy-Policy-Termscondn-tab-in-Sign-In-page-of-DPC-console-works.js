/*jshint -W117 */

describe("dpc-129895:Login:P2-Verify-Privacy-Policy-Termscondn-tab-in-Sign-In-page-of-DPC-console-works", function() {
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

    it("dpc-129895", function() {

        loginUtils.verifyTermsandCondtions();
        loginUtils.verifyPrivacyPolicy();
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});