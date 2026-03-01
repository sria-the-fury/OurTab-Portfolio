import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Guide } from "@/components/Guide";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Features />
      <Guide />
      <Footer />
    </main>
  );
}
