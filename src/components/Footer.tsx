import styles from "../app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div style={{ position: "relative", width: "450px", maxWidth: "100%", height: "150px", marginBottom: "0.5rem" }}>
            <Image 
              src="/ChatGPT Image Jul 3, 2026, 01_26_11 AM.png"
              alt="Soul Cation Logo"
              fill
              unoptimized
              style={{ objectFit: "contain", objectPosition: "left", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p style={{ color: "var(--support-sand)", lineHeight: 1.6, maxWidth: "250px" }}>
            Curated premium wellness experiences designed to bring clarity, presence, and profound healing.
          </p>
        </div>
        
        <div className={styles.footerCol}>
          <h4 style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.875rem", marginBottom: "1rem", color: "var(--support-sand)" }}>Explore</h4>
          <Link href="#transformation" className={styles.footerLink}>The Experience</Link>
          <Link href="#founder" className={styles.footerLink}>About Shabista</Link>
        </div>

        <div className={styles.footerCol}>
          <h4 style={{ textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.875rem", marginBottom: "1rem", color: "var(--support-sand)" }}>Connect</h4>
          <Link href="https://www.instagram.com/soulcation_retreats?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</Link>
          <Link href="#contact" className={styles.footerLink}>Contact Us</Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Soul Cation Retreat. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="#" className={styles.footerLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
