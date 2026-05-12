import { About } from "@/components/About";
import { Admission } from "@/components/Admission";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { Environment } from "@/components/Environment";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Safety } from "@/components/Safety";
import { Teachers } from "@/components/Teachers";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Environment />
      <Courses />
      <Safety />
      <Teachers />
      <Admission />
      <Contact />
      <Footer />
    </main>
  );
}
