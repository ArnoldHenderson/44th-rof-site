import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HeroCarousel } from "@/app/components/hero-carousel";
import { InfoCards } from "@/app/components/info-cards";

{
  /* Home page, add more elements when needed */
}
export default function Home() {
  return (
    <>
      <Header />

      <main className="site-main grow p-4 font-noto">
        <div className="container mx-auto">
          <HeroCarousel />
        </div>

        <br />
        <br />
        <hr className="my-8 border-gray-300" />
        <br />

        <div className="container mx-auto mt-8">
          <InfoCards />
        </div>

        <br />
        <br />
      </main>

      <Footer />
    </>
  );
}
