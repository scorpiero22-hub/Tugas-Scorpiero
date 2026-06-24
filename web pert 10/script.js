// Mengambil elemen tombol
const registerBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

// Event ketika tombol register diklik
registerBtn.addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
});

// Event ketika tombol login diklik
loginBtn.addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
});

// Mengambil elemen teks tagline
const secondText = document.querySelector(".kedua-text");

// Array genre film
const movieGenres = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];

// Index awal
let index = 0;

// Mengubah tulisan setiap 4 detik
setInterval(function () {

    index++;

    // Jika index melebihi panjang array
    if (index >= movieGenres.length) {
        index = 0;
    }

    // Mengganti isi text
    secondText.textContent = movieGenres[index];

}, 4000);