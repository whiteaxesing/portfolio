'use client';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <Box sx={{ py: 8, background: '#FEFEFE' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
          }}
        >
          <Box sx={{ flex: { md: '0 0 40%' } }}>
            <Avatar
              src="images/profile.png"
              sx={{
                width: 300,
                height: 300,
                background: 'linear-gradient(45deg, #106B8F, #8EC005)',
                fontSize: '6rem',
                fontWeight: 'bold',
                mx: 'auto',
                boxShadow: '0 10px 30px rgba(16, 107, 143, 0.3)',
              }}
            ></Avatar>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" gutterBottom sx={{ color: 'text.primary' }}>
              About Me
            </Typography>
            <Typography variant="h6" color="text.secondary">
              With 4+ years of experience in software engineering, I have led critical
              migrations—such as moving casino platforms from one backend to another—and optimized
              complex databases for companies like Home Depot and various financial institutions. I
              focus on building high-performance, scalable, and maintainable systems.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Passionate about software architecture, aiming to grow into a software architect role,
              designing systems that evolve seamlessly with business needs.
            </Typography>
            <Button
              component={Link}
              href="/about"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 2 }}
            >
              Learn More About Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
