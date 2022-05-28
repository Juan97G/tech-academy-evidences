import React, { createContext, useState } from "react";

const initialValues = {
  state: {
    cart: [],
  },
  setState: () => {},
};

const CartContext = createContext(initialValues);

const CartContextProvider = (props) => {
  const [state, setState] = useState(initialValues.state);

  return (
    <CartContext.Provider value={{ state, setState }}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
