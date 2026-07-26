"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

const features = [
  {
    badge: "🌿",
    title: "Premium Stay in handpicked luxury properties",
  },
  {
    badge: "🚌",
    title: "Premium AC Luxury Travel for a comfortable journey",
  },
  {
    badge: "🧘",
    title: "Yoga, Sound Healing & Meditation Sessions",
  },
  {
    badge: "🌄",
    title: "Curated Sightseeing Experiences",
  },
  {
    badge: "🎵",
    title: "DJ Night, Bonfire & Fun Games",
  },
  {
    badge: "🤝",
    title: "A Safe Space for Solo Travellers",
  },
  {
    badge: "💚",
    title: "Connect with Positive & Like-Minded People",
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseUsSection}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.whyChooseUsHeader}
      >
        <h2 className={styles.whyChooseUsTitle}>What Makes Us Different?</h2>
      </motion.div>

      <div className={styles.whyChooseUsGridDetailed}>
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={styles.whyChooseUsItemDetailed}
          >
            <div className={styles.featureBadge}>{feature.badge}</div>
            <h3 className={styles.whyChooseUsItemTitleDetailed}>{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
