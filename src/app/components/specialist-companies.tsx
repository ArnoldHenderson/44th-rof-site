import Image from "next/image";
import Link from "next/link";

export function SpecialistCards() {
  return (
    <>
      {/* Specials Block */}
      <div className="container mx-auto">
        {/* Skirmishers */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-[url(/media/images/regiment_photos/44th_skirms_photo.jpg)] border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:to-transparent dark:before:from-black/80 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 w-80 relative z-10">
            <Image
              src="/media/images/icons/specialist/spec_skirmishers.png"
              alt="Skirmisher Company Logo"
              width={316}
              height={316}
              className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            />
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
          <div className="flex justify-center flex-1 w-80 relative z-10">
            <Image
              src="/media/images/icons/specialist/spec_cavalry.png"
              alt="Cavalry Company Logo"
              width={316}
              height={316}
              className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
            />
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
          <div className="flex justify-center flex-1 w-80 relative z-10">
            <Image
              src="/media/images/icons/specialist/spec_artillery.png"
              alt="Artillery Company Logo"
              width={316}
              height={316}
              className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Artillery Company
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The 44th Artillery was a proud formation forged in the turmoil of
              the Napoleonic Wars, where discipline, courage, and mastery of the
              gun determined the fate of the battlefield. Its artillerymen stood
              beside their cannon under the thunder of enemy fire, loading and
              firing with speed and precision while supporting the infantry and
              cavalry around them. Through smoke, shot, and confusion, the men
              of the 44th were expected to hold their ground and serve their
              guns without hesitation. Their strength lay not only in the
              destructive power of their artillery, but in the courage,
              brotherhood, and unwavering discipline of the soldiers who served
              it. <br />
              <span className="bold italic">- 44th | JoshA</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
