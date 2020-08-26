const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value == ""){
        showError(username, "Please enter username")
    }else{
        showSuccess(username);
    }
});

function showError(input, message){
    const formcontrol = input.parentElement;
    formcontrol.classList = "form-group error";
    const small = formcontrol.querySelector("small");
    small.innerText = message
}
function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.classList = "form-group success";
}