let form = document.getElementById("feedback-form");
let formBox = document.getElementById("form-box");

let nameInput = document.getElementById("user-name");
let emailInput = document.getElementById("user-email");
let commentsInput = document.getElementById("user-comments");

let nameTooltip = document.getElementById("name-tooltip");
let emailTooltip = document.getElementById("email-tooltip");
let commentsTooltip = document.getElementById("comments-tooltip");

let nameMessage = document.getElementById("name-message");
let emailMessage = document.getElementById("email-message");
let commentsMessage = document.getElementById("comments-message");

let charCount = document.getElementById("char-count");
let feedbackDisplay = document.getElementById("feedback-display");

formBox.addEventListener("input", function(event) {
    if (event.target.id === "user-comments") {
        charCount.textContent = "Character count: " + commentsInput.value.length;
    }
});

formBox.addEventListener("mouseover", function(event) {
    if (event.target.id === "user-name") {
        nameTooltip.style.display = "block";
    } else if (event.target.id === "user-email") {
        emailTooltip.style.display = "block";
    } else if (event.target.id === "user-comments") {
        commentsTooltip.style.display = "block";
    }
});

formBox.addEventListener("mouseout", function(event) {
    if (event.target.id === "user-name") {
        nameTooltip.style.display = "none";
    } else if (event.target.id === "user-email") {
        emailTooltip.style.display = "none";
    } else if (event.target.id === "user-comments") {
        commentsTooltip.style.display = "none";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nameMessage.textContent = "";
    emailMessage.textContent = "";
    commentsMessage.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameMessage.textContent = "Please enter your name.";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailMessage.textContent = "Please enter your email.";
        isValid = false;
    }

    if (commentsInput.value.trim() === "") {
        commentsMessage.textContent = "Please enter your comments.";
        isValid = false;
    }

    if (isValid === true) {
        let newEntry = document.createElement("div");
        newEntry.classList.add("feedback-entry");

        newEntry.innerHTML =
            "<p><strong>Name:</strong> " + nameInput.value + "</p>" +
            "<p><strong>Email:</strong> " + emailInput.value + "</p>" +
            "<p><strong>Comments:</strong> " + commentsInput.value + "</p>";

        feedbackDisplay.appendChild(newEntry);

        form.reset();
        charCount.textContent = "Character count: 0";
    }
});

form.addEventListener("click", function(event) {
    event.stopPropagation();
});

document.body.addEventListener("click", function() {
    nameTooltip.style.display = "none";
    emailTooltip.style.display = "none";
    commentsTooltip.style.display = "none";
});