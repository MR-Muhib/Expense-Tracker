"use client";

import React, { useState } from "react";

const Button = () => {
  const [isActive, setIsActive] = useState({
    expense: true,
    income: false,
  });
  const handleClick = (type: string) => {
    if (type === "expense") {
      setIsActive({ expense: true, income: false });
    }
    if (type === "income") {
      setIsActive({ expense: false, income: true });
    }
  };

  return (
    <div className="flex ">
      <button
        className={`${
          isActive.expense
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-md text-white"
            : "bg-transparent w-full py-2 rounded-md text-black border border-gray-200"
        }`}
        onClick={() => handleClick("expense")}
      >
        Expense
      </button>
      <button
        className={`${
          isActive.income
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-md text-white"
            : "bg-transparent w-full py-2 rounded-md text-black border border-gray-200"
        }`}
        onClick={() => handleClick("income")}
      >
        Income
      </button>
    </div>
  );
};

export default Button;
