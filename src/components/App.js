import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App (props) {
    const [expenses, setExpenses] = useState([]);
    
    function addExpenses(expense) {
        setExpenses([...expenses, expense]);
    }
    return (
        <div>
            <ExpenseForm onSubmit={addExpenses} />
            <ExpenseList onSubmit={expenses} />
        </div>
    );
}

export default App;
