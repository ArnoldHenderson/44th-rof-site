"use client;";

import Image from "next/image";
import type { Company, CompanySectionHeader } from "@/types/content";

/**
 * Company List containing an individual company card for each company.
 * Each company card displays the company's logo, name, description, and the person quoted with an image in the background.
 * @component CompanyLister
 * @description Renders a list of company cards with their respective information from a JSON file.
 * @returns {JSX.Element} The rendered company list component.
 * @param {CompanyList[]} companies - Array of company objects to display.
 * @param {CompanySectionHeader} companySectionInfo - Information for the section header and description.
 * @param {string} [className] - Optional additional class names for the container div.
 */

export default function CompanyLister({
  companies,
  companySectionInfo,
  className = "",
}: {
  companies: Company[];
  companySectionInfo: CompanySectionHeader;
  className?: string;
}): import("react").JSX.Element {
  return (
    <>
      <div className={`container mx-auto ${className}`}>
        <h2 className="text-3xl font-bold mb-6">
          {companySectionInfo.sectionHeader}
        </h2>
        <p className="mb-8">{companySectionInfo.sectionDescription}</p>

        {companies.map((company) => (
          <div
            key={company.key}
            className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible"
            style={{ backgroundImage: `url(${company.bgImage})` }}
          >
            <div className="hidden md:flex justify-center flex-1 relative z-10">
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

            <div className="flex flex-col gap-4 flex-1 relative z-10 p-2">
              <h3 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
                {company.name}
              </h3>
              {/* Company Description and Person Quoted */}
              <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
                {company.description} <br />
                <span className="font-bold italic">
                  - {company.personQuoted}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
