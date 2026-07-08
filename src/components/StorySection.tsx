"use client";

import { motion } from "framer-motion";
import { Leaf, Mountain, Sparkles, Heart, Map, Sun, Music, Coffee, Compass } from "lucide-react";
import styles from "../app/page.module.css";
import React from "react";

// Custom component for a beautiful word-by-word reveal effect
const RevealText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
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
    { text: "Culture", icon: <Map size={16} /> },
    { text: "DJ Nights", icon: <Music size={16} /> },
    { text: "Healthy Food", icon: <Coffee size={16} /> },
    { text: "Adventure", icon: <Mountain size={16} /> },
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
          <motion.div 
            variants={itemVariants} 
            className={styles.storyIntroIcon}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Leaf size={40} strokeWidth={1} />
          </motion.div>
          
          <motion.h3 variants={itemVariants}>What is Soulcation?</motion.h3>
          <RevealText text="A Vacation for Your Soul." className={styles.storyHeading} />
          
          <div className={styles.storyTextContent}>
            <motion.p variants={itemVariants}>
              We think "wellness" got a little too serious. So we fixed it. A Soulcation is exactly what it sounds like: a vacation that actually fills your cup.
            </motion.p>
            <motion.p variants={itemVariants}>
              No rigid schedules. No pretending to love green juice if you don't. Just breathtaking places, deeply relaxing yoga, and the kind of laughter around a bonfire that you feel in your ribs.
            </motion.p>
            <motion.p variants={itemVariants}>
              You come to disconnect. You leave feeling deeply connected.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Mission/Vision & Badges */}
        <div className={styles.storyContentRight}>
          
          <div className={styles.storyMissionVisionCompact}>
            <motion.div variants={itemVariants} className={styles.missionBlockCompact}>
              <h4>Our Promise</h4>
              <RevealText text="To build spaces where you can finally exhale." className={styles.missionText} />
              <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: 'var(--text-secondary)'}}>
                We blend mindful healing with joyful exploration so you can remember what it feels like to just be.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.missionBlockCompact}>
              <h4>The Dream</h4>
              <RevealText text="To be India's favorite excuse to log off." className={styles.missionText} />
              <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: 'var(--text-secondary)'}}>
                A community traveling with purpose, living wildly well, and making memories that outlast the jet lag.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className={styles.storyFeaturesCompact}>
            <div className={styles.badgeCloudTitle}>
              <h4>More Than Just a Retreat</h4>
              <p>Because finding peace shouldn't mean sacrificing joy.</p>
            </div>
            
            <div className={styles.badgeCloudCompact}>
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.featureBadgeCompact}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, type: "spring" }}
                  viewport={{ once: true }}
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
