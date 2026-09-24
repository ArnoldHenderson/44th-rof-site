"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

import navHeaderData from "@/data/Navigation/header-nav.json";

/**
 * SiteHeader and SiteFooter components.
 * @module SiteHeaderFooter
 */

type NavItem = {
  name: string;
  href: string;
  target: string;
  title: string;
  icon: string;
};

export function SiteHeader(): import("react").JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile nav when clicking/tapping outside of it or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="site-header relative border-b border-slate-300/70 dark:border-slate-700/80"
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <Image
            src="/media/images/branding/logo.svg"
            alt="44th Regiment of Foot Logo"
            width={80}
            height={80}
            className="mr-2 w-16 h-16 md:w-20 md:h-20 drop-shadow-md"
          />
          <Link
            href="/"
            title="Go to Home Page"
            className="hidden md:block text-xl font-ubuntu hover:text-gray-700 dark:hover:text-gray-300"
          >
            44th Regiment of Foot
          </Link>
        </div>

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

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-(--surface) items-center gap-4 p-4 md:p-0 z-20`}
        >
          {navHeaderData.map((item: NavItem, index: number) => (
            <Link
              key={index}
              href={item.href}
              target={item.target}
              title={item.title}
              className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
            >
              {item.name}
              {item.icon != "" && (
                <Image
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="inline-block ml-1 h-4 w-4"
                  width={16}
                  height={16}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter(): import("react").JSX.Element {
  return (
    <>
      <footer className="site-footer pt-4 pb-5">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm">
              &copy; 2022 - {new Date().getFullYear()} 44th Regiment of Foot.
              All rights reserved.
            </p>
          </div>
          <nav className="flex items-center gap-4"></nav>
        </div>
      </footer>
    </>
  );
}
