//constructor function
function Mouse(name) {
  this.name = name;
}
Mouse.prototype.run = function () {
  console.log(`${this.name} is runing.`);
};
const mickey = new Mouse("Mickey");
mickey.run();

//object literals
const jerry = {
  name: "Jerry",
  run: function () {
    console.log(`${this.name} is running.`);
  },
};

jerry.run();

//enhance object literals

const name = "Tom";
const cat = {
  name,
  run() {
    console.log(`${this.name} is running`);
  },
};

cat.run();
