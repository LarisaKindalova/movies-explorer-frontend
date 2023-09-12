import React from "react";
import "./SearchForm.css";
import "../FilterCheckbox/FilterCheckbox"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__wrap">
          <input
            type="text"
            className="search__input input"
            id="search__input"
            placeholder="Фильм"
          />
        <button className="submit__button search__button button">Найти</button>
        </div>
      <FilterCheckbox/>
      </form>
    </section>
  );
}
 
export default SearchForm;
