"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "../app/page.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "I am a complete beginner to yoga. Will I be able to keep up?",
    answer: "Absolutely. Our retreats are designed for all experience levels, from absolute beginners to advanced practitioners. Our teachers offer clear modifications and alternative variations for every posture, allowing you to practice at a pace that feels entirely safe and nurturing for your body.",
  },
  {
    question: "I want to join solo. Is that common?",
    answer: "Yes, more than 70% of our community members join us solo! Our retreats are structured to foster a warm, inclusive atmosphere where it's incredibly easy to make friends. We balance group activities, shared organic dining, and social events with plenty of quiet personal space, so you can connect with others and yourself in equal measure.",
  },
  {
    question: "What is the daily schedule like? Am I required to attend everything?",
    answer: "Every day is structured to follow a gentle rhythm—typically beginning with morning meditation and flow, followed by a hearty vegetarian brunch, afternoon excursions or sound baths, and ending with a candlelit dinner. However, nothing is compulsory. If your soul needs a morning of sleeping in or reading by the pool instead of a class, we encourage you to honor that.",
  },
  {
    question: "Do I need to bring my own yoga mat and gear?",
    answer: "No, you don't need to pack any heavy gear. We supply premium eco-friendly yoga mats, cork blocks, straps, bolsters, and comfortable meditation cushions at the retreat venue. You only need to bring comfortable, stretchy clothing for practice, a reusable water bottle, and your personal items.",
  },
  {
    question: "Are all meals vegetarian, and can you accommodate dietary allergies?",
    answer: "Yes! All meals served at our retreats are organic, chef-curated, and vegetarian (with plenty of vegan options). We focus on nourishing, farm-to-table ingredients that energize you. We are happy to accommodate gluten-free, dairy-free, nut allergies, and other food sensitivities—simply share your needs in the pre-retreat questionnaire.",
  },
  {
    question: "Are flights included? How do I get to the retreat from the airport?",
    answer: "Flights are not included in the retreat price. However, we arrange designated group shuttle pickups from the nearest airport on the arrival day, and drop-offs on the departure day, which are fully included. Once you confirm your spot, we will share the optimal arrival and departure windows so you can sync with our shuttles.",
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainerGrid}>
        {/* Left Column: Heading and description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.faqTextColumn}
        >
          <span className={styles.faqSuperTitle}>FAQ</span>
          <h2 className={styles.faqTitle}>Got Questions? We’ve Got Answers.</h2>
          <p className={styles.faqDescription}>
            Preparing for a yoga retreat should be as stress-free as the retreat itself. Here are the answers to the most common questions our community asks. If you have any other questions, feel free to reach out to us!
          </p>
        </motion.div>

        {/* Right Column: Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.faqAccordion}
        >
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className={styles.faqTrigger}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.faqIcon}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className={styles.faqContentWrapper}
                    >
                      <div className={styles.faqAnswer}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
