import { Given, When, Then } from '@cucumber/cucumber';

const NbPO = require("../pageObjects/NavigationBarPO");
let result = false;

//Implementation of Test Scenarios.

When(/^User click on navigation bar menu links$/, () => {
    console.log("User clicks on links present on Main Navigation Bar");
});

Then(/^Verify user navigate to correct page$/, () => {
	expect(NbPO.clickCheckNavBarLinks()).toEqual(true);

    console.log("Verified navigation bar menu links working fine.");
});
