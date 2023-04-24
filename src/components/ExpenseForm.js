import React, { useState } from "react";

function ExpenseForm(props) {
    const {description, setDescription} = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({ description, amount });
        setDescription("");
        setAmount("");
    };

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    };

    function handleAmountChange(e) {
        setAmount(e.target.value);
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <label htmlfor="descriprion">description:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                />

                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  />

                 <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;