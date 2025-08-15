import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface CinematicParticlesProps {
  className?: string;
}

const CinematicParticles = ({ className = "" }: CinematicParticlesProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine);
    console.log("Particles initialized successfully!");
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  const particlesConfig = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: "attract",
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 3,
          maxSpeed: 50,
          speed: 1,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#8B5DFF", "#FF6B9D", "#4FC3F7", "#B794F6"],
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 1,
          sync: false,
        },
      },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40,
            },
            move: {
              speed: 0.3,
            },
          },
        },
      },
      {
        maxWidth: 480,
        options: {
          particles: {
            number: {
              value: 20,
            },
            move: {
              speed: 0.2,
            },
          },
        },
      },
    ],
  }), []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-particles ${className}`}>
      <Particles
        id="cinematic-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="w-full h-full"
      />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradient-shift" />
      
      {/* Additional floating blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[hsl(var(--primary)/0.2)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[hsl(var(--accent)/0.15)] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64  bg-[hsl(var(--secondary)/0.1)]  rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default CinematicParticles;