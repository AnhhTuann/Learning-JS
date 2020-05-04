//19.The new  keyword 
// var date = new Date();

//create new object , object literal

var mouse = {
    weight : 0.2 , 
    getWeight : function () {
        return this.weight;
    }
};

console.log(mouse,mouse.getWeight());
console.log('=======================================================');
//contructor function 

function Mouse () {
    this.type = 'mouse',
    this.color = 'white'
}

var mouse1 = new Mouse('Black');
var mouse2 = {type:'mouse' , color:'White'};

console.log(mouse1);
console.log(mouse2);
console.log('=======================================================');

var tom = {
    name : 'Tom', 
    stomach : [],
    eat : function (mouse) {
        this.stomach.push(mouse);
        return this;
    }
};

//var m1 = {name:'m1'};
//var m2 = {name:'m2'};
//var m3 = {name:'m3'};

function Mouse1 (name,weight) {
    this.name = name;
    this.weight = weight;
}

var m1 = new Mouse1('m1',0.2);
var m2 = new Mouse1('m2',0.23);
var m3 = new Mouse1('m3',0.22);

tom.eat(m1).eat(m2).eat(m3);

console.log('Tom : ',tom);
console.log('=======================================================');
