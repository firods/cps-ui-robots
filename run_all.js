// import environment configration file.
var env = require('./envConfig.json');

var today = new Date(),
timestamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm-' + today.getSeconds()+'s';

//Protractor Html Screenshot reporter
var CpsReporter = require('./cp-utils/node_modules/protractor-html-screenshot-reporter');
var cps_reporter = new CpsReporter({
    baseDirectory: "./Test_Reports/"+env.test_report_name+timestamp, // a location to store Automation report.
    docTitle: env.test_report_name,
    docName: env.test_report_name+timestamp+'.html',
    takeScreenShotsOnlyForFailedSpecs: true
});

//Create a configuration object
config = {
    directConnect: true,
    //restartBrowserBetweenTests: true,
    capabilities: {
        browserName: env.browser_name
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(cps_reporter);
    },
    jasmineNodeOpts: {
        framework: 'jasmine2',
        showColors: true,
        defaultTimeoutInterval: 1000000,
        isVerbose: true,
        includeStackTrace: true
    },
    allScriptsTimeout: 500000,


    //-------------------Suties go here--------------------//
    suites: {
		RegisterAppliancePlugin: ['./cps-regi*/tests/*.js'],
        LoginPlugin: ['./cps-login-plugin/tests/*.js'],
        AboutUsPlugin: ['./cps-about*/tests/*.js'],
        DashboardPlugin: ['./cps-dashboard-plugin/tests/*.js'],
        CustomerAccountPlugin: ['./cps-accounts-plugin/tests/*.js'],
        EditProfilePlugin: ['./cps-edit-plugin/tests/*.js'],
        EventHistoryPlugin: ['./cps-events-history-plugin/tests/*.js'],
        StorageMgtPlugin: ['./cps-storage-mgt-plugin/tests/*.js'],
        PaginationPlugin: ['./cps-pagination-plugin/tests/*.js']
    },
    //-------------------Specs go here---------------------//
    specs: [
	   //Register Appliance
	   './cps-regi*/tests/*130400*',
       './cps-regi*/tests/*130404*',
       './cps-regi*/tests/*130408*',
       './cps-regi*/tests/*130417*',
	
        // Edit Profile Specs
        './cps-edit-profile*/tests/*130540*',
        './cps-edit-profile*/tests/*130542*',
        './cps-edit-profile*/tests/*130543*',
        './cps-edit-profile*/tests/*130544*',
        './cps-edit-profile*/tests/*130545*',
        './cps-edit-profile*/tests/*130546*',

        // Login Specs
        './cps-login*/tests/*129907*',
        './cps-login*/tests/*129887*',
        './cps-login*/tests/*129894*',
        './cps-login*/tests/*129895*',
        './cps-login*/tests/*129898*',
        './cps-login*/tests/*129914*',

        //About Plugin Specs
        './cps-about*/tests/*130497*',
        './cps-about*/tests/*130498*',
        './cps-about*/tests/*130499*',
        './cps-about*/tests/*130532*',

        //Dashboard Plugin Specs
        './cps-dashboard*/tests/*130609*',
        './cps-dashboard*/tests/*130610*',
        './cps-dashboard*/tests/*130594*',
        './cps-dashboard*/tests/*130595*',
        './cps-dashboard*/tests/*130596*',
        './cps-dashboard*/tests/*130604*',
        './cps-dashboard*/tests/*130608*',

        //Customer Accounts Specs
        './cps-accounts*/tests/*130603*',
        './cps-accounts*/tests/*130607*',
        './cps-accounts*/tests/*130597*',
        './cps-accounts*/tests/*130564*',
        './cps-accounts*/tests/*130553*',
        './cps-accounts*/tests/*130551*',
        './cps-accounts*/tests/*130550*',
        './cps-accounts*/tests/*130561*',
        './cps-accounts*/tests/*130578*',
        './cps-accounts*/tests/*130554*',
        './cps-accounts*/tests/*130585*',
        './cps-accounts*/tests/*130547*',
        './cps-accounts*/tests/*130568*',
        './cps-accounts*/tests/*130555*',
        './cps-accounts*/tests/*130560*',

        //Pagination Specs
        './cps-pagination*/tests/*130267*',
        './cps-pagination*/tests/*130268*',
        './cps-pagination*/tests/*130314*',
        './cps-pagination*/tests/*130373*',
        './cps-pagination*/tests/*130516*',
        './cps-pagination*/tests/*130590*',

        //Event History Notification Specs
        './cps-events-history*/tests/*130549*',
        './cps-events-history*/tests/*130552*',
        './cps-events-history*/tests/*130556*',
        './cps-events-history*/tests/*130558*',
        './cps-events-history*/tests/*130562*',
        './cps-events-history*/tests/*130566*',
        './cps-events-history*/tests/*130569*',
        './cps-events-history*/tests/*130571*',
        './cps-events-history*/tests/*130582*',

        //Storage Management Plugin
        './cps-storage-mgt*/tests/*130573*',
        './cps-storage-mgt*/tests/*130577*',
        './cps-storage-mgt*/tests/*130576*',
        './cps-storage-mgt*/tests/*130580*',
        './cps-storage-mgt*/tests/*130581*',
        './cps-storage-mgt*/tests/*130711*',

        //CloudArray plugins
        './cps-cloudarray*/tests/ca-ua01*',
        './cps-cloudarray*/tests/ca-ua02*',
    ]
};

//Customize Capabilities for Mobile Emulator
if(env.mobile_emulation){
    config.capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            mobileEmulation: {
                deviceName: env.device_name
            }
        }
    }
}

//Once constructed, export the config
exports.config = config;
