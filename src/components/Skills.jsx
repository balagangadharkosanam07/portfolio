import React from 'react';
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaptopCode,
  FaNodeJs,
  FaServer,
  FaLayerGroup,
  FaAws,
  FaCloud,
  FaCloudDownloadAlt,
  FaDatabase,
  FaGithub,
  FaNetworkWired,
  FaShieldAlt,
  FaFileCode,
} from 'react-icons/fa';
import {
  SiVite,
  SiExpress,
  SiFlask,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiLinux,
} from 'react-icons/si';
import { skillCategories } from '../data/skills';
import SectionTitle from './SectionTitle';
import '../styles/skills.css';

const iconMap = {
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  FaJs: <FaJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaReact: <FaReact />,
  SiVite: <SiVite />,
  FaLaptopCode: <FaLaptopCode />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiFlask: <SiFlask />,
  FaServer: <FaServer />,
  SiJsonwebtokens: <SiJsonwebtokens />,
  FaLayerGroup: <FaLayerGroup />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  FaAws: <FaAws />,
  FaCloud: <FaCloud />,
  FaCloudDownloadAlt: <FaCloudDownloadAlt />,
  FaDatabase: <FaDatabase />,
  SiVercel: <SiVercel />,
  FaGithub: <FaGithub />,
  FaNetworkWired: <FaNetworkWired />,
  SiLinux: <SiLinux />,
  FaShieldAlt: <FaShieldAlt />,
  FaFileCode: <FaFileCode />,
};

export default function Skills() {
  const getBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case 'intermediate':
        return 'level-intermediate';
      case 'beginner':
        return 'level-beginner';
      case 'learning':
        return 'level-learning';
      default:
        return 'level-beginner';
    }
  };

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <SectionTitle
          pill="Capabilities"
          title="Technical Skills"
          subtitle="A categorized inventory of programming languages, full-stack frameworks, cloud platforms, and cybersecurity tools."
        />

        <div className="skills-categories-grid">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`skill-category-card priority-${category.priority}`}
            >
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <span className="skill-category-badge">{category.badge}</span>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon" aria-hidden="true">
                        {iconMap[skill.icon] || <FaFileCode />}
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className={`skill-level-badge ${getBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
