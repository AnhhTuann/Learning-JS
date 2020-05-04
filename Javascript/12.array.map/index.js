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