// import React, { useState } from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onFormSubmit(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="ExpenseForm__form" onSubmit={submitHandler}>
      <div className="ExpenseForm__form-controls">
        <div className="ExpenseForm__form-control title">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="ExpenseForm__form-control number">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            placeholder="Enter Amount"
            required
          />
        </div>
        <div className="ExpenseForm__form-control date">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateChangeHandler}
            placeholder="Enter Date"
            required
          />
        </div>
      </div>
      <div className="ExpenseForm__form-btn">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
