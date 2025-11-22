"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const galleryShots = [
  {
    id: "g1",
    title: "Urban Canvas",
    location: "City Streets",
    year: "2024",
    description:
      "Capturing the rhythm of urban life through candid moments and architectural details.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/abc.jpg",
  },
  {
    id: "g2",
    title: "Natural Harmony",
    location: "Nature Reserve",
    year: "2024",
    description:
      "Exploring the vibrant greens and textures found in natural landscapes and foliage.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/green.jpg",
  },
  {
    id: "g3",
    title: "Portrait Essence",
    location: "Studio Session",
    year: "2024",
    description:
      "A study in expression and light, revealing character through subtle details and composition.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/ig3.jpg",
  },
  {
    id: "g4",
    title: "Social Moments",
    location: "Event Photography",
    year: "2024",
    description:
      "Documenting authentic interactions and the energy of shared experiences.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/insta 1.jpg",
  },
  {
    id: "g5",
    title: "Creative Vision",
    location: "Artistic Project",
    year: "2024",
    description:
      "An experimental approach to composition, color, and visual storytelling.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/prenia.jpg",
  },
  {
    id: "g6",
    title: "Street Narrative",
    location: "Urban Exploration",
    year: "2024",
    description:
      "Finding beauty in everyday scenes and the stories that unfold in public spaces.",
    gear: "Nikon D500 · 300mm · ƒ5.6",
    image: "/images/scally 2.jpg",
  },
];

export default function Experiments() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryShots.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const activeShot = galleryShots[activeIndex];

  return (
    <section
      id="photography"
      className="relative w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white h-screen"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShot.image}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeShot.image}
              alt={activeShot.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Edge fading gradients - top and bottom only */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex h-full flex-col overflow-hidden gap-10 px-4 sm:px-8 lg:px-20">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[0.6rem] sm:text-xs text-black/60 dark:text-white/60">
            photography
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-[var(--font-bruno)] text-black dark:text-white">
            Living Archives
          </h2>
          <p className="mt-6 text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed sm:leading-relaxed">
            A curated collection of moments captured through the lens. Each frame
            represents a unique perspective, technical precision, and the creative
            vision that drives my photographic work.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 lg:mt-auto flex items-end justify-start">
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-black/20 dark:border-white/20 bg-white/80 dark:bg-black/60 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)] max-w-md">
            <div>
              <div className="flex items-center justify-between text-[0.6rem] sm:text-xs uppercase tracking-[0.25em] text-black/50 dark:text-white/50">
                <span className="whitespace-nowrap">{activeShot.year}</span>
                <span className="text-right">{activeShot.location}</span>
              </div>
              <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-black dark:text-white">{activeShot.title}</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-black/80 dark:text-white/80">
                {activeShot.description}
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-black/60 dark:text-white/60">{activeShot.gear}</p>
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-[0.6rem] sm:text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                {galleryShots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-10 w-10 rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white ${
                      idx === activeIndex
                        ? "border-black dark:border-white bg-black/10 dark:bg-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
                        : "border-black/30 dark:border-white/30 hover:border-black/60 dark:hover:border-white/60"
                    }`}
                    aria-label={`Show ${shot.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

