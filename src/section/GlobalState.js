import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        selectedOption,
        updateSelectedOption
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
