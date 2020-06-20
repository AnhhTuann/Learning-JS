//arrow function expression
//fat arrow =>
/*
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

var sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(3, 2));
*/
/* 
var sum = (a, b) => {
  return a + b;
};

console.log(sum(3, 2));
*/

var sum = (a, b) => a + b;
console.log(sum(9, 100));
/*
var square = (x) => x * x;
console.log(square(2));
*/

var doSomething = () => Date.now();
console.log(doSomething());
/* 
var array = [1, 2, 3];
test = array.map(function (x) {
  return x * x;
});

console.log(test);
*/

var arr = [1, 2, 3];
var result = arr.map((x) => x * x);
console.log(result);
/*
var person = {
  name: "Tuan",
  age: 21,
  run: function () {
    var run2 = function () {
      console.log("My name is", this.name);
    }.bind(this);
    run2();
  },
};

person.run();
*/

var person = {
  name: "Tuan",
  age: 21,
  run: function () {
    var run2 = () => {
      console.log("Toi ten la", this.name);
    };
    run2();
  },
};

person.run();
/*
var a = {
  foo: "bar",
  run: function () {
    setTimeout(
      function () {
        console.log(this.foo);
      }.bind(this),
      2000
    );
  },
};
a.run();
*/

var test = {
  testne: "Sai cmnr",
  run: function () {
    setTimeout(() => {
      console.log(this.testne);
    }, 2000);
  },
};

test.run();
