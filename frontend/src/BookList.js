import React from 'react';

function BookList({ books, onDelete, onEdit }) {
  return (
    <table className="table table-hover table-bordered shadow-sm">

      <thead>
        <tr>
          <th>📖 Title</th>
          <th>✍️ Author</th>
          <th>📅 Year</th>
          <th>🏷 Genre</th>
          <th>⚙️ Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="align-middle">

            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.genre}</td>
            <td>
            <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(book)}>
            ✏️ Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(book.id)}>
            🗑️ Delete
            </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
