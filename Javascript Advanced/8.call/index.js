//call
function greeting(name, age) {
  console.log(`Hello , ${this.name} . I am ${this.age} years old`);
}

const cat = {
  name: "Tom",
  age: 10,
};

greeting.call(cat);
