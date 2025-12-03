export interface Experience {
  id: string;
  company: string;
  logo?: string;
  position: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Freelance';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'novacomp',
    company: 'Novacomp',
    logo: '/logos/novacomp-logo.webp',
    position: 'Software Engineer II',
    period: 'Mar 2025 - Present',
    location: 'San José, Costa Rica',
    type: 'Full-time',
    description:
      'Full-stack software engineer developing and maintaining enterprise applications for critical infrastructure systems at Instituto Costarricense de Electricidad (ICE).',
    responsibilities: [
      'Developed and maintained enterprise-level applications using Java Spring Boot and PrimeFaces',
      'Optimized database queries and stored procedures in Oracle SQL for improved performance',
      'Resolved critical bugs and implemented new features across legacy and modern systems',
      'Created dynamic reports using JasperReports for business intelligence and analytics',
      'Collaborated with cross-functional teams to deliver solutions for critical infrastructure',
    ],
    achievements: [
      'Successfully maintained and enhanced mission-critical applications for national infrastructure',
      'Improved application performance through database query optimization',
      'Delivered high-quality solutions within tight deadlines for production systems',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PrimeFaces',
      'Oracle SQL',
      'WebSphere 7',
      'JasperReports',
      'Maven',
    ],
  },
  {
    id: 'flush',
    company: 'Flush Crypto Casino',
    logo: '/logos/flush-logo.svg',
    position: 'Full-Stack Engineer & Database Engineer',
    period: 'Jan 2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Fullstack engineer owning end-to-end features across backend and frontend layers for high-performance crypto gaming platform.',
    responsibilities: [
      'Led migration from Node.js to Rust, boosting performance, security, and scalability',
      'Designed and implemented high-throughput APIs and PostgreSQL stored procedures',
      'Optimized slow queries by over 90% (from 30s to ~2-3s)',
      'Contributed to UI enhancements using Svelte, optimizing responsiveness and cross-device compatibility',
      'Created detailed technical documentation, onboarding materials, and emergency playbooks',
    ],
    achievements: [
      'Improved critical query performance by 90% (30 seconds to 2-3 seconds)',
      'Successfully migrated mission-critical backend platform from Node.js to Rust',
      'Built high-throughput APIs essential to core business operations',
      'Enhanced team agility through comprehensive documentation and playbooks',
    ],
    technologies: [
      'Rust',
      'Svelte',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Node.js',
      'GraphQL',
      'Stored Procedures',
    ],
  },
  {
    id: 'centauri',
    company: 'Centauri Technologies Corporation',
    logo: '/logos/centauri_logo.png',
    position: 'Software Engineer',
    period: 'Jan 2024 - Jun 2024',
    location: 'Panama City, Panama (Remote)',
    type: 'Contract',
    description:
      'Orchestrated automation solutions for data collection and integration using modern technologies.',
    responsibilities: [
      'Orchestrated automation of data collection across multiple tools via REST APIs',
      'Utilized OAuth2 for secure information exchange',
      'Developed microservice in Laravel to reduce manual interaction and errors',
      'Collaborated with stakeholders using Agile Scrum methodology',
    ],
    achievements: [
      'Significantly reduced manual interaction, errors, and processing time',
      'Delivered solution as university graduation project',
      'Successfully integrated multiple external systems via REST APIs',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'OAuth2'],
  },
  {
    id: 'thd',
    company: 'The Home Depot Canada',
    logo: '/logos/TheHomeDepot.svg',
    position: 'Contract Software Engineer',
    period: 'Nov 2022 - Jan 2024',
    location: 'Ontario, Canada (Remote)',
    type: 'Contract',
    description:
      'Designed and managed microservices for enterprise retail systems using Java Spring Boot and SAP Hybris.',
    responsibilities: [
      'Led transition of microservices to utilize Google Cloud IAM authentication',
      'Verified code review, integrity, and deployment readiness',
      'Coordinated rollback procedures in case of application failures',
      'Updated microservices to address outdated dependencies and security vulnerabilities',
      'Resolved bugs in backend, databases, and Google Cloud platform',
    ],
    achievements: [
      'Ensured seamless integration of IAM authentication within GCP infrastructure',
      'Significantly improved system stability and reliability through proactive maintenance',
      'Reduced security vulnerabilities through systematic dependency updates',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'SAP Hybris',
      'GCP',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Maven',
      'JUnit',
      'Mockito',
    ],
  },
  {
    id: 'aeropost',
    company: 'Aeropost',
    logo: '/logos/aeropost-logo.png',
    position: 'Software Engineer',
    period: 'Mar 2022 - Oct 2022',
    location: 'San Jose, Costa Rica',
    type: 'Full-time',
    description:
      'Designed and developed microservices for customer service integration and API enhancements.',
    responsibilities: [
      'Created and integrated APIs for company-wide use',
      'Developed microservice for external customer service application integration (chatbot)',
      'Optimized existing code and implemented comprehensive unit testing',
      'Created thorough documentation and adopted efficient design patterns',
      'Provided technical support for other applications',
    ],
    achievements: [
      'Enhanced customer service capabilities through chatbot integration',
      'Recognized as key facilitator in expanding technological capabilities',
      'Maintained high code quality through SonarQube and testing practices',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'Jenkins',
      'JUnit',
      'Mockito',
      'SonarQube',
    ],
  },
  {
    id: 'mismo',
    company: 'Mismo',
    logo: '/logos/mismo-Logo.svg',
    position: 'Full Stack Developer',
    period: 'Oct 2021 - Mar 2022',
    location: 'San Francisco, California (Remote)',
    type: 'Internship',
    description:
      'Played key role implementing and enhancing internal human resources application using modern full-stack technologies.',
    responsibilities: [
      'Designed user interface using React with Redux and Hooks',
      'Integrated frontend seamlessly with Ruby on Rails and GraphQL backend',
      'Led meetings as part of agile Scrum methodology (sprint leader twice)',
      'Optimized existing code and addressed backend performance issues',
      'Participated in software architecture reviews and documentation',
    ],
    achievements: [
      'Successfully delivered first phase of human resources tool',
      'Led two sprints as sprint leader',
      'Optimized legacy application code',
      'Contributed to overall project success from architecture to implementation',
    ],
    technologies: [
      'React',
      'Redux',
      'Ruby on Rails',
      'GraphQL',
      'JavaScript',
      'PostgreSQL',
      'MySQL',
      'Docker',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    logo: '/logos/freelancer_logo.webp',
    position: 'Freelance Software Developer',
    period: 'Jun 2020 - Sep 2021',
    location: 'Costa Rica',
    type: 'Freelance',
    description: 'Developed custom applications for diverse clients using various technologies.',
    responsibilities: [
      'Developed desktop betting application using Java Swing and PostgreSQL',
      'Created reservation system for yoga school using React, Spring Boot, and Firebase',
      'Managed full development lifecycle from requirements to deployment',
      'Provided ongoing support and maintenance',
    ],
    achievements: [
      'Successfully delivered multiple projects across different domains',
      'Gained experience with diverse technology stacks',
      'Managed client relationships and project requirements independently',
    ],
    technologies: ['Java', 'Java Swing', 'React', 'Spring Boot', 'PostgreSQL', 'Firebase'],
  },
];

