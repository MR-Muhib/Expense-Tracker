"use client";

interface ButtonTypes {
  onButtonHandler: (type: "expense" | "income") => void;
  isActive: { expense: boolean; income: boolean };
}

const Button: React.FC<ButtonTypes> = ({ onButtonHandler, isActive }) => {
  return (
    <div className="flex ">
      <button
        className={`${
          isActive.expense
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-tl-md rounded-bl-md text-white"
            : "bg-transparent w-full py-2 rounded-tl-md rounded-bl-md text-black border border-gray-200"
        }`}
        onClick={() => onButtonHandler("expense")}
      >
        Expense
      </button>
      <button
        className={`${
          isActive.income
            ? "bg-green-primary hover:bg-green-dark w-full py-2 rounded-tr-md rounded-br-md text-white"
            : "bg-transparent w-full py-2 rounded-tr-md rounded-br-md text-black border border-gray-200"
        }`}
        onClick={() => onButtonHandler("income")}
      >
        Income
      </button>
    </div>
  );
};

export default Button;
