"use client";

import { motion } from "framer-motion";
import styles from "../app/page.module.css";

const features = [
  {
    num: "01",
    title: "Handpicked Stays & Safe Havens",
    desc: "Your comfort is our priority. Every homestay and retreat center is personally verified by our team for impeccable hygiene, premium comfort, and absolute safety.",
    badge: "100% Verified ✅"
  },
  {
    num: "02",
    title: "Multiple Trips Hosted PAN India",
    desc: "From the snow-capped peaks of the Himalayas to serene coastal retreats, we've guided thousands of souls on transformative journeys across diverse landscapes.",
    badge: "Top Rated 🌟"
  },
  {
    num: "03",
    title: "A Safe Space for Solo Travelers",
    desc: "Embark on a journey of self-discovery without worry. We cultivate a deeply supportive, secure, and welcoming environment tailored specifically for solo adventurers.",
    badge: "Solo Friendly 🙋‍♀️"
  },
  {
    num: "04",
    title: "Itineraries Curated with Love",
    desc: "No cookie-cutter tours here! Our destination experts handcraft each itinerary to balance profound wellness activities with immersive local exploration.",
    badge: "Curated 🎨"
  },
  {
    num: "05",
    title: "Seamless & Hassle-Free Booking",
    desc: "Let go of the planning stress. From your first inquiry to the journey back home, our dedicated travel concierges ensure a buttery-smooth, seamless experience.",
    badge: "Stress-Free 💆"
  },
  {
    num: "06",
    title: "Experienced & Soulful Captains",
    desc: "More than just guides, our trip leaders are experienced facilitators who bring high energy, profound empathy, and strong leadership to every retreat.",
    badge: "Expert Led 🧭"
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
        <div className={styles.decorativeSubtitle}>✨ The Soulcation Difference ✨</div>
        <h2 className={styles.whyChooseUsTitle}>Why Journey With Us?</h2>
        <p className={styles.whyChooseUsSubtitleText}>We don't just plan trips; we craft transformative experiences that linger in your soul.</p>
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
            <p className={styles.whyChooseUsItemDescDetailed}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
