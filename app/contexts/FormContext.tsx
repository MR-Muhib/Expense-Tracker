"use client";

import { createContext, useContext, useState } from "react";

// Create a Context
const UserContext = createContext(null);

// Custom Hook
export const useFormData = () => {
  return useContext(UserContext);
};

// Form Provider Component
export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get data from localStorage safely
    const initialData = localStorage.getItem("expense");
    const fetchedData: ExpenseType[] = initialData
      ? JSON.parse(initialData)
      : [];

    // Assuming `data` is of type ExpenseType
    fetchedData.push(data);

    // Save updated data to localStorage
    localStorage.setItem("expense", JSON.stringify(fetchedData));

    // Reset form
    setData({ category: "", amount: "", date: "" });
  };

  return (
    <UserContext.Provider value={{ data, handleInputChange, handleSubmit }}>
      {children}
    </UserContext.Provider>
  );
};
