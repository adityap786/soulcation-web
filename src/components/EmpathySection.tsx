"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../app/page.module.css";

export default function EmpathySection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={container} className={styles.empathySection}>
      <div className={styles.empathyContent}>
        <div className={styles.empathyText}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.empathyHeading}
          >
            In a world that never stops, stillness is a luxury.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.empathyBody}
          >
            Constant notifications. Endless deadlines. The quiet mental fatigue that builds up when you forget to breathe. 
            <br /><br />
            You don't need another distraction. You need a space where the noise fades, cognitive load vanishes, and your mind finally has permission to rest.
          </motion.p>
        </div>

        <motion.div 
          className={styles.empathyMissionVision}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.empathyMissionBlock}>
            <h4>Our Mission</h4>
            <p>To create transformative travel experiences where people can heal through yoga, explore beautiful destinations, build meaningful connections, and celebrate life together.</p>
          </div>
          
          <div className={styles.empathyMissionBlock}>
            <h4>Our Vision</h4>
            <p>To become India’s most loved wellness travel community, inspiring people to travel with purpose, embrace holistic well-being, and create lifelong memories.</p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={styles.empathyImageWrapper}
      >
        <motion.div style={{ y: imageY, width: "100%", height: "120%", position: "absolute", top: "-10%" }}>
          <Image
            src="/empathy.png"
            alt="Barefoot walking in the forest"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.empathyImage}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
