"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784593654/WhatsApp_Image_2026-07-21_at_5.29.41_AM_gvp93v.jpg",
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
    image: "https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784593613/ChatGPT_Image_Jul_21_2026_05_56_15_AM_rsvskn.webp",
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
              fill
              priority={currentSlide === 0}
              unoptimized
              sizes="100vw"
              style={{ objectPosition: slide.objectPosition || "center center" }}
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className={styles.heroContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {slide.superTitle && (
              <h3 className={styles.heroSuperTitle}>{slide.superTitle}</h3>
            )}
            
            <h1 className={styles.heroTitle}>
              {slide.titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className={styles.heroTitleLineWrapper}>
                  <motion.span
                    className={styles.heroTitleLine}
                    initial={{ y: "100%", rotateZ: 2 }}
                    animate={{ y: "0%", rotateZ: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 + lineIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroSubtitle}
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroActions}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              {slide.buttons.map((btn, idx) => {
                if (btn.type === "whatsapp") {
                  return (
                    <Link key={idx} href={btn.link} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                      <div className={styles.whatsappButtonGlow}></div>
                      <div className={styles.whatsappButtonInner}>
                        <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                        </svg>
                        {btn.text}
                      </div>
                    </Link>
                  );
                }
                return (
                  <Link key={idx} href={btn.link} className={btn.type === "primary" ? styles.primaryButton : styles.secondaryButton}>
                    {btn.text}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

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
