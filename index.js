function addtolist(){
    const input_text_value = document.getElementById('event').value;
    const div = document.getElementById("inputs");

    div.innerHTML += 
        `<div>
            <input type="checkbox" name="input-field" id="input-field">
            <label for="input-field"> ${input_text_value}</label>
        </div>`;
    
}