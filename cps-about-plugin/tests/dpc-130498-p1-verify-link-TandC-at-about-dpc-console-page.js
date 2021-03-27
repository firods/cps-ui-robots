

describe("dpc-130498:AboutCloudPortal:P1:Verify link 'Terms & Conditions' at 'About DPC Console' page",function() {

    var loginUtils, aboutUtils, frameworkUtils;

    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var about_Utils = require("../../cps-about-plugin/utils/about_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        aboutUtils = new about_Utils();
        //Open the CPS browser
        frameworkUtils.heatUp();
    });
    it("dpc-130498", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);

        aboutUtils.verifyTermsAndConditionsLink();

    });

    afterEach(function()
    {
        //Close CPS Browser
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });


});

