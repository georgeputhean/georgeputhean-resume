
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";
import { observeElements, staggerAnimation } from "@/utils/animations";

const Index = () => {
  useEffect(() => {
    // Initialize animations when the component mounts
    const fadeObserver = observeElements('.animate-fade-in-up');
    
    // Apply staggered animations to elements
    staggerAnimation('.stagger-animation', 0.15);
    
    // Add a console.log to help with debugging
    console.log("Animations initialized on Index page");
    
    return () => {
      // Clean up observers when component unmounts
      if (fadeObserver) {
        fadeObserver.disconnect();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-text">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
