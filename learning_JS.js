//1.Variable 

var a = 1 ; 
console.log(a);
console.log('=======================================================');

//2.Data types

//Primitive types 

//-Number 
    var a1 = 100 ;
    var a2 = 0.5 ;
    console.log (a1,a2);
    console.log('=======================================================');

//-String 
    var str = 'Hello , world ';
    var str2 = "Hello , world ";
    var str3 = 'Hello , I\'m Tuan ';
    console.log(str3);
    console.log('=======================================================');

//-Boolean 
    var isHidden = true;
    console.log(isHidden);
    console.log('=======================================================');

//Special types

//-undefined
    var a; 
    a = 100;
    console.log (a);
    console.log('=======================================================');

//-null 
    a = null ;
    console.log(a);
    console.log('=======================================================');

//Reference types 

//-object 
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

//3.Arithmetic Operators

// thu tu thuc hien 

// 1. ++ --
    var a= 1; 
    ++a ; //thuc hien ngay luc do
    console.log(a);
    var b = 1 ; 
    b++; //tang len 1 nhung tra ve trc khi tang
    console.log(b);
    console.log('=======================================================');
    //tuong tu voi -- 

    var a = 5
    var s = a++ + ++a;
    console.log(s);
    console.log('=======================================================');

// 2. * / 
    var a = 2;
    var b = 6;
    var c = 10;
    var s = a++ - b-- * ++c + --a * ++b;
    console.log(s);
    console.log('=======================================================');

// 3. + - 
    var a = 2;
    var b = 4;
    var s = a +b ;
    console.log(s);
    console.log('=======================================================');

//4.Assigment Operation 

// 4. = += -= *= /=
    var a;
    var b;
    a = b = 1;
    console.log(a);
    console.log('=======================================================');

    var a=5;
    a+=1;//a=a+1;
    console.log(a);
    console.log('=======================================================');

//5.Function 
    function calculateTriangSquare (a,h) {
        return a*h/2;
    }
    console.log (calculateTriangSquare(10,5));
    console.log('=======================================================');

//6.Object methods
    var myDog = {
        name : 'Den',
        weight : 5,
        age : 5 , 
        bark : function () {
            console.log ('Gau Gau , My name is ', this.name);
        }
    }
    myDog.bark();

    function bark () {
        console.log ('Gau Gau , My name is ', this.name);
    }
    bark();
    console.log('=======================================================');

    var myCat = { 
        mouse : 0.5,
        weight : 5 ,
        name : 'Meo',
        age : 3,
        bark : function () {
            console.log ('Meo Meo , My name is ', this.name);
        },
        eat : function () {
            this.weight = this.weight + this.mouse ;
            return this;
        },
    }
    
    console.log('Before eating ',myCat.weight)
    myCat.bark();
    myCat.eat();
    console.log('After eating' ,myCat.weight)
    console.log('=======================================================');

//7.Comparison Operation 
//> >= <= === !==
'a' === 'a';

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
//9.for ........... of
//for ...........in 
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

//11. Dung function nhu tham so 

    var coffeeMachine =  {
        makeCoffee : function (onFinish) {
            console.log('Making coffee ......');
            onFinish();
        }
    };

    var beep = function () {
        console.log ('beep beep');
    };

    //call back 
    coffeeMachine.makeCoffee(beep);
    /*
    coffeeMachine.makeCoffee(function () {
        console.log ('beep beep');
    })
    */
    console.log('======================================================='); 

//12.array.map 
    /*
    array.map (function (item) {
        //tranform
        return new value;
    }) ;
    */ 

    var numbers = [1,2,3,4]
    var squareNumber = numbers.map (function (item){
        return item*2;
    }); 
    
    console.log(squareNumber);
    console.log('======================================================='); 

    var rectangles = [
        {width : 10 , height : 5},
        {width : 12 , height : 25},
        {width : 32 , height : 14},
        {width : 31 , height : 15},
    ];
    var s = rectangles.map(function (item){
        return item.height * item.width;
    });

    console.log(s);
    console.log('======================================================='); 

//13.array.filter 
    /*
        array.filter (function(item){
            //filter 
            return newvalue; //true or false
        } );
    */ 

    var numbers =  [1,2,3,4];
    
    var evenNumber = numbers.filter(function(item){
        return item % 2 ===0 ;
    });

    console.log (evenNumber);
    console.log('======================================================='); 

//14.array.find 
    /*
        array.find (function(item){
            //find 
            return item
        });
    */ 
    
    var a= [1,2,3,4];
    var evenNumber = a.find(function(item){
        return item %2 ===0;
    });
    console.log (evenNumber);
    console.log('======================================================='); 

//15.array.reduce
    /*
        array.reduce (function(item1 ,item2){
            //calculation
            return x
        });
    */ 

    var numbers = [1,2,3,4];

    var sum = numbers.reduce (function(a,b){
        return a+b;
    });
    console.log(sum);
    console.log('======================================================='); 

    var orders = [
        {name : 'San pham A' , quantity: 2 , price : 2000},
        {name : 'San pham B' , quantity: 3 , price : 1000},
        {name : 'San Pham C' , quantity: 6 , price : 4000}
    ]

    var total = orders.reduce (function(currentTotal , product){
        return currentTotal + product.price * product.quantity ;
    }, 0);
    console.log (total);
    console.log('======================================================='); 

//16.array.reduce 2
    /* 
    array.reduce (function (item 1 ,item 2) {
        //calculation 
        return x ;
    } , init)
    */

    var a = [1,2,3,4]
    var reduceArray = a.reduce(function(item1 , item2){
        return item1 + item2;
    },0);
    console.log(reduceArray);
    console.log('======================================================='); 

