import React from "react";
import "./SearchForm.css";
import "../FilterCheckbox/FilterCheckbox";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { MESSAGE_INPUT_WORD } from "../../utils/constants";

function SearchForm({ searchQuery, setSearchQuery, onSearch, onCheckboxChange, isChecked, setChecked, isLoading }) {
  const [error, setError] = React.useState("");

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchQuery.trim() === "") {
      setError(MESSAGE_INPUT_WORD);
      }else{
      onSearch(searchQuery);
      setError("");
    }
  
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__wrap">
          <input
            type="text"
            className="search__input input"
            id="search__input"
            placeholder="Фильм"
            minLength={1}
            name="search"
            value={searchQuery}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <button 
          className="search__button button" 
          type="submit"
          disabled={isLoading}
          >
            {isLoading ? "..." : "Найти"}
          </button>
        </div>
        <FilterCheckbox
        onCheckboxChange={onCheckboxChange}
        isChecked={isChecked}
        setChecked={setChecked}
         />
      </form>
      <span className="search__error">{error || ""}</span>
    </section>
  );
}

export default SearchForm;