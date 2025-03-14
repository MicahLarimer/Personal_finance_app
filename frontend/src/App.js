import React from "react";
import ExpenseTracker from "./components/ExpenseTracker";
import Header from "./components/Header";

const expenseData = [
    { id: 1, name: "Rent", amount: "$1535" },
    { id: 2, name: "Phone Bill", amount: "$196.50" },
    { id: 3, name: "Insurance", amount: "$277.47" },
    { id: 4, name: "Electric", amount: "$248.50" },
    { id: 5, name: "PG&E", amount: "$196.50" },
    { id: 6, name: "Life Insurance", amount: "$77.25" },
];

function App() {
    return (
        <>
            <Header />
            <ExpenseTracker expenses={expenseData} />
        </>
    );
}

export default App;
