import { Footer } from "./components/footer";
import { FrequentlyQuestions } from "./components/frequently-questions";
import { GetStartedSection } from "./components/get-started-section";
import { Header } from "./components/header";
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
