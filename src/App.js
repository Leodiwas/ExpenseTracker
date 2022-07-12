import React, { useState } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const DEFAULT__EXPENSES = [
  {
    id: "exp1",
    title: "Bike Salary",
    amount: 1200,
    date: new Date(2022, 7, 12),
  },
  {
    id: "exp2",
    title: "Car Insurance",
    amount: 1000,
    date: new Date(2020, 1, 10),
  },
  {
    id: "exp3",
    title: "Bank Loan",
    amount: 1500,
    date: new Date(2019, 11, 6),
  },
  {
    id: "exp4",
    title: "Government Tax",
    amount: 2000,
    date: new Date(2022, 5, 20),
  },
];

const App = () => {
  // Old way using React Object
  // return React.createElement(
  //   "section",
  //   {},
  //   React.createElement(Expenses, { items: expenses })
  // );

  const [expenses, setExpenses] = useState(DEFAULT__EXPENSES);

  const addNewExpense = (newExpenses) => {
    setExpenses((prevExpense) => [newExpenses, ...prevExpense]);
  };

  // New way using JSX
  return (
    <section className="expenses__container">
      <NewExpenses onAddNewExpense={addNewExpense} />
      <Expenses items={expenses} />
    </section>
  );
};

export default App;
