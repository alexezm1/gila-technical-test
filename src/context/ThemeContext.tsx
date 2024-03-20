/**
 * ThemeProvider component manages the application theme state and provides a context for consuming components to access the theme and switchTheme function.
 * It utilizes createContext and useState hooks to create and manage the theme context.
 */
import { createContext, useEffect, useState } from "react";
import type { ChildrenProps, Theme } from "../types";

// Define the shape of the context value
type ThemeContextProps = {
  theme: Theme;
  switchTheme: () => void;
};

// Create the theme context with initial value of null
export const ThemeContext = createContext<ThemeContextProps>(null!);

// ThemeProvider component to manage the application theme state
export const ThemeProvider = ({ children }: ChildrenProps) => {
  // State to manage the current theme
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize the theme from localStorage if available, otherwise default to 'light'
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return "light";
    }
  });

  // Function to toggle between light and dark themes
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  // Effect to update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // Render the ThemeProvider with the current theme and switchTheme function provided
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
