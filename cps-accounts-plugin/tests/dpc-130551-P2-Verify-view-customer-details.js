/*jshint -W117 */

describe("dpc-130551:Accounts:P2:Verify-view-customer-details", function() {
    var frameworkUtils, loginUtils,dashboardUtils,customeraccountsUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var customeraccounts_utils = require("../../cps-accounts-plugin/utils/accounts_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        customeraccountsUtils = new customeraccounts_utils();
        frameworkUtils.heatUp();
    });

    it("dpc-130551", function() {

        //login to cloud portal.
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        // verify view customer details using view button.
        customeraccountsUtils.verifyviewcustomerdetails();
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});