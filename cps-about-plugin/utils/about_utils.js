/**
 * Functions and objects declarations for About Cloud Portal and related web pages should be automated here
 * Date: 09/10/2015
 * author : Saurabh Patwardhan
 * @type {Function}
 *
 */

var frameworkUtils,dashboardUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");

frameworkUtils = new framework_Utils();
dashboardUtils = new dashboard_utils();


var cpsAboutPage = ( function() {
    "use strict";
    function cpsAboutPage() {

        this.link_termsAndConditions = element(By.xpath("//a[contains(text(),'Terms & Conditions')]"));     /*Ketaki*/
        this.link_policy = element(By.xpath("//a[contains(text(),'Privacy Policy')]"));                    /*Ketaki*/
        this.lbl_ecsOnlineServiceAgreement = element(By.xpath("//h1[contains(text(),'ECS Online Services Agreement')]"));   /*Ketaki*/
        this.lbl_EMCCorpStatement = element(By.xpath("//*[@id='content']/div[2]/div/div/h1"));         /*Ketaki*/
    }

    /**
     * Verifies About page objectsS
     * Has to be called after navigating to About page
     * it accepts zero parameters of String type
     */
    cpsAboutPage.prototype.verifyAboutPage = function(){

        //Goto About Cloud Portal
        dashboardUtils.goToAbout();

        frameworkUtils.waitForElement();
        browser.ignoreSynchronization = true;

        expect(this.link_termsAndConditions.isDisplayed()).toBe(true);
        expect(this.link_policy.isDisplayed()).toBe(true);

    }

    /*Author - Ketaki*/
    /* Verifies Terms and Conditions Link
     * it accepts no parameters of String typeS
     */
    cpsAboutPage.prototype.verifyTermsAndConditionsLink = function(){

        //Goto About Cloud Portal
        dashboardUtils.goToAbout();

        browser.ignoreSynchronization = true;

        //Click on terms and conditions  link
        this.link_termsAndConditions.click();

        frameworkUtils.waitForElement();

        //compare page title to "ECS Online Services Agreement"
        expect(this.lbl_ecsOnlineServiceAgreement.getText()).toEqual('ECS Online Services Agreement');

    }

    /*Author  - Ketaki*/
    /* Verifies Policy link
     * it accepts no parameters of String type
     */
    cpsAboutPage.prototype.verifyPolicyLink = function(){

        //Goto About Cloud Portal
        dashboardUtils.goToAbout();

        browser.ignoreSynchronization = true;

        //Click on policy link
        this.link_policy.click();

        frameworkUtils.waitForElement();

        //compare page title to "EMC Corporation Privacy Statement"
        expect(this.lbl_EMCCorpStatement.getText()).toEqual("EMC Corporation Privacy Statement");

    }

    return cpsAboutPage;
})();

module.exports = cpsAboutPage;