"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import styles from "../app/page.module.css";

type ReviewItem = 
  | { type: 'text'; name: string; trip: string; text: string; initial: string }
  | { type: 'image'; imageSrc: string; location: string };

const reviews: ReviewItem[] = [
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784592254/WhatsApp_Image_2026-07-21_at_5.27.47_AM_hlimxd.jpg', location: 'Tirthan Valley' },
  { type: 'text', name: 'T G Narayanan', trip: 'Tirthan Riverside Retreat', text: 'I had an amazing experience during the yoga retreat at tirthan valley and am grateful for Shabista maam for being such an amazing host and making this trip so memorable', initial: 'T' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1783468724/WhatsApp_Image_2026-07-08_at_5.24.11_AM_vexidp.jpg', location: 'Jibhi' },
  { type: 'text', name: 'Dhruv Bajpai', trip: 'Jibhi Treehouse Escape', text: 'My first solo trip with shabista was an amazing and memorable experience. From the positive vibes to the warm hospitality, everything was well organized. The stay, food, and overall arrangements were excellent. The early morning yoga sessions in the mountains were truly refreshing. A special thanks to Sooraj Sir for his wonderful guidance in yoga, pranayama, and meditation. His sessions were peaceful, inspiring, and helped me feel relaxed and connected with myself. I highly recommend shabista staycation program to anyone looking for a rejuvenating yoga retreat or a memorable travel experience. Looking forward to joining again!', initial: 'D' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784077053/WhatsApp_Image_2026-07-15_at_6.26.15_AM_1_rbiweu.jpg', location: 'Chail' },
  { type: 'text', name: 'Hemanth', trip: 'Chail Mindfulness Journey', text: 'The Soulcation Yoga Retreat was a truly refreshing and transformative experience. Everything was thoughtfully planned—from the yoga sessions to the beautiful locations and warm hospitality. It was the perfect opportunity to relax, reconnect, and return feeling completely recharged. Highly recommended for anyone looking for a meaningful wellness getaway!', initial: 'H' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784592254/WhatsApp_Image_2026-07-21_at_5.27.49_AM_zgawtx.jpg', location: 'Tirthan Valley' },
  { type: 'text', name: 'Sapna Bharti', trip: 'Jibhi & Tirthan Explorer', text: 'If you are looking for a sign to pack your bags, this is it! The experience was perfectly balanced—enough adventure to keep it exciting, but plenty of downtime to just breathe and take in the mountains. Highly recommend!', initial: 'S' },
  { type: 'image', imageSrc: 'https://res.cloudinary.com/dl4mlw1dl/image/upload/v1784592254/WhatsApp_Image_2026-07-21_at_5.27.51_AM_1_gk9hsy.jpg', location: 'Chail' },
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
