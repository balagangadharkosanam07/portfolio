import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheck, FaInfoCircle } from 'react-icons/fa';

export default function ProjectCard({ project, onOpenDetails }) {
  // Select 3 salient feature bullets for card preview
  const keyHighlights =
    project.id === 'placementpath'
      ? [
          'AWS Cloud Infrastructure: EC2, S3, CloudFront, RDS, and Elastic IP.',
          'Decoupled multi-tier deployment running Gunicorn and Flask.',
          'Centralized placement platform with secure authentication and MySQL database.',
        ]
      : [
          'Six deterministic threat detection rules with incident correlation.',
          'EduTrack integration with live attack simulation and telemetry.',
          'Defensive SOC platform validated by 66 passing automated tests.',
        ];

  return (
    <article className="project-card">
      <div className="project-card-header">
        <div className="project-meta-top">
          <span className="project-category">{project.category}</span>
          <span className="project-status-badge">{project.status}</span>
        </div>

        <h3 className="project-title">{project.name}</h3>
        {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}

        <p className="project-description">{project.shortDescription}</p>

        <div className="project-features">
          <div className="project-features-heading">Core Engineering Highlights</div>
          <div className="project-features-list">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="project-feature-item">
                <FaCheck className="project-feature-icon" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
        >
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>

        {/* Live Demo button strictly ONLY rendered if a real live URL is provided */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        )}

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onOpenDetails(project)}
          aria-label={`View architectural details for ${project.name}`}
        >
          <FaInfoCircle aria-hidden="true" />
          <span>Deep Dive</span>
        </button>
      </div>
    </article>
  );
}
