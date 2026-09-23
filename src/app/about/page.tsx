"use client";

import Image from "next/image";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { CompanyLister } from "@/app/components/company-lister";
import { InfoCardsCreator } from "@/app/components/info-cards-creator";
import { RegimentEvents } from "@/app/components/regiment-events";

// JSON Data Imports
import specialistCompanies from "@/data/Companies/specialist-companies.json";
import auxiliaryCompanies from "@/data/Companies/auxiliary-companies.json";
import infoCards from "@/data/InfoCards/info-cards.json";

export default function About() {
  return (
    <>
      <Header />

      {/* Main Content Section */}
      <main className="site-main blurred-glow-bg grow p-4 font-noto">
        <div className="container mx-auto">
          <div className="mb-6 left-10">
            {/* About Section */}
            <h1 className="mb-6 text-3xl font-bold font-noto">
              About the 44th
            </h1>
            <div className="mb-6 text-1xl">
              <p>
                The 44th has always been a chaotic and casual regiment for the
                game &quot;Holdfast: Nations at War&quot; we have always put fun
                first above all.
              </p>
              <p>
                Started by General Ted in 2022 the regiment has grown to be the
                most popular casual regiment in Holdfast, with our loud and
                lively lads and no mandatory attendance, you are free to come
                and go as you feel and join back on the fun! We also offer
                specialist companies you can join that offer new experiences in
                the regiment. We began to gain traction on social media through
                TikToks and having a blast which boosted our numbers, at one
                point we brought over 80 players to an event which is a record
                for regiment attendance.
              </p>
              <p>
                After a while we saw the NA side of the regiment spike up in
                activity after a few members the main one being TheRandomKC who
                pioneered through the ranks. KC would later be put in charge of
                the regiment following Gen. Ted&apos;s departure after he joined
                Anvil Game Studios as a Community Manager.
              </p>
              <p>
                The regiment is now in charge of Arnold Henderson who is
                maintaining the ways of the old 44th mixed with modern Holdfast
                and keeping the{" "}
                <b>
                  <i>44th on top!</i>
                </b>
              </p>
              <p className="text-yellow-400 font-bold">
                Join us today to help keep the 44th on Top!
              </p>
              <Image
                src="/media/images/branding/logo.svg"
                alt="44th Regiment of Foot Logo"
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Regiment Events Section */}
        <RegimentEvents />

        <hr className="my-8 border-gray-300" />

        {/* Special Companies Section */}
        <CompanyLister
          companies={specialistCompanies.companies}
          companySectionInfo={specialistCompanies.companySectionInfo}
        />

        <br />
        <hr className="mb-8 border-gray-300" />

        {/* Auxiliary Companies Section */}
        <CompanyLister
          companies={auxiliaryCompanies.companies}
          companySectionInfo={auxiliaryCompanies.companySectionInfo}
        />

        <br />
        <hr className="mb-8 border-gray-300" />
        <br />

        {/* Information Cards Section */}
        <div className="container mx-auto mt-8">
          <InfoCardsCreator infoCards={infoCards} />
        </div>
      </main>

      <Footer />
    </>
  );
}
