
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
  background?: "default" | "muted" | "stone";
}

const Section = ({ children, className, container = true, background = "default" }: SectionProps) => {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted",
    stone: "bg-stone"
  };

  return (
    <section className={cn(bgClasses[background], className)}>
      {container ? (
        <div className="container mx-auto px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
