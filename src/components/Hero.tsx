
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/10 text-primary text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              Empowering Household Collaboration
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-bold ml-4">
              Tab comes from Tabular
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
            Seamlessly <br />
            <span className="text-gradient">Manage</span> Your <br />
            Home Life.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            OurTab brings financial order to shared living. A professional workspace designed for houses who value clarity, security, and simplicity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 h-14 text-lg" asChild>
              <Link href="https://app.ourtab.online">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full glass border-white/30 h-14 text-lg px-8" asChild>
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="relative z-10 animate-float">
            <div className="glass p-4 rounded-[2.5rem] shadow-2xl rotate-3">
              <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden">
                <Image
                  src={mockupImage?.imageUrl || ""}
                  alt="App Mockup"
                  fill
                  className="object-cover"
                  data-ai-hint="mobile dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
