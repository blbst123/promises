/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  const getFirstLinePromise = new Promise((resolve, reject) => {
    // do something async, then 
    fs.readFile(filePath, function (err, fileData) {
      if (err) {
        reject(err);
      } else {
        var firstLine = fileData.toString().substring(0, fileData.indexOf('\n'));
        resolve(firstLine);
      }
    });
  });

  return getFirstLinePromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  const statusCodePromise = new Promise((resolve, reject) => {
    request(url, function (err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });

  return statusCodePromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
