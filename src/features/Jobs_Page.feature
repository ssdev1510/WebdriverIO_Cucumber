Feature: Verifing Jobs page renders correctly with the following components visible:
    - navigation bar
    - search fields
    - sector lists

@Test
  Scenario: 
    Given User hit the baseUrl "/"
    When User on Economist Jobs page
    Then Verify that Main Navigation Bar component is visible
    And Verify that Job Search Field component is visible
    And Verify that Browse jobs by Sector component is visible
   