//node module 
//constructor function 
var Pig = require('./pig');
var Tiger = require('./tiger'); 

var pig1 = new Pig ('pink');
console.log(pig1);

var tiger1 = new Tiger();

tiger1.eat(pig1);

console.log(pig1);

console.log(tiger1);

