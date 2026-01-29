"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./experience.module.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Infosys Springboard",
    role: "AI & ML Intern",
    duration: "Sept 2025 – Dec 2025",
    points: [
      "Developed SwiftVisa, an AI-powered visa eligibility screening agent leveraging NLP and rule-based reasoning to automate preliminary visa application assessments.",
      "Designed logic pipelines to evaluate applicant profiles against visa rules, significantly reducing manual screening effort and turnaround time.",
      "Contributed to building scalable AI workflows aligned with enterprise compliance and automation standards."
    ]
  },
  {
    company: "Dean Infotech",
    role: "AI Automation Intern",
    duration: "Aug 2025 – Oct 2025",
    points: [
      "Built AI automation pipelines and Retrieval-Augmented Generation (RAG) systems for multiple real-world business use cases.",
      "Worked closely with cross-functional teams (product, backend, and data) to integrate AI solutions into ongoing projects.",
      "Assisted in deploying and optimizing AI-driven features to improve internal efficiency and knowledge retrieval."
    ]
  },
  {
    company: "Inbout (Startup)",
    role: "AI Intern",
    duration: "Feb 2025 – Apr 2025",
    points: [
      "Developed and optimized an automated AI agent handling 200+ customer calls per month, reducing manual call management time by 45% and improving response accuracy by 30%.",
      "Contributed to frontend development of the MVP platform, improving UI responsiveness and usability.",
      "Enhancements led to a 25% increase in user engagement within the first quarter post-test launch."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const isEven = index % 2 === 0;
        
        gsap.from(item.querySelector(`.${styles.card}`), {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          x: isEven ? 100 : -100,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "expo.out"
        });

        gsap.from(item.querySelector(`.${styles.node}`), {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.pageContainer} ref={containerRef}>
      
      <Link href="/" className={styles.backButton}>
        ← BACK
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>EXPERIENCE</h1>
      </header>

      <main className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={styles.experienceItem}
            ref={(el) => { itemsRef.current[index] = el; }}
          >
            <div className={styles.node}></div>
            <div className={styles.card}>
              <span className={styles.date}>{exp.duration}</span>
              <h2 className={styles.company}>{exp.company}</h2>
              <span className={styles.role}>{exp.role}</span>
              
              <ul className={styles.description}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
