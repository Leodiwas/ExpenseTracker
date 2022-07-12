import "./ExpenseItem.css";

const ExpenseDate = (props) => {
  const date = props.date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const [month, day, year] = date.split(" ");

  return (
    <div className="ExpenseItem__date">
      <span>{month}</span>
      <span>{day.slice(0, -1)}</span>
      <span>{year}</span>
    </div>
  );
};

export default ExpenseDate;
