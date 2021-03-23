import React, { useState } from "react";

const Context = React.createContext({});

export function SalidasContextProvider({ children }) {
  const [salidas, setSalidas] = useState([]);

  return (
    <Context.Provider value={{ salidas, setSalidas }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
