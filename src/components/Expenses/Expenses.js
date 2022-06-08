import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [year, setYear] = useState('2020');
  const handleYearChanged = (newYear) => {
    console.log('Selected Year: ', newYear);
    setYear(newYear);
  };

  return (
    <div>
      <ExpensesFilter
        selectedYear={year}
        onChangeYear={handleYearChanged}
      />
      <Card className="expenses">
        {props.expenses
          .filter((e) => e.date.getFullYear().toString() === year)
          .map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
