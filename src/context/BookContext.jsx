import axios from "axios";
import { createContext, useEffect, useState } from "react";
const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const URL = "http://localhost:3001/books";

  // get all books from server and set it to book state
  const fetchBooks = async () => {
    const response = await axios.get(URL);
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // delete current book by ID
  const deleteBook = async (id) => {
    await axios.delete(`${URL}/${id}`);

    const updatedBooks = books.filter((item) => item.id !== id);
    setBooks(updatedBooks);
  };

  // create book
  const createBook = async (title) => {
    const res = await axios.post(URL, {
      title,
    });
    let updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  // updating book by id
  const updateBookById = async (id, newTitle) => {
    const res = await axios.put(`${URL}/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id !== id) {
        return book;
      }
      return { ...books, ...res.data };
    });

    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        deleteBook,
        createBook,
        updateBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };

export default BooksContext;
