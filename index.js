function addtolist(){
    
    const div = document.getElementById("inputs");
    div.innerHTML += 
        `<div>
            <input type="checkbox" placeholder="Enter value" id="input-field">
        </div>`;
    const input_text_value = document.getElementById('event').value;
    div.innerHTML += input_text_value
}