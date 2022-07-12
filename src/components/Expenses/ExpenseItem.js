import React from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="ExpenseItem__description">
        <h2 className="ExpenseItem__title">{props.title}</h2>
        <span className="ExpenseItem__price">${props.amount}</span>
      </div>
    </Card>
  );
};

export default ExpenseItem;
