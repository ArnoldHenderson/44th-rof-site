import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HeroCarousel } from "@/app/components/hero-carousel";

export default function Home() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">

        <div className="container mx-auto">
          <HeroCarousel />
        </div>

        <br /><br />
        <hr className="my-8 border-gray-300" />
        <br />

        <div className="container mx-auto mt-8">
          <div className="flex flex-wrap justify-center gap-4">

            <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4"><span className="bg-blue-600 text-white py-1 px-2 rounded">Join Our Discord</span></h3>
              <p className="mb-4">
                Join our Discord server to join the 44th to gain your nuts or look around for now, 
                or become a regiment representative if you are from another regiment.
              </p>
              <a href="https://discord.gg/44th" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join Discord
              </a>
            </div>
            
            <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4"><span className="bg-blue-600 text-white py-1 px-2 rounded">Follow Us on Social Media</span></h3>
              <p className="mb-4">
                We post funny clips not only from Holdfast but also from other servers we own for other games! 
                Please give these a watch as you will find them funny.
              </p>
              <a href="https://www.youtube.com/@44threg" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                YouTube
              </a>
              <a href="https://www.tiktok.com/@44thregofficial" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2">
                TikTok
              </a>
            </div>

          </div>
        </div>
      </main>
      <br /><br />

      <Footer />
    </>
  );
}
