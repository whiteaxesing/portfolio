'use client';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function CTASection() {
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
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Have a Project in Mind?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Let&apos;s talk about how I can help you take it to the next level
        </Typography>
        <Button
          component={Link}
          href="/contact"
          variant="outlined"
          size="large"
          sx={{
            border: '2px solid white',
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
          Start Conversation
        </Button>
      </Container>
    </Box>
  );
}