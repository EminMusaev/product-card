// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 

export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');
        this.closeBtn = this.modal.querySelector('.close-btn');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.handleClose = this.closeModal.bind(this);
        this.#initOpen(buttonId);
    }

    openModal() {
        this.#initClose();
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
    }

    closeModal() {
        this.#removeCloseListeners();
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
    }

    isOpenModal() {
        return this.modal.classList.contains('modal-showed');
    }

    #initOpen(buttonId) {
        const button = document.getElementById(buttonId);
        button.addEventListener('click', () => this.openModal());
    }

    #initClose() {
        this.closeBtn.addEventListener('click', this.handleClose);
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.handleClose);
        }
    }

    #removeCloseListeners() {
        this.closeBtn.removeEventListener('click', this.handleClose);
        this.overlay.removeEventListener('click', this.handleClose);
    }
}
