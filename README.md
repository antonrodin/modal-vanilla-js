# Modal with Vanilla JavaScript

About ten lines of code, without any shit added. Also bootstrap3 branch it the same, but with Bootstrap CSS.

```javascript

const button1 = document.getElementById('show-modal-1');
const modal1 = new Modal('my-modal-1');

button1.addEventListener('click', e => {
    e.preventDefault();
    modal1.show();
});

```