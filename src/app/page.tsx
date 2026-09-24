import { Header, Footer } from "@/app/components/header-footer";
import HeroCarousel from "@/app/components/hero-carousel";
import InfoCardsCreator from "@/app/components/info-cards-creator";

// JSON Data for info cards
import infoCardsData from "@/data/InfoCards/info-cards.json";

{
  /* Home page, add more elements when needed */
}
export default function Home() {
  return (
    <>
      <Header />

      {/* Main Content Section*/}
      <main className="site-main blurred-glow-bg grow p-4 font-noto">
        {/* Hero Carousel Section */}
        <div className="container mx-auto">
          <HeroCarousel />
        </div>

        <br />
        <br />
        <hr className="my-8 border-gray-300" />
        <br />

        {/* Info Cards Section */}
        <div className="container mx-auto mt-8">
          <InfoCardsCreator infoCards={infoCardsData} />
        </div>

        <br />
        <br />
      </main>

      <Footer />
    </>
  );
}
