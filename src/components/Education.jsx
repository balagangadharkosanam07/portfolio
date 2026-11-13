import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { educationData } from '../data/education';
import SectionTitle from './SectionTitle';
import '../styles/education.css';

export default function Education() {
  return (
    <section id="education" className="section section-alt" aria-label="Education">
      <div className="container">
        <SectionTitle
          pill="Academic Journey"
          title="Education"
          subtitle="Engineering foundation in Computer Science, IoT, and Cybersecurity."
        />

        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-institution">{educationData.institution}</h3>
              <div className="education-degree">{educationData.degree}</div>
              <div className="education-branch">{educationData.branch}</div>
            </div>

            <div className="education-badge-wrap">
              <span className="education-badge">{educationData.status}</span>
              <span className="education-year">Class of {educationData.graduationYear}</span>
            </div>
          </div>

          <div className="education-specialization-box">
            <div className="education-specialization-label">Specialization</div>
            <div className="education-specialization-text">
              {educationData.specialization}
            </div>
          </div>

          <div className="education-highlights-heading">Key Focus & Foundations</div>
          <div className="education-highlights-list">
            {educationData.highlights.map((item, index) => (
              <div key={index} className="education-highlight-item">
                <FaCheckCircle className="education-highlight-bullet" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
