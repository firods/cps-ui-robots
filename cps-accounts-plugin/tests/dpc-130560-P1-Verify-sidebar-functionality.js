/*
    Author: Saurabh Patwardhan
 */

describe("dpc-130560:Dashboard:P1-Verify-sidebar-functionality", function() {
    var frameworkUtils, loginUtils, dashboardUtils, edit_profileUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var login_creds = require("../../envConfig.json");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        console.log("In beforeEach");
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130560", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.tenant_without_storage_uname_temp_dpc_130560,login_creds.tenant_without_storage_pass);

        //Verify Sidebar Options
        dashboardUtils.verifySideBarOptionSelectionForTenant();

    });
});