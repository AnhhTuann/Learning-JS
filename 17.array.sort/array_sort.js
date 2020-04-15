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