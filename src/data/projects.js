export const projects = [
  {
    id: 'placementpath',
    name: 'PlacementPath',
    category: 'Full-Stack Development / AWS Cloud Computing',
    status: 'Completed',
    contribution: 'Full-stack development and AWS deployment.',
    githubUrl: 'https://github.com/balagangadharkosanam07/PlacementPath',
    liveUrl: null, // No public live URL provided
    shortDescription:
      'A cloud-hosted placement information platform developed to reduce the information gap between students and campus placement opportunities, featuring an authentication system, Flask backend, and production AWS infrastructure.',
    fullDescription:
      'PlacementPath is a cloud-hosted placement information platform developed to reduce the information gap between students and campus placement opportunities. It provides an authentication and login system, with a Flask backend and MySQL database deployed using AWS cloud services.',
    problemAddressed:
      'Students often face difficulties accessing organized and centralized information about campus placement opportunities. PlacementPath aims to reduce this information gap through a web-based platform.',
    architectureSummary:
      'Multi-tier AWS architecture separating static assets on S3/CloudFront from dynamic application logic running on an EC2-hosted Flask/Gunicorn backend connected to Amazon RDS MySQL.',
    implementationDetails: [
      'Static frontend developed using HTML, CSS, and JavaScript.',
      'Flask backend developed using Python.',
      'Authentication and login functionality.',
      'MySQL database integration.',
      'Frontend hosted using Amazon S3.',
      'CloudFront used for content delivery.',
      'Flask backend deployed on Amazon EC2.',
      'Gunicorn used to run the backend application.',
      'Amazon RDS used for the production MySQL database.',
      'Elastic IP used as a stable public IP for the EC2 instance.',
    ],
    techStack: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript'],
      Backend: ['Python', 'Flask', 'Gunicorn'],
      Database: ['MySQL', 'Amazon RDS'],
      Cloud: ['Amazon EC2', 'Amazon S3', 'Amazon CloudFront', 'Elastic IP'],
    },
    tags: ['Python', 'Flask', 'AWS EC2', 'Amazon S3', 'CloudFront', 'Amazon RDS', 'MySQL', 'Full-Stack'],
  },
  {
    id: 'websentinel',
    name: 'WebSentinel',
    subtitle: 'Security Operations Center (SOC) & Log Analysis Platform',
    category: 'Full-Stack Development / Cybersecurity / Security Operations',
    status: 'Completed',
    contribution: 'Entire project development.',
    githubUrl: 'https://github.com/balagangadharkosanam07/webSentinel-SecurityLogAnalyzer',
    liveUrl: null, // No public live URL provided
    shortDescription:
      'A defensive Security Operations Center (SOC) platform designed to ingest, analyze, and monitor web application security logs using 6 deterministic detection rules, incident correlation, explainable risk scoring, and attack simulation.',
    fullDescription:
      'WebSentinel is a defensive Security Operations Center (SOC) platform designed to ingest, analyze, and monitor web application security logs. It uses deterministic detection rules, incident correlation, and explainable risk scoring to identify suspicious activities. It integrates with a Student Attendance Portal to demonstrate end-to-end security monitoring and attack simulation.',
    architectureSummary:
      'Two separate decoupled systems: EduTrack (target portal generating application telemetry) and WebSentinel SOC (security monitoring and incident analysis platform). Built on a PERN-based architecture enhanced with TypeScript, Vite, Drizzle ORM, and Neon PostgreSQL.',
    keyFeatures: [
      'Authenticated log ingestion via API keys with rate limiting.',
      'Asynchronous batch log processing with normalization and duplicate detection.',
      'Interactive Log Explorer with search, filtering, and raw JSON inspection.',
      'Six deterministic threat-detection rules with incident correlation.',
      'Explainable risk scoring from 0 to 100 with attack timeline reconstruction.',
      'SOC analytics dashboard with KPI metrics, trend charts, and top threat actor analysis.',
      'Sensitive data sanitization (passwords/tokens completely excluded).',
      'CSV audit export and attack simulation telemetry sandbox.',
    ],
    detectionRules: [
      {
        rule: 'Repeated Failed Login Attempts',
        type: 'Brute-Force Detection',
        description: 'Detects consecutive authentication failures against target accounts within defined time windows.',
      },
      {
        rule: 'High-Frequency Authentication Bursts',
        type: 'Credential-Stuffing Detection',
        description: 'Flags anomalous request spikes across distributed accounts originating from single or clustered IPs.',
      },
      {
        rule: 'Privilege Escalation Attempts',
        type: 'Unauthorized Administrative Access Probes',
        description: 'Monitors non-admin roles repeatedly querying restricted administrative endpoints.',
      },
      {
        rule: 'Attendance Data Tampering Bursts',
        type: 'Integrity Violation Detection',
        description: 'Detects abnormal modification patterns and unauthorized record update spikes.',
      },
      {
        rule: 'Scanner & Reconnaissance Probing',
        type: 'Reconnaissance Detection',
        description: 'Identifies automated scanning bots querying sensitive unmapped routes resulting in repeated 404 responses.',
      },
      {
        rule: 'SQL Injection Attempts',
        type: 'Injection Detection',
        description: 'Detects signature SQL injection patterns in query parameters, form payloads, and headers.',
      },
    ],
    incidentManagement: [
      'Correlate security events using source IP, actor ID, and time windows.',
      'Group related alerts into correlated incidents.',
      'Calculate explainable risk scores between 0 and 100.',
      'Reconstruct step-by-step attack timelines.',
    ],
    targetPortalFeatures: [
      'Student, Teacher, and Admin roles with Role-Based Access Control (RBAC).',
      'Attendance management and course directory.',
      'Administrative telemetry endpoints.',
      'Interactive security threat sandbox for live simulation demonstrations.',
    ],
    attackSimulations: [
      'SQL injection attempts',
      'Reconnaissance probes',
      'Credential stuffing',
      'Privilege escalation',
      'Attendance record tampering',
    ],
    securityImplementation: [
      'Sensitive-field sanitization and redaction.',
      'Password and token information strictly excluded from telemetry.',
      'Ingestion API authentication using an API key.',
      'Request rate limiting on ingestion endpoints.',
      'Sanitized error handling preventing information leakage.',
      'Strict schema validation of incoming log events.',
    ],
    testingInfo:
      'The project documentation reports 66 passing automated tests across the two applications and successful production builds.',
    techStack: {
      Frontend: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Recharts'],
      Backend: ['Node.js', 'Express.js', 'TypeScript'],
      Database: ['Neon PostgreSQL', 'Drizzle ORM'],
      Security: ['Scrypt Password Hashing', 'JWT (HMAC-SHA256)', 'RBAC', 'Sensitive Data Redaction', 'API Key Ingestion', 'Rate Limiting'],
      Testing: ['Automated Test Suite (66 passing tests)', 'Simulation Scripts'],
    },
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Neon PostgreSQL', 'Drizzle ORM', 'SOC', 'Cybersecurity', 'JWT'],
  },
];
