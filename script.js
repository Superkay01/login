let title = document.getElementById("title");
let inputField = document.getElementById("inputField");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

signupBtn.onclick = function() {
    inputField.style.maxHeight = "0"
    title.innerHTML = "Sign In";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

signinBtn.onclick = function() {
    inputField.style.maxHeight = "60px"
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}