export const education = [
  {
    institution: 'Universidad Cenfotec',
    logo: '/cenfotec.png',
    degree: "Master's in Database Technologies",
    period: '2026 - 2028 (Expected)',
    description:
      'Advanced study in database architecture, design, data warehousing, analytics, governance, security, and agile methodologies.',
  },
  {
    institution: 'Tecnológico de Costa Rica',
    logo: '/logo-tec.png',
    degree: "Bachelor's in Computer Engineering",
    period: '2018 - Aug 2024',
    description:
      'Comprehensive foundation in software engineering, algorithms, data structures, and system design.',
  },
  {
    institution: 'Google Cloud Skills Boost',
    logo: '/logos/Google-Cloud.jpg',
    degree: 'Google Associate Cloud Engineer',
    period: 'April 2024',
    description: 'Certified in Google Cloud Platform fundamentals, infrastructure, and services.',
  },
  {
    institution: 'SCRUMstudy',
    logo: '/logos/scrum-study.avif',
    degree: 'Scrum Fundamentals Certified',
    period: 'August 2021',
    description: 'Certified in Scrum methodology and agile software development practices.',
  },
];

export const skills = {
  'Backend Development': ['Spring Boot', 'Java 8/11/17', 'Rust', 'Node.js', 'Ruby on Rails'],
  'Database Engineering': [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Stored Procedures',
    'Query Optimization',
  ],
  'Frontend Development': ['React', 'Redux', 'Svelte', 'TypeScript', 'JavaScript'],
  'Cloud & DevOps': [
    'Google Cloud Platform',
    'AWS',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Maven',
    'CI/CD',
  ],
  'API Development': ['RESTful APIs', 'GraphQL', 'OAuth2', 'Microservices'],
  Architecture: [
    'Software Architecture',
    'System Design',
    'Microservices',
    'Performance Optimization',
  ],
};
