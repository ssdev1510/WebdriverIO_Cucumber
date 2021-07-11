const { lchown } = require("fs-extra");
const { Click } = require("../utils/CommonKeywords");


/*
* Sahil Singla- sahil.9singla@gmail.com
* Date- 10/July/2021
* Description- Economist Job Navigation bar Page object class.
*/
class NavigationBarPO {

    /**
     * Defining Page Locators
     */
    get navBarElements() { return $$('#primary-nav>div>ul>li') };

    /**
     * Defining Page Action.
     */
    //Click on menu bar and verifing the navigated page title
    clickCheckNavBarLinks() {
        let count = 0;
        let pageUrl = ["https://jobs.economist.com/", "https://jobs.economist.com/jobs/", "https://jobs.economist.com/newalert/", "https://jobs.economist.com/employers/", "https://jobs.economist.com/careers/" ];

        for (let i = this.navBarElements.length - 2; i >= 0; i--) {
            Click(this.navBarElements[i]);
            if (pageUrl.includes(browser.getUrl())) {
                console.log(this.navBarElements[i].getText() + " link is working fine.");
                count++;
                browser.back();
            } else {
                console.error(this.navBarElements[i].getText() + " link is not working fine.");
            }
        }
        if (count === 5) { return true; }
        else { console.error("Navigation Links going to wrong page"); }
    }
}

module.exports = new NavigationBarPO();