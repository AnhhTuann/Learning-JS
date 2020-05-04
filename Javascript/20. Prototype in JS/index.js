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