const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 },
};

let obj2 = {};

for (let key in obj1) {
  obj2[key] = obj1[key];
}
obj2.b = 5;
obj2.d.e = 11;
//deep clone

console.log(obj1, obj2);

const obj3 = {
  ...obj1,
  z: 10000,
};
console.log(obj3);
