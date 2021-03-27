describe("dpc-130400:RegisterAppliance:P1:Verify-valid-claimcode-registered.", function() {

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

    it("dpc-130400", function() {

        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.tenant_without_storage_uname,envConfig_Json.tenant_without_storage_pass);

        //Verify register valid claim code.
        registerapplianceUtils.verifyRegisterValidClaimCode();

    });

    afterEach(function()
    {
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });
});