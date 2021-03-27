Using ChromeDriver directly...
[launcher] Running 1 instances of WebDriver
In beforeEach
Heating Up
Signing In
In afterEach
Cooling Down
dpc-130546:EditProfile:P2:Mismatching Passwords
[32m  dpc-130546 - pass[0m
In beforeEach
Heating Up
Signing In
In afterEach
Cooling Down
dpc-130545:EditProfile:P2:Invalid Password
[31m  dpc-130545 - fail[0m
In beforeEach
Heating Up
Signing In
In afterEach
Cooling Down
dpc-130544:EditProfile:P2:Edit Profile:Blank Details
[31m  dpc-130544 - fail[0m
dpc-130543:EditProfile:P1:Change Password
[32m  dpc-130543 - pass[0m
In beforeEach
Heating Up
Signing In
In afterEach
Cooling Down
dpc-130542:Edit Profile:P1:Update Account (with or without change)
[32m  dpc-130542 - pass[0m
In beforeEach
Heating Up
Signing In
In afterEach
Cooling Down
dpc-130540:EditProfile:P1:Edit Profile option
[31m  dpc-130540 - fail[0m


Failures:

  1) dpc-130545:EditProfile:P2:Invalid Password dpc-130545
   Message:
     [31mNoSuchElementError: No element found using locator: by.model("vm.user.username")[0m
   Stacktrace:
     NoSuchElementError: No element found using locator: by.model("vm.user.username")
    at Array.forEach (native)
    at process._tickCallback (node.js:368:9)
Error
    at cpsLoginPage.cpsLogin (/home/saurabh/cps-automation/dpc-login-plugin/utils/login_utils.js:46:31)
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130545.js:27:20)
From: Task: Asynchronous test function: iit()
Error
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130545.js:25:5)
    at Object.<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130545.js:2:1)

  2) dpc-130544:EditProfile:P2:Edit Profile:Blank Details dpc-130544
   Message:
     [31mExpected false to be true.[0m
   Stacktrace:
     Error: Failed expectation
    at cpsEditProfilePage.verifyErrorMessagesOnRequiredFields (/home/saurabh/cps-automation/dpc-edit-profile-plugin/utils/edit_profile_utils.js:180:52)
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130544.js:30:27)

  3) dpc-130544:EditProfile:P2:Edit Profile:Blank Details dpc-130544
   Message:
     [31mExpected false to be true.[0m
   Stacktrace:
     Error: Failed expectation
    at cpsEditProfilePage.verifyErrorMessagesOnRequiredFields (/home/saurabh/cps-automation/dpc-edit-profile-plugin/utils/edit_profile_utils.js:195:59)
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130544.js:30:27)

  4) dpc-130544:EditProfile:P2:Edit Profile:Blank Details dpc-130544
   Message:
     [31mExpected false to be true.[0m
   Stacktrace:
     Error: Failed expectation
    at cpsEditProfilePage.verifyErrorMessagesOnRequiredFields (/home/saurabh/cps-automation/dpc-edit-profile-plugin/utils/edit_profile_utils.js:207:54)
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130544.js:30:27)

  5) dpc-130540:EditProfile:P1:Edit Profile option dpc-130540
   Message:
     [31mNoSuchElementError: No element found using locator: By.xpath("//*[@class='pull-left username']")[0m
   Stacktrace:
     NoSuchElementError: No element found using locator: By.xpath("//*[@class='pull-left username']")
    at Array.forEach (native)
    at process._tickCallback (node.js:368:9)
Error
    at cpsDashBoardPage.verifyEditProfileMenuOption (/home/saurabh/cps-automation/dpc-dashboard-plugin/utils/dashboard_utils.js:53:32)
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130540.js:30:24)
From: Task: Asynchronous test function: iit()
Error
    at [object Object].<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130540.js:25:5)
    at Object.<anonymous> (/home/saurabh/cps-automation/dpc-edit-profile-plugin/tests/dpc-130540.js:2:1)

Finished in 254.004 seconds
[31m6 tests, 9 assertions, 5 failures
[0m
[launcher] 0 instance(s) of WebDriver still running
[launcher] chrome #1 failed 5 test(s)
[launcher] overall: 5 failed spec(s)
[launcher] Process exited with error code 1
