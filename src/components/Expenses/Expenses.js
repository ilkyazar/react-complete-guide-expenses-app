import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
