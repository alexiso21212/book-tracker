import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// GET all books
app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET single book
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

// POST create book
app.post('/books', (req, res) => {
  const { title, author, year, genre } = req.body;
  db.query(
    'INSERT INTO books (title, author, year, genre) VALUES (?, ?, ?, ?)',
    [title, author, year, genre],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: results.insertId });
    }
  );
});

// PUT update book
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const { title, author, year, genre } = req.body;
  db.query(
    'UPDATE books SET title = ?, author = ?, year = ?, genre = ? WHERE id = ?',
    [title, author, year, genre, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.sendStatus(200);
    }
  );
});

// DELETE book
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM books WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.sendStatus(200);
  });
});

// Start server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
