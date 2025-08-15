import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { CinematicButton } from "../components/ui/cinematic-button";
import {
    User,
    Heart,
    Code,
    GraduationCap,
    Lightbulb,
    Target,
    Mail,
    Download,
    MapPin,
    Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const FloatingIcon = ({ position }: { position: [number, number, number]; children: React.ReactNode }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
            <Sphere position={position} args={[0.3, 32, 32]}>
                <meshStandardMaterial color="#8B5DFF" emissive="#8B5DFF" emissiveIntensity={0.3} />
            </Sphere>
        </Float>
    );
};

const Scene3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B9D" />

            <FloatingIcon position={[-4, 2, 0]}>🎨</FloatingIcon>
            <FloatingIcon position={[4, -2, 0]}>💡</FloatingIcon>
            <FloatingIcon position={[0, 3, -2]}>🚀</FloatingIcon>

            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};

const About = () => {
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

    const values = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Always exploring new technologies and pushing the boundaries of what's possible."
        },
        {
            icon: Heart,
            title: "User-Centered",
            description: "Designing with empathy and creating experiences that truly serve user needs."
        },
        {
            icon: Target,
            title: "Results-Driven",
            description: "Focused on delivering measurable impact and achieving business objectives."
        }
    ];

    return (
        <div className="min-h-screen py-20 px-6 relative">
            {/* 3D Background Scene */}
            <div className="absolute inset-0 opacity-30">
                <Scene3D />
            </div>

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
                        About <span className="cinematic-text">Me</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Passionate developer with a love for creating beautiful, functional digital experiences
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Personal Story */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="card-cinematic p-8">
                            <h2 className="text-3xl font-bold mb-6 flex items-center">
                                <User className="w-8 h-8 mr-3 text-primary" />
                                My Story
                            </h2>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Hello! I’m Vignesh P, a passionate developer and MCA student driven
                                    by curiosity and a love for building impactful tech solutions. From
                                    creating full-stack applications to integrating machine learning features,
                                    I thrive on turning ideas into functional, user-friendly products.
                                </p>
                                <p>
                                    I specialize in Java, React.js, and modern web technologies, and I’m always
                                    eager to explore new tools. My experience includes open-source contributions
                                    to Hoppscotch, developing real-world projects like a Vision-Based Fall Detection
                                    System, and building responsive apps with Spring Boot and Firebase.
                                </p>
                                <p>
                                    When I’m not coding, you’ll find me exploring emerging technologies, c
                                    ontributing to projects, or learning something new to sharpen my skills.
                                    I believe in continuous growth and creating technology that truly makes a difference.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Facts */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="card-cinematic p-8">
                            <h2 className="text-3xl font-bold mb-6">Quick Facts</h2>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
                                    { icon: GraduationCap, label: "Education", value: "MCA Student" },
                                    { icon: Code, label: "Specialty", value: "Java & Web Development" },
                                    { icon: Sparkles, label: "Open Source", value: "Hoppscotch Contributor" }

                                ].map((fact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                        className="flex items-center space-x-4 p-4 bg-muted/10 rounded-lg border border-border/20 hover:border-primary/30 transition-colors"
                                    >
                                        <div className="p-3 bg-primary/20 rounded-lg">
                                            <fact.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">{fact.label}</p>
                                            <p className="text-sm text-muted-foreground">{fact.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        What I <span className="cinematic-text">Value</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="text-center group"
                            >
                                <div className="card-cinematic p-6 h-full">
                                    <div className="p-4 bg-primary/20 rounded-lg mx-auto w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="card-cinematic p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                        <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            I'm always excited to work on new projects and collaborate with fellow creators.
                            Whether you have an idea or just want to chat about technology, I'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <CinematicButton variant="hero" size="lg">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </CinematicButton>
                            </Link>
                            <Link to="/resume">
                                <CinematicButton variant="outline" size="lg">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Resume
                                </CinematicButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-8 w-12 h-12 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
        </div>
    );
};

export default About;