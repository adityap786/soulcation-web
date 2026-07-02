"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

export default function FounderSection() {
  return (
    <section id="founder" className={styles.founderSection}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={styles.founderImagePlaceholder}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--bg-primary)" }}>SA</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)" }}
      >
        Hi, I'm Shabista.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--text-muted)" }}
      >
        I didn't start Soul Cation because I had life perfectly figured out. I started it because I knew what it felt like to run on empty. I built the sanctuary I desperately needed—a place where the noise stops, the expectations fade, and you are finally allowed to just be.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginTop: "1rem" }}
      >
        <button className={styles.secondaryButton} style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)", padding: "0.75rem 2rem" }}>
          Meet Shabista
        </button>
      </motion.div>
    </section>
  );
}
