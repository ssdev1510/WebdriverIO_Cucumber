Feature: Verifying sections and Links on Jobs Landing page.

Description:
1. Verifing Jobs page renders correctly with the components visible > Navigation Bar, Search Fields, Sector Lists. /n
2. Verifying the both 'Sign in' and 'Create account' links go to their respective pages. 
 
@Smoke @All @Test
Scenario: Verify the different components.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  Then Verify that Main Navigation Bar component is visible
  And Verify that Job Search Field component is visible
  And Verify that Browse jobs by Sector component is visible
   
@All
 Scenario: Verify 'Sign in' link go to its respective pages.
 Given User hit the baseUrl "/"
 When User on Economist Jobs page
 And User click on Sign in link
 Then Verify user navigate to page having title "Logon | Jobs.Economist.com"

 @Smoke @All
 Scenario: Verify 'Create account' links go to its respective pages.
 Given User hit the baseUrl "/"
 When User on Economist Jobs page
 And User click on Create account link
 Then Verify user navigate to page having title "Register | Jobs.Economist.com"
 