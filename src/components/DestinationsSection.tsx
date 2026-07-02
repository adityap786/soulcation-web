"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../app/page.module.css";
import { MoveRight } from "lucide-react";

const retreats = [
  {
    id: 1,
    location: "Swiss Alps",
    name: "The Alpine Reset",
    duration: "5 Days",
    theme: "Clarity & Elevation",
    image: "/alpine.png",
  },
  {
    id: 2,
    location: "Sonoran Desert",
    name: "The Desert Stillness",
    duration: "7 Days",
    theme: "Grounding & Peace",
    image: "/desert.png",
  },
];

export default function DestinationsSection() {
  return (
    <section className={styles.destinationsSection}>
      <div className={styles.destinationsHeader}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className={styles.destinationsTitle}
        >
          Signature Experiences
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.secondaryButton}
          style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
        >
          View All Retreats
        </motion.button>
      </div>

      <div className={styles.destinationsGrid}>
        {retreats.map((retreat, index) => (
          <motion.div 
            key={retreat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.destinationCard}
          >
            <div className={styles.destinationImageWrapper}>
              <Image
                src={retreat.image}
                alt={retreat.name}
                fill
                className={styles.destinationImage}
              />
            </div>
            <div className={styles.destinationInfo}>
              <span className={styles.destinationLocation}>{retreat.location}</span>
              <h3 className={styles.destinationName}>{retreat.name}</h3>
              <div className={styles.destinationMeta}>
                <span>{retreat.duration}</span>
                <span>•</span>
                <span>{retreat.theme}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
