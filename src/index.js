import './css/styles.css';
import { Battle } from './battle.js';
import { Character, Warrior, Mage } from './character.js';
import { Inventory } from './inventory.js';

window.addEventListener("load", function(){
  const character = new Character();
  const inventory = new Inventory();
  const warrior = new Warrior();
  const mage = new Mage();
  const battle = new Battle();
  
  console.log(inventory, character, warrior, mage, battle)
})