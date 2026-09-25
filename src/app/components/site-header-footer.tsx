"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

import navHeaderData from "@/data/Navigation/header-nav.json";

/**
 * SiteHeader and SiteFooter components.
 * @module SiteHeaderFooter
 */

type NavItem = {
  key: string;
  name: string;
  href: string;
  target: string;
  rel: string;
  title: string;
  classNames: string;
  icon: string;
};

export function SiteHeader(): import("react").JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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
            width={64}
            height={64}
            className="mr-2 w-13 h-13 md:w-15 md:h-15 drop-shadow-md"
          />
          <Link
            href="/"
            title="Go to Home Page"
            className="hidden md:block text-xl font-ubuntu italic hover:text-gray-700 dark:hover:text-gray-300"
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
          {navHeaderData.map((item: NavItem) => {
            const isActive = item.target !== "_blank" && pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                target={item.target}
                rel={item.rel}
                title={item.title}
                aria-current={isActive ? "page" : undefined}
                className={`${item.classNames || "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"} px-2 py-2 transition-colors ${
                  isActive
                    ? "underline underline-offset-4 decoration-2 text-white!"
                    : ""
                }`}
              >
                {item.icon != "" && (
                  <Image
                    src={item.icon}
                    alt={`${item.name} Icon`}
                    className="inline-block mr-1 h-5 w-5 brightness-0 invert"
                    width={16}
                    height={16}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
          <ThemeToggle className="w-10.5 h-10.5" />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter(): import("react").JSX.Element {
  return (
    <>
      <footer className="site-footer pt-4 pb-5 border-t border-slate-300/70 dark:border-slate-700/80">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <p className="text-sm">
              &copy; 2022 - {new Date().getFullYear()} 44th Regiment of Foot.
              All rights reserved.
            </p>
            <p className="text-sm">
              Images for auxiliary companies were generated using AI tools.
            </p>
          </div>
          <nav className="flex items-center gap-4"></nav>
        </div>
      </footer>
    </>
  );
}
