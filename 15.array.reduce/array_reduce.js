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
