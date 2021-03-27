/*
 author : Saurabh Patwardhan
 */


describe("dpc-130542:Edit Profile:P1:Update Account (with or without change)", function() {
    var frameworkUtils, loginUtils, dashboardUtils, edit_profileUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var edit_profile_utils = require("../../cps-edit-profile-plugin/utils/edit_profile_utils.js");
    var login_creds = require("../../envConfig.json");

    beforeEach(function()
    {
        console.log("In beforeEach");
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        edit_profileUtils = new edit_profile_utils();
        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130542", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.salesOps_uname,login_creds.salesOps_pass);

        //Update Customer Profile and verify success message
        edit_profileUtils.updateCustomerProfile("Salesops","a@a.com");
    });
});
