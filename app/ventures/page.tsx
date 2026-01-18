"use client";
import { useEffect, useRef } from "react";
import styles from "./ventures.module.css";
import Link from "next/link";

export default function Ventures() {
  const bgRef = useRef<HTMLImageElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const axisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sc = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${sc * 0.3}px)`;
      if (panelRef.current) panelRef.current.style.transform = `translateY(${sc * 0.6}px)`;
      if (axisRef.current) axisRef.current.style.transform = `rotate(${sc * 0.25}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <img
          src="/images/ChatGPT Image Jan 1, 2026, 06_52_49 PM.png"
          alt="Ventures Background"
          className={styles.backgroundImage}
          ref={bgRef}
        />

        <div className={styles.scanlines}></div>

        <nav className={styles.topNav}>
            <div className={styles.navLeft}>
                <Link href="/">HOME</Link>
                <span>/</span>
                <span>VENTURES</span>
            </div>
            <div className={styles.navRight}>
                <span>2024</span>
                <span>//</span>
                <span>© SHASHISH</span>
            </div>
        </nav>

        <div className={`${styles.sideLabel} ${styles.labelLeft}`}>FIGURE.01</div>
        <div className={`${styles.sideLabel} ${styles.labelRight}`}>SYSTEM_V</div>

        <h1 className={styles.mainTitle}>VENTURES</h1>
        <div className={styles.asterisk}>*</div>

        <div className={styles.bigCenterText}>branding</div>

        <div className={styles.glassPanel} ref={panelRef}>
            <div className={`${styles.borderLine} ${styles.lineTop}`}></div>
            <div className={`${styles.borderLine} ${styles.lineBottom}`}></div>
            <div className={`${styles.borderLine} ${styles.lineLeft}`}></div>

            <div className={styles.productGallery}>
                <div className={styles.productItem}>
                   <img src="/images/devsphere Logo.png" alt="Devsphere"/>
                </div>
                <div className={styles.productItem}>
                   <img src="/images/Layerstop logo 2.png" alt="Layerstop"/>
                </div>
                <div className={styles.productItem}>
                   <img src="/images/p-Vi6acUPBQY7Itjptopv-Y2yWp4LtwBxxkEmXYHP7.png" alt="Velva Aura"/>
                </div>
            </div>

            <div className={styles.contentSection}>
                <p style={{fontSize: "12px", lineHeight: "1.4", margin: 0, fontWeight: 500}}>
                   A curated collection of distinct brand identities, each crafted with precision. From conceptualization to visual execution, these ventures represent a fusion of strategic design and bold aesthetics.
                </p>
            </div>

            <div className={styles.brandTagline}>
                EST. 2024
            </div>

            <div className={styles.bottomInfo}>
                <p style={{margin: 0}}>SCROLL TO EXPLORE</p>
                <p style={{margin: "5px 0 0"}}>v.1.0</p>
            </div>
        </div>

        <div className={styles.badgeTopLeft}>
             <svg viewBox="0 0 300 150">
                 <path d="M 10 10 L 290 10 L 290 140 L 10 140 Z" />
                 <text x="20" y="40" fill="white" fontSize="20" fontFamily="Arial" fontWeight="bold">CLASSIFIED</text>
                 <text x="20" y="70" fill="white" fontSize="12" fontFamily="Arial">SHASHISH A</text>
                 <line x1="20" y1="85" x2="280" y2="85" stroke="white" strokeWidth="1" />
                 <text x="20" y="110" fill="white" fontSize="10" fontFamily="Arial">AUTH: 894-X</text>
                 <rect x="230" y="100" width="40" height="20" fill="white"/>
             </svg>
        </div>

        <div className={`${styles.vectorAcw} ${styles.cornerTopLeft}`}>
            <svg viewBox="0 0 50 50">
                <path d="M 0 50 L 0 0 L 50 0" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        </div>

        <div className={`${styles.vectorAcw} ${styles.cornerBottomRight}`}>
            <svg viewBox="0 0 50 50">
                <path d="M 0 50 L 50 50 L 50 0" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        </div>

        <div className={`${styles.vectorAcw} ${styles.ticksMid}`}>
            <svg viewBox="0 0 140 20">
                <line x1="0" y1="10" x2="140" y2="10" stroke="white" strokeWidth="1"/>
                <line x1="10" y1="5" x2="10" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="30" y1="5" x2="30" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="50" y1="5" x2="50" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="70" y1="2" x2="70" y2="18" stroke="white" strokeWidth="2"/>
                <line x1="90" y1="5" x2="90" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="110" y1="5" x2="110" y2="15" stroke="white" strokeWidth="1"/>
                <line x1="130" y1="5" x2="130" y2="15" stroke="white" strokeWidth="1"/>
            </svg>
        </div>

        <div className={`${styles.vectorAcw} ${styles.smallCross}`}>
            <svg viewBox="0 0 30 30">
                <line x1="15" y1="0" x2="15" y2="30" stroke="white" strokeWidth="1"/>
                <line x1="0" y1="15" x2="30" y2="15" stroke="white" strokeWidth="1"/>
            </svg>
        </div>

        <div className={styles.axis} ref={axisRef}>
             <svg viewBox="0 0 60 60">
                 <line x1="30" y1="0" x2="30" y2="60" />
                 <line x1="0" y1="30" x2="60" y2="30" />
             </svg>
        </div>
      </div>
    </div>
  );
}
