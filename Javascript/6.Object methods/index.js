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
