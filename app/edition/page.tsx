"use client";
import { useEffect, useRef } from "react";
import styles from "./edition.module.css";

export default function Edition() {
  const foldersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Clean ref array to remove nulls
    foldersRef.current = foldersRef.current.filter(Boolean);
    const folders = foldersRef.current;
    let animationFrameId: number;

    // Create steps for each folder animation
    const steps = folders.map((folder) => {
      if (!folder) return () => {};

      let isInteracting = false;
      // Get speed from data attribute, default 0.5
      const speed = parseFloat(folder.dataset.speed || "0.5");

      const onEnter = () => { isInteracting = true; };
      const onLeave = () => { isInteracting = false; };

      folder.addEventListener('mouseenter', onEnter);
      folder.addEventListener('mouseleave', onLeave);
      folder.addEventListener('touchstart', onEnter);
      folder.addEventListener('touchend', onLeave);

      return () => {
        if (!isInteracting && folder) {
          folder.scrollTop += speed;
          if (folder.scrollTop >= (folder.scrollHeight - folder.offsetHeight)) {
            folder.scrollTop = 0;
          }
        }
      };
    });

    const animate = () => {
      steps.forEach(step => step());
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Clean up event listeners - not strictly necessary as elements are removed
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !foldersRef.current.includes(el)) {
      foldersRef.current.push(el);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Folder 1 */}
        <div className={`${styles.folder} ${styles.folder1}`} data-speed="0.5" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div className={styles.title}>PRINT EDITION</div>
                <div className={styles.content}>
                    <div className={styles.label}>PRINT ARCHIVE</div>
                    <div className={styles.box}></div>
                    <div className={styles.barcode}></div>
                    <div className={styles.textBlock}>
                        DESIGNED FOR ATTENTION,<br/>
                        BUILT FOR PRINT,<br/>
                        MADE TO LAST.
                    </div>
                    <div className={styles.roundedFrame}>
                        <div style={{fontSize: "11px", fontWeight: "bold", color: "#4a4a3a", marginBottom: "10px"}}>FU</div>
                        <div style={{fontSize: "9px", color: "#4a4a3a", lineHeight: 1.6}}>
                            WATCH IS DEEPLY LOVED AND SOUGHT AFTER. FIRST OF ALL, IT'S THE BEST GIFT.
                        </div>
                    </div>
                    <div className={styles.circleDots}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.hexagon}></div>
                    <div style={{fontSize: "9px", color: "#4a4a3a", marginTop: "30px"}}>
                        VISUAL STUDIES<br/>TYPE · LAYOUT · SCALE
                    </div>
                </div>
            </div>
        </div>

        {/* Folder 2 */}
        <div className={`${styles.folder} ${styles.folder2}`} data-speed="0.7" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div className={styles.header}>
                    <div className={styles.time}>PROJECT LOG</div>
                    <div className={styles.logLabel}>COLLEGE<br/>CLUB<br/>POSTERS</div>
                </div>
                <div className={styles.fileTab}>CAMPUS CAMPAIGNS</div>
                <div className={styles.encryptedLabel}>OFFLINE EVENTS<br/>PRINT FIRST VISUALS</div>
                <div className={styles.gridPattern}></div>
                <div className={styles.imageDark}>
                    <img src="/images/AOT CLUB shashish submisison.png" alt="Event poster"/>
                </div>
                <div style={{fontSize: "9px", marginTop: "20px", color: "#2a2a2a"}}>
                    EVENT PROMOTION<br/>HIGH FOOTFALL
                </div>
                <div className={styles.arrowRight}></div>
                <div className={styles.imageDark}>
                    <img src="/images/shashish independence day.png" alt="Independence Day poster"/>
                </div>
            </div>
        </div>

        {/* Folder 3 */}
        <div className={`${styles.folder} ${styles.folder3}`} data-speed="0.6" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div className={styles.techLabel}>IDENTITY · MOOD<br/>VISUAL · VOICE</div>
                <div className={styles.contentBox}>
                    <img src="/images/DONDA-1.png" alt="Donda music poster"/>
                </div>
                <div className={styles.diagonalStripe}></div>
                <div className={styles.contentBox}>
                    <img src="/images/call me if your lost tyler -1.png" alt="Call Me If You Get Lost poster"/>
                </div>
                <div className={styles.plusPattern}>
                    <div className={styles.plusIcon}></div>
                    <div className={styles.plusIcon}></div>
                    <div className={styles.plusIcon}></div>
                </div>
                <div className={styles.contentBox}>
                    <img src="/images/TRIOLOGY.png" alt="Trilogy"/>
                </div>
            </div>
        </div>

        {/* Folder 4 */}
        <div className={`${styles.folder} ${styles.folder4}`} data-speed="0.8" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div style={{writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "10px", letterSpacing: "2px", marginBottom: "30px", color: "#2a2a2a"}}>
                    PRODUCT VISUALS
                </div>
                <div className={styles.imageTall}>
                    <img src="/images/ChatGPT Image Jan 1, 2026, 06_59_12 PM.png" alt=""/>
                </div>
                <div className={styles.imageDark}>
                    <img src="/images/hav final.png" alt=""/>
                </div>
            </div>
        </div>

        {/* Folder 5 */}
        <div className={`${styles.folder} ${styles.folder5}`} data-speed="0.5" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div className={styles.techLabel}>LARGE FORMAT · PUBLIC SPACES</div>
                <div className={styles.iconBox}>
                    <video src="/videos/marketing.mp4" autoPlay loop muted playsInline></video>
                </div>
                <div className={styles.codeBlock}>
                    DESIGNED TO BE SEEN<br/>BUILT FOR SCALE
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/Gemini_Generated_Image_gvm11gvm11gvm11g.png" alt=""/>
                </div>
                <div className={styles.progressBar}></div>
                <div className={styles.imageBox}>
                    <img src="/images/Gemini_Generated_Image_i7byli7byli7byli.png" alt=""/>
                </div>
            </div>
        </div>

        {/* Folder 6 */}
        <div className={`${styles.folder} ${styles.folder6}`} data-speed="0.6" ref={addToRefs}>
            <div className={styles.folderContent}>
                <div style={{writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "10px", color: "#7a8a3a", letterSpacing: "2px", marginBottom: "30px"}}>
                    PRINT EDITIONS
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/DS4EVER.png" alt=""/>
                </div>
                <div className={styles.imageBox}>
                    <img src="/images/GOOD KID MAAD CITY.png" alt=""/>
                </div>
                <div className={styles.circuit}></div>
            </div>
        </div>
      </div>
    </div>
  );
}
