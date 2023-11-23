import { fetchData } from "../api/api";
import { useState } from 'react';
import { useEffect } from 'react';
import PostData from "../api/PostData";

function ExpenseForm(){

    const APIURL = 'http://localhost:3000/api';
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

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
    <input id="name" type="text" placeholder="name" value={name} onChange={(expense)=> setName(expense.target.value)}/>
    <label htmlFor="price">Cost</label>
    <input id="price" type="number" placeholder="price" onChange={(expense) => setPrice(expense.target.value)}/>
    <button type="submit" >Add Expense</button>
</form>
    </div>);
}

export default ExpenseForm;