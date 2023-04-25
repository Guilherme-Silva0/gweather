import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
