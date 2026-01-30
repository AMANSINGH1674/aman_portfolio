"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LiquidGlassButton from "@/components/LiquidGlassButton";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroRightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => el.classList.add('active'),
        once: true
      });
    });

    // Hero animations
    if (heroRef.current && heroTextRef.current && heroRightRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });

      tl.to(heroTextRef.current, {
        y: -120,
        scale: 0.92,
        opacity: 0.85,
        ease: "power2.out"
      }, 0)
      .to(heroRightRef.current, {
        y: -80,
        opacity: 0,
        ease: "power2.out"
      }, 0);

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        "--hero-parallax": "120px"
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        onEnter: () => heroRef.current?.classList.add("hero-active"),
        onLeaveBack: () => heroRef.current?.classList.remove("hero-active")
      });
    }

    // Footer animation - Simple fade in on scroll
    const animElements = document.querySelectorAll(".footer-name, .taste-title, .wishlist-title");
    
    animElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

  }, { scope: containerRef });

  useEffect(() => {
    // Video autoplay observer
    const videos = document.querySelectorAll('.category-video');
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          const p = video.play();
          if (p && p.catch) p.catch(() => { });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.3 });

    videos.forEach(video => videoObserver.observe(video));

    return () => {
      videoObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ overflowX: "hidden", width: "100%" }}>
      <section className="hero-section reveal" ref={heroRef}>
        <nav>
          <div className="logo">
            {/* Logo removed as per request */}
          </div>
          <ul className="nav-links" style={{ margin: "0 auto" }}>
            <li><a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>Home</a></li>
            <li><Link href="#movie-taste">About</Link></li>
            <li><a href="/Resume2.pdf" download="Resume2.pdf">Resume</a></li>
          </ul>

        </nav>

        <div className="hero-content reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="hero-text" ref={heroTextRef} style={{ marginTop: "-15rem" }}>
            <h1 style={{ fontSize: '7rem' }}><span className="graphic-word">AIML</span> <span className="designer-first">E</span>ngineer
            </h1>

            <div className="hero-subtext" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 400, color: '#aaa', marginTop: '0.5rem' }}>
                Welcome to my portfolio website
              </p>
            </div>

            <div className="services" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <div className="service-item quote-box" style={{ width: '100%', padding: '25px', display: 'block', textAlign: 'center' }}>
                <p style={{ fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.5' }}>
                  "What are you afraid of losing, when <span className="special-nothing-style">nothing</span> in this world belongs to you?"
                </p>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>~ Marcus Aurelius</p>
              </div>
            </div>
          </div>


        </div>

        {/* Lunar Eclipse Arc */}
        <div className="hero-eclipse-arc"></div>
      </section>



      <section className="about-section reveal">
      </section>





      <section className="categories-section reveal" id="projects">
        <Link href="/projects" className="category-card">
          <img src="/images/projects.jpg" alt="Projects" className="category-thumb" />
          <div className="category-title">Projects</div>
        </Link>


        <Link href="/certifications" className="category-card">
          <img src="/images/certificate.jpg" alt="Certifications" className="category-thumb" />
          <div className="category-title">Certifications</div>
        </Link>


        <Link href="/experience" className="category-card">
          <img src="/images/achievements.jpg" alt="Experience" className="category-thumb" style={{ objectPosition: 'center 20%' }} />
          <div className="category-title">Experience</div>
        </Link>


        <Link href="/skills" className="category-card">
          <img src="/images/skills.jpg" alt="Skills" className="category-thumb" />
          <div className="category-title">Skills</div>
        </Link>
      </section>

      <LiquidGlassButton />
      
      <div id="movie-taste" className="portfolio-carousel" style={{ marginTop: "6rem" }}>
        <div className="taste-title">
          MOVIE TASTE
        </div>
        <div className="carousel-container" style={{ animationDuration: "30s" }}>

          <div className="portfolio-item">
            <img src="/images/avengersend.jpg" alt="Avengers Endgame" />
          </div>

          <div className="portfolio-item">
            <img src="/images/darkknight.jpg" alt="The Dark Knight" />
          </div>

          <div className="portfolio-item">
            <img src="/images/PHP.jpg" alt="Harry Potter" />
          </div>

          <div className="portfolio-item">
            <img src="/images/interstellar.jpg" alt="Interstellar" />
          </div>

          <div className="portfolio-item">
            <img src="/images/IT.jpg" alt="IT" />
          </div>

          {/* duplicated for continuous scrolling */}

          <div className="portfolio-item">
            <img src="/images/avengersend.jpg" alt="Avengers Endgame" />
          </div>

          <div className="portfolio-item">
            <img src="/images/darkknight.jpg" alt="The Dark Knight" />
          </div>

          <div className="portfolio-item">
            <img src="/images/PHP.jpg" alt="Harry Potter" />
          </div>

          <div className="portfolio-item">
            <img src="/images/interstellar.jpg" alt="Interstellar" />
          </div>

          <div className="portfolio-item">
            <img src="/images/IT.jpg" alt="IT" />
          </div>

        </div>
      </div>

      <div className="portfolio-carousel" style={{ marginTop: "6rem" }}>
        <div className="taste-title">
          MUSIC TASTE
        </div>
        <div className="carousel-container">

          <div className="portfolio-item">
            <img src="/images/krsna.jpg" alt="KR$NA" />
          </div>

          <div className="portfolio-item">
            <img src="/images/weeknd.jpg" alt="The Weeknd" />
          </div>

          <div className="portfolio-item">
            <img src="/images/heroes_and_villains.png" alt="Heroes & Villains Project" />
          </div>

          <div className="portfolio-item">
            <img src="/images/cas.jpg" alt="Cigarettes After Sex" />
          </div>

          <div className="portfolio-item">
            <img src="/images/kdot.jpg" alt="Kendrick Lamar" />
          </div>

          {/* duplicated for continuous scrolling */}

          <div className="portfolio-item">
            <img src="/images/krsna.jpg" alt="KR$NA" />
          </div>

          <div className="portfolio-item">
            <img src="/images/weeknd.jpg" alt="The Weeknd" />
          </div>

          <div className="portfolio-item">
            <img src="/images/heroes_and_villains.png" alt="Heroes & Villains Project" />
          </div>

          <div className="portfolio-item">
            <img src="/images/cas.jpg" alt="Cigarettes After Sex" />
          </div>

          <div className="portfolio-item">
            <img src="/images/kdot.jpg" alt="Kendrick Lamar" />
          </div>

        </div>
      </div>

      <div className="wishlist-section" style={{ marginTop: "8rem", marginBottom: "2rem", position: "relative", zIndex: 2, background: "#000" }}>
        <div className="wishlist-title">
          <div className="title-top">THINGS I WANNA DO</div>
          <div className="title-bottom">BEFORE I DIE</div>
        </div>
        <div className="wishlist-container" style={{ width: "fit-content", margin: "0 auto", padding: "0 2rem" }}>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Constantly improve myself</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Make my mom proud</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Contribute to charity</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Make €100k a year</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Own a small piece of a business or startup</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Run a 10K marathon</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Climb one of the tallest mountains</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Explore all the countries with friends</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Skydive in Switzerland</span>
          </div>
          <div className="wishlist-item">
            <input type="checkbox" className="wishlist-checkbox" checked={false} readOnly />
            <span className="wishlist-text">Journey via the Glacier Express</span>
          </div>
        </div>
      </div>

      {/* Footer Eclipse Arc */}
      <div className="footer-eclipse-arc"></div>

      <footer className="site-footer">
        <div className="footer-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <div className="footer-name" style={{ textAlign: "center", width: "100%", marginBottom: "0" }}>
            Aman Singh
          </div>
          <div className="footer-left">
          </div>

          <div className="footer-links">
          </div>

        </div>

        <div className="socials-dock">
          <a href="https://linkedin.com/in/aman-singh-a1404b256" target="_blank" rel="noopener noreferrer" className="social-cube left-angled">
            <div className="front">
              <svg className="social-cube-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </div>
            <div className="side"></div>
            <div className="top"></div>
          </a>

          <a href="https://www.instagram.com/amnsn_16/" target="_blank" rel="noopener noreferrer" className="social-cube left-angled">
            <div className="front">
              <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="social-cube-icon" />
              <span>Instagram</span>
            </div>
            <div className="side"></div>
            <div className="top"></div>
          </a>

          <a href="https://github.com/AMANSINGH1674" target="_blank" rel="noopener noreferrer" className="social-cube center-focus github-highlight">
            <div className="front">
              <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="social-cube-icon" />
              <span>GitHub</span>
            </div>
            <div className="side"></div>
            <div className="top"></div>
          </a>

          <a href="https://discord.com/users/1210274427774963725" target="_blank" rel="noopener noreferrer" className="social-cube right-angled">
            <div className="front">
              <img src="https://cdn.simpleicons.org/discord/white" alt="Discord" className="social-cube-icon" />
              <span>Discord</span>
            </div>
            <div className="side"></div>
            <div className="top"></div>
          </a>

          <a href="https://x.com/AmanSin02062197" target="_blank" rel="noopener noreferrer" className="social-cube right-angled">
            <div className="front">
              <img src="https://cdn.simpleicons.org/x/white" alt="Twitter" className="social-cube-icon" />
              <span>Twitter</span>
            </div>
            <div className="side"></div>
            <div className="top"></div>
          </a>
        </div>

        <div className="footer-bottom ttcommons">
          © 2026 Aman Singh • Built with design, not templates
        </div>
      </footer>
    </div>
  );
}
