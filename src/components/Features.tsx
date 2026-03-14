
"use client";

import Image from "next/image";
import { GlassCard } from "./GlassCard";
import {
  ShieldCheck,
  Home,
  BarChart3,
  ShoppingCart,
  BellRing,
  CheckCircle2,
  Sparkles,
  PieChart,
  Users,
  Lock,
  Zap,
  Clock
} from "lucide-react";

const featureGroups = [
  {
    title: "Authentication & Security",
    emoji: "🔐",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: [
      "Google Sign-In via Firebase Authentication.",
      "Protected Routes — unauthenticated users are redirected to the login page.",
      "Persistent Sessions across page refreshes.",
      "Permission-based Access — only house members can view expenses, and only owners can edit them within a 48-hour window."
    ]
  },
  {
    title: "House Management",
    emoji: "🏠",
    icon: Home,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    items: [
      "Named Households — create or join a house via invite.",
      "Role System — Managers can update member settings (Rent, Role) and approve requests.",
      "Manager Promotion — dynamic role switching; if a non-creator manager promotes someone else, they revert to member status.",
      "Meal Management — toggle \"Meals On/Off\" with a manager approval flow.",
      "Fund Deposits — members can deposit funds into the house account requiring manager verification.",
      "Collaborative Deletion — house deletion requires approval from all members."
    ]
  },
  {
    title: "Financial Dashboard",
    emoji: "📊",
    icon: BarChart3,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: [
      "Real-time Overview — total house expenses vs. your personal monthly spending.",
      "Smart Settlements — automated calculation of who owes whom, optimized to minimize transaction count.",
      "Expense History — browse recent expenses or navigate through previous months.",
      "Currency Support — configurable house currency ($, ₹, £, etc.).",
      "PDF Export — generate professional expense reports with one click (via jsPDF)."
    ]
  },
  {
    title: "Shopping & Expenses",
    emoji: "🧾",
    icon: ShoppingCart,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: [
      "Multi-Contributor Splitting — split bills by absolute amounts or percentages.",
      "Shortcut Actions — \"I Pay All\" or \"Split Equally\" for rapid entry.",
      "Interactive Buy List — shared list with auto-capitalization and check-off history.",
      "✨ Smart Auto-Mark — automated ticking of items when expenses are added.",
      "Cleanup Automation — completed items auto-delete after 12 hours."
    ]
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black/40">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-emerald-500/5 blur-[150px] -translate-y-1/2 pointer-events-none" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Premium <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-light">
            Meal system is for Bangladeshi Bachelors. OurTab is a complete household management suite designed for transparency and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featureGroups.map((group, idx) => (
            <GlassCard key={idx} className="flex flex-col h-full border-white/5 hover:border-emerald-500/30 transition-all duration-500 group bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-white/5 group-hover:bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-emerald-500/20 shadow-inner`}>
                  <group.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2 group-hover:text-emerald-300 transition-colors">
                    <span>{group.emoji}</span> {group.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 flex-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 text-emerald-500/70 group-hover:text-emerald-400 transition-colors`} aria-hidden="true" />
                    <span className="text-base font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center mb-12 relative">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">App Gallery</span> 📱
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light text-lg">
              Take a closer look at OurTab's sleek and intuitive mobile interface.
            </p>
          </div>

          <div 
            className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar focus-within:ring-2 focus-within:ring-emerald-500/50 rounded-[2.5rem]"
            tabIndex={0}
            role="region"
            aria-label="App screenshots gallery"
          >
            {[
              { src: "/images/screenshots/deposit.png", alt: "Fund Deposit Breakdown screen showing pending and approved deposits" },
              { src: "/images/screenshots/meals.png", alt: "Meal Tracking screen showing active meals and member status" },
              { src: "/images/screenshots/buy-list.png", alt: "Buy List screen showing grocery items to be purchased" },
              { src: "/images/screenshots/expense.png", alt: "Adding an Expense screen with contributor split options" },
              { src: "/images/screenshots/profile.png", alt: "User Profile screen with house settings and invites" },

            ].map((img, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/19.5] relative snap-center rounded-[2.5rem] overflow-hidden border-[6px] border-white/5 shadow-2xl shrink-0 group bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                  <span className="text-white font-semibold text-lg tracking-wide">{img.alt}</span>
                </div>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-12 relative">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-400">Notifications</span> System 🔔
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light text-lg">
              OurTab keeps the whole house in sync with real-time, categorized alerts:
            </p>
          </div>

          <GlassCard className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-white/10 bg-black/40 backdrop-blur-2xl p-8 lg:p-12">
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <ShoppingCart className="w-5 h-5" /> Shopping Alerts
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Notified when housemates add items to the Buy List.</p>
            </div>
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <BarChart3 className="w-5 h-5" /> Expense Alerts
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Stay updated whenever a new bill is added or edited.</p>
            </div>
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <PieChart className="w-5 h-5" /> Payment & Funds
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Alerts for requests, deposit approvals, or settled debts.</p>
            </div>
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <Users className="w-5 h-5" /> House Management
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Role changes, new members, or house deletion requests.</p>
            </div>
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <Sparkles className="w-5 h-5" /> Meal Requests
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Managers are notified of meal status changes.</p>
            </div>
            <div className="space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 className="font-bold flex items-center gap-2 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <BellRing className="w-5 h-5" /> Special Occasions
              </h4>
              <p className="text-sm text-muted-foreground/70 font-light leading-relaxed">Automated birthday reminders for house members.</p>
            </div>
          </GlassCard>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border-emerald-500/30 text-emerald-300 font-medium animate-pulse shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]">
              <Zap className="w-5 h-5 text-emerald-400" /> <span className="tracking-wide">Live Feedback pulses and custom sounds included.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
