import { useContext, useState } from "react";
import "./style.css";
import BooksContext from "../../context/BookContext";

const BookCreate = () => {
  const [title, setTitle] = useState();
  const { createBook } = useContext(BooksContext);

  // creating a new book by calling parent function onCreate
  const handleCreate = (event) => {
    event.preventDefault();
    if (title !== "") {
      createBook(title);
      setTitle("");
    }
  };

  // handling locally the input change
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="book-create mb-3" onSubmit={handleCreate}>
      <div className="field has-addons">
        <p className="control" style={{ width: "100%" }}>
          <input
            style={{ width: "100%" }}
            className="input"
            type="text"
            placeholder="Create a new book"
            value={title}
            onChange={handleChange}
          />
        </p>
        <p className="control">
          <button className="button is-primary">Add</button>
        </p>
      </div>
    </form>
  );
};

export default BookCreate;
