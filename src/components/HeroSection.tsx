"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves down slower than scroll, creating depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  // Cinematic fade out on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const headlineLines = ["Where teams", "remember how to talk."];

  return (
    <section ref={container} className={styles.hero}>
      {/* Background layer with Parallax + Continuous slow scale (Ken Burns) */}
      <motion.div style={{ y: imageY }} className={styles.heroImageContainer}>
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src="https://res.cloudinary.com/tpd0b4xt/image/upload/v1783021140/tirthan-valley_qqcntz.jpg"
            alt="Lush green landscapes of Tirthan Valley"
            fill
            priority
            unoptimized
            sizes="100vw"
            style={{ objectPosition: "center 75%" }}
            className={styles.heroImage}
          />
          {/* Subtle gradient overlay to ensure text contrast and premium feel */}
          <div className={styles.heroOverlay}></div>
        </motion.div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className={styles.heroContent}>
        

        {/* Masked split-text reveal for main headline */}
        <h1 className={styles.heroTitle}>
          {headlineLines.map((line, lineIndex) => (
            <span key={lineIndex} className={styles.heroTitleLineWrapper}>
              <motion.span
                className={styles.heroTitleLine}
                initial={{ y: "100%", rotateZ: 2 }}
                animate={{ y: "0%", rotateZ: 0 }}
                transition={{ duration: 1.2, delay: 0.6 + lineIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroSubtitle}
        >
          Boardrooms can't fix burnout. We host high-impact leadership retreats in a quiet mountain valley—designed for unplugged strategy, deep restoration, and the kind of conversations that don't happen over Zoom.
        </motion.p>

        {/* The beautiful Glassmorphic WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroActions}
        >
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <div className={styles.whatsappButtonGlow}></div>
            <div className={styles.whatsappButtonInner}>
              <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Inquire via WhatsApp
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
