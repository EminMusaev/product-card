// 5. Создать файл Form.js и реализовать класс для формы под названием Form.

export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);

        if (!this.form) return;
    }

    getAllValues() {
        return Object.fromEntries(new FormData(this.form).entries());
    }

    isValid() {
        return this.form.checkValidity();
    }

    resetForm() {
        this.form.reset();
    }
}
