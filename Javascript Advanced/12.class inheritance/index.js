// inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log("Eat...");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying");
  }
}

const bird = new Bird("Chim");
bird.eat();
bird.fly();

class Parrot extends Bird {
  speak() {
    console.log("Talking");
  }
}

const chim = new Parrot("Vet");
chim.speak();

console.log("==============================================================");
//constructor function
function Animal1(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log("Eat");
};

function Bird2() {
  Animal.apply(this, arguments);
}

Bird2.prototype = new Animal();
