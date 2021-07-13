Feature: Verifying Main Navigation bar links on Jobs Landing page.

Description:
1. Verifying each of the links in the navigation bar is functional 
2. Verifying each link goes to the correct page. 
 
@All @Smoke
Scenario: Verify the Main Navigation Bar and links navigating to correct page.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  And User click on navigation bar menu links
  Then Verify user navigate to correct page