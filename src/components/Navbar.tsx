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
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);
  const accumulatedDown = useRef(0); // How many px scrolled downward in current streak

  useEffect(() => {
    const HIDE_THRESHOLD = 80;  // px of continuous downward scroll before hiding
    const SHOW_AFTER = 120;     // px from top after which hide-on-scroll kicks in

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setAtTop(currentY < 10);

      if (currentY < SHOW_AFTER) {
        // Near the top — always visible
        setHidden(false);
        accumulatedDown.current = 0;
      } else if (delta > 0) {
        // Scrolling down — accumulate
        accumulatedDown.current += delta;
        if (accumulatedDown.current > HIDE_THRESHOLD) {
          setHidden(true);
        }
      } else {
        // Any upward movement — show immediately
        accumulatedDown.current = 0;
        setHidden(false);
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
      <motion.header
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`${styles.navbar} ${atTop ? styles.navbarAtTop : styles.navbarScrolled}`}
      >
        {/* Logo */}
        <button
          className={styles.navLogo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <div className={styles.navLogoImageWrap}>
            <Image
              src="/ChatGPT Image Jul 3, 2026, 01_26_11 AM.png"
              alt="Soul Cation"
              fill
              unoptimized
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                filter: atTop
                  ? "brightness(0) invert(1)"
                  : "brightness(0) contrast(1)",
                transform: "translateY(15px) scale(2.2)",
                transformOrigin: "left center",
                pointerEvents: "none",
              }}
            />
          </div>
        </button>

        {/* Desktop nav links */}
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
            className={`${styles.navCta} ${atTop ? styles.navCtaLight : styles.navCtaDark}`}
            onClick={() => handleNavClick("contact")}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`${styles.navHamburger} ${atTop ? styles.navHamburgerLight : styles.navHamburgerDark}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                <X size={22} strokeWidth={2} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                <Menu size={22} strokeWidth={2} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={styles.navMobileDrawer}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className={styles.navMobileLink}
                onClick={() => handleNavClick(link.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              className={styles.navMobileCta}
              onClick={() => handleNavClick("contact")}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.navBackdrop}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
