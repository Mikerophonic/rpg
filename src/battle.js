// import {Character} from './character.js';
// import {Inventory} from './inventory.js';


export class Battle {
    constructor (player1, player2, turn){
    this.player1 = player1;
    this.player2 = player2;
    this.turn = turn;
    }

    attack(attacker, defender) {
        let damage = attacker.str - defender.def;
        defender.health = defender.health - damage;
        attacker.exp = attacker.exp + 10
        attacker.levelUp();
        this.isGameOver();
        this.changeTurn();
        return defender.health;
    }
    magAttack(attacker, defender) {
        let chanceDamage = Math.floor(Math.random() * 10);
        let damage = attacker.mag + chanceDamage - defender.int;
        defender.health = defender.health - damage;
        attacker.exp = attacker.exp + 10
        attacker.levelUp();
        this.isGameOver();
        this.changeTurn();
        return defender.health;

    }
    useItem(inventory, user) {
        inventory.useHealthPotion(user);
        this.changeTurn();
    }
    startTurn() {
        if (this.player1.dex > this.player2.dex) {
            this.turn = this.player1;
            return `${this.player1.name} starts!`

        } else {
            this.turn = this.player2;
            return `${this.player1} starts!`

        }
    }
    changeTurn() {
        if (this.turn === this.player1) {
            this.turn = this.player2;
        } else if (this.turn === this.player2) {
            this.turn = this.player1;
        }
    }
    isGameOver() {
        if (this.player1.health <= 0) {
            return `${this.player1.name} loses!`
        } else if (this.player2.health <= 0) {
            return `${this.player2.name} loses!`
        }
    }
    hitOrMiss(attacker, defender) {
        let chanceAttack = Math.floor(Math.random() * 2);
        if (attacker.dex > defender.dex) {
            this.attack(attacker, defender);
        } else if (attacker.dex <= defender.dex) {
            if (chanceAttack === 0) {
                this.missAttack(attacker);
            } else if (chanceAttack === 1) {
                this.attack(attacker, defender);
            }
        }
    }
    missAttack(attacker) {
        this.changeTurn();
        return `${attacker.name} missed!`
    }
}
