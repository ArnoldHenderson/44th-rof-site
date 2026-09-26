import HeroCarousel from "@/app/components/hero-carousel";
import InfoCardsCreator from "@/app/components/info-cards-creator";

import infoCardsData from "@/data/InfoCards/info-cards.json";

/**
 * Home page, add more elements when needed.
 * @module HomePage
 */

export default function Home() {
  return (
    <>
      <main className="site-main blurred-glow-bg grow p-4 font-noto">
        <div className="container mx-auto">
          <HeroCarousel />
          <hr />
          <InfoCardsCreator infoCards={infoCardsData} />
        </div>
        <br />
      </main>
    </>
  );
}
