
import { useEffect, useRef } from "react";
import { Award, Medal, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const awards = [
  {
    title: "Star Performer",
    description: "Recognized as the \"Star Performer\" during the challenging Covid-19 year, driving the product to achieve its 1M dollar in Q1 2021.",
    icon: Trophy
  },
  {
    title: "Graduate Teaching Assistant",
    description: "Mentored and facilitated discussions as a Graduate Teaching Assistant for Health Information Systems in Fall 2022.",
    icon: Medal
  },
  {
    title: "President of Smith MS in Business Analytics Association",
    description: "Served as President of the Smith MS in Business Analytics Association, overseeing socials, seminars, and forums 2021-22.",
    icon: Award
  },
  {
    title: "Certified Scrum Product Owner",
    description: "Certified as a Agile Certified Scrum Product Owner (CSPO) from Scrum Alliance in October 2024.",
    icon: Award
  }
];

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (sectionRef.current) {
              sectionRef.current.classList.add("animate-fade-in-up");
              sectionRef.current.classList.remove("opacity-0");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="awards" className="section-padding bg-portfolio-surface-dark" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Awards & Honors" 
          subtitle="Recognition of excellence and outstanding achievements"
          centered
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 flex gap-4 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                <award.icon className="w-6 h-6 text-portfolio-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-muted-foreground text-sm">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
