function ExpenseForm(){
    return (<div>
        <h2>Add Expense</h2>
        <form>
    <label htmlFor="id">Id</label>
    <input id="id" type="number" readOnly placeholder="id" />
    <label htmlFor="name">Name</label>
    <input id="name" type="text" placeholder="name" />
    <label htmlFor="price">Cost</label>
    <input id="price" type="number" placeholder="price" />
    <button type="submit" >Add Expense</button>
</form>
    </div>);
}

export default ExpenseForm;