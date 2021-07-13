import { Given, When, Then } from '@cucumber/cucumber';
import { Click, EnterText, getElementValue } from '../utils/CommonKeywords';
const expectChai = require('chai').expect;

const JsPO = require("../pageObjects/JobSearchPO");
let result = false;
let sectorJobName = null;

//Implementation of Test Scenarios.

When(/^User click on sector job "([^"]*)"$/, (sectorJob) => {
	Click(JsPO.getLocatorSectorJob(sectorJob));
    sectorJobName = sectorJob;
});

Then(/^Verify correct list of jobs getting display$/, () => {
    expectChai(JsPO.getRoleText()).to.equal(sectorJobName+ " jobs");

    console.log("Verified clicking on a Jobs sector shows a list of jobs from only that sector");
});

When(/^User click on job from the first job list$/, () => {
	expectChai(JsPO.sectorJobListElements[1])
});


Then(/^Verify Job Details are getting display$/, () => {
    expectChai(JsPO.isJobDetailsDisplayed()).to.equal(true);

    console.log("Verified clicking job listing shows the job details.");
});

Then(/^Verify Apply button is getting display$/, () => {
    expectChai(JsPO.isApplyButtonDisplayed()).to.equal(true);

    console.log("Verified clicking job listing shows an 'Apply' button.");
});

When(/^User Enter job details field "([^"]*)", Country "([^"]*)"$/, (jobType, location) => {
	JsPO.enterSearchDetails(jobType,location)
});

When(/^User Clicks on search button$/, () => {
	JsPO.clickOnSearchButton()
});

Then(/^Verify relevant results are getting display$/, () => {
    expectChai(JsPO.isSearchResultDisplayed()).to.equal(true);

    console.log("Verified seaching for a job correctly displays relevant search results.");
});

Then(/^Verify Zero results are getting display$/, () => {
	expectChai(JsPO.isZeroSearchResultDisplayed()).to.equal(true);

    console.log("Verified zero search result displays.");
});





