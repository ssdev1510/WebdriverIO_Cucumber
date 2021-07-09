import { Given, When, Then } from '@cucumber/cucumber';
import { url } from 'inspector';
const JpPO = require("../pageObjects/JobsPagePO");
let result = false;

Given(/^User hit the baseUrl "([^"]*)"$/, (baseurl) => {
	browser.url("/")
	browser.maximizeWindow()
	});

When(/^User on Economist Jobs page$/, () => {
	 	let logoTitleValue = JpPO.verifyJobsPage();
		expect(logoTitleValue).toEqual('Jobs.Economist.com')
		console.log("Check the jobs landing page have Logo title > "  + logoTitleValue)

	});

Then(/^Verify that Main Navigation Bar component is visible$/, () => {
	result = JpPO.verifyNavigationBar();
	expect(result).toEqual(true);
	console.log("check the navigation bar component" + result)
});

Then(/^Verify that Job Search Field component is visible$/, () => {
	result = JpPO.verifyjobSearchField();
	expect(result).toEqual(true);
	console.log("check the job search component" + result)
});

Then(/^Verify that Browse jobs by Sector component is visible$/, () => {
	result = JpPO.verifybrowserJobSector();
	expect(result).toEqual(true);
	console.log("check the job by sector component" +result)
});
