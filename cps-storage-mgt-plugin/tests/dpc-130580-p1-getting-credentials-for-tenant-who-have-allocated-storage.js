/*
    Author: Saurabh Patwardhan
 */

describe("dpc-130580:StorageManagement:P1:Getting credentials for tenant who have allocated storage", function() {
    var frameworkUtils, loginUtils, storageMgtUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var storage_mgt_utils = require("../utils/storage_mgt_utils.js");
    var login_creds = require("../../envConfig.json");

    beforeEach(function()
    {
        console.log("In beforeEach");
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        storageMgtUtils = new storage_mgt_utils();
        //edit_profileUtils = new edit_profile_utils();
        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130580", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.tenant_with_storage_uname,login_creds.tenant_with_storage_pass);

        //Verify Dashboard landing post login
        storageMgtUtils.verifyCredentials("phqfthul@dpc.emc.com","ZvzGbtM43Sp6QWGYbyRH8H+Ur6jYnXAds9uptVnF");
    });
});