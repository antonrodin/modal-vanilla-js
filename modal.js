class Modal {

    constructor(id) {
        this.elem = document.getElementById(id);
        this.elem.addEventListener('click', e => {
            if (e.target.classList.contains('close-modal')) {
                this.elem.style.display = "none";
                this.elem.classList.remove('in');
                this.elem.style.backgroundColor = "rgba(0, 0, 0, 1)";
            }
        })
    }

    show() {
        this.elem.style.display = "block";
        this.elem.classList.add('in');
        this.elem.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }

}