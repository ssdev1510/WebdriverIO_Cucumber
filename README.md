# WebdriverIO_Cucumber_Framework | Assignment
WebdriverIO with Cucumber using JavaScript Language

**Technical Stack:**

- Web Automation Tool: WebDriverIO
- Test automation framework: Cucumber
- Reporting: Allure reporting.
- Build tool: node,npm
- Node 14.17.3
- Docker

## Web-Automation-Framework using WebdriverIO and Cucumber Library.
  **This framework contains:**
- Wdio.cong.js > Defines which feature/step Definitions/Reports Plugins to include in test.
- Step Definitions > Defines implementation of test scenarios defined in feature file.
- Feature file > Defines the Test scenarios in gherkin language.
- 3 Feature file: 
    - JobsPage.feature
    - NavigationBar.feature
    - JobSearch.feature

**Note:**
-

## **Steps to run at your system/container:**
**Prerequisite:** Node, Npm, Java, Git installation.

- Run "git clone <>" to Clone the repository.
- Run "cd <>" to Go inside directory.
- Run "npm install update"
- Run "npm run test-report"
- Check the test result report as mentioned in below section.

## **Steps to run at Docker Container:**
**Prerequisite:** Docker, Node, Git installation.


## **Reports:** 
  **This will generate two visual reports:**
- Allure Reporting (Project folder - "/allure-report"), file - "index.html" after running allure server.

**Logs:** Logs can be found under (folder - "\logs" )folder, file - ".log".
## **Directory Structure:**
<kbd>![Alt text](/readmeImages/directory.png?raw=true)</kbd>

## **Test output from Terminal:**

<kbd>![Alt text](/readmeImages/buildSuccess.png?raw=true)</kbd>

## **Reports**:

**1) Allure Report**

-Test Result view

![Alt text](/readmeImages/allurereport.png?raw=true)

-Graph view.

![Alt text](/readmeImages/graphview.png?raw=true)