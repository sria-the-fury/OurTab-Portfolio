"use client";

import { GlassCard } from "./GlassCard";
import { Smartphone, Share, MoreVertical, PlusSquare, Download } from "lucide-react";

export function Guide() {
  return (
    <section id="guide" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Installation <span className="text-gradient">Guide</span></h2>
          <p className="text-muted-foreground text-lg">
            Install OurTab as a Progressive Web App (PWA) for a native mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Android Section */}
          <GlassCard className="border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Android</h3>
            </div>
            
            <ol className="space-y-6 text-muted-foreground">
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
                <p>Open <span className="font-semibold text-foreground">Google Chrome</span> and navigate to <span className="text-primary underline">app.ourtab.online</span></p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
                <p>Tap the <span className="inline-flex items-center translate-y-1"><MoreVertical className="w-4 h-4" /></span> menu icon in the top right corner.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                <p>Select <span className="font-semibold text-foreground">"Install app"</span> or <span className="font-semibold text-foreground">"Add to Home screen"</span>.</p>
              </li>
            </ol>
          </GlassCard>

          {/* iOS Section */}
          <GlassCard className="border-accent/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">iOS (iPhone/iPad)</h3>
            </div>
            
            <ol className="space-y-6 text-muted-foreground">
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
                <p>Open <span className="font-semibold text-foreground">Safari</span> and navigate to <span className="text-primary underline">app.ourtab.online</span></p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
                <p>Tap the <span className="inline-flex items-center translate-y-1"><Share className="w-4 h-4 text-blue-500" /></span> Share button at the bottom center.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                <p>Scroll down and tap <span className="font-semibold text-foreground">"Add to Home Screen"</span> <span className="inline-flex items-center translate-y-1"><PlusSquare className="w-4 h-4" /></span>.</p>
              </li>
            </ol>
          </GlassCard>
        </div>

        <div className="mt-12 text-center">
          <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full border-primary/5 text-sm text-muted-foreground">
            <Download className="w-4 h-4 animate-bounce" />
            Once installed, you can access OurTab directly from your home screen like a native app.
          </div>
        </div>
      </div>
    </section>
  );
}
