import { createContext, FC, useContext, useState } from "react";
import useIncrementHook from "./useIncrementHook";

interface IGlobalContextProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const Global = createContext<IGlobalContextProps>({} as IGlobalContextProps);

const GlobalProvider: FC<any> = ({ children }) => {
  const { decrement, increment, quantity } = useIncrementHook();

  const values: IGlobalContextProps = {
    quantity,
    increment,
    decrement,
  };

  return <Global.Provider value={values}>{children}</Global.Provider>;
};

const useGlobal = () => {
  const context = useContext(Global);
  return context;
};

export { useGlobal, GlobalProvider };
