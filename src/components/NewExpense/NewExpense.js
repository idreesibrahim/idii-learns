import React from 'react'
import './css/NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    
    console.log("In New Expense");
    console.log(expenseData);
  };


  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}
