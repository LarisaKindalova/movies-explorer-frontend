import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({onCheckboxChange, isChecked, setChecked}) {

  const handleChangeCheckbox = () => {
    const newCheck = !isChecked;
    setChecked(newCheck);
    onCheckboxChange(newCheck);
  };

  return (
    <div className="checkbox">
      <input 
      className="checkbox__input" 
      type="checkbox" 
      id="checkbox"
      onChange={handleChangeCheckbox}
      checked={isChecked}
      />
      <label htmlFor="checkbox" className="checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
