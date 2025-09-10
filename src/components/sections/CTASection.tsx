'use client';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTASection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.3);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.4);

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(45deg, #106B8F, #002336)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          ref={titleRef}
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          Let&apos;s Build Something Exceptional
        </Typography>
        <Typography
          ref={subtitleRef}
          variant="h6"
          sx={{
            mb: 4,
            opacity: subtitleVisible ? 0.9 : 0,
            transform: subtitleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.2s',
          }}
        >
          I collaborate with teams to design and deliver software solutions that make an impact.
        </Typography>
        <Box
          ref={buttonRef}
          sx={{
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.4s',
          }}
        >
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            size="large"
            sx={{
              background: 'rgba(254, 254, 254, 0.15)',
                  border: '2px solid rgba(254, 254, 254, 0.3)',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: '50px',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              },
            }}
          >
            Innovation Starts With a Conversation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
