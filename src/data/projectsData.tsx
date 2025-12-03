export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  description: string;
  contribution: string[];
  impact: string;
  technologies: string[];
  category: 'backend' | 'full-stack' | 'database' | 'migration';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'flush-migration',
    title: 'Backend Migration to Rust',
    company: 'Flush Crypto Casino',
    role: 'Backend Engineer',
    period: '2024',
    tagline: 'From seconds to milliseconds.',
    description:
      'Complete platform transformation. Migrated entire backend infrastructure from Node.js to Rust, reimagining performance at every layer.',
    contribution: [
      'Led backend migration from Node.js to Rust',
      'Redesigned data access patterns for optimal performance',
      'Implemented connection pooling and query optimization',
      'Reduced query execution time from 30+ seconds to milliseconds',
    ],
    impact: '99% query performance improvement. Production-ready in months.',
    technologies: ['Rust', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'migration',
    featured: true,
  },
  {
    id: 'thd-enterprise',
    title: 'Enterprise Systems Architecture',
    company: 'The Home Depot Canada',
    role: 'Software Engineer',
    period: '2022-2023',
    tagline: 'Building systems that scale.',
    description:
      'Developed robust microservices architecture for enterprise-level retail operations. Focused on reliability, scalability, and maintainability.',
    contribution: [
      'Designed and implemented microservices using Spring Boot',
      'Built RESTful APIs for inventory management system',
      'Integrated third-party systems for automated data synchronization',
      'Established coding standards and architectural patterns',
    ],
    impact: 'Enabled seamless inventory tracking across hundreds of stores.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
    category: 'full-stack',
    featured: true,
  },
  {
    id: 'mismo-foundation',
    title: 'Platform Development',
    company: 'Mismo',
    role: 'Software Engineer',
    period: '2021-2022',
    tagline: 'Where it all began.',
    description:
      'First professional experience building production systems. Learned the fundamentals of software architecture, collaboration, and purposeful design.',
    contribution: [
      'Developed full-stack features using modern frameworks',
      'Collaborated across teams to deliver integrated solutions',
      'Implemented authentication and authorization workflows',
      'Contributed to API design and database schema planning',
    ],
    impact: 'Foundation for understanding software architecture principles.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'full-stack',
    featured: false,
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'backend', label: 'Backend' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'database', label: 'Database' },
  { id: 'migration', label: 'Migration' },
] as const;
