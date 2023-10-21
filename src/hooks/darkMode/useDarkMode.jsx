import { useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  };

  return toggleDarkMode;
};

export default useDarkMode;
