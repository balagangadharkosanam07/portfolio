import React from 'react';
import { FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import '../styles/hero.css';

export default function Hero() {
  return (
    <header id="home" className="hero" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left: Text & CTA */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="hero-status-dot" aria-hidden="true"></span>
            <span>Full-Stack & Cloud Focus</span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>

          <p className="hero-intro">{personalInfo.heroIntro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>View Projects</span>
              <FaArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              <span>Contact Me</span>
            </a>

            {/* Resume button: strictly hidden until resume file is provided */}
            {personalInfo.hasResume && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-outline btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileDownload aria-hidden="true" />
                <span>Resume</span>
              </a>
            )}
          </div>

          <div className="hero-social-links">
            <span className="hero-social-label">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right: Initials-based Profile Visual */}
        <div className="hero-visual-wrapper">
          <div className="hero-visual-glow" aria-hidden="true"></div>
          <div className="hero-avatar-card">
            <div className="hero-avatar-monogram" aria-label="BK profile monogram">
              B<span>K</span>
            </div>
            <div className="hero-avatar-name">{personalInfo.name}</div>
            <div className="hero-avatar-role">{personalInfo.title}</div>
            <div className="hero-avatar-chips">
              <span className="hero-avatar-chip">Full-Stack</span>
              <span className="hero-avatar-chip">AWS Cloud</span>
              <span className="hero-avatar-chip">Cybersecurity</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
