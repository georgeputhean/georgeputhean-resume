
import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const skillSections: SkillSectionProps[] = [
  {
    title: "Database and Visualizations",
    skills: [
      "SQL",
      "MySQL",
      "Snowflake DB",
      "Databricks",
      "NoSQL",
      "Big Query (SQL)",
      "HQL",
      "MongoDB",
      "ElasticDB",
      "Tableau",
      "PowerBI",
      "Klipfolio",
      "Sisense",
      "Qlikview",
      "Looker",
      "Microsoft Excel",
      "Macros",
      "VBA",
      "SAS",
      "Teradata",
      "HTML"
    ]
  },
  {
    title: "Languages and Libraries",
    skills: [
      "Python",
      "R",
      "Scala",
      "Unix Shell Scripting",
      "Sci-kit learn",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Tensor Flow",
      "PySpark",
      "SparkSQL",
      "XGBoost",
      "Beautiful Soup",
      "Keras",
      "Weights and Biases"
    ]
  },
  {
    title: "DevOps and Cloud",
    skills: [
      "Jenkins",
      "Git",
      "AWS S3",
      "EC2",
      "IAM",
      "RDS",
      "EMR",
      "Cloudformation",
      "Confluence",
      "Github"
    ]
  },
  {
    title: "Documentation and Testing",
    skills: [
      "UAT testing",
      "SIT",
      "User Experience",
      "Powerpoint",
      "Word",
      "A/B testing",
      "Confluence",
      "Miro",
      "Lucidchart"
    ]
  },
  {
    title: "Statistical/ML Techniques",
    skills: [
      "Hypothesis Testing",
      "Confidence Interval",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Naive Bayes Model",
      "KNN",
      "K-Means",
      "Word2Vec",
      "Transformers",
      "Bagging and Boosting",
      "Neural Networks",
      "GANS",
      "GBMS",
      "NLP"
    ]
  },
  {
    title: "Agile Product Management",
    skills: [
      "JIRA",
      "Product Strategy Development",
      "Technical Writing",
      "Product lifecycle management",
      "Market Research"
    ]
  }
];

const SkillGroup = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="glass-panel p-6 h-full hover-lift">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="text-sm px-3 py-1 rounded-full bg-portfolio-surface-light text-portfolio-text/80 hover:bg-portfolio-purple/20 hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class but don't remove existing classes
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
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills" 
          subtitle="Technical proficiencies and expertise"
          centered
          className="animate-fade-in-up"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillSections.map((section, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <SkillGroup title={section.title} skills={section.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
