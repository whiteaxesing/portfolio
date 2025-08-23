// src/components/sections/HeroSection.tsx
'use client';
import { Container, Typography, Button, Box } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #106B8F, #002336)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '@media (max-width: 480px)': {
                  fontSize: '6rem',
                }
              }}
            >
              Hi, I&apos;m
            </Typography>
            <Typography 
              variant="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: '#8EC005', 
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '@media (max-width: 480px)': {
                  fontSize: '4.5rem',
                }
              }}
            >
              Francisco
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                fontWeight: 700, 
                color: '#8EC005', 
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                '@media (max-width: 480px)': {
                  fontSize: '4.5rem',
                }
              }}
            >
              González
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 400, 
                mb: 4, 
                opacity: 0.95,
                '@media (max-width: 480px)': {
                  fontSize: '1.5rem',
                  px: 2,
                }
              }}
            >
              Full-Stack Software Engineer specialized in microservices architecture, 
              database performance optimization, and platform migrations that deliver 
              measurable business impact
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/portfolio"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: 'rgba(254, 254, 254, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(254, 254, 254, 0.3)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  '&:hover': {
                    background: 'rgba(254, 254, 254, 0.25)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  },
                }}
              >
                View My Work
              </Button>
              
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                size="large"
                sx={{
                  border: '2px solid rgba(254, 254, 254, 0.3)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: 'rgba(254, 254, 254, 0.15)',
                    borderColor: 'rgba(254, 254, 254, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Let&apos;s Work Together
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </Box>
  );
}