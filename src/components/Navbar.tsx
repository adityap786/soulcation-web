"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "../app/page.module.css";

const navLinks = [
  { label: "Gallery", id: "gallery" },
  { label: "Our Mission", id: "mission" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Join a Retreat", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setAtTop(currentY < 20);
      // Hide on scroll down (past 80px), show on scroll up
      if (currentY > 80) {
        setVisible(!scrollingDown);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className={`${styles.navbar} ${atTop ? styles.navbarAtTop : styles.navbarScrolled}`}
          >
            {/* Logo */}
            <button
              className={styles.navLogo}
              onClick={() => scrollTo("gallery")}
              aria-label="Back to top"
            >
              <div className={styles.navLogoImageWrap}>
                <Image
                  src="/ChatGPT Image Jul 3, 2026, 01_26_11 AM.png"
                  alt="Soul Cation Logo"
                  fill
                  unoptimized
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                    filter: atTop ? "brightness(0) invert(1)" : "brightness(0)",
                  }}
                />
              </div>
            </button>

            {/* Desktop links */}
            <nav className={styles.navLinks} aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`${styles.navLink} ${atTop ? styles.navLinkLight : styles.navLinkDark}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
              <button
                className={styles.navCta}
                onClick={() => handleNavClick("contact")}
              >
                Book Now
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className={`${styles.navHamburger} ${atTop ? styles.navLinkLight : styles.navLinkDark}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={styles.navMobileDrawer}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={styles.navMobileLink}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button
              className={styles.navMobileCta}
              onClick={() => handleNavClick("contact")}
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
