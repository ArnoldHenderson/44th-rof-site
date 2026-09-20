import Image from "next/image";

export function AuxiliaryCompanies(): import("react").JSX.Element {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-6 left-10">
          {/*
            This heading introduces the auxiliary companies of the 44th regiment.
          */}
          <h1 className="mb-6 text-3xl font-bold font-noto">
            Auxiliary Companies
          </h1>
        </div>
        <div>
          <p>
            The 44th auxiliary companies provide additional ways to play
            Holdfast with the regiment. Whether you are interested in
            Competitive Naval Battles, Competitive Melee Group fights and
            training, or a field Medic. The auxiliary companies have got your
            back!
          </p>
        </div>
        {/* 
          Auxiliary Companies Block 
        */}
        {/* 44th Royal Navy / 44th Rum Rats */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-gray-900 border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/aux_navy.png"
                alt="Royal Navy Auxiliary Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Royal Navy / 44th Rum Rats
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The 44th Royal Navy and the 44th Rum Rats provide unique
              experiences for those looking to engage in naval battles or enjoy
              a more relaxed, social aspect of the regiment. The Royal Navy
              focuses on competitive naval engagements, while the Rum Rats offer
              camaraderie and support for all members. (Replace This with more
              detailed information about the auxiliary) <br />
              <span className="bold italic">- 44th | John Doe</span>
            </p>
          </div>
        </div>
        {/* 44th Royal Guard */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-gray-900 border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/aux_guard.png"
                alt="Royal Guard Auxiliary Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Royal Guard
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The 44th Royal Guard was founded on members who derived from the
              regiment, who enjoyed the success of winning in close combat style
              fighting. Their expert melee skills, have held fast in
              unprecedented group fights and holdfast events. Their commitment
              to melee excellence is why the 44th Royal guard is on Top! The
              44th Royal Guard attends many group fights and holdfast events,
              showcasing their exceptional melee skills and dedication to
              excellence.
              <br />
              <span className="bold italic">- 44th | JoshA</span>
            </p>
          </div>
        </div>
        {/* 44th Royal Medical Corps */}
        <div className="mb-6 flex items-center justify-center min-h-96 bg-cover bg-center bg-gray-900 border-2 border-gray-300 dark:border-gray-600 relative before:absolute before:inset-0 before:bg-linear-to-l before:from-black/30 before:pointer-events-none overflow-visible">
          <div className="flex justify-center flex-1 relative z-10">
            <div className="relative w-80 h-80">
              <Image
                src="/media/images/icons/specialist/aux_medical.png"
                alt="Royal Medical Auxiliary Logo"
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-10">
            <h1 className="text-3xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md font-ubuntu">
              The 44th Royal Medical Corps
            </h1>
            <p className="text-1xl text-white text bg-black/60 p-6 rounded-lg backdrop-blur-md">
              The surgeon class is the dedicated medic role in Holdfast which
              plays a vital role in our linebattle events - a line without a
              medic has no way of healing injured men and will be broken much
              quicker. The role of the surgeon in linebattle events is more
              passive than line infantry but is still capable of offensive
              action! The Medic Corps has 3 Ranks to work your way up in
              starting off with Nurse. (The backbone of the corps) Doctor. (The
              beating heart of the medics) Professor. The Officer role in charge
              of administration and keeping the other ranks in line. A good
              medic will prioritize our line Leader and troops the and healing
              the rest of the team if there's a chance. We have 7 different
              medals to achieve showing valor in the field of battle.
              <br />
              <span className="bold italic">- 44th | Matty10thDVN</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
