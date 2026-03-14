
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const mockupImage = PlaceHolderImages.find(img => img.id === 'app-mockup');

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[30%] h-[30%] bg-cyan-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-emerald-500/20 text-emerald-400 text-sm font-semibold shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Empowering Household Collaboration
            </div>
            <p className="text-[12px] uppercase tracking-[0.25em] text-muted-foreground/70 font-bold ml-4">
              Tab comes from Tabular
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
            Seamlessly <br />
            <span className="text-gradient">Manage</span> Your <br />
            Home Life.
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
            Originally designed as a premium mealing system for Bangladeshi Bachelors, OurTab now brings professional-grade financial order and harmony to shared living everywhere.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-8 h-14 text-lg font-semibold shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-1" asChild>
              <Link href="https://app.ourtab.online" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full glass border-white/10 hover:border-white/20 hover:bg-white/5 h-14 text-lg px-8 transition-all duration-300 hover:-translate-y-1" asChild>
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="relative z-10 animate-float">
            <div className="glass p-2 rounded-[2.5rem] shadow-2xl rotate-3 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
              <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 pointer-events-none" />
                <Image
                  src="/images/dashboard-mockup.png"
                  alt="OurTab App Dashboard Mockup showing household expenses and meal system"
                  fill
                  className="object-cover"
                  data-ai-hint="mobile dashboard"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
