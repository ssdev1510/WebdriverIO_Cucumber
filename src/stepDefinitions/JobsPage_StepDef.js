import { Given, When, Then } from '@cucumber/cucumber';
import { url } from 'inspector';
import { getPageTitle } from '../utils/CommonKeywords';

const Constants = require("../resources/constants")
const JpPO = require("../pageObjects/JobsPagePO");
let result = false;

//Implementation of Test Scenarios.

Given(/^User hit the baseUrl "([^"]*)"$/, (baseurl) => {
	browser.url(baseurl)
	browser.maximizeWindow()
});

When(/^User on Economist Jobs page$/, () => {
	let logoTitleValue = JpPO.getJobsPageLogoTitle();
	expect(logoTitleValue).toEqual(Constants.JOB_LANDING_PAGE_TITLE)

	console.log("Verified the jobs landing page have Logo title")
});

Then(/^Verify that Main Navigation Bar component is visible$/, () => {
	expect(JpPO.verifyNavigationBar()).toEqual(true);

	console.log("Verified the navigation bar component is visible")
});

Then(/^Verify that Job Search Field component is visible$/, () => {
	expect(JpPO.verifyjobSearchField()).toEqual(true);
	
	console.log("Verified Job Search Field component is visible")
});

Then(/^Verify that Browse jobs by Sector component is visible$/, () => {
	expect(JpPO.verifybrowserJobSector()).toEqual(true);
	
	console.log("Verified Browse jobs by Sector component is visible")
});

When(/^User click on Sign in link$/, () => {
	JpPO.clickSignInPageTitle();
});

When(/^User click on Create account link$/, () => {
	JpPO.clickCreateAccountPageTitle();
});

Then(/^Verify user navigate to page having title "([^"]*)"$/, (expectedTitle) => {
	expect(getPageTitle()).toEqual(expectedTitle)

	console.log("Verified page is navigated to correct page")
});
