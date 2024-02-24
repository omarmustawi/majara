"use client";
import { createContext, useContext, useState, ReactNode } from "react";
interface IsOpenSidebarSecondType {
    IsOpenSidebarSecond: boolean;
    setIsOpenSidebarSecond:  (isOpen: boolean) => void;
}
const IsOpenSidebarSecondContext = createContext<IsOpenSidebarSecondType | undefined>(
  undefined
);

export const IsOpenSidebarSecondProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [IsOpenSidebarSecond, setIsOpenSidebarSecond] = useState<boolean>(false);
  return (
    <IsOpenSidebarSecondContext.Provider value={{ IsOpenSidebarSecond, setIsOpenSidebarSecond }}>
      {children}
    </IsOpenSidebarSecondContext.Provider>
  );
};

export const useIsOpenSidebarSecond = () => {
  const context = useContext(IsOpenSidebarSecondContext);
  if (!context) {
    throw new Error(
      "useIsOpenContact must be used within a IsOpenContactProvider"
    );
  }
  return context;
};
