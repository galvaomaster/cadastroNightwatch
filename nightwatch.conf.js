require('babel-core/register')
const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['tests'],
    page_objects_path:'./pages',
    globals_path:'./hooks/globals.js',

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                }
            }
        }
    }

}