import React from 'react';
import { FaLaptopCode, FaServer, FaAws, FaShieldAlt, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from './SectionTitle';
import '../styles/about.css';

export default function About() {
  const focusAreas = [
    {
      title: 'Full-Stack Web Development',
      description: 'Designing end-to-end web architectures, connecting responsive user interfaces with resilient backends.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Backend Development',
      description: 'Building RESTful APIs, implementing robust authentication workflows, and optimizing database persistence layers.',
      icon: <FaServer />,
    },
    {
      title: 'AWS Cloud Computing',
      description: 'Deploying reliable cloud infrastructure utilizing Amazon EC2, Amazon S3, CloudFront, and Amazon RDS.',
      icon: <FaAws />,
    },
    {
      title: 'Cybersecurity',
      description: 'Engineering defensive telemetry, security log analysis, and automated threat detection mechanisms.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Application Development',
      description: 'Translating real-world operational challenges into scalable, production-ready software solutions.',
      icon: <FaCode />,
    },
  ];

  return (
    <section id="about" className="section section-alt" aria-label="About Me">
      <div className="container">
        <SectionTitle
          pill="Background"
          title="About Me"
          subtitle="Engineering modern web solutions and secure cloud infrastructure."
        />

        <div className="about-grid">
          <div className="about-narrative-card">
            <p className="about-intro-text">
              {personalInfo.aboutIntro}
            </p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-navy)' }}>
              Primary Technical Interests
            </h3>

            <div className="about-focus-grid">
              {focusAreas.map((area, index) => (
                <div key={index} className="about-focus-card">
                  <div className="about-focus-icon" aria-hidden="true">
                    {area.icon}
                  </div>
                  <h4 className="about-focus-title">{area.title}</h4>
                  <p className="about-focus-desc">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
