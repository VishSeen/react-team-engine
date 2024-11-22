import { useState } from "react";
import BookCreate from "../../components/book-create";
import BookList from "../../components/book-list";

import "./style.css";

const FormPage = () => {
  const [books, setBooks] = useState([]);

  // creates a new book with the title mentionned
  const createBook = (title) => {
    let updatedBooks = [...books, { id: Math.random(), title: title }];

    setBooks(updatedBooks);
  };

  // updating the book title
  const editBook = (id, newTitle) => {
    console.log(books);

    let updatedBooks = books.filter((item) => item.id !== id);
    let edited = [...updatedBooks, { id: id, title: newTitle }];

    setBooks(edited);
  };

  // delete current book by ID
  const deleteBook = (id) => {
    let newBooks = books.filter((item) => item.id !== id);

    setBooks(newBooks);
  };

  return (
    <main className="form-page">
      <section className="hero is-primary p-5">
        <div className="hero-body">
          <h1 className="title">Working with Forms</h1>
          <p className="paragraph">
            Creating a book inventory where you can add books, delete and Update
            existing titles. Focusing mainly on form elements.
          </p>

          <ul style={{ marginLeft: "10px", marginTop: "10px" }}>
            <ol>- Adding Books</ol>
            <ol>- Deleting existing books</ol>
            <ol>- Editing book titles.</ol>
            <ol>- Generating IDs</ol>
            <ol>- Submitting form through enter key.</ol>
          </ul>
        </div>
      </section>

      <section style={{ display: "flex", height: "600px" }}>
        <div className="actions px-5 pt-5">
          <BookCreate onCreate={createBook} />
        </div>

        <div className="content px-5 pt-5">
          {books.length !== 0 ? (
            <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
          ) : (
            <div>
              <h1>Empty shelf</h1>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default FormPage;
