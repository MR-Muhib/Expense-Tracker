"use client";

import InputCategory from "./forms/InputCategory";
import Title from "./forms/Title";
import Button from "./forms/Button";
import SaveButton from "./forms/SaveButton";
import { useFormData } from "@/app/contexts/FormContext";
import Input from "./forms/Input";

const TrackerForm: React.FC = () => {
  const { handleInputChange, handleSubmit } = useFormData();

  return (
    <div className="">
      <div className="container mx-auto my-8 rounded-md bg-gray-light border border-gray-200 p-5">
        <Title />

        <Button />

        <InputCategory onHandleInputChange={handleInputChange} />

        {/* Amount */}
        <Input title="Amount" type="amount" handler={handleInputChange} />

        {/* Date */}
        <Input title="Date" type="date" handler={handleInputChange} />

        <SaveButton onHandleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default TrackerForm;
