/**
 * Functions and objects declarations for Login Dialogue and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */
var frameworkUtils,dashBoardUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashBoard_Utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
var envConfig_Json = require("../../envConfig.json");
frameworkUtils = new framework_Utils();
dashBoardUtils = new dashBoard_Utils();

// valid email-id to receive emails.
var valid_email = "shrikant.firodiya@emc.com";

var cpsLoginPage = ( function() {
    "use strict";

    function cpsLoginPage() {
        this.txt_userName = element(By.model("vm.user.username"));
        this.txt_userPassword = element(By.model("vm.user.password"));
        this.btn_signIn =  element(By.xpath("//button/span[contains(text(),'Sign In')]"));

        this.btn_close = element(By.xpath("//div[@class='close-button']"));
        this.link_terms_conditions = element(By.xpath("//a[contains(text(),'Terms & Conditions')]"));
        this.link_privacy_policy = element(By.xpath("//a[contains(text(),'Privacy policy')]"));
        this.title_terms_conditions = element(By.xpath("//h1[contains(text(),'ECS Online Services Agreement')]"));
        this.title_privacy_policy = element(By.xpath("//h1[contains(text(),'EMC Corporation Privacy Statement')]"));
        this.title_signin = element(By.xpath("//h3[contains(text(),'Sign In')]"));
        this.link_forgotpassword = element(By.xpath("//a[contains(text(),'Forgot Password?')]"));
        this.link_copyright = element(By.xpath("//span[contains(text(),'EMC Corporation.')]"));
        this.error_email = element(By.xpath("//div[contains(text(),'Please specify valid email id.')]"));
        this.error_password = element(By.xpath("//div[contains(text(),'Please specify valid password.')]"));
        this.error_email_pass = element(By.xpath("//div[contains(text(),'The email address or password you entered does not match our records. Please try again.')]"));
        this.txt_forgot_pass = element(By.model("vm.email"));
        this.btn_reset_pass = element(By.className("pull-right"));
        this.txt_new_pass = element(By.model("vm.newPassword"));
        this.btn_setas_pass = element(By.xpath("//button[@class='btn btn-primary']"));
        this.link_continue_cloud_portal = element(By.xpath("//a[contains(text(),'Continue to Cloud Portal')]"));
        this.btn_profileHeader = element(by.xpath("//button[@class='btn btn-link enabled pull-right']"));
        this.btn_logout = element(by.xpath("//span[contains(text(),'Sign Out')]"));
        this.error_token_exp = element(By.xpath("//p/span[contains(text(),'Token is invalid or has expired. Please try resetting your password again.')]"));
        this.error_blank_pass = element(By.xpath("//div[contains(text(),'Please specify valid password')]"));
        this.link_return_signin = element(By.xpath("//a[contains(text(),'Return to Sign In')]"));

        this.error_eight_char = element(By.xpath("//div[contains(text(),'Password must be at least 8 characters.')]"));
        this.error_uppercase = element(By.xpath("//div[contains(text(),'Password must include at least 1 uppercase character.')]"));
        this.error_number = element(By.xpath("//div[contains(text(),'Password must include at least 1 number.')]"));
        this.error_special_char = element(By.xpath("//div[contains(text(),'Password must include at least 1 special character.')]"));
        this.chkbox_showpassword = element(By.id("show-password-checkbox"));
        this.txt_confirmpassword = element(By.model("vm.confirmNewPassword"));
        this.txt_redcolor = element(By.xpath("//div/i[@class='form-control-feedback glyphicon glyphicon-lock invalid-input-icon']"));
        this.txt_greencolor = element(By.xpath("//div/i[@class='form-control-feedback glyphicon glyphicon-lock']"));

    }

    /**
     * Cloud portal login function
     * it accepts 2 parameters of String type
     * @param userName User's registered email.
     * @param password User's Password.
     */
    cpsLoginPage.prototype.cpsLogin = function(userName, password){
        this.txt_userName.clear().sendKeys(userName);
        this.txt_userPassword.clear().sendKeys(password);
        this.btn_signIn.click();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        //expect(dashBoardUtils.lbl_WelcomeTo.isPresent()).toBe(true);
    };

    /**
     * Cloud portal verify incorrect login function
     * it accepts 2 parameters of String type
     * @param userName User's registered email.
     * @param password User's Password.
     */
    cpsLoginPage.prototype.verifyIncorrectcpsLogin = function(userName, password,message){
        this.txt_userName.clear().sendKeys(userName);
        this.txt_userPassword.clear().sendKeys(password);
        this.btn_signIn.click();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();

		
		

        if(message==="Please specify valid email id.") {
            expect(this.error_email.getText()).toEqual(message);
        } else if(message==="Please specify password.") {
            expect(this.error_password.getText()).toEqual(message);
        }else if(message==="The email address or password you entered does not match our records. Please try again.") {
            expect(this.error_email_pass.getText()).toEqual(message);
        }
    };

    /**
     * Verify terms and condtions link.
     */
    cpsLoginPage.prototype.verifyTermsandCondtions = function(){
        browser.get("https://console.int.dpccloud.com/#/terms-conditions");
        browser.driver.navigate().refresh();
        frameworkUtils.waitForElement();
        expect(this.title_terms_conditions.isPresent()).toBe(true);
        this.btn_close.click();
        frameworkUtils.waitForElement();
    };
    /**
     * Verify Privacy and policy link.
     */
    cpsLoginPage.prototype.verifyPrivacyPolicy = function(){
        browser.get("https://console.int.dpccloud.com/#/privacy-policy");
        browser.driver.navigate().refresh();
        frameworkUtils.waitForElement();
        expect(this.title_privacy_policy.isPresent()).toBe(true);
        this.btn_close.click();
        frameworkUtils.waitForElement();
    };
    /**
     * Verify Static elements.
     */
    cpsLoginPage.prototype.verifyStaticelements = function(){
        frameworkUtils.waitForElement();

        expect(this.link_terms_conditions.isDisplayed()).toBeTruthy();
        expect(this.link_privacy_policy.isDisplayed()).toBeTruthy();
        expect(this.title_signin.isDisplayed()).toBeTruthy();
        expect(this.link_forgotpassword.isDisplayed()).toBeTruthy();
        expect(this.link_copyright.isDisplayed()).toBeTruthy();
    };
    /**
     * Cloud portal login function
     * it accepts zero parameters of String type
     */
    cpsLoginPage.prototype.cpsLogout = function () {
        frameworkUtils.waitForElement();
        this.btn_profileHeader.click();
        if(!envConfig_Json.mobile_emulation)
        {
            this.btn_logout.click();
        }
        else
        {
            browser.driver.executeScript("document.getElementById('logoutButton').click()");
        }

    };

    /**
     * Cloud portal login function
     * it accepts zero parameters of String type
     */
    cpsLoginPage.prototype.verifyLastvalidtoken = function () {

        this.link_forgotpassword.click();
        frameworkUtils.waitForElement();

        // enter email id to receive password reset email.
        this.txt_forgot_pass.sendKeys(valid_email);
        this.btn_reset_pass.click();
        frameworkUtils.waitForElement();
        this.link_return_signin.click();

        frameworkUtils.waitForElement();
        this.link_forgotpassword.click();

        frameworkUtils.waitForElement();
        // enter email id to receive second password reset email.
        this.txt_forgot_pass.sendKeys(valid_email);
        this.btn_reset_pass.click();

        frameworkUtils.waitForElement();
        // verify email recive in mail-box.

        // open emc web-outlook.
        browser.driver.get(envConfig_Json.emc_weboutlook_url);

        // login to emc-web outlook.
        browser.driver.findElement(by.id('username')).sendKeys(envConfig_Json.emc_weboutlook_uname);
        browser.driver.findElement(by.id('password')).sendKeys(envConfig_Json.emc_weboutlook_pass);
        browser.driver.findElement(by.className('btn')).click();

        frameworkUtils.waitForElement();

        // Open second latest email
        browser.driver.findElement(by.xpath("//*[@id='frm']/table/tbody/tr[2]/td[3]/table/tbody/tr[2]/td/div/table/tbody/tr[4]/td[6]/h1/a")).click();
        frameworkUtils.waitForElement();

        // Click on Set New Password button.
        browser.driver.findElement(By.xpath("//td/p/a[contains(text(),'New Password')]")).click();

        // Navigate to new tab
        var secondWindowHandle,firstWindowHandle;
        browser.getAllWindowHandles().then(function (handles) {
            secondWindowHandle = handles[1];
            firstWindowHandle = handles[0];

            browser.switchTo().window(firstWindowHandle).then(function () { //the focus moves on new tab
            });
            browser.driver.findElement(By.id("lo")).click();
            browser.close(firstWindowHandle);
            browser.switchTo().window(secondWindowHandle).then(function () { //the focus moves on new tab
            });
        });


        frameworkUtils.waitForElement();
        // Verify token expire error message.
        expect(this.error_token_exp.isDisplayed()).toBe(true);
    };

    /**
     * Reset password.
     */
    //
    cpsLoginPage.prototype.verifyResetpassword = function(){

        this.link_forgotpassword.click();
        frameworkUtils.waitForElement();

        // enter email id to receive password reset email.
        this.txt_forgot_pass.sendKeys(valid_email);
        this.btn_reset_pass.click();
        frameworkUtils.waitForElement();

        // verify email recive in mail-box.
        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newpassword");

        //enter blank password.
        this.txt_new_pass.sendKeys("");
        this.btn_setas_pass.click();
        expect(this.error_blank_pass.isDisplayed()).toBe(true);
        frameworkUtils.waitForElement();

        // enter incorrect password
        this.txt_new_pass.sendKeys("a");
        this.btn_setas_pass.click();
        expect(this.error_eight_char.isDisplayed()).toBe(true);
        expect(this.error_uppercase.isDisplayed()).toBe(true);
        expect(this.error_number.isDisplayed()).toBe(true);
        expect(this.error_special_char.isDisplayed()).toBe(true);
        frameworkUtils.waitForElement();

        // enter new password.
        this.txt_new_pass.sendKeys("Admin@123");
        this.btn_setas_pass.click();
        frameworkUtils.waitForElement();
        this.link_continue_cloud_portal.click();

        frameworkUtils.longWaitForElement();

        frameworkUtils.ignoreBrowserSync();
        this.cpsLogout();
        frameworkUtils.waitForElement();

        var firstWindowHandle,secondWindowHandle,thirdWindowHandle;
        browser.getAllWindowHandles().then(function (handles) {
            secondWindowHandle = handles[1];
            firstWindowHandle = handles[0];
            browser.switchTo().window(firstWindowHandle).then(function () { //the focus moves on new tab
            });
        });

        frameworkUtils.waitForElement();

        browser.driver.findElement(By.xpath("//td/p/a[contains(text(),'New Password')]")).click();
        frameworkUtils.waitForElement();

        // Verify token expires after first use.
        browser.getAllWindowHandles().then(function (handles) {
            thirdWindowHandle = handles[2];
            secondWindowHandle = handles[1];
            firstWindowHandle = handles[0];
            browser.switchTo().window(thirdWindowHandle).then(function () { //the focus moves on new tab
            });
        });

        // Verify token expire error message.
        expect(this.error_token_exp.isDisplayed()).toBe(true);
    };

    /**
     * Cloud portal suspended login function
     * it accepts 2 parameters of String type
     * @param userName User's registered email.
     * @param password User's Password.
     */
    cpsLoginPage.prototype.suspendedcpsLogin = function(userName, password){
        this.txt_userName.clear().sendKeys(userName);
        this.txt_userPassword.clear().sendKeys(password);
        this.btn_signIn.click();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        expect(dashBoardUtils.lbl_Suspendedaccount.isDisplayed()).toBe(true);
    };
 /**
     * Forgot password email carried to next page.
     */
    cpsLoginPage.prototype.verifyForgotpasswordemailtonextpage = function(){
        // enter email id in username field.
        this.txt_userName.sendKeys(envConfig_Json.int_salesOps_uname);

        // click on forgot password link
        this.link_forgotpassword.click();
        frameworkUtils.shortWaitForElement();

        // verify email id carried to next page.
        expect(this.txt_forgot_pass.getAttribute('value')).toEqual(envConfig_Json.salesOps_uname);
    };
    /**
     * Verify reset password as blank.
     */
    cpsLoginPage.prototype.verifyResetblankpassword = function(){

        // click on forgot password link
        this.link_forgotpassword.click();
        frameworkUtils.shortWaitForElement();

        // click on reset password button.
        this.btn_reset_pass.click();
        // verify blank email error message.
        expect(this.error_email.isDisplayed()).toBe(true);
    };
    /**
     * Verify Enter URL without login to application.
     */
    cpsLoginPage.prototype.verifyEnterurlwithoutLogin = function(){

        // enter url without login to application
        dashBoardUtils.goToEditProfile();

        // short wait
        frameworkUtils.shortWaitForElement();

        // verify signIn page appears.
        expect(this.title_signin.isDisplayed()).toBe(true);
    };
    /**
     * Confirm password textfield highlighted read until password matches
     */
    cpsLoginPage.prototype.verifyPasswordmatch = function(){
       //click forgot password link
        this.link_forgotpassword.click();
        frameworkUtils.waitForElement();

        // enter email id to receive password reset email.
        this.txt_forgot_pass.sendKeys(valid_email);
        //click reset password button.
        this.btn_reset_pass.click();
        frameworkUtils.waitForElement();

        // verify email recive in mail-box.
        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newpassword");

        //untick show password check-box
        this.chkbox_showpassword.click();

        //enter blank password.
        this.txt_new_pass.sendKeys("test");

        // enter incorrect confirm password
        this.txt_confirmpassword.sendKeys("test123");
        frameworkUtils.shortWaitForElement();
        //verify red color.
        expect(this.txt_redcolor.isDisplayed()).toBe(true);

        frameworkUtils.shortWaitForElement();
        //enter matching password in confirm password
        this.txt_confirmpassword.clear().sendKeys("test");
        frameworkUtils.shortWaitForElement();

        //verify red color not display.
        expect(this.txt_redcolor.isPresent()).toBe(false);
        //verify green color displays.
        expect(this.txt_greencolor.isDisplayed()).toBe(true);
        frameworkUtils.waitForElement();
    };

    return cpsLoginPage;
})();

module.exports = cpsLoginPage;