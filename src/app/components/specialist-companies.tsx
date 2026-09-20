import Image from "next/image";
import Link from "next/link";

{
  /* 
    This component displays the specials on the about 44th page.
  */
}

export function SpecialistCards(): import("react").JSX.Element {
  return (
    <>
      {/* Specials Block */}
      <div className="container mx-auto">
        <div className="left-10">
          {/*
            This heading introduces the specialist companies of the 44th regiment.
          */}
          <h1 className="mb-6 text-3xl font-bold font-noto">
            The 44th Special Companies
          </h1>
          <p className="mb-6 text-1xl">
            As stated above, joining a special company in the 44th will give you
            more ways to experience Holdfast. We offer 3 specials and 3
            auxiliary companies. More information about our specials and
            auxiliaries below.
          </p>
        </div>
        {/* Skirmishers */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-[url(/media/images/regiment_photos/44th_skirms_photo.jpg)] border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/spec_skirmishers.png"
                alt="Skirmisher Company Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Skirmisher Company
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              Swift and deadly, the Light Infantry and Riflemen are the first on
              the battlefield. They harass the main force, hit fast and
              manoeuver, whittling down the numbers ready for the 44th Line to
              decimate the remaining enemy. The 44th Skirmisher Company offers
              tailored skirmisher events, alongside Skirmisher gameplay in
              select linebattles. With a bounty board, trophy hall and a weekly
              Skirmisher leaderboard, there's plenty here to get your teeth
              into. <br />
              <span className="bold italic">- 44th | Daddy Edge</span>
            </p>
          </div>
        </div>

        {/* Cavalry */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-[url(/media/images/regiment_photos/44th_cav_photo.jpg)] border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/spec_cavalry.png"
                alt="Cavalry Company Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Cavalry Company
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The 44th Regiment of Foot Cavalry is, without question, the finest
              special in the regiment—a perfect combination of aggression,
              discipline, skill and absolute battlefield dominance. Under the
              almighty reign of Skeps, the commander and creator of the 44th
              Cavalry, the unit cemented its place among the elite by taking
              down the 42nd Cav, a Top 3 Cavalry team, during the regiments
              FIRST ever Cav League—a result that speaks for itself. The 44th
              don't need excuses, gimmicks or endless backline support; they
              turn up, mount up and deliver. The Artillery can keep firing at
              everything except the enemy, the Skirmishers can keep hiding in
              the bushes, and the rest can argue over who's second best—the 44th
              Cavalry are already at the top.
              <br />
              <span className="bold italic">- 44th | Skeps</span>
            </p>
          </div>
        </div>

        {/* Artillery */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-[url(/media/images/regiment_photos/44th_arty_photo.jpg)] border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/spec_artillery.png"
                alt="Artillery Company Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Artillery Company
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The 44th Artillery Company is a formidable force on the
              battlefield, known for its precision, accuracy, and unwavering
              commitment to excellence in the regiment, making it a cornerstone
              of the 44th's excellence. They are skilled and well practiced
              cannoneers who are a laugh and also highly effective in combat.
              While the 44th is known for getting blown up in linebattles by
              enemy artillery, the Artillery Company knows how to give it back
              to the enemy.
              <br />
              <span className="bold italic">- 44th | Henderson</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
