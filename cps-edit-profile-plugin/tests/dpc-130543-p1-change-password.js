/*
 author : Saurabh Patwardhan
 */

describe("dpc-130543:EditProfile:P1:Change Password", function() {
    var frameworkUtils, loginUtils, dashboardUtils, edit_profileUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var edit_profile_utils = require("../../cps-edit-profile-plugin/utils/edit_profile_utils.js");

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

    it("dpc-130543", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin("saurabhpatwardhan@outlook.com","Admin@123");

        //Update Customer Profile and verify success message
        edit_profileUtils.changeAccountPassword("Admin@123","Admin@123");
    });
});