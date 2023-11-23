import Expenses from "./Expenses";
import Income from "./Income";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData } from '../api/api';
import ExpenseForm from "./ExpenseForm";


function BudgetApp() {

    const[expenses, setExpenses] = useState([]);
  const APIURL = 'http://localhost:3000/api';
  
  function getExpenses(callback){
    fetchData(APIURL, callback);
  }
  useEffect(() => {
    getExpenses((data) => setExpenses(data));
  }, []);


    return ( 
    <div>
        
        <Expenses expenses={expenses}/>
        <Income />
        <ExpenseForm/>
    </div>
    );
}

export default BudgetApp;