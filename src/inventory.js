
export class Inventory {
    constructor (healthPotion = 0, magicPotion = 0) {
        this.healthPotion = healthPotion
        this.magicPotion = magicPotion
    }

    useHealthPotion(character) {
        if (this.healthPotion > 0) {
        character.health = character.health + 25;
        this.healthPotion = this.healthPotion - 1;
    } else {
        console.log(`${character.name} is out of health potions.`);
        }
        return character.health
    }

}