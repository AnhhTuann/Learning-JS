function Pig (color) {
    this.type = 'pig';
    this.color = color;
    this.dead = false;
};

Pig.prototype.die = function () {
    this.dead = true;
}

module.exports = Pig ;