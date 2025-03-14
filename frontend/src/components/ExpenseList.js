import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) {
      alert('Please enter the name and the amount.');
      return;
    }

    // Call the expense function
    addExpense({ name, amount });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
