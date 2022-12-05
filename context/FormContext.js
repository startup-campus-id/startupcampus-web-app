import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const RegistContext = createContext();

export const useMyForm = () => useContext(RegistContext);

export default function FormProvider({ children }) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  // const [state, setState] = useState("dark")
  return (
    <RegistContext.Provider
      value={{ register, setValue, handleSubmit, watch, errors, setError, clearErrors }}
    >
      {children}
    </RegistContext.Provider>
  );
}
