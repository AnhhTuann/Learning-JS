//JSON methods 
//1.stringify . Convert an object to a JSON string
//2.parse . Convert a JSON string to an object

var myDog = {
    name : 'Den',
    age : 2,
    dead : false
}

var myDogString = JSON.stringify(myDog);

console.log(myDog);
console.log(myDogString);

console.log('============================================');

var myCatString = '{"name": "Cac","age": 25 ,"dead" : false}';

var myCat = JSON.parse(myCatString);

console.log(myCatString);
console.log(myCat);