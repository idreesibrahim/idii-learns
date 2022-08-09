import React from 'react'
import './css/ExpenseItem.css'

export default function ExpenseData(props) {
  const month = props.data.toLocaleString('en-Us', { month: 'long' });
  const day = props.data.toLocaleString('en-Us', { day: '2-digit' });
  const year = props.data.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-data__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}
