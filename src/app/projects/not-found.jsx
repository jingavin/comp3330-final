"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { slug } = useParams();
  return (
    <div className="bg-zinc-50 max-w-2xl m-auto p-4">
      <TypographyP>
        The project <span className="font-bold">{slug}</span> doesn’t exist
      </TypographyP>
      <Button asChild size="sm" className="mt-4">
        <Link href={`/projects`}>Go Back to Projects</Link>
      </Button>
    </div>
  );
}
