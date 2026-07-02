"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";
import Image from "next/image";

export default function BookingSection() {
  return (
    <section className={styles.bookingSection}>
      <Image
        src="/hero.png" // Reusing hero image for dramatic bookend
        alt="Peaceful landscape"
        fill
        className={styles.bookingBg}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
      >
        <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontFamily: "var(--font-serif)", lineHeight: 1.1 }}>
          Your journey back to yourself begins here.
        </h2>
        <button className={styles.primaryButton} style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", letterSpacing: "0.1em" }}>
          Book Your Retreat
        </button>
      </motion.div>
    </section>
  );
}
