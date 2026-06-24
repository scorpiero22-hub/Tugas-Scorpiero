import React, { Fragment } from "react";
import CatalogItem from "./CatalogItem";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    // PASTIKAN data ini ada di dalam constructor
    this.books = [
      ["buku1.jpg", "Menguasai Pemrograman Berorientasi Objek", "Ade Rahmat Iskandar", "Informatika", 2020],
      ["buku2.jpg", "Dasar-Dasar Pemrograman dengan .NET", "Ade Rahmat Iskandar", "Informatika", 2019],
      ["buku3.jpg", "Metodologi Pengembangan Sistem Informasi", "Samiaji Sarosa", "Indeks", 2017],
      ["buku4.png", "Struktur Data", "Rosa A.S", "Modula", 2018],
      ["buku5.jpg", "Dasar Pemrograman Python 3", "Abdul Kadir", "Andi Publisher", 2018],
      ["buku6.jpeg", "Sistem Basis Data Dan Sql", "Didik Setiyadi", "Mitra Wacana Media", 2020],
      ["buku7.jpg", "Perancangan Basis Data Teori", "Suhartini", "Deepublish", 2020],
      ["buku8.jpg", "Teori Dan Praktek Sistem Operasi", "Zaid Romegar Mair", "Deepublish", 2018]
    ];
  }

  render() {
    let bookList = [];
    // Sekarang ini tidak akan error karena this.books sudah terdefinisi di constructor
    for (let i = 0; i < this.books.length; i++) {
      bookList.push(
        <div key={i} className="col-sm-6 col-lg-4 mb-4 book" style={{ padding: "15px", display: "inline-block", width: "30%" }}>
          <CatalogItem book={this.books[i]} />
        </div>
      );
    }
    return (
      <Fragment>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {bookList}
        </div>
      </Fragment>
    );
  }
}

export default Catalog;