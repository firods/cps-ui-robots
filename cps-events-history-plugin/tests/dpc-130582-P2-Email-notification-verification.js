/*
    Author: Saurabh Patwardhan
 */

describe("dpc-130582:EHN:P1:Email notification verification", function() {
    var frameworkUtils, loginUtils, dashboardUtils, edit_profileUtils;
    var framework_Utils = require("../../cp-utils/framework_utils.js");
    var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
    var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
    var dpc_130582 = require("../../cps-events-history-plugin/testdata/dpc-129582.json");
    var login_creds = require("../../envConfig.json");
    var events_history_utils = require("../utils/events_history_utils.js");


    beforeEach(function()
    {
        console.log("In beforeEach");
        frameworkUtils = new framework_Utils();
        loginUtils = new login_Utils();
        dashboardUtils = new dashboard_utils();
        events_historyUtils = new events_history_utils();
        frameworkUtils.heatUp();
    });

    afterEach(function()
    {
        console.log("In afterEach");
        frameworkUtils.coolDown(this.suite.getFullName().split(":",1)[0],this.results_.failedCount);
    });

    it("dpc-130582", function() {
        //Login to Cloud Portal
        loginUtils.cpsLogin(login_creds.salesOps_uname,login_creds.salesOps_pass);

        // verify email for add/edit/delete actions.
        events_historyUtils.emailVerifications(dpc_130582.email);

    });
});