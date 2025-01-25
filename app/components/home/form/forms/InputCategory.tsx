"use client";

import React from "react";

const InputCategory: React.FC = ({ onHandleInputChange }) => {
  return (
    <div className="my-5">
      <label htmlFor="category" className="text-xl mb-4 font-semibold">
        Category
      </label>
      <select
        id="category"
        className=" w-full py-2 mt-2 text-lg"
        defaultValue=""
        name="category"
        onChange={onHandleInputChange}
      >
        <option value="" disabled className="text-gray-300">
          Select an option
        </option>
        <option value="food">Food & Groceries</option>
        <option value="health">Health & Medical</option>
        <option value="education">Education</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
        <option value="shopping">Shopping</option>
        <option value="savings">Savings & Investments</option>
        <option value="bills">Bills & Utilities</option>
        <option value="travel">Travel & Vacations</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default InputCategory;
