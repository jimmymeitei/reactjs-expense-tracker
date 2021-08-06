import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  // Filter Year
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filterYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* {props.items.map((itemList) => ( */}
          {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((itemList) => (
          <ExpenseItem
            key={itemList.id}
            title={itemList.title}
            amount={itemList.amount}
            date={itemList.date}
          />
        ))} */}


        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expense;
