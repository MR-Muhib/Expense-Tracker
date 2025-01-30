"use client";

import React, { useEffect, useState } from "react";

interface IncomeItems {
  category: string;
  date: string;
  amount: number;
}

const Income: React.FC = () => {
  const [InitialIncome, setInitialIncome] = useState<IncomeItems[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("incomes");
      setInitialIncome(storedData ? JSON.parse(storedData) : []);
    }
  }, []);

  return (
    <div className="w-full h-[27rem] overflow-auto scrollbar-hide bg-gray-light  border border-gray-200  rounded-md">
      <div className="mb-2 bg-gray-light sticky top-0 w-full z-10">
        <h1 className="text-xl font-semibold p-4">Income</h1>
      </div>

      <div className="">
        {InitialIncome.map((income, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2 p-4">
              <div className="">
                <p className="text-lg font-semibold capitalize">
                  {income.category}
                </p>
                <p className="text-base">{income.date}</p>
              </div>
              <div className="">
                <p className="text-base float-right mt-5">
                  BDT {income.amount}
                </p>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Income;
