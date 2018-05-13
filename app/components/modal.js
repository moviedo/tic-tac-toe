class Modal {
  constructor(el) {
    this.el = el;
  }

  close() {
    this.el.style.display = 'none';
  }

  open(el, callback) {
    this.el.style.display = 'block';
  }
}

export default Modal;
