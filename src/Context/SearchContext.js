import React, { useState } from "react";

const Context = React.createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState(null);

  return (
    <Context.Provider value={{ search, setSearch }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
