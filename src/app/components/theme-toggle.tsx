"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

function subscribeToTheme(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

function getThemeSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot(): boolean {
  return false;
}

export function ThemeToggle(): import("react").JSX.Element {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const next = !isDark;
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
          src="/media/images/icons/generic/icon-moon.svg"
          alt="Moon Icon"
          className="h-4 w-4 brightness-0 invert"
          width={16}
          height={16}
        />
      ) : (
        <Image
          src="/media/images/icons/generic/icon-sun.svg"
          alt="Sun Icon"
          className="h-4 w-4 brightness-0"
          width={16}
          height={16}
        />
      )}
    </button>
  );
}
