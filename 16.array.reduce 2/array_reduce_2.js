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
