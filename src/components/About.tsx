
"use client";

import { GlassCard } from "./GlassCard";
import { Sparkles, Shield, Zap } from "lucide-react";

export function About() {
    const values = [
        {
            icon: Sparkles,
            title: "Clarity",
            description: "Every transaction and meal choice, accounted for in real-time. No more 'who owes what' guessing games.",
            color: "text-emerald-400",
        },
        {
            icon: Shield,
            title: "Security",
            description: "Private, permission-based house management. Your data is protected by Firebase-backed security.",
            color: "text-cyan-400",
        },
        {
            icon: Zap,
            title: "Simplicity",
            description: "A sleek, minimal interface designed for speed and peace of mind. Built for busy modern households.",
            color: "text-teal-400",
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Our <span className="text-gradient">Story</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        OurTab was born from the chaos of shared living. We believe that your home should be your sanctuary, not a source of financial stress. We've built a professional-grade workspace for the most important organization in your life: <span className="text-white font-medium">your home.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <GlassCard
                            key={idx}
                            className="border-white/5 hover:border-emerald-500/30 transition-all duration-500 group bg-black/40 backdrop-blur-xl shadow-lg hover:-translate-y-2"
                        >
                            <div className="mb-6">
                                <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-emerald-500/20 group-hover:scale-110 transition-all duration-500 w-fit ${value.color}`}>
                                    <value.icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                {value.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
