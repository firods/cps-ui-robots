/*jshint -W117 */

describe("ca-ua01:P1::Create end user account", function() {
    var frameworkUtils, loginUtils,dashboardUtils,cloudarrayUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var cloudarray_utils = require("../../cps-cloudarray-plugin/utils/cloudarray_utils.js");

    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        cloudarrayUtils = new cloudarray_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-c42320", function() {

        // login to cloud portal.
        loginUtils.cpsLogin(envConfig_Json.cloudArray_uname,envConfig_Json.cloudArray_pass);

        //create new customer with feature access.
        cloudarrayUtils.createEndUserAccount();
    });

    afterEach(function()
    {
        //frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});