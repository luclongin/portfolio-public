function checkPassword() {
    var inputtedPassword = document.getElementById("password-input").value;
    var errorMessage = document.getElementById("password-error-msg");
    var password = "LL2023!";
    if(inputtedPassword == password) {
        location.href = "VHOKZkEAmpFB7c2YnABN.html";
    } else {
        document.getElementById("password-input").value = "";
        errorMessage.classList.remove("hidden");
    }
}

