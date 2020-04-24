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