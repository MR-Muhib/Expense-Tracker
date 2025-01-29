import { useFormData } from "@/app/contexts/FormContext";
import React from "react";

interface InputProps {
  title: string;
  type: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({ title, type, handler, value }) => {
  const { error } = useFormData();
  return (
    <div className="mb-5">
      <label htmlFor={type} className="block text-xl my-2 font-medium mb-2">
        {title}
      </label>
      <input
        className="text-lg appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300"
        type={type}
        name={type}
        id={type}
        value={value}
        onChange={handler}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
