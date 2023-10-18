import  { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, Theme } from './ThemeContext';  

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }:ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme-hv') as Theme | null;

        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme-hv', theme);
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
