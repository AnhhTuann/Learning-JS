//super
class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage);
  }
}

class RangeHero extends Hero {
  //subclass
  constructor(name, hp, damage, range) {
    super(name, hp, damage);
    this.range = range;
  }
  attack(enemy) {
    super.attack(enemy);
    this.hp += this.damage / 2;
  }
}

const HeroA = new Hero("Tuan", 1000, 1000);
const HeroB = new Hero("Vu", 2000, 800);
const HeroC = new RangeHero("Tri", 800, 2000, 30);

console.log(HeroA, HeroB);
HeroA.attack(HeroB);
console.log(HeroA, HeroB);

console.log("================================================================");

console.log(HeroC, HeroB);
HeroC.attack(HeroB);
console.log(HeroC, HeroB);
