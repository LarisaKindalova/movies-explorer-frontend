import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkbox__wrap">
      <input type="checkbox" id="checkbox" className="checkbox" />
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;