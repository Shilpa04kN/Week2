let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)
// index.js

const passwordInput = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Check the strength of the password
    let strength = "Weak";
    if (password.length >= 8) {
        strength = "Strong";
    } else if (password.length >= 4) {
        strength = "Medium";
    }

    // Update the strength text and styling
    strengthText.textContent = strength;
    passwordStrength.className = "password-strength " + strength.toLowerCase();
});
// Add this code to your JavaScript

// Function to handle the sign-up process and redirect to the thank you page
function signUp() {
    // You can include your registration logic here
    // For this example, we'll assume successful registration
    // If registration is successful, redirect to the thank you page
    const isRegistrationSuccessful = true; // You should set this based on your logic

    if (isRegistrationSuccessful) {
        // Redirect to the thank you page
        window.location.href = "result.html";
    }
}

// Update the "Sign Up" button click event
const signUpButton = document.getElementById("signupButton");
signUpButton.addEventListener("click", () => {
    signUp(); // Call the signUp function when the button is clicked
});


