import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { Progress } from "../components/ui/progress";
import { 
  Code, 

  Server, 

  Zap
} from "lucide-react";

const SkillOrb = ({ position, color = "#8B5DFF", icon }: { 
  position: [number, number, number]; 
  color?: string; 
  icon?: string;
}) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <Sphere position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B9D" />
      
      <SkillOrb position={[-4, 2, 0]} color="#8B5DFF" />
      <SkillOrb position={[4, -1, 0]} color="#FF6B9D" />
      <SkillOrb position={[0, 3, -2]} color="#4FC3F7" />
      <SkillOrb position={[-3, -2, 1]} color="#B794F6" />
      <SkillOrb position={[3, 1, -1]} color="#00E676" />
      <SkillOrb position={[-1, -3, 2]} color="#FFB74D" />
    </Canvas>
  );
};

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
       { name: "React.js", level: 80 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "BootStrap CSS", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Chart.js", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
       { name: "Java", level: 80 },
       {name:"Spring Boot", level:70},
      { name: "MySQL", level: 88 },
      { name: "Node.js / Express", level: 75 },
      { name: "Firebase (Auth & Firestore)", level: 70 },
      { name: "REST APIs", level: 82 },
    ],
  },
  
  
  {
    title: "Tools & Technologies",
    icon: Zap,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code / IntelliJ IDEA", level: 88 },
      { name: "Vite", level: 80 },
      { name: "Figma", level: 70 },
      { name: "OpenCV / MediaPipe", level: 50 },
      { name: "Performance Optimization", level: 75 },
    ],
  },
];

const Skills = () => {
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
            Technical <span className="cinematic-text">Skills</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise across different domains of software development
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-cinematic p-8 group hover:shadow-glow-soft transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-lg mr-4 group-hover:bg-primary/30 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 rounded bg-[hsl(var(--muted))] border border-[hsl(var(--border)/0.3)]"
                      />
                      <motion.div
                        className="absolute inset-0 bg-[hsl(var(--gradient-primary)/0.3)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>

     
    </div>
  );
};

export default Skills;