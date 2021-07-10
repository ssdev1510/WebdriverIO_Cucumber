const { Click, getPageTitle } = require("../utils/CommonKeywords")
const CommonKeywords = require("../utils/CommonKeywords")
/*
* Sahil Singla- sahil.9singla@gmail.com
* Date- 09/July/2021
* Description- Economist Job Landing page object class.
*/
class JobsPagePO {

    /**
     * Defining Page Locators
     */
    get jobPageLogoElement() { return $('.primary-logo img') }
    get naviationBarElement() { return $("#primary-nav") }
    get jobSearchFieldElement() { return $(".search__form") }
    get browserJobSectorElement() { return $("section.browse.brick>div.brick__inner.cf") }
    get signInElement() { return $('//a[text()="Sign in"]') }
    get createAccountElement() { return $('//a[text()="Create account"]') }
    
    /**
     * Defining Page Action.
     */

    //verifying the jobs landing page render properly. @return > true/false
    getJobsPageLogoTitle() {
        let logoTitleValue = CommonKeywords.getAttributeValue(this.jobPageLogoElement, 'title');
        return logoTitleValue;
    }

    //verifying navigation bar is present on jobs landing page. @return > true/false
    verifyNavigationBar() {
        let result = CommonKeywords.isElementDisplayed(this.naviationBarElement);
        return result;
    }

    //verifying Job search field is present on jobs landing page. @return > true/false
    verifyjobSearchField() {
        let result = CommonKeywords.isElementDisplayed(this.jobSearchFieldElement);
        return result;
    }

    //verifying Job Sector bar is present on jobs landing page. @return > true/false
    verifybrowserJobSector() {
        let result = CommonKeywords.isElementDisplayed(this.browserJobSectorElement);
        return result;
    }

    // Click the sign in link
    clickSignInPageTitle() {
        Click(this.signInElement); 
    }

    // Click Create account link.
    clickCreateAccountPageTitle() {
        Click(this.createAccountElement);
    }
}

module.exports = new JobsPagePO();