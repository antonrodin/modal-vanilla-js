class Modal {

    constructor(id) {
        this.elem = document.getElementById(id);
        this.elem.addEventListener('click', e => {
            if(e.target.classList.contains("close-modal")) {
                this.hide();
            }
        });
    };

    show(callback) {
        this.elem.style.display = "block";
        if (callback) callback();
    };

    hide(callback) {
        this.elem.style.display = "none";
        if (callback) callback();
    };

}