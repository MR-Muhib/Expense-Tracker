import React from "react";
import IncomeExpense from "./IncomeExpense";

const BalanceInfo: React.FC = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 w-full bg-gray-light my-8 ml-2 border border-gray-200">
        <div className="p-5 border-r border-r-gray-200">
          <h1 className="text-center font-bold text-2xl">2000000</h1>
          <p className="text-center">Total Income</p>
        </div>

        <div className="p-5 border-r border-r-gray-200">
          <h1 className="text-center font-bold text-2xl">2000000</h1>
          <p className="text-center">Total Income</p>
        </div>

        <div className="p-5">
          <h1 className="text-center font-bold text-2xl">2000000</h1>
          <p className="text-center">Total Income</p>
        </div>
      </div>

      <IncomeExpense />
    </div>
  );
};

export default BalanceInfo;
