"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Header(): import("react").JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Site Title */}
        <div className="flex items-center">
          <Image
            src="/media/images/branding/logo.svg"
            alt="44th Regiment of Foot Logo"
            width={80}
            height={80}
            className="mr-2 w-16 h-16 md:w-20 md:h-20"
          />
          <Link
            href="/"
            title="Go to Home Page"
            className="hidden md:block text-xl font-ubuntu hover:text-gray-700 dark:hover:text-gray-300"
          >
            44th Regiment of Foot
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 border border-gray-400 dark:border-gray-600 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
        </button>

        {/* Site Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-(--surface) items-center gap-4 p-4 md:p-0 z-20`}
        >
          {/* Home */}
          <Link
            href="/"
            title="Go to Home Page"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            title="Learn more about us"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            About
          </Link>

          {/* Join 44th */}
          <Link
            href="https://discord.gg/44th"
            target="_blank"
            title="Join our Discord"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            Join our Ranks!
            <Image
              src="/media/images/icons/generic/icon-discord.svg"
              alt="Discord Icon"
              className="inline-block ml-1 h-4 w-4"
              width={16}
              height={16}
            />
          </Link>

          {/* Kofi Link */}
          <Link
            href="https://ko-fi.com/44throf"
            target="_blank"
            title="Support us on Ko-fi"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            Donate
            <Image
              src="/media/images/icons/generic/icon-kofi.svg"
              alt="Ko-fi Icon"
              className="inline-block ml-1 h-4 w-4"
              width={16}
              height={16}
            />
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
