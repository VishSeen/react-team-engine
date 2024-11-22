import Book from "../book/index";

const BookList = ({ books, onDelete, onEdit }) => {
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
        {books.map((item, index) => {
          return (
            <Book
              key={index}
              id={item.id}
              title={item.title}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default BookList;
