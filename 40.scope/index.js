//scope
//1.Global scope
//2.Local scope
//when function is executed -> create a  new scope

var a = 1;

function random() {
  var b = Math.random();
  console.log(b);
  console.log(a);
}

random();
