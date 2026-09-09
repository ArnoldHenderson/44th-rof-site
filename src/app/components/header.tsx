import Link from "next/link";
import Image from "next/image";
import logo from "@/public/media/images/branding/logo.svg";
import discordIcon from "@/public/media/images/icons/icon-discord.svg";
import kofiIcon from "@/public/media/images/icons/kofi-symbol.svg";

export function Header() {
  return (
    <header className="site-header p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="44th Regiment of Foot Logo"
            width={52}
            height={52}
            className="mr-2"
          />
          <Link
            href="/"
            className="text-xl font-ubuntu hover:text-gray-700 dark:hover:text-gray-300"
          >
            44th Regiment of Foot
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/about"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            About
          </Link>

          <Link
            href="https://discord.gg/44th"
            target="_blank"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            Join our Ranks!
            <Image
              src={discordIcon}
              alt="Discord Icon"
              className="inline-block ml-1 h-4 w-4"
              width={16}
              height={16}
            />
          </Link>

          <Link
            href="https://ko-fi.com/44throf"
            target="_blank"
            className="px-3 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors"
          >
            Donate
            <Image
              src={kofiIcon}
              alt="Ko-fi Icon"
              className="inline-block ml-1 h-4 w-4"
              width={16}
              height={16}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
