/**
 * This file consists of core functions that help non-functional ui-automation e.g. waitforelement or browser launch
 * Date: 09/10/2015
 * @type {Function}
 *
 */


var frameworkUtils = ( function() {
    "use strict";
    function frameworkUtils(){}

    /**
     * This function calls the application url from browser.
     */
    frameworkUtils.prototype.heatUp = function () {
        browser.get(this.getCPSURL());
        browser.driver.navigate().refresh();
        this.waitForElement();
    };


    /**
     * This function retruns CPS url depending on the environment type mentioned in envConfig.json
     */
    frameworkUtils.prototype.getCPSURL = function () {
        var env_details = require("../envConfig.json");
        //Compose env url
        return "https://console." +env_details.cps_url+ ".dpccloud.com/#";

    };


    //Cool down reports to Test Link in case envConfig.json has report_test_mgt set to true
    frameworkUtils.prototype.coolDown = function (test_id,assertfailcount) {
        var env_details = require("../envConfig.json");

        if (env_details.report_into_test_mgt) {
            var TestlinkConnect = require("testlink-connect"),
            tc = new TestlinkConnect(env_details.apikey, env_details.testlinkurl);

            var objExternal = {
                user: env_details.user,
                testplanid: env_details.test_plan_id,
                buildid: env_details.build_id,
                testcaseexternalid: test_id,
                status: "p",
                overwrite: env_details.overwrite_test_results
            };

            if (assertfailcount > 0) {
                objExternal.status = 'f'
            }

            tc.reportTCResult(objExternal);
        }

        //CleanUp cache.
        browser.driver.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    };

   /**
     * Explicit Sleep for 3 sec in-case if application loading delays.
     */
    frameworkUtils.prototype.shortWaitForElement = function(){
        browser.sleep(3000);
    };

    /**
     * Explicit Sleep for 10 sec in-case if application loading delays.
     */
    frameworkUtils.prototype.waitForElement = function(){
        browser.sleep(23000);
    };

    /**
     * Explicit Sleep for 15 sec in-case if application loading delays.
     */
    frameworkUtils.prototype.longWaitForElement = function(){
        browser.sleep(60000);
    };

    /**
     * Explicit Sleep for 10 sec in-case if application loading delays.
     */
    frameworkUtils.prototype.ignoreBrowserSync = function(){
        browser.ignoreSynchronization = true;
    };
    /**
     * Login to emc web-outlook.
     */
    frameworkUtils.prototype.loginEmcOutlook = function(uname,password,mailtype){

        browser.driver.get("https://email.emc.com/owa/");
        browser.driver.findElement(by.id('username')).sendKeys(uname);
        browser.driver.findElement(by.id('password')).sendKeys(password);
        browser.driver.findElement(by.className('btn')).click();
        this.waitForElement();

        var mail_subject,button_name;

        if(mailtype == "newpassword")
        {
            mail_subject = "Cloud Portal Password Reset";
            button_name = "New Password";
        }
        else
        if(mailtype == "newaccount")
        {
            mail_subject = "Cloud Portal Invitation";
            button_name = "Account";
        }

        // refresh mail-box.
        this.waitForElement();
        browser.driver.findElement(By.id("lnkHdrcheckmessages")).click();
        this.waitForElement();

        // Open email
        browser.driver.findElement(By.xpath("//*[contains(@class,'bld')]//*[contains(text(),'"+mail_subject+"')]")).click();
        this.waitForElement();

        // Click on Set up account button.
        browser.driver.findElement(By.xpath("//td/p/a[contains(text(),'"+button_name+"')]")).click();
        this.waitForElement();

        // Navigate to new tab
        var secondWindowHandle,firstWindowHandle;
        browser.getAllWindowHandles().then(function (handles) {
            secondWindowHandle = handles[1];
            firstWindowHandle = handles[0];

            browser.switchTo().window(firstWindowHandle).then(function () { //the focus moves on new tab
            });
           // browser.driver.findElement(By.id("lo")).click();
            //browser.close(firstWindowHandle);
            browser.switchTo().window(secondWindowHandle).then(function () { //the focus moves on new tab
            });

        });

    };

    /**
     * Login to emc web-outlook.
     */
    frameworkUtils.prototype.loginEmcOutlook_EHN = function(uname,password,mailtype){

        browser.driver.get("https://email.emc.com/owa/");
        browser.driver.findElement(by.id('username')).sendKeys(uname);
        browser.driver.findElement(by.id('password')).sendKeys(password);
        browser.driver.findElement(by.className('btn')).click();
        this.waitForElement();

        // refresh mail-box.
        this.shortWaitForElement();
        browser.driver.findElement(By.id("lnkHdrcheckmessages")).click();
        this.shortWaitForElement();
        browser.driver.findElement(By.id("lnkHdrcheckmessages")).click();
        this.shortWaitForElement();

        var mail_subject;
        if(mailtype == "dismiss")
        {
            mail_subject = "[Info] Alert with id:";
        }
        else
        {
            mail_subject = "Cloud Portal";
        }

        // Open first unread email
        browser.driver.findElement(By.xpath("//*[contains(@class,'bld')]//*[contains(text(),'"+mail_subject+"')]")).click();
        this.shortWaitForElement();

        if(mailtype == "add")
        {
            console.log("recipient add");
            if(browser.driver.findElement(By.xpath("//td/p[contains(text(),'You have been added or updated as a recipient of email notifications')]")).isDisplayed())
            {
                console.log("-----------------");
                expect(true).toBe(true);
            }else
            {
                expect(true).toBe(false);
            }
            browser.driver.findElement(By.xpath("//tr/td[contains(text(),'Cloud Portal Notifications Subscription Update')]")).isDisplayed();
            browser.driver.findElement(By.xpath("//tr/td/span[contains(text(),'EMC Cloud Portal [no-reply@dpccloud.com]')]")).isDisplayed();
        }
        else
        if(mailtype == "update")
        {
            console.log("recipient add");
            if(browser.driver.findElement(By.xpath("//td/p[contains(text(),'You have been added or updated as a recipient of email notifications')]")).isDisplayed())
            {
                console.log("-----------------");
                expect(true).toBe(true);
            }else
            {
                expect(true).toBe(false);
            }
            browser.driver.findElement(By.xpath("//tr/td[contains(text(),'Cloud Portal Notifications Subscription Update')]")).isDisplayed();
            browser.driver.findElement(By.xpath("//tr/td/span[contains(text(),'EMC Cloud Portal [no-reply@dpccloud.com]')]")).isDisplayed();
        }
        else
        if(mailtype == "delete")
        {
            console.log("recipient delete");
            if(browser.driver.findElement(By.xpath("//td/p[contains(text(),'You have been removed as a recipient of email notifications')]")).isDisplayed())
            {
                console.log("-----------------");
                expect(true).toBe(true);
            }else
            {
                expect(true).toBe(false);
            }
            browser.driver.findElement(By.xpath("//tr/td[contains(text(),'Cloud Portal Notifications Subscription Update')]")).isDisplayed();
            browser.driver.findElement(By.xpath("//tr/td/span[contains(text(),'EMC Cloud Portal [no-reply@dpccloud.com]')]")).isDisplayed();
        }
        else
        if(mailtype == "dismiss")
        {
            console.log("recipient delete");
            if(browser.driver.findElement(By.xpath("//td/p[contains(text(),'You have been removed as a recipient of email notifications')]")).isDisplayed())
            {
                console.log("-----------------");
                expect(true).toBe(true);
            }else
            {
                expect(true).toBe(false);
            }
            browser.driver.findElement(By.xpath("//tr/td[contains(text(),'Cloud Portal Notifications Subscription Update')]")).isDisplayed();
            browser.driver.findElement(By.xpath("//tr/td/span[contains(text(),'EMC Cloud Portal [no-reply@dpccloud.com]')]")).isDisplayed();

        }
        browser.driver.findElement(By.id("lo")).click();
    };
    return frameworkUtils;
})();

module.exports = frameworkUtils;
