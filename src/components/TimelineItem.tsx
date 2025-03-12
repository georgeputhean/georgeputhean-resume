
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  organization: string;
  location: string;
  period: string;
  details?: string[];
  isLeft?: boolean;
}

const TimelineItem = ({
  title,
  organization,
  location,
  period,
  details = [],
  isLeft = false,
}: TimelineItemProps) => {
  return (
    <div className="relative mb-12 md:mb-8">
      <div
        className={cn(
          "flex flex-col md:w-1/2",
          isLeft ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
        )}
      >
        <div
          className={cn(
            "glass-panel p-6 hover-lift",
            isLeft ? "md:mr-4" : "md:ml-4"
          )}
        >
          <span className="inline-block text-sm font-semibold text-portfolio-purple mb-1">
            {period}
          </span>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-muted-foreground mb-3">
            <span>{organization}</span>
            <span className="hidden md:block">•</span>
            <span>{location}</span>
          </div>
          {details.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Timeline dot with period tooltip */}
        <div
          className={cn(
            "absolute top-4 md:top-6 w-5 h-5 rounded-full bg-portfolio-purple z-10 flex items-center justify-center",
            isLeft ? "right-0 md:left-auto md:right-[-10px]" : "left-4 md:left-1/2 md:-translate-x-1/2"
          )}
          title={period}
        >
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
