import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderType {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`${isDarkMode && 'dark-mode'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;