function Expenses({expenses}) {

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
        <td>{expense.name}</td>
        <td>{expense.price}</td>
        <td className= "action-cell">
            <div className="button-container">
            <button>Edit</button>
            <button>Delete</button>
            </div>
        </td>
        </tr>
        ))}
    </tbody>
    </table>

    </>
    );
}

export default Expenses;