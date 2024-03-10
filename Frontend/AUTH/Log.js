function togglePasswordVisibility() {
    const passwordInput = document.getElementById("passwordInput");
    const eyeIconOff = document.getElementById("mdi--eye-off");
    const eyeIcon = document.getElementById("mdi--eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIconOff.style.display = "none";
        eyeIcon.style.display = "inline-block";
    } else {
        passwordInput.type = "password";
        eyeIconOff.style.display = "inline-block";
        eyeIcon.style.display = "none";
    }
}

function toggleCheckbox(element) {
    element.classList.toggle('checked');
}