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
import { WaveDivider } from "@/components/sections/WaveDivider";
import { Footer } from "@/components/sections/Footer";
import { LocalizedHead } from "@/components/seo/LocalizedHead";
import { HomeStructuredData } from "@/components/seo/HomeStructuredData";
import type { Lang } from "@/i18n/locales";

type IndexProps = {
  initialLocale?: Lang;
};

const Index = ({ initialLocale = "en" }: IndexProps) => {
  return (
    <I18nProvider locale={initialLocale} pageId="home">
      <div id="top" className="min-h-screen bg-sand text-adriatic">
        <LocalizedHead />
        <HomeStructuredData />
        <Header />
        <main>
          <Hero />
          <Tours />
          <Why />
          <Route />
          <WaveDivider
            backgroundColor="hsl(var(--sand))"
            backColor="hsl(var(--sea))"
            frontColor="hsl(var(--adriatic))"
          />
          <BBQ />
          <Evening />
          <PrivateSection />
          <Gallery />
          <Reviews />
          <FAQ />
          <FinalCTA />
        </main>
        <WaveDivider
          backgroundColor="hsl(var(--sand))"
          backColor="hsl(var(--sea))"
          frontColor="hsl(var(--adriatic))"
        />
        <Footer />
        <MobileBookingBar />
      </div>
    </I18nProvider>
  );
};

export default Index;
