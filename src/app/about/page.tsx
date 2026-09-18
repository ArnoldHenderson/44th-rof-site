import Image from "next/image";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { SpecialistCards } from "@/app/components/specialist-companies";
import { InfoCards } from "@/app/components/info-cards";
import { NextEventLink } from "@/app/components/next-event-link";

export default function About() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">
        <div className="container mx-auto">
          <div className="mb-6 left-10">
            <h1 className="mb-6 text-3xl font-bold font-noto">
              About the 44th
            </h1>

            <p className="mb-6 text-1xl">
              The 44th has always been a chaotic and casual regiment for the
              game "Holdfast: Nations at War" we have always put fun first above
              all.
              <br />
              <br />
              Started by General Ted in 2022 the regiment has grown to be the
              most popular casual regiment in Holdfast, with our loud and lively
              lads and no mandatory attendance, you are free to come and go as
              you feel and join back on the fun! We also offer specialist
              companies you can join that offer new experiences in the regiment.
              We began to gain traction on social media through TikToks and
              having a blast which boosted our numbers, at one point we brought
              over 80 players to an event which is a record for regiment
              attendance.
              <br />
              <br />
              After a while we saw the NA side of the regiment spike up in
              activity after a few members the main one being TheRandomKC who
              pioneered through the ranks. KC would later be put in charge of
              the regiment following Gen. Ted's departure after he joined Anvil
              Game Studios as a Community Manager.
              <br />
              <br />
              The regiment is now in charge of Arnold Henderson who is
              maintaining the ways of the old 44th mixed with modern Holdfast
              and keeping the{" "}
              <b>
                <i>44th on top!</i>
              </b>
            </p>
            <p className="mb-6 text-2xl text-yellow-400 font-bold">
              Join us today to help keep the 44th on Top!
            </p>
            <Image
              src="media/images/branding/logo.svg"
              alt="44th Regiment of Foot Logo"
              width={72}
              height={72}
            />
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="container mx-auto">
          <div className="mb-6 left-10">
            <h1 className="mb-6 text-3xl font-bold font-noto">
              Our Regiment Events
            </h1>
            <div className="mb-6 text-1xl">
              <p>
                Our regiment attends events that usually consist of an hour of
                fun and casual gameplay. We have events every day in our main EU
                side as well as regular events for our NA side and a select few
                events for OCE. These events will be announced a few hours
                before the event starts.
              </p>
              <br />
              <p>
                We also do regular training sessions throughout the week on our
                EU side to help our members improve their skills and teamwork.
                The types of training will vary, they could be drills, line
                leader training, melee practice, or fun.
              </p>
              <br />

              {/* Opens the Next event popup on this page */}
              <NextEventLink />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="container mx-auto">
          <div className="mb-6 left-10">
            <h1 className="mb-6 text-3xl font-bold font-noto">
              The 44th Special Companies
            </h1>
            <p className="mb-6 text-1xl">
              As stated above, joining a special company in the 44th will give
              you more ways to experience Holdfast. We offer 3 specials and 3
              auxiliary companies. More information about our specials and
              auxiliaries below.
            </p>
          </div>
        </div>

        <SpecialistCards />

        <br />
        <hr className="mb-8 border-gray-300" />
        <br />

        <div className="container mx-auto mt-8">
          <InfoCards />
        </div>
      </main>

      <Footer />
    </>
  );
}
