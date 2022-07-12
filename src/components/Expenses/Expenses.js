import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear().toString();

  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="Expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].price}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      */}
    </Card>
  );
};

export default Expenses;
