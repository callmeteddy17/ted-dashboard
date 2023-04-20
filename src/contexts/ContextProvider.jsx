import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClick, setIsClick] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Dark');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.id);
    console.log(e);
    localStorage.setItem('themeMode', e.target.id);
    setThemeSettings(false);
  };

  const setColor = (e) => {
    setCurrentColor(e);

    localStorage.setItem('colorMode', e);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClick({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClick,
        setIsClick,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,

        currentMode,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        themeSettings,
        setColor,
        setMode,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
