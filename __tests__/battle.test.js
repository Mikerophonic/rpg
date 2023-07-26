import {Battle} from './../src/battle.js';
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
        
    });
