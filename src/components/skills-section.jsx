import React from "react";
import { SkillCategoryCard } from "./skill-card";

export function SkillsSection() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      <SkillCategoryCard
        title="Frontend"
        skills={[
          { label: "React / Next.js", level: 85, color: "bg-sky-500" },
          { label: "TypeScript", level: 80, color: "bg-blue-500" },
          { label: "Tailwind CSS", level: 90, color: "bg-emerald-500" },
        ]}
      />

      <SkillCategoryCard
        title="Backend"
        skills={[
          { label: "Node.js / Express", level: 80, color: "bg-amber-500" },
          { label: "PostgreSQL / Neon", level: 75, color: "bg-indigo-500" },
          { label: "REST APIs", level: 85, color: "bg-rose-500" },
        ]}
      />

      <SkillCategoryCard
        title="DevOps"
        skills={[
          { label: "Vercel / CI", level: 75, color: "bg-teal-500" },
          { label: "Docker", level: 60, color: "bg-slate-500" },
          { label: "Git / GitHub", level: 90, color: "bg-green-500" },
        ]}
      />
    </div>
  );
}
