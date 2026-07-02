"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";
import { Users, Leaf, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  const reasons = [
    {
      icon: <Users className={styles.trustIcon} />,
      title: "Community",
      desc: "You join a circle of individuals dedicated to growth, vulnerability, and mutual support."
    },
    {
      icon: <Leaf className={styles.trustIcon} />,
      title: "Nature",
      desc: "Our spaces are carefully selected to provide the grounding energy only untouched nature can offer."
    },
    {
      icon: <ShieldCheck className={styles.trustIcon} />,
      title: "Authenticity",
      desc: "No forced positivity. We honor where you are and provide genuine tools for your journey."
    }
  ];

  return (
    <section className={styles.trustSection}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontFamily: "var(--font-serif)" }}
      >
        Why Our Guests Return
      </motion.h2>
      
      <div className={styles.trustGrid}>
        {reasons.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={styles.trustItem}
          >
            {item.icon}
            <h3 className={styles.trustItemTitle}>{item.title}</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
