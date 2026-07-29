"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div style={{ position: "relative", width: "100%", height: "170px", marginBottom: "0.2rem" }}>
            <Image
              src="/ChatGPT Image Jul 3, 2026, 01_26_11 AM.png"
              alt="Soul Cation Logo"
              fill
              unoptimized
              style={{
                objectFit: "contain",
                objectPosition: "left",
                filter: "brightness(0) invert(1)",
                transform: "scale(2.5) translateX(-30px)",
                transformOrigin: "left center"
              }}
            />
          </div>
          <p style={{ color: "var(--support-sand)", lineHeight: 1.6 }}>
            Curated premium wellness experiences designed to bring clarity, presence, and profound healing.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4 style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.875rem", marginBottom: "1rem", color: "var(--support-sand)" }}>Explore</h4>
          <button className={styles.footerLink} onClick={() => scrollTo("transformation")}>The Experience</button>
          <button className={styles.footerLink} onClick={() => scrollTo("corporate")}>Corporate Wellness</button>
        </div>

        <div className={styles.footerCol}>
          <h4 style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.875rem", marginBottom: "1rem", color: "var(--support-sand)" }}>Connect</h4>
          <a
            href="https://www.instagram.com/soulcation_retreats?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Instagram
          </a>
          <button className={styles.footerLink} onClick={() => scrollTo("contact")}>Contact Us</button>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Soul Cation Retreat. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
