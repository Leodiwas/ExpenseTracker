import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  console.log(props);

  if (props.items.length === 0)
    return <h2 className="ExpensesList__falldown">No Items found 🛒 !!!</h2>;

  return (
    <li className="expensesList">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={Number(expense.amount)}
          date={expense.date}
        />
      ))}
    </li>
  );
};

export default ExpensesList;
