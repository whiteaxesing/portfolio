'use client';
import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { companies } from '@/data/homeData';

export default function CompaniesSection() {
  return (
    <Box sx={{ py: 6, background: '#FEFEFE', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{ color: 'text.primary', mb: 4 }}
        >
          Brands I&apos;ve Collaborated With
        </Typography>

        <Box
          sx={{
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: 'scroll 20s linear infinite',
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
