import { useState } from "react";
import "./style.css";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState();

  // creating a new book by calling parent function onCreate
  const handleCreate = (event) => {
    event.preventDefault();
    if (title !== "") {
      onCreate(title);
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
