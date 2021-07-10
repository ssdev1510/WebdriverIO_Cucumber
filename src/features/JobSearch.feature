Feature: Verifying the job search features.

Description:
1. Verify clicking on a Jobs sector shows a list of jobs from only that sector.
2. Verify clicking further on a job listing shows you the job details, with an 'Apply' button.
3. Verify seaching for a job correctly displays relevant search results.

@All
Scenario Outline: Verify clicking on job sector show releveant result.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  And User click on sector job "<JobTypes>"
  Then Verify correct list of jobs getting display

Examples:
  | JobTypes   |
  | NGO        |
  | Government |

@All @Smoke
 Scenario Outline: Verify the job details page.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  And User click on sector job "<JobTypes>"
  And User click on job from the first job list
  Then Verify Job Details are getting display
  And Verify Apply button is getting display

Examples:
  | JobTypes   |
  | NGO        |
  | Government |

@All 
 Scenario: Verify user is able to search job and page display relevant result.
  Given User hit the baseUrl "/"
  When User on Economist Jobs page
  And User Enter job details field "<JobTypes>", Country "<Country>"
  And User Clicks on search button
  Then Verify relevant results are getting display

  Examples:
  | JobTypes   | Country             |
  | NGO        | United Kingdom (GB) |
  | Government | United Kingdom (GB) |