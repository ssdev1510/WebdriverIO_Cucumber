Feature: Verifing Jobs page renders correctly with the components visible > Navigation Bar, Search Fields, Sector Lists.

@Test
Scenario: Verifing the different components.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  Then Verify that Main Navigation Bar component is visible
  And Verify that Job Search Field component is visible
  And Verify that Browse jobs by Sector component is visible
   