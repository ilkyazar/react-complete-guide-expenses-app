import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log('Saved Expense Data: ', expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={handleToggleForm}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleToggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
