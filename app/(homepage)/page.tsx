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
      </main>
    </>
  );
}
