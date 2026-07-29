"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/page.module.css";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784679655/ChatGPT_Image_Jul_22_2026_05_50_26_AM_suzscs.webp",
    objectPosition: "center center",
    titleLines: ["Elevate Your Team.", "Heal in the Mountains."],
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784679996/ChatGPT_Image_Jul_22_2026_05_54_53_AM_stsobx.webp",
    objectPosition: "center center",
    titleLines: ["Find Your Tribe.", "Find Yourself."],
  },
];

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section ref={container} className={styles.hero}>
      <div className={styles.heroSliderWrapper}>
        {/* Slides — crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            className={styles.heroImageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className={styles.heroImageWrapper}
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            >
              <Image
                src={slide.image}
                alt={slide.titleLines.join(" ")}
                width={1920}
                height={1080}
                loading="eager"
                unoptimized
                style={{ width: "100%", height: "100%", display: "block" }}
                className={styles.heroImage}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Transparent click-to-form overlay (below arrows) */}
        <a
          href="#contact"
          aria-label="Book your journey"
          style={{ position: "absolute", inset: 0, zIndex: 5 }}
        />

        {/* Left Arrow */}
        <button
          className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Counter */}
        <div className={styles.slideCounter}>
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
