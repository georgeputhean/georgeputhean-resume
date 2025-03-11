
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the contact page
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((element, index) => {
      element.classList.add('animate-fade-in-up');
      (element as HTMLElement).style.animationDelay = `${index * 0.15}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-text" ref={pageRef}>
      <Navbar />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 background-grid">
        <div className="container mx-auto px-4">
          {/* Blur elements */}
          <div className="blur-circle w-96 h-96 bg-portfolio-purple/20 -top-20 -left-40"></div>
          <div className="blur-circle w-64 h-64 bg-portfolio-blue/20 bottom-40 right-10"></div>
          
          <div className="animate-on-mount opacity-0">
            <SectionHeading
              title="Contact Me"
              subtitle="Get in touch for opportunities, collaborations, or just to say hello"
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="animate-on-mount opacity-0">
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking for a data analyst, want to discuss a potential project, 
                  or just want to connect, I'd love to hear from you. Fill out the form and I'll 
                  get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                      <Mail className="w-5 h-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:georgeputhean@yahoo.com" 
                        className="text-muted-foreground hover:text-white transition-colors duration-200"
                      >
                        georgeputhean@yahoo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                      <Phone className="w-5 h-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Phone</h4>
                      <a 
                        href="tel:+14074126865" 
                        className="text-muted-foreground hover:text-white transition-colors duration-200"
                      >
                        +1 (407) 412-6865
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                      <MapPin className="w-5 h-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Newtown, PA, United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                      <Linkedin className="w-5 h-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/georgeputhean/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-200"
                      >
                        linkedin.com/in/georgeputhean
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple bg-opacity-20">
                      <Github className="w-5 h-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/georgeputhean" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-200"
                      >
                        github.com/georgeputhean
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-mount opacity-0">
              <div className="glass-panel p-8 h-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
