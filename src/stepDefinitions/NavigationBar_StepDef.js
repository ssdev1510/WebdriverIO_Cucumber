import { Given, When, Then } from '@cucumber/cucumber';
const expectChai = require('chai').expect;

const NbPO = require("../pageObjects/NavigationBarPO");
let result = false;

//Implementation of Test Scenarios.

When(/^User click on navigation bar menu links$/, () => {
    console.log("User clicks on links present on Main Navigation Bar");
});

Then(/^Verify user navigate to correct page$/, () => {
	expectChai(NbPO.clickCheckNavBarLinks()).to.equal(true);

    console.log("Verified navigation bar menu links working fine.");
});
