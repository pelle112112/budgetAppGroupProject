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



    //const[totalExpenses, setTotalExpenses] = useState[0];
    const totalExpenses = 12000;

    return ( 
    <div>
        
        <Expenses expenses={expenses}/>
        <Income totalExpenses={totalExpenses} />
        <ExpenseForm/>
    </div>
    );
}

export default BudgetApp;