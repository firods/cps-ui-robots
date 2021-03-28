describe("dpc-130581:StorageManagement:P2:Verify Refreshing the page by refresh page-Tenant", function() {
    var frameworkUtils, loginUtils, storageMgtUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var storage_mgt_utils = require("../utils/storage_mgt_utils.js");
    var login_creds = require("../../envConfig.json");

    beforeEach(function()
    {
        console.log("In beforeEach");
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        storageMgtUtils = new storage_mgt_utils();

        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130581", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.tenant_with_storage_uname,login_creds.tenant_with_storage_pass);

        //Verify Refresh functionality
        storageMgtUtils.verifyRefreshButtonFunctionality();
    });
});
