function Expenses({expenses}) {

    return ( 
    <>
        {expenses?.map((expense => (
                <div key={crypto.randomUUID()}>
                <div>ID: {expense.id}</div>
                <div>Name: {expense.name}</div>
                <div>Price: {expense.price}</div>
              </div>
           
        )))}
    </>
    );
}

export default Expenses;