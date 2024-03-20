import { createContext, useEffect, useState } from "react";
import type { ChildrenProps, Theme } from "../types";

type ThemeContextProps = {
  theme: Theme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>(null!);

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return "light";
    }
  });

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme)); // Get theme from localstorage when component mounts
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
