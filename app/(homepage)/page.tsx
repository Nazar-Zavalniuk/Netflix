import { Footer } from "@/common/components/footer";
import { Header } from "@/common/components/header";

import { FrequentlyQuestions } from "./components/frequently-questions";
import { GetStartedSection } from "./components/get-started-section";
import { ServicesSection } from "./components/services-section";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <GetStartedSection />
        <ServicesSection />
        <FrequentlyQuestions />
      </main>
      <Footer />
    </>
  );
}
