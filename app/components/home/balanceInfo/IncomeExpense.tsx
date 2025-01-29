import React from "react";
import Income from "../income/Income";
import Expense from "../expense/Expense";

const IncomeExpense: React.FC = () => {
  return (
    <div className="grid grid-cols-2  mt-6 gap-5">
      <Income />

      <Expense />
    </div>
  );
};

export default IncomeExpense;
