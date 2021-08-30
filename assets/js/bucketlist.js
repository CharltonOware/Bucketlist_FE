// selectors
const itemForm = document.querySelector('form');
const listUnsigned = document.querySelector('ul');
const clearElement = document.getElementById('clearAll');

//Event handlers
itemForm.addEventListener('submit', handleSubmitForm);
listUnsigned.addEventListener('click', handleClickDeleteOrCheck);
clearElement.getElementById('click',handleClearAll);

console.log("SAVED TOKEN",localStorage.getItem('auth_token'));

//Some useful functions
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value !='') {
        addItem(input.value);
    //clear input after submitting
    input.value = ''
    }
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name === 'checkButton')
        //toggle check button
        checkItem(e);

    if (e.target.name === 'deleteButton')
        deleteItem(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

//Helper functions
function addItem(item) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="bucketlist-item">${item}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('bucketlist-item');
    ul.appendChild(li);
}

function checkItem(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteItem(e) {
    let item = e.target.parentNode;

    //register a callback called only after transition is fully executed
    item.addEventListener('transitionend', function () {
        item.remove();
    })
    item.classList.add('bucketlist-item-fall');
    
}