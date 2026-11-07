
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let selectedEvent = document.getElementById("event").value;

    if (!name || !email || !phone || !selectedEvent) {
        alert("Please fill all fields!");
        return;
    }

    let message = document.getElementById("message");

    message.innerHTML =
        "Registration Successful!<br>" +
        "Welcome, " + name + "!<br>" +
        "Event: " + selectedEvent + "<br>" +
        "Email: " + email;

    document.getElementById("registrationForm").reset();

});
