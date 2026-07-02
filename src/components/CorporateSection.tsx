"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";
import Image from "next/image";

export default function CorporateSection() {
  return (
    <section className={styles.corporateSection}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden" }}
      >
        <Image
          src="/transformation.png" /* Reusing this as a calming fallback */
          alt="Corporate Wellness"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-serif)" }}
        >
          Healthy Teams Build Extraordinary Companies.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--text-muted)" }}
        >
          Burnout is not a badge of honor. Our bespoke corporate wellness programs are designed to restore focus, foster genuine connection among leadership teams, and introduce sustainable mindfulness practices into your company culture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className={styles.secondaryButton} style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)", marginTop: "1rem" }}>
            Explore Corporate Wellness
          </button>
        </motion.div>
      </div>
    </section>
  );
}
