// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 

export class Modal {
    constructor(modalId) {
    this.modal = document.getElementById(modalId);
    if (!this.modal) return;

    this.closeBtn = this.modal.querySelector('#close-btn');
    this.initCloseButton();
    }

    openModal() {
    this.modal.classList.add('modal-showed');
    }

    closeModal() {
    this.modal.classList.remove('modal-showed');
    }

    isOpenModal() {
        return this.modal.classList.contains('modal-showed');
    }

    initCloseButton() {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                this.closeModal();
            });
        }
    }
}