"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

export default function MissionVisionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.missionBlock}
        >
          <h2 className={styles.aboutSuperTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To create transformative travel experiences where people can heal through yoga, explore beautiful destinations, build meaningful connections, and celebrate life together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.missionBlock}
        >
          <h2 className={styles.aboutSuperTitle}>Our Vision</h2>
          <p className={styles.missionText}>
            To become India’s most loved wellness travel community, inspiring people to travel with purpose, embrace holistic well-being, and create lifelong memories through every Soulcation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
