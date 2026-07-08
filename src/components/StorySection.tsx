"use client";

import { motion } from "framer-motion";
import { Leaf, Mountain, Sparkles, Heart, Map, Sun, Music, Coffee, Compass } from "lucide-react";
import styles from "../app/page.module.css";

export default function StorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const features = [
    { text: "Yoga & Meditation", icon: <Leaf size={16} /> },
    { text: "Luxury Stays", icon: <Sun size={16} /> },
    { text: "Sound Healing", icon: <Sparkles size={16} /> },
    { text: "Aqua Yoga", icon: <Heart size={16} /> },
    { text: "Local Sightseeing", icon: <Compass size={16} /> },
    { text: "Cultural Experiences", icon: <Map size={16} /> },
    { text: "DJ Nights", icon: <Music size={16} /> },
    { text: "Healthy Food", icon: <Coffee size={16} /> },
    { text: "Nature", icon: <Mountain size={16} /> },
  ];

  return (
    <section className={styles.storySection}>
      <motion.div 
        className={styles.storyGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Intro */}
        <div className={styles.storyIntroLeft}>
          <motion.div variants={itemVariants} className={styles.storyIntroIcon}>
            <Leaf size={40} strokeWidth={1} />
          </motion.div>
          <motion.h3 variants={itemVariants}>What is Soulcation?</motion.h3>
          <motion.h2 variants={itemVariants}>A Vacation for Your Soul</motion.h2>
          
          <div className={styles.storyTextContent}>
            <motion.p variants={itemVariants}>
              Soulcation Retreat is where wellness meets travel and meaningful experiences. The name “Soulcation” combines Soul + Vacation—a journey that nourishes not just your body, but your mind and soul.
            </motion.p>
            <motion.p variants={itemVariants}>
              We believe a retreat shouldn’t only be about yoga. It should be about exploring breathtaking destinations, creating unforgettable memories, meeting like-minded people, and returning home feeling healthier, happier, and inspired.
            </motion.p>
            <motion.p variants={itemVariants}>
              Whether you’re watching the sunrise in the mountains, practicing yoga by a lake, dancing under the stars at our DJ night, or sharing stories with new friends over dinner, every Soulcation is designed to help you reconnect—with yourself and with others.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Mission/Vision & Badges */}
        <div className={styles.storyContentRight}>
          
          <div className={styles.storyMissionVisionCompact}>
            <motion.div variants={itemVariants} className={styles.missionBlockCompact}>
              <h4>Our Mission</h4>
              <p>To create transformative travel experiences where people can heal through yoga, explore beautiful destinations, build meaningful connections, and celebrate life together.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.missionBlockCompact}>
              <h4>Our Vision</h4>
              <p>To become India’s most loved wellness travel community, inspiring people to travel with purpose, embrace holistic well-being, and create lifelong memories.</p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className={styles.storyFeaturesCompact}>
            <div className={styles.badgeCloudTitle}>
              <h4>More Than Just a Retreat</h4>
              <p>A perfect blend of experiences for joy and connection.</p>
            </div>
            
            <div className={styles.badgeCloudCompact}>
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.featureBadgeCompact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={{ color: "var(--accent-sage)" }}>{feature.icon}</span>
                  {feature.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
