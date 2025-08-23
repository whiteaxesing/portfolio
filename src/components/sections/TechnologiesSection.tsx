'use client';
import { Container, Typography, Box } from '@mui/material';
import { technologies } from '@/data/homeData';

export default function TechnologiesSection() {
  return (
    <Box sx={{ py: 8, background: '#FEFEFE' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'text.primary', mb: 6 }}>
          Technologies
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(6, 1fr)',
            },
            gap: 3,
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          {technologies.map((tech) => (
            <Box
              key={tech}
              sx={{
                background: 'linear-gradient(0deg, #106B8F 0%, #002336 100%)',
                boxShadow: '0px 0px 44px 0px rgba(16, 107, 143, 0.4), 0px -4px 24px 0px rgba(16, 107, 143, 0.3) inset',
                filter: 'drop-shadow(0px 0px 8px rgba(16, 107, 143, 0.2))',
                borderRadius: '16px',
                padding: '20px 16px',
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: '0px 8px 56px 0px rgba(16, 107, 143, 0.6), 0px -4px 24px 0px rgba(16, 107, 143, 0.4) inset',
                  filter: 'drop-shadow(0px 4px 12px rgba(16, 107, 143, 0.3))',
                },
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}