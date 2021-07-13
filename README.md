# WebdriverIO_Cucumber_Framework | Assignment
WebdriverIO with Cucumber Framework using JavaScript Language.

**Technical Stack:**

- Web Automation Tool: WebDriverIO
- Test automation framework: Cucumber
- Reporting: Allure reporting.
- Build tool: node,npm
- Node 14.17.3
- Docker

## Web-Automation-Framework using WebdriverIO and Cucumber Library.
  **This framework contains:**
- Wdio.cong.js > Defines which Feature file, Step Definitions & Reports Plugins to include in test.
- Step Definitions > Defines implementation of test scenarios defined in feature file.
- Feature file > Defines the Test scenarios in gherkin language.
- 3 Feature file: 
    - JobsPage.feature
      >Verify the different page components- Navigation Bar, Search Fields, Sector Lists .
      >Verify 'Sign in' link go to its respective pages.
      >Verify 'Create account' links go to its respective pages.

    - NavigationBar.feature
      >Verify the Main Navigation Bar and links navigating to correct page.

    - JobSearch.feature
     >Verify clicking on job sector show releveant result.
     >Verify the job details page.
     >Verify user is able to search job and page display relevant result.
     >Verify user is see 0 result found when user enter incorrect data in job search filed. (Added Negative scenario)

**Note:**
-Create framework using POM design pattern.
  >Where pageObjects folder js files defines the page locators and page actions.
  >Test scenarios & Assertion are defined in stepDefinitions folder.
  >Business features are defined in feature folder.
  
-Currently, test are running only for Chrome browser.

## **Steps to run at your system/container:**
**Prerequisite:** Node, Npm, Java, Git installation.

- Run "git clone <https://github.com/ssdev1510/WebdriverIO_Cucumber.git>" to Clone the repository.
- Run "cd WebdriverIO_Cucumber" to Go inside directory.
- Run "npm install update"
- Run "npm run local-test"
- Run "npm run allure-report"
- Check the test result report as mentioned in below section.

## **Steps to run at Docker Container:**
**Prerequisite:** Docker, Node, Git installation.
TBD

## **Reports:** 
  **This will generate two visual reports:**
- Allure Reporting (Project folder - "allure-report/"), file - "index.html" after running allure server.

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