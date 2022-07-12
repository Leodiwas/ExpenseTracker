import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (e) => props.onChangeFilter(e.target.value);

  return (
    <div className="expense__filter">
      <div className="expense__filter-controls">
        <label>Filter By Year</label>
        <select
          className="expense__filter-select"
          onChange={dropDownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
