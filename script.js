// Login Form Submission Handling
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check for empty fields
    if (!username || !email || !password) {
        alert("All fields are required. Please fill in all the fields.");
        return;
    }

    if (password.length < 8) {
        document.getElementById('errorMessage').innerText = "Password must be at least 8 characters long.";
    } else {
        // Simulated login logic
        console.log("Logged in:", { username, email, password });
        document.getElementById('errorMessage').innerText = "";
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }
};

// Signup Form Submission Handling with Password Validation
document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Check for empty fields
    if (!username || !email || !password) {
        alert("All fields are required. Please fill in all the fields.");
        return;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('signupErrorMessage').innerText = "Password must be at least 8 characters, include a number and a special character.";
    } else {
        // Simulated signup logic
        console.log("Signed up:", { username, email, password });
        document.getElementById('signupErrorMessage').innerText = "";
        alert("Signup Successful!");
        window.location.href = "index.html";  // Redirect to login page after successful signup
    }
};

// Blog Form Submission Handling
document.getElementById('blogForm').onsubmit = function(event) {
    event.preventDefault();

    const blogTitle = document.getElementById('blogTitle').value.trim();
    const blogDescription = document.getElementById('blogDescription').value.trim();
    const blogImage = document.getElementById('blogImage').files[0];
    const blogLink = document.getElementById('blogLink').value.trim();

    // Check for empty fields
    if (!blogTitle || !blogDescription) {
        alert("Blog title and description are required. Please fill them out.");
        return;
    }

    // Simulated blog submission logic
    console.log('Blog Submitted:', {
        title: blogTitle,
        description: blogDescription,
        image: blogImage ? blogImage.name : "No image uploaded",
        link: blogLink ? blogLink : "No link provided"
    });

    alert("Your blog has been submitted!");
    // Clear form fields after submission
    document.getElementById('blogForm').reset();
};
