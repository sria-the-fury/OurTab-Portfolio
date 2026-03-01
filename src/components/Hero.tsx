
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/10 text-primary text-sm font-semibold">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
            Empowering Digital Collaboration
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
            Seamlessly <br />
            <span className="text-gradient">Organize</span> Your <br />
            Digital World.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            OurTab Digital brings order to chaos. A professional workspace designed for teams who value clarity, speed, and premium aesthetics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 h-14 text-lg" asChild>
              <Link href="https://app.ourtab.online">
                Start for Free <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full glass border-white/30 h-14 text-lg px-8">
              <PlayCircle className="mr-2 w-5 h-5" /> View Demo
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
          
          {/* Decorative floating glass element */}
          <div className="absolute -top-12 -right-12 z-20 glass p-6 rounded-3xl animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold">AI</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Copy Generated</p>
                <p className="text-sm font-bold">100% Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
