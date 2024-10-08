function addtolist() {
    const inputTextValue = document.getElementById('event').value;
    const div = document.getElementById('inputs');

    div.innerHTML += 
        `<div class="inputs">
            <input type="checkbox" id='input' class="input-field">
            <l for='input'> ${inputTextValue}</l>
        </div>`;
    
    savetolocalstorage(inputTextValue)
};

function deletefromlist(){
    const checkboxes = document.querySelectorAll('.input-field');

    const archivelist = document.querySelector('#archivelist');
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            console.log(checkbox.parentNode.lastElementChild.innerHTML)
            archivelist.innerHTML += `<li> ${checkbox.parentNode.lastElementChild.innerHTML} </li>`
            checkbox.parentElement.remove();
        }
    });

    updatelocalstorage();
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
            `<div class="input-field">
                <input type="checkbox" class="input-field">
                <label> ${item}</label>
            </div>`;
    });
}

function updatelocalstorage() {
    const labels = document.querySelectorAll('.input-field label');
    let todoList = [];
    labels.forEach(label => {todoList.push(label.textContent.trim());
});
localStorage.setItem('todoList', JSON.stringify(todoList));
}

loadfromlocalstorage();