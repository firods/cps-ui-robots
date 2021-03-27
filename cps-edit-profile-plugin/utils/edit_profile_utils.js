/**
 * Functions and objects declarations for About Cloud Portal and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */

var frameworkUtils, dashBoardUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashBoard_Utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
frameworkUtils = new framework_Utils();
dashBoardUtils = new dashBoard_Utils();

var cpsEditProfilePage = ( function() {
    "use strict";
    function cpsEditProfilePage() {
        //Web Element Declarations go here
        this.txt_FirstName = element(By.model("editProfileVm.newUser.firstName"));
        this.txt_Email = element(By.model("editProfileVm.newUser.email"));
        this.btn_UpdateAccount = element(By.xpath("//button[contains(text(),'Update Account')]"));
        this.msg_UpdateAccountSuccess = element(By.xpath("//div[contains(text(),'User profile updated.')]"));
        this.link_changePass = element(By.xpath("//a[contains(text(),'Change Password')]"));
        this.txt_ExistingPass = element(By.model("editProfileVm.newUser.existingPassword"));
        this.txt_NewPass = element(By.model("editProfileVm.newUser.newPassword"));
        this.chk_ShowPass = element(By.model("editProfileVm.showPassword"));
        this.txt_ConfirmPass = element(By.model("editProfileVm.newUser.confirmPassword"));
        this.msg_FirstNameRequired = element(By.xpath("//div[contains(text(),'First name is required.')]"));
        this.msg_ValidEmailRequired = element(By.xpath("//div[contains(text(),'Valid email is required.')]"));
        this.msg_ExistingPassRequired = element(By.xpath("//div[contains(text(),'Existing password is required.')]"));
        this.msg_NewPassRequired = element(By.xpath("//div[contains(text(),'New password is required.')]"));
        this.msg_passMustBeEightChars = element(By.xpath("//div[contains(text(),'Password must be at least 8 characters.')]"));
        this.msg_passMustIncludeOneUppercase = element(By.xpath("//div[contains(text(),'Password must include at least 1 uppercase character.')]"));
        this.msg_passMustIncludeOneNumber = element(By.xpath("//div[contains(text(),'Password must include at least 1 number.')]"));
        this.msg_passMustIncludeOneSpecial = element(By.xpath("//div[contains(text(),'Password must include at least 1 special character.')]"));
        this.msg_passDoNotMatch = element(By.xpath("//div[contains(text(),'Passwords do not match')]"));
        this.msg_yourPassDoNotMatch = element(By.xpath("//div[contains(text(),'Your passwords do not match.')]"));
        this.btn_Cancel = element(By.xpath("//div/div[contains(text(),'Cancel')]"));
    }

    /**
     * Author: Saurabh Patwardhan
     * Update customer profile
     * it accepts 2 parameters of String type
     * @param firstName customer name
     * @param emailAddress customer's email address
     */
    cpsEditProfilePage.prototype.updateCustomerProfile = function(firstName, emailAddress){
        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.longWaitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Update First Name
        this.txt_FirstName.clear();
        this.txt_FirstName.sendKeys(firstName);

        //Update Email Address
        this.txt_Email.clear();
        this.txt_Email.sendKeys(emailAddress);

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Sync
        frameworkUtils.waitForElement();

        //Verify Success message
        expect(this.msg_UpdateAccountSuccess.isPresent()).toBe(true);

        //Sync
        frameworkUtils.waitForElement();
    };

    /**
     * Author: Saurabh Patwardhan
     * Verify customer profile
     * it accepts 2 parameters of String type
     * @param firstName customer name
     * @param emailAddress customer's email address
     */
    cpsEditProfilePage.prototype.verifyCustomerProfile = function(firstName, emailAddress) {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.waitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Verify firstname
        expect(this.txt_FirstName.getText()).toEqual(firstName);

        //Verify Email Address
        expect(this.txt_Email.getText()).toEqual(emailAddress);
    };


    /**
     * Author: Saurabh Patwardhan
     * Change and password
     * it accepts 2 parameters of String type
     * @param firstName customer name
     * @param emailAddress customer's email address
     */
    cpsEditProfilePage.prototype.changeAccountPassword = function(existingPass, newPass) {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.waitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Click on Change Password link
        this.link_changePass.click();

        //Type existing password
        this.txt_ExistingPass.sendKeys(existingPass);

        //Type new password
        this.txt_NewPass.sendKeys(newPass);

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Sync
        frameworkUtils.waitForElement();

        //Verify Success message
        expect(this.msg_UpdateAccountSuccess.isPresent()).toBe(true);
    };

    /**
     * Author: Saurabh Patwardhan
     * Verify Error Messages appear to validate Required Fields
     * it accepts zero parameters of String type
     */
    cpsEditProfilePage.prototype.verifyFieldValidationMessages = function() {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.waitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Clear First Name
        this.txt_FirstName.clear();

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Verify Error Message
        expect(this.msg_FirstNameRequired.isPresent()).toBe(true);

        //Type Back First Name
        this.txt_FirstName.clear().sendKeys('FirstName');

        //Clear Email
        this.txt_Email.clear();

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Verify Error Message
        expect(this.msg_ValidEmailRequired.isPresent()).toBe(true);

        //Type back incorrect email
        this.txt_Email.clear().sendKeys('invalidEmail@');

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Short Wait
        frameworkUtils.shortWaitForElement();

        //Verify Error Message
        expect(this.msg_ValidEmailRequired.isPresent()).toBe(true);

        //Type back correct email
        this.txt_Email.clear().sendKeys('valid@email.com');

        //Click on Change Password link
        this.link_changePass.click();

        //Clear existing password
        this.txt_ExistingPass.clear();

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Short Wait
        frameworkUtils.shortWaitForElement();

        //Verify Error Message
        expect(this.msg_ExistingPassRequired.isPresent()).toBe(true);

        //Type back any password in existing password
        this.txt_ExistingPass.clear().sendKeys("Hello");

        //Clear new Password
        this.txt_NewPass.clear();

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Short Wait
        frameworkUtils.shortWaitForElement();

        //Verify Error Message
        expect(this.msg_NewPassRequired.isPresent()).toBe(true);

    };


    /**
     * Author: Saurabh Patwardhan
     * Validate password
     * it accepts zero parameters of String type
     */
    cpsEditProfilePage.prototype.verifyPasswordValidationMessages = function() {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.waitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Click on Change Password link
        this.link_changePass.click();

        //Clear existing password and type a random incorrect password
        this.txt_ExistingPass.clear();
        this.txt_ExistingPass.sendKeys('a');

        //Clear new password and type a random incorrect password
        this.txt_NewPass.clear();
        this.txt_NewPass.sendKeys('a');

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Error Messages
        expect(this.msg_passMustBeEightChars.isPresent()).toBe(true);
        expect(this.msg_passMustIncludeOneUppercase.isPresent()).toBe(true);
        expect(this.msg_passMustIncludeOneNumber.isPresent()).toBe(true);
        expect(this.msg_passMustIncludeOneSpecial.isPresent()).toBe(true);
    };

    /**
     * Author: Saurabh Patwardhan
     * Validate password
     * it accepts zero parameters of String type
     */
    cpsEditProfilePage.prototype.verifyPasswordMismatch = function() {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();

        //Wait
        frameworkUtils.waitForElement();

        //Ignore Sync
        frameworkUtils.ignoreBrowserSync();

        //Click on Change Password link
        this.link_changePass.click();

        //Clear existing password and type a random incorrect password
        this.txt_ExistingPass.clear();
        this.txt_ExistingPass.sendKeys('!Existing#123');

        //Clear new password and type a random incorrect password
        this.txt_NewPass.clear();
        this.txt_NewPass.sendKeys('Pass@1234');

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Error Messages
        expect(this.msg_passDoNotMatch.isPresent()).toBe(true);

        //Type in correct existing password
        this.txt_ExistingPass.clear();
        this.txt_ExistingPass.sendKeys('a');

        //Type in a new password
        this.txt_NewPass.clear();
        this.txt_NewPass.sendKeys('Password2123');

        //Un-check Show password Check Box
        this.chk_ShowPass.click();

        //Type in any confirm password that does not match new password
        this.txt_ConfirmPass.sendKeys('!Password2123');

        //Click Update Account
        this.btn_UpdateAccount.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Error Messages
        expect(this.msg_yourPassDoNotMatch.isPresent()).toBe(true);
    };
 /**
     * Author: Shrikant Firodiya
     * Validate cancel on edit profile screen.
     * it accepts zero parameters of String type
     */
    cpsEditProfilePage.prototype.verifyCanceleditingProfile = function() {

        //Go to Edit Profile page
        dashBoardUtils.goToEditProfile();
        // clear existing first name
        this.txt_FirstName.clear();
        //enter test name
        this.txt_FirstName.sendKeys("Test");
        // click cancel button.
        this.btn_Cancel.click();
        // verify dashboard page.
        expect(dashBoardUtils.lbl_WelcomeTo.isPresent()).toBe(true);
    };
    
     return cpsEditProfilePage;
     
     })();
     
     module.exports = cpsEditProfilePage;
