var fs = require('fs');
var { getStatusCodeAsync, pluckFirstLineFromFileAsync } = require('../bare_minimum/promiseConstructor');

/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */


// var combineFirstLineOfManyFiles = function (filePaths, writePath) {
//   const firstLinePromise = new Promise((resolve, reject) => {
//     fs.readdir(filePaths, (err, files) => {
//       if (err) reject(err)
//       else resolve(files)
//     });
//   });
/*
firstLinePromise.then(function(files) {

})
    var allPromises = files.map(fileName => {

    });

    Promise.all(allPromises).then(function (values) {
      var text = values.join("");
      fs.writeFile(writePath, text, (err) => {
        if (err) throw new Error('Error writing file with ' + err);
      });
    });
  });
});
*/


//   console.log(filePaths);
//   console.log(fileName);
//   let path = filePaths + '/' + fileName;
//   return new Promise((resolve, reject) => {
//     pluckFirstLineFromFileAsync(path, (err, fileData) => {
//       if (err) reject(err);
//       else resolve(fileData);
//     });
//   });

//   return firstLinePromise;
// };

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};