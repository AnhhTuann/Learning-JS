//9.for ........... of
//for ...........in 
var employees = [
    {name : 'Hieu' , age: 25},
    {name : 'ut ' , age :10},
    {name : 'Tuan' , age: 20},
];

for (employee of employees) {
    console.log(employee.name , employee.age) 
}
console.log('=======================================================');

var myDog = { 
    name:'Den',
    age : 2,
    weight : 5
}

for (var key in myDog) {
    console.log(key, myDog[key]);
}
console.log('=======================================================');