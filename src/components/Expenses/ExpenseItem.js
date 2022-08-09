import React, {useState} from 'react';
import ExpenseData from './ExpenseData';
import Card from '../UI/Card'
import './css/ExpenseItem.css'

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log("hello");
  };
  return (
    <Card className="expense-item">
      <ExpenseData data={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  )
}
