// JavaScript code goes here
// Targetting all classes & id from HTML
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    confirmPassword = id("confirmPassword"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Adding the submit event Listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword()) {
        clearFormFields();
        showThankYouMessage();
    }
});

// Validate username
function validateUsername() {
    const usernameValue = username.value.trim();

    if (usernameValue === "") {
        displayError(username, 0, "Username cannot be blank");
        return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 25) {
        displayError(username, 0, "Username must be between 3 and 25 characters");
        return false;
    } else {
        displaySuccess(username, 0);
        return true;
    }
}

// Validate email
function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        displayError(email, 1, "Email cannot be blank");
        return false;
    } else if (!emailRegex.test(emailValue)) {
        displayError(email, 1, "Please enter a valid email address");
        return false;
    } else {
        displaySuccess(email, 1);
        return true;
    }
}

// Validate password
function validatePassword() {
    const passwordValue = password.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (passwordValue === "") {
        displayError(password, 2, "Password cannot be blank");
        return false;
    } else if (!passwordRegex.test(passwordValue)) {
        displayError(password, 2, "Password must be at least 8 characters long and contain at least one lowercase character, one uppercase character, one number, and one special character (!@#$%^&*)");
        return false;
    } else {
        displaySuccess(password, 2);
        return true;
    }
}

// Validate confirm password
function validateConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();

    if (confirmPasswordValue === "") {
        displayError(confirmPassword, 3, "Confirm Password cannot be blank");
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        displayError(confirmPassword, 3, "Passwords do not match");
        return false;
    } else {
        displaySuccess(confirmPassword, 3);
        return true;
    }
}

// Display error message
function displayError(input, serial, message) {
    errorMsg[serial].innerHTML = message;
    input.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
}

// Display success message
function displaySuccess(input, serial) {
    errorMsg[serial].innerHTML = "";
    input.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
}

// Clear form fields
function clearFormFields() {
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
}

// Show thank you message
function showThankYouMessage() {
    document.getElementById("thank-you").innerText = "Thank you!";
}
