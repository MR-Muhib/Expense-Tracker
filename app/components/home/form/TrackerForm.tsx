"use client";

import InputCategory from "./forms/InputCategory";
import Title from "./forms/Title";
import Button from "./forms/Button";
import SaveButton from "./forms/SaveButton";
import { useFormData } from "@/app/contexts/FormContext";
import saveExpense from "@/app/utils/saveExpense";
import saveIncome from "@/app/utils/saveIncome";
import validateFormData from "@/app/utils/validateFormData";
import Input from "./forms/Input";

const TrackerForm: React.FC = () => {
  const {
    data,
    setData,
    isActive,
    setIsActive,
    buttonType,
    setButtonType,
    setError,
  } = useFormData();

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const buttonHandler = (type: string) => {
    // event?.preventDefault();
    if (type === "expense") {
      setIsActive({ expense: true, income: false });
      setButtonType(type);
    }
    if (type === "income") {
      setIsActive({ expense: false, income: true });
      setButtonType(type);
    }
  };

  const handleSubmit = () => {
    // validate form data
    const res = validateFormData(data);
    if (res) {
      setError(res);
      return;
    }

    if (buttonType === "expense") {
      saveExpense(data);
    }
    if (buttonType === "income") {
      saveIncome(data);
    }

    // Reset form data properly
    setData({
      category: "",
      amount: 0,
      date: "",
    });

    setError(null);
  };

  return (
    <div className="">
      <div className="container mx-auto my-8 rounded-md bg-gray-light border border-gray-200 p-5">
        <Title />

        <Button onButtonHandler={buttonHandler} isActive={isActive} />

        <InputCategory onHandleInputChange={handleInputChange} />

        {/* Amount */}
        <Input
          title="Amount"
          type="amount"
          handler={handleInputChange}
          value={data.amount}
        />

        {/* Date */}
        <Input
          title="Date"
          type="date"
          handler={handleInputChange}
          value={data.date}
        />

        <SaveButton onHandleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default TrackerForm;
