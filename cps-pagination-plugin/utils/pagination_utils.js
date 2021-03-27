/**
 * Functions and objects declarations for Pagination and related web pages should be automated here
 * Date: 24/11/2015
 * author : Ketaki Deshpande
 * @type {Function}
 *
 */
var frameworkUtils,dashboardUtils,loginUtils;
var framework_Utils = require("../../cp-utils/framework_utils.js");
var dashboard_utils = require("../../cps-dashboard-plugin/utils/dashboard_utils.js");
var login_Utils = require("../../cps-login-plugin/utils/login_utils.js");
var env_details = require("../../envConfig.json");
var page_count_on_desktop_view =7;
var page_count_on_mobile_view =3;

frameworkUtils = new framework_Utils();
dashboardUtils = new dashboard_utils();
loginUtils = new login_Utils();


var cpsPaginationPage = ( function() {
    "use strict";
    function cpsPaginationPage() {

        this.btn_prev = element(by.xpath("//span[contains(text(),'Prev')]"));
        this.btn_next = element(by.xpath("//span[contains(text(),'Next')]"));

        this.lbl_totalNoOfEvents = element(by.binding('pagerVm.totalItems || 0'));

        this.lbl_selectedtPageNo = element(by.xpath("//li/span[@class='pagination-page ng-binding selected-page']"));

        this.lbl_recordsOnPage = element.all(By.xpath("//div/div/div/div[@class='ft-row ng-scope']"));

        this.lbl_recordCount = element.all(By.xpath("//div/span[@class='bold ng-binding']"));

        this.lbl_visiblePageNo = element.all(by.repeater('page in paginationVm.visiblePages'));
        this.lbl_firstpageselect = element(by.xpath("//li/span[contains(@class,'pagination-page ng-binding selected-page') and contains(text(),'1')]"));
        this.lbl_secondpageselect = element(by.xpath("//li/span[contains(@class,'pagination-page ng-binding selected-page') and contains(text(),'2')]"));
        this.lbl_secondpageno = element(by.xpath("//li/span[contains(text(),'2')]"));
        this.lbl_totalrecordsonpage = element(by.xpath("//div/span[3][@class='bold ng-binding']"));
        this.lblM_visiblePageNo = element.all(By.repeater('page in paginationVm.visiblePages'));





    }

    /* Author - Ketaki */
    /**
     *This function verifies pagination controls on the page
     * Checks for page 1 to page 7 and Prev and next button
     * it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyPaginationControls = function(){


        //Verify  if page 1-7 are displayed.
        frameworkUtils.ignoreBrowserSync();
        frameworkUtils.waitForElement();


        var expected  = 1;
           element.all(by.repeater('page in paginationVm.visiblePages')).each (function(elem) {

               elem.getText().then(function(text) {

                       expect(text).toContain(expected);
                       expected++;
               });
           });

        //verify if Prev button is present.
        expect(this.btn_prev.isPresent()).toBe(true);

        //Verify if Next button is present
        expect(this.btn_next.isPresent()).toBe(true);


    };


    /* Author - Ketaki */
    /* Verifies pagination controls on the Customer Accounts Plugin
    *  it accepts zero parameters of String type
    */

    cpsPaginationPage.prototype.verifyPaginationControlsCustomerAccounts = function(){

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();

        //verify controls
        this.verifyPaginationControls();

    };


    /* Author - Ketaki */
    /* Verifies pagination controls on the EHN Plugin
     *  it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyPaginationControlsEHN = function(){

        //Go to CustomerAccounts plugin
        dashboardUtils.goToEventHistory();

        //verify controls
        this.verifyPaginationControls();

    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    /* Author - Ketaki */
    /* Verifies if Prev is button is disable
     * when user is on the 1st page
     *  it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyPrevIsDisable = function (){


        // verify if user is on the first page
        expect(this.lbl_selectedtPageNo.getText()).toEqual('1');

        //verify if Previous button is disabled

        //Find all elements with class : pagination-page pagination-control disabled
        var  elem = element.all(by.xpath("//li/span[@class='pagination-page pagination-control disabled']"));
        expect(elem.get(1).getText()).toBe('Prev');


    };


    /* Author - Ketaki */
    /* Verifies if Prev is button is disable for EHN plugin
     * when user is on the 1st page
     *  it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyPrevIsDisableEHN = function () {

        //Go to CustomerAccounts plugin
        dashboardUtils.goToEventHistory();

        //Verifies if Prev button is disabled
        this.verifyPrevIsDisable();

    };


    /* Author - Ketaki */
    /* Verifies if Prev is button is disable for Customer Accounts plugin
     * when user is on the 1st page
     *  it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyPrevIsDisableCustomerAccounts = function () {

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();

        frameworkUtils.waitForElement();

        //Verifies if Prev button is disabled
        this.verifyPrevIsDisable();

    };


    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    /* Author - Ketaki */
    /* Verifies if Next is button is disable
     * when user is on the last page
     *  it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyNextIsDisable = function(){

        frameworkUtils.waitForElement();

        //Go to last page
        var totalPages;

        this.lbl_totalNoOfEvents.getText().then(function(text) {
            console.log(text);
            totalPages = Math.ceil(text / 30);
            console.log(totalPages);

        });

        //for(var i=1; i<=9; i++)    // DONT USE HARD CODE VAL
        //{
        //    frameworkUtils.ignoreBrowserSync();
        //    frameworkUtils.longWaitForElement();
        //    this.btn_next.click();
        //    //console.log('DONE!!');
        //    frameworkUtils.longWaitForElement();
        //
        //};

        if(!env_details.mobile_emulation){

            this.gotoPage(7);
            this.gotoPage(10);

        }
        else{

            for(var i =3; i<=10; i++)
            {
                this.gotoPage(i);
            }

        }



        //Check if next button belongs to class : disabled
        var  elems = element.all(by.xpath("//li/span[@class='pagination-page pagination-control disabled']"));
        expect(elems.get(0).getText()).toEqual('Next');


    };


    /* Author - Ketaki */

    cpsPaginationPage.prototype.verifyNextIsDisableEHN = function(){

        //Go to EHN plugin
        dashboardUtils.goToEventHistory();

        frameworkUtils.waitForElement();

        //Verifies if Next button is disabled on the last page
        this.verifyNextIsDisable();

    };

    cpsPaginationPage.prototype.verifyNextIsDisableCustomerAccounts = function(){

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();

        //Verifies if Next button is disabled on the last page
        this.verifyNextIsDisable();

    };

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    /* Ketaki */
    /* Function goes to the specified page
     *  it accepts one parameters of String type
     *  @param1 : pageNo  - page no to which user wants to navigate to
     */
    cpsPaginationPage.prototype.gotoPage = function(pageNo){

        element(By.xpath("//li/span[contains(text(),'" + pageNo + "')]")).click();
        frameworkUtils.waitForElement();
        frameworkUtils.waitForElement();


    };


    /* Author- Ketaki */
    /* Function checks the number of records on the current page
     *  it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyNoOfRecordsOnPage = function(){

        // check the number of records on the page
        this.lbl_recordsOnPage.count().then( function(count){
            expect(count).toEqual(30);
            //console.log(count);

        });

    };


    /* Ketaki */
    /* verifies record count label at the bottom center
     *  it accepts one parameters of String type
     *  @param1 : pageNo  - page no to which user wants to navigate to
     */

    cpsPaginationPage.prototype.verifyRecordCountlbl = function(pageNo)
    {

        //Verify if record_from count is right
        var recordsFrom =( pageNo * 30) - 29 ;
        this.lbl_recordCount.get(0).getText().then(function(text){
            if(text == recordsFrom){

                expect(true).toBe(true);
            }
            else{
                expect(true).toBe(false);
            }
        });


        var recordsTo = pageNo * 30;

        //if we are on last page and records are less that pageno * 30.
        this.lbl_totalNoOfEvents.getText().then(function(text){

            if(text <=recordsTo){

                recordsTo = text;

            }

        });

        //Verify if record_to count is right
        this.lbl_recordCount.get(1).getText().then(function(text){

            if(text == recordsTo){
                expect(true).toBe(true);
            }
            else{
                expect(true).toBe(false);
            }

        });

    };


    /* Author - Ketaki */
    /* verifies the navigation in three steps.
     * 1: goes to specified page
     * 2. checks for the records present on the page
     * 3.checks the  record count label at the bottom center
     * it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyNavigation = function(){

        frameworkUtils.waitForElement();
        var page_No;
        if(!env_details.mobile_emulation){

            //Go to a randome page.. here page No. 5
            page_No=5;
            this.gotoPage(page_No);
            this.verifyNoOfRecordsOnPage();
            this.verifyRecordCountlbl(page_No);

        }


        //Go to a randome page.. here page No. 3
        page_No = 3;
        this.gotoPage(page_No);
        this.verifyNoOfRecordsOnPage();
        this.verifyRecordCountlbl(page_No);

        //ADD going to last page no

    };

    /* Author - Ketaki */
    /* verifies the navigation for EHN plugin
     * it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyNavigationEHN = function(){

        //Go to EHN plugin
        dashboardUtils.goToEventHistory();

        //Verifies navigation for EHN plugin
        this.verifyNavigation();

    };


    /* Author - Ketaki */
    /* verifies the navigation for Customer Accounts plugin
     * it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyNavigationCustomerAccounts = function(){


        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();

        frameworkUtils.waitForElement();

        //Verifies navigation for Customer Accounts plugin
        this.verifyNavigation();

    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    /* Author - Ketaki */
    /* verifies if pagination is reset
     * it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyResetPagination = function(){


        frameworkUtils.waitForElement();

        //Verifies if Prev button is disabled
        this.verifyPrevIsDisable();

        //verify if Prev button is present.
        expect(this.btn_prev.isPresent()).toBe(true);

        //Verify if Next button is present
        expect(this.btn_next.isPresent()).toBe(true);


    };


    //EHN plugin temp code
    cpsPaginationPage.prototype.selectEHNTab = function(tabName){


        element(By.xpath("//div/div[contains(text(),'" + tabName + "')]")).click();


    };

    /* Author - Ketaki */
    /* verifies whether pagination is resert on different  tabs  for EHN plugin
     * it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.resetPaginationEHN = function(){

        //Go to EHN plugin
        dashboardUtils.goToEventHistory();

        //Already Alert tab is selected so directly verify if pagination is reset
        this.verifyResetPagination();

        if(!env_details.mobile_emulation){
            this.gotoPage(6);

        }
        else {
            this.gotoPage(2);
        }

        frameworkUtils.longWaitForElement();

        //Select tab Warning
        this.selectEHNTab('warning');
        this.verifyResetPagination();
        frameworkUtils.waitForElement();

        //Select tab Info
        this.selectEHNTab('info');
        this.verifyResetPagination();
        frameworkUtils.waitForElement();

        //Select tab Error
        this.selectEHNTab('error');
        this.verifyResetPagination();

    };

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------


    /* Author - Ketaki */
    /* verifies if page marker settles in the middle
     * it accepts one parameters of numeric type
     */

    cpsPaginationPage.prototype.verifyPageMarker = function(pageNo){


        //Go to a specific page
        this.gotoPage(pageNo);

        //Total visible page numbers  should total 7
        expect(this.lbl_visiblePageNo.count()).toEqual(7);

        //Locate center page number
        var centerPageNo = this.lbl_visiblePageNo.get(3);

        centerPageNo.getText().then(function(text){

            //Verify if selected page comes in center
            expect(parseInt(text)).toEqual(pageNo);

        });

 };



    /* Author - Ketaki */
    /* verifies if page marker settles in the middle
     * it accepts one parameters of numeric type
     */

    cpsPaginationPage.prototype.verifyPageMarkerForMobileDevice = function(pageNo){


        //Go to a specific page
        this.gotoPage(pageNo);

        //Total visible page numbers  should total 3
        expect(this.lblM_visiblePageNo.count()).toEqual(3);


        this.lblM_visiblePageNo.each(function(elem){
            elem.getText().then(function(text){
                console.log(text);
            })

        })

        //Locate center page number
        var centerPageNo = this.lbl_visiblePageNo.get(1);

        console.log(centerPageNo);
        centerPageNo.getText().then(function(text){

            //Verify if selected page comes in center
            expect(parseInt(text)).toEqual(pageNo);

        });

    };




    /* Author - Ketaki */
    /* verifies if page marker settles in the middle for EHN plugin
     * it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyPageMarkerEHN = function() {

        //Go to EHN plugin
        dashboardUtils.goToEventHistory();

        //Verify if page parker settles in the middle
        if(!env_details.mobile_emulation){

            this.verifyPageMarker(page_count_on_desktop_view);

        }
        else
        {
            this.verifyPageMarkerForMobileDevice(page_count_on_mobile_view);

            this.verifyPageMarkerForMobileDevice(4);

        }



    };

    /* Author - Ketaki */
    /* verifies if page marker settles in the middle for Customer Accounts plugin
     * it accepts zero parameters of String type
     */

    cpsPaginationPage.prototype.verifyPageMarkerCustomerAccounts = function() {

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();

        frameworkUtils.longWaitForElement();

        //Verify if page parker settles in the middle
        if(!env_details.mobile_emulation) {

            this.verifyPageMarker(page_count_on_desktop_view);

            this.verifyPageMarker(10);

        }
        else
        {
            this.verifyPageMarkerForMobileDevice(page_count_on_mobile_view);

            this.verifyPageMarkerForMobileDevice(4);
        }

    };

 /* verify selected page highlights.
     * it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifySelectedPageHighlight = function() {

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();
        //wait for page to load.
        frameworkUtils.waitForElement();
        //verify first page selected.
        expect(this.lbl_firstpageselect.isDisplayed()).toBe(true);
        //click second page.
        this.lbl_secondpageno.click();
        frameworkUtils.longWaitForElement();
        //verify second page selected.
        expect(this.lbl_secondpageselect.isDisplayed()).toBe(true);

    };

    /* verify record count on page.
     * it accepts zero parameters of String type
     */
    cpsPaginationPage.prototype.verifyRecordcount = function() {

        //Go to CustomerAccounts plugin
        dashboardUtils.goToCustomerAccounts();
        //wait for page to load.
        frameworkUtils.waitForElement();

        //verify total records present on page.
        this.verifyNoOfRecordsOnPage();

        //verify total count display is 30.
        this.lbl_totalrecordsonpage.getText().then(function(text) {
            expect(text).toEqual('30');
        });


    };





    return cpsPaginationPage;
})();

module.exports = cpsPaginationPage;
