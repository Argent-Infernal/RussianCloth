'use client'

import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

export const ThemeProvider = ({children}: PropsWithChildren<unknown>) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);
    
    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
        localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
    };

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);