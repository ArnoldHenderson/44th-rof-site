"using client";

import Link from "next/link";

type InfoCard = {
  title: string;
  description: string;
  links: {
    link: string;
    linkTitle: string;
    linkTarget: string;
    linkRel: string;
    linkStyle: string;
  }[];
};

export default function InfoCardsCreator({
  infoCards,
}: {
  infoCards: InfoCard[];
}): import("react").JSX.Element {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {/* 
            Info Cards Mapping, 
            creates a new card for each JSON array element which contains a title, description, and links.
          */}

          {infoCards.map((info: InfoCard, index: number) => (
            <div
              key={index}
              className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg dark:bg-gray-900 bg-gray-100"
            >
              {/* Info Card Title */}
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-blue-900 text-white py-1 px-2 rounded">
                  {info.title}
                </span>
              </h3>

              {/* Info Card Description */}
              <p className="mb-4">{info.description}</p>

              {/* Info Card Links */}
              {info.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
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
