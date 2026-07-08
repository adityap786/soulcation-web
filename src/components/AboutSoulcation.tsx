"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

const features = [
  "Yoga & Meditation",
  "Luxury Stays",
  "Sound Healing",
  "Aqua Yoga",
  "Local Sightseeing",
  "Cultural Experiences",
  "DJ Nights & Social Gatherings",
  "Healthy Food",
  "Nature & Adventure",
];

export default function AboutSoulcation() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainerGrid}>
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.aboutTextColumn}
        >
          <h2 className={styles.aboutSuperTitle}>What is Soulcation?</h2>
          <h3 className={styles.aboutTitle}>A Vacation for Your Soul</h3>
          <p className={styles.aboutText}>
            Soulcation Retreat is where wellness meets travel. The name combines Soul + Vacation—a journey designed to nourish your body, mind, and soul.
          </p>
          <p className={styles.aboutText}>
            We believe a retreat shouldn’t just be about yoga. It’s about exploring breathtaking destinations, meeting like-minded people, and returning home feeling healthier and inspired. Whether watching the sunrise, practicing yoga by a lake, or sharing stories over dinner, every moment is crafted to help you reconnect.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.aboutCardColumn}
        >
          <div className={styles.featuresCard}>
            <h2 className={styles.aboutSuperTitleDark}>Our Philosophy</h2>
            <h4 className={styles.featuresTitle}>Heal. Explore. Connect. Celebrate.</h4>
            <p className={styles.featuresSubtitle}>
              Every Soulcation is a perfect blend of:
            </p>
            <ul className={styles.featuresGrid}>
              {features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.featureSparkle}>✨</span> {feature}
                </li>
              ))}
            </ul>
            <p className={styles.featuresOutro}>
              Because true wellness is about experiencing joy, connection, and living life to the fullest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
