import React from 'react';
import '../styles/sectionTitle.css';

export default function SectionTitle({ pill, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''}`}>
      {pill && <div className="section-pill">{pill}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
