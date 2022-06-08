import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

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
      <Card>
        <ExpensesFilter
          selectedYear={year}
          onChangeYear={handleYearChanged}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList className="expenses" items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
