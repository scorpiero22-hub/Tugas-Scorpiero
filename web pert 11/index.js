/**
 * Implementasi OOP - Class & Object untuk fitur filter pencarian multi-kategori
 */
class Search {
    constructor(data) {
        this.data = data; // Menyimpan nodelist dari elemen kartu .book
    }

    // Menguji kesamaan kata kunci (case-insensitive)
    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) === -1;
    }

    // 1. Filter Berdasarkan Judul Buku (Title)
    byTitle(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let title = book.querySelector(".title").innerText;

            if (this.equal(title, keyword)) {
                book.style.display = "none";
            } else {
                book.style.display = "";
            }
        }
    }

    // 2. Filter Berdasarkan Penulis (Author)
    byAuthor(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let author = book.querySelector(".author").innerText;

            if (this.equal(author, keyword)) {
                book.style.display = "none";
            } else {
                book.style.display = "";
            }
        }
    }

    // 3. Filter Berdasarkan Penerbit (Publisher)
    byPublisher(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let publisher = book.querySelector(".publisher").innerText;

            if (this.equal(publisher, keyword)) {
                book.style.display = "none";
            } else {
                book.style.display = "";
            }
        }
    }

    // 4. Filter Berdasarkan Kombinasi Judul & Tahun (Title and Year)
    byTitleAndYear(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let title = book.querySelector(".title").innerText;
            let year = book.querySelector(".year").innerText;

            // Buku akan tetap tampil jika kata kunci cocok dengan judul ATAU cocok dengan tahun terbitnya
            if (this.equal(title, keyword) && this.equal(year, keyword)) {
                book.style.display = "none";
            } else {
                book.style.display = "";
            }
        }
    }
}

// Menangkap elemen Input Pencarian dan Radio Button Filter dari DOM HTML
let keywordInput = document.getElementById("keyword");
let filterRadios = document.getElementsByName("filter");

// Fungsi utama pengendali penyaringan data katalog
function searching() {
    let books = document.querySelectorAll(".book");
    let searchObj = new Search(books); // Membuat Object baru dari Class Search
    let keywordValue = keywordInput.value;

    // Mendeteksi jenis filter radio button mana yang sedang aktif (checked)
    let selectedFilter = "title";
    for (let radio of filterRadios) {
        if (radio.checked) {
            selectedFilter = radio.value;
            break;
        }
    }

    // Memilih method eksekusi berdasarkan opsi radio button yang dicentang
    if (selectedFilter === "title") {
        searchObj.byTitle(keywordValue);
    } else if (selectedFilter === "author") {
        searchObj.byAuthor(keywordValue);
    } else if (selectedFilter === "publisher") {
        searchObj.byPublisher(keywordValue);
    } else if (selectedFilter === "title_year") {
        searchObj.byTitleAndYear(keywordValue);
    }
}

// Trigger pencarian otomatis secara real-time saat pengguna mengetik (keyup)
keywordInput.addEventListener("keyup", searching);

// Trigger pencarian otomatis ketika pengguna mengubah pilihan kategori filter (change)
for (let radio of filterRadios) {
    radio.addEventListener("change", searching);
}