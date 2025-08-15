import { motion } from "framer-motion";
import { CinematicButton } from "../components/ui/cinematic-button";
import { Download, ExternalLink,  Briefcase, GraduationCap, Mail } from "lucide-react";
import myResume from "../assets/VIGNESHCV.pdf"
import { useToast } from "../hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
     toast({
      title: "Resume Downloaded! 📄",
      description: "Thanks for your interest. Check your downloads folder.",
    });
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "Vignesh_P_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
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

  const experience = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Kairaa Tech Serve Pvt Ltd",
      period: "Sep 2024",
      description: "Contributed to the development of a user-friendly eCommerce website. Implemented product listing, filtering features, and CRUD operations using Java and Spring Boot, enhancing platform usability and performance."
    },
    {
      title: "Open Source Contributor",
      company: "Hoppscotch",
      period: "Jul 2025",
      description: "Developed a production feature to preserve response viewer scroll position per tab. The enhancement is now deployed and actively used by developers worldwide."
    },
    {
      title: "Academic & Personal Projects",
      company: "Self-Directed",
      period: "2023 - Present",
      description: "Built multiple real-world projects including a Vision-Based Fall Detection System with OpenCV and MediaPipe, and a Personal Expense Tracker using React.js, Firebase, and Chart.js."
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "New Prince Shri Bhavani College of Engineering and Technology",
      period: "Sept 2023 - May 2025",
      gpa: "CGPA: 8.8/10"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Bharath Institute of Higher Education and Research",
      period: "Aug 2020 - June 2023",
      gpa: "Percentage: 80.6%"
    }
  ];




  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-content">
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
            My <span className="cinematic-text">Resume</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            A comprehensive overview of my professional journey, skills, and achievements
          </motion.p>

          {/* Download Button */}
          <motion.div variants={itemVariants}>
            <CinematicButton
              variant="hero"
              size="lg"
              className="group animate-glow-pulse"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download PDF Resume
            </CinematicButton>
          </motion.div>
        </motion.div>

        {/* Resume Content */}
        <div className="space-y-12">
          {/* Experience Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="card-cinematic p-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-[hsl(var(--primary))]" />
                Professional Experience
              </h2>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-[hsl(var(--primary)/0.3)] pl-8 relative"
                  >
                    <div className="absolute w-4 h-4 bg-[hsl(var(--primary))] rounded-full -left-2 top-2"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold txt-foreground">{job.title}</h3>
                      <p className="text-[hsl(var(--primary))] font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.period}</p>
                    </div>
                    <p className="txt-muted-foreground leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="card-cinematic p-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-[hsl(var(--primary))]" />
                Education & Certifications
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6  bg-[hsl(var(--muted)/0.2)] rounded-lg border border-[hsl(var(--border)/0.3)]"
                  >
                    <div>
                      <h3 className="text-lg font-bold txt-foreground">{edu.degree}</h3>
                      <p className="text-[hsl(var(--primary))]">{edu.school}</p>
                    </div>
                    <div className="md:text-right mt-2 md:mt-0">
                      <p className="text-sm txt-muted-foreground">{edu.period}</p>
                      <p className="text-sm font-medium">{edu.gpa}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>




          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="card-cinematic p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in discussing opportunities? I'm always open to new challenges
                and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CinematicButton variant="hero" size="lg" asChild>
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </CinematicButton>
                <CinematicButton variant="outline" size="lg" asChild>
                  <a href="/projects">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Projects
                  </a>
                </CinematicButton>
              </div>
            </div>
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

export default Resume;