"use client";

import { GlassCard } from "./GlassCard";
import { CheckCircle2, History, Sparkles, LayoutPanelLeft, UserCircle2, Zap } from "lucide-react";

interface LogEntry {
    version: string;
    date: string;
    title: string;
    description: string;
    icon: any;
    color: string;
    features: string[];
}

const changelog: LogEntry[] = [
    {
        version: "1.3.0",
        date: "March 2026",
        title: "Unified Invites & Social Connectivity",
        description: "Streamlined household management with a unified invitation flow and enhanced social sharing features.",
        icon: Zap,
        color: "text-amber-400",
        features: [
            "Unified Invitation Flow: Accept or decline house invites directly from your profile.",
            "Messenger Integration: Replaced legacy social icons with Messenger for accurate sharing.",
            "Real-time Meal History: Persistent logging and timezone fixes for reliable tracking.",
            "Notification Cleanup: Automatic clearing of processed join requests.",
            "QR & Link Sharing: One-tap household joining via the new landing page."
        ]
    },
    {
        version: "1.2.0",
        date: "March 2026",
        title: "Premium Redesign & Inline Actions",
        description: "A ground-up visual overhaul of the web platform, bringing a modern glassmorphism aesthetic and faster workflows.",
        icon: Sparkles,
        color: "text-purple-400",
        features: [
            "Complete visual redesign with deep emerald and teal gradient themes.",
            "New 'App Gallery' showcase with snap-scrolling 3D glass cards.",
            "Inline Action Buttons: Approve/Reject requests directly from notifications.",
            "Fixed iOS PDF Date Parsing: Reports now generate flawlessly on Apple devices."
        ]
    },
    {
        version: "1.1.0",
        date: "February 2026",
        title: "Categories, Avatars & Smart Settle",
        description: "Enhanced expense tracking features and a major upgrade to push notifications with dynamic user context.",
        icon: UserCircle2,
        color: "text-cyan-400",
        features: [
            "Dynamic Notification Icons: Sender's avatar now appears in push alerts instead of a generic app icon.",
            "Expense Categorization: Added explicit separation for 'Utilities' vs 'Other'.",
            "Smart Settlements Algorithm: Minimizes transaction count when calculating who owes whom.",
            "Fixed duplicate notifications issue across Android and iOS."
        ]
    },
    {
        version: "1.0.0",
        date: "January 2026",
        title: "Initial Launch",
        description: "The core release of OurTab household manager.",
        icon: LayoutPanelLeft,
        color: "text-emerald-400",
        features: [
            "Real-time expense splitting and meal tracking.",
            "Manager role system with approval workflows.",
            "Interactive shared Buy List.",
            "PDF Exporting for monthly summaries."
        ]
    }
];

export function Changelog() {
    return (
        <section id="changelog" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 font-medium text-sm mb-6">
                        <History className="w-4 h-4" /> Latest Updates
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        What's <span className="text-gradient">New</span>
                    </h2>
                    <p className="text-muted-foreground text-xl leading-relaxed font-light">
                        We are constantly shipping improvements to make managing your household smoother.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-4 md:before:ml-[2.25rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {changelog.map((log, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            {/* Timeline dot */}
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#09090b] bg-white/10 group-hover:bg-emerald-500/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 transition-colors duration-500 z-10" />

                            {/* Content Card */}
                            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
                                <GlassCard className="p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-semibold tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                                            v{log.version}
                                        </span>
                                        <span className="text-sm text-muted-foreground">{log.date}</span>
                                    </div>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`p-3 rounded-xl bg-white/5 ${log.color} shrink-0`}>
                                            <log.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{log.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {log.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {log.features.map((feature, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground/90">
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500/50" />
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-white/10 text-muted-foreground text-sm hover:text-white transition-colors cursor-pointer group">
                        <Zap className="w-4 h-4 group-hover:text-emerald-400 transition-colors" /> Over 100+ commits and continuous updates.
                    </div>
                </div>
            </div>
        </section>
    );
}
