describe("dpc-130577:StorageManagement:P2:Verify Refreshing the page by refresh page salesops", function() {
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

    it("dpc-130577", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.salesOps_uname,login_creds.salesOps_pass);

        //Verify Dashboard landing post login
        storageMgtUtils.verifyRefreshButtonFunctionality();
    });
});
