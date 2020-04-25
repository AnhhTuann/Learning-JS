//setTimeout
//clearTimeout
//setTimeout(fn,ms) //mlliseconds
//timer
/*
console.log("Start");
setTimeout(function () {
  console.log("Finish");
}, 1000);
console.log("Done");
*/

console.log("Start");
function done() {
  console.log("Finish");
}
var timeoutId = setTimeout(done, 1000);

console.log("Done");
clearTimeout(timeoutId);
