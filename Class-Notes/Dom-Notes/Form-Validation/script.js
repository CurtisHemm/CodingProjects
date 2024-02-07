console.log("Script ran!");

function validateForm(e) {
    console.dir(document.forms);
    let inputValue = document.forms["myForm"]
    ["fname"].value;
    console.log(inputValue);
    if (inputValue == "" || inputValue.length > 30) {
        alert("Form validation failed");
        return false;
    }
}