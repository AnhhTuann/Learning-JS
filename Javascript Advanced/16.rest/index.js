//....rest
//phần còn lại
function log(a, ...numbers) {
  console.log(a);
  console.log(numbers);
  console.log(arguments);
}

log(1, 2, 3, 4, 5);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

function concat(separator, ...strings) {
  return strings.join(separator);
}

console.log(concat(".", "a", "b", "c"));
//a.b.c