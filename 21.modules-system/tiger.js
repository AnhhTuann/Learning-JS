function Tiger () {
    this.stomach = [];
}

Tiger.prototype.eat = function (pig) {
    this.stomach.push(pig);
    pig.die();
} 

module.exports = Tiger ;