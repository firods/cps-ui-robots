describe("dpc-130369:Pagination:P3: Record count", function() {

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
        loginUtils = new login_Utils();
        frameworkUtils.heatUp();
    });

    it("dpc-130369", function() {

        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        //verify selected page no highlighted.
        paginationUtils.verifyRecordcount();
    });

    afterEach(function()
    {
       frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});