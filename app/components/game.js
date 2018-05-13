import Button from './button';

function createGird(grid, size) {
  for (let i = 0; i < size; i++) {
    grid.push([]);
  }
}

function checkVerticals(column, size) {
  let has_x_in_a_row = false;

  return has_x_in_a_row;
}

function checkHorizontals(row, size) {
  let has_x_in_a_row = false;

  return has_x_in_a_row;
}

function checkDiagnols(diagnol, size) {
  let has_x_in_a_row = false;

  return has_x_in_a_row;
}

class Game {
  constructor(gridSize) {
    this.grid = [];
    this.size = gridSize;
    this.markedSpaces = [];

    createGird(this.grid, gridSize);
  }

  reset() {
    this.grid = [];
    createGird(this.grid, this.size);

    this.markedSpaces.forEach(el => {
      Button.reset(el);
    });
    this.markedSpaces = [];
  }

  markSpace(el) {
    this.markedSpaces.push(el);
    this.grid[el.dataset.row][el.dataset.column];
  }

  hasPalyerWon() {
    return this.noMovesLeft();
  }

  noMovesLeft() {
    return this.markedSpaces.length === (this.size * this.size);
  }
}

export default Game;
