import { useState } from "react";

const useIncrementHook = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => prev - 1);
  };

  return {
    quantity,
    increment,
    decrement,
  };
};

export default useIncrementHook;
