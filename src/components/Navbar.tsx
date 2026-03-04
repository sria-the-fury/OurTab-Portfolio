
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        <div className="glass px-6 py-3 rounded-full flex items-center justify-between border-emerald-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-emerald-500/40">
          <Link href="/" className="text-2xl font-bold font-headline text-primary tracking-tight group">
            OurTab<span className="text-emerald-400 group-hover:text-teal-300 transition-colors">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors">Features</Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors">About</Link>
            <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors">Team</Link>
            <Link href="#guide" className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors">Guide</Link>
          </div>

          <Button asChild className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black px-6 font-semibold shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)]">
            <Link href="https://app.ourtab.online" target="_blank">Launch App</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
