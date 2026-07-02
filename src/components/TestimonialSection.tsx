"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../app/page.module.css";

export default function TestimonialSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={container} className={styles.testimonialSection}>
      <motion.div style={{ y, width: "100%", height: "140%" }} className={styles.testimonialImageWrapper}>
        <Image
          src="/testimonial.png"
          alt="Guest experiencing calm at Soul Cation Retreat"
          fill
          className={styles.testimonialImage}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={styles.testimonialContent}
      >
        <blockquote className={styles.testimonialQuote}>
          "I came seeking rest. I left with myself. This was the first time in years I heard my own thoughts."
        </blockquote>
        <div className={styles.testimonialAuthor}>
          <span className={styles.testimonialName}>Elena M.</span>
          <span className={styles.testimonialRetreat}>The Alpine Reset, Swiss Alps</span>
        </div>
      </motion.div>
    </section>
  );
}
