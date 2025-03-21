
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Awards", href: "/#awards" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const resumeUrl = "https://docs.google.com/document/d/1t3Chpj9q_DKEGHPTbL62BEXBH3KgcuDxi_7d9GoSF7I/edit?usp=sharing";

  const handleResumeClick = async () => {
    try {
      // Track the resume download
      await supabase
        .from("resume_downloads")
        .insert([{
          ip_address: "Client IP not tracked", // Browser security prevents accessing client IP directly
          user_agent: navigator.userAgent
        }]);
      
      // Send email notification
      try {
        await supabase.functions.invoke('send-notification', {
          body: {
            type: 'resume_download',
            data: {
              user_agent: navigator.userAgent
            }
          }
        });
        console.log('Resume download notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send resume download notification:', emailError);
        // Continue even if email notification fails
      }
      
      // Open the resume in a new tab
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error tracking resume download:", error);
      // Still open the resume even if tracking fails
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-portfolio-surface/80 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-xl font-bold">
            George <span className="gradient-text">Puthean</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/georgeputhean" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/georgeputhean/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#"
              onClick={handleResumeClick}
              className="ml-2"
            >
              <Button size="sm" className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-portfolio-dark bg-opacity-95 backdrop-blur-md flex flex-col p-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-300 hover:text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium hover:text-portfolio-purple transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 mt-8">
            <a 
              href="https://github.com/georgeputhean" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/georgeputhean/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleResumeClick();
              closeMenu();
            }}
          >
            <Button className="mt-4 bg-portfolio-purple hover:bg-portfolio-purple/90">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
