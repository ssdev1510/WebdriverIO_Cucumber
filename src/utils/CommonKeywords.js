
/*
* Sahil Singla- sahil.9singla@gmail.com
* Date- 09/July/2021
* Description- Common keyword js file, where WebdriverIo browser and element methods are defined.
*/

class CommonKeywords {

 //Open the browser with baseUrl 
 hitUrl(baseurl){
  browser.url(baseUrl);
  browser.maximizeWindow();
} 

//Click on element
Click(element) {
  element.waitForDisplayed(1000)
  element.click();
} 
    
//Enter text

//Verify if element is display and @return > true/false
  isElementDisplayed(element) {
  element.waitForDisplayed(1000)
  return element.isDisplayed();
}

//Getting the element text and @return > true/false
getElementText(element) {
  element.waitForDisplayed(1000)
  return  element.getText();
}

//Getting the Attribute value, @params > attributeName > attribute key and @return > attribute value
getAttributeValue(element, attributeName) {
  element.waitForDisplayed(1000)
  return element.getAttribute(attributeName)
}

}
module.exports = new CommonKeywords();