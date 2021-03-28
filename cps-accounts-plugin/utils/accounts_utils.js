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
var customer_name = "Shrikant Firodiya 2";
var customer_email = "shrikant.firodiya+1266@emc.com";
var customer_id = "123456666";
var edit_adminemail = "test user 4";
var noadmin = "Test 60";

var dpc_130547_Json = require("../testdata/dpc-130547.json");
var dpc_130585_Json = require("../testdata/dpc-130585.json");
var dpc_130578_Json = require("../testdata/dpc-130578.json");
var dpc_130553_Json = require("../testdata/dpc-130553.json");

frameworkUtils = new framework_Utils();
dashBoardUtils = new dashBoard_Utils();
loginUtils = new login_Utils();

var cpsCustomerAccountsPage = ( function() {
    "use strict";
    function cpsCustomerAccountsPage() {
        this.chkbox_customer = element(By.xpath("//div/div[@class='emc-checkbox']"));
        this.btn_edit = element(By.xpath("//div[contains(text(),'Edit')]"));
        this.link_changeadmin = element(By.xpath("//a[contains(text(),'Change Admin')]"));
        this.btn_update_customer = element(By.xpath("//button[contains(text(),'Update Customer')]"));
        this.lbl_error_validemail = element(By.xpath("//div/div[contains(text(),'Please specify valid email id.')]"));
        this.txt_newadminemail = element(By.model("customerManagerVm.newAdminEmail"));
        this.txt_newemail = element(By.model("vm.user.username"));
        this.txt_firstname = element(By.model("vm.user.firstname"));
        this.txt_newpassword = element(By.model("vm.user.password"));
        this.btn_setupaccount = element(By.xpath("//button/span[contains(text(),'Set Up Account')]"));
        this.btn_createcustomer = element(By.xpath("//div/div/div[contains(text(),'Create Customer')]"));
        this.txt_customeraccount = element(By.model("customerManagerVm.newTenantName"));
        this.txt_customerid = element(By.model("customerManagerVm.newEmcCustomerId"));
        this.btn_creatnewecustomer = element(By.xpath("//div/div/button[contains(text(),'Create Customer')]"));
        this.chkbox_emcecs = element(By.model("customerManagerVm.entitlement.ecs2.enabled"));
        this.chkbox_cloudboostapplience = element(By.model("customerManagerVm.entitlement.cloudboost.enabled"));
        this.lbl_error_cust_3character_long = element(By.xpath("//div/div[contains(text(),'Customer name should be atleast 3 characters long.')]"));
        this.lbl_error_customerid = element(By.xpath("//div/div[contains(text(),'EMC Customer ID is required.')]"));
        this.lbl_error_uniqueemail = element(By.xpath("//form/div[contains(text(),'email is already taken, must be unique')]"));
        this.lbl_filter = element(By.xpath("//div/span[contains(text(),'Filters')]"));
        this.chkbox_filter_active = element(By.id("customer-accounts-filter-a0"));
        this.chkbox_filter_suspended = element(By.id("customer-accounts-filter-a1"));
        this.lbl_activerecord = element(By.xpath("//*[@id='content']/div[2]/div[2]/div/div[3]/div[2]/div[3]"));
        this.lbl_suspendedrecord = element(By.xpath("//div/div[contains(text(),'suspended')]"));
        this.txt_activecustomer = element(By.xpath("//span/span[contains(text(),'Active Customer')]"));
        this.txt_suspendedcustomer = element(By.xpath("//span/span[contains(text(),'Suspended')]"));
        this.txt_searchbox = element(By.model("customerListVm.searchText"));
        this.lbl_error_uniquecustomerid = element(By.xpath("//div/div[contains(text(),'This customer_id is already in use.')]"));
        this.lbl_error_uniquecustomername = element(By.xpath("//div/div[contains(text(),'This account name is already taken. ')]"));
        this.lbl_customer_details_title = element(By.xpath("//p/span[contains(text(),'Customer Details')]"));
        this.lbl_customer_edit_title = element(By.xpath("//div/h2[contains(text(),'Edit Customer')]"));
        this.lbl_customer = element(By.xpath("//div/p[contains(text(), '" + customer_name + "')]"));
        this.lbl_admin_name = element(By.xpath("//div/p[contains(text(),'Test')]"));
        this.lbl_admin_email = element(By.xpath("//p/span[contains(text(),'" + customer_email + "')]"));
        this.lbl_added = element(By.xpath("//div/p[contains(text(),'March 26, 2015')]"));
        this.lbl_emcecs = element(By.xpath("//li/div[contains(text(),'EMC ECS')]"));
        this.lbl_cloudboost_applience = element(By.xpath("//li/div[contains(text(),'CloudBoost Appliance')]"));
        this.lbl_forgotten_password_title = element(By.xpath("//div/h3[contains(text(),'Forgotten Password')]"));
        this.lbl_popup_reset_password = element(By.xpath("//div/h4[contains(text(),'Resetting Admin Password')]"));
        this.btn_view = element(By.xpath("//div/div[contains(text(),'View')]"));
        this.btn_done = element(By.xpath("//div/div[contains(text(),'Done')]"));
        this.lbl_selectedrow = element(By.xpath("//div/div[@class='ft-column ft-main ng-binding']"));
        this.btn_cancel = element(By.xpath("//div/div[contains(text(),'Cancel')]"));
        this.btn_more = element(By.id("taskMenuToggle"));
        this.btn_resetadminpassword = element(By.xpath("//li/span[contains(text(),'Reset Admin Password')]"));
        this.btn_suspendcustomer = element(By.xpath("//li/span[contains(text(),'Suspend Customer')]"));
        this.btn_unsuspendcustomer = element(By.xpath("//li/span[contains(text(),'Unsuspend Customer')]"));
        this.lbl_setupaccount = element(By.xpath("//div/h3[contains(text(),'Set Up Account')]"));
        this.lbl_customername = element(By.xpath("//div/div[contains(text(),'" + customer_name + "')]"));
        this.lbl_cancelsearch = element(By.name("icon-x"));
        this.lbl_allcustomer = element(By.xpath("//div/div[contains(text(),'30 items')]"));
        this.lbl_singlecustomer = element(By.xpath("//div/div[contains(text(),'1 items')]"));
        this.link_reinviteuser = element(By.xpath("//div/a[contains(text(),'Reinvite User to Set Up Account')]"));
    }

    /**
     * Cloud portal Verify  filter function
     */
    cpsCustomerAccountsPage.prototype.verifyFilter = function(){

        // launch customer accounts URL.
        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // select active status filter.
        this.select_filter("active");

        expect(this.lbl_activerecord.getText()).toEqual('');

        // select suspended status filter.
        this.select_filter("suspended");

        expect(this.lbl_suspendedrecord.getText()).toEqual('Suspended');

        expect(this.txt_activecustomer.isDisplayed()).toBe(true);
        expect(this.txt_suspendedcustomer.isDisplayed()).toBe(true);

        loginUtils.cpsLogout();
    };
    /**
     * Cloud portal Create new customer with feature access function
     */
    cpsCustomerAccountsPage.prototype.createNewCustomerwithFeatureaccess = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // click on create customer button.
        this.btn_createcustomer.click();
        frameworkUtils.waitForElement();

        // genrate random customer name.
        var cust_name = "Auto-"+Math.random();
        this.txt_customeraccount.sendKeys(cust_name);
        this.txt_customerid.sendKeys(Math.random().toString().slice(2,11));
        this.txt_newadminemail.sendKeys(dpc_130547_Json.new_admin_email);

        // select EMC ECS and cloud boost applience check-boxes.
        this.chkbox_emcecs.click();
        this.chkbox_cloudboostapplience.click();

        // click on create new customer button.
        this.btn_creatnewecustomer.click();
        frameworkUtils.longWaitForElement();

        // verify feature access applied.
        this.txt_searchbox.sendKeys(cust_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_view.click();
        frameworkUtils.waitForElement();

        // verify EMC ECS and cloud boost check-boxes selected.
        expect(this.lbl_emcecs.isDisplayed()).toBe(true);
        expect(this.lbl_cloudboost_applience.isDisplayed()).toBe(true);

        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();

        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newaccount");

        // genrate random email id.
        var emailid = "Automation+"+Math.random()+"@emc.com";
        this.txt_newemail.sendKeys(emailid);
        this.txt_firstname.sendKeys(dpc_130547_Json.firstname);
        this.txt_newpassword.sendKeys(dpc_130547_Json.password);

        // click on setup account button.
        this.btn_setupaccount.click();
        frameworkUtils.waitForElement();
        // click on continue to cloud portal link.
        loginUtils.link_continue_cloud_portal.click();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal Create new customer without feature access function
     */
    cpsCustomerAccountsPage.prototype.createNewCustomerwithoutFeatureaccess = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // click om create customer button.
        this.btn_createcustomer.click();
        frameworkUtils.waitForElement();

        // verify for blank customer account name.
        this.btn_creatnewecustomer.click();

        //rameworkUtils.waitForElement();
        expect(this.lbl_error_cust_3character_long.isDisplayed()).toBe(true);

        frameworkUtils.waitForElement();
        // genrate random customer name
        var cust_name = "Auto-"+Math.random();
        this.txt_customeraccount.sendKeys(cust_name);

        // verify for blank customer id.
        this.btn_creatnewecustomer.click();
        expect(this.lbl_error_customerid.isDisplayed()).toBe(true);

        this.txt_customerid.sendKeys(Math.random().toString().slice(2,11));

        // verify for blank email id.
        this.btn_creatnewecustomer.click();
        expect(this.lbl_error_validemail.isDisplayed()).toBe(true);

        this.txt_newadminemail.sendKeys(dpc_130585_Json.new_admin_email);
        // click on create new customer button.
        this.btn_creatnewecustomer.click();
        frameworkUtils.longWaitForElement();
        frameworkUtils.longWaitForElement();

        // verify feature access not applied.
        this.txt_searchbox.sendKeys(cust_name);
        frameworkUtils.waitForElement();
        // select customer row check-box.
        this.chkbox_customer.click();
        // click on edit button.
        this.btn_edit.click();
        frameworkUtils.waitForElement();

        expect(this.chkbox_emcecs.isSelected()).toBe(false);
        expect(this.chkbox_cloudboostapplience.isSelected()).toBe(false);

        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();

        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newaccount");
        // enter existing email id.
        this.txt_newemail.sendKeys(dpc_130585_Json.new_admin_email);
        this.txt_firstname.sendKeys(dpc_130585_Json.firstname);
        this.txt_newpassword.sendKeys(dpc_130585_Json.password);
        this.btn_setupaccount.click();
        frameworkUtils.waitForElement();
        expect(this.lbl_error_uniqueemail.isDisplayed()).toBe(true);

        // Enter unique email id.
        var emailid = "Automation+"+Math.random()+"@emc.com";
        this.txt_newemail.clear();
        this.txt_newemail.sendKeys(emailid);
        this.txt_firstname.sendKeys(dpc_130585_Json.firstname);
        this.txt_newpassword.sendKeys(dpc_130585_Json.password);
        // click on set up account button from opened email.
        this.btn_setupaccount.click();
        frameworkUtils.waitForElement();
        // click on continue to cloud portal link.
        loginUtils.link_continue_cloud_portal.click();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal edit admin email function
     */
    cpsCustomerAccountsPage.prototype.verifyeditadminemail = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        this.txt_searchbox.sendKeys(edit_adminemail);
        frameworkUtils.waitForElement();

        this.chkbox_customer.click();
        this.btn_edit.click();
        frameworkUtils.longWaitForElement();

        // click update customer without entering email.
        this.link_changeadmin.click();
        this.btn_update_customer.click();
        expect(this.lbl_error_validemail.isDisplayed()).toBe(true);

        // enter invalid email id
        this.txt_newadminemail.sendKeys(dpc_130578_Json.invalid_email);
        this.btn_update_customer.click();
        expect(this.lbl_error_validemail.isDisplayed()).toBe(true);

        // enter valid email id to receive email.
        this.txt_newadminemail.sendKeys(dpc_130578_Json.new_admin_email);
        this.btn_update_customer.click();
        frameworkUtils.waitForElement();
        loginUtils.cpsLogout();

        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newaccount");
        var emailid = "Automation+"+Math.random()+"@emc.com";
        this.txt_newemail.sendKeys(emailid);
        this.txt_firstname.sendKeys(dpc_130578_Json.firstname);
        this.txt_newpassword.sendKeys(dpc_130578_Json.password);
        this.btn_setupaccount.click();
        frameworkUtils.waitForElement();
        // click on continue to cloud portal link.
        loginUtils.link_continue_cloud_portal.click();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal edit customer details.
     */
    cpsCustomerAccountsPage.prototype.verifyEditCustomerdetails = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        this.txt_searchbox.sendKeys(dpc_130553_Json.search_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        // click on edit button.
        this.btn_edit.click();
        frameworkUtils.waitForElement();

        // enter existing customer name.
        this.txt_customeraccount.clear();
        this.txt_customeraccount.sendKeys(dpc_130553_Json.existing_search_name);
        // click on update customer button.
        this.btn_update_customer.click();
        frameworkUtils.shortWaitForElement();
        expect(this.lbl_error_uniquecustomername.isDisplayed()).toBe(true);

        // enter existing customer ID.
        this.txt_customeraccount.clear();
        this.txt_customeraccount.sendKeys(dpc_130553_Json.updated_search_name);
        // clear customer id text-box.
        this.txt_customerid.clear();
        this.txt_customerid.sendKeys(dpc_130553_Json.existing_customerID);
        // click on update customer button.
        this.btn_update_customer.click();
        frameworkUtils.shortWaitForElement();
        expect(this.lbl_error_uniquecustomerid.isDisplayed()).toBe(true);

        //Enter valid Cust ID
        this.txt_customerid.clear();
        this.txt_customerid.sendKeys(dpc_130553_Json.customerID);

        // untick check-boxes EMC ECS and cloudboost applience.
        this.chkbox_emcecs.click();
        this.chkbox_cloudboostapplience.click();
        // click on update customer button.
        this.btn_update_customer.click();
        frameworkUtils.waitForElement();
        frameworkUtils.waitForElement();

        //tick feature access.and search by Shrikant Firodiya 3
        this.txt_searchbox.clear();
        this.txt_searchbox.sendKeys(dpc_130553_Json.updated_search_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_edit.click();
        frameworkUtils.waitForElement();

        expect(this.txt_customerid.getAttribute('value')).toEqual(dpc_130553_Json.customerID);

        // verify untick & correct customer open by checking customer ID.
        this.txt_customeraccount.clear();
        this.txt_customeraccount.sendKeys(dpc_130553_Json.search_name);
        // verify untick
        expect(this.chkbox_emcecs.isSelected()).toBe(false);
        expect(this.chkbox_cloudboostapplience.isSelected()).toBe(false);

        // select check-boxes.
        this.chkbox_emcecs.click();
        this.chkbox_cloudboostapplience.click();
        // click on update customer button.
        this.btn_update_customer.click();
        frameworkUtils.waitForElement();
        frameworkUtils.waitForElement();

        this.txt_searchbox.clear();
        this.txt_searchbox.sendKeys(dpc_130553_Json.search_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_edit.click();
        frameworkUtils.waitForElement();
        // verify check-box selected.
        expect(this.chkbox_emcecs.isSelected()).toBe(true);
        expect(this.chkbox_cloudboostapplience.isSelected()).toBe(true);
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal customer details.
     */
    cpsCustomerAccountsPage.prototype.verifyCustomerDetails = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_view.click();
        frameworkUtils.waitForElement();

        // verify customer details.
        expect(this.lbl_customer_details_title.isDisplayed()).toBe(true);
        frameworkUtils.longWaitForElement();                                                                          /*Ketaki */
        expect(this.lbl_customer.isDisplayed()).toBe(true);
        expect(this.lbl_admin_name.isDisplayed()).toBe(true);
        expect(this.lbl_admin_email.isDisplayed()).toBe(true);
        expect(this.lbl_added.isDisplayed()).toBe(true);
        expect(this.lbl_emcecs.isDisplayed()).toBe(true);
        expect(this.lbl_cloudboost_applience.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        // verify tick
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal view customer details.
     */
    cpsCustomerAccountsPage.prototype.verifyviewcustomerdetails = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.longWaitForElement();


        // search customer name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_view.click();
        frameworkUtils.waitForElement();

        // verify customer details.
        expect(this.lbl_customer_details_title.isDisplayed()).toBe(true);
        frameworkUtils.longWaitForElement();
        expect(this.lbl_customer.isDisplayed()).toBe(true);
        expect(this.lbl_admin_name.isDisplayed()).toBe(true);
        expect(this.lbl_admin_email.isDisplayed()).toBe(true);
        expect(this.lbl_added.isDisplayed()).toBe(true);
        expect(this.lbl_emcecs.isDisplayed()).toBe(true);
        expect(this.lbl_cloudboost_applience.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        this.btn_done.click();
        frameworkUtils.waitForElement();

        // click on selected row.
        this.txt_searchbox.clear();
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.lbl_selectedrow.click();
        frameworkUtils.waitForElement();

        // verify customer details.
        expect(this.lbl_customer_details_title.isDisplayed()).toBe(true);
        expect(this.lbl_customer.isDisplayed()).toBe(true);
        expect(this.lbl_admin_name.isDisplayed()).toBe(true);
        expect(this.lbl_admin_email.isDisplayed()).toBe(true);
        expect(this.lbl_added.isDisplayed()).toBe(true);
        expect(this.lbl_emcecs.isDisplayed()).toBe(true);
        expect(this.lbl_cloudboost_applience.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal edit button functionality.
     */
    cpsCustomerAccountsPage.prototype.verifyEditbuttonfunctionality = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();
        this.btn_edit.click();
        frameworkUtils.waitForElement();

        // verify edit screen opens after clicking on edit button.
        expect(this.lbl_customer_edit_title.isDisplayed()).toBe(true);
        this.btn_cancel.click();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.clear();
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.longWaitForElement();
        this.chkbox_customer.click();
        this.btn_view.click();
        frameworkUtils.waitForElement();
        this.btn_edit.click();
        frameworkUtils.waitForElement();

        // verify edit screen opens after clicking on selected row.
        expect(this.lbl_customer_edit_title.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal reset admin password functionality.
     */
    cpsCustomerAccountsPage.prototype.verifyResetadminpassword = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();

        // click on more button.
        this.btn_more.click();
        // click on reset admin password button.
        this.btn_resetadminpassword.click();
        frameworkUtils.shortWaitForElement();
        expect(this.lbl_popup_reset_password.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();

        // verify email recive in mail-box.
        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newpassword");
        expect(this.lbl_forgotten_password_title.isDisplayed()).toBe(true);
    };

    /**
     * Cloud portal suspend/unsuspend user functionality.
     */
    cpsCustomerAccountsPage.prototype.verifysuspend_unsuspenduser = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();

        this.chkbox_customer.click();

        // Suspend user account.
        this.btn_more.click();
        this.btn_suspendcustomer.click();

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
        frameworkUtils.waitForElement();

        // verify account is suspended.
        loginUtils.suspendedcpsLogin(customer_email,"Admin@123");

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
        frameworkUtils.waitForElement();

        // Unsuspend user account.
        loginUtils.cpsLogin(envConfig_Json.salesOps_uname,envConfig_Json.salesOps_pass);
        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // enter customer name in search box
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();

        // click on more button.
        this.btn_more.click();
        // click on unsuspend button.
        this.btn_unsuspendcustomer.click();
        frameworkUtils.waitForElement();
        loginUtils.cpsLogout();
        frameworkUtils.waitForElement();

        // verify user account active.
        loginUtils.cpsLogin(customer_email,"Admin@123");

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
        frameworkUtils.waitForElement();
    };

    /**
     * Cloud portal reset admin password with no admin functionality.
     */
    cpsCustomerAccountsPage.prototype.verifyResetadminpassword_noadmin = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // search customer name
        this.txt_searchbox.sendKeys(noadmin);
        frameworkUtils.waitForElement();
        this.chkbox_customer.click();

        this.btn_more.click();
        this.btn_resetadminpassword.click();
        frameworkUtils.shortWaitForElement();
        expect(this.lbl_popup_reset_password.isDisplayed()).toBe(true);
        frameworkUtils.waitForElement();

        // click on Reinvite user link.
        this.link_reinviteuser.click();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();

        // verify email recive in mail-box.
        // login to emc-web outlook.
        frameworkUtils.loginEmcOutlook(envConfig_Json.emc_weboutlook_uname,envConfig_Json.emc_weboutlook_pass,"newaccount");

        expect(this.lbl_setupaccount.isDisplayed()).toBe(true);
    };

    /**
     * Cloud portal customer search functionality.
     */
    cpsCustomerAccountsPage.prototype.customer_search = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // Search by name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();

        expect(this.lbl_customername.isDisplayed()).toBe(true);
        frameworkUtils.ignoreBrowserSync();
        // click on cross button to cancel search.
        this.lbl_cancelsearch.click();
        frameworkUtils.longWaitForElement();

        // Search by ID
        this.txt_searchbox.sendKeys(customer_id);
        frameworkUtils.waitForElement();

        expect(this.lbl_customername.isDisplayed()).toBe(true);
        frameworkUtils.ignoreBrowserSync();
        // click on cross button to cancel search.
        this.lbl_cancelsearch.click();
        frameworkUtils.waitForElement();
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal After account filter customer search functionality.
     */
    cpsCustomerAccountsPage.prototype.afteraccountfilter_search = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();
        expect(this.lbl_allcustomer.isDisplayed()).toBe(true);

        // apply account filter.
        this.select_filter("active");

        // Search by name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();

        expect(this.lbl_singlecustomer.isDisplayed()).toBe(true);
        expect(this.lbl_customername.isDisplayed()).toBe(true);
        frameworkUtils.ignoreBrowserSync();
        // click on cross button to cancel search.
        this.lbl_cancelsearch.click();
        frameworkUtils.longWaitForElement();
        expect(this.lbl_allcustomer.isDisplayed()).toBe(true);

        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Cloud portal Before account filter customer search functionality.
     */
    cpsCustomerAccountsPage.prototype.beforeaccountfilter_search = function(){

        dashBoardUtils.goToCustomerAccounts();
        frameworkUtils.waitForElement();

        // Search by name
        this.txt_searchbox.sendKeys(customer_name);
        frameworkUtils.waitForElement();

        this.select_filter("active");

        expect(this.lbl_customername.isDisplayed()).toBe(true);
        frameworkUtils.ignoreBrowserSync();
        loginUtils.cpsLogout();
    };

    /**
     * Select filter functionality.
     * it accepts one parameter filter name
     */
    cpsCustomerAccountsPage.prototype.select_filter = function(filter){

        this.lbl_filter.click();
        frameworkUtils.waitForElement();

        // apply account filter.
        if(filter == "active")
        {
            this.chkbox_filter_active.click();
        }
        else
        // apply suspended filter.
        if(filter=="suspended")
        {
            this.chkbox_filter_suspended.click();
        }

        frameworkUtils.longWaitForElement();
        this.lbl_filter.click();
        frameworkUtils.waitForElement();
    };


    return cpsCustomerAccountsPage;
})();

module.exports = cpsCustomerAccountsPage;
