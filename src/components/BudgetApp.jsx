import Expenses from "./Expenses";
import Income from "./Income";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData } from '../api/api';
import ExpenseForm from "./ExpenseForm";



function BudgetApp() {

    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const APIURL = 'http://localhost:3000/api';

    function getExpenses(callback) {
        fetchData(APIURL, callback);
    }

    function calculateExpenses() {
        const totalPrice = expenses.reduce((totalAmount, expense) => {
            return totalAmount + parseInt(expense.price);
        }, 0);
        return totalPrice;
    }

    useEffect(() => {
        getExpenses((data) => {
            setExpenses(data)
            const calculatedExpenses = calculateExpenses();
            setTotalExpenses(calculatedExpenses);
        });
    }, []);


    return (
        <div className ="card">
            <Expenses expenses={expenses} totalPrice={totalExpenses}/>
            <Income totalExpenses={totalExpenses} />
            <ExpenseForm />
        </div>
    );
}

export default BudgetApp;