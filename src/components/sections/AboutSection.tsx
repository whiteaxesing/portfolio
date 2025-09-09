'use client';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const [imageRef, imageVisible] = useScrollAnimation(0.3);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [textRef, textVisible] = useScrollAnimation(0.2);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.4);

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
          <Box
            ref={imageRef}
            sx={{
              flex: { md: '0 0 40%' },
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
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
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              ref={titleRef}
              variant="h2"
              gutterBottom
              sx={{
                color: 'text.primary',
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              About Me
            </Typography>
            <Box
              ref={textRef}
              sx={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: '0.2s',
              }}
            >
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                I have 4+ years of experience in software engineering, driving key platform
                migrations and optimizing complex systems for companies like Home Depot and leading
                financial institutions. My focus is on building high-performance, scalable, and
                maintainable software.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                I’m passionate about software architecture and aspire to design systems that evolve
                seamlessly with business needs.
              </Typography>
            </Box>
            <Box
              ref={buttonRef}
              sx={{
                mt: 2,
                opacity: buttonVisible ? 1 : 0,
                transform: buttonVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: '0.4s',
              }}
            >
              <Button
                component={Link}
                href="/about-me"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Learn More About Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
