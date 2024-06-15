import { GetStartedSection } from "./components/get-started-section";
import { Header } from "./components/header";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <GetStartedSection />
      </main>
    </>
  );
}
