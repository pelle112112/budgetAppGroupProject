import { useState } from 'react'
import { useEffect } from 'react';
import './styles/App.css'
import BudgetApp from './components/BudgetApp'
import { fetchData } from './api/api'

function App() {
  const[expenses, setExpenses] = useState([]);
  const APIURL = 'http://localhost:3004/api';
  
  function getExpenses(callback){
    fetchData(APIURL, callback);
  }
  useEffect(() => {
    getExpenses((data) => setExpenses(data));
  }, []);

  return (
    <>
      <BudgetApp />
    </>
  )
}

export default App
