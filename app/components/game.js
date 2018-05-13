import Button from './button';

export const X_MARK = 'X';
export const O_MARK = 'O';

function createGird(grid, size) {
  for (let i = 0; i < size; i++) {
    grid.push([]);
  }
}

function hasXinARow(grid, length) {
  let has_x_in_a_row = false;
  length = length || grid.length;

  for (let i = 0; i < length; i++) {
    const row = grid[i];

    if (row && row.length === length && matches(row, X_MARK)) {
      has_x_in_a_row = true;
      break;
    }

    if (row && row.length === length && matches(row, O_MARK)) {
      has_x_in_a_row = true;
      break;
    }
  }

  return has_x_in_a_row;
}

function matches(row, mark) {
  let allMatching = true;

  for (let i = 0; i < row.length; i++) {
    const item = row[i];

    if (!item || item.innerText !== mark) allMatching = false;
  }

  return allMatching;
}

function isOnFirstDiagnol(el) {
  return el.dataset.row === el.dataset.col;
}

function isOnSecDiagnol(el, size) {
  return parseInt(el.dataset.row) + parseInt(el.dataset.col) === size - 1;
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

    this.vertGrid = [[], []];

    this.markedSpaces.forEach(el => {
      Button.reset(el);
    });
    this.markedSpaces = [];

    this.lastMove = undefined;
  }

  markSpace(el) {
    this.markedSpaces.push(el);
    this.rowGrid[el.dataset.row][el.dataset.col] = el;
    this.colGrid[el.dataset.col][el.dataset.row] = el;

    if (isOnFirstDiagnol(el))
      this.vertGrid[0].push(el);

    if (isOnSecDiagnol(el, this.size))
      this.vertGrid[1].push(el);
  }

  hasPalyerWon() {
    return this.noMovesLeft() || hasXinARow(this.rowGrid) || hasXinARow(this.colGrid) || hasXinARow(this.vertGrid, this.size);
  }

  noMovesLeft() {
    return this.markedSpaces.length === (this.size * this.size);
  }
}

export default Game;
