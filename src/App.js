import React from 'react'
import ExpenseItem from './components/ExpenseItem'
function App() {
  const expenses = [
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

  return (
    <div>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
