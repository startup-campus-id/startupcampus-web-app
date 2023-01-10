import { useState } from 'react'
import { useSIPopup } from '../context/StudiIndependenPopupContext';

const useStudiIndepenPopup = () => {
  const {siPopup, setSiPopup} = useSIPopup();

  const openSiPopup = () => {
    setSiPopup(true)
  }

  return { siPopup, setSiPopup, openSiPopup };
};

export default useStudiIndepenPopup;
