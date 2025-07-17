// script.js

// Toggle additional info in the About section
function showMoreInfo() {
    const info = document.getElementById("more-info");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Handle form submission status (simulated for client-side only)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent real form submission
        status.textContent = "Thank you! Your message has been sent successfully.";
        form.reset();
    });
});