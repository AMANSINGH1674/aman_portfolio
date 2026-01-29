"use client";

import Link from "next/link";
import styles from "./skills.module.css";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "/images/tools/python.png" },
      { name: "JavaScript", icon: "/images/tools/javascript.png" },
      { name: "TypeScript", icon: "/images/tools/typescript.png" },
      { name: "SQL", icon: "/images/tools/sql.png" },
      { name: "Golang", icon: "/images/tools/golang.png" },
      { name: "Apache Cassandra", icon: "/images/tools/cassandra.png" }
    ]
  },
  {
    category: "AI / ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "/images/tools/tensorflow.png" },
      { name: "PyTorch", icon: "/images/tools/pytorch.png" },
      { name: "HuggingFace", icon: "/images/tools/huggingface.png" },
      { name: "OpenCV", icon: "/images/tools/opencv.png" },
      { name: "RAG", icon: "/images/tools/rag.png" },
      { name: "AI Agents", icon: "/images/tools/aiagent.png" },
      { name: "Agentic Workflows", icon: "/images/tools/agenticworkflows.png" },
      { name: "LLM fine-tuning", icon: "/images/tools/llmfinetuning.png" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Flask", icon: "/images/tools/flask.png" },
      { name: "FastAPI", icon: "/images/tools/fastapi.png" },
      { name: "ReactJs", icon: "/images/tools/reactjs.png" },
      { name: "NextJs", icon: "/images/tools/nextjs.png" },
      { name: "N8N Automation", icon: "/images/tools/n8n.png" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/images/tools/aws.png" },
      { name: "Kubernetes", icon: "/images/tools/kubernetes.png" },
      { name: "Docker", icon: "/images/tools/docker.png" },
      { name: "Git", icon: "/images/tools/git.png" },
      { name: "MLflow", icon: "/images/tools/mlflow.png" },
      { name: "Prometheus", icon: "/images/tools/Prometheus.png" },
      { name: "Apache Hadoop", icon: "/images/tools/apachehadoop.png" },
      { name: "Supabase", icon: "/images/tools/supabase.png" }
    ]
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "PostgreSQL", icon: "/images/tools/postgresql.png" },
      { name: "Redis", icon: "/images/tools/redis.png" },
      { name: "Tatum API", icon: "/images/tools/tatumapi.png" }
    ]
  }
];

export default function Skills() {
  return (
    <div className={styles.pageContainer}>
      <Link href="/" className={styles.backButton}>
        ← BACK
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>Skills</h1>
      </header>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
        
        {skillGroups.map((group, index) => (
          <div key={index} className={styles.skillGroup}>
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <div className={styles.grid}>
              {group.skills.map((skill, i) => (
                <div key={i} className={styles.skillCard}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.orbRing}></div>
                    <div className={styles.iconBox}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement?.querySelector(`.${styles.iconPlaceholder}`)?.removeAttribute('style');
                        }}
                      />
                      <div className={styles.iconPlaceholder} style={{ display: 'none' }}>
                        {skill.name[0]}
                      </div>
                    </div>
                    <div className={styles.orbReflect}></div>
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
