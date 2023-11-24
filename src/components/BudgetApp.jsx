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
    function deleteExpenseById(expenseId) {
      fetchData(`${APIURL}/${expenseId}`, () => {}, "DELETE");
      setExpenses(expenses.filter((expense) => expense.id !== expenseId));
    }

    function updateExpenseById(expenseId, updatedExpense) {
      fetchData(`${APIURL}/${expenseId}`, () => {}, "PUT", updatedExpense);
      setExpenses(expenses.map((expense) => {
        if (expense.id === expenseId) {
          return updatedExpense;
        }
        return expense;
      }));
    }

    function calculateExpenses() {
        const totalPrice = expenses.reduce((totalAmount, expense) => {
            return totalAmount + parseInt(expense.price);
        }, 0);
        return totalPrice;
    }

    useEffect(() => {
        getExpenses((data) => setExpenses(data));
    }, []);

    useEffect(() => {
        const calculatedExpenses = calculateExpenses();
        setTotalExpenses(calculatedExpenses);
    }, [expenses]);


    return (
        <div className ="card">
            <Expenses expenses={expenses} totalPrice={totalExpenses} deleteExpenseById={deleteExpenseById} updateExpenseById={updateExpenseById}/>
            <Income totalExpenses={totalExpenses} />
            <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
        </div>
    );
}

export default BudgetApp;