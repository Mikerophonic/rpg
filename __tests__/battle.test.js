import {Battle} from './../src/battle.js';
import {Inventory} from './../src/inventory.js';
import {Character, Warrior, Mage} from './../src/character.js';
    describe('Battle', () => {
        let character;
        beforeEach(() => {
            let character = new Character();
        });
        test('It should take character classes as arguments and assign them as properties', () => {
            let warrior = new Warrior();
            let mage = new Mage();
            let battle = new Battle(warrior, mage);

            expect(battle.player1.name).toEqual("Conan");
            expect(battle.player2.name).toEqual("Elementia");

        });
        test('It should allow players to attack one another', () => {
            let warrior = new Warrior();
            let mage = new Mage();
            let battle = new Battle(warrior, mage);
            battle.attack(warrior, mage);
            expect(mage.health).toEqual(225);
        });
        test('It should allow players to cast magic at one another', () => {
            let warrior = new Warrior();
            let mage = new Mage();
            let battle = new Battle(warrior, mage);
            battle.magAttack(mage, warrior);
            expect(warrior.health).toBeLessThan(351);
            expect(warrior.health).toBeGreaterThan(339);
        });
        test('It should allow players to use items like potions', () => {
            let warrior = new Warrior();
            let mage = new Mage();
            let battle = new Battle(warrior, mage);
            let mageInventory = new Inventory(2, 2);
            battle.useItem(mageInventory, mage);
            expect(mage.health).toEqual(275);
            expect(mageInventory.healthPotion).toEqual(1);
        });
        test('It should establish who goes first', () => {
            let warrior = new Warrior();
            let mage = new Mage();
            let battle = new Battle(warrior, mage);
            battle.startTurn();
            expect(battle.turn).toEqual(warrior);
        });
    });
