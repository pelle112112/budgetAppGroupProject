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
                <input placeholder="Enter your income" type="number" value={input} onChange={handleInputChange} />
                <button onClick={() => handleSetIncome()}>Calculate</button>
            </div>
            <div>
                <h2>This is your available amount after your bills have been paid: {income - totalExpenses} </h2>
            </div>
        </div>
    );
}

export default Income;