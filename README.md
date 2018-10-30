# Modal with Vanilla JavaScript

Example 1

```javascript

const button1 = document.getElementById('show-modal-1');
const modal1 = new Modal('my-modal-1');

button1.addEventListener('click', e => {
    e.preventDefault();
    modal1.show();
});

```

Example 2. With callback function.

```javascript

const button1 = document.getElementById('show-modal-1');
const modal1 = new Modal('my-modal-1');

button1.addEventListener('click', e => {
    e.preventDefault();
    modal1.show(() => {
        console.log("Execute on open");
    });
});

//Also works on hide
modal1.hide(function() {
    console.log("Hide Modal");
});
```