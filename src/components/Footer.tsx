
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary -z-10 translate-y-1/2 rounded-full blur-[150px] opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center space-y-8 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to <span className="text-gradient">Elevate</span> Your <br className="hidden md:block" /> Digital Workspace?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals already using OurTab to streamline their productivity.
          </p>
          <div className="flex justify-center pt-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-12 h-16 text-xl shadow-xl shadow-primary/20" asChild>
              <Link href="https://app.ourtab.online">Get Started for Free</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-primary/10 gap-8">
          <div className="text-2xl font-bold font-headline text-primary">
            OurTab<span className="text-accent">.</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OurTab Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
