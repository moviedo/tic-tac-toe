import { newRow } from './components/row';
import Button from './components/button';
import Game from './components/game';

const GRID_SIZE = 3;
const X_MARK = 'X';
const O_MARK = 'O';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(GRID_SIZE);
  setupGrid(game);

  const restartEl = document.getElementById('restart');
  restartEl.onclick = function() {
    game.reset();
  }
});


function setupGrid(game) {
  const girdEl = document.getElementById('app');

  for(let row = 0; row < GRID_SIZE; row++) {
    girdEl.appendChild(newRow(row, GRID_SIZE));
  }

  let lastMove;
  girdEl.onclick = function(evt) {
    const el = evt.target;
    game.markSpace(el);

    if (lastMove === X_MARK) {
      Button.mark(el, O_MARK);
      lastMove = O_MARK;

    } else {
      Button.mark(el, X_MARK);
      lastMove = X_MARK;

    }
  }
}
