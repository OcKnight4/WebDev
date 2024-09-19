document.addEventListener("DOMContentLoaded", function() {
    // Sign Up Form Validation
    const signupForm = document.getElementById('sign-up-form');
    const signupPassword = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordMatchMessage = document.getElementById('password-match');

    confirmPassword.addEventListener('input', function() {
        if (signupPassword.value !== confirmPassword.value) {
            passwordMatchMessage.textContent = "Passwords do not match!";
        } else {
            passwordMatchMessage.textContent = "";
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email.");
            return;
        }
        // Perform sign-up logic here (e.g., save to local storage)
        alert("User signed up successfully!");
    });

    // Login Form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Perform login logic here
        window.location.href = 'main.html';
    });

    // Main Page Logic
    const usernameSpan = document.getElementById('username');
    const surveyList = document.getElementById('survey-list');
    const adminSection = document.getElementById('admin-section');

    // Simulate logged-in user and surveys
    const user = { username: "admin", role: "admin" };
    const surveys = [
        { title: "Survey 1", description: "This is survey 1", date: "2023-01-01", createdBy: "admin" },
        { title: "Survey 2", description: "This is survey 2", date: "2023-01-02", createdBy: "user1" },
    ];

    usernameSpan.textContent = user.username;
    surveys.forEach(survey => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${survey.title}</strong><br>${survey.description}<br>${survey.date}<br>Created by: ${survey.createdBy}`;
        surveyList.appendChild(li);
    });

    // If user is admin, show survey creation form
    if (user.role === "admin") {
        adminSection.style.display = 'block';
    }

    const createSurveyForm = document.getElementById('create-survey-form');
    createSurveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        // Create new survey logic here (e.g., add to surveys list)
        alert("Survey created successfully!");
    });

    // Log out
    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
