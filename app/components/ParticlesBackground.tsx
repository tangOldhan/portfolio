// app/components/ParticlesBackground.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 避免 SSR mismatch
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const lightColor = "#999999";
  const darkColor = "#ffffff";

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: resolvedTheme === "dark" ? darkColor : lightColor,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 2,
      },
      move: {
        enable: true,
        speed: 0.6,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Particles init={particlesInit} options={particlesOptions} />
      </motion.div>
    </AnimatePresence>
  );
}
