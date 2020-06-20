//apply
//call :funct.call(this , param1 , param2 , ...);
//apply :funct.apply (this . [param1 ,param2,...]);
function greeting(name, age) {
  console.log(`Hi , My name is ${this.name} . I am ${this.age} years old`);
}

const dog = {
  name: "Den",
  age: 12,
};

greeting.apply(dog);

function sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
  //sum
  const x = sum.apply(null, arguments);
  //sum / arguments.length
  return x / arguments.length;
}

console.log(sum(1, 2, 3, 4));
console.log(average(1, 2, 3, 4));
