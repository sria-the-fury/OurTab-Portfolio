
"use client";

import { GlassCard } from "./GlassCard";
import { Zap, Layout, Smartphone, Shield, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Your tabs and workspaces are synchronized across all devices in real-time with zero latency.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Layers,
    title: "Workspace Layers",
    description: "Organize projects into distinct visual layers, keeping your work and personal life perfectly separated.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    description: "Automatically refine your marketing headlines and descriptions with our built-in Gemini-powered tool.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption ensures that your shared tabs and collaboration notes remain strictly confidential.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Globe,
    title: "Global Share",
    description: "Share your curated tabs and resources with a single link, accessible from any browser globally.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    icon: Smartphone,
    title: "Mobile Native",
    description: "A premium mobile experience that feels just as powerful as the desktop dashboard.",
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

import { Sparkles } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for <span className="text-gradient">Performance</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every feature is crafted with a focus on speed, reliability, and visual excellence. Experience the future of tab management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="group hover:-translate-y-2 transition-all duration-300">
              <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors duration-300 ${feature.bg} group-hover:bg-primary group-hover:text-white`}>
                <feature.icon className={`w-8 h-8 ${feature.color} group-hover:text-white`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
