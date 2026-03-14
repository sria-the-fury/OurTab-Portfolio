"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GlassCard } from "./GlassCard";
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const team = [
    {
        name: "Raju Ahmed",
        role: "Industry Visionary & Mentor",
        description: "Senior Leadership guiding the strategic growth and long-term vision of OurTab.",
        image: "/images/team/raju.jpeg",
        socials: { linkedin: "https://www.linkedin.com/in/rajuahmed1705/" },
        featured: true,
    },
    {
        name: "Jakaria Mashud Shahria",
        role: "Founder & Product Architect",
        description: "The creative force behind OurTab's premium aesthetic and technical foundation.",
        image: "/images/team/jakaria.PNG",
        socials: { linkedin: "https://www.linkedin.com/in/jakariamsria/" },
    },
    {
        name: "Ashraful Haque Patowary",
        role: "Idea Initiator",
        description: "The spark that started OurTab, bringing the initial vision of shared living harmony.",
        image: "/images/team/ashraful.png",
        socials: { linkedin: "#" },
    },
    {
        name: "Niaz Morshed",
        role: "Lead Financial Engineer",
        description: "The architect behind our smart settlement algorithms and core accounting logic.",
        image: "/images/team/niaz.PNG",
        socials: { linkedin: "https://www.linkedin.com/in/niaz-morsed-rabbi-4229983a4/" },
    },
];

function TeamMemberCard({ member }: { member: typeof team[0] }) {
    const [imgSrc, setImgSrc] = useState(member.image);
    const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=10b981&color=fff&size=512`;

    return (
        <GlassCard
            className={`flex flex-col h-full border-white/5 hover:border-emerald-500/30 transition-all duration-500 group bg-black/40 backdrop-blur-xl shadow-lg hover:-translate-y-2 ${member.featured ? "lg:col-span-1 border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]" : ""}`}
        >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-emerald-500/30 transition-colors bg-white/5">
                <Image
                    src={imgSrc}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => setImgSrc(fallbackSrc)}
                />
            </div>

            <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-300 transition-colors">
                    {member.name}
                </h3>
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                    {member.role}
                </p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {member.description}
                </p>
            </div>

            <div className="flex gap-4 pt-6 border-t border-white/5 mt-6">
                <Link 
                    href={member.socials.linkedin} 
                    className="text-muted-foreground hover:text-emerald-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${member.name}'s LinkedIn profile`}
                >
                    <LinkedinIcon className="w-5 h-5" aria-hidden="true" />
                </Link>
            </div>
        </GlassCard>
    );
}

export function Team() {
    return (
        <section id="team" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-black/20">
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        The <span className="text-gradient">Visionaries</span>
                    </h2>
                    <p className="text-muted-foreground text-xl leading-relaxed font-light">
                        Meet the professional team dedicated to redefining household management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <TeamMemberCard key={idx} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
