"use client;";

import Image from "next/image";

type CompanyList = {
  key: string;
  name: string;
  description: string;
  personQuoted: string;
  logo: string;
  bgImage: string;
};

export function CompanyLister({
  companies,
}: {
  companies: CompanyList[];
}): import("react").JSX.Element {
  return (
    <div className="container mx-auto">
      {companies.map((company) => (
        <div
          key={company.key}
          className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible"
          style={{ backgroundImage: `url(${company.bgImage})` }}
        >
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src={company.logo}
                alt={`${company.name} Logo`}
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              {company.name}
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              {company.description} <br />
              <span className="font-bold italic">- {company.personQuoted}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
