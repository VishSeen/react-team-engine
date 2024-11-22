import { useState } from "react";

const Book = ({ id, title, onDelete, onEdit }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleDelete = () => {
    onDelete(id);
    console.log("Deleting: ", id);
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);

    if (isEditMode && editedTitle) {
      onEdit(id, editedTitle);
      console.log("Edited: ", editedTitle);
    }
  };

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <tr className="book">
      <th>{id}</th>
      <td>
        {!isEditMode ? (
          <p>{title}</p>
        ) : (
          <p className="control" style={{ width: "100%" }}>
            <input
              style={{ width: "100%" }}
              className="input"
              type="text"
              placeholder={title}
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
