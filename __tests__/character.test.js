import {Character, Warrior} from './../src/character.js';
    describe ('Character', () => {
        let character;
        beforeEach(() => {
            character = new Character();
        });
        test('It should create a new character object', () => {
            character = new Character(12, 12, 13, 23, 43);
            expect(character.str).toEqual(12);
            expect(character.dex).toEqual(12);
            expect(character.int).toEqual(13);
            expect(character.def).toEqual(23);
            expect(character.mag).toEqual(43);
        });
        test('It should create a warrior class with its own starting stats and special ability', () => {
            let warrior = new Warrior;
            expect(warrior.str).toEqual(50);
            expect(warrior.dex).toEqual(35);
            expect(warrior.int).toEqual(0);
            expect(warrior.def).toEqual(40);
            expect(warrior.mag).toEqual(2);
        });
        test('It should create a name for the character', () => {
            let warrior = new Warrior;
            expect(warrior.name).toEqual("Conan");
        });
        test('It should level up a character with 100 exp, increasing stats', () => {
            let warrior = new Warrior;
            warrior.exp = 100
            warrior.levelUp()
            expect(warrior.level).toEqual(2);
            expect(warrior.str).toBeGreaterThan(50);
            expect(warrior.exp).toEqual(0);
        });
    });