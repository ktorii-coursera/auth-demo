"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MediaLightbox.module.css";
import AwardZoom from "./AwardZoom";

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

export default function MediaLightbox({ media, projectTitle, creator, slackMessage, preview, github, awardName, awardDesc, awardImage, gradientClass }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasMedia = media.length > 0;

  const openGallery = useCallback(() => {
    if (!hasMedia) return;
    setActive(0);
    setOpen(true);
  }, [hasMedia]);

  const close = useCallback(() => {
    setOpen(false);
    dialogRef.current?.close();
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i > 0 ? i - 1 : media.length - 1));
  }, [media.length]);

  const next = useCallback(() => {
    setActive((i) => (i < media.length - 1 ? i + 1 : 0));
  }, [media.length]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next, close]);

  // Pause video when switching slides
  useEffect(() => {
    videoRef.current?.pause();
  }, [active]);

  const current = media[active];

  return (
    <>
      {/* Trigger – replaces the old static media div */}
      <button
        className={`${styles.trigger} ${!hasMedia ? styles.emptyTrigger : ""}`}
        onClick={openGallery}
        aria-label={hasMedia ? `View ${projectTitle} media` : undefined}
        type="button"
      >
        <div className={`${styles.triggerBg} ${gradientClass}`} />
        <div className={styles.playIcon} />
        <span className={styles.triggerLabel}>
          {hasMedia ? `${media.length} item${media.length > 1 ? "s" : ""}` : "Demo"}
        </span>
      </button>

      {/* Lightbox dialog */}
      {open && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onClose={close}
          onClick={(e) => {
            if (e.target === dialogRef.current) close();
          }}
        >
          <button className={styles.closeBtn} onClick={close} aria-label="Close" type="button">
            ✕
          </button>

          <div className={styles.dialogBody}>
            {/* Left: media column */}
            <div className={styles.mediaCol}>
              {/* Nav arrows */}
              {media.length > 1 && (
                <>
                  <button
                    className={`${styles.navBtn} ${styles.navPrev}`}
                    onClick={prev}
                    aria-label="Previous"
                    type="button"
                  >
                    ‹
                  </button>
                  <button
                    className={`${styles.navBtn} ${styles.navNext}`}
                    onClick={next}
                    aria-label="Next"
                    type="button"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Main media */}
              <div className={styles.mainMedia}>
                {current.type === "drive-video" ? (
                  <iframe
                    key={current.src}
                    src={`https://drive.google.com/file/d/${current.src}/preview`}
                    allow="autoplay"
                    allowFullScreen
                    className={styles.driveEmbed}
                  />
                ) : current.type === "drive-image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={current.src}
                    src={`https://drive.google.com/uc?export=view&id=${current.src}`}
                    alt={projectTitle}
                  />
                ) : current.type === "video" ? (
                  <video
                    ref={videoRef}
                    key={current.src}
                    src={current.src}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={current.src} src={current.src} alt={projectTitle} />
                )}
              </div>

              {/* Thumbnail strip */}
              {media.length > 1 && (
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
                            <div style={{ width: "100%", height: "100%", background: "#1a1a2e" }} />
                          )}
                          <div className={styles.videoThumbIcon}>▶</div>
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

            {/* Right: description panel */}
            <div className={styles.descPanel}>
              <div className={styles.descPanelHeader}>
                <span className={styles.descPanelCreator}>{creator}</span>
              </div>
              <div className={styles.descPanelAward}>
                <AwardZoom src={awardImage} alt={awardName} className={styles.descPanelAwardImg} />
              </div>
              <div className={styles.descPanelBody}>
                {slackMessage.split("\n").map((line, i) => (
                  <p key={i} className={line === "" ? styles.descPanelBreak : undefined}>
                    {line}
                  </p>
                ))}
              </div>
              {(preview || github) && (
                <div className={styles.descPanelLinks}>
                  {preview && (
                    <a href={preview} className={styles.descPanelLink} target="_blank" rel="noreferrer">
                      → Preview
                    </a>
                  )}
                  {github && (
                    <a href={github} className={styles.descPanelLink} target="_blank" rel="noreferrer">
                      → GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
