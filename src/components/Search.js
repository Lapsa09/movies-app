import React from "react";
import "./Search.css";

function Search({ handleOnChange, handleOnSubmit, searchTerm }) {
  return (
    <div className="search">
      <form onSubmit={handleOnSubmit}>
        <input
          className="search-bar"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Search;
