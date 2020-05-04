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