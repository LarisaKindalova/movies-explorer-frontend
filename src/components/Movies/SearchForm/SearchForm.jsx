import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <lable className="search__lable" htmlFor="serch__input">
          <input
            type="text"
            className="search__input input"
            id="search__input"
            placeholder="Фильм"
          />
        </lable>
        <button className="submit__button search__button button">Найти</button>
        <div className="checkbox__wrap">
          <input type="checkbox" id="checkbox" className="checkbox" />
          <label htmlFor="checkbox" className="checkbox__label">
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
