
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export function GlassCard({ children, className, variant = "light", ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-all duration-300",
        variant === "light" ? "glass" : "glass-dark text-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
