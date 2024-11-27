import { useContext, useEffect, useState } from "react";
import BookCreate from "../../components/book-create";
import BookList from "../../components/book-list";
import axios from "axios";

import "./style.css";
import BooksContext from "../../context/BookContext";

const FormPage = () => {
  const { books } = useContext(BooksContext);

  return (
    <main className="form-page">
      <section className="hero is-primary p-5">
        <div className="hero-body">
          <h1 className="title">Working with Forms</h1>
          <p className="paragraph">
            Creating a book inventory where you can add books, delete and Update
            existing titles. Focusing mainly on form elements.
          </p>
          <br />
          <div>
            <p>
              <em>How to handle forms:</em>
            </p>
            <ul style={{ marginLeft: "10px" }}>
              <ol>- Adding Books</ol>
              <ol>- Deleting existing books</ol>
              <ol>- Editing book titles</ol>
              <ol>- Generating IDs</ol>
              <ol>- Submitting form through enter key</ol>
            </ul>
          </div>
          <br />
          <div>
            <p>
              <em>Data persistance with API Requests:</em>
            </p>
            <ul>
              <ol>- Making use of UseEffect Hooks</ol>
              <ol>- Creating a dummy api server with rest client</ol>
              <ol>
                - get/post/delete/put methods created for CRUD through fake
                server
              </ol>
            </ul>
          </div>

          <div>
            <p>
              <em>Communicating using Context System:</em>
            </p>
            <ul>
              <ol>- creating an external context</ol>
              <ol>- logics for the books context</ol>
              <ol>
                - refactor current code to remove passing function as props
                (prop drilling)
              </ol>
              <ol>- application state vs component state in react</ol>
              <ol>- using props and context together</ol>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", height: "600px" }}>
        <div className="actions px-5 pt-5">
          <BookCreate />
        </div>

        <div className="content px-5 pt-5">
          {books.length !== 0 ? (
            <BookList books={books} />
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
