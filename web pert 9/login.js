function cekLogin() {
    // Membaca isi nilai dari kolom Username dan Password di HTML
    let usernameInput = document.getElementById("usr").value.trim();
    let passwordInput = document.getElementById("pass").value;
    
    // Elemen judul tempat menampilkan pesan sukses/gagal
    let keteranganElemen = document.getElementById("keterangan");

    // Aturan validasi akun sesuai standar modul praktikum
    if (usernameInput === "andre" && passwordInput === "web") {
        
        // Mengubah judul menjadi "Login Sukses"
        keteranganElemen.innerHTML = "Login Sukses";
        keteranganElemen.style.color = "white"; // Tetap putih normal

    } else {
        
        // Mengubah judul menjadi "Username atau Password Salah" jika tidak cocok
        keteranganElemen.innerHTML = "Username atau Password<br>Salah";
        keteranganElemen.style.color = "white"; // Sesuai gambar, teks peringatan tetap putih

    }
}