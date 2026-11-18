/* Add your JavaScript to this file */

// scripts.js is loaded in the <head>, so wait for the DOM before touching it.
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".newsletter .message");

    // Let our own message show instead of the browser's validation bubble.
    form.setAttribute("novalidate", "");

    form.addEventListener("submit", (event) => {
        // Stop the page from reloading; we're only simulating a submission.
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "" || !emailInput.checkValidity()) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        // textContent (not innerHTML) so user input is never treated as HTML.
        message.textContent =
            `Thank you! Your email address ${email} has been added to our mailing list!`;
        form.reset();
    });
});