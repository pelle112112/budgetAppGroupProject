import { useState } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import BudgetApp from './components/BudgetApp';
import { fetchData } from './api/api';
import Expenses from './components/Expenses';

function App() {
  
  const[expenses, setExpenses] = useState([]);
  const APIURL = 'http://localhost:3000/api';
  
  function getExpenses(callback){
    fetchData(APIURL, callback);
  }
  useEffect(() => {
    getExpenses((data) => setExpenses(data));
  }, []);
  

  return (
    <>
      <BudgetApp/>
      <Expenses expenses= {expenses}/>
    </>
  )
  
}

export default App
