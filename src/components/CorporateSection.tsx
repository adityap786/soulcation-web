"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "../app/page.module.css";

const accordionData = [
  {
    title: "🧘 Reduces Stress & Anxiety",
    content: "Improve emotional well-being and workplace happiness.",
  },
  {
    title: "💻 Boosts Productivity",
    content: "Sharper focus, better decision-making, and improved efficiency.",
  },
  {
    title: "❤️ Supports Physical Health",
    content: "Relieves back pain, neck stiffness, and posture issues caused by desk jobs.",
  },
  {
    title: "🌿 Improves Work-Life Balance",
    content: "Encourages mindfulness and reduces burnout.",
  },
  {
    title: "🤝 Enhances Team Engagement",
    content: "Creates a positive, energetic, and collaborative work environment.",
  },
];

function AccordionItem({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={onClick}>
        <span className={styles.accordionTitle}>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className={styles.accordionIcon} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.accordionContentWrapper}
          >
            <div className={styles.accordionContent}>
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CorporateSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="corporate" className={styles.corporateSectionDetailed}>
      <div className={styles.corporateContainer}>
        {/* Left Side: Copy & CTA */}
        <div className={styles.corporateCopy}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className={styles.corporateSuperTitle}>Corporate Wellness Through Yoga</h4>
            <h2 className={styles.corporateTitle}>Healthy Employees. Stronger Organizations.</h2>
            <p className={styles.corporateSubtitle}>
              Transform workplace wellness with expert-led yoga sessions designed to improve physical health, mental clarity, and employee engagement.
            </p>
            <h3 className={styles.corporateHighlight}>Build a Healthier, Happier Workplace</h3>
            
          </motion.div>
        </div>

        {/* Right Side: Accordion */}
        <div className={styles.corporateAccordion}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.accordionSectionTitle}>Why Choose Corporate Yoga?</h3>
            <div className={styles.accordionList}>
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
