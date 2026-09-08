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
              <h3 className="text-xl font-bold mb-4">Join Our Discord</h3>
              <p className="mb-4">
                Join our Discord server to join the 44th to gain your nuts or look around for now, 
                or become a regiment representative if you are from another regiment.
              </p>
              <a href="https://discord.gg/your-discord-link" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join Discord
              </a>
            </div>
            
            <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-surface p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Follow Us on Social Media</h3>
              <p className="mb-4">
                We post funny clips not only from Holdfast but also from other servers we own for other games! 
                Please give these a watch as you will find them funny.
              </p>
              <a href="https://discord.gg/your-discord-link" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                YouTube
              </a>
              <a href="https://discord.gg/your-discord-link" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2">
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
