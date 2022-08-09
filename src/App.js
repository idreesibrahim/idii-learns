import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';

export default function App(){
  
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date('2022, 8, 1')
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 2000000.0,
      date: new Date('2022, 8, 2')
    },
    {
      id: 3,
      title: 'New Desk',
      amount: 10000.0,
      date: new Date('2022, 8, 5')
    }

  ];

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const expenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log("In App.js");
  };
  

  return (
    <div className="container">
      <ExpenseForm onAddExpense = {expenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};