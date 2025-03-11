
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className,
  ...props 
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-10 space-y-1", 
        centered && "text-center",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
