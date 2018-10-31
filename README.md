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

Example 3. Custom event 'AzrModalClose'. This one is valid for execute some logic
when user closes the modal. In my particular case to stop play video.

```javascript
    const modal3 = new Modal("my-modal-3");
    modal3.show(doStuffOnOpen);

    document.addEventListener('AzrModalClose', e => {
        console.log("Modal Close is Triggered");
    });
```