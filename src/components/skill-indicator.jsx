"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function SkillIndicator({ title, value, color = "bg-black" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {title && <h3 className="text-sm font-medium text-gray-700">{title}</h3>}

      <Progress value={progress} className="w-full" indicatorClassName={color} />
    </div>
  );
}
