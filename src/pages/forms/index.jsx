import { useEffect, useState } from "react";
import BookCreate from "../../components/book-create";
import BookList from "../../components/book-list";
import axios from "axios";

import "./style.css";

const FormPage = () => {
  const [books, setBooks] = useState([]);
  const URL = "http://localhost:3001/books";

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(URL);
      setBooks(response.data);
    };
    getBooks();
  }, []);

  // creates a new book with the title mentionned
  const createBook = async (title) => {
    const response = await axios.post(URL, {
      title,
    });
    let updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  // updating the book title
  const editBook = async (id, newTitle) => {
    if (id !== undefined) {
      const response = await axios.put(`${URL}/${id}`, {
        title: newTitle,
      });

      const updatedBooks = books.map((book) => {
        if (book.id === id) {
          return { ...books, ...response.data };
        }
        return book;
      });

      setBooks(updatedBooks);
    }
  };

  // delete current book by ID
  const deleteBook = async (id) => {
    await axios.delete(`${URL}/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
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
            <ol>- Editing book titles</ol>
            <ol>- Generating IDs</ol>
            <ol>- Submitting form through enter key</ol>
            <ol>- Making use of UseEffect Hooks</ol>
            <ol>- Creating a dummy api server with rest client</ol>
            <ol>
              - get/post/delete/put methods created for CRUD through fake server
            </ol>
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
