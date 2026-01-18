import styles from "./apparel.module.css";

export default function Apparel() {
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <section className={styles.heroSection}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Oasis</div>
          <div className={styles.navIcons}>
            <button>🔍</button>
            <button>☰</button>
          </div>
        </nav>

        <div className={styles.contentWrapper}>
          <h1 className={styles.statuesTitle}>STATUES</h1>

          <div className={`${styles.sideText} ${styles.sideTextLeft}`}>
            Unique figurines: give art to your<br />loved ones!
          </div>

          <div className={`${styles.sideText} ${styles.sideTextRight}`}>
            Collectible figurines: collect your<br />own story of beauty.
          </div>

          <div className={styles.statueCard}>
            <div className={styles.statueImageWrapper}>
              <svg className={styles.statueImage} viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="statueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#d0d0d0", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#a0a0a0", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#707070", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Statue base */}
                <ellipse cx="200" cy="550" rx="120" ry="30" fill="#404040" />
                {/* Main body */}
                <path
                  d="M 200 200 Q 170 250 180 350 L 180 500 Q 180 540 200 550 Q 220 540 220 500 L 220 350 Q 230 250 200 200 Z"
                  fill="url(#statueGrad)" />
                {/* Head */}
                <ellipse cx="200" cy="180" rx="50" ry="60" fill="url(#statueGrad)" />
                {/* Butterfly crown 1 */}
                <path d="M 180 140 Q 170 130 165 135 Q 160 140 170 145 Q 175 150 180 145 Z" fill="#505050" />
                <path d="M 180 140 Q 185 130 190 135 Q 195 140 185 145 Q 180 150 180 145 Z" fill="#606060" />
                {/* Butterfly crown 2 */}
                <path d="M 200 130 Q 190 120 185 125 Q 180 130 190 135 Q 195 140 200 135 Z" fill="#505050" />
                <path d="M 200 130 Q 205 120 210 125 Q 215 130 205 135 Q 200 140 200 135 Z" fill="#606060" />
                {/* Butterfly crown 3 */}
                <path d="M 220 140 Q 215 130 210 135 Q 205 140 215 145 Q 220 150 220 145 Z" fill="#505050" />
                <path d="M 220 140 Q 230 130 235 135 Q 240 140 230 145 Q 225 150 220 145 Z" fill="#606060" />
                {/* Necklace */}
                <ellipse cx="200" cy="230" rx="35" ry="8" fill="#303030" />
                <circle cx="180" cy="232" r="3" fill="#505050" />
                <circle cx="190" cy="233" r="3" fill="#505050" />
                <circle cx="200" cy="233" r="3" fill="#505050" />
                <circle cx="210" cy="233" r="3" fill="#505050" />
                <circle cx="220" cy="232" r="3" fill="#505050" />
              </svg>

              <div className={styles.glassOverlay}>
                <div className={styles.productInfo}>
                  <span className={styles.productName}>Naivety</span>
                  <span className={styles.productPrice}>799,99 $</span>
                </div>
                <button className={styles.addToCart}>
                  🔒 Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className={styles.pagination}>
            <span className={styles.pageNumber}>01</span>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
          </div>

          <div className={styles.scrollIndicator}>↓</div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>ABOUT</h2>
        <p className={styles.aboutText}>Welcome to Oasis</p>
      </section>
    </div>
  );
}
