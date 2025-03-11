
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-surface-dark py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold">
              George <span className="gradient-text">Puthean</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Data Analyst & Business Intelligence Specialist
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium">Contact</p>
              <a 
                href="mailto:georgeputhean@yahoo.com" 
                className="text-muted-foreground text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                georgeputhean@yahoo.com
              </a>
              <a 
                href="tel:+14074126865" 
                className="text-muted-foreground text-sm hover:text-white transition-colors duration-200"
              >
                +1 (407) 412-6865
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/georgeputhean"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface-light transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/georgeputhean/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface-light transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:georgeputhean@yahoo.com"
                className="p-2 rounded-full bg-portfolio-surface hover:bg-portfolio-surface-light transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} George Puthean. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="text-muted-foreground text-sm hover:text-white transition-colors duration-200">
              Home
            </Link>
            <a href="/#experience" className="text-muted-foreground text-sm hover:text-white transition-colors duration-200">
              Experience
            </a>
            <a href="/#projects" className="text-muted-foreground text-sm hover:text-white transition-colors duration-200">
              Projects
            </a>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
