function validateForm() {
    var fullName = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var message = document.forms["message-form"]["message"].value;

    if (fullName === "") {
        alert("Nama harus diisi!");
        return false;
    }

        alert("Selamat datang, " + fullName + "!");
    return true;
}

function changeName() {
    var newName = prompt("Masukkan nama baru:");
    if (newName !== null && newName !== "") {
        document.getElementById("name").innerText = newName;
    }
}

document.getElementById("name").addEventListener("click", changeName);