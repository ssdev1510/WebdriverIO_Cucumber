
/*
* Sahil Singla- sahil.9singla@gmail.com
* Date- 09/July/2021
* Description- Common keyword js file, where WebdriverIo browser and elements methods are defined.
*/

class CommonKeywords {

  //Click on element
  Click(element) {
    element.waitForDisplayed()
    element.click();
  }

  //Enter text
  EnterText(element, text) {
    element.waitForDisplayed()
    element.setValue(text);
  }

  //Verify if element is display and @return > true/false
  isElementDisplayed(element) {
    element.waitForDisplayed()
    return element.isDisplayed();
  }

  //Getting the element text and @return > true/false
  getElementText(element) {
    element.waitForDisplayed()
    return element.getText();
  }

  //Getting the title of the page and @return > page title
  getPageTitle() {
    return browser.getTitle();
  }

  //Getting the Attribute value, @params > attributeName > attribute key and @return > attribute value
  getAttributeValue(element, attributeName) {
    element.waitForDisplayed()
    return element.getAttribute(attributeName)
  }

  //Getting value from element
  getElementValue(element) {
    element.waitForDisplayed()
    return element.getValue();
  }

}
module.exports = new CommonKeywords();