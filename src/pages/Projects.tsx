import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { CinematicButton } from "../components/ui/cinematic-button";
import { ExternalLink, Github, Eye } from "lucide-react";

const FloatingCard3D = ({ position, color = "#8B5DFF" }: { position: [number, number, number]; color?: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <RoundedBox position={position} args={[1, 1.5, 0.1]} radius={0.1}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </RoundedBox>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B9D" />
      
      <FloatingCard3D position={[-3, 1, 0]} color="#8B5DFF" />
      <FloatingCard3D position={[3, -1, 0]} color="#FF6B9D" />
      <FloatingCard3D position={[0, 2, -1]} color="#4FC3F7" />
      <FloatingCard3D position={[-2, -2, 1]} color="#B794F6" />
    </Canvas>
  );
};

const projects = [
  {
    id: 1,
    title: "Vision-Based Fall Detection System",
    description: "An AI-powered vision-based system that detects falls in real-time using computer vision and deep learning techniques, ensuring safety without requiring wearable devices or physical sensors.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    image: "🤖",
    github: "https://github.com/jarvis2754/fall_detection",
    live: "",

  },
  {
    id: 2,
    title: "Personal Expense Tracker",
    description: "Responsive expense tracking app with Firebase authentication, real-time expense management, and interactive charts for financial insights.",
    technologies: ["React.js", "Firebase", "Chart.js", "Bootstrap"],
    image: "💰",
    github: "https://github.com/jarvis2754/PersonalExpenseTracker",
    live: "",

  },
  {
    id: 3,
    title: "Dev Tracker",
    description: "Collaborative platform for tracking development progress, managing tasks, and visualizing project milestones in real time.",
    technologies: ["React.js","Java","SpringBoot","Bootstrap"],
    image: "📊",
    github: "https://github.com/jarvis2754/DevTracker",
    live: "",

  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Dark-themed, responsive portfolio built with smooth animations, interactive UI elements, and optimized for all devices. ",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "🌐",
    github: "",
    live: "",
 
  },
  
];

const Projects = () => {
  

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

  const isDemoPresent = (live:string)=>{
    return live!==""
  }

  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Scene3D />
      </div>

      <div className="max-w-7xl mx-auto relative z-content">
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
            <span className="cinematic-text">Featured</span> Projects
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            A showcase of my latest work, featuring cutting-edge technologies and innovative solutions
          </motion.p>
          
          {/* Filter Buttons */}
          
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="card-cinematic p-6 h-full flex flex-col">
                {/* Project Icon */}
                <div className="text-6xl mb-4 text-center">
                  {project.image}
                </div>
                
                

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {
                    isDemoPresent(project.live) &&
                    <CinematicButton
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </a>
                  </CinematicButton>
                  }
                  <CinematicButton
                    variant="ghost"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </CinematicButton>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's bring your ideas to life with cutting-edge technology
          </p>
          <CinematicButton variant="hero" size="lg" asChild>
            <a href="/contact">
              <ExternalLink className="w-5 h-5 mr-2" />
              Start a Project
            </a>
          </CinematicButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;