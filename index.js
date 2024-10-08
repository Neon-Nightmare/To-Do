function addtolist() {
    const inputTextValue = document.getElementById('event').value;
    const div = document.getElementById('inputs');
    console.log(inputTextValue);
    if (inputTextValue !== '') {
        div.innerHTML += 
            `<div class="inputs">
                <input type="checkbox" name='checkbox' class="input-field" onchange="color()">
                    <label for='checkbox' id='label'> ${inputTextValue} </label>
            </div>`;
    savetolocalstorage(inputTextValue);
    }
};


function deletefromlist() {
    const checkboxes = document.querySelectorAll('.input-field');
    const archivelist = document.getElementById('archivelist');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            archivelist.innerHTML += `<li> ${checkbox.parentNode.lastElementChild.textContent.trim()} </li>`;
            checkbox.parentElement.remove();
            updatelocalstorage();
        }
    });
}

function savetolocalstorage(item) {
    let todoList =
        JSON.parse(localStorage.getItem('todoList')) || [];
    todoList.push(item);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function loadfromlocalstorage() {
    let todoList =
        JSON.parse(localStorage.getItem('todoList')) || [];
    const div = document.getElementById('inputs');
    todoList.forEach(item => {
        div.innerHTML +=
            `<div class="inputs">
                <input type="checkbox" class="input-field">
                <label> ${item}</label>
            </div>`;
    });
}

function updatelocalstorage() {
    const labels = document.querySelectorAll('.inputs label');
    let todoList = [];
    labels.forEach(label => {
        todoList.push(label.textContent.trim());
});
localStorage.setItem('todoList', JSON.stringify(todoList));
}

loadfromlocalstorage();