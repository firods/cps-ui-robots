describe("dpc-130576 : StorageManagement:P2: Adding new customer through SM using Activate Customer button", function() {
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
        //edit_profileUtils = new edit_profile_utils();
        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130576:Expected to fail as SalesOps creds are not working with Storage Mgt", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.salesOps_uname,login_creds.salesOps_pass);

        //Verify Dashboard landing post login
        storageMgtUtils.verifyAddingCustomerThroughActivateCustomer();
    });
});
