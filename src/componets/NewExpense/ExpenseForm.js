import react, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // state for title, amount and date
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // functions for setting title, amount and date
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // function for submitting the form
    const submitHandler = (event) => {
        event.preventDefault();

        // state for the new expense data
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            data: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return ( 
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={ enteredTitle } onChange={ titleChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={ enteredAmount } min="0.01" step="0.01" onChange={ amountChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={ enteredDate } min="2019-01-01" onChange={ dateChangeHandler } />
                </div>
            </div>
            <div className="mew-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;