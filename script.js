document.addEventListener("DOMContentLoaded", function () {
    let reportBug = document.getElementById("reportBug");

    if (reportBug) {
        reportBug.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let username = document.getElementById("username").value.trim();
            let email = document.getElementById("email").value.trim();
            let server = document.getElementById("server").value;
            let description = document.getElementById("description").value.trim();
            let consent = document.getElementById("consent").checked;

            if (username === "") {
                alert("Username cannot be empty!");
                return;
            }

            if (email === "" || !email.includes("@")) {
                alert("Please enter a valid email address!");
                return;
            }

            if (server === "") {
                alert("Please select a server!");
                return;
            }

            if (description.length < 20) {
                alert("Bug description must be at least 20 characters long!");
                return;
            }

            if (!consent) {
                alert("You must agree to be contacted before submitting the report!");
                return;
            }

            alert("Bug report submitted successfully. Thank you for helping improve Palorant!");

            reportBug.reset();
        });
    } else {
        console.error("Form element with ID 'reportBug' not found!");
    }
});

