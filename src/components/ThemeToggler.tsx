/**
 * ThemeToggler component toggles between light and dark themes.
 * It utilizes useContext hook to access theme state and switchTheme function from ThemeContext.
 */
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggler() {
  // Accessing theme and switchTheme function from ThemeContext
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center absolute top-5 right-4">
      {/* Checkbox input to toggle theme */}
      <input
        type="checkbox"
        id="themeToggler"
        checked={theme === "light"}
        onChange={switchTheme}
        className="hidden"
      />
      {/* Label for the theme toggler */}
      <label
        htmlFor="themeToggler"
        className={`cursor-pointer w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ease-in-out ${
          theme === "dark" ? "bg-black " : "bg-yellow-300"
        }`}
      >
        {/* Indicator for the theme toggler */}
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6 " : "translate-x-0"
          }`}
        />
      </label>
    </div>
  );
}

export default ThemeToggler;
