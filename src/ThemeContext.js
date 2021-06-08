import { createContext } from "react";

// Should provide a default value
const ThemeContext = createContext('green', () => {});

export default ThemeContext;