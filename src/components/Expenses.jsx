import React, {useRef, useState} from 'react';

function Expenses({expenses, totalPrice, deleteExpenseById, updateExpenseById}) {

    const [id, setId] = useState('');
    const nameRef = useRef(null);
    const priceRef = useRef(0);


    return ( 
    <>
    <h2>Expenses</h2>
<table className="table table-striped">
    <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Cost</th>
        </tr>
    </thead>
    <tbody>
        {expenses?.map((expense) => (
        <tr key={crypto.randomUUID()}>
        <td>{expense.id}</td>
        <td>{id===expense.id? <input style={{textAlign:"center"}} type='text' placeholder={expense.name} ref={nameRef} defaultValue={expense.name}></input> : expense.name}</td>
        <td>{id===expense.id? <input style={{textAlign:"center"}} type='number' placeholder={expense.price} ref={priceRef} defaultValue={expense.price}></input> : expense.price}</td>
        <td className= "action-cell">
            <div className="button-container">
            <button onClick={()=>
                {
                    if(id===expense.id){
                        expense.name=nameRef.current.value
                        expense.price=priceRef.current.value
                        updateExpenseById(expense.id, expense)
                        setId('')
                    }
                    else{
                    setId(expense.id)
                    }
                    }}>{id===expense.id?<>Submit</> : <>Edit</>}</button>
            <button className="button-color-red" onClick={()=>deleteExpenseById(expense.id)}>Delete</button>
            
            </div>
        </td>
        </tr>
        ))}
        
        <tr>
            <td>Total expenses:</td>
            <td/>
            <td>{parseInt(totalPrice)}</td>
            <td/>
        </tr>
    </tbody>
    </table>

    </>
    );
}

export default Expenses;