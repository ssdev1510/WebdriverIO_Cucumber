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
- 3 Feature files: 
  - JobsPage.feature (1-Verify the different page components- Navigation Bar, Search Fields, Sector Lists., 2-Verify 'Sign in' link go to its respective pages. 3-Verify 'Create account' links go to its respective pages).
  - NavigationBar.feature (1-Verify the Main Navigation Bar and links navigating to correct page).
  - JobSearch.feature (1-Verify clicking on job sector show releveant result. , 2-Verify the job details page. , 3- Verify user is able to search job and page display relevant result. , 4-Verify user is see 0 result found when user enter incorrect data in job search filed (Added Negative scenario)).

**Note:**

- Created framework using POM design pattern.
  1. Where pageObjects folder js files defines the page locators and page actions.
  2. Test scenarios & Assertion are defined in stepDefinitions folder.
  3. Business features are defined in feature folder.

- Currently, test are running only for Chrome browser, and yes this framework can be easily extend to more features.

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
- Run "git clone <https://github.com/ssdev1510/WebdriverIO_Cucumber.git>" to Clone the repository.
- Run "cd WebdriverIO_Cucumber" to Go inside directory.
- Run "sudo docker build -t wdio_test_image ." to Build docker image from Dockerfile.
- Run "docker run --name wdio_container_name -it wdio_test_image /bin/bash" to Run docker container.
  - Inside docker container > Run "npm run docker-test"
  - Inside docker container > Check the output in console > then Run "exit" to come out from docker container.
- Run "docker rm wdio_container_name" to Remove docker container.
- Run "docker rmi wdio_test_image" to  Remove docker image.
- Currently report not getting generated through docker test.

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
