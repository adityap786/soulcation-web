"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784679655/ChatGPT_Image_Jul_22_2026_05_50_26_AM_suzscs.webp",
    objectPosition: "center center",
    superTitle: "Corporate Wellness",
    titleLines: ["Elevate Your Team.", "Heal in the Mountains."],
    subtitle: "Step out of the boardroom and into nature. Our corporate retreats combine sound healing, breathwork, and yoga with the thrill of mountain adventure to deeply restore and reconnect your team.",
    buttons: [
      {
        text: "Inquire via WhatsApp",
        link: "https://wa.me/1234567890",
        type: "whatsapp"
      }
    ]
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784679996/ChatGPT_Image_Jul_22_2026_05_54_53_AM_stsobx.webp",
    objectPosition: "center center",
    superTitle: "Soulful Group Journeys",
    titleLines: ["Find Your Tribe.", "Find Yourself."],
    subtitle: "Travel isn't just about the destinations; it's about the people you share them with. Join a community of like-minded souls, forge lifelong bonds, and experience a journey that heals and stays with you forever.",
    buttons: [
      {
        text: "Inquire via WhatsApp",
        link: "https://wa.me/1234567890",
        type: "whatsapp"
      }
    ]
  }
];

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section ref={container} className={styles.hero}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={styles.heroImageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className={styles.heroImageWrapper}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.titleLines.join(" ")}
              width={1920}
              height={1080}
              priority={currentSlide === 0}
              unoptimized
              style={{ width: "100%", height: "100%", display: "block" }}
              className={styles.heroImage}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>



      {/* Slider Indicators */}
      <div className={styles.sliderDots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`${styles.sliderDot} ${currentSlide === idx ? styles.sliderDotActive : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
