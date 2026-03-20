"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AwardZoom.module.css";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function AwardZoom({ src, alt, className }: Props) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openZoom = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
  }, [open]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={openZoom}
        style={{ cursor: "zoom-in" }}
      />
      {open && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onClose={close}
          onClick={close}
        >
          <button className={styles.closeBtn} onClick={close} aria-label="Close" type="button">
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className={styles.zoomedImg} onClick={(e) => e.stopPropagation()} />
        </dialog>
      )}
    </>
  );
}
