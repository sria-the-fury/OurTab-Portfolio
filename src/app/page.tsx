import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Guide } from "@/components/Guide";
import { Changelog } from "@/components/Changelog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Guide />
      <Changelog />
      <Footer />
    </main>
  );
}
