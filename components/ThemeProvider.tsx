"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial theme load - check if already set by blocking script, then localStorage, then system preference
    const root = document.documentElement;
    const hasDarkClass = root.classList.contains("dark");
    
    // Check if script already set the theme
    if (hasDarkClass || root.getAttribute("data-mode") === "dark") {
      setTheme("dark");
      setMounted(true);
      return;
    }
    
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      // Apply immediately to prevent flash
      if (storedTheme === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-mode", "dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-mode", "light");
        root.style.colorScheme = "light";
      }
    } else {
      // No stored theme, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      
      if (initialTheme === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-mode", "dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-mode", "light");
        root.style.colorScheme = "light";
      }
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Apply theme immediately to DOM
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-mode", "dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-mode", "light");
      root.style.colorScheme = "light";
    }
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
    
    console.log("Theme applied to DOM:", theme, "Has dark class:", root.classList.contains("dark"));
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      // Apply immediately to DOM before state update
      const root = document.documentElement;
      if (newTheme === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-mode", "dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-mode", "light");
        root.style.colorScheme = "light";
      }
      localStorage.setItem("theme", newTheme);
      console.log("Toggle theme - new theme:", newTheme, "Has dark class:", root.classList.contains("dark"));
      return newTheme;
    });
  };

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};