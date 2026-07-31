"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/page.module.css";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784679655/ChatGPT_Image_Jul_22_2026_05_50_26_AM_suzscs.webp",
    titleLines: ["Elevate Your Team.", "Heal in the Mountains."],
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1785456147/ChatGPT_Image_Jul_31_2026_05_32_18_AM_mni7hl.png",
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
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Clicking the slider wrapper scrolls to the contact form
  const handleSliderClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[currentSlide];

  return (
    <section ref={container} className={styles.hero}>
      {/* Slider wrapper — clicking it scrolls to #contact */}
      <div
        className={styles.heroSliderWrapper}
        onClick={handleSliderClick}
        style={{ cursor: "pointer" }}
      >
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

        {/* Left Arrow — stopPropagation so it doesn't trigger the slider click */}
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
