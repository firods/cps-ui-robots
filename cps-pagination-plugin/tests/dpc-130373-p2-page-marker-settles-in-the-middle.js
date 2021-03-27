/**
 * Created by saurabh on 30/11/15.
 */
describe("dpc-130373:Pagination:P2:page marker settles in the middle", function() {

    var frameworkUtils, loginUtils, paginationUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var pagination_Utils = require("../../cps-pagination-plugin/utils/pagination_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        paginationUtils = new pagination_Utils();

        frameworkUtils.heatUp();
    });

    it("dpc-130373", function() {

        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        //Verify if page marker settles in the middle for EHN plugin
        paginationUtils.verifyPageMarkerEHN();

        //Verify if page marker settles in the middle for Customer Accounts plugin
        paginationUtils.verifyPageMarkerCustomerAccounts();

    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});