const { Click, getPageTitle } = require("../utils/CommonKeywords")
const CommonKeywords = require("../utils/CommonKeywords")
/*
* Sahil Singla- sahil.9singla@gmail.com
* Date- 10/July/2021
* Description- Economist Job search object class.
*/
class JobsSearchPO {

    /**
     * Defining Page Locators
     */
    get sectorListPageRoleElement() { return $('h1#browsing') }
    get sectorJobListElements() { return $$('ul#listing>li>div>h3>a') }
    get applyButtonElement() { return $('li.job-actions__action--applylink>a') }
    get jobDetailsLeftElement() { return $('div.card') }
    get jobTypeInputBoxElement() { return $('input#keywords') }
    get locationInputBoxElement() { return $('input#location') }
    get searchBoxElement() { return $('[value="Search"]') }
    get searchResultElement() { return $('h1#searching') }
    get searchZeroResultElement() { return $('//h2[text()="Location not found"]') }
    
    /**
     * Defining Page Action.
     */

    // Get locator sector job element > @Return - element of sector job
    getLocatorSectorJob(jobSectorName) {
        return $('//a[text()="' + jobSectorName + '"]')
    }

    //Get the title of the navigated sector page. @Return - title of navigated sector page
    getRoleText() {
        return this.sectorListPageRoleElement.getText();
    }

    // Is Apply button displayed >@Return - True/False
    isApplyButtonDisplayed() {
        return CommonKeywords.isElementDisplayed(this.applyButtonElement);
    }

    //Is Job page details displayed >@Return - True/False
    isJobDetailsDisplayed() {
        return CommonKeywords.isElementDisplayed(this.jobDetailsLeftElement)
    }

    // Enter the search fields details
    enterSearchDetails(jobTypeText, locationText) {
        CommonKeywords.EnterText(this.jobTypeInputBoxElement, jobTypeText)
        CommonKeywords.EnterText(this.locationInputBoxElement, locationText)
    }

    //Clicking on search button
    clickOnSearchButton() {
        CommonKeywords.Click(this.searchBoxElement)
    }

    //Is search result displayed >@Return - True/False
    isSearchResultDisplayed() {
        return CommonKeywords.isElementDisplayed(this.jobDetailsLeftElement)
    }

     //Is search result displayed >@Return - True/False
     isZeroSearchResultDisplayed() {
        return CommonKeywords.isElementDisplayed(this.searchZeroResultElement)
    }
}

module.exports = new JobsSearchPO();