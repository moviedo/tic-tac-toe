import { newRow } from './components/row';
import Modal from './components/modal';
import Button from './components/button';
import Game from './components/game';
import { X_MARK, O_MARK } from './components/game';

const GRID_SIZE = 3;

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(GRID_SIZE);
  const modal = new Modal(document.getElementById('modal-container'));

  setupGrid(game, modal);
  setupModal(game, modal);

  const restartEl = document.getElementById('restart');
  restartEl.onclick = function() {
    game.reset();
  }
});


function setupGrid(game, modal) {
  const girdEl = document.getElementById('app');

  for(let row = 0; row < GRID_SIZE; row++) {
    girdEl.appendChild(newRow(row, GRID_SIZE));
  }

  girdEl.onclick = function(evt) {
    const el = evt.target;
    game.markSpace(el);

    if (game.lastMove === X_MARK) {
      Button.mark(el, O_MARK);
      game.lastMove = O_MARK;

    } else {
      Button.mark(el, X_MARK);
      game.lastMove = X_MARK;

    }

    if (game.hasPalyerWon()) {
      modal.open();
    }
  }
}

function setupModal(game, modal) {
  const closeButton = document.querySelector('#modal-container .close');
  closeButton.onclick = function() {
    modal.close();
  }

  const noBtn = document.querySelector('#no');
  noBtn.onclick = function() {
    modal.close();
  }

  const yesBtn = document.querySelector('#yes');
  yesBtn.onclick = function() {
    modal.close();
    game.reset();
  }

}
