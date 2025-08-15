import { useState } from "react";
import { motion } from "framer-motion";
import { CinematicButton } from "../components/ui/cinematic-button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const resultEl = document.getElementById("result");

    try {
      const formDataObj = new FormData(e.target as HTMLFormElement);
      const object = Object.fromEntries(formDataObj);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        toast({
          title: "Message Sent! ✨",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        if (resultEl) resultEl.innerHTML = `<p class="text-white">${data.message}</p>`;
      } else {
        toast({
          title: "Oops! ❌",
          description: data.message || "Something went wrong. Please try again.",
        });
        if (resultEl) resultEl.innerHTML = `<p class="text-red-500">${data.message}</p>`;
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error ❌",
        description: "Unable to send your message. Please try again later.",
      });
      if (resultEl) resultEl.innerHTML = `<p class="text-red-500">Unable to send your message. Please try again later.</p>`;
    }

    // Reset form state
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Auto-hide the message after 3 seconds
    setTimeout(() => {
      if (resultEl) resultEl.innerHTML = "";
    }, 3000);
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-content">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's <span className="cinematic-text">Connect</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl txt-muted-foreground max-w-3xl mx-auto"
          >
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="card-cinematic p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
                Send a Message
              </h2>

              <form id="contactForm" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="52bb675a-4df6-4644-a170-d4f8a5556cf9" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="backdrop-cinematic border-[hsl(var(--border)/0.5)] focus:border-[hsl(var(--primary)/0.5)]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="backdrop-cinematic border-[hsl(var(--border)/0.5)] focus:border-[hsl(var(--primary)/0.5)]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="backdrop-cinematic border-[hsl(var(--border)/0.5)] focus:border-[hsl(var(--primary)/0.5)]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="backdrop-cinematic border-[hsl(var(--border)/0.5)] focus:border-[hsl(var(--primary)/0.5)] resize-none"
                    required
                  />
                </div>

                <CinematicButton
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </CinematicButton>
                <div id="result"></div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "jaijaivignesh7@gmail.com",
                  description: "Send me an email anytime!",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 7708513322",
                  description: "Available all days",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Tamil Nadu, India",
                  description: "Open to remote opportunities",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="card-cinematic p-6 group hover:shadow-glow-soft transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contact.title}</h3>
                      <p className="text-primary font-medium mb-1">{contact.content}</p>
                      <p className="text-muted-foreground text-sm">{contact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}


            <motion.div
              className="card-cinematic p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Find me on social media or explore my work online.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <CinematicButton variant="hero" asChild>
                  <a
                    href="https://github.com/jarvis2754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={18} />
                  </a>
                </CinematicButton>
                <CinematicButton variant="hero" asChild>
                  <a
                    href="https://www.linkedin.com/in/vigneshp07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                  </a>
                </CinematicButton>
                <CinematicButton variant="hero" asChild>
                  <a
                    href="https://www.instagram.com/vicky.27._"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram size={18} />
                  </a>
                </CinematicButton>
                <CinematicButton variant="hero" asChild>
                  <a
                    href="https://www.facebook.com/profile.php?id=100027287931090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Facebook size={18} />
                  </a>
                </CinematicButton>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-8 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default Contact;