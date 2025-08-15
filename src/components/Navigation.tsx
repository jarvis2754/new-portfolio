import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText } from "lucide-react";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { icon: Home, label: "Home", path: "/" },
        { icon: User, label: "About", path: "/about" },
        { icon: Briefcase, label: "Projects", path: "/projects" },
        { icon: Code, label: "Skills", path: "/skills" },
        { icon: FileText, label: "Resume", path: "/resume" },
        { icon: Mail, label: "Contact", path: "/contact" }
    ]

    const isActivePath = (path: string) => {
        return location.pathname === path;
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 w-full z-10 z-navigation">
                <div className="max-w-7xl mx-auto px-6 py-4 ">
                    <motion.div
                        className="backdrop-cinematic border border-[hsl(var(--border)/0.3)] rounded-2xl px-6 py-3"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between">
                            <Link to="/" className="text-2xl font-bold cinematic-text">
                                Portfolio.
                            </Link>

                            <div className="hidden md:flex items-center space-x-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <Link key={item.path}
                                            to={item.path}
                                            className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${isActivePath(item.path)
                                                ? "bg-primary/20 text-primary"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                                }`}>
                                            <Icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                            {isActivePath(item.path) &&
                                                <motion.div
                                                    className="absolute inset-0 bg-[hsl(var(--primary)/0.1)] rounded-lg border border-[hsl(var(--border)/0.3)] -z-10"
                                                    layoutId="activeTab"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                                            }
                                        </Link>
                                    )
                                })}
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </motion.div>

                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-20 z-modal md:hidden"
                    >
                        <div className="absolute inset-0 bg-[hsl(var(--background))]  backdrop-blur-xl" />
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative bg-[hsl(var(--card)/0.9)] backdrop-cinematic border-b border-[hsl(var(--border)/0.3)] "
                        >
                            <div className="px-6 py-8 space-y-6">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.path}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${isActivePath(item.path)
                                                        ? "bg-[hsl(var(--primary)/0.2)]  text-[hsl(var(--primary))]  shadow-[hsl(var(--glow-soft))] "
                                                        : "txt-muted-foreground hover:txt-foreground hover:bg-muted/50"
                                                    }`}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="text-lg font-medium">{item.label}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;