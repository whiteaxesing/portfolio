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
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Build Software',
    description:
      'Full-stack applications that work seamlessly. From web to mobile, from idea to reality.',
  },
  {
    icon: <DatabaseIcon sx={{ fontSize: 40 }} />,
    title: 'Optimize Performance',
    description:
      'Make your systems faster. SQL optimization that transforms 30-second queries into milliseconds.',
  },
  {
    icon: <MigrationIcon sx={{ fontSize: 40 }} />,
    title: 'Modernize Systems',
    description:
      'Transform legacy platforms. Reduce costs, improve efficiency, future-proof your technology.',
  },
  {
    icon: <ApiIcon sx={{ fontSize: 40 }} />,
    title: 'Connect Everything',
    description:
      'APIs that just work. Secure integrations that automate your workflow and scale with your business.',
  },
  {
    icon: <DevOpsIcon sx={{ fontSize: 40 }} />,
    title: 'Deploy with Confidence',
    description:
      'From code to cloud. Automated pipelines that deliver your software reliably, every time.',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: 'Guide Your Team',
    description:
      'Technical expertise when you need it. Architecture reviews, code guidance, problem solving.',
  },
];

export default function ServicesSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <Box sx={{ py: 6, background: '#FEFEFE' }}>
      <Container maxWidth="lg">
        <Typography
          ref={titleRef}
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{
            color: 'text.primary',
            mb: 6,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          What I Do
        </Typography>

        <Box
          ref={cardsRef}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', lg: 'calc(25% - 24px)' },
                minWidth: '280px',
                textAlign: 'center',
                p: 3,
                borderRadius: 4,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: cardsVisible ? `${index * 0.15}s` : '0s',
                '&:hover': {
                  transform: cardsVisible ? 'translateY(-8px)' : 'translateY(30px)',
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
