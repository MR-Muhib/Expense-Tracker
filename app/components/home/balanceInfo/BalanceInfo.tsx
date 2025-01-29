"use client";

import React from "react";
import IncomeExpense from "./IncomeExpense";
import { totalIncomes, totalExpenses, netIncome } from "../../../utils/total";

const BalanceInfo: React.FC = () => {
  const totalIncome = totalIncomes();
  const totalExpense = totalExpenses();
  const netIncomes = netIncome();

  return (
    <div className="px-5 pt-6">
      <div className="grid grid-cols-3 w-full bg-gray-light mr-3 p-5 border border-gray-200">
        <div className=" border-r border-r-gray-200">
          <h1 className="text-center font-bold text-2xl">BDT {totalIncome}</h1>
          <p className="text-center">Total Income</p>
        </div>

        <div className=" border-r border-r-gray-200">
          <h1 className="text-center font-bold text-2xl">BDT {totalExpense}</h1>
          <p className="text-center">Total Expenses</p>
        </div>

        <div className="">
          <h1 className="text-center font-bold text-2xl">BDT {netIncomes}</h1>
          <p className="text-center">Net Incomes</p>
        </div>
      </div>

      <IncomeExpense />
    </div>
  );
};

export default BalanceInfo;
