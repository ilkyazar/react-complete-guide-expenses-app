import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [year, setYear] = useState('2020');
  const handleYearChanged = (newYear) => {
    console.log('Selected Year: ', newYear);
    setYear(newYear);
  };

  const filteredExpenses = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <ExpensesFilter
        selectedYear={year}
        onChangeYear={handleYearChanged}
      />
      <ExpensesList className="expenses" items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
