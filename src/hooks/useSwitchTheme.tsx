import { useEffect, useState } from "react";
type Theme = "dark" | "light";

export const useSwitchTheme = (): [boolean, () => void] => {
  const storedTheme = localStorage.getItem("theme-hv") as Theme | null;
  const initialTheme = storedTheme || "dark";
  const [theme, setTheme] = useState<Theme>(initialTheme );
  const [isDark, setIsDark] = useState<boolean>(initialTheme === 'dark');

  function switchTheme() {
    if (isDark) {
      setTheme("light");
    } else if (!isDark) {
      setTheme("dark");
    }
    setIsDark(!isDark);
  }

  useEffect(() => {
    localStorage.setItem('theme-hv', theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [isDark, switchTheme];
};
