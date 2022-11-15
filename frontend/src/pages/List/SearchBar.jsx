import { useState, useEffect } from "react";
import fetchSearchApi from "../../utils/fetchSearchApi";
import fetchResetApi from "../../utils/fetchResetApi";

function SearchBar({ renderApi }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    fetchSearchApi(searchTerm).then((resPost) => renderApi(resPost));
  };

  useEffect(() => {
    if (searchTerm.length === 0)
      fetchResetApi().then((resPost) => renderApi(resPost));
  }, [searchTerm]); // Reset list if the search bar is empty

  return (
    <form className="search-box" role="search">
      <label htmlFor="search" className="srOnly">
        Search Cocktails
      </label>
      <input
        className="search-input"
        type="search"
        placeholder="Search Cocktails"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="search-button"
        type="submit"
        onClick={handleSubmitClick}
      >
        <img src="/public/icones/searchColorLeather.svg" alt="searchIcon" />
      </button>
    </form>
  );
}
export default SearchBar;
