import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Soul Cation Retreat",
  description: "Learn how Soul Cation Retreat collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Nav back */}
      <div style={{ padding: "1.5rem 5vw", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--accent-sage)",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <article
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "4rem 5vw 6rem",
          color: "var(--text-primary)",
          lineHeight: 1.8,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "3rem" }}>
          Last updated: July 2026
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            1. Information We Collect
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            When you fill out our enquiry form or contact us via WhatsApp, we may collect your name, email address, phone number, and any details you voluntarily share about your wellness goals or travel preferences. We do not collect any payment information directly — all bookings are handled via secure third-party channels.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            2. How We Use Your Information
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Information you share with us is used solely to respond to your enquiry, personalise your retreat experience, and keep you informed about upcoming Soul Cation journeys. We do not sell, rent, or trade your personal data to any third party.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            3. Communications
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            By submitting our enquiry form or reaching out via WhatsApp, you consent to being contacted by the Soul Cation team regarding your enquiry. You may opt out of any marketing communications at any time by replying "STOP" or contacting us directly.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            4. Cookies & Analytics
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Our website may use anonymised analytics tools to understand how visitors interact with our pages. These tools do not collect personally identifiable information. You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            5. Data Security
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of data transmitted to us.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            6. Contact Us
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            If you have any questions about this Privacy Policy or how we handle your data, please reach out via WhatsApp at{" "}
            <a
              href="https://wa.me/919716969246"
              style={{ color: "var(--accent-sage)", textDecoration: "none" }}
            >
              +91 97169 69246
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
