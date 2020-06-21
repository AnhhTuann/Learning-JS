//value types vs reference types
let a1 = 2;
let a2 = 2;
console.log(a1 === a2);

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);
/*
let a3 = a2;
a3 = 2;
console.log(a2);

let obj3 = obj2;
obj3.a = 3;
console.log(obj2);

*/
let a3 = a2;
console.log(a3 === a2);
a3 = 3;
console.log(a3 === a2);

let obj3 = obj2;
console.log(obj3 === obj2);
obj3.a = 3;
console.log(obj3 === obj2);

function log(obj) {
  obj.b = 5;
  console.log(obj);
}

console.log(log(obj1));
