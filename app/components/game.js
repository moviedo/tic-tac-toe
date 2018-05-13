import Button from './button';

export const X_MARK = 'X';
export const O_MARK = 'O';

function createGird(grid, size) {
  for (let i = 0; i < size; i++) {
    grid.push([]);
  }
}

function checkForMatchingRow(grid) {
  let has_x_in_a_row = false;
  const length = grid.length;

  for (let i = 0; i < length; i++) {
    const row = grid[i];

    if (row.length === length && row.every(x => x.innerText === X_MARK)) {
      has_x_in_a_row = true;
      break;
    }

    if (row.length === length && row.every(x => x.innerText === O_MARK)) {
      has_x_in_a_row = true;
      break;
    }
  }

  return has_x_in_a_row;
}

class Game {
  constructor(gridSize) {
    this.size = gridSize;
    this.markedSpaces = [];
    this.reset();
  }

  reset() {
    this.rowGrid = [];
    createGird(this.rowGrid, this.size);

    this.colGrid = [];
    createGird(this.colGrid, this.size);

    this.markedSpaces.forEach(el => {
      Button.reset(el);
    });
    this.markedSpaces = [];
  }

  markSpace(el) {
    this.markedSpaces.push(el);
    this.rowGrid[el.dataset.row][el.dataset.column] = el;
    this.colGrid[el.dataset.column][el.dataset.row] = el;
  }

  hasPalyerWon() {
    return this.noMovesLeft() || checkForMatchingRow(this.rowGrid) || checkForMatchingRow(this.colGrid);
  }

  noMovesLeft() {
    return this.markedSpaces.length === (this.size * this.size);
  }
}

export default Game;
