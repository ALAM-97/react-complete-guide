import './ExpenseDate.css';

function ExpenseDate(date) {
  const month = date.date.toLocaleString('it-IT', { month: 'long' });
  const year = date.date.getFullYear();
  const day = date.date.toLocaleString('it-IT', { day: '2-digit'});

  return (
    <div className="expense-date">
        <div className="expense-date__month">{ month }</div>
        <div className="expense-date__year">{ year }</div>
        <div className="expense-date__day">{ day }</div>
    </div>
  )
}

export default ExpenseDate;