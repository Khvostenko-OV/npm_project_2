import Game from './game.js';
import GameSavingData, { readGameSaving as loadGame, writeGameSaving as saveGame } from './game_saving.js';
import Bowman from './characters/bowman.js';
import PropertyList from './propery_list.js';
import GetSpecial from './get_special.js';

const game = new Game();
game.start();
const hero1 = new Bowman('Bob');
console.log(PropertyList(hero1, ['type', 'name']));

console.log(GetSpecial(hero1));

hero1.addSpecial(1, 'double', 'd');
hero1.addSpecial(2, 'new', 'n', 'very well');

console.log(GetSpecial(hero1));
