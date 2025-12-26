// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 

export class Modal {
    constructor(modalId) {
    this.modal = document.getElementById(modalId);
    if (!this.modal) return;

    this.closeBtn = this.modal.querySelector('#close-btn');
    this.initCloseButton();
}

    openModal() {
        this.modal.classList.remove('close-modal');
        this.modal.classList.add('open-modal');
    }

    closeModal() {
        this.modal.classList.remove('open-modal');
        this.modal.classList.add('close-modal');
    }

    isOpenModal() {
        return this.modal.classList.contains('open-modal');
    }

    initCloseButton() {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                this.closeModal();
            });
        }
    }
};
