//Date
//moment.js
/*
var now = new Date();
var myBirthDay = new Date(1999, 9, 25); //25-10-1999

//number of millisenconds from 1-1-1970 +7
console.log(now.getTime());
console.log(now.getTime());
*/

// npm install moment --save
var moment = require("moment");
var now = moment("2020-04-25 9:14");
console.log(now.format("YYYY/MM/DD"));
