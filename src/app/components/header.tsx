import Link from "next/link";

export function Header() {
  return (
    <header className="site-header p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/media/images/branding/logo.svg" alt="44th Regiment of Foot Logo" className="mr-2 h-12" />
          <Link href="/" className="text-xl font-ubuntu hover:text-gray-300">
            44th Regiment of Foot
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>

          <Link href="https://discord.gg/44th" target="_blank" className="hover:text-gray-300 border-r-yellow-500 border-r-2 pr-2">
            Join our Ranks!
            <img src="/media/images/icons/icon-discord.svg" alt="Discord Icon" className="inline-block ml-1 h-4" />
          </Link>

        </nav>
      </div>
    </header>
  );
}
