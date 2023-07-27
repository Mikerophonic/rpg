export class Character {
    constructor(str, dex, int, def, mag, name) {
      this.str = str;
      this.dex = dex;
      this.int = int;
      this.def = def;
      this.mag = mag;
      this.name = name;
      this.exp = 0;
      this.level = 1
    }

    levelUp() {
      if (this.exp >= 100) {
        this.level++
        this.exp = this.exp - 100
        this.str += Math.floor(Math.random() * 15)
        this.dex += Math.floor(Math.random() * 15)
        this.int += Math.floor(Math.random() * 15)
        this.def += Math.floor(Math.random() * 15)
        this.mag += Math.floor(Math.random() * 15)

      }
    }
    
  }

export class Warrior extends Character {
    constructor(str, dex, int, def, mag, name) {
    super(str, dex, int, def, mag, name); 
    this.str = 50;
    this.dex = 35;
    this.int = 0;
    this.def = 40;
    this.mag = 2;
    this.name = "Conan";
    this.health = 40 * 10;
    this.exp = 0
    this.level = 1
  }

    bigThrust() {
    console.log(this.name + " thrusted bigly!")
    }
}

export class Ranger extends Character {
  constructor(str, dex, int, def, mag, name) {
  super(str, dex, int, def, mag, name); 
  this.str = 30;
  this.dex = 50;
  this.int = 10;
  this.def = 35;
  this.mag = 10;
  this.name = "";
  this.health = 35 * 10;
  this.exp = 0
  this.level = 1
}

  sneakAttack() {
  console.log(this.name + " attacked sneakily!")
  }
}

export class Mage extends Character {
  constructor(str, dex, int, def, mag, name) {
  super(str, dex, int, def, mag, name); 
  this.str = 15;
  this.dex = 30;
  this.int = 35;
  this.def = 25;
  this.mag = 50;
  this.name = "Elementia";
  this.health = 25 * 10;
  this.exp = 0
  this.level = 1
}

  celestialBurst() {
  console.log(this.name + " bursted celestially!")
  }
}

export class Cleric extends Character {
  constructor(str, dex, int, def, mag, name) {
  super(str, dex, int, def, mag, name); 
  this.str = 15;
  this.dex = 30;
  this.int = 50;
  this.def = 25;
  this.mag = 35;
  this.name = "";
  this.health = 25 * 10;
  this.exp = 0
  this.level = 1
}

  heal() {
  console.log(this.name + " healed!")
  }
}

export class Knight extends Character {
  constructor(str, dex, int, def, mag, name) {
  super(str, dex, int, def, mag, name); 
  this.str = 40;
  this.dex = 30;
  this.int = 15;
  this.def = 50;
  this.mag = 10;
  this.name = "";
  this.health = 50 * 10;
  this.exp = 0
  this.level = 1
}

  holyProtection() {
  console.log(this.name + " protected holily!")
  }
}

console.log("test")