const { config } = require('./wdio.conf.js')
/*
* Config file is created to run the tests on local machine.
*/
exports.config = {
    ...config,
    ...{
      services: ['chromedriver'],
      capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
              //  '--headless',
                '--disable-gpu',
               // '--window-size=1440,735'
            ],
        }
    }]
    }
}


