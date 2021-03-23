import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [valor, setValor] = useState(null);

  return (
    <Context.Provider value={{ valor, setValor }}>{children}</Context.Provider>
  );
}

export default Context;
