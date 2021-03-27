
describe("dpc-130497:AboutCloudPortal:P1:Verify link 'Privacy Policy' at 'About DPC Console' page", function() {

    var frameworkUtils, loginUtils, aboutUtils;

    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var about_Utils = require("../../cps-about-plugin/utils/about_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        aboutUtils = new about_Utils();

        frameworkUtils.heatUp();
    });

    it("dpc-130497", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        //Verify  Privacy Policy Link
        aboutUtils.verifyPolicyLink();       /*Ketaki*/

    });

    afterEach(function()
    {
        console.log(this.results_.failedCount);
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});