import React from "react";
import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    
    // Angka acak 0-10 untuk nilai awal likes
    const randomLikes = Math.floor(Math.random() * 11);

    this.state = {
      image: this.props.book[0],
      title: this.props.book[1],
      author: this.props.book[2],
      publisher: this.props.book[3],
      year: this.props.book[4],
      bookmark: false,
      likes: randomLikes,
      liked: false
    };

    // Binding fungsi agar state aman saat diklik
    this.check_bookmark = this.check_bookmark.bind(this);
    this.toggle_like = this.toggle_like.bind(this);
  }

  check_bookmark() {
    this.setState({ bookmark: !this.state.bookmark });
  }

  toggle_like() {
    if (this.state.liked) {
      this.setState({
        liked: false,
        likes: this.state.likes - 1
      });
    } else {
      this.setState({
        liked: true,
        likes: this.state.likes + 1
      });
    }
  }

  render() {
    return (
      <div className="card text-center" style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "10px", padding: "15px", background: "#fff" }}>
        <div className="card-body">
          {/* Menggunakan placeholder gambar agar tidak error jika file lokal tidak ada */}
          <img
          src={this.state.image} 
          alt={this.state.title}
          width="150px"
          height="200px"
          style={{ marginBottom: "10px", objectFit: "contain", background: "#f3f3f3", borderRadius: "4px" }}
          />
          <h5 className="card-title" style={{ fontSize: "16px", fontWeight: "bold" }}>{this.state.title}</h5>
          <p className="card-text" style={{ margin: "5px 0", color: "#555" }}>{this.state.author}</p>
          <p className="card-text text-muted" style={{ fontSize: "14px" }}>
            {this.state.publisher} <span>({this.state.year})</span>
          </p>
        </div>
        <div className="card-footer" style={{ display: "flex", justifyContent: "space-between", marginTop: "15px", paddingTop: "10px", borderTop: "1px solid #eee" }}>
          
          {/* Fitur Like */}
          <div onClick={this.toggle_like} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
            {this.state.liked ? <FaThumbsUp color="#007bff" /> : <FaRegThumbsUp />}
            <span>{this.state.likes} like(s)</span>
          </div>

          {/* Fitur Bookmark */}
          <div onClick={this.check_bookmark} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ fontSize: "12px", color: "green" }}>{this.state.bookmark ? "Saved " : ""}</span>
            {this.state.bookmark ? <FaBookmark color="#ffc107" /> : <FaRegBookmark />}
          </div>

        </div>
      </div>
    );
  }
}

export default CatalogItem;