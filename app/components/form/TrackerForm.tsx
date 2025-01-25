import React from "react";
import InputCategory from "./forms/InputCategory";
import Title from "./forms/Title";
import Button from "./forms/Button";

const TrackerForm: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto my-8 rounded-md bg-gray-light border border-gray-200 p-5">
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
            name="number"
            id="amount"
          />
        </div>
        {/* Date */}

        <div className="">
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
          />
        </div>
      </div>
    </div>
  );
};

export default TrackerForm;
