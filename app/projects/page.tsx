"use client";

import Link from "next/link";
import styles from "./projects.module.css";

const aimlProjects = [
  {
    name: "ARTIST",
    label: "AGENTIC LLM SYSTEM",
    image: "/images/artist.png",
    description: "An enterprise-grade agentic LLM system that autonomously plans, reasons, and executes complex multi-step workflows using external tools and APIs."
  },
  {
    name: "Semantic-MLES",
    label: "ML EXECUTION PLATFORM",
    image: "/images/mls.png",
    description: "A production-ready, end-to-end machine learning execution platform that manages the full model lifecycle from data ingestion to deployment using reproducible DAGs."
  }
];

const webDevProjects = [
  {
    name: "DermaSenseAI",
    label: "DERMATOLOGY PLATFORM",
    image: "/images/dermasense.png",
    description: "An educational dermatology platform that provides skin health guidance, medical document and image analysis, plus cybersecurity-aware data handling capabilities."
  },
  {
    name: "SwiftVisa",
    label: "VISA SCREENING AGENT",
    image: "/images/svisa.png",
    description: "An LLM-powered visa eligibility screening agent that uses RAG to evaluate user eligibility across countries and visa types by reasoning over curated immigration policy documents."
  }
];

const compiProjects = [
  {
    name: "Blackbox API",
    label: "REVERSE ENGINEERING",
    image: "/images/bb.png",
    description: "A reverse-engineering project that analyzes hidden endpoint behaviors, validates findings against the official Vercel app, and reproduces functionality."
  },
  {
    name: "WebCLI",
    label: "TERMINAL EMULATOR",
    image: "/images/webcli.png",
    description: "A React and TypeScript-based terminal emulator that simulates a Linux-style file system entirely within the browser's memory with theme support and tab completion."
  }
];

const upcomingProjects = [
  { name: "Kingclaw", desc: "LLM-powered web crawling and intelligence agent" },
  { name: "UXray", desc: "Multimodal UI and UX analysis agent" },
  { name: "Sentracon", desc: "Agentic security reconnaissance system" },
  { name: "UXcouncil", desc: "Collaborative multi-agent UX review system" },
  { name: "Intentrail", desc: "Natural language–driven workflow automation agent" },
  { name: "InferOS", desc: "Mini vLLM" },
  { name: "GestureNet", desc: "Real-time ASL recognition" },
  { name: "SD-AIRS", desc: "Autonomous Incident Response System" },
  { name: "Polaris", desc: "Adaptive Market Simulation & Policy Learning Platform" },
  { name: "Axiom", desc: "Decision Intelligence System" }
];

export default function Projects() {
  return (
    <div className={styles.pageContainer}>
      <Link href="/" className={styles.backButton}>
        ← BACK
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>AIML PROJECTS</h2>
        <div className={styles.grid}>
          {aimlProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageBox}>
                <img src={project.image} alt={project.name} />
              </div>
              <div className={styles.contentBox}>
                <span className={styles.projectLabel}>{project.label}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>WEB DEV PROJECTS</h2>
        <div className={styles.grid}>
          {webDevProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageBox}>
                <img src={project.image} alt={project.name} />
              </div>
              <div className={styles.contentBox}>
                <span className={styles.projectLabel}>{project.label}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>COMPI PROJECTS</h2>
        <div className={styles.grid}>
          {compiProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageBox}>
                <img src={project.image} alt={project.name} />
              </div>
              <div className={styles.contentBox}>
                <span className={styles.projectLabel}>{project.label}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>UPCOMING PROJECTS</h2>
        <div className={styles.upcomingList}>
          {upcomingProjects.map((project, index) => (
            <div key={index} className={styles.upcomingItem}>
              <span className={styles.upcomingNumber}>{(index + 1).toString().padStart(2, '0')}</span>
              <div className={styles.upcomingInfo}>
                <h3 className={styles.upcomingName}>{project.name}</h3>
                <p className={styles.upcomingDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
