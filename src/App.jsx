
import { useEffect } from 'react';
import './App.css'
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
     
    </>
  )
}

export default App
