/**
 * Created by saurabh on 26/11/15.
 */
describe("dpc-130267:Pagination:P2: prev button should be disable when user is on the first page", function() {

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

    it("dpc-130267", function() {

        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        //Vefiry if Previous button is disabled if user is on the first page for EHN plugin
        paginationUtils.verifyPrevIsDisableEHN();

        //Vefiry if Previous button is disabled if user is on the first page for Customer Accounts plugin
        paginationUtils.verifyPrevIsDisableCustomerAccounts();


    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});