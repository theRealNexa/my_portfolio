"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — preference just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink/70 transition-colors duration-200 hover:text-ink md:h-7 md:w-7"
    >
      {dark ? <Sun aria-hidden className="h-3.5 w-3.5" /> : <Moon aria-hidden className="h-3.5 w-3.5" />}
    </button>
  );
}
