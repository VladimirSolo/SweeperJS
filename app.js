import { prepareBoard } from './js/board.js'
import { startGame } from './js/game.js'
import { newGameBtn, timer, width, height, mineCount } from './js/elements.js';

prepareBoard(width, height);
startGame(mineCount);

newGameBtn.addEventListener('click', () => {
  prepareBoard(width, height);
  startGame(mineCount);
  timer.textContent = '000';
  newGameBtn.style.backgroundImage = 'url("images/smile2.png")';
})


