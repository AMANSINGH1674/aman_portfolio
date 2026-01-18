"use client";

import styles from "./contact.module.css";
import FluidGlass from "@/components/FluidGlass";
import Link from "next/link";
import { Inter, Archivo_Black, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function Contact() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-[#E6E3D8] flex justify-center items-center overflow-x-hidden`}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {/* Top Bar */}
          <div className={styles.headerBar}>
            <Link href="/" aria-label="Back to Home" style={{ color: "var(--text)", display: "flex", alignItems: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
          </div>

          {/* Hero Title */}
          <div className={styles.heroTitle}>
            <h1 className={archivo.className}>Let's Connect</h1>
          </div>

          {/* Name Card */}
          <div className={`${styles.gridItem} ${styles.detailCard}`}>
            <div className={styles.labelRow}>
              <span>Name</span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={styles.contentMain}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
              </svg>
              <p className={styles.detailText} style={{ fontSize: "1.43rem" }}>AMAN SINGH</p>
            </div>
          </div>

          {/* Email Card */}
          <div className={`${styles.gridItem} ${styles.detailCard}`}>
            <div className={styles.labelRow}>
              <span>Email</span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={styles.contentMain}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amansingh160704@gmail.com" className={styles.detailText}
                style={{ fontSize: "0.9rem", wordBreak: "break-all", textDecoration: "none", color: "inherit", position: "relative", zIndex: 10 }}>
                amansingh160704@gmail.com
              </a>
              <p className={styles.subText}>For professional correspondence, kindly reach out via email.</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className={`${styles.gridItem} ${styles.detailCard}`}>
            <div className={styles.labelRow}>
              <span>Phone</span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={styles.contentMain}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="5" height="5"></rect>
                <rect x="9.5" y="3" width="5" height="5"></rect>
                <rect x="16" y="3" width="5" height="5"></rect>

                <rect x="3" y="9.5" width="5" height="5"></rect>
                <rect x="9.5" y="9.5" width="5" height="5"></rect>
                <rect x="16" y="9.5" width="5" height="5"></rect>

                <rect x="3" y="16" width="5" height="5"></rect>
                <rect x="9.5" y="16" width="5" height="5"></rect>
                <rect x="16" y="16" width="5" height="5"></rect>
              </svg>
              <p className={styles.detailText}>+91 9845633417</p>
              <p className={styles.subText}>Call availability is minimal; email remains the primary channel.</p>
            </div>
          </div>

          {/* Location Card */}
          <div className={`${styles.gridItem} ${styles.detailCard}`}>
            <div className={styles.labelRow}>
              <span>Location</span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={styles.contentMain}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className={styles.subText} style={{ marginTop: "2rem" }}>Hesarghatta Rd, Chikkasandra, Jalahalli West, Bengaluru, Myadarahalli, Karnataka 560090</p>
            </div>
          </div>

          {/* Bottom Left (Socials) */}
          <div className={`${styles.gridItem} ${styles.bottomLeft}`}>
            <span className={styles.sectionTitle}>SOCIALS</span>
            <div className={styles.socialList}>
              <span style={{ fontSize: "0.6rem", color: "#888", marginBottom: "0.5rem" }}>JANUARY 2026</span>
              <a href="https://linkedin.com/in/aman-singh-a1404b256" className={styles.socialLink}>LINKEDIN: <span>/aman-singh</span></a>
              <a href="https://www.instagram.com/amnsn_16/" className={styles.socialLink}>INSTAGRAM: <span>@_amansingh</span></a>
              <a href="#" className={styles.socialLink}>BEHANCE: <span>/amansingh</span></a>
              <a href="https://github.com/AMANSINGH1674" className={styles.socialLink}>GITHUB: <span>/AMANSINGH1674</span></a>
            </div>
          </div>

          {/* Bottom Right (Address/Footer) */}
          <div className={`${styles.gridItem} ${styles.bottomRight}`} style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ maxWidth: "200px", zIndex: 1 }}>
              <p className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>Recently added</p>
              <p style={{ fontSize: "0.75rem", marginBottom: "1rem" }}>PORTFOLIO: aman.com</p>
            </div>

            <div className={styles.addressBlock} style={{ width: "100%", zIndex: 1 }}>
              <p style={{ fontSize: "0.6rem", textAlign: "right", marginBottom: "0.5rem", color: "#888" }}>17 01 26</p>
              <div className={`${styles.serifDisplay} ${playfair.className}`}>
                Architecting intelligent <br />
                systems, not just models.
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", marginTop: "1rem", fontSize: "0.6rem", textTransform: "uppercase" }}>
                <span>Designed by<br />Aman Singh</span>
                <span>Precision Prompting</span>
              </div>
            </div>

            {/* Fluid Glass Container */}
            <FluidGlass />
          </div>

        </div>
      </div>
    </div>
  );
}
