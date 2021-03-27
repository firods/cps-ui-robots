describe("dpc-130408:RegisterAppliance:P2:Verify-form-gets-reset-after-claimcode-submit.", function() {

    var frameworkUtils, loginUtils, registerapplianceUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var register_applianceUtils = require("../../cps-register-appliance-plugin/utils/register_appliance_utils.js");
    var envConfig_Json = require("../../envConfig.json");

    beforeEach(function()
    {
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        registerapplianceUtils = new register_applianceUtils();
        frameworkUtils.heatUp();
    });

    it("dpc-130408", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.tenant_without_storage_uname,envConfig_Json.tenant_without_storage_pass);

        //Verify  Form reset after claim code submit.
        registerapplianceUtils.verifyFormresetAfterClaimcodeSubmit();
    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});