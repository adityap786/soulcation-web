import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Soul Cation Retreat",
  description: "Read the terms and conditions governing use of Soul Cation Retreat services and website.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "3rem" }}>
          Last updated: July 2026
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            By accessing or using the Soul Cation Retreat website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            2. Retreat Bookings & Payments
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            All retreat bookings are confirmed only upon receipt of a deposit or full payment as agreed with the Soul Cation team. Prices, availability, and itineraries are subject to change. Specific booking terms will be communicated directly at the time of enquiry.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            3. Cancellation Policy
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Cancellation and refund terms vary depending on the retreat and timing of cancellation. Detailed cancellation policies will be provided at the time of booking confirmation. Soul Cation reserves the right to cancel or modify any retreat due to unforeseen circumstances, in which case guests will be offered a full refund or alternative dates.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            4. Health & Safety
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Participants are responsible for disclosing any relevant medical conditions prior to attendance. Soul Cation Retreat is not liable for any injuries or health issues arising during a retreat that are related to pre-existing or undisclosed conditions. All participants join activities voluntarily and at their own risk.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            5. Intellectual Property
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            All content on this website, including images, text, and design, is the property of Soul Cation Retreat and may not be reproduced, distributed, or used without explicit written permission.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            6. Limitation of Liability
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Soul Cation Retreat shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability in any circumstances shall not exceed the amount paid for the specific retreat in question.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
            7. Contact Us
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            For any questions regarding these Terms of Service, please contact us via WhatsApp at{" "}
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
