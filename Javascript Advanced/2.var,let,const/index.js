//var let const
//1.decleration (khai báo biến)
var a = 1;
let b = 2;
const c = 3; // c phải có giá trị

console.log(a, b, c);

var a = 2;
console.log(a);

//let b = 3;
//báo lỗi

//const c = 5
//báo lỗi

//2.hoisting
function run() {
  console.log(a);
  var a = 512;
}
run();
/*
function run() {
  console.log(a);
  let b = 512;
  //const c = 123;
}
run();

//báo lỗi
*/

//3.block scope (if , for)
/* 
function run() {
  var x = 1;
}

console.log (x);

// báo lỗi
*/

if (true) {
  var x = 10;
  //let b = 10; // báo lỗi
  //cosnt c = 10; // báo lỗi
}
console.log(x);

for (var i = 0; i <= 5; i++) {
  console.log(i);
}

//let cung dc nhung cont ko dc
//4.redecleration (khai báo lại)
