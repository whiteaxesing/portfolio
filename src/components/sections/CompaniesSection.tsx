'use client';
import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { companies } from '@/data/homeData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CompaniesSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [carouselRef, carouselVisible] = useScrollAnimation(0.1);

  return (
    <Box sx={{ py: 6 , pb: 12, background: '#FEFEFE', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography
          ref={titleRef}
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{
            color: 'text.primary',
            mb: 4,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          I&apos;ve Had the Opportunity to Work With
        </Typography>

        <Box
          ref={carouselRef}
          sx={{
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            opacity: carouselVisible ? 1 : 0,
            transform: carouselVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.3s',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: carouselVisible ? 'scroll 20s linear infinite' : 'none',
              '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {companies.map((company, index) => (
              <Box
                key={`a-${index}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '200px',
                  justifyContent: 'center',
                  filter: 'grayscale(100%) opacity(0.6)',
                  px: 2,
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%) opacity(1)',
                  },
                }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ))}

            {companies.map((company, index) => (
              <Box
                key={`b-${index}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '200px',
                  justifyContent: 'center',
                  filter: 'grayscale(100%) opacity(0.6)',
                  px: 2,
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%) opacity(1)',
                  },
                }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
