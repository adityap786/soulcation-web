"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../app/page.module.css";

export default function TransformationSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="transformation" ref={container} className={styles.transformationSection}>
      <motion.div className={styles.transformationImageWrapper}>
        <motion.div style={{ y: imageY, width: "100%", height: "120%", position: "absolute", top: "-10%" }}>
          <Image
            src="https://res.cloudinary.com/tpd0b4xt/image/upload/v1783021134/240_F_1302839630_QlUV97gZP3y2YWZ4SD7Pw580Q4oGkCQ4_a4qjw6.jpg"
            alt="Serene lake reflecting the sunrise"
            fill
            unoptimized
            className={styles.transformationImage}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={styles.transformationContent}
      >
        <h2 className={styles.transformationHeading}>
          More than a retreat.<br />A return to yourself.
        </h2>
        <p className={styles.transformationBody}>
          We don't just offer yoga classes in beautiful locations. Soul Cation is a meticulously designed environment intended to peel back the layers of stress you've accumulated. 
          <br /><br />
          Through guided presence, deep healing, and connection to nature, you will find the clarity that modern life so easily obscures. You are not buying a vacation; you are investing in a profound life shift.
        </p>
      </motion.div>
    </section>
  );
}
