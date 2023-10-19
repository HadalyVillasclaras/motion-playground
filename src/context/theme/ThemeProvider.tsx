import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, Theme } from './ThemeContext';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [isThemeLoaded, setIsThemeLoaded] = useState(false);
	useEffect(() => {
		const storedTheme = localStorage.getItem('theme-hv') as Theme | null;

		if (storedTheme) {
			setTheme(storedTheme);
		} else {
			setTheme('dark');
		}

		setIsThemeLoaded(true);
	}, []);

	useEffect(() => {
		if (theme) {
			localStorage.setItem('theme-hv', theme);
			document.body.setAttribute("data-theme", theme);
	}
	}, [theme]);


	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'l' || event.key === 'L') {
				toggleTheme();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const toggleTheme = () => {
		setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
	};

	if (!isThemeLoaded) return null;
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
