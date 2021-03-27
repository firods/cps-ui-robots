/**
 * Functions and objects declarations for Dashboard and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */

var frameworkUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var env_details = require("../../envConfig.json");
var sidebarOptions_json = require("../testdata/dpc-130595.json");
var sidebarOptionsTenant_json = require("../../cps-accounts-plugin/testdata/dpc-130560.json");


frameworkUtils = new framework_Utils();

var cpsDashBoardPage = ( function() {
    "use strict";
    function cpsDashBoardPage() {
        this.sideBarOption_About = element(By.xpath("*[@id='About.about']/div[2]"));
        this.btn_profileHeader = element(by.xpath("//div/span[@class='pull-left username']"));
        this.btnM_profileHeader = element(by.xpath("//nav-bar-menu/button[@class='btn btn-link enabled pull-right']"));
        this.dropDownMenuOption_editProfile = element(by.xpath("//span[contains(text(),'Edit Profile')]"));
        this.dropDownMenuOption_SignOut = element(by.xpath("//span[contains(text(),'Sign Out')]"));
        this.lbl_WelcomeTo = element(by.xpath("//*[contains(text(),'Welcome to')]"));
        this.lbl_CloudPortal = element(by.xpath("//div[contains(text(),'Cloud Portal')]"));
        this.lblM_CloudPortal = element(by.xpath("//div[@class='cloud-portal ng-binding']"));
        this.lbl_CloudMgtSrvc = element(by.xpath("//div[contains(text(),'cloud management service.')]"));
        this.btn_Alertbell = element(by.xpath("//div/a[@class='dropdown-toggle']"));
        this.dropDown_AlertsList = element(by.xpath("//div[@class='dropdown-menu event-box pull-right']"));
        this.lbl_ShowingXofYAlerts = element(by.xpath("//div[@class='event-head ng-binding']"));
        this.btn_RightArrowAlertsDropDown = element(by.name("icon-arrow-right"));
        this.link_allAlerts = element(by.xpath("//div/span[contains(text(),'All Alerts >')]"));
        this.badge_AlertCount = element(by.xpath("//div/a/div[@class='circle ng-binding']"));
        this.btn_sideBarToggler = element(by.id("navToggleHolder"));
        this.panel_sideBar = element(by.id("sidebarContainerPlugins"));
        this.btn_CloudPortalLogo = element(by.xpath("//span[contains(text(),'Cloud Portal')]"));
        this.btnM_EMC2Logo = element(by.xpath("//div/img[@class='emcLogoShort']"));
        this.btn_GettingStarted = element(by.xpath("//span[contains(text(),'Getting Started in Cloud Portal')]"));
	    this.lbl_Suspendedaccount = element(By.xpath("//div/h3[contains(text(),'Your account has been suspended')]"));
        this.lblM_UseMenuButton = element(By.xpath("//div[@class='help-text ng-binding']"));


    }
     /**
     * Navigates to Register Appliance page by directly calling URL
     * it accepts zero parameters of String type
     */
    cpsDashBoardPage.prototype.goToRegisterAppliance = function () {
        browser.get(frameworkUtils.getCPSURL()+"/CustomerAccounts/register/appliance");
        frameworkUtils.waitForElement();
    };
	
    /**
     * Navigates to Notification Settings by directly calling URL
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.goToStorageMgt = function(){
        browser.get(frameworkUtils.getCPSURL()+"/StorageManagement");
        frameworkUtils.waitForElement();
    };

    /**
     * Navigates to Notification Settings by directly calling URL
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.goToNotificationSettings = function(){
        browser.get(frameworkUtils.getCPSURL()+"/events/setting");
        frameworkUtils.waitForElement();
    };

    /**
     * Navigates to Customer accounts page by directly calling URL
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     */
    cpsDashBoardPage.prototype.goToCustomerAccounts = function () {
        browser.get(frameworkUtils.getCPSURL()+"/CustomerAccounts");
        frameworkUtils.waitForElement();
    };

    /**
     * Navigates to About page by directly calling URL
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.goToAbout = function(){
        browser.get(frameworkUtils.getCPSURL()+"/about");
        frameworkUtils.waitForElement();
    };

    /**
     * Navigates to Edit Profile page by directly calling URL
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.goToEditProfile = function () {
        browser.get(frameworkUtils.getCPSURL()+"/MyAccount/edit");
        frameworkUtils.waitForElement();
    };

    /**
     * Verify Edit Profile Menu option is present or not
     * Has to be called after a successful login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyEditProfileMenuOption = function () {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Click on Customer Name button located in the top right corner of the page
        if(!env_details.mobile_emulation) {
            this.btn_profileHeader.click();
        }
        else{
            this.btnM_profileHeader.click();
        }

        //Wait
        frameworkUtils.waitForElement();

        //Verify Edit Profile Option
        expect(this.dropDownMenuOption_editProfile.isDisplayed()).toBe(true);

    };

    /**
     * Verify dashboard landing page post login
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyDashboardLandingPostLogin = function () {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();



            //Verify valid landing on dashboard post login
            expect(this.lbl_WelcomeTo.isDisplayed()).toBe(true);

           if(!env_details.mobile_emulation)
            {
                expect(this.lbl_CloudPortal.isDisplayed()).toBe(true);
            }
           else
            {
               expect(this.lblM_CloudPortal.isDisplayed()).toBe(true);
               expect(this.lblM_UseMenuButton.isDisplayed()).toBe(true);
            }
            expect(this.lbl_CloudMgtSrvc.isDisplayed()).toBe(true);


    };

    /**
     * Verify Customer Account dropdown button
     * it accepts one parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyCustomerAccountDropdown = function (profileHeaderLabel) {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Click on the profile header
        if(!env_details.mobile_emulation) {

            this.btn_profileHeader.click();
            //Verify Profile Header label
            expect(this.btn_profileHeader.getText()).toBe(profileHeaderLabel);

        }
        else{
            this.btnM_profileHeader.click();
        }

        //Short wait
        frameworkUtils.shortWaitForElement();


        //Verify Edit Profile Option
        expect(this.dropDownMenuOption_editProfile.isDisplayed()).toBe(true);

        //Click on the
        expect(this.dropDownMenuOption_SignOut.isDisplayed()).toBe(true);

    };

    /**
     * Verify Bell Button functionality
     * it accepts zero parameters of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyBellButtonFunctionality = function () {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Wait
        frameworkUtils.shortWaitForElement();

        //Click on the profile header
        this.btn_Alertbell.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Alert dropdown
        expect(this.dropDown_AlertsList.isDisplayed()).toBe(true);

    };

    /**
     * Sidebar Option Selector
     * it accepts two parameter of String type
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifySideBarOptionSelection = function () {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();
        var i = 0;
        if(!env_details.mobile_emulation) {

            for (i=0; i< sidebarOptions_json.SideBarOptions.length; i++) {
                //Click on the first element from json
                expect(element(by.xpath("//div/div[contains(text(),'"+sidebarOptions_json.SideBarOptions[i].PluginLabel+"')]")).isPresent()).toBe(true);
            }

        }
        else {
            for (i = 0; i< sidebarOptions_json.SideBarOptionsM.length; i++) {
                //Click on the first element from json
                expect(element(by.id(sidebarOptions_json.SideBarOptionsM[i].PluginId)).isPresent()).toBe(true);
            }
        }
    };

    /**
     * Sidebar Toggler
     * it accepts no parameter
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifySideBarToggle = function () {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Click on sidebar toggler
        this.btn_sideBarToggler.click();

        //Wait
        frameworkUtils.shortWaitForElement();

        //Verify whether sidebar is hidden
        expect(this.panel_sideBar.isDisplayed()).toBe(false);

    };

    /**
     * Verify dashboard landing after clicking on EMC logo
     * it accepts no parameter
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyCloudPortalLogoNavigatesToDashboard = function () {

        //Go to About
        this.goToAbout();

        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        if(!env_details.mobile_emulation) {

            //Click on Cloud Portal logo
            this.btn_CloudPortalLogo.click();

        }
        else{
            this.btnM_EMC2Logo.click();
        }


        //Wait
        frameworkUtils.waitForElement();

        //Verify whether sidebar is hidden
        expect(browser.getCurrentUrl()).toContain("dashboard");
    };

    /**
     * Verify getting started button navigation
     * it accepts no parameter
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyGettingStartedNavigation = function () {

        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Click on sidebar toggler
        this.btn_GettingStarted.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify whether sidebar is hidden
        expect(browser.getCurrentUrl()).toContain("help/landingpage/getting-started-cloud-portal");
    };


    /**
     * Verify alert notification bell functionality
     * author : Saurabh Patwardhan
     */
    cpsDashBoardPage.prototype.verifyAlertBellFunctionality = function(){

        //Click on the alerts bell
        this.badge_AlertCount.click();

        //Long Wait
        frameworkUtils.longWaitForElement();

        //Verify the Alert drop down menu appears
        expect((this.dropDown_AlertsList).isDisplayed()).toBe(true);

        //Verify page count on the Alert Dropdown
        expect(this.lbl_ShowingXofYAlerts.getText()).toContain('Showing 1-3 of');

        //Click on the right arrow to load further records
        this.btn_RightArrowAlertsDropDown.click();

        //Wait
        frameworkUtils.longWaitForElement();

        //Verify page count on the alert dropdown
        expect(this.lbl_ShowingXofYAlerts.getText()).toContain('Showing 4-6 of');
    };

    /* Ketaki */
    /**
     * Navigates to Event History page by directly calling URL
     * Has to be called after a successfull login
     * it accepts zero parameters of String type
     */

    cpsDashBoardPage.prototype.goToEventHistory = function(){
        browser.get(frameworkUtils.getCPSURL()+"/events");
        frameworkUtils.waitForElement();
    };

    cpsDashBoardPage.prototype.goToCloudArray = function(){
        browser.get(frameworkUtils.getCPSURL()+"/CloudArray/dashboard");
        frameworkUtils.waitForElement();
    };


    /**
          * Sidebar Option Selector
          * it accepts two parameter of String type
          * author : Saurabh Patwardhan
          */
    cpsDashBoardPage.prototype.verifySideBarOptionSelectionForTenant = function () {

        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        if(!env_details.mobile_emulation) {
            for (var i = 0; i < sidebarOptionsTenant_json.SideBarOptionsForTenant.length; i++) {

                //Click on the first element from json
                element(by.xpath("//div/div[contains(text(),'" + sidebarOptionsTenant_json.SideBarOptionsForTenant[i].PluginLabel + "')]")).click();


                //Long wait for element
                frameworkUtils.waitForElement();

                //Verify browser url
                expect(browser.getCurrentUrl()).toContain(sidebarOptionsTenant_json.SideBarOptionsForTenant[i].PluginUrl);
            }

        }
        else
        {
            for(var i= 0; i<sidebarOptionsTenant_json.SideBarOptionsForTenantM.length; i++)
            {
                element(By.id(sidebarOptionsTenant_json.SideBarOptionsForTenantM[i].PluginId)).click();

                //Long wait for element
                frameworkUtils.waitForElement();

                expect(browser.getCurrentUrl()).toContain(sidebarOptionsTenant_json.SideBarOptionsForTenantM[i].PluginUrl);
            }

        }

    };

    return cpsDashBoardPage;
})();

module.exports = cpsDashBoardPage;
