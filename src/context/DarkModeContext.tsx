import { createContext, useState, useContext } from 'react'

const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext);

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return { isDarkMode, toggleDarkMode };
};


export const DarkModeProvider = ({ children }) => {
    const darkMode = useDarkMode();
    return (
        <DarkModeContext.Provider value={darkMode}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default useDarkMode;