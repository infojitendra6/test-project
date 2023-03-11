/**
 * Entry Script
 */
// TODO: require dotenv 
const dotenv = require('dotenv');
dotenv.config();

if (process.env.NODE_ENV === 'production') {
    // In production, serve the webpacked server file.
    require('./dist/examadda-worker.bundle.js');
  } else {
    // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
      "plugins": [
        [
          "babel-plugin-webpack-loaders",
          {
            "config": "./webpack.config.babel.js",
            "verbose": false
          }
        ]
      ]
    });
    require('babel-polyfill');
  
    require('./server/worker/autoworker/examadda-worker');
  }
  