import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpenses = (props) => {
  const formSubmit = (data) => {
    const newExpenseData = {
      ...data,
      id: (Math.random() * 1000 + 1).toFixed(4).toString(),
    };
    props.onAddNewExpense(newExpenseData);
  };

  return (
    <Card className="new__Expenses">
      <ExpenseForm onFormSubmit={formSubmit} />
    </Card>
  );
};

export default NewExpenses;
