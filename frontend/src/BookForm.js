import React, { useEffect, useState } from 'react';

function BookForm({ book, onSave }) {
  const [form, setForm] = useState({ title: '', author: '', year: '', genre: '' });

  useEffect(() => {
    if (book) {
      setForm(book);
    } else {
      setForm({ title: '', author: '', year: '', genre: '' });
    }
  }, [book]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col">
          <input name="title" className="form-control" placeholder="Title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="col">
          <input name="author" className="form-control" placeholder="Author" value={form.author} onChange={handleChange} required />
        </div>
        <div className="col">
          <input name="year" type="number" className="form-control" placeholder="Year" value={form.year} onChange={handleChange} required />
        </div>
        <div className="col">
          <input name="genre" className="form-control" placeholder="Genre" value={form.genre} onChange={handleChange} required />
        </div>
        <div className="col">
        <button className="btn btn-success w-100" type="submit">
        {book ? 'Update' : 'Add'}
        </button>

        </div>
      </div>
    </form>
  );
}

export default BookForm;
