import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="panel-block" style={{ padding: "0.75em 0" }}>
      <form onSubmit={handleSubmit}>
        <p className="control has-icons-left">
          <input
            onChange={handleChange}
            className="input is-primary"
            type="text"
            placeholder="Search"
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
