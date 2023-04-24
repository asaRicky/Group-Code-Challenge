import React, { useState } from "react";

function ExpenseList(props) {
    const { expenses } = props;

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.description} - ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}   

export default ExpenseList;