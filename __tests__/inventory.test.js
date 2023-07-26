import {Battle} from './../src/battle.js';
import {Character, Warrior} from './../src/character.js';
import {Inventory} from './../src/inventory.js';

    describe('Inventory', () => {
        let inventory;
        beforeEach(() => {
            let inventory = new Inventory();
        });
        test('It should increase health upon use of a health potion', () => {
            inventory = new Inventory(2, 5);
            const character = new Warrior();
            inventory.useHealthPotion(character);
            expect(character.health).toEqual(425);
            expect(inventory.healthPotion).toEqual(1);
        });
    });
