// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 

export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.querySelector('.overlay');
        this.#initOpen(buttonId);
        this.#initClose(shouldCloseOnOverlay);
    }

    openModal() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
    }

    closeModal() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
    }

    isOpenModal() {
        return this.modal.classList.contains('modal-showed');
    }

    #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
        button.addEventListener('click', () => {
        this.openModal();
    });
    }

    #initClose(shouldCloseOnOverlay) {
    const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.closeModal();
    });

    if (shouldCloseOnOverlay) {
        this.overlay.addEventListener('click', () => {
        this.closeModal();
    });
    }
    }
}