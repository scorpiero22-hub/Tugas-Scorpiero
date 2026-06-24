/**
 * Penerapan prinsip Pure Function (Functional Programming) sesuai Unit 7 Modul
 * Mengubah basis angka menjadi string biner, oktal, atau heksadesimal
 */
const hitungKonversiBasis = (angka, basis) => angka.toString(basis);

function prosesKonversi() {
    // Mengambil teks dari input HTML dan menghilangkan spasi kosong di awal/akhir
    let inputMentah = document.getElementById("desimalInput").value.trim();
    
    // Mengonversi string input menjadi angka bulat desimal
    let angkaDesimal = parseInt(inputMentah, 10);

    // Validasi input: jika kosong, bukan angka (NaN), atau angka negatif
    if (isNaN(angkaDesimal) || inputMentah === "" || angkaDesimal < 0) {
        // Pop-up jika input tidak valid (Sesuai Halaman 8 Modul)
        alert("Masukkan Angka yang benar!");
        return;
    }

    // Melakukan transformasi data menggunakan pure function
    let biner = hitungKonversiBasis(angkaDesimal, 2);
    let oktal = hitungKonversiBasis(angkaDesimal, 8);
    let heksadesimal = hitungKonversiBasis(angkaDesimal, 16).toUpperCase();

    // Menampilkan hasil lewat pop-up alert (Sesuai contoh angka 308 di Halaman 8 Modul)
    alert(
        "Biner : " + biner + "\n" +
        "Oktal : " + oktal + "\n" +
        "Heksadesimal: " + heksadesimal
    );
}