import React, { createContext, useState, useContext, useEffect } from 'react';

const VisibilityContext = createContext();

export function useVisibility() {
  return useContext(VisibilityContext);
}

export const VisibilityProvider = ({ children }) => {
  const [contentVisible, setContentVisible] = useState(

    () => JSON.parse(localStorage.getItem('contentVisible')) || false
  );
  useEffect(() => {
    localStorage.setItem('contentVisible', JSON.stringify(contentVisible));
  }, [contentVisible]);

  const toggleContentVisibility = () => {
    setContentVisible(prev => !prev);
  };

  return (
    <VisibilityContext.Provider value={{ contentVisible, toggleContentVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};
