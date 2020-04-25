var fs = require("fs");
var co = require("co");

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: "utf8" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
/*
co(function* () {
  //generator function
  var song1 = yield readFilePromise("./song1.txt");
  var song2 = yield readFilePromise("./song2.txt");
  var song3 = yield readFilePromise("./song3.txt");
  return [song1, song2, song3];
})
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

//goi co dung func
co(function* () {
  //generator function
  var values = yield [
    readFilePromise("./song1.txt"),
    readFilePromise("./song2.txt"),
    readFilePromise("./song3.txt"),
  ];
  return values;
})
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  });
//npm install co --save

//khai bao nhung dung sau
var readFiles = co.wrap(function* (files) {
  //[String] -> [Promise]
  var values = yield files.map(function (file) {
    return readFilePromise(file);
  });
  return values;
});

readFiles(["song1.txt", "song2.txt", "song3.txt"]).then(function (values) {
  console.log(values);
});
