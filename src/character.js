export class Character {
    constructor(str, dex, int, def, mag, name) {
      this.str = str;
      this.dex = dex;
      this.int = int;
      this.def = def;
      this.mag = mag;
      this.name = name;
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
  }

    bigThrust() {
    console.log(this.name + " thrusted bigly!")
    }
}