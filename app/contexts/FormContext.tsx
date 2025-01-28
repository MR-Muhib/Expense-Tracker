"use client";

import {
  ChangeEvent,
  createContext,
  useContext,
  useState,
  ReactNode,
  FormEvent,
} from "react";

// Define the type for form data
interface FormData {
  category: string;
  amount: number;
  date: string;
}

// Define the context type
interface FormContextType {
  data: FormData;
  handleInputChange: (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmit: (event: FormEvent) => void;
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

  const handleInputChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", data);
    // Reset form
    setData({ category: "", amount: 0, date: "" });
  };

  return (
    <UserContext.Provider value={{ data, handleInputChange, handleSubmit }}>
      {children}
    </UserContext.Provider>
  );
};
