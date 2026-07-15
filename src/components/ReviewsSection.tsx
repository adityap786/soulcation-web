"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import styles from "../app/page.module.css";

type ReviewItem = 
  | { type: 'text'; name: string; trip: string; text: string; initial: string }
  | { type: 'image'; imageSrc: string; location: string };

const reviews: ReviewItem[] = [
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784077053/WhatsApp_Image_2026-07-15_at_6.26.15_AM_2_w7oxaj.jpg', location: 'Tirthan Valley' },
  { type: 'text', name: 'T G Narayanan', trip: 'Tirthan Riverside Retreat', text: 'I honestly didn\'t know how much I needed this break until I was sitting by the river. The entire team went out of their way to make sure we felt completely at home. It felt less like a tour and more like traveling with family.', initial: 'T' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1783468724/WhatsApp_Image_2026-07-08_at_5.24.11_AM_vexidp.jpg', location: 'Jibhi' },
  { type: 'text', name: 'Dhruv Bajpai', trip: 'Jibhi Treehouse Escape', text: 'Jibhi was absolute magic! Waking up to the sound of the waterfall and sharing stories around the bonfire... it was exactly the reset my mind needed. Soulcation really knows how to curate an experience that heals.', initial: 'D' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784077053/WhatsApp_Image_2026-07-15_at_6.26.15_AM_1_rbiweu.jpg', location: 'Chail' },
  { type: 'text', name: 'Hemanth', trip: 'Chail Mindfulness Journey', text: 'I came as a solo traveler feeling super anxious, but within an hour I felt like I belonged. The slow-paced walks through the pine forests and the incredible local food completely won my heart. I\'m already planning my next trip.', initial: 'H' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784077053/WhatsApp_Image_2026-07-15_at_6.26.16_AM_ncerkz.jpg', location: 'Tirthan Valley' },
  { type: 'text', name: 'Sapna Bharti', trip: 'Jibhi & Tirthan Explorer', text: 'If you are looking for a sign to pack your bags, this is it! The experience was perfectly balanced—enough adventure to keep it exciting, but plenty of downtime to just breathe and take in the mountains. Highly recommend!', initial: 'S' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784077053/WhatsApp_Image_2026-07-15_at_6.26.16_AM_1_n3fzmt.jpg', location: 'Chail' },
];

const renderStars = () => (
  <div className={styles.starRating}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} size={16} fill="currentColor" stroke="currentColor" />
    ))}
  </div>
);

export default function ReviewsSection() {
  return (
    <section className={styles.reviewsSection}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.reviewsHeader}
      >
        <div className={styles.decorativeSubtitle}>✨ Testimonials ✨</div>
        <h2 className={styles.reviewsTitle}>Happy Faces & Soulful Stories</h2>
      </motion.div>

      <div className={styles.reviewsMasonry}>
        {reviews.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={styles.canvasFrameWrapper}
          >
            {item.type === 'text' ? (
              <div className={`${styles.reviewCard} ${styles.canvasFrame}`}>
                <div className={styles.quoteWatermark}>❝</div>
                {renderStars()}
                <p className={styles.reviewTextDetailed}>"{item.text}"</p>
                <div className={styles.reviewHeaderDetailed}>
                  <div className={styles.reviewAvatar}>{item.initial}</div>
                  <div className={styles.reviewMeta}>
                    <span className={styles.reviewName}>{item.name}</span>
                    <span className={styles.reviewTripBadge}>{item.trip}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${styles.reviewImageCard} ${styles.canvasFrame}`}>
                <div className={styles.polaroidImageWrapper}>
                  <img 
                    src={item.imageSrc} 
                    alt={`Happy clients at ${item.location}`} 
                    className={styles.reviewImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.polaroidCaption}>
                  <MapPin size={18} /> {item.location}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
