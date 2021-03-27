/**
 * Functions and objects declarations for Dashboard and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */

var frameworkUtils,loginUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashBoard_Utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
var envConfig_Json = require("../../envConfig.json");
frameworkUtils = new framework_Utils();
dashBoardUtils = new dashBoard_Utils();
loginUtils = new login_Utils();

var cpsEventsHistoryPage = ( function() {
    "use strict";
    function cpsEventsHistoryPage() {
        this.txt_RecipientEmail = element(By.model("recipientEmail"));
        this.btn_AddRecipient = element(by.xpath("//div/button[contains(text(),'Add Recipient')]"));
        this.btn_RemoveAllRecipients = element(by.xpath("//div/button[contains(text(),'Remove All')]"));
        this.btn_SaveNotificationSettings = element(by.xpath("//div[contains(text(),'Save')]"));
        this.msg_EmailCantBeBlank = element(By.xpath("//div[contains(text(),'Email cannot be blank.')]"));
        this.msg_ValidRecipientRequired = element(By.xpath("//div[contains(text(),'Valid email is required.')]"));
        this.msg_RecipientExists = element(By.xpath("//div[contains(text(),'Email already exists.')]"));
        this.btn_ExpandRecipientList = element(by.xpath("//*[@name='icon-arrow-down']"));
        this.btn_CrossToRemoveRecipient = element(by.xpath("//*[@class='tile-icon icon-blue emc-svg']"));
        this.btn_NotificationSettings = element(by.xpath("//div/div[contains(text(),'Notification Settings')]"));
        this.chkbox_error = element(by.id("ehnErrorSettingEmail"));
        this.chkbox_warning = element(by.id("ehnWarningSettingEmail"));
        this.chkbox_alert = element(by.id("ehnAlertSettingEmail"));
        this.chkbox_info = element(by.id("ehnInfoSettingEmail"));
        this.chkbox_first_activealert = element(by.xpath("//div/div[@class='common-checkbox']"));
        this.btn_dismiss = element(by.xpath("//div/div/div[text()='Dismiss']"));
        this.btn_confirm = element(by.xpath("//div/button[contains(text(),'Confirm')]"));
        this.lbl_toastmessage = element(by.xpath("//*[@id='toast-container']/div/div/div"));
        this.lbl_dismissmessage = element(by.xpath("//div/div/div[contains(text(),'Alert has been successfully dismissed')]"));
        this.lbl_alerts = element(by.xpath("//div/div[contains(text(),'alert')]"));
        this.lbl_error = element(by.xpath("//div/div[contains(text(),'error')]"));
        this.lbl_warning = element(by.xpath("//div/div[contains(text(),'warning')]"));
        this.lbl_info = element(by.xpath("//div/div[contains(text(),'info')]"));
        this.icon_alerts = element(by.name("icon-bell"));
        this.icon_error = element(by.name("icon-error"));
        this.icon_warning = element(by.name("icon-warning"));
        this.icon_info = element(by.xpath("//div/div[@class='ft-column ft-check']"));
        this.btn_view = element(by.xpath("//div/div[contains(text(),'View')]"));
        this.lbl_eventdetails = element(by.xpath("//div/h2[contains(text(),'Event Detail')]"));
        this.lbl_details = element(by.xpath("//p/span[contains(text(),'Details')]"));
        this.lbl_category = element(by.xpath("//div/label[contains(text(),'Category:')]"));
        this.lbl_alert = element(by.xpath("//div/p[contains(text(),'Alert')]"));
        this.lbl_source = element(by.xpath("//div/label[contains(text(),'Source:')]"));
        this.lbl_product = element(by.xpath("//div/label[contains(text(),'Product:')]"));
        this.lbl_timestamp = element(by.xpath("//div/label[contains(text(),'Timestamp:')]"));
        this.lbl_description = element(by.xpath("//div/label[contains(text(),'Description:')]"));
        this.lbl_activealertsOnPage = element(by.xpath("//a/div[@class='circle ng-binding']"));
        this.btn_notifications = element(by.xpath("//div/span/label[@class='ng-scope']"));
        this.lbl_alertdefaultselect = element(by.xpath("//div/div[contains(@class,'btn btn-default btn-event ng-binding ng-scope active') and contains(text(),'alert')]"));
        this.lbl_errorselect = element(by.xpath("//div/div[contains(@class,'btn btn-default btn-event ng-binding ng-scope active') and contains(text(),'error')]"));
        this.lbl_warningselect = element(by.xpath("//div/div[contains(@class,'btn btn-default btn-event ng-binding ng-scope active') and contains(text(),'warning')]"));
        this.lbl_infoselect = element(by.xpath("//div/div[contains(@class,'btn btn-default btn-event ng-binding ng-scope active') and contains(text(),'info')]"));
        this.chkbox_toastalert = element(by.id("ehnAlertSettingToast"));
        this.btn_cancel = element(by.xpath("//div/div[contains(text(),'Cancel')]"));
        this.btn_dontsave = element(by.xpath("//div/button[2][contains(text(),'Don')]")); //click don't save button.
        this.btn_popupcancel = element(by.xpath("//div/button[contains(text(),'Cancel')]"));
        this.lbl_oneeventtype = element(by.xpath("//div/div[contains(text(),'Please subscribe to atleast one event type.')]"));
        }

    /**
     * Add Email recipient, this functions clicks on Add recipient
     * author : Saurabh Patwardhan
     */
    cpsEventsHistoryPage.prototype.addRecipeint = function(emailID){
        //Go to Notification Settings
        frameworkUtils.longWaitForElement();

        //Add Email
        this.txt_RecipientEmail.clear().sendKeys(emailID);
        this.btn_AddRecipient.click();
        frameworkUtils.shortWaitForElement();
    };

    /**
     * Verify Add recipient functionality including error messages
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsEventsHistoryPage.prototype.verifyAddRecipientFunctionality = function(){

        //Add blank email
        dashBoardUtils.goToNotificationSettings();
        this.addRecipeint('');
        //Verify Error Message
        expect(this.msg_EmailCantBeBlank.isPresent()).toBe(true);

        //Add invalid email
        this.addRecipeint('invalidEmail');
        //Verify Error Message
        expect(this.msg_ValidRecipientRequired.isPresent()).toBe(true);

        var validEmail = "valid"+Math.random()+"@email.com";
        frameworkUtils.longWaitForElement();

        //Add Valid Email and verify if it has been added
        dashBoardUtils.goToNotificationSettings();
        this.addRecipeint(validEmail);

        //Click on the down arrow
        this.btn_ExpandRecipientList.click();
        frameworkUtils.shortWaitForElement();
        //Verify email address
        expect(element(by.xpath("//div[contains(text(),'"+validEmail+"')]")).isDisplayed()).toBe(true);

        //Add existing email
        this.addRecipeint(validEmail);
        frameworkUtils.shortWaitForElement();
        //Verify Message
        expect(this.msg_RecipientExists.isPresent()).toBe(true);

        //Save Notification settings
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.longWaitForElement();

        //Navigate back to Notification settings and see whether the recipient is actually saved
        //Go to Notification Settings
        dashBoardUtils.goToNotificationSettings();
        frameworkUtils.waitForElement();

        //Click on the down arrow
        this.btn_ExpandRecipientList.click();
        frameworkUtils.shortWaitForElement();
        //Verify email address
        expect(element(by.xpath("//div[contains(text(),'"+validEmail+"')]")).isDisplayed()).toBe(true);
    };

    /**
     * Remove Email recipient, this functions adds and removes the recipient from the list saves settings
     * author : Saurabh Patwardhan
     */
    cpsEventsHistoryPage.prototype.verifyRemoveRecipientFunctionality = function(emailID){
        //Go to Notification Settings
        dashBoardUtils.goToNotificationSettings();
        frameworkUtils.longWaitForElement();

        //Add a random email recipient
        this.txt_RecipientEmail.clear().sendKeys('hi@hello.com');
        this.btn_AddRecipient.click();
        frameworkUtils.waitForElement();

        //Click on the down arrow
        this.btn_ExpandRecipientList.click();
        frameworkUtils.waitForElement();

        //Click on email address to be able to see the cross
        element(by.xpath("//div[contains(text(),'"+emailID+"')]")).click();
        frameworkUtils.waitForElement();

        //Click on the cross
        this.btn_CrossToRemoveRecipient.click();

        //wait
        frameworkUtils.waitForElement();

        //Verify whether recipient is removed
        expect(element(by.xpath("//div[contains(text(),'"+emailID+"')]")).isPresent()).toBe(false);

        //Again add a random email to be able to view Remove All button
        //Add a random email recipient
        this.txt_RecipientEmail.clear().sendKeys('hii@hello.com');
        frameworkUtils.shortWaitForElement();
        this.btn_AddRecipient.click();
        frameworkUtils.waitForElement();

        //Expand recipient list to be able to see RemoveAll button
       // this.btn_ExpandRecipientList.click();
        frameworkUtils.shortWaitForElement();

        //Remove all recipient
        this.btn_RemoveAllRecipients.click();

        //Save Notification settings
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.longWaitForElement();

        //Navigate back to Notification settings whether current user's email id is listed
        //Go to Notification Settings
        dashBoardUtils.goToNotificationSettings();
        frameworkUtils.waitForElement();

        //Verify email address
        expect(element(by.xpath("//div[contains(text(),'"+emailID+"')]")).isDisplayed()).toBe(true);

    };

    /**
     * Add Email recipient, this functions clicks on Add recipient
     * author : Saurabh Patwardhan
     */
    cpsEventsHistoryPage.prototype.verifySaveChangesDialogue = function(emailID){
        //Go to Notification Settings
        dashBoardUtils.goToNotificationSettings();
        frameworkUtils.waitForElement();

        //Add Email
        this.txt_RecipientEmail.clear().sendKeys(emailID);
        this.btn_AddRecipient.click();
        frameworkUtils.shortWaitForElement();
    };

    /**
     * Add Email recipient, this functions verifies email for
     * 1.add recipient
     * 2.delete recipient
     * 3.change notification settings
     * 4.dismiss alert.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.emailVerifications = function(emailID){

        //1.Add recipient
        dashBoardUtils.goToNotificationSettings();
        this.addRecipeint(emailID);
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.longWaitForElement();
        loginUtils.cpsLogout();
        frameworkUtils.waitForElement();

        // login to emc-web outlook and check email for add recipient
        frameworkUtils.loginEmcOutlook_EHN(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"add");
        frameworkUtils.waitForElement();

        //
        //////2.Login to Cloud Portal for update events
        browser.get(envConfig_Json.cps_url);
        frameworkUtils.waitForElement();
        // login to cloud portal.
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);
        dashBoardUtils.goToNotificationSettings();

        frameworkUtils.waitForElement();
        // check/uncheck check boxes.
        this.chkbox_error.click();
        this.chkbox_warning.click();
        frameworkUtils.waitForElement();
        // click on save.
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.longWaitForElement();
        loginUtils.cpsLogout();

        // login to emc-web outlook and check email for check/uncheck events.
        frameworkUtils.loginEmcOutlook_EHN(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"update");


        // 3.launch cloud portal INT envirement for delete recipient.
        browser.get(envConfig_Json.cps_url);
        frameworkUtils.waitForElement();
        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);
        dashBoardUtils.goToNotificationSettings();
        frameworkUtils.waitForElement();

        // remove recipient.
        this.btn_ExpandRecipientList.click();
        frameworkUtils.waitForElement();
        // click remove all button.
        this.btn_RemoveAllRecipients.click();
        frameworkUtils.waitForElement();
        // click save notifications button.
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.waitForElement();

        // logout to cloud portal.
        loginUtils.cpsLogout();

        // 4.login to emc-web outlook and check email for remove recipient.
        frameworkUtils.loginEmcOutlook_EHN(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"delete");

        // verify for dismiss alerts.
        browser.get(envConfig_Json.cps_url);
        frameworkUtils.waitForElement();
        //Login to Cloud Portal
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();

        // select first active alert.
        this.chkbox_first_activealert.click();
        // click dismiss button.
        this.btn_dismiss.click();
        this.btn_confirm.click();
        frameworkUtils.waitForElement();

        // logout from cps cloud portal.
        loginUtils.cpsLogout();

        // login to emc-web outlook and check email for remove recipient.
        frameworkUtils.loginEmcOutlook_EHN(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"dismiss");
        frameworkUtils.waitForElement();
    };
    /**
     * notification Settings, this functions verifies toast notifications.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.notificationSettings = function(){

        // email/toast genration not possible from UI so only check for pending toast notification.
        // verify toast message
	
	 frameworkUtils.shortWaitForElement();
	 expect(this.lbl_toastmessage.isDisplayed()).toBe(true);

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
     * notificationSettings, this functions verifies filters.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.ehnfilters = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();
        // check default alert tab selected.
        expect(this.lbl_alertdefaultselect.isPresent()).toBe(true);
        // check for alerts events.
        expect(this.icon_alerts.isPresent()).toBe(true);

        // check for error events.
        this.lbl_error.click();
        frameworkUtils.waitForElement();
        expect(this.icon_error.isPresent()).toBe(true);

        // check for warning events.
        this.lbl_warning.click();
        frameworkUtils.waitForElement();
        expect(this.icon_warning.isPresent()).toBe(true);

        // check for info events.
        this.lbl_info.click();
        frameworkUtils.waitForElement();
        expect(this.icon_info.isPresent()).toBe(true);

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };

    /**
     * notificationSettings, this functions verifies event details
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.eventdetails = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();

        // select first active alert
        this.chkbox_first_activealert.click();
        // click on view button.
        this.btn_view.click();
        frameworkUtils.waitForElement();

        //verify event details.
        expect(this.lbl_eventdetails.isPresent()).toBe(true);
        expect(this.lbl_details.isPresent()).toBe(true);
        expect(this.lbl_category.isPresent()).toBe(true);
        expect(this.lbl_alert.isPresent()).toBe(true);
        expect(this.lbl_description.isPresent()).toBe(true);
        expect(this.lbl_product.isPresent()).toBe(true);
        expect(this.lbl_source.isPresent()).toBe(true);
        expect(this.lbl_timestamp.isPresent()).toBe(true);

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
         * notificationSettings, this functions verifies dismiss active alert.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.dismiss_event = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();

        var beforedismisscnt,afterdismisscnt;
        var vm = this;
        // take bell count before alert dismiss.
        this.lbl_activealertsOnPage.getText().then( function(count){

            beforedismisscnt = count;
            console.log(beforedismisscnt);

            // select first active alert
            vm.chkbox_first_activealert.click();
            frameworkUtils.longWaitForElement();
            // click on dismiss button.
            vm.btn_dismiss.click();
            frameworkUtils.shortWaitForElement();
            vm.btn_confirm.click();
            frameworkUtils.waitForElement();

            // take bell count after dismiss alert.
            vm.lbl_activealertsOnPage.getText().then( function(count){

                afterdismisscnt = count;
                expect(beforedismisscnt - afterdismisscnt).toBe(1);
            });
            // logout from cps cloud portal.
            loginUtils.cpsLogout();

        });

    };
    /**
     * notificationSettings, this functions verifies disable notification settings.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.disablenotifications = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();

        // click on notification settings button.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

        // toggle Notification button to OFF
        this.btn_notifications.click();
        frameworkUtils.shortWaitForElement();
        // save notification settings.
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.longWaitForElement();

        // click notification settings.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

        // verify all settings disappear after notification settings OFF.
        expect(this.txt_RecipientEmail.isDisplayed()).toBe(false);
        expect(this.btn_AddRecipient.isDisplayed()).toBe(false);
        expect(this.chkbox_error.isDisplayed()).toBe(false);
        expect(this.chkbox_warning.isDisplayed()).toBe(false);
        expect(this.chkbox_alert.isDisplayed()).toBe(false);
        expect(this.chkbox_info.isDisplayed()).toBe(false);

        // toggle notification button to ON
        this.btn_notifications.click();
        frameworkUtils.shortWaitForElement();
        // save notification settings.
        this.btn_SaveNotificationSettings.click();
        frameworkUtils.waitForElement();

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
/**
     * notificationSettings, this functions verifies toast notification popup
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.verifynotification_popup = function(){

        frameworkUtils.ignoreBrowserSync();
        //wait till toast appears.
        while(!this.lbl_toastmessage.isDisplayed())
        {
            browser.sleep(0.1);
        }
        // click toast message
        this.lbl_toastmessage.click();
        frameworkUtils.waitForElement();

        // verify event history page opens.
        expect(this.btn_NotificationSettings.isPresent()).toBe(true);
        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
     * notificationSettings, this functions verifies mandatory alerts for toast.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.verifymandatory_toastfor_alerts = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.shortWaitForElement();

        // click on notification settings button.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

       // verify alert toast check-box is disable.
        expect(this.chkbox_toastalert.isEnabled()).toBe(false);
        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
     * notificationSettings, this functions verifies Notification settings save changes popup.
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.verifynotificationsettings_savechanges = function(){

      //save settings already covered in test-case dpc-130571
        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();

        // click on notification settings button.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

        // toggle Notification button to OFF
        this.btn_notifications.click();
        frameworkUtils.shortWaitForElement();
        //click cancel button.
        this.btn_cancel.click();
        frameworkUtils.shortWaitForElement();

        //click cancel button from popup
        this.btn_popupcancel.click();
        frameworkUtils.shortWaitForElement();

        //click cancel button.
        this.btn_cancel.click();
        frameworkUtils.shortWaitForElement();

        // click don't save button.
        this.btn_dontsave.click();
        frameworkUtils.shortWaitForElement();
        // click on notification settings button.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

        //verify changes are not save
        expect(this.chkbox_error.isPresent()).toBe(true);
        expect(this.chkbox_warning.isPresent()).toBe(true);
        expect(this.chkbox_alert.isPresent()).toBe(true);
        expect(this.chkbox_info.isPresent()).toBe(true);

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
     * notificationSettings, this functions verifies atleast one event type subscription to receive email
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.verifyeventtypesubsciption_torecivemail = function(){

        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.shortWaitForElement();

        // click on notification settings button.
        this.btn_NotificationSettings.click();
        frameworkUtils.waitForElement();

        //untick all check-boxes.
        element.all(By.className('common-checkbox-input')).then(function(rows) {

            for (var i = 0; i < rows.length; i++) {
                rows[i].isSelected().then(function(i){return function(selected) {
                    if (selected) {
                        rows[i].click();
                    }

                }}(i));
            }
        });

        //add email in
        this.addRecipeint("test@test.com");
        //verify error message
        expect(this.lbl_oneeventtype.isPresent()).toBe(true);

        frameworkUtils.shortWaitForElement();
        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    /**
     * notificationSettings, this functions verifies atleast one filter selection mandate
     * author : Shrikant Firodiya
     */
    cpsEventsHistoryPage.prototype.verifyonefilter_selection_mandate = function(){
        // go to event history plugin.
        dashBoardUtils.goToEventHistory();
        frameworkUtils.waitForElement();
        // check default alert tab selected.
        expect(this.lbl_alertdefaultselect.isPresent()).toBe(true);
        // check for alerts events.
        expect(this.icon_alerts.isPresent()).toBe(true);
        frameworkUtils.waitForElement();

        //click error tab
        this.lbl_error.click();
        frameworkUtils.waitForElement();
        //verify error tab selected.
        expect(this.lbl_errorselect.isPresent()).toBe(true);

        //again click error tab
        this.lbl_error.click();
        frameworkUtils.waitForElement();
        //verify error tab selected.
        expect(this.lbl_errorselect.isPresent()).toBe(true);

        //click warning tab
        this.lbl_warning.click();
        frameworkUtils.waitForElement();
        //verify warning tab selected.
        expect(this.lbl_warningselect.isPresent()).toBe(true);

        //again click warning tab
        this.lbl_warning.click();
        frameworkUtils.waitForElement();
        //verify warning tab selected.
        expect(this.lbl_warningselect.isPresent()).toBe(true);

        //click info tab
        this.lbl_info.click();
        //verify info tab selected.
        expect(this.lbl_infoselect.isPresent()).toBe(true);
        frameworkUtils.waitForElement();

        //again click info tab
        this.lbl_info.click();
        frameworkUtils.waitForElement();
        //verify info tab selected.
        expect(this.lbl_infoselect.isPresent()).toBe(true);

        // logout from cps cloud portal.
        loginUtils.cpsLogout();
    };
    return cpsEventsHistoryPage;
})();

module.exports = cpsEventsHistoryPage;