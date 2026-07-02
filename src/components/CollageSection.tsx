"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../app/page.module.css";

// f_mp4 forces Cloudinary to transcode to web-optimized MP4 (moov atom at start = progressive streaming).
// q_auto:good + vc_h264 + w_720/w_1280: high quality, right codec, right resolution for each slot.
const videos = [
  {
    id: "vid1",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782947643/breathworkportrait_dqlwqb",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782947643/breathworkportrait_dqlwqb.jpg",
    priority: true,
  },
  {
    id: "vid2",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_1280,f_mp4/v1782947623/yogaclip2potraitMOV_s6ahha",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_1280/v1782947623/yogaclip2potraitMOV_s6ahha.jpg",
    priority: false,
  },
  {
    id: "vid3",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782947614/soundhealinig1potrait.MOV_re4mjv",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782947614/soundhealinig1potrait.MOV_re4mjv.jpg",
    priority: false,
  },
  {
    id: "vid4",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782947599/yoga3potrait.MOV_biz03w",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782947599/yoga3potrait.MOV_biz03w.jpg",
    priority: false,
  },
  {
    id: "vid5",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_1280,f_mp4/v1782947611/Yogaclip1landscape.MOV_ahrd8x",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_1280/v1782947611/Yogaclip1landscape.MOV_ahrd8x.jpg",
    priority: false,
  },
  {
    id: "vid6",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782947613/soundhealingpotrait2_urlbaj",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782947613/soundhealingpotrait2_urlbaj.jpg",
    priority: false,
  },
];

// Module-level audio unlock flag — persists for the page lifetime.
let audioUnlocked = false;

interface LazyVideoProps {
  src: string;
  poster: string;
  className: string;
  isPriority?: boolean;
}

function LazyVideo({ src, poster, className, isPriority = false }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const srcLoadedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const startPlay = () => {
      // Only play once enough data is buffered (readyState >= 2 = HAVE_CURRENT_DATA)
      if (el.readyState >= 2) {
        el.play().catch(() => {});
      } else {
        el.addEventListener("canplay", () => el.play().catch(() => {}), { once: true });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!srcLoadedRef.current) {
            // Assign src only when in view, not 300px ahead — prevents all 6 loading simultaneously
            el.src = src;
            el.load();
            srcLoadedRef.current = true;
          }
          startPlay();
        } else {
          el.pause();
        }
      },
      // Reduced from 300px to 100px — prevents all videos from pre-loading at once
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const el = videoRef.current;
    if (!el) return;

    if (audioUnlocked) {
      el.muted = false;
      el.play().catch(() => {
        el.muted = true;
        el.play().catch(() => {});
      });
    } else {
      setNeedsGesture(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setNeedsGesture(false);
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch(() => {});
  };

  const handleUnlockClick = () => {
    const el = videoRef.current;
    if (!el) return;
    audioUnlocked = true;
    setNeedsGesture(false);
    el.muted = false;
    el.play().catch(() => {
      el.muted = true;
      el.play().catch(() => {});
    });
  };

  return (
    <div
      className={styles.collageVideoInner}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        poster={poster}
        className={`${className} ${isLoaded ? styles.loaded : ""}`}
        onLoadedData={() => setIsLoaded(true)}
        loop
        muted
        playsInline
        preload="none"
        crossOrigin="anonymous"
        // Priority video gets fetchpriority hint
        {...(isPriority ? { importance: "high" } : { importance: "low" })}
      />
      {isHovered && needsGesture && (
        <div className={styles.soundHint} onClick={handleUnlockClick}>
          <div className={styles.soundHintIcon}>
            <div className={styles.soundHintCircle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </div>
            <span className={styles.soundHintLabel}>Click to hear</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CollageSection() {
  return (
    <section className={styles.collageSection}>
      <div className={styles.collageHeader}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.collageTitle}
        >
          Rejuvenation &amp; healing Starts Here
        </motion.h2>
      </div>

      <div className={styles.collageGridWrapper}>
        {/* Decorations */}
        <svg className={styles.collageBadge} viewBox="0 0 100 100">
          <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
          <text fontSize="10" fontWeight="bold" letterSpacing="2" fill="currentColor">
            <textPath href="#circlePath" startOffset="0%">
              REJUVENATE • HEAL • BREATHE •
            </textPath>
          </text>
        </svg>

        <svg className={styles.collageLine} viewBox="0 0 100 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6">
          <path d="M50 0 C 100 100, 0 200, 50 300" />
        </svg>

        <svg className={styles.collageFlower} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 60 C 20 50, 10 30, 32 10 C 54 30, 44 50, 32 60" />
          <path d="M32 60 C 15 45, 0 25, 20 20 C 25 18, 30 25, 32 30" />
          <path d="M32 60 C 49 45, 64 25, 44 20 C 39 18, 34 25, 32 30" />
        </svg>

        <div className={styles.collageGrid}>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${styles.collageVideoWrapper} ${styles[video.id]}`}
            >
              <LazyVideo
                src={video.src}
                poster={video.poster}
                className={styles.collageVideo}
                isPriority={video.priority}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
