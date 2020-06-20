//Array-like & arguments

/*
const names = ["Tuan", "Vu ", "Tri"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const obj = {
  0: "Tuan",
  1: "Vu",
  2: "Tri",
  length: 3,
};

for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}
*/

function sum(a, b) {
  return a + b;
}
sum(1, 2);

function test() {
  console.log(arguments);
  console.log(arguments.length);
}
test(1, 2, 3, 4);

function sumAll() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sumAll(1, 2, 3, 4, 5));

function sumAll2() {
  const numbers = Array.from(arguments);
  return numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}
console.log(sumAll2(1, 2, 3, 4, 5, 20));
