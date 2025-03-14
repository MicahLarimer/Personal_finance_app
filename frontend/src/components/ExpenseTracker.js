import React from "react";

function ExpenseTracker({ expenses }) {
    return (
        <section>
            <h2>Your Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.name} - {expense.amount}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ExpenseTracker;
