
import { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Conversational AI for Call Summary using LangChain & Streamlit",
    description: "Developed a real-time call transcript summarization application using LangChain, enhancing call center efficiency and improving agent productivity by optimizing prompt strategies for concise call summaries.",
    technologies: ["Python", "LangChain", "Streamlit", "NLP", "AI"],
    githubUrl: "https://github.com/georgeputhean"
  },
  {
    title: "Visualization of Global Power Plant Database using pandas and pyplots",
    description: "Collated data from different sources and visualized the most efficient fuel for power plants from all countries of the world. Sharpened skills on certain ETL pipeline skills and programmed using pandas, GPlots, subplots, and joins on Python.",
    technologies: ["Python", "Pandas", "Data Visualization", "ETL", "GGPlot"],
    githubUrl: "https://github.com/georgeputhean"
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="glass-panel p-6 h-full flex flex-col hover-lift">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="text-xs px-2 py-1 rounded-full bg-portfolio-surface-light text-portfolio-text/70"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="border-white/10">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="section-padding bg-portfolio-surface" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects" 
          subtitle="Showcasing my technical skills through real-world applications"
          centered
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
