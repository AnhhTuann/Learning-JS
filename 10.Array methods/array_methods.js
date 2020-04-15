//10.Array methods 
//-a.concat(b)
//-a.push(b)
//a.pop()
//a.slice
//a.splice

var a = [1,3,2];
var b = [10,20];

console.log(a.concat(b));
console.log('=======================================================');

var c= 5;
a.push(c); //lenght 
console.log(a);
console.log('=======================================================');

a.pop();
console.log(a);
console.log('=======================================================');

a.shift();
console.log(a);
console.log('=======================================================');

a.unshift(10);
console.log(a);
console.log('=======================================================');