import {
  CaseStudy,
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  FoundersStory,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Slider
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <FoundersStory />
      <OffersSection />
      <FinancilaFreedom />
      <CaseStudy />
      <FinancialFuture />
      {/* <Slider /> */}
       {/* <IntroSection /> */}
      <JoinSection />
      <FAQ />
    </main>
  );
}
