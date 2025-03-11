
import { useEffect, useRef } from "react";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const moveX = (clientX - width / 2) / 50;
      const moveY = (clientY - height / 2) / 50;
      
      const blurElements = document.querySelectorAll('.blur-circle');
      blurElements.forEach((elem, i) => {
        const el = elem as HTMLElement;
        const factor = (i + 1) * 0.5;
        el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 background-grid"
    >
      {/* Animated blur circles */}
      <div className="blur-circle w-96 h-96 bg-portfolio-purple/30 top-20 -left-20"></div>
      <div className="blur-circle w-64 h-64 bg-portfolio-blue/30 bottom-40 right-20 animation-delay-1000"></div>
      <div className="blur-circle w-80 h-80 bg-portfolio-pink/20 bottom-0 -left-20 animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              Hi, I'm <span className="gradient-text">George Puthean</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              A data analyst and business intelligence specialist with expertise in database management, 
              visualization, and deriving actionable insights from complex datasets.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                <a href="#experience">
                  View My Work
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <a 
                href="https://github.com/georgeputhean" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/georgeputhean/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:georgeputhean@yahoo.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
