const { config } = require('./wdio.conf.js')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],
      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            browserVersion: 'latest',
            'goog:chromeOptions': {
               // headless: true
            }
        },
      ]
    }
}