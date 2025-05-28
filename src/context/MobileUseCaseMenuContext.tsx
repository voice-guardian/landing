import React, { createContext, useContext, useState } from "react";

const MobileUseCaseMenuContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export const useMobileUseCaseMenu = () => useContext(MobileUseCaseMenuContext);

export const MobileUseCaseMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <MobileUseCaseMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileUseCaseMenuContext.Provider>
  );
}; 