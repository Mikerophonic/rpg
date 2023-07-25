import Character from './../src/character.js';
    describe ('Character', () => {
        let character;
        beforeEach(() => {
            character = new Character(12, 12, 13, 23, 43);
        });
        test('It should create a new character object', () => {
            expect(character.str).toEqual(12);
            expect(character.dex).toEqual(12);
            expect(character.int).toEqual(13);
            expect(character.def).toEqual(23);
            expect(character.mag).toEqual(43);
        })
    });