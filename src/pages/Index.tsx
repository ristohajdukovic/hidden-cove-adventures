import { I18nProvider } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Hero } from "@/components/sections/Hero";
import { Tours } from "@/components/sections/Tours";
import { Why } from "@/components/sections/Why";
import { Route } from "@/components/sections/Route";
import { BBQ } from "@/components/sections/BBQ";
import { Evening } from "@/components/sections/Evening";
import { PrivateSection } from "@/components/sections/PrivateSection";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-sand text-adriatic">
        <Header />
        <main>
          <Hero />
          <Tours />
          <Why />
          <Route />
          <BBQ />
          <Evening />
          <PrivateSection />
          <Gallery />
          <Reviews />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileBookingBar />
      </div>
    </I18nProvider>
  );
};

export default Index;
