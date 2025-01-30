"use client";

import React, { useEffect, useState } from "react";

// Define the type for the expense data
interface ExpenseItem {
  category: string;
  amount: number;
  date: string;
}

// Expense component props

const Expense: React.FC = () => {
  const [InitialExpense, setInitialExpense] = useState<ExpenseItem[]>([]); // Add correct type

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("expense");
      setInitialExpense(storedData ? JSON.parse(storedData) : []);
    }
  }, []);
  // console.log(InitialExpense);

  return (
    <div className="w-full h-[27rem] overflow-auto scrollbar-hide bg-gray-light border border-gray-200 rounded-md">
      <div className="mb-2 sticky z-10 top-0 bg-gray-light w-full">
        <h1 className="text-xl font-semibold p-4 ">Expense</h1>
      </div>

      <div>
        {InitialExpense.map((income, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2 p-4">
              <div>
                <p className="text-lg font-semibold capitalize">
                  {income.category}
                </p>
                <p className="text-base">{income.date}</p>
              </div>
              <div>
                <p className="text-base float-right mt-5">
                  BDT {income.amount}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expense;
