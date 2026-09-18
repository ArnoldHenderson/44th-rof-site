import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Header(): import("react").JSX.Element {
  return (
    <header className="site-header p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Site Title */}
        <div className="flex items-center">
          <Image
            src="/media/images/branding/logo.svg"
            alt="44th Regiment of Foot Logo"
            width={52}
            height={52}
            className="mr-2"
          />
          <Link
            href="/"
            title="Go to Home Page"
            className="text-xl font-ubuntu hover:text-gray-700 dark:hover:text-gray-300"
          >
            44th Regiment of Foot
          </Link>
        </div>

        {/* Site Navigation */}
        <nav className="flex items-center gap-4">
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
              src="/media/images/icons/icon-discord.svg"
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
              src="/media/images/icons/icon-kofi.svg"
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
