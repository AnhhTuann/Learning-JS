//2.Data types

//Primitive types 
console.log('I.Primitive types');
console.log('=======================================================');


//-Number 
console.log('1.Number');

var a1 = 100 ;
var a2 = 0.5 ;
console.log (a1,a2);
console.log('=======================================================');

//-String 
console.log('2.String');

var str = 'Hello , world ';
var str2 = "Hello , world ";
var str3 = 'Hello , I\'m Tuan ';
console.log(str3);
console.log('=======================================================');

//-Boolean 
console.log('3.Boolean');

var isHidden = true;
console.log(isHidden);
console.log('=======================================================');

//Special types
console.log('II.Special types');
console.log('=======================================================');

//-undefined
console.log('1.undefined');

var a; 
a = 100;
console.log (a);
console.log('=======================================================');

//-null 
console.log('2.null');

a = null ;
console.log(a);
console.log('=======================================================');

//Reference types 
console.log('III.Reference types');
console.log('=======================================================');

//-object 
console.log('1.object');

/*
var a = {
    key : value , 
    key : value
}
*/

var myDog = {
    name : 'Den',
    weight : 5.2,
    isAlive : true
};

console.log(myDog.name);
console.log(myDog);

myDog['isAlive'] = false;

console.log(myDog);
console.log('=======================================================');

//-array 
console.log('2.array');

var evenNumbers = [2,4,6];
console.log(evenNumbers);
console.log('=======================================================');

var dog1 = {
    name : 'xu' ,
    weight : 10.5 , 
    isAlive : false
};

var dog2 =  {
    name : 'Den', 
    weight : 7.2 ,
    isAlive : true
}; 

var bunchOfDogs = [dog1,dog2];
console.log(bunchOfDogs);
console.log('=======================================================');

var contacts = [
    {name: 'ut' , phone:12345612},
    {name: 'hieu' , phone:4451315}
];
console.log(contacts);
console.log('=======================================================');