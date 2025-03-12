
import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
import { observeElements } from "@/utils/animations";

const experiences = [
  {
    title: "Data Analyst/Business Analyst",
    organization: "Xsunt Corporation",
    location: "Newtown, PA, United States",
    period: "Feb 2023 - Present",
    details: [
      "Led 3 critical initiatives to enhance reporting and knowledge base capabilities, decreasing user efficiency by 50 percent.",
      "Developed advanced SQL queries to extract insights and support data-driven decision-making to attain business objectives.",
      "Identified new KPIs on top 10 influencing features in physician clustering models which has a silhouette score of 0.78.",
      "Improved data accuracy by 30% through robust data cleaning, Data Visualization and normalization of extensive databases."
    ]
  },
  {
    title: "Data Engineer - Summer Intern",
    organization: "Amazon",
    location: "Seattle, WA, United States",
    period: "May 2022 - August 2022",
    details: [
      "Deployed ETL pipelines based on Cloudformation stacks using Cradle from S3, DynamoDB, and RDS sources to the Andes",
      "Developed intermediate datasets on the Andes in four phases, and created packages for unit testing and integration testing"
    ]
  },
  {
    title: "Product Analyst",
    organization: "SalesboxAI",
    location: "Bengaluru, KA, India",
    period: "Feb 2019 - Aug 2021",
    details: [
      "Created complex SQL queries to develop 9 dashboards based on SAAS demand unit model, increasing revenue by 12%",
      "Interpreted ElasticDB logs business intelligence tools like Tableau to identify anomalies and tackle outages and task failures",
      "Conducted User Acceptance Testing for multiple features and changed requests reducing user-reported issues by 50%"
    ]
  },
  {
    title: "Programmer Analyst",
    organization: "Cognizant",
    location: "Kolkata, WB, India",
    period: "June 2016 - Feb 2018",
    details: [
      "Retrieved data via SQL, analyzed KPIs to identify trends, and evaluated risks for effective risk management",
      "Expertly employed advanced Excel functions, such as macros, pivot tables, and VLOOKUPs, to streamline data analysis"
    ]
  }
];

const Experience = () => {
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
    <section id="experience" className="section-padding bg-portfolio-surface-dark" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and roles that have shaped my career"
          centered
          className="animate-on-mount"
        />
        
        <div className="relative mt-16">
          {/* Timeline connector line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-portfolio-purple to-portfolio-purple/60 left-4 md:left-1/2 md:-translate-x-1/2 top-0 z-0"></div>
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.title}
              organization={exp.organization}
              location={exp.location}
              period={exp.period}
              details={exp.details}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
