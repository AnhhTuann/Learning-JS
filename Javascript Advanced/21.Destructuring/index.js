//Destructuring
const arr = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = arr;
const [f, , , i] = arr;
console.log(i);
const [j, ...k] = arr;
console.log(j, k);

const arr2 = [12];
const [l, m = 20] = arr;
console.log(l, m);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a: x, b: y, c: z } = obj;
console.log(x, y, z);
/*
const { a: a, b: b, c: c } = obj;
console.log(a, b, c);
*/

/*
const { a, b, c } = obj;
console.log(a, b, c);
*/

/*
const { a, ...c } = obj;
console.log(a, c);
*/
