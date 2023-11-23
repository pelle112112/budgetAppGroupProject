import Expenses from "./Expenses";
import Income from "./Income";
import React, { useState} from 'react'

function BudgetApp() {

    //const[totalExpenses, setTotalExpenses] = useState[0];
    const totalExpenses = 12000;

    return ( 
    <div>
        This is budgetApp
        <Expenses />
        <Income totalExpenses={totalExpenses} />
    </div>
    );
}

export default BudgetApp;