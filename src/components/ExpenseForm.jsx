import { useState } from 'react';
import PostData from "../api/PostData";

function ExpenseForm({ expenses, setExpenses }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleFormSubmmit = (e) => {
        e.preventDefault();
        const newExpense = {
            name: name,
            price: price,
        };
        console.log(newExpense);
        PostData(newExpense);
    };


    return (<div>
        <h2>Add Expense</h2>
        <form onSubmit={handleFormSubmmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="name" value={name} onChange={(expense) => setName(expense.target.value)} />
            <label htmlFor="price">Cost</label>
            <input id="price" type="number" placeholder="price" min={0} onChange={(expense) => setPrice(expense.target.value)} />
            <button type="submit" onClick={() => {
                setExpenses(
                    [...expenses, {
                        id: expenses[expenses.length-1].length+1,
                        name: name,
                        price: price
                    }]
                )
            }
            }>Add Expense</button>
        </form>
    </div>);
}

export default ExpenseForm;