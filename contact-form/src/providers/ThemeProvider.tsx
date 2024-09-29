import { useState, ReactNode, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ThemeProviderType {
  children: ReactNode;
}

const initTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

export default function ThemeProvider({ children }: ThemeProviderType) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};