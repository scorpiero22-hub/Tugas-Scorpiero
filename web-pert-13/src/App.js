import React from 'react';
import Catalog from './Catalog';

function App() {
  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>📖 BOOK EDUCATION</h1>
        <p style={{ color: '#777' }}>Our Books Catalog System</p>
        <hr style={{ width: '80%', border: '0.5px solid #eee' }}/>
      </header>
      <main className="container">
        <Catalog />
      </main>
    </div>
  );
}

export default App;