// Hamburger menu toggle functionality

import emailjs from 'emailjs-com';
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');

    // Toggle hamburger and cross icons, and menu visibility
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"; // Show hamburger icon
        crossIcon.style.display = "none"; // Hide cross icon
        menu.style.display = "none"; // Hide menu
    } else {
        hamIcon.style.display = "none"; // Hide hamburger icon
        crossIcon.style.display = "inline-block"; // Show cross icon
        menu.style.display = "block"; // Show menu
    }
});

// Initialize EmailJS
(function () {
    emailjs.init("1wx6blK18yPxyaCBB"); // Replace with your actual EmailJS public key
})();

// Form submission functionality using EmailJS
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Your Phone"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Write your message"]').value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert("Please fill out all required fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_v1ovp8q", "template_n75gp8g", {
      name: name,
      email: email,
      phone: phone,
      message: message
  }).then((response) => {
      console.log("Success:", response);
  }).catch((error) => {
      console.log("Error:", error);
      console.log("Status Code:", error.status);  // Log status code for further investigation
  });
  
    // Clear the form
    document.querySelector(".contact-form").reset();
});
