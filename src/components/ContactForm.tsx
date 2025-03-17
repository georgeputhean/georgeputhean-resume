
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into the contactForm table in Supabase
      const { error } = await supabase
        .from("contactForm")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error saving contact form:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error saving your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-portfolio-surface-light border border-white/10 focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-portfolio-surface-light border border-white/10 focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple outline-none transition-all"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 rounded-lg bg-portfolio-surface-light border border-white/10 focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple outline-none resize-none transition-all"
          placeholder="Your message..."
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-6 text-base font-medium bg-portfolio-purple hover:bg-portfolio-purple/90 transition-all"
      >
        {isSubmitting ? (
          "Sending message..."
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
