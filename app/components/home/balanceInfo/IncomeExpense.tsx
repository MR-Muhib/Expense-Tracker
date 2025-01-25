import React from "react";
import Income from "../income/Income";
import Expense from "../expense/Expense";

const IncomeExpense = () => {
  return (
    <div className="flex justify-between ml-2">
      <Income />

      <Expense />
    </div>
  );
};

export default IncomeExpense;
