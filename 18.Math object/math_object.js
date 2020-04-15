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
