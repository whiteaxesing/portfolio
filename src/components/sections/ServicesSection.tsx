'use client';
import { Container, Typography, Box, Card } from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  CloudSync as MigrationIcon,
  IntegrationInstructions as ApiIcon,
  Settings as DevOpsIcon,
  BugReport as SupportIcon,
} from '@mui/icons-material';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Custom Software Development',
    description: 'Full-stack web applications, microservices, and enterprise solutions using React, Angular, Spring Boot, and Rust.',
  },
  {
    icon: <DatabaseIcon sx={{ fontSize: 40 }} />,
    title: 'Database Performance Tuning',
    description: 'SQL optimization, stored procedures, indexing strategies, and performance analysis for PostgreSQL and MySQL.',
  },
  {
    icon: <MigrationIcon sx={{ fontSize: 40 }} />,
    title: 'Legacy System Modernization',
    description: 'Platform migrations, technology stack upgrades, and process automation to reduce operational costs and improve efficiency.',
  },
  {
    icon: <ApiIcon sx={{ fontSize: 40 }} />,
    title: 'API Development & Integration',
    description: 'RESTful APIs, GraphQL endpoints, OAuth2 authentication, and third-party system integrations for data automation.',
  },
  {
    icon: <DevOpsIcon sx={{ fontSize: 40 }} />,
    title: 'DevOps & Infrastructure',
    description: 'CI/CD pipeline setup, Docker containerization, cloud deployment on AWS/GCP, and monitoring solutions.',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: 'Technical Consulting & Support',
    description: 'Code reviews, architecture assessments, troubleshooting production issues, and technical documentation.',
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: 8, background: '#FEFEFE' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'text.primary', mb: 6 }}>
          What I Do
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', lg: 'calc(25% - 24px)' },
                minWidth: '280px',
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(16, 107, 143, 0.2)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center' }}>
                {service.icon}
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}