"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function SkillIndicatorBar({ label, level, color = "bg-primary" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setValue(level), 150);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{label}</span>
        <span>{level}%</span>
      </div>

      <Progress value={value} indicatorClassName={color} className="h-2" />
    </div>
  );
}
