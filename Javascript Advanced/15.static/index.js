//static
class Foo {
  static someMethod() {
    console.log("some method");
  }

  anotherMethod() {
    console.log("another method");
  }
}

Foo.someMethod();

const foo = new Foo(); //instance
foo.anotherMethod();
/*
function Foo() {}
Foo.prototype.anotherMethod = function () {};
Foo.someMethod = function () {};
*/
