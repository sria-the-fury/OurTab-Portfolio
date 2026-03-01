"use client";

import { GlassCard } from "./GlassCard";
import { 
  ShieldCheck, 
  Home, 
  BarChart3, 
  ShoppingCart, 
  BellRing,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const featureGroups = [
  {
    title: "Authentication & Security",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: [
      "Google Sign-In via Firebase Authentication.",
      "Protected Routes — unauthenticated users are redirected to login.",
      "Persistent Sessions across page refreshes.",
      "Permission-based Access — member-only views and owner-only editing."
    ]
  },
  {
    title: "House Management",
    icon: Home,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    items: [
      "Named Households — create or join via secure invite.",
      "Role System — Managers approve requests; Members have standard access.",
      "Manager Promotion — dynamic role switching with creator protection.",
      "Meal Management — toggle Meals On/Off with approval flows.",
      "Fund Deposits — secure house account with manager verification.",
      "Collaborative Deletion — requires approval from all members."
    ]
  },
  {
    title: "Financial Dashboard",
    icon: BarChart3,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: [
      "Real-time Overview — total expenses vs. personal monthly spending.",
      "Smart Settlements — automated debt optimization algorithm.",
      "Expense History — browse recent or navigate monthly archives.",
      "Currency Support — configurable house currency ($, ₹, £, etc.).",
      "PDF Export — one-click professional expense reports."
    ]
  },
  {
    title: "Shopping & Expenses",
    icon: ShoppingCart,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: [
      "Multi-Contributor Splitting — by absolute amounts or percentages.",
      "Shortcut Actions — 'I Pay All' or 'Split Equally' for rapid entry.",
      "Interactive Buy List — shared list with auto-capitalization.",
      "Smart Auto-Mark — items auto-ticked when matching expenses added.",
      "Cleanup Automation — auto-deletion of completed items."
    ]
  }
];

const notificationItems = [
  { icon: ShoppingCart, label: "Shopping Alerts", desc: "Buy List updates in real-time." },
  { icon: BarChart3, label: "Expense Alerts", desc: "Instant sync on bills and edits." },
  { icon: ShieldCheck, label: "Payment & Funds", desc: "Deposit approvals and settlements." },
  { icon: Home, label: "House Management", desc: "Role changes and member joins." },
  { icon: BellRing, label: "Meal Requests", desc: "Manager notifications for toggles." }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Premium <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            OurTab Digital is more than just an expense tracker. It's a complete household management suite designed for transparency and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featureGroups.map((group, idx) => (
            <GlassCard key={idx} className="flex flex-col h-full border-primary/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${group.bg} ${group.color} group-hover:scale-110 transition-transform duration-500`}>
                  <group.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
              </div>
              
              <ul className="space-y-4 flex-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${group.color} opacity-60`} />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Notifications</span> System
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay in sync with real-time, categorized alerts and live feedback.
            </p>
          </div>

          <GlassCard className="bg-gradient-to-br from-white/80 to-white/40 border-accent/10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {notificationItems.map((notif, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="mb-4 p-4 rounded-full glass border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <notif.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{notif.label}</h4>
                  <p className="text-xs text-muted-foreground">{notif.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary/5 flex flex-wrap justify-center gap-8 text-sm font-semibold text-primary/70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Live "Pulse" Indicators
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Custom Alert Sounds
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Birthday Reminders
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
