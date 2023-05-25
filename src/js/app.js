import Game from './game';
import GameSavingData, { readGameSaving as loadGame, writeGameSaving as saveGame } from './game_saving';

const game = new Game();
game.start();
