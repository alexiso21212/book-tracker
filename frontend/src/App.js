import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList';
import BookForm from './BookForm';
import './App.css';


function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:3001/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    fetchBooks();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleSave = async (book) => {
    if (book.id) {
      await axios.put(`http://localhost:3001/books/${book.id}`, book);
    } else {
      await axios.post('http://localhost:3001/books', book);
    }
    setEditingBook(null);
    fetchBooks();
  };

  return (
    <div className="container mt-5">
  <h1 className="text-center mb-4 display-4 text-primary animate__animated animate__fadeInDown">📚 Book Tracker</h1>


  <div className="card mb-4">
  <div className="card-header bg-primary text-white fw-bold">
  Add / Edit Book</div>
    <div className="card-body">
      <BookForm book={editingBook} onSave={handleSave} />
    </div>
  </div>

  <div className="card">
  <div className="card-header bg-primary text-white fw-bold">
  Books List</div>
    <div className="card-body">
      <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
    <footer className="text-center mt-5 text-muted">
  <hr />
  <p>Projekt stworzony przez Alexa Wróbla – 2025</p>
</footer>

  </div>
</div>

  );
}

export default App;
