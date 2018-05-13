class Button {

  static create(row, col) {
    const buttonEl = document.createElement('button');
    buttonEl.dataset.row = row;
    buttonEl.dataset.col = col;

    return buttonEl;
  }

  static reset(buttonEl) {
    buttonEl.disabled = false;
    buttonEl.className = '';
    buttonEl.innerText = '';
  }

  static mark(buttonEl, mark) {
    buttonEl.disabled = true;
    buttonEl.className = 'disabled';
    buttonEl.innerText = mark;
  }
}

export default Button;
