import Link from "next/link";

export function InfoCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg dark:bg-gray-900 bg-gray-100">
        <h3 className="text-xl font-bold mb-4">
          <span className="bg-blue-900 text-white py-1 px-2 rounded">
            Join Our Discord
          </span>
        </h3>
        <p className="mb-4">
          Join our Discord server to join the 44th to gain your nuts or look
          around for now, or become a regiment representative if you are from
          another regiment.
        </p>
        <Link
          href="https://discord.gg/44th"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Discord
        </Link>
      </div>

      <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg dark:bg-gray-900 bg-gray-100">
        <h3 className="text-xl font-bold mb-4">
          <span className="bg-blue-900 text-white py-1 px-2 rounded">
            Follow Us on Social Media
          </span>
        </h3>
        <p className="mb-4">
          We post funny clips not only from Holdfast but also from other servers
          we own for other games! Please give these a watch as you will find
          them funny.
        </p>
        <Link
          href="https://www.youtube.com/@44threg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          YouTube
        </Link>

        <Link
          href="https://www.tiktok.com/@44thregofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          TikTok
        </Link>
      </div>

      <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg dark:bg-gray-900 bg-gray-100">
        <h3 className="text-xl font-bold mb-4">
          <span className="bg-blue-900 text-white py-1 px-2 rounded">
            Interested in 44th events?
          </span>
        </h3>
        <p className="mb-4">
          Join our community events centre and request to join, we have
          Skirmisher events on Friday and Saturday and a Cavalry event on
          Mondays.
        </p>
        <Link
          href="https://discord.gg/kRVEVpRB7F"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Discord
        </Link>
      </div>
    </div>
  );
}
