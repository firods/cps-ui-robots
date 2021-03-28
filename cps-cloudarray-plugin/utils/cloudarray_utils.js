/**
 * Functions and objects declarations for Login Dialogue and related web pages should be automated here
 * Date: 09/10/2015
 * @type {Function}
 *
 */
var frameworkUtils,dashBoardUtils,loginUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashBoard_Utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
var envConfig_Json = require("../../envConfig.json");
var ca_ua01_json = require("../../cps-cloudarray-plugin/testdata/ca-ua01-add-user-account.json");

frameworkUtils = new framework_Utils();
dashBoardUtils = new dashBoard_Utils();
loginUtils = new login_Utils();

var cpsCloudArrayPage = ( function() {
    "use strict";
    function cpsCloudArrayPage() {
        this.lbl_useraccount = element(By.xpath("//span[contains(text(),'User Accounts')]"));
        this.btn_adduseraccount = element(By.xpath("//button[contains(text(),'Add User Account')]"));
        this.txt_firstname = element(By.model("vm.addUserConfig.firstName"));
        this.txt_lastname = element(By.model("vm.addUserConfig.lastName"));
        this.txt_company = element(By.model("vm.addUserConfig.companyName"));
        this.txt_email = element(By.model("vm.addUserConfig.email"));
        this.drpdwn_country = element(By.model("vm.addUserConfig.officialAddress.country"));
        this.txt_city = element(By.model("vm.addUserConfig.officialAddress.city"));
        this.txt_addressline1 = element(By.model("vm.addUserConfig.officialAddress.addressLine1"));
        this.txt_zipcode = element(By.model("vm.addUserConfig.officialAddress.zip"));
        this.txt_phnno = element(By.model("vm.addUserConfig.officialAddress.phone"));
        this.chkbox_billingaddr = element(By.model("vm.sameBillingAddress"));
        this.chkbox_billingaddr = element(By.model("vm.sameBillingAddress"));
        this.txt_search = element(By.model("searchText"));
        this.chkbox_userlist = element(By.xpath("//*[@ng-checked='vm.isSelectedAccount(account)']"));
        this.btn_details = element(By.xpath("//button[contains(text(),'Details')]"));
    }

    /**
     * Cloud array create end user account.
     */
    cpsCloudArrayPage.prototype.createEndUserAccount = function(){

        // launch cloud array URL.
        dashBoardUtils.goToCloudArray();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        this.lbl_useraccount.click();
        frameworkUtils.waitForElement();
        this.btn_adduseraccount.click();
        frameworkUtils.waitForElement();
        var emailid = "Automation+"+Math.random()+"@emc.com";
        this.txt_firstname.sendKeys(emailid);
        this.txt_lastname.sendKeys(ca_ua01_json.lastname);
        this.txt_company.sendKeys(ca_ua01_json.companyname);

        this.txt_email.sendKeys(emailid);
        this.drpdwn_country.sendKeys(ca_ua01_json.country);

        frameworkUtils.shortWaitForElement();
        this.txt_city.sendKeys(ca_ua01_json.city);
        this.txt_addressline1.sendKeys(ca_ua01_json.addressline1);
        this.txt_zipcode.sendKeys(ca_ua01_json.zipcode);
        this.txt_phnno.sendKeys(ca_ua01_json.phoneno);
        frameworkUtils.shortWaitForElement();
        this.chkbox_billingaddr.click();
        this.btn_adduseraccount.click();
        frameworkUtils.waitForElement();
        this.txt_search.sendKeys(emailid);
        frameworkUtils.shortWaitForElement();
        expect(element(By.xpath("//*[contains(text(),'"+emailid+"')]")).isDisplayed()).toBe(true);
    };
    /**
     * Cloud array end user account details.
     */
    cpsCloudArrayPage.prototype.endUserAccountDetails = function(){

        // launch cloud array URL.
        dashBoardUtils.goToCloudArray();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        this.lbl_useraccount.click();
        frameworkUtils.waitForElement();

        var emailid = "Auto_Shrikant";
        this.txt_search.sendKeys(emailid);
        frameworkUtils.waitForElement();
        this.chkbox_userlist.click();
        frameworkUtils.waitForElement();
        this.btn_details.click();
        frameworkUtils.waitForElement();

        //expect(element(By.xpath("//*[contains(text(),'"+emailid+"')]")).isDisplayed()).toBe(true);
    };


    return cpsCloudArrayPage;
})();

module.exports = cpsCloudArrayPage;
