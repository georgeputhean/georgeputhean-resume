
import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { observeElements } from "@/utils/animations";

const educations = [
  {
    title: "Master of Science (M.S.) Business Analytics",
    organization: "University of Maryland, Robert H. Smith School of Business",
    location: "College Park, MD, USA",
    period: "August 2021 - December 2022",
    details: [
      "Courses: Database Management Systems, Data Processing, and Analysis in Python, Data Models and Decisions, and Decision Analytics",
      "Clubs: Terps Racing Formula EV - Business Operations Associate, Data and Cloud Computing Society - Official Member"
    ]
  },
  {
    title: "Bachelor of Technology (B.Tech.) Mechanical Engineering",
    organization: "VIT University, School of Mechanical and Building Sciences",
    location: "Vellore, TN, India",
    period: "June 2012 - May 2016",
    details: [
      "Courses: Multivariable Calculus & Differential Equations, probability & statistics and Applied numerical methods, Operations Research",
      "Internships: Mahindra Electric Mobility Limited (India's First Electric Vehicle), Bharat Petroleum Limited"
    ]
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = observeElements('.animate-on-mount');
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="education" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and learning journey"
          centered
          className="animate-on-mount"
        />
        
        <div className="relative mt-16">
          {/* Timeline connector line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-portfolio-purple to-portfolio-purple/60 left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-0"></div>
          
          {/* Timeline items */}
          {educations.map((edu, index) => (
            <TimelineItem 
              key={index}
              title={edu.title}
              organization={edu.organization}
              location={edu.location}
              period={edu.period}
              details={edu.details}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
