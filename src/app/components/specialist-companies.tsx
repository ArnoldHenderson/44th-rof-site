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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga,
              illo deleniti dolorem nesciunt ex iure, consectetur repellat, nam
              ipsum maiores blanditiis quae ea quasi cumque ab facilis omnis
              dolor facere culpa. Minus soluta cupiditate iusto amet fugiat
              enim, omnis eos eveniet minima incidunt eius, aliquid facilis
              distinctio sequi nam et eligendi quod repellendus sit. Quia quis
              impedit amet asperiores molestiae laborum cum eius. Beatae
              explicabo possimus labore dicta! Placeat dolorem nihil excepturi
              minus et consectetur, inventore vero cupiditate sit odit veniam
              omnis corrupti deserunt hic aliquid ipsam, doloremque
              exercitationem ullam quam dicta est laudantium sequi sed! Quia,
              eos blanditiis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga,
              illo deleniti dolorem nesciunt ex iure, consectetur repellat, nam
              ipsum maiores blanditiis quae ea quasi cumque ab facilis omnis
              dolor facere culpa. Minus soluta cupiditate iusto amet fugiat
              enim, omnis eos eveniet minima incidunt eius, aliquid facilis
              distinctio sequi nam et eligendi quod repellendus sit. Quia quis
              impedit amet asperiores molestiae laborum cum eius. Beatae
              explicabo possimus labore dicta! Placeat dolorem nihil excepturi
              minus et consectetur, inventore vero cupiditate sit odit veniam
              omnis corrupti deserunt hic aliquid ipsam, doloremque
              exercitationem ullam quam dicta est laudantium sequi sed! Quia,
              eos blanditiis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga,
              illo deleniti dolorem nesciunt ex iure, consectetur repellat, nam
              ipsum maiores blanditiis quae ea quasi cumque ab facilis omnis
              dolor facere culpa. Minus soluta cupiditate iusto amet fugiat
              enim, omnis eos eveniet minima incidunt eius, aliquid facilis
              distinctio sequi nam et eligendi quod repellendus sit. Quia quis
              impedit amet asperiores molestiae laborum cum eius. Beatae
              explicabo possimus labore dicta! Placeat dolorem nihil excepturi
              minus et consectetur, inventore vero cupiditate sit odit veniam
              omnis corrupti deserunt hic aliquid ipsam, doloremque
              exercitationem ullam quam dicta est laudantium sequi sed! Quia,
              eos blanditiis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
