import React, { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';
import { FaGithub, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import '../styles/projectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    // Light dismiss when clicking backdrop directly
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e) => {
    // Native Esc key pressed
    e.preventDefault();
    onClose();
  };

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="modal-project-title"
      onClick={handleBackdropClick}
      onCancel={handleCancel}
    >
      <div className="modal-header">
        <div className="modal-title-wrap">
          <span className="modal-category">{project.category}</span>
          <h3 id="modal-project-title" className="modal-title">
            {project.name}
          </h3>
        </div>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal dialog"
          autoFocus
        >
          <HiX />
        </button>
      </div>

      <div className="modal-body">
        {/* Full Overview */}
        <div className="modal-section">
          <h4 className="modal-section-title">Overview & Architecture</h4>
          <p className="modal-description">{project.fullDescription}</p>
          <p className="modal-description" style={{ fontStyle: 'italic', color: 'var(--color-navy)' }}>
            <strong>Architecture Summary:</strong> {project.architectureSummary}
          </p>
        </div>

        {/* Problem Addressed if present */}
        {project.problemAddressed && (
          <div className="modal-section">
            <h4 className="modal-section-title">Problem Addressed</h4>
            <p className="modal-description">{project.problemAddressed}</p>
          </div>
        )}

        {/* PlacementPath Specific: Implementation Details */}
        {project.implementationDetails && (
          <div className="modal-section">
            <h4 className="modal-section-title">Implementation & Deployment Details</h4>
            <ul className="modal-list">
              {project.implementationDetails.map((detail, idx) => (
                <li key={idx} className="modal-list-item">
                  <FaCheckCircle className="modal-list-bullet" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* WebSentinel Specific: 6 Detection Rules */}
        {project.detectionRules && (
          <div className="modal-section">
            <h4 className="modal-section-title">Six Deterministic Threat-Detection Rules</h4>
            <div className="modal-rules-grid">
              {project.detectionRules.map((r, idx) => (
                <div key={idx} className="modal-rule-card">
                  <div className="modal-rule-title">
                    {idx + 1}. {r.rule}
                  </div>
                  <div className="modal-rule-type">{r.type}</div>
                  <p className="modal-rule-desc">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WebSentinel Specific: Attack Simulation & Telemetry */}
        {project.attackSimulations && (
          <div className="modal-section">
            <h4 className="modal-section-title">Attack Simulation & Telemetry Hardening</h4>
            <ul className="modal-list">
              <li className="modal-list-item">
                <FaShieldAlt className="modal-list-bullet" aria-hidden="true" />
                <span>
                  <strong>Supported Attack Simulations:</strong> {project.attackSimulations.join(', ')}.
                </span>
              </li>
              {project.securityImplementation?.map((sec, idx) => (
                <li key={idx} className="modal-list-item">
                  <FaCheckCircle className="modal-list-bullet" aria-hidden="true" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Testing Info */}
        {project.testingInfo && (
          <div className="modal-section">
            <h4 className="modal-section-title">Testing & Verification</h4>
            <p className="modal-description">
              <strong style={{ color: 'var(--color-navy)' }}>Automated Test Coverage:</strong> {project.testingInfo}
            </p>
          </div>
        )}

        {/* Technology Breakdown */}
        <div className="modal-section">
          <h4 className="modal-section-title">Full Technology Stack</h4>
          <div className="modal-tech-groups">
            {Object.entries(project.techStack).map(([group, items]) => (
              <div key={group} className="modal-tech-group">
                <div className="modal-tech-group-title">{group}</div>
                <div className="modal-tech-tags">
                  {items.map((tech, idx) => (
                    <span key={idx} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
          Close
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          <FaGithub aria-hidden="true" />
          <span>View GitHub Repository</span>
        </a>
      </div>
    </dialog>
  );
}
