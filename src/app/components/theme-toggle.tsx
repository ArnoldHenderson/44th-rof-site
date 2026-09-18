"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle(): import("react").JSX.Element {
  const [isDark, setIsDark] = useState(false);

  // Sync initial state with the class set by the anti-flash script in layout.tsx
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
    >
      {isDark ? (
        <Image
          src="/media/images/icons/icon-moon.svg"
          alt="Sun Icon"
          className="h-4 w-4 brightness-0 invert"
          width={16}
          height={16}
        />
      ) : (
        <Image
          src="/media/images/icons/icon-sun.svg"
          alt="Moon Icon"
          className="h-4 w-4 brightness-0"
          width={16}
          height={16}
        />
      )}
    </button>
  );
}
