import { SiteHeader, SiteFooter } from "@/app/components/site-header-footer";
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
      <SiteHeader />

      <main className="site-main blurred-glow-bg grow p-4 font-noto">
        <div className="container mx-auto">
          <HeroCarousel />
        </div>

        <hr />

        <div className="container mx-auto mt-8">
          <InfoCardsCreator infoCards={infoCardsData} />
        </div>
        <br />
      </main>

      <SiteFooter />
    </>
  );
}
