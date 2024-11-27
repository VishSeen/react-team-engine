import { useContext } from "react";
import Book from "../book/index";
import BooksContext from "../../context/BookContext";

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <table className="book-list table">
      <thead>
        <tr>
          <th>ID</th>
          <th style={{ width: "100%" }}>Title</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books !== null &&
          books.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
      </tbody>
    </table>
  );
};

export default BookList;
