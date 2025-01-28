"use client";

import React from "react";

interface InputChange {
  onHandleInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const categories = [
  { id: 1, value: "food", title: "Food & Groceries" },
  { id: 2, value: "health", title: "Health & Medical" },
  { id: 3, value: "education", title: "Education" },
  { id: 4, value: "transportation", title: "Transportation" },
  { id: 5, value: "entertainment", title: "Entertainment" },
  { id: 6, value: "shopping", title: "Shopping" },
  { id: 7, value: "savings", title: "Savings & Investments" },
  { id: 8, value: "bills", title: "Bills & Utilities" },
  { id: 9, value: "travel", title: "Travel & Vacations" },
  { id: 10, value: "other", title: "Other" },
];

const InputCategory: React.FC<InputChange> = ({ onHandleInputChange }) => {
  return (
    <div className="my-5">
      <label htmlFor="category" className="text-xl  font-semibold ">
        Category
      </label>
      <select
        id="category"
        className=" text-lg mt-3 appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300"
        defaultValue=""
        name="category"
        onChange={onHandleInputChange}
      >
        <option value="" disabled className="text-gray-300">
          Select an option
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.value}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputCategory;
