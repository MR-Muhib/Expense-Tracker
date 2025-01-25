import React from "react";

const InitialIncome = [
  { id: 1, category: "salary", date: "05/07/2032", amount: 5000 },
  { id: 2, category: "rent", date: "01/02/2022", amount: 3000 },
];
const Expense = () => {
  return (
    <div className="w-full h-80 overflow-auto bg-gray-light p-2 border border-gray-200 rounded-md">
      <div className="mb-2">
        <h1 className="text-lg font-semibold">Expense</h1>
      </div>

      <div className="">
        {InitialIncome.map((income) => (
          <>
            <div key={income.id} className="flex justify-between mb-2">
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Expense;
