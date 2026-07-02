"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../app/page.module.css";

// f_mp4 + vc_h264 forces Cloudinary to transcode to streaming-ready progressive MP4
const videos = [
  {
    id: "mountain_vid1",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782951525/natureportrait.MOV_uqr4ua",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782951525/natureportrait.MOV_uqr4ua.jpg",
  },
  {
    id: "mountain_vid2",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782951593/PXL_20260624_115130417_2_ipfxuw",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782951593/PXL_20260624_115130417_2_ipfxuw.jpg",
  },
  {
    id: "mountain_vid3",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782951522/IMG_1475_hzlyiv",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782951522/IMG_1475_hzlyiv.jpg",
  },
  {
    id: "mountain_vid4",
    src: "https://res.cloudinary.com/tpd0b4xt/video/upload/q_auto:good,vc_h264,w_720,f_mp4/v1782951615/PXL_20260624_115348424_s0vyh4",
    poster: "https://res.cloudinary.com/tpd0b4xt/video/upload/so_0,q_auto,f_auto,w_720/v1782951615/PXL_20260624_115348424_s0vyh4.jpg",
  },
];

let audioUnlocked = false;
const AMBIENT_AUDIO_SRC = "/alex_jauk-calm-nature-sounds-196258.mp3";

function LazyAmbientVideo({
  src,
  poster,
  className,
  audioRef,
}: {
  src: string;
  poster: string;
  className: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const srcLoadedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const startPlay = () => {
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
            el.src = src;
            el.load();
            srcLoadedRef.current = true;
          }
          startPlay();
        } else {
          el.pause();
        }
      },
      // Reduced from 300px — only start loading when clearly in view
      { rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (audioUnlocked && audioRef.current) {
      audioRef.current.play().catch(() => {});
    } else {
      setNeedsGesture(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setNeedsGesture(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleUnlockClick = () => {
    audioUnlocked = true;
    setNeedsGesture(false);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
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

export default function MountainSection() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <section className={styles.mountainSection}>
      <audio ref={audioRef} src={AMBIENT_AUDIO_SRC} loop preload="none" />

      <div className={styles.mountainHeader}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.mountainTitle}
        >
          Mountains are calling, can you hear it?
        </motion.h2>
        <p className={styles.mountainSubtitle}>Immerse yourself in nature&apos;s calm.</p>
      </div>

      <div className={styles.mountainGridWrapper}>
        <div className={styles.mountainGrid}>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.mountainVideoWrapper}
            >
              <LazyAmbientVideo
                src={video.src}
                poster={video.poster}
                className={styles.mountainVideo}
                audioRef={audioRef}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
