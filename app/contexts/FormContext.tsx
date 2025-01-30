"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for form data
interface FormData {
  category: string;
  amount: number;
  date: string;
}

// Define the context type
/* interface FormContextType {
  data: FormData;
  setData: (data: FormData) => void;

  setActive: (isActive: boolean) => void;
  setButtonType: (buttonType: string) => void;
} */
interface FormContextType {
  data: FormData;
  setData: (data: FormData) => void;
  isActive: { expense: boolean; income: boolean };
  setIsActive: (isActive: { expense: boolean; income: boolean }) => void;
  buttonType: string;
  setButtonType: (buttonType: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

// Create a Context with default value as `null` (it will be provided later)
const UserContext = createContext<FormContextType | null>(null);

// Custom Hook
export const useFormData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};

// Define props type for the FormProvider component
interface FormProviderProps {
  children: ReactNode;
}

// Form Provider Component
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [data, setData] = useState<FormData>({
    category: "",
    amount: 0,
    date: "",
  });

  const [isActive, setIsActive] = useState({
    expense: true,
    income: false,
  });

  const [buttonType, setButtonType] = useState("expense");
  const [error, setError] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        isActive,
        setIsActive,
        buttonType,
        setButtonType,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
