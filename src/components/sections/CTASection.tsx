'use client';
import { Container, Typography, Button, Box, IconButton, Divider } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-gonzalez-madrigal/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/whiteaxesing',
    icon: <GitHubIcon />,
  },
  {
    name: 'Email',
    url: 'mailto:franciscogm982@gmail.com',
    icon: <EmailIcon />,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/50686787558',
    icon: <WhatsAppIcon />,
  },
];

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-me' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export default function CTASection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.3);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.4);

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #106B8F, #002336)',
        color: 'white',
      }}
    >
      {/* CTA Content */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
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

      {/* Footer Content */}
      <Box sx={{ pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
              mb: 4,
              pt: { xs: 6, md: 8 },
            }}
          >
            {/* Brand Section */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '400px' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                Francisco González
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}
              >
                Full-Stack Software Engineer specializing in backend systems, database engineering,
                and software architecture.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      opacity: 0.8,
                      fontSize: '0.95rem',
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Social Links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Connect
              </Typography>
              <Box
                sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    sx={{
                      color: 'white',
                      background: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                fontSize: '0.875rem',
              }}
            >
              © 2026 Francisco González. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
