"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MediaLightbox.module.css";

export type MediaItem = {
  type: "image" | "video" | "drive-video" | "drive-image";
  src: string;
  thumb?: string;
};

type Props = {
  media: MediaItem[];
  projectTitle: string;
  creator: string;
  slackMessage: string;
  preview: string | null;
  github: string | null;
  awardName: string;
  awardDesc: string;
  awardImage: string;
  gradientClass: string;
};

export default function MediaLightbox({ media, projectTitle, gradientClass }: Props) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load: only render iframe/media when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const current = media[active];
  const hasMultiple = media.length > 1;

  return (
    <div className={styles.inlinePlayer} ref={containerRef}>
      {/* Main media area */}
      <div className={styles.playerArea}>
        <div className={`${styles.playerBg} ${gradientClass}`} />
        {visible && current ? (
          <>
            {current.type === "drive-video" ? (
              <iframe
                key={current.src}
                src={`https://drive.google.com/file/d/${current.src}/preview`}
                allow="autoplay"
                allowFullScreen
                className={styles.driveEmbed}
                title={projectTitle}
              />
            ) : current.type === "drive-image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={current.src}
                src={`https://drive.google.com/uc?export=view&id=${current.src}`}
                alt={projectTitle}
                className={styles.mediaImg}
              />
            ) : current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                controls
                playsInline
                className={styles.mediaVideo}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={current.src}
                src={current.src}
                alt={projectTitle}
                className={styles.mediaImg}
              />
            )}
          </>
        ) : (
          <div className={styles.lazyPlaceholder}>
            <div className={styles.playIcon} />
          </div>
        )}
      </div>

      {/* Thumbnail strip for multi-media entries */}
      {hasMultiple && (
        <div className={styles.thumbStrip}>
          {media.map((item, i) => (
            <button
              key={item.src}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
              type="button"
              aria-label={`View item ${i + 1}`}
            >
              {item.type === "video" || item.type === "drive-video" ? (
                <div className={styles.videoThumbWrap}>
                  {item.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.thumb} alt="" />
                  ) : (
                    <div className={styles.videoThumbPlaceholder}>▶</div>
                  )}
                </div>
              ) : item.type === "drive-image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`https://drive.google.com/thumbnail?id=${item.src}&sz=w200`} alt="" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.thumb || item.src} alt="" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
