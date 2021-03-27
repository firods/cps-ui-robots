/**
 * Functions and objects declarations for Dashboard and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */

var frameworkUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashboard_Utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");

frameworkUtils = new framework_Utils();
dashBoardUtils = new dashboard_Utils();

var cpsStorageMgtPage = ( function() {
    "use strict";
    function cpsStorageMgtPage() {
        this.lbl_WarningUnableToGetInfo = element(by.xpath("//div/p[contains(text(),'Storage information associated with your account could not be retrieved. Please contact administrator.')]"));
        this.btn_Refresh = element(by.xpath("//div[contains(text(),'Refresh')]"));
        this.btn_GetCredentials = element(by.xpath("//div[contains(text(),'Get Credentials')]"));
        this.lbl_WarningForCustomersWithoutStorage = element(by.xpath("//div/div[contains(text(),'Use your storage credentials below to register storage within the CloudBoost console.')]"));
        //this.lnk_CopyClientID = element(by.xpath("//form/div[1]/div/p/span[contains(text(),'Copy to Clipboard')]"));
        //this.lnk_CopySecret = element(by.xpath("//form/div[2]/div/p/span[contains(text(),'Copy to Clipboard')]"));

    }

    /**
     * Verify Active Account functionality  ****This is a dummy function as Storage functionality is not workin for SalesOps account - It fails
     * it accepts two parameter of String type
     * author : Saurabh Patwardhan
     */
    cpsStorageMgtPage.prototype.verifyActiveAccountLinkFunctionality = function () {
        //Ignore sync
        //frameworkUtils.ignoreBrowserSync();

        //Goto Storage Management
        dashBoardUtils.goToStorageMgt()

        //Verify Active Link -- This testcase will fail because of
        expect(this.lbl_WarningUnableToGetInfo.isDisplayed()).toBe(false);
    };



    /**
     * Verify Refresh button functionality
     * it accepts two parameter of String type
     * author : Saurabh Patwardhan
     */
    cpsStorageMgtPage.prototype.verifyRefreshButtonFunctionality = function () {
        //Ignore sync
        //frameworkUtils.ignoreBrowserSync();

        //Goto Storage Management
        dashBoardUtils.goToStorageMgt();

        //Click Refresh button
        this.btn_Refresh.click();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Active Link -- This testcase will fail because of
        expect(this.btn_Refresh.isDisplayed()).toBe(true);
    };

    /**
     * Verify adding customer account through activate customer workflow      ****This is a dummy function as Storage functionality is not workin for SalesOps account - It fails
     * it accepts no parameters
     * author : Saurabh Patwardhan
     */
    cpsStorageMgtPage.prototype.verifyAddingCustomerThroughActivateCustomer = function () {
        //Ignore sync
        //frameworkUtils.ignoreBrowserSync();

        //Goto Storage Management
        dashBoardUtils.goToStorageMgt();

        //Verify Active Link -- This testcase will fail because of
        expect(this.lbl_WarningUnableToGetInfo.isDisplayed()).toBe(false);
    };


    /**
     * Verify Get Credentials functionality
     * it accepts two parameter of String type
     * author : Saurabh Patwardhan
     */
    cpsStorageMgtPage.prototype.verifyCredentials = function (client_id, secret) {
        //Ignore sync
        frameworkUtils.ignoreBrowserSync();

        //Goto Storage Management
        dashBoardUtils.goToStorageMgt();

        //Click Get Credentials
        this.btn_GetCredentials.click();

        //Wait
        frameworkUtils.longWaitForElement();

        //Verify Client and Secret id
        expect(element(by.xpath("//div/p[contains(text(),'"+client_id+"')]")).isPresent()).toBe(true);
        expect(element(by.xpath("//div/p[contains(text(),'"+secret+"')]")).isPresent()).toBe(true);
    };

    /**
     * Verify warning for customers not having storage allocated
     * it accepts zero parameters
     * author : Saurabh Patwardhan
     */
    cpsStorageMgtPage.prototype.verifyWarningForCustomersNotHavingStorageAllocated = function () {
        //Ignore sync
        //frameworkUtils.ignoreBrowserSync();

        //Goto Storage Management
        dashBoardUtils.goToStorageMgt();

        //Wait
        frameworkUtils.waitForElement();

        //Verify Client and Secret id
        expect(this.lbl_WarningForCustomersWithoutStorage.isPresent()).toBe(true);
    };

    return cpsStorageMgtPage;
})();

module.exports = cpsStorageMgtPage;
