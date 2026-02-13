let userName = prompt("Enter your name:");
if (userName != null && userName != "") {
    document.getElementById("welcome").innerText =
        "Welcome, " + userName;
}

function validateForm() {
    let name = document.forms["messageForm"]["name"].value;
    let email = document.forms["messageForm"]["email"].value;
    let phone = document.forms["messageForm"]["phone"].value;
    let message = document.forms["messageForm"]["message"].value;

    if (name == "" || email == "" || phone == "" || message == "") {
        alert("All fields must be filled!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format!");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone must be numeric!");
        return false;
    }

    document.getElementById("resultName").innerText = "Name: " + name;
    document.getElementById("resultEmail").innerText = "Email: " + email;
    document.getElementById("resultPhone").innerText = "Phone: " + phone;
    document.getElementById("resultMessage").innerText = "Message: " + message;

    return false;
}
