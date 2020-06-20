//method overriding

class CoffeeMachine {
  makeCoffee() {
    console.log("Making Coffee .......");
  }
}

class SpecialCoffeeMachine extends CoffeeMachine {
  makeCoffee(cb) {
    console.log("Making Coffee and do something ...");
    cb();
  }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function () {
  console.log("Call the boss");
});
