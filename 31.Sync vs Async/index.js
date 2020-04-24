//Sync vs Async

var fs = require("fs");

console.log("Start");
var song1 = fs.readFileSync("./song1.txt", { encoding: "utf8" });
console.log(song1);
var song2 = fs.readFileSync("./song2.txt", { encoding: "utf8" });
console.log(song2);
console.log("End");

//Make coffee -> 5 minutes
//Wear clothes
//Making bed

//Sync
//|-------------------------------|----------------------------|-------------------|--------->
//Make coffee                 Coffee done                   Wear done            Done
//                           Wear clothes                   Make bed

//Async
//|-----------|------------|--------|--------->
//Make coffee Wear clothes Make bed Done

console.log('-------------------------------------------------------------------------');

console.log("Start");
var song1 = fs.readFile("./song1.txt", { encoding: "utf8" }, function (err,song1) {
  console.log(song1);
});
console.log("End");
