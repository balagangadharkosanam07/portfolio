import React from 'react';
import { FaGithub, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import '../styles/footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-name">{personalInfo.name}</div>
            <div className="footer-title">{personalInfo.title}</div>
          </div>

          <div className="footer-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-link"
              aria-label="Send Email"
            >
              <FaEnvelope aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <FaChevronUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
