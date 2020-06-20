//template string
function greeting(name) {
  return "Hi, " + name + "!";
}

function greeting2(name) {
  return `Hi ,
  
  
  ${name}!`;
}

var result = greeting("Tuan");
console.log(result);

var result2 = greeting2("Tuan");
console.log(result2);
