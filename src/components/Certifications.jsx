import React from 'react';
import { certificationsData } from '../data/certifications';
import SectionTitle from './SectionTitle';

export default function Certifications() {
  // Gracefully kept hidden until verified certifications are provided
  if (!certificationsData.enabled || certificationsData.items.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <SectionTitle
          pill="Credentials"
          title="Certifications"
          subtitle="Verified technical credentials and certifications."
        />
        <div className="certifications-grid">
          {certificationsData.items.map((cert, index) => (
            <div key={index} className="certification-card">
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
