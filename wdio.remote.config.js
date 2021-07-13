const { config } = require('./wdio.conf.js')
/*
* Config file is created to run the tests on remote servers.
*/
exports.config = {
    ...config,
    ...{
      //services: ['selenium-standalone'],
      services: ['chromedriver'],
      capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            binary: '/Users/sahil1s/Documents/WebdriverIO/WebdriverIO_Assignment/node_modules/chromedriver/lib/chromedriver/chromedriver',
            args: [
                '--no-sandbox',
                '--disable-infobars',
             //   '--headless',
                '--disable-gpu',
              //  '--window-size=1440,735'
            ],
        }
    }]
    }
}