"use client";

import Link from "next/link";
import type { InfoCard } from "@/types/content";

/**
 * InfoCardsCreator component.
 * @component InfoCardsCreator
 * @description Renders a list of informational cards, each containing a title, description, and links from a JSON array.
 * @returns {JSX.Element} The rendered info cards component.
 * @param {InfoCard[]} infoCards - Array of info card objects to display.
 */

export default function InfoCardsCreator({
  infoCards,
  className = "",
}: {
  infoCards: InfoCard[];
  className?: string;
}): import("react").JSX.Element {
  return (
    <>
      <div className={`container mx-auto ${className}`}>
        <div className="flex flex-wrap justify-center gap-4">
          {infoCards.map((info) => (
            <div
              key={info.title}
              className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg dark:bg-gray-900 bg-gray-100"
            >
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-blue-900 text-white py-1 px-2 rounded">
                  {info.title}
                </span>
              </h3>

              <p className="mb-4">{info.description}</p>

              {info.links.map((link) => (
                <Link
                  key={`${link.link}-${link.linkTitle}`}
                  href={link.link}
                  target={link.linkTarget}
                  rel={link.linkRel}
                  className={link.linkStyle}
                >
                  {link.linkTitle}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
