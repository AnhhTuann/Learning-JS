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
