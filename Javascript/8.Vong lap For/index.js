//8.Vong lap For 
/*
    for (init , condition, final-expression){
        statement;
    }
*/

for ( var i = 0 ; i <= 10 ; i++) {
    console.log(i);
}
console.log('=======================================================');

for (var i =10 ; i >=0 ; i--) {
    console.log(i);
}
console.log('=======================================================');

var employees = [
    {name : 'Hieu' , age: 25},
    {name : 'ut ' , age :10},
    {name : 'Tuan' , age: 20},
];
for (i = 0 ; i <3 ; i++) {
    console.log(employees[i].name , employees[i].age);
}
console.log('=======================================================');