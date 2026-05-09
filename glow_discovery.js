const loginForm = document.getElementById("login");

if (loginForm) {
    const messageEmail = document.getElementById("message-email");
    const messagePassword = document.getElementById("message-password");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // The black border should be removed at first 
    emailInput.parentElement.classList.remove("input-invalid");
    passwordInput.parentElement.classList.remove("input-invalid");
    messageEmail.textContent = "";
    messagePassword.textContent = "";

    // The email should be checked to ensure it includes an @ symbol
    if (!email.includes("@")) {
        emailInput.parentElement.classList.add("input-invalid");
        messageEmail.textContent = "Please enter a valid email address.";
        return;
    }

    // A password is mandatory so empty input should be considered invalid
    if (password === "") {
        passwordInput.parentElement.classList.add("input-invalid");
        messagePassword.textContent = "Please enter your password.";
        return;
    }

    // The password should also be more than 6 characters 
    if (password.length < 6) {
        passwordInput.parentElement.classList.add("input-invalid");
        messagePassword.textContent = "Password must be at least 6 characters.";
        return;
    }

    // If the email and password inputs are valid then the user should be taken to the home screen
    window.location.href = "home.html";

    });
}

const signupForm = document.getElementById("signup");

if (signupForm) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const messageName = document.getElementById("message-name");
    const messageEmail = document.getElementById("message-email");
    const messagePassword = document.getElementById("message-password");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // The black border should be removed at first 
        nameInput.parentElement.classList.remove("input-invalid");
        emailInput.parentElement.classList.remove("input-invalid");
        passwordInput.parentElement.classList.remove("input-invalid");
        messageName.textContent = "";
        messageEmail.textContent = "";
        messagePassword.textContent = "";

        // Name is mandatory so empty input should be considered invalid
        if (name === "") {
            nameInput.parentElement.classList.add("input-invalid");
            messageName.textContent = "Please enter your name.";
            return;
        }

        // The email should be checked to ensure it includes an @ symbol
        if (!email.includes("@")) {
            emailInput.parentElement.classList.add("input-invalid");
            messageEmail.textContent = "Please enter a valid email address.";
            return;
        }

        
        // A password is mandatory so empty input should be considered invalid
        if (password === "") {
            passwordInput.parentElement.classList.add("input-invalid");
            messagePassword.textContent = "Please enter your password.";
            return;
        }

        // The password should also be more than 6 characters 
        if (password.length < 6) {
            passwordInput.parentElement.classList.add("input-invalid");
            messagePassword.textContent = "Password must be at least 6 characters.";
            return;
        }

        // If the name, email, & password inputs are valid then the user should be taken to the home screen
        window.location.href = "home.html";
    });
}
