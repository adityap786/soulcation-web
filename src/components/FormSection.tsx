"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export default function FormSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("success") === "true") {
        setIsSuccess(true);
        window.history.replaceState({}, document.title, window.location.pathname + "#contact");
      }
    }
  }, []);

  return (
    <section id="contact" className={styles.formSection}>
      <div className={styles.formContainer}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.formHeader}
        >
          <h2 className={styles.formTitle}>Begin Your Journey</h2>
          <p className={styles.formSubtitle}>
            Connect with us to curate your personalized wellness experience. Let stillness be the start.
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className={styles.formWrapper}
            style={{ textAlign: "center", padding: "2rem 1rem" }}
          >
            <h3 style={{ fontSize: "1.25rem", color: "var(--accent-sage)", marginBottom: "1rem" }}>Inquiry Sent Successfully</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Thank you for reaching out. We will connect with you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.formWrapper}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="4977138a-22d4-47d6-9dee-d0a6daafb40f" />
            <input type="hidden" name="subject" value="New Inquiry from Soul Cation Website!" />
            <input type="hidden" name="redirect" value="http://localhost:3000/?success=true#contact" />

            <div className={styles.inputGroup}>
              <div className={styles.inputField}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="First Name" placeholder="Jane" autoComplete="given-name" required />
              </div>
              <div className={styles.inputField}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="Last Name" placeholder="Doe" autoComplete="family-name" required />
              </div>
            </div>

            <div className={styles.inputField}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="Email" placeholder="jane@example.com" autoComplete="email" required />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="interest">Experience of Interest</label>
              <select id="interest" name="Interest">
                <option value="Signature Retreat">Signature Retreat</option>
                <option value="Corporate Wellness">Corporate Wellness</option>
                <option value="Private Coaching">Private Coaching</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
            </div>

            <div className={styles.inputField}>
              <label htmlFor="message">Your Intentions (Optional)</label>
              <textarea id="message" name="Message" rows={4} placeholder="What brings you to Soul Cation?"></textarea>
            </div>

            <button type="submit" className={styles.formSubmitButton}>
              Send Inquiry
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
