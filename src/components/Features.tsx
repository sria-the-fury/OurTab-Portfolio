"use client";

import { GlassCard } from "./GlassCard";
import { 
  ShieldCheck, 
  Home, 
  BarChart3, 
  ShoppingCart, 
  BellRing,
  CheckCircle2,
  Lock,
  Users,
  PieChart,
  ListTodo,
  Sparkles
} from "lucide-react";

const featureGroups = [
  {
    title: "Authentication & Security",
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
    icon: BarChart3,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: [
      "Real-time Overview — total house expenses vs. your personal monthly spending.",
      "Smart Settlements — automated calculation of who owes whom, optimized to minimize transaction count.",
      "Expense History — browse recent expenses or navigate through previous months with ease.",
      "Currency Support — configurable house currency ($, ₹, £, etc.).",
      "PDF Export — generate professional expense reports with one click (via jsPDF)."
    ]
  },
  {
    title: "Shopping & Expenses",
    icon: ShoppingCart,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: [
      "Multi-Contributor Splitting — split bills by absolute amounts or percentages.",
      "Shortcut Actions — \"I Pay All\" or \"Split Equally\" for rapid entry.",
      "Interactive Buy List — shared list with auto-capitalization and check-off history.",
      "Smart Auto-Mark — when an expense is added, the matching item on the buy list is automatically ticked.",
      "Cleanup Automation — completed items auto-delete after 12 hours."
    ]
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Premium <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            OurTab Digital is a complete household management suite designed for transparency and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OurTab keeps the whole house in sync with real-time, categorized alerts:
            </p>
          </div>

          <GlassCard className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-accent/10">
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><ShoppingCart className="w-4 h-4" /> Shopping Alerts</h4>
              <p className="text-sm text-muted-foreground">Notified when housemates add items to the Buy List.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><BarChart3 className="w-4 h-4" /> Expense Alerts</h4>
              <p className="text-sm text-muted-foreground">Stay updated whenever a new bill is added or edited.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><PieChart className="w-4 h-4" /> Payment & Funds</h4>
              <p className="text-sm text-muted-foreground">Alerts for requests, deposit approvals, or settled debts.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><Users className="w-4 h-4" /> House Management</h4>
              <p className="text-sm text-muted-foreground">Role changes, new members, or house deletion requests.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><Sparkles className="w-4 h-4" /> Meal Requests</h4>
              <p className="text-sm text-muted-foreground">Managers are notified of meal status changes.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-primary"><BellRing className="w-4 h-4" /> Special Occasions</h4>
              <p className="text-sm text-muted-foreground">Automated birthday reminders for house members.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