//17.array.sort 
    // sytax : array.sort (function (a,b) {}) -> return a sorted arr 
    /*
    if sort function 
    1.returns a value < 0 
        a will come before b
    2.returns a value > 0 
        a will come after b
    3.returns 0 
        a and b will stay unchange 
    */
    
    var numbers = [2,1,3,4];
    var sortNumber = numbers.sort (function (a,b){
        //a = 2 , b = 1 
        return  a - b
    });

    console.log (sortNumber);
    console.log('======================================================='); 

    var employees = [ 
        {name : 'Mi' , age : 8},
        {name : 'Tuan' , age : 20},
        {name : 'Ut' , age : 17}
    ];
    
    console.log(employees);

    var sortEmployees = employees.sort (function (a,b){
        // a = empoyees.age[1]  , b = emloyees.age[2]
        return a.age - b.age;
    });

    console.log (sortEmployees);
    console.log('=======================================================');

    var products = [ 
        {name : 'San pham A' , price: 5000 , quantity: 2},
        {name : 'San pham B' , price: 3000 , quantity: 5},
        {name : 'San pham C' , price: 2000 , quantity: 8}
    ];

    var sortByPrice = products.sort (function (a,b){
        //a = 5000 , b = 3000
        return a.price - b.price;
    });

    console.log(sortByPrice)
    console.log('======================================================='); 

    var sortBySort = products.sort (function (a,b){
        return (a.price * a.quantity) - (b.price * b.quantity);
    });
    console.log(sortByPrice);
//18.Math object 
//Math.PI
//Math.ceil(number)
//Math.floor(number) 
//Math.round(number)
//Math.max(x1,x2,....)
//Math.min(x1,x2,...)
//Math.radom()
    function discArea (r) {
        return r*r*Math.PI;
    }
    console.log(discArea(3));
    console.log('=======================================================');

    console.log(Math.ceil(9.2));
    console.log('=======================================================');

    console.log(Math.floor(9.7))
    console.log('=======================================================');

    console.log(Math.max(12,1,9,5))
    console.log('=======================================================');
    
    console.log(Math.min(1,54,8,9))
    console.log('=======================================================');

    console.log('Random : ', Math.random());
    // 0 -> 1

    function tossCoin (){
        var random = Math.random();
        return random > 0.5; 
    }
    console.log('Mat sap' , tossCoin());
    console.log('=======================================================');

    function dice () {
        var random = Math.random();

        if (random <= 0.16) {
            console.log ('Mat so 1');
        } 
        else if (0.16 < random <= 0.32 ) {
            console.log ('Mat so 2');
        }
        else if (0.32 < random <= 0.48) {
            console.log ('Mat so 3');
        }
        else if (0.48 < random <= 0.64) {
            console.log ('Mat so 4');
        } 
        else if (0.64 < random <= 0.8) {
            console.log ('Mat so 5');
        }
        else {
            console.log ('Mat so 6');
        }
    };
    console.log(dice());
    console.log('=======================================================');

//19.The new  keyword 
// var date = new Date();

//create new object , object literal

    var mouse = {
        weight : 0.2 , 
        getWeight : function () {
            return this.weight;
        }
    };

    console.log(mouse,mouse.getWeight());
    console.log('=======================================================');
//contructor function 

    function Mouse () {
        this.type = 'mouse',
        this.color = 'white'
    }

    var mouse1 = new Mouse('Black');
    var mouse2 = {type:'mouse' , color:'White'};

    console.log(mouse1);
    console.log(mouse2);
    console.log('=======================================================');

    var tom = {
        name : 'Tom', 
        stomach : [],
        eat : function (mouse) {
            this.stomach.push(mouse);
            return this;
        }
    };

    //var m1 = {name:'m1'};
    //var m2 = {name:'m2'};
    //var m3 = {name:'m3'};
    
    function Mouse1 (name,weight) {
        this.name = name;
        this.weight = weight;
    }

    var m1 = new Mouse1('m1',0.2);
    var m2 = new Mouse1('m2',0.23);
    var m3 = new Mouse1('m3',0.22);

    tom.eat(m1).eat(m2).eat(m3);

    console.log('Tom : ',tom);
    console.log('=======================================================');

//20. prototype in JS
    function Cat (color,weight){
        this.type = 'Cat';
        this.color = color;
        this.weight = weight;

        //this.sleep = function() {
        //    console.log('Sleeping');
        //}
    }

    console.log(Cat.prototype.constructor === Cat)

    Cat.prototype.sleep = function (){
        console.log(this.color +' ' + 'Zzzzzzzzzzzzzz')
    };

    var Tom = new Cat('Orange',5);
    console.log(Tom.color);
    Tom.sleep();
    console.log('=======================================================');

//21 Node module system 

    function Mouse(color) {
        this.type = 'mouse'
        this.color = color;
        this.dead = false;
    };

    Mouse.prototype.die = function () {
        this.dead = true ;
    };

    function Cat() {
        this.stomach = [];
    };

    Cat.prototype.eat = function (mouse) {
        this.stomach.push(mouse);
        mouse.die();
    };

    var mickey = new Mouse('Black');
    var jerry = new Mouse('Orange');
    
    console.log(mickey,jerry);

    var tom = new Cat ();

    tom.eat(jerry);

    console.log(jerry);

    console.log('=======================================================');
//22.node-built-in-modules

//23.npm

//24.JSON methods
//1.stringify - Convert a object to a JSON string 
//2.parse - Convert a JSON string to a object

var myDog = {name: 'Den' , age : 5 , dead: false};
var myDogString = JSON.stringify(myDog);

console.log(myDogString);
console.log('=======================================================');

var myCatString = '{"name": "Den", "age": 2, "dead":true}';
var myCat = JSON.parse(myCatString);

console.log(myCat);
console.log('=======================================================');