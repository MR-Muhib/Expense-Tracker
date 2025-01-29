"use client";

const Button = ({ onButtonHandler, isActive }) => {
  return (
    <div className="flex ">
      <button
        className={`${
          isActive.expense
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-md text-white"
            : "bg-transparent w-full py-2 rounded-md text-black border border-gray-200"
        }`}
        onClick={() => onButtonHandler("expense")}
      >
        Expense
      </button>
      <button
        className={`${
          isActive.income
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-md text-white"
            : "bg-transparent w-full py-2 rounded-md text-black border border-gray-200"
        }`}
        onClick={() => onButtonHandler("income")}
      >
        Income
      </button>
    </div>
  );
};

export default Button;
