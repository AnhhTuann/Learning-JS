// ...spread
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(a);
console.log(b);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(...a));
