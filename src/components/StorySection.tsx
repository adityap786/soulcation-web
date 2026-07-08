"use client";

import { motion } from "framer-motion";
import { Leaf, Mountain, Sparkles, Heart, Map, Sun, Music, Coffee, Compass } from "lucide-react";
import styles from "../app/page.module.css";

const RevealText = ({ text, delayOffset = 0 }: { text: string, delayOffset?: number }) => {
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delayOffset }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.p 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, i) => (
        <motion.span key={i} className={styles.revealWord} variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

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
            <RevealText 
              delayOffset={0.4}
              text="A journey that nourishes not just the body, but the mind and spirit. True wellness goes beyond yoga—it's about the air you breathe and the spaces you inhabit." 
            />
            <RevealText 
              delayOffset={0.8}
              text="Explore breathtaking, untouched destinations. Build genuine, lasting connections. Return home feeling lighter, deeply restored, and endlessly inspired." 
            />
            <RevealText 
              delayOffset={1.2}
              text="Whether it's sunrise meditation by a quiet lake or dancing under a canopy of stars—every moment is an invitation to finally reconnect." 
            />
          </div>
        </div>

        {/* Right Column: Badges */}
        <div className={styles.storyContentRight}>
          <motion.div variants={itemVariants} className={styles.storyFeaturesCompact}>
            <div className={styles.badgeCloudTitle}>
              <h4>More Than Just a Retreat</h4>
              <p>A perfect blend of experiences designed for joy and connection.</p>
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
