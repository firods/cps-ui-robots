/**
 * Created by saurabh on 27/11/15.
 */
describe("dpc-130516:Pagination:P1:Navigation to any page randomly should list the records from that page", function() {

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

    it("dpc-130516", function() {

        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        //Verify if navigation to any page list records from that page for EHN plugin
        paginationUtils.verifyNavigationEHN();

        //Verify if navigation to any page list records from that page for Customer Accounts plugin
        paginationUtils.verifyNavigationCustomerAccounts();

    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});