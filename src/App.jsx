import { useState } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import BudgetApp from './components/BudgetApp';
import { fetchData } from './api/api';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';

function App() {
  
  return (
    <>
  
      <BudgetApp/>
      
    </>
  )
  
}

export default App
