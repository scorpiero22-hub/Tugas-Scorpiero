import React from "react";

class Catalog extends React.Component {
  render() {
    const books = [
      {
        id: 1,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        publisher: "Bentang Pustaka",
        year: 2005,
        image: "buku1.jpg",
      },
      {
        id: 2,
        title: "Bumi",
        author: "Tere Liye",
        publisher: "Gramedia",
        year: 2014,
        image: "buku2.jpg",
      },
      {
        id: 3,
        title: "Negeri 5 Menara",
        author: "Ahmad Fuadi",
        publisher: "Gramedia",
        year: 2009,
        image: "buku3.jpg",
      },
      {
        id: 4,
        title: "Ayat-Ayat Cinta",
        author: "Habiburrahman El Shirazy",
        publisher: "Republika",
        year: 2004,
        image: "buku4.png",
      },
      {
        id: 5,
        title: "Atomic Habits",
        author: "James Clear",
        publisher: "Penguin",
        year: 2018,
        image: "buku5.jpg",
      },
      {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publisher: "Plata Publishing",
        year: 1997,
        image: "buku6.jpeg",
      },
      {
        id: 7,
        title: "Clean Code",
        author: "Robert C. Martin",
        publisher: "Prentice Hall",
        year: 2008,
        image: "buku7.jpg",
      },
      {
        id: 8,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        publisher: "Harriman House",
        year: 2020,
        image: "buku8.jpg",
      },
    ];

    // 3 buku populer
    const popularBooks = [
      books[0],
      books[4],
      books[7],
    ];

    return (
      <>
        {/* Daftar Buku Populer */}
        <h2 className="mb-3">📚 Buku Populer</h2>

        <div className="row mb-5">
          {popularBooks.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card h-100 shadow">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{book.title}</h5>
                  <p><b>Penulis:</b> {book.author}</p>
                  <p><b>Penerbit:</b> {book.publisher}</p>
                  <p><b>Tahun:</b> {book.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Semua Buku */}
        <h2 className="mb-3">📖 Katalog Buku</h2>

        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 mb-4" key={book.id}>
              <div className="card h-100">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{book.title}</h5>
                  <p>{book.author}</p>
                  <p>{book.publisher}</p>
                  <p>{book.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Catalog;