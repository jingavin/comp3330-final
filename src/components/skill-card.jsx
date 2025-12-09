import React from "react";
import { SkillIndicatorBar } from "./skill-indicator";

export function SkillCategoryCard({ title, skills }) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm space-y-4">
      <div>
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        <p className="text-xs text-muted-foreground">Skills & proficiency</p>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillIndicatorBar key={skill.label} label={skill.label} level={skill.level} color={skill.color} />
        ))}
      </div>
    </div>
  );
}
