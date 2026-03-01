
"use client";

import { useState } from "react";
import { generateMarketingCopy, GenerateMarketingCopyOutput } from "@/ai/flows/generate-marketing-copy-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "./GlassCard";
import { Sparkles, Loader2, Share2, Type, Megaphone } from "lucide-react";

export function MarketingTool() {
  const [url, setUrl] = useState("https://app.ourtab.online");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateMarketingCopyOutput | null>(null);

  async function handleGenerate() {
    if (!url) return;
    setLoading(true);
    try {
      const output = await generateMarketingCopy({ appUrl: url });
      setResult(output);
    } catch (error) {
      console.error("Generation failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="marketing-tool" className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="text-gradient">Content Engine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of OurTab's integrated AI. Generate high-converting copy specifically tuned for your application.
          </p>
        </div>

        <GlassCard className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter your app URL (e.g. https://myapp.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12 bg-white/50 border-white/30 focus:ring-accent"
              />
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={loading}
              className="h-12 px-8 bg-primary hover:bg-primary/90 transition-all font-semibold"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
              {loading ? "Analyzing..." : "Generate Magic"}
            </Button>
          </div>
        </GlassCard>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <GlassCard className="flex flex-col gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 w-fit">
                <Type className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Headline</h4>
                <p className="text-lg leading-snug">{result.headline}</p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col gap-4">
              <div className="p-3 rounded-2xl bg-accent/10 w-fit">
                <Megaphone className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-accent mb-2">Description</h4>
                <p className="text-base leading-relaxed text-muted-foreground">{result.description}</p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 w-fit">
                <Share2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Call to Action</h4>
                <p className="text-lg font-semibold">{result.callToAction}</p>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
