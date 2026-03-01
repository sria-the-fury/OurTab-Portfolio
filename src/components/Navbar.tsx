
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        <div className="glass px-6 py-3 rounded-full flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-headline text-primary tracking-tight">
            OurTab<span className="text-accent">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</Link>
            <Link href="#guide" className="text-sm font-medium hover:text-accent transition-colors">Guide</Link>
          </div>

          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-6">
            <Link href="https://app.ourtab.online" target="_blank">Launch App</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
