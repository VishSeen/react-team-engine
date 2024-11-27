import { useContext, useState } from "react";
import BooksContext from "../../context/BookContext";

const Book = ({ book }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(book.title);
  const { updateBookById, deleteBook } = useContext(BooksContext);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);

    if (isEditMode && editedTitle) {
      updateBookById(book.id, editedTitle);
    }
  };

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <tr className="book">
      <th>{book.id}</th>
      <td>
        {!isEditMode ? (
          <p>{book.title}</p>
        ) : (
          <p className="control" style={{ width: "100%" }}>
            <input
              style={{ width: "100%" }}
              className="input"
              type="text"
              placeholder={book.title}
              onChange={handleChange}
            />
          </p>
        )}
      </td>

      <td>
        <div className="field has-addons">
          <p className="control">
            <button
              className={`button ${isEditMode ? "is-secondary" : "is-primary"}`}
              onClick={handleEdit}
            >
              {isEditMode ? "Done" : "Edit"}
            </button>
          </p>
          <p className="control">
            <button className="button is-danger" onClick={handleDelete}>
              Delete
            </button>
          </p>
        </div>
      </td>
    </tr>
  );
};

export default Book;
