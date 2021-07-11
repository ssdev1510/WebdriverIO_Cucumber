const { config } = require('./wdio.conf.js')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],
      capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }]
    }
}