import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { CinematicButton } from "../components/ui/cinematic-button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import myImage from "../assets/IMG_2196[1].jpg";

const FloatingIcon = ({ position }: { position: [number, number, number]; children: React.ReactNode }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#8B5DFF" emissive="#8B5DFF" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B9D" />

      {/* Floating spheres instead of text */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere position={[0, 0, 0]} args={[1, 32, 32]}>
          <meshStandardMaterial color="#8B5DFF" emissive="#8B5DFF" emissiveIntensity={0.3} />
        </Sphere>
      </Float>

      <FloatingIcon position={[-4, 2, 0]}>💻</FloatingIcon>
      <FloatingIcon position={[4, -2, 0]}>🚀</FloatingIcon>
      <FloatingIcon position={[0, 3, -2]}>⚡</FloatingIcon>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <div className="min-h-screen flex flex-col justify-center relative px-6">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      <motion.div
        className="text-center z-content relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:text-start "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="order-2 md:order-1 md:ps-10">
          <motion.div variants={itemVariants} className="mb-4 mt-8">

            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8">
              <span className="text-foreground">I'm</span>

              <span className="cinematic-text "> Vignesh</span>

            </h1>
            
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-1xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            A Master’s student in Computer Applications passionate about building innovative projects.
            <br />
            <span className="cinematic-text font-medium">Full-Stack Developer | Software Developer</span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:justify-start"
          >
            <Link to="/contact">
              <CinematicButton variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Hire Me
              </CinematicButton>
            </Link>

            <Link to="/resume">
              <CinematicButton variant="outline" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </CinematicButton>
            </Link>
          </motion.div>
        </div>
        <div className="order-1 mx-auto mt-8 md:order-2 lg:mt-0">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-1/2 md:w-75 lg:w-100 h-auto mx-auto card-cinematic p-2 lg:p-4 flex justify-center">
              <img
                src={myImage}
                alt="Vignesh"
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          </motion.div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center animate-bounce md:col-span-2 order-3"
        >
          <Link to="/about" className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer group">
            <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">Explore More</span>
            <ArrowDown className="w-6 h-6 text-primary animate-glow-pulse group-hover:translate-y-1 transition-transform" />
          </Link>
        </motion.div>

      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-8 w-12 h-12 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default Hero;