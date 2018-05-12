import Button from './button';

export function newRow(rowIndex, cloumnLength) {
  const rowEl = document.createElement('section');
  rowEl.className = 'row';

  // used to add dynamic height, so we can create a tic tac toe game of x by x grid
  rowEl.style = `height: ${100*(1/cloumnLength)}%;`;

  for(let column = 0; column < cloumnLength; column++) {
    rowEl.appendChild(Button.create(rowIndex, column));
  }

  return rowEl;
}
