"use client";

import InputCategory from "./forms/InputCategory";
import Title from "./forms/Title";
import Button from "./forms/Button";
import SaveButton from "./forms/SaveButton";
import { useFormData } from "@/app/contexts/FormContext";

const TrackerForm: React.FC = () => {
  const { handleInputChange, handleSubmit } = useFormData();

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="container mx-auto my-8 rounded-md bg-gray-light border border-gray-200 p-5"
      >
        <Title />

        <Button />

        <InputCategory />

        {/* Amount */}
        <div className="">
          <label
            htmlFor="amount"
            className="block  text-xl my-2 font-medium mb-2"
          >
            Amount
          </label>
          <input
            className="text-lg block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300"
            type="number"
            name="amount"
            id="amount"
            onChange={handleInputChange}
          />
        </div>

        {/* Date */}
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block  text-xl  my-2 font-medium mb-2"
          >
            Date
          </label>
          <input
            className="text-lg appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300"
            type="date"
            name="date"
            id="date"
            onChange={handleInputChange}
          />
        </div>

        <SaveButton />
      </form>
    </div>
  );
};

export default TrackerForm;
