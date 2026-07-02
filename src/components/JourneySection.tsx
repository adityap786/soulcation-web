"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../app/page.module.css";

const journeySteps = [
  { step: "Arrival", desc: "Leave the noise at the door. You are welcomed into a space designed for complete decompression." },
  { step: "Welcome", desc: "A private consultation to understand your unique mental state and goals for the retreat." },
  { step: "Yoga & Breathwork", desc: "Morning sessions tailored to release tension and ground your physical body." },
  { step: "Nature Immersion", desc: "Guided silent walks through ancient forests and quiet lakesides." },
  { step: "Community", desc: "Shared meals and optional evening fire circles with like-minded individuals." },
  { step: "Reflection", desc: "Time dedicated purely to yourself. No schedule. Just being." },
];

export default function JourneySection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={container} className={styles.journeySection}>
      <div className={styles.journeyHeader}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className={styles.journeyTitle}
        >
          The Immersion
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.timelineDesc}
        >
          Every moment is intentionally curated to guide you from exhaustion to profound clarity.
        </motion.p>
      </div>

      <div className={styles.journeyContainer}>
        <div className={styles.timelineLine}>
          <motion.div style={{ scaleY }} className={styles.timelineProgress} />
        </div>
        
        {journeySteps.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.timelineItem}
          >
            <div className={styles.timelinePoint} />
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineStep}>{item.step}</h3>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </div>
            <div style={{ width: "45%" }} /> {/* Spacer for alternating layout */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
