import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { FocusStrip } from "@/components/FocusStrip";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FocusStrip />
        <SelectedWork />
        <EngineeringApproach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
