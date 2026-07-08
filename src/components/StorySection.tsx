"use client";

import { motion } from "framer-motion";
import { Leaf, Mountain, Sparkles, Heart, Users, Map, Sun, Music, Coffee, Compass } from "lucide-react";
import styles from "../app/page.module.css";

export default function StorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const features = [
    { text: "Yoga & Meditation", icon: <Leaf size={18} /> },
    { text: "Luxury Stays", icon: <Sun size={18} /> },
    { text: "Sound Healing", icon: <Sparkles size={18} /> },
    { text: "Aqua Yoga", icon: <Heart size={18} /> },
    { text: "Local Sightseeing", icon: <Compass size={18} /> },
    { text: "Cultural Experiences", icon: <Map size={18} /> },
    { text: "DJ Nights & Gatherings", icon: <Music size={18} /> },
    { text: "Healthy Food", icon: <Coffee size={18} /> },
    { text: "Nature & Adventure", icon: <Mountain size={18} /> },
  ];

  return (
    <section className={styles.storySection}>
      <motion.div 
        className={styles.storyIntro}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className={styles.storyIntroIcon}>
          <Leaf size={48} strokeWidth={1} />
        </motion.div>
        <motion.h3 variants={itemVariants}>What is Soulcation?</motion.h3>
        <motion.h2 variants={itemVariants}>A Vacation for Your Soul</motion.h2>
        <motion.p variants={itemVariants}>
          Soulcation Retreat is where wellness meets travel and meaningful experiences. The name “Soulcation” combines Soul + Vacation—a journey that nourishes not just your body, but your mind and soul.
        </motion.p>
        <motion.p variants={itemVariants}>
          We believe a retreat shouldn’t only be about yoga. It should be about exploring breathtaking destinations, creating unforgettable memories, meeting like-minded people, and returning home feeling healthier, happier, and inspired.
        </motion.p>
        <motion.p variants={itemVariants}>
          Whether you’re watching the sunrise in the mountains, practicing yoga by a lake, dancing under the stars at our DJ night, or sharing stories with new friends over dinner, every Soulcation is designed to help you reconnect—with yourself and with others.
        </motion.p>
      </motion.div>

      <motion.div 
        className={styles.storyPhilosophy}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className={styles.philosophyCard}>
          <div className={styles.philosophyIconWrapper}>
            <Heart size={28} />
          </div>
          <h4>Heal</h4>
          <p>Reconnect with your body and mind through yoga, meditation, sound healing, and mindful wellness practices.</p>
        </motion.div>
        <motion.div variants={itemVariants} className={styles.philosophyCard}>
          <div className={styles.philosophyIconWrapper}>
            <Map size={28} />
          </div>
          <h4>Explore</h4>
          <p>Discover the beauty, culture, and hidden gems of incredible destinations across India through curated sightseeing experiences.</p>
        </motion.div>
        <motion.div variants={itemVariants} className={styles.philosophyCard}>
          <div className={styles.philosophyIconWrapper}>
            <Users size={28} />
          </div>
          <h4>Connect</h4>
          <p>Build genuine friendships with like-minded people who share a passion for wellness, travel, and personal growth.</p>
        </motion.div>
        <motion.div variants={itemVariants} className={styles.philosophyCard}>
          <div className={styles.philosophyIconWrapper}>
            <Sparkles size={28} />
          </div>
          <h4>Celebrate</h4>
          <p>Life is meant to be enjoyed. Dance at our DJ nights, laugh around bonfires, join fun group activities, and create memories that last a lifetime.</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.storyFeatures}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 variants={itemVariants}>More Than Just a Retreat</motion.h3>
        <motion.p variants={itemVariants}>At Soulcation Retreat, every journey is a perfect blend of experiences, because true wellness isn’t only about finding peace—it’s also about experiencing joy, connection, and living life to the fullest.</motion.p>
        
        <motion.div className={styles.badgeCloud} variants={itemVariants}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className={styles.featureBadge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: "var(--accent-sage)" }}>{feature.icon}</span>
              {feature.text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.storyMissionVision}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className={styles.missionBlock}>
          <h4>Our Mission</h4>
          <p>To create transformative travel experiences where people can heal through yoga, explore beautiful destinations, build meaningful connections, and celebrate life together.</p>
        </motion.div>
        <motion.div variants={itemVariants} className={styles.missionBlock}>
          <h4>Our Vision</h4>
          <p>To become India’s most loved wellness travel community, inspiring people to travel with purpose, embrace holistic well-being, and create lifelong memories through every Soulcation.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
