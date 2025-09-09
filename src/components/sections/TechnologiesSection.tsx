'use client';
import { Container, Typography, Box } from '@mui/material';
import { technologies } from '@/data/homeData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TechnologiesSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <Box sx={{ py: 8, background: '#FEFEFE' }}>
      <Container maxWidth="lg">
        <Typography
          ref={titleRef}
          variant="h3"
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
          Crafting with Modern Technologies
        </Typography>
        <Box
          ref={gridRef}
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
          {technologies.map((tech, index) => (
            <Box
              key={tech}
              sx={{
                background: 'linear-gradient(0deg, #106B8F 0%, #002336 100%)',
                boxShadow:
                  '0px 0px 44px 0px rgba(16, 107, 143, 0.4), 0px -4px 24px 0px rgba(16, 107, 143, 0.3) inset',
                filter: 'drop-shadow(0px 0px 8px rgba(16, 107, 143, 0.2))',
                borderRadius: '16px',
                padding: '20px 16px',
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                // Scroll animation properties
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: gridVisible ? `${index * 0.1}s` : '0s',
                // Hover effects
                '&:hover': {
                  transform: gridVisible
                    ? 'translateY(-4px) scale(1.02)'
                    : 'translateY(30px) scale(0.9)',
                  boxShadow:
                    '0px 8px 56px 0px rgba(16, 107, 143, 0.6), 0px -4px 24px 0px rgba(16, 107, 143, 0.4) inset',
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
