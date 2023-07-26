import {Character} from './character.js';
import {Inventory} from './inventory.js';


export class Battle {
    constructor (player1, player2, turn){
    this.player1 = player1;
    this.player2 = player2;
    this.turn = turn;
    }

    attack(attacker, defender) {
        let damage = attacker.str - defender.def;
        defender.health = defender.health - damage;
        this.changeTurn()
        return defender.health;
    }
    magAttack(attacker, defender) {
        let chanceDamage = Math.floor(Math.random() * 10);
        let damage = attacker.mag + chanceDamage - defender.int;
        defender.health = defender.health - damage;
        this.changeTurn()
        return defender.health;

    }
    useItem(inventory, user) {
        inventory.useHealthPotion(user)
        this.changeTurn()
    }
    startTurn() {
        if (this.player1.dex > this.player2.dex) {
            this.turn = this.player1;
        } else {
            this.turn = this.player2;
        }
    }
    changeTurn() {
        if (this.turn === this.player1) {
            this.turn = this.player2;
        } else if (this.turn === this.player2) {
            this.turn = this.player1;
        }
    }
}
