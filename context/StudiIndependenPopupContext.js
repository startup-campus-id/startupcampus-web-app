import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const SIPopupContext = createContext();

export const useSIPopup = () => useContext(SIPopupContext);

export default function StudiIndependenPopupProvider({ children }) {
  const [siPopup, setSiPopup] = useState(false);
  return (
    <SIPopupContext.Provider
      value={{
        siPopup, setSiPopup
      }}
    >
      {children}
    </SIPopupContext.Provider>
  );
}
