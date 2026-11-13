import React from 'react';
import { FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import { experienceData } from '../data/experience';
import SectionTitle from './SectionTitle';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Experience & Current Focus">
      <div className="container">
        <SectionTitle
          pill="Current Status"
          title="Experience & Focus"
          subtitle="Honest academic dedication paired with hands-on full-stack product engineering."
        />

        <div className="experience-card">
          <div className="experience-header-wrap">
            <h3 className="experience-headline">{experienceData.headline}</h3>
            <span className="experience-status-badge">
              <FaBriefcase aria-hidden="true" />
              <span>{experienceData.badge}</span>
            </span>
          </div>

          <div className="experience-meta">
            <span className="experience-institution">{experienceData.institution}</span>
            <span aria-hidden="true">•</span>
            <span>{experienceData.period}</span>
          </div>

          <p className="experience-desc">{experienceData.description}</p>

          <div className="experience-focus-title">Active Engineering Preparation</div>
          <div className="experience-focus-list">
            {experienceData.focusPoints.map((point, index) => (
              <div key={index} className="experience-focus-item">
                <FaCheckCircle className="experience-focus-icon" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
