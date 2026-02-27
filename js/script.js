// ================= WELCOME NAME =================

document.addEventListener("DOMContentLoaded", function () {

    let userName = prompt("Masukkan nama kamu:");

    if (userName !== null && userName.trim() !== "") {
        document.getElementById("welcomeText").textContent = "Hi, " + userName;
    } else {
        document.getElementById("welcomeText").textContent = "Hi, Guest";
    }

});


// ================= FORM VALIDATION =================

const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || birthdate === "" || !gender || message === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    const currentTime = new Date().toString();

    result.style.display = "block";
    result.innerHTML = `
        <p><strong>Current time :</strong> ${currentTime}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Tanggal Lahir :</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender.value}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;

    form.reset();
});