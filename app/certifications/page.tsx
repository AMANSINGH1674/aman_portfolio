"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./certifications.module.css";

const certifications = [
  // Row 1: Infosys
  { title: "Generative Models for Developers", type: "Infosys", file: "Generative models for developers.pdf" },
  { title: "Intro to Robotic Process Automation", type: "Infosys", file: "Introduction to Robotic Process Automation.pdf" },
  { title: "Introduction to Data Science", type: "Infosys", file: "Introduction to Data Science.pdf" },
  { title: "Agile Scrum in Practice", type: "Infosys", file: "Agile Scrum in Practice.pdf" },
  { title: "Computer Vision 101", type: "Infosys", file: "Computer Vision 101.pdf" },
  { title: "Deep Learning for Developers", type: "Infosys", file: "Deep Learning for Developers.pdf" },

  // Row 2: Meta
  { title: "Version Control", type: "Meta", file: "Version Control.pdf" },
  { title: "JavaScript", type: "Meta", file: "Java Script.pdf" },
  { title: "HTML & CSS", type: "Meta", file: "HTMLCSS.pdf" },
  { title: "Intro to Front-End Development", type: "Meta", file: "Intro to Front End.pdf" },

  // Row 3: IBM
  { title: "IBM RAG and Agentic AI", type: "IBM", file: "IBM RAG and Agentic AI.pdf" },
  { title: "Building AI Agents", type: "IBM", file: "Building AI Agents.pdf" },
  { title: "Machine Learning with Python", type: "IBM", file: "Machine Learning with Python.pdf" },
  { title: "Building AI Powered Chatbots", type: "IBM", file: "Building AI Powered Chatbots.pdf" },
  { title: "Agentic AI", type: "IBM", file: "Agentic AI.pdf" },
  { title: "Python for Data Science & AI", type: "IBM", file: "Python for Data Science, AI & Development.pdf" },

  // Row 4: Google & Santander
  { title: "Google GenAI Academy", type: "Google", file: "GoogleGenAIAcademy (1).pdf" },
  { title: "High-Performance Leadership (F1)", type: "Santander", file: "High-Performance Leadership- Lessons from Formula 1®.pdf" },

  // Row 5: AWS, Columbia & Microsoft
  { title: "AWS Generative AI", type: "AWS", file: "AWS Generative AI.pdf" },
  { title: "Columbia+ Digital Skills", type: "Columbia University", file: "Columbia+.pdf" },
  { title: "AI on Microsoft Azure", type: "Microsoft", file: "Artificial Intelligence on Microsoft Azure.pdf" },

  // Row 6: Oracle
  { title: "Oracle Data Science", type: "Oracle", file: "Oracle_DataScience.pdf" },

  // Row 7: JPM & GoldmanSachs
  { title: "Software Engineering Lite", type: "J.P. Morgan", file: "JPMorganChase&Co.pdf" },
  { title: "Software Engineering Program", type: "Goldman Sachs", file: "GoldmanSachs.pdf" },

  // Row 8: DeanInfoTech & Infosys Internship
  { title: "Software Engineering Internship", type: "DeanInfotech", file: "DeanInfotechInternship.pdf" },
  { title: "Infosys Springboard Internship", type: "Infosys", file: "InfosysInternship.pdf" },

  // Row 9: Anthropic
  { title: "Anthropic MCP", type: "Anthropic", file: "Anthropic_MCP.pdf" },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <div className={styles.pageContainer}>
      <Link href="/" className={styles.backButton}>
        ← BACK
      </Link>
      
      <header className={styles.header}>
        <h1 className={styles.title}>CERTIFICATIONS</h1>
      </header>

      <main className={styles.grid}>
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedCert(cert)}
            className={styles.certCard}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.certInfo}>
              <span className={styles.certType}>{cert.type}</span>
              <h2 className={styles.certTitle}>{cert.title}</h2>
            </div>
            <div className={styles.certFooter}>
              <span className={styles.viewText}>
                View Certificate
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCert(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleArea}>
                <span className={styles.modalType}>{selectedCert.type}</span>
                <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
              </div>
              <a 
                href={`/Certifications/${selectedCert.file}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Open in New Tab
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            <div className={styles.iframeContainer}>
              <embed
                src={`/Certifications/${encodeURIComponent(selectedCert.file)}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                className={styles.pdfViewer}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
