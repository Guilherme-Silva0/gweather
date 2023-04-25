import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const oldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
