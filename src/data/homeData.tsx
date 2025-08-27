import React from 'react';

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: React.createElement('div'),
    title: 'Custom Software Development',
    description:
      'Full-stack web applications, microservices, and enterprise solutions using React, Angular, Spring Boot, and Rust.',
  },
  {
    icon: React.createElement('div'),
    title: 'Database Performance Tuning',
    description:
      'SQL optimization, stored procedures, indexing strategies, and performance analysis for PostgreSQL and MySQL.',
  },
  {
    icon: React.createElement('div'),
    title: 'Legacy System Modernization',
    description:
      'Platform migrations, technology stack upgrades, and process automation to reduce operational costs and improve efficiency.',
  },
  {
    icon: React.createElement('div'),
    title: 'API Development & Integration',
    description:
      'RESTful APIs, GraphQL endpoints, OAuth2 authentication, and third-party system integrations for data automation.',
  },
  {
    icon: React.createElement('div'),
    title: 'DevOps & Infrastructure',
    description:
      'CI/CD pipeline setup, Docker containerization, cloud deployment on AWS/GCP, and monitoring solutions.',
  },
  {
    icon: React.createElement('div'),
    title: 'Technical Consulting & Support',
    description:
      'Code reviews, architecture assessments, troubleshooting production issues, and technical documentation.',
  },
];

export const technologies = [
  'Rust',
  'Java',
  'Spring Boot',
  'Svelte',
  'React',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'GraphQL',
  'AWS',
  'GCP',
  'Ruby on Rails',
];

export const companies = [
  { name: 'The Home Depot', logo: '/logos/TheHomeDepot.svg' },
  { name: 'Ice', logo: '/logos/ice-logo.png' },
  { name: 'Aeropost', logo: '/logos/aeropost-logo.png' },
  { name: 'Infinitro', logo: '/logos/infinitro-logo.svg' },
  { name: 'Flush', logo: '/logos/flush-logo.svg' },
  { name: 'Fomo', logo: '/logos/fomo-logo2.png' },
  { name: 'Infoya', logo: '/logos/infoya-logo.png' },
  { name: 'Novacomp', logo: '/logos/novacomp-logo.png' },
  { name: 'Centauri Technologies', logo: '/logos/centauri_logo.png' },
  { name: 'Mismo', logo: '/logos/mismo-Logo.svg' },
];
