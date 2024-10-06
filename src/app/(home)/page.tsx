import {
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
      <FinancialFuture />
      {/* <Slider /> */}
       {/* <IntroSection /> */}
      <JoinSection />
      <FAQ />
    </main>
  );
}
