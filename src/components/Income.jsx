import { useState } from 'react';

function Income({ totalExpenses }) {

    const [income, setIncome] = useState(0);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value);

    const handleSetIncome = () => {
        setIncome(input);
        setInput('');
    };

    return (
        <div>
            <div>
                <h3> Enter your income</h3>
                <input placeholder="Enter your income" type="number" value={input} onChange={handleInputChange} />
                <button className="single-button" onClick={() => handleSetIncome()}>Calculate</button><br/><br/>
            </div>
            <div>
                <label>If your income is:</label><br/>
                <input type="text" style={{textAlign: "center"}} value={income} readOnly /><br/>
                <label> This is your available amount after your bills have been paid</label><br/>
                <input type="text" style={{textAlign: "center"}} value={parseInt(income) - parseInt(totalExpenses)} readOnly /><br/><br/>
            </div>
        </div>
    );
}

export default Income;