import { Given, When, Then } from '@cucumber/cucumber';
import { url } from 'inspector';
import { getPageTitle } from '../utils/CommonKeywords';
const expectChai = require('chai').expect;

const Constants = require("../resources/constants")
const JpPO = require("../pageObjects/JobsPagePO");
let result = false;

//Implementation of Test Scenarios.

Given(/^User hit the baseUrl "([^"]*)"$/, (baseurl) => {
	browser.url(baseurl)
	browser.getAllCookies();
	browser.maximizeWindow()
});

When(/^User on Economist Jobs page$/, () => {
	let logoTitleValue = JpPO.getJobsPageLogoTitle();
	expectChai(logoTitleValue).to.equal(Constants.JOB_LANDING_PAGE_TITLE)
	
	console.log("Verified the jobs landing page have Logo title")
});

Then(/^Verify that Main Navigation Bar component is visible$/, () => {
	expectChai(JpPO.verifyNavigationBar()).to.equal(true);

	console.log("Verified the navigation bar component is visible")
});

Then(/^Verify that Job Search Field component is visible$/, () => {
	expectChai(JpPO.verifyjobSearchField()).to.equal(true);
	
	console.log("Verified Job Search Field component is visible")
});

Then(/^Verify that Browse jobs by Sector component is visible$/, () => {
	expectChai(JpPO.verifybrowserJobSector()).to.equal(true);
	
	console.log("Verified Browse jobs by Sector component is visible")
});

When(/^User click on Sign in link$/, () => {
	JpPO.clickSignInPageTitle();
});

When(/^User click on Create account link$/, () => {
	JpPO.clickCreateAccountPageTitle();
});

Then(/^Verify user navigate to page having title "([^"]*)"$/, (expectedTitle) => {
	expectChai(getPageTitle()).to.equal(expectedTitle)

	console.log("Verified page is navigated to correct page")
});
