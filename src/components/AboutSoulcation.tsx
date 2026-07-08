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
      <div className={styles.aboutContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.aboutHeader}
        >
          <h2 className={styles.aboutSuperTitle}>What is Soulcation?</h2>
          <h3 className={styles.aboutTitle}>A Vacation for Your Soul</h3>
          <p className={styles.aboutText}>
            Soulcation Retreat is where wellness meets travel and meaningful experiences.
          </p>
          <p className={styles.aboutText}>
            The name “Soulcation” combines Soul + Vacation—a journey that nourishes not just your body, but your mind and soul.
            We believe a retreat shouldn’t only be about yoga. It should be about exploring breathtaking destinations, creating unforgettable memories, meeting like-minded people, and returning home feeling healthier, happier, and inspired.
          </p>
          <p className={styles.aboutText}>
            Whether you’re watching the sunrise in the mountains, practicing yoga by a lake, dancing under the stars at our DJ night, or sharing stories with new friends over dinner, every Soulcation is designed to help you reconnect—with yourself and with others.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.philosophyBlock}
        >
          <div className={styles.philosophyHeader}>
            <h2 className={styles.aboutSuperTitle}>Our Philosophy</h2>
            <h3 className={styles.philosophyTitle}>Heal. Explore. Connect. Celebrate.</h3>
            <p className={styles.aboutText}>
              Every Soulcation Retreat is thoughtfully designed to bring together four beautiful experiences.
            </p>
          </div>

          <div className={styles.featuresCard}>
            <h4 className={styles.featuresTitle}>More Than Just a Retreat</h4>
            <p className={styles.featuresSubtitle}>
              At Soulcation Retreat, every journey is a perfect blend of:
            </p>
            <ul className={styles.featuresGrid}>
              {features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.featureSparkle}>✨</span> {feature}
                </li>
              ))}
            </ul>
            <p className={styles.featuresOutro}>
              Because true wellness isn’t only about finding peace—it’s also about experiencing joy, connection, and living life to the fullest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
