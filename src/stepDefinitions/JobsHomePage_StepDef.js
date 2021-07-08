import { Given, When, Then } from '@cucumber/cucumber';
import { url } from 'inspector';

Given(/^User hit the baseUrl "([^"]*)"$/, (baseurl) => {
	console.log("<<<<jobs>>>>" + baseurl)
	browser.url("/")
	browser.maximizeWindow()

	});

When(/^User on Economist Jobs page$/, () => {
		console.log("check the jobs landing page")
	});

Then(/^Verify that Main Navigation Bar component is visible$/, () => {
	console.log("check the navigation bar component")
});

Then(/^Verify that Job Search Field component is visible$/, () => {
	console.log("check the job search component")
});

Then(/^Verify that Browse jobs by Sector component is visible$/, () => {
	console.log("check the job by sector component")
});